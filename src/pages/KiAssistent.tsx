import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from 'react'
import { ArrowRight, Bot, ChevronDown, LoaderCircle, MessageCircle, Send, ShieldCheck, Sparkles } from 'lucide-react'

import { usePageMetadata } from '../hooks/usePageMetadata'
import { STATIC_ROUTE_METADATA } from '../lib/routeSeo'
import { createWhatsAppUrl, trackWhatsAppConversion } from '../lib/whatsapp'
import Footer from '../sections/Footer'
import Navigation from '../sections/Navigation'

type ChatMessage = {
  id: number
  role: 'assistant' | 'user'
  text: string
  showWhatsAppCta?: boolean
}

type AiQuota = {
  used: number
  startedAt: number | null
}

type ChatFaqItem = {
  question: string
  answer: string
}

const welcomeMessage: ChatMessage = {
  id: 0,
  role: 'assistant',
  text: 'Hallo! 👋 Du hast 3 KI-Fragen für die nächsten 7 Stunden. Frag mich einfach, was du möchtest.',
}

const quickStarts = [
  'Ich suche ein Ersatzteil',
  'Welches Teil passt zu meinem Fahrzeug?',
  'Motoröl & Wartung',
  'OEM- oder Teilenummer prüfen',
]

const DEMO_REPLY_DELAY_MS = 1000
const API_TIMEOUT_MS = 15000
const MAX_AI_QUESTIONS = 3
const AI_WINDOW_MS = 7 * 60 * 60 * 1000
const AI_QUOTA_STORAGE_KEY = 'teilepilot24_ki_quota'
const EMPTY_QUOTA: AiQuota = { used: 0, startedAt: null }
const apiErrorReply = 'Der KI-Assistent ist gerade nicht erreichbar. Du kannst dein Anliegen direkt über WhatsApp an TeilePilot24 senden.'
const limitReply = 'Deine 3 KI-Fragen für diesen Zeitraum sind aufgebraucht. In 7 Stunden stehen dir wieder neue Fragen zur Verfügung. Für Fahrzeug- und Teilefragen kannst du TeilePilot24 direkt über WhatsApp kontaktieren.'
const assistantWhatsAppUrl = createWhatsAppUrl(
  'Hallo TeilePilot24, ich komme vom KI-Assistenten und benötige Hilfe bei meinem Fahrzeug bzw. Ersatzteil.',
)

function currentTimeMs() {
  return Date.now()
}

function normalizeQuota(value: unknown, now: number): AiQuota {
  if (!value || typeof value !== 'object' || !('used' in value) || !('startedAt' in value)) return EMPTY_QUOTA
  const { used, startedAt } = value
  if (!Number.isInteger(used) || typeof used !== 'number' || used < 0 || used > MAX_AI_QUESTIONS) return EMPTY_QUOTA
  if (typeof startedAt !== 'number' || !Number.isFinite(startedAt) || startedAt > now || now - startedAt >= AI_WINDOW_MS) return EMPTY_QUOTA
  return { used, startedAt }
}

function readAiQuota(now: number): AiQuota | null {
  try {
    const stored = window.localStorage.getItem(AI_QUOTA_STORAGE_KEY)
    return stored ? normalizeQuota(JSON.parse(stored) as unknown, now) : EMPTY_QUOTA
  } catch {
    return null
  }
}

function saveAiQuota(quota: AiQuota) {
  try {
    window.localStorage.setItem(AI_QUOTA_STORAGE_KEY, JSON.stringify(quota))
  } catch {
    // The in-memory quota still limits this page view if storage is unavailable.
  }
}

const chatFaqItems: ChatFaqItem[] = [
  { question: 'Welches Motoröl braucht mein Auto?', answer: 'Das richtige Motoröl hängt von Motor, Baujahr und Herstellerfreigabe ab. Nur die Viskosität wie 5W-30 reicht für eine sichere Auswahl nicht aus. Für eine genaue Prüfung sind die Fahrzeugdaten entscheidend.' },
  { question: 'Wie finde ich die richtige OEM-Nummer?', answer: 'Die OEM-Nummer ist die Original-Teilenummer des Fahrzeugherstellers. Sie kann auf dem alten Bauteil, in Herstellerunterlagen oder durch eine genaue Fahrzeugprüfung ermittelt werden. TeilePilot24 kann die passende Nummer anhand deiner Fahrzeugdaten prüfen.' },
  { question: 'Was ist eine VIN?', answer: 'Die VIN (Fahrzeug-Identifizierungsnummer) ist eine 17-stellige Nummer, mit der ein Fahrzeug eindeutig identifiziert werden kann. Sie hilft bei der genauen Zuordnung von Ersatzteilen und ist unter anderem im Fahrzeugschein zu finden.' },
  { question: 'Welche Bremsbeläge passen zu meinem Fahrzeug?', answer: 'Passende Bremsbeläge hängen unter anderem von Modell, Baujahr, Achse und Bremsanlage ab. Ähnliche Fahrzeuge können verschiedene Ausführungen haben. Für eine sichere Zuordnung sollten die Fahrzeugdaten und gegebenenfalls der PR-Code geprüft werden.' },
  { question: 'Was bedeuten HSN und TSN?', answer: 'HSN und TSN sind Schlüsselnummern im Fahrzeugschein, die Hersteller und Fahrzeugtyp eingrenzen. Sie helfen bei der Teilesuche, reichen aber bei manchen Ausstattungsvarianten allein nicht für eine sichere Zuordnung.' },
  { question: 'Was ist ein PR-Code?', answer: 'Ein PR-Code beschreibt bei Fahrzeugen des VW-Konzerns bestimmte Ausstattungsmerkmale, etwa Varianten der Bremsanlage. Er kann bei der Auswahl passender Ersatzteile wichtig sein. Die genaue Zuordnung sollte mit den übrigen Fahrzeugdaten abgeglichen werden.' },
  { question: 'Wie finde ich die richtige Autobatterie?', answer: 'Wichtig sind unter anderem Maße, Kapazität, Polanordnung und die für das Fahrzeug vorgesehene Batterietechnologie. Bei Start-Stopp-Systemen können zusätzliche Vorgaben gelten. Die Fahrzeugdaten helfen bei der richtigen Auswahl.' },
  { question: 'Warum passt nicht jedes Ersatzteil trotz gleichem Fahrzeugmodell?', answer: 'Innerhalb eines Modells können Motor, Baujahr, Ausstattung und Produktionszeitraum unterschiedliche Teile erfordern. Darum sollte die Teilenummer mit den konkreten Fahrzeugdaten abgeglichen werden.' },
  { question: 'Wie prüft TeilePilot24 passende Ersatzteile?', answer: 'TeilePilot24 gleicht deine Fahrzeugangaben und das gesuchte Teil persönlich ab. VIN, Fahrzeugschein oder eine vorhandene OEM-Nummer können bei der Zuordnung helfen. Erst danach erfolgt ein konkretes Angebot.' },
  { question: 'Kann ich meinen Fahrzeugschein per WhatsApp senden?', answer: 'Ja, du kannst den Fahrzeugschein für eine Teileanfrage per WhatsApp an TeilePilot24 senden. Nicht benötigte persönliche Angaben kannst du abdecken; die für die Prüfung erforderlichen Fahrzeugdaten sollten lesbar bleiben.' },
]

const faqItems = [
  {
    question: 'Kann die KI das passende Ersatzteil eindeutig bestimmen?',
    answer: 'Nein. Eine erste Einschätzung ersetzt keine verbindliche Teilezuordnung. Dafür prüft TeilePilot24 deine Fahrzeugdaten persönlich.',
  },
  {
    question: 'Kann ich meine VIN eingeben?',
    answer: 'Aus einer VIN allein kann der Assistent Fahrzeug- oder Teiledaten nicht verlässlich bestätigen. Für eine konkrete Teileanfrage kannst du die VIN oder den Fahrzeugschein über WhatsApp an TeilePilot24 senden.',
  },
  {
    question: 'Kann der Assistent auch bei Motoröl helfen?',
    answer: 'Der Assistent kann Fragen zu Motoröl und Wartung einordnen. Die richtige Ölfreigabe hängt vom Fahrzeug ab und sollte vor der Bestellung geprüft werden.',
  },
  {
    question: 'Wie bekomme ich ein konkretes Angebot?',
    answer: 'Sende Fahrzeugschein oder VIN und das gesuchte Teil per WhatsApp. TeilePilot24 prüft die Angaben persönlich und erstellt ein Angebot.',
  },
]

async function requestAiAnswer(message: string, signal: AbortSignal): Promise<string> {
  const response = await fetch('/api/ki-assistent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
    signal,
  })
  if (!response.ok) throw new Error('KI request failed')

  const payload: unknown = await response.json()
  if (!payload || typeof payload !== 'object' || !('answer' in payload) || typeof payload.answer !== 'string' || !payload.answer.trim()) {
    throw new Error('Invalid KI response')
  }
  return payload.answer.trim()
}

export default function KiAssistent() {
  usePageMetadata(STATIC_ROUTE_METADATA['/ki-assistent'])

  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage])
  const [draft, setDraft] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isFaqOpen, setIsFaqOpen] = useState(false)
  const [quota, setQuota] = useState<AiQuota>(EMPTY_QUOTA)
  const nextMessageId = useRef(1)
  const messageListRef = useRef<HTMLDivElement>(null)
  const pendingReplyRef = useRef(false)
  const replyTimerRef = useRef<number | null>(null)
  const requestAbortRef = useRef<AbortController | null>(null)
  const mountedRef = useRef(true)
  // UX-only limit; direct API requests still need a server-side rate limit.
  const quotaRef = useRef<AiQuota>(EMPTY_QUOTA)

  function updateQuota(nextQuota: AiQuota) {
    quotaRef.current = nextQuota
    setQuota(nextQuota)
    saveAiQuota(nextQuota)
  }

  useEffect(() => {
    if (messages.length > 1 && messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight
    }
  }, [messages, isTyping])

  useEffect(() => {
    mountedRef.current = true
    const initialQuotaFrame = window.requestAnimationFrame(() => {
      const storedQuota = readAiQuota(Date.now())
      if (storedQuota) {
        quotaRef.current = storedQuota
        setQuota(storedQuota)
      }
    })

    const syncQuota = (event: StorageEvent) => {
      if (event.key !== AI_QUOTA_STORAGE_KEY) return
      const latest = readAiQuota(Date.now())
      if (latest) {
        quotaRef.current = latest
        setQuota(latest)
      }
    }
    window.addEventListener('storage', syncQuota)
    return () => {
      mountedRef.current = false
      window.cancelAnimationFrame(initialQuotaFrame)
      window.removeEventListener('storage', syncQuota)
      if (replyTimerRef.current !== null) window.clearTimeout(replyTimerRef.current)
      requestAbortRef.current?.abort()
    }
  }, [])

  useEffect(() => {
    if (quota.startedAt === null) return
    const remainingMs = AI_WINDOW_MS - (Date.now() - quota.startedAt)
    const timer = window.setTimeout(() => {
      const refreshedQuota = readAiQuota(Date.now()) ?? normalizeQuota(quotaRef.current, Date.now())
      updateQuota(refreshedQuota)
    }, Math.max(0, remainingMs))
    return () => window.clearTimeout(timer)
  }, [quota.startedAt])

  function finishReply(reply: string, showWhatsAppCta: boolean) {
    if (!mountedRef.current) return
    setMessages((current) => [...current, {
      id: nextMessageId.current++,
      role: 'assistant',
      text: reply,
      showWhatsAppCta,
    }])
    setIsTyping(false)
    pendingReplyRef.current = false
    replyTimerRef.current = null
  }

  function startReply(text: string) {
    const cleanText = text.trim()
    if (pendingReplyRef.current || !cleanText) return false

    // The ref blocks a second submit before React renders the disabled button.
    pendingReplyRef.current = true
    const userMessage: ChatMessage = { id: nextMessageId.current++, role: 'user', text: cleanText }
    setMessages((current) => [...current, userMessage])
    setIsTyping(true)

    const now = currentTimeMs()
    const currentQuota = readAiQuota(now) ?? normalizeQuota(quotaRef.current, now)
    if (currentQuota.used >= MAX_AI_QUESTIONS) {
      updateQuota(currentQuota)
      finishReply(limitReply, true)
      return true
    }

    // Start the seven-hour window on the first real API attempt, even if it fails.
    const activeQuota = currentQuota.startedAt === null ? { ...currentQuota, startedAt: now } : currentQuota
    updateQuota(activeQuota)

    const controller = new AbortController()
    requestAbortRef.current = controller
    const timeout = window.setTimeout(() => controller.abort(), API_TIMEOUT_MS)

    void requestAiAnswer(cleanText, controller.signal)
      .then((answer) => {
        if (!mountedRef.current) return
        const latestQuota = readAiQuota(Date.now()) ?? quotaRef.current
        const nextQuota = {
          used: Math.min(MAX_AI_QUESTIONS, latestQuota.used + 1),
          startedAt: latestQuota.startedAt ?? Date.now(),
        }
        updateQuota(nextQuota)
        finishReply(answer, true)
      })
      .catch(() => finishReply(apiErrorReply, true))
      .finally(() => {
        window.clearTimeout(timeout)
        if (requestAbortRef.current === controller) requestAbortRef.current = null
      })

    return true
  }

  function startFaqReply(item: ChatFaqItem) {
    if (pendingReplyRef.current) return
    pendingReplyRef.current = true
    setIsFaqOpen(false)
    setMessages((current) => [...current, { id: nextMessageId.current++, role: 'user', text: item.question }])
    setIsTyping(true)
    replyTimerRef.current = window.setTimeout(() => finishReply(item.answer, false), DEMO_REPLY_DELAY_MS)
  }

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const text = draft.trim()
    if (startReply(text)) setDraft('')
  }

  function handleInputKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
      event.preventDefault()
      if (!pendingReplyRef.current) event.currentTarget.form?.requestSubmit()
    }
  }

  return (
    <>
      <Navigation transparent={false} />
      <main className="bg-silver/50 pt-[72px] text-midnight">
        <section className="mx-auto max-w-[980px] md:px-8 md:py-10 lg:py-12" aria-labelledby="assistant-title">
          <div className="flex h-[calc(100dvh-72px)] min-h-[620px] flex-col overflow-hidden bg-white shadow-card md:h-[720px] md:max-h-[calc(100dvh-152px)] md:min-h-[620px] md:border md:border-silver">
            <header className="border-b border-silver bg-midnight px-5 pb-5 pt-6 text-white sm:px-7 md:px-9 md:py-7">
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/65">
                <span className="inline-flex h-8 w-8 items-center justify-center bg-electric text-white" aria-hidden="true">
                  <Sparkles size={17} />
                </span>
                TeilePilot24 <span className="text-white/35">/</span> KI-Assistent
              </div>
              <h1 id="assistant-title" className="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
                TeilePilot KI-Assistent
              </h1>
              <p className="mt-3 inline-flex border border-white/20 px-3 py-1.5 text-xs font-semibold text-white/90 sm:text-sm" aria-live="polite">
                KI-Fragen: {MAX_AI_QUESTIONS - quota.used} von {MAX_AI_QUESTIONS} verfügbar
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
                Fragen zu Ersatzteilen, Fahrzeugen oder Wartung? Unser digitaler Assistent hilft dir bei der ersten Einschätzung.
              </p>
              <p className="mt-3 flex max-w-2xl items-start gap-2 text-xs leading-relaxed text-white/60 sm:text-sm">
                <ShieldCheck size={16} className="mt-0.5 shrink-0 text-electric" aria-hidden="true" />
                Für eine verbindliche Teilezuordnung prüfen wir dein Fahrzeug anschließend persönlich.
              </p>
            </header>

            <div
              ref={messageListRef}
              role="log"
              aria-label="Chatverlauf"
              aria-live="polite"
              aria-relevant="additions"
              className="min-h-0 flex-1 space-y-5 overflow-y-auto bg-[#f8f9fc] px-5 py-6 sm:px-7 md:px-9"
            >
              {messages.map((message) => (
                <div key={message.id} className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}>
                  {message.role === 'assistant' && (
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-midnight text-white" aria-hidden="true">
                      <Bot size={19} />
                    </span>
                  )}
                  <div className={`max-w-[min(86%,620px)] px-4 py-3.5 text-sm leading-relaxed shadow-sm sm:text-base ${message.role === 'user' ? 'bg-electric text-white' : 'border border-silver bg-white text-midnight'}`}>
                    <span className="sr-only">{message.role === 'user' ? 'Deine Nachricht: ' : 'TeilePilot Assistent: '}</span>
                    <p className="whitespace-pre-line">
                      {message.id === 0 && quota.used > 0
                        ? `Hallo! 👋 Du hast noch ${MAX_AI_QUESTIONS - quota.used} von ${MAX_AI_QUESTIONS} KI-Fragen in diesem Zeitraum.`
                        : message.text}
                    </p>
                    {message.id === 0 && (
                      <p className="mt-2 text-xs leading-relaxed text-midnight/60">
                        Die häufig gestellten Fragen unten sind kostenlos und verbrauchen kein KI-Kontingent.
                      </p>
                    )}
                    {message.showWhatsAppCta && (
                      <a
                        href={assistantWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={trackWhatsAppConversion}
                        className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 bg-whatsapp px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-whatsapp-dark sm:w-auto"
                      >
                        <MessageCircle size={17} aria-hidden="true" />
                        Passendes Teil per WhatsApp prüfen lassen
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-midnight text-white" aria-hidden="true">
                    <Bot size={19} />
                  </span>
                  <div className="inline-flex min-h-12 items-center gap-3 border border-silver bg-white px-4 py-3 text-sm text-midnight/70 shadow-sm sm:text-base">
                    <span>TeilePilot denkt …</span>
                    <span className="inline-flex items-center gap-1" aria-hidden="true">
                      {[0, 1, 2].map((dot) => (
                        <span
                          key={dot}
                          className="h-1.5 w-1.5 rounded-full bg-electric motion-safe:animate-bounce"
                          style={{ animationDelay: `${dot * 120}ms` }}
                        />
                      ))}
                    </span>
                  </div>
                </div>
              )}

              {messages.length === 1 && (
                <div className="pl-0 sm:pl-12">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-midnight/45">Schnell starten</p>
                  <div className="flex flex-wrap gap-2">
                    {quickStarts.map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => startReply(prompt)}
                        className="min-h-10 border border-electric/25 bg-white px-3 py-2 text-left text-xs font-medium text-electric transition-colors hover:border-electric hover:bg-electric/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric sm:text-sm"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-silver bg-white px-5 py-4 sm:px-7 md:px-9">
              <button
                type="button"
                onClick={() => setIsFaqOpen((open) => !open)}
                aria-expanded={isFaqOpen}
                aria-controls="assistant-chat-faq"
                className="mb-3 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-electric hover:text-electric-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
              >
                Häufig gestellte Fragen
                <ChevronDown size={17} className={`transition-transform ${isFaqOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              {isFaqOpen && (
                <div id="assistant-chat-faq" className="mb-4 grid max-h-52 grid-cols-1 gap-2 overflow-y-auto border border-silver bg-[#f8f9fc] p-2 sm:grid-cols-2" aria-label="Kostenlose häufig gestellte Fragen">
                  {chatFaqItems.map((item) => (
                    <button
                      key={item.question}
                      type="button"
                      disabled={isTyping}
                      onClick={() => startFaqReply(item)}
                      className="min-h-11 border border-silver bg-white px-3 py-2 text-left text-xs font-medium leading-snug text-midnight transition-colors hover:border-electric hover:text-electric disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm"
                    >
                      {item.question}
                    </button>
                  ))}
                </div>
              )}
              <form onSubmit={sendMessage} className="flex items-end gap-2" aria-label="Frage eingeben">
                <label htmlFor="assistant-question" className="sr-only">Deine Frage zum Fahrzeug oder Ersatzteil</label>
                <textarea
                  id="assistant-question"
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  onKeyDown={handleInputKeyDown}
                  maxLength={600}
                  rows={2}
                  placeholder="Stell deine Frage zum Fahrzeug oder Ersatzteil …"
                  className="min-h-12 w-full resize-none border border-silver bg-white px-3 py-3 text-sm text-midnight placeholder:text-midnight/40 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/15 sm:text-base"
                />
                <button
                  type="submit"
                  disabled={!draft.trim() || isTyping}
                  className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-electric px-4 text-sm font-semibold text-white transition-colors hover:bg-electric-dark disabled:cursor-not-allowed disabled:opacity-45 sm:px-5"
                  aria-label={isTyping ? 'Antwort wird vorbereitet' : 'Nachricht senden'}
                >
                  {isTyping ? <LoaderCircle size={18} className="motion-safe:animate-spin" aria-hidden="true" /> : <Send size={18} aria-hidden="true" />}
                  <span className="hidden sm:inline">{isTyping ? 'Warten …' : 'Senden'}</span>
                </button>
              </form>
              <p className="mt-2 text-[11px] leading-relaxed text-midnight/55 sm:text-xs">
                Der KI-Assistent kann Fehler machen. Für die verbindliche Prüfung von Ersatzteilen benötigen wir je nach Fahrzeug VIN, OEM-Nummer oder Fahrzeugschein.
              </p>
              <a
                href={assistantWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppConversion}
                className="mt-3 inline-flex min-h-11 w-full items-center justify-center gap-2 bg-whatsapp px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-whatsapp-dark md:hidden"
              >
                <MessageCircle size={17} aria-hidden="true" />
                Passendes Teil per WhatsApp prüfen lassen
              </a>
            </div>
          </div>
        </section>

        <section aria-labelledby="assistant-info-title" className="bg-white px-5 py-14 md:px-10 md:py-20">
          <div className="mx-auto max-w-[980px]">
            <p className="text-xs font-semibold uppercase tracking-wider text-electric">Erste Orientierung</p>
            <h2 id="assistant-info-title" className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-midnight md:text-4xl">
              KI-Assistent für Autoteile: Fragen stellen, Angaben besser einordnen
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-midnight/70">
              Ob du ein Ersatzteil suchst oder eine technische Angabe verstehen möchtest: Der Assistent bietet eine erste Orientierung. Ein konkretes Ersatzteil-Angebot entsteht erst nach persönlicher Prüfung der Fahrzeugdaten.
            </p>
            <div className="mt-9 grid gap-6 md:grid-cols-2 md:gap-x-10 md:gap-y-9">
              <article>
                <h3 className="text-lg font-semibold text-midnight">Ersatzteile zum Fahrzeug finden</h3>
                <p className="mt-2 text-sm leading-relaxed text-midnight/65 md:text-base">Modellname und Baujahr reichen nicht immer aus. Motor, Ausstattung und Produktionszeitraum können die passende Teilevariante beeinflussen.</p>
              </article>
              <article>
                <h3 className="text-lg font-semibold text-midnight">VIN oder Fahrzeugschein prüfen</h3>
                <p className="mt-2 text-sm leading-relaxed text-midnight/65 md:text-base">Die VIN und die technischen Angaben im Fahrzeugschein helfen dabei, ein Fahrzeug genauer einzugrenzen. Für eine verbindliche Zuordnung prüft unser Team diese Daten persönlich.</p>
              </article>
              <article>
                <h3 className="text-lg font-semibold text-midnight">OEM- und Teilenummern verstehen</h3>
                <p className="mt-2 text-sm leading-relaxed text-midnight/65 md:text-base">Eine Nummer auf dem alten Teil ist ein wertvoller Hinweis. Sie sollte mit Fahrzeug, Einbauposition und möglichen Varianten abgeglichen werden.</p>
              </article>
              <article>
                <h3 className="text-lg font-semibold text-midnight">Motoröl und Wartung</h3>
                <p className="mt-2 text-sm leading-relaxed text-midnight/65 md:text-base">Bei Ölfragen zählt neben der Viskosität vor allem die Freigabe des Fahrzeugherstellers. Wartungsintervalle und Vorgaben können sich je nach Motor unterscheiden.</p>
              </article>
            </div>
            <div className="mt-10 border-l-4 border-electric bg-silver/45 p-5 md:p-6">
              <h3 className="text-lg font-semibold text-midnight">Warum die persönliche Teileprüfung wichtig bleibt</h3>
              <p className="mt-2 text-sm leading-relaxed text-midnight/70 md:text-base">Ähnliche Fahrzeuge können unterschiedliche Bremsen, Sensoren oder Anschlüsse haben. TeilePilot24 gleicht deine Angaben deshalb vor einem konkreten Angebot persönlich ab und fragt bei Unklarheiten nach.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="assistant-faq-title" className="bg-silver/45 px-5 py-14 md:px-10 md:py-20">
          <div className="mx-auto max-w-[980px]">
            <p className="text-xs font-semibold uppercase tracking-wider text-electric">Häufige Fragen</p>
            <h2 id="assistant-faq-title" className="mt-3 text-3xl font-semibold text-midnight md:text-4xl">Fragen zum KI-Assistenten</h2>
            <div className="mt-7 grid gap-3 md:grid-cols-2">
              {faqItems.map((item) => (
                <article key={item.question} className="border border-silver bg-white p-5 md:p-6">
                  <h3 className="text-base font-semibold text-midnight md:text-lg">{item.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-midnight/65 md:text-base">{item.answer}</p>
                </article>
              ))}
            </div>
            <a href={assistantWhatsAppUrl} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppConversion} className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-electric hover:text-electric-dark">
              Persönliche Teileprüfung per WhatsApp anfragen <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
