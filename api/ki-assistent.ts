import { z } from 'zod'

const MODEL = 'gpt-5.4-mini'
const MAX_BODY_BYTES = 4096
const MAX_OUTPUT_TOKENS = 220
const MAX_ANSWER_CHARS = 1200
const OPENAI_TIMEOUT_MS = 12000

const requestSchema = z.strictObject({
  message: z.string().trim().min(1).max(600),
})

const instructions = `Du bist der digitale TeilePilot24-Assistent. Antworte auf jede Nutzernachricht, auch auf Begrüßungen, Dank, allgemeine oder fachfremde Fragen. Beachte diese Regeln in der angegebenen Reihenfolge:
1. Antworte in der Sprache der Nutzernachricht kurz und hilfreich, möglichst in 2–5 kurzen Sätzen. Bei einer einfachen Begrüßung oder einem Dank reicht eine knappe natürliche Antwort. Reagiere auf Beleidigungen ruhig und professionell. Schreibe reinen Text ohne Markdown-Formatierung.
2. Beende deine Antwort nach der hilfreichen Auskunft. Stelle keine Rückfragen und biete keine weitere Unterhaltung im Chat an. Vermeide ausdrücklich Abschlüsse wie „Wenn du magst, kann ich …“, „Soll ich …?“ oder „Wie kann ich dir helfen?“ Erfinde keine Fakten, die du nicht sicher weißt.
3. Bei Fahrzeug-, Wartungs- und Ersatzteilfragen gib eine nützliche, soweit belastbare erste Orientierung. Garantiere keine Teilekompatibilität, Motoröl-Freigabe oder Spezifikation ohne ausreichende Fahrzeugdaten. Erfinde keine OEM- oder Teilenummern und leite aus einer VIN keine unbestätigten Fahrzeugdaten ab.
4. Wenn für eine genaue Fahrzeug- oder Teileprüfung weitere Angaben relevant sind, nenne sie kurz als Hinweis, zum Beispiel VIN, Fahrzeugschein, Motorcode, PR-Code oder OEM-Nummer. Bitte niemals darum, diese Daten hier im Chat zu nennen oder nachzureichen.
5. Eine verbindliche Teilezuordnung und ein konkretes Ersatzteil-Angebot erfolgen erst nach persönlicher Prüfung durch TeilePilot24. Wenn eine genaue Zuordnung nötig ist, muss der letzte Satz die persönliche Prüfung durch TeilePilot24 per WhatsApp empfehlen; danach folgt kein weiterer Satz. Bei fachfremden Fragen ist dieser Hinweis nicht nötig.
6. Bei sicherheitskritischen Problemen empfehle eine fachliche Prüfung statt einer definitiven Reparaturanleitung.
7. Erfinde keine Leistungen, Zusagen oder Garantien von TeilePilot24. Verwende keine aggressive Werbesprache.`

const unavailableMessage = 'Der KI-Assistent ist momentan nicht verfügbar.'

function json(body: object, status: number, extraHeaders?: Record<string, string>) {
  return Response.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store', ...extraHeaders },
  })
}

async function readLimitedJson(request: Request): Promise<unknown> {
  if (!request.body) throw new Error('Invalid body')

  const reader = request.body.getReader()
  const decoder = new TextDecoder('utf-8', { fatal: true })
  let text = ''
  let bytes = 0

  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      bytes += value.byteLength
      if (bytes > MAX_BODY_BYTES) {
        await reader.cancel()
        throw new Error('Body too large')
      }
      text += decoder.decode(value, { stream: true })
    }
    text += decoder.decode()
  } finally {
    reader.releaseLock()
  }

  return JSON.parse(text) as unknown
}

function extractAnswer(payload: unknown): string {
  if (!payload || typeof payload !== 'object' || !('output' in payload) || !Array.isArray(payload.output)) return ''

  const parts: string[] = []
  for (const item of payload.output) {
    if (!item || typeof item !== 'object' || item.type !== 'message' || !Array.isArray(item.content)) continue
    for (const content of item.content) {
      if (content?.type === 'output_text' && typeof content.text === 'string') parts.push(content.text)
    }
  }
  const answer = parts.join('\n').trim()
  // Small models may append a generic chat invitation despite the instructions.
  const withoutInvitation = answer
    .replace(/([.!?])\s+(?:Wenn|Falls) du (?:magst|möchtest|willst)\b[\s\S]*$/iu, '$1')
    .replace(/\n+\s*(?:Wenn|Falls) du (?:magst|möchtest|willst)\b[\s\S]*$/iu, '')
    .replace(/([.!?])\s+Wie kann ich dir helfen\?\s*$/iu, '$1')
    .replace(/([.!?])\s+(?:If you'd like|If you want|Let me know)\b[\s\S]*$/iu, '$1')
    .trim()
  return (withoutInvitation || answer).slice(0, MAX_ANSWER_CHARS)
}

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method !== 'POST') return json({ error: 'Methode nicht erlaubt.' }, 405, { Allow: 'POST' })
    if (request.headers.get('content-type')?.split(';')[0].trim().toLowerCase() !== 'application/json') {
      return json({ error: 'Ungültige Anfrage.' }, 400)
    }

    const contentLength = Number(request.headers.get('content-length'))
    if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
      return json({ error: 'Ungültige Anfrage.' }, 400)
    }

    let body: unknown
    try {
      body = await readLimitedJson(request)
    } catch {
      return json({ error: 'Ungültige Anfrage.' }, 400)
    }

    const parsed = requestSchema.safeParse(body)
    if (!parsed.success) return json({ error: 'Ungültige Anfrage.' }, 400)

    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) return json({ error: unavailableMessage }, 500)

    try {
      const upstream = await fetch('https://api.openai.com/v1/responses', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: MODEL,
          instructions,
          input: parsed.data.message,
          reasoning: { effort: 'none' },
          max_output_tokens: MAX_OUTPUT_TOKENS,
          store: false,
        }),
        signal: AbortSignal.timeout(OPENAI_TIMEOUT_MS),
      })

      if (!upstream.ok) return json({ error: unavailableMessage }, 500)

      const result: unknown = await upstream.json()
      const answer = extractAnswer(result)
      if (!answer) return json({ error: unavailableMessage }, 500)

      return json({ answer }, 200)
    } catch {
      return json({ error: unavailableMessage }, 500)
    }
  },
}
