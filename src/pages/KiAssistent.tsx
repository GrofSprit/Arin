import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from 'react'
import { ArrowRight, ArrowDown, ChevronDown, LoaderCircle, MessageCircle, Send, Sparkles, Volume2, VolumeX, X } from 'lucide-react'
import KiAvatar from '../components/KiAvatar'
import './KiAssistent.css'

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
  text: 'Hallo! 👋 Du hast 10 KI-Fragen für die nächsten 5 Stunden. Frag mich einfach, was du möchtest.',
}

const quickStarts = [
  'Ich suche ein Ersatzteil',
  'Welches Teil passt zu meinem Fahrzeug?',
  'Motoröl & Wartung',
  'OEM- oder Teilenummer prüfen',
]

const DEMO_REPLY_DELAY_MS = 1000
const API_TIMEOUT_MS = 15000
const MAX_AI_QUESTIONS = 10
const AI_WINDOW_MS = 5 * 60 * 60 * 1000
const AI_QUOTA_STORAGE_KEY = 'teilepilot24_ki_quota'
const EMPTY_QUOTA: AiQuota = { used: 0, startedAt: null }
const apiErrorReply = 'Der KI-Assistent ist gerade nicht erreichbar. Du kannst dein Anliegen direkt über WhatsApp an TeilePilot24 senden.'
const rateLimitReply = 'Du hast in kurzer Zeit zu viele Anfragen gesendet. Bitte versuche es später erneut oder kontaktiere TeilePilot24 direkt per WhatsApp.'
const limitReply = 'Deine 10 KI-Fragen für diesen Zeitraum sind aufgebraucht. In 5 Stunden stehen dir wieder neue Fragen zur Verfügung. Für Fahrzeug- und Teilefragen kannst du TeilePilot24 direkt über WhatsApp kontaktieren.'
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

class AiRateLimitError extends Error {}

async function requestAiAnswer(message: string, signal: AbortSignal): Promise<string> {
  const response = await fetch('/api/ki-assistent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
    signal,
  })
  if (response.status === 429) throw new AiRateLimitError('KI rate limit exceeded')
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
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [mobileFocus, setMobileFocus] = useState(false)
  const [showScrollDown, setShowScrollDown] = useState(false)
  const shellRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const soundRef = useRef(true)
  const audioRef = useRef<AudioContext | null>(null)
  const followMessagesRef = useRef(true)
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

  function prepareReplySound() {
    if (!soundRef.current) return
    try {
      audioRef.current ??= new AudioContext()
      void audioRef.current.resume().catch(() => {})
    } catch { /* Browser audio restrictions must not interrupt the chat. */ }
  }

  function toggleSound() {
    const enabled = !soundRef.current
    if (enabled) {
      try {
        audioRef.current ??= new AudioContext()
        void audioRef.current.resume().catch(() => {})
      } catch {
        return
      }
    }
    soundRef.current = enabled
    setSoundEnabled(enabled)
  }

  function playReplySound() {
    const context = audioRef.current
    if (!soundRef.current || !context || context.state !== 'running' || document.hidden) return
    try {
      const tone = context.createOscillator()
      const gain = context.createGain()
      tone.type = 'sine'
      tone.frequency.setValueAtTime(660, context.currentTime)
      tone.frequency.exponentialRampToValueAtTime(880, context.currentTime + 0.12)
      gain.gain.setValueAtTime(0, context.currentTime)
      gain.gain.linearRampToValueAtTime(0.045, context.currentTime + 0.015)
      gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.22)
      tone.connect(gain)
      gain.connect(context.destination)
      tone.start()
      tone.stop(context.currentTime + 0.24)
      tone.onended = () => { tone.disconnect(); gain.disconnect() }
    } catch { /* Audio must never interrupt the chat. */ }
  }

  useEffect(() => () => { void audioRef.current?.close().catch(() => {}) }, [])

  useEffect(() => {
    if (!mobileFocus) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    let frame = 0
    const update = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        if (window.innerWidth >= 640) {
          setMobileFocus(false)
          return
        }
        const viewport = window.visualViewport
        shellRef.current?.style.setProperty('--tp-viewport-height', `${viewport?.height ?? window.innerHeight}px`)
        shellRef.current?.style.setProperty('--tp-viewport-top', `${viewport?.offsetTop ?? 0}px`)
        if (followMessagesRef.current && messageListRef.current) messageListRef.current.scrollTop = messageListRef.current.scrollHeight
      })
    }
    update()
    window.visualViewport?.addEventListener('resize', update)
    window.visualViewport?.addEventListener('scroll', update)
    window.addEventListener('resize', update)
    const escape = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') { inputRef.current?.blur(); setMobileFocus(false) }
    }
    window.addEventListener('keydown', escape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.cancelAnimationFrame(frame)
      window.visualViewport?.removeEventListener('resize', update)
      window.visualViewport?.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      window.removeEventListener('keydown', escape)
    }
  }, [mobileFocus])

  useEffect(() => {
    if (messages.length > 1 && messageListRef.current && followMessagesRef.current) {
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
    playReplySound()
  }

  function startReply(text: string) {
    const cleanText = text.trim()
    if (pendingReplyRef.current || !cleanText) return false
    prepareReplySound()

    // The ref blocks a second submit before React renders the disabled button.
    pendingReplyRef.current = true
    followMessagesRef.current = true
    setIsFaqOpen(false)
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
      .catch((error: unknown) => finishReply(error instanceof AiRateLimitError ? rateLimitReply : apiErrorReply, true))
      .finally(() => {
        window.clearTimeout(timeout)
        if (requestAbortRef.current === controller) requestAbortRef.current = null
      })

    return true
  }

  function startFaqReply(item: ChatFaqItem) {
    if (pendingReplyRef.current) return
    prepareReplySound()
    pendingReplyRef.current = true
    followMessagesRef.current = true
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
      <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_#eaf0ff_0%,_#f8faff_50%,_#f7f9fc_100%)] pt-[72px] text-midnight">
        <section className="mx-auto max-w-[960px] px-3 pb-10 pt-5 sm:px-6 md:pt-8 lg:px-8" aria-labelledby="assistant-title">
          <div className="mb-6 text-center md:mb-8">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-electric">
              <Sparkles size={15} aria-hidden="true" /> TeilePilot24 KI-Assistent
            </p>
            <h1 id="assistant-title" className="mt-3 text-[32px] font-semibold leading-tight tracking-[-0.035em] sm:text-[38px] lg:text-[46px]">
              Dein Auto. Deine Frage.
            </h1>
            <p className="mx-auto mt-3 max-w-[640px] text-sm leading-relaxed text-midnight/65 sm:text-base">
              TeilePilot hilft dir weiter – von der ersten Frage bis zur persönlichen Teileprüfung.
            </p>
          </div>

          <div ref={shellRef} data-mobile-focus={mobileFocus} className="tp-chat-shell flex h-[calc(100dvh-235px)] min-h-[420px] flex-col overflow-hidden rounded-[24px] border border-[#e1e7f0] bg-white shadow-[0_18px_60px_rgba(40,63,128,0.10)] sm:h-[610px] lg:h-[580px]">
            <header className="tp-chat-header flex shrink-0 items-center gap-2 border-b border-[#e8edf4] bg-white px-3 py-2.5 sm:gap-3 sm:px-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#edf2ff]" aria-hidden="true">
                <KiAvatar thinking={isTyping} />
              </span>
              <div className="min-w-0 flex-1">
                <h2 className="text-sm font-semibold leading-tight sm:text-base">TeilePilot KI</h2>
                <p className="mt-1 truncate text-[11px] text-midnight/50">{isTyping ? 'Denkt gerade nach …' : 'Bereit für deine Frage'}</p>
              </div>
              <span className={`shrink-0 rounded-full bg-[#edf4ff] px-2.5 py-1.5 text-[11px] font-semibold text-electric ${mobileFocus ? 'hidden sm:inline-flex' : ''}`} aria-live="polite" aria-label={`${MAX_AI_QUESTIONS - quota.used} von ${MAX_AI_QUESTIONS} KI-Fragen verfügbar`}>
                {MAX_AI_QUESTIONS - quota.used}/{MAX_AI_QUESTIONS} <span className="ml-1 hidden sm:inline">Fragen</span>
              </span>
              <button type="button" onClick={toggleSound} aria-label={soundEnabled ? 'Antwortton ausschalten' : 'Antwortton einschalten'} aria-pressed={soundEnabled} title={soundEnabled ? 'Antwortton an' : 'Antwortton aus'} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-midnight/55 hover:bg-silver/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-electric">
                {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
              </button>
              {mobileFocus && <button type="button" onClick={() => { inputRef.current?.blur(); setMobileFocus(false) }} aria-label="Chat-Vollbild schließen" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-silver/40 text-midnight sm:hidden"><X size={19} /></button>}
            </header>

            <div className="relative min-h-0 flex-1">
            <div
              ref={messageListRef}
              role="log"
              aria-label="Chatverlauf"
              aria-live="polite"
              aria-relevant="additions"
              onScroll={(event) => {
                const list = event.currentTarget
                const nearBottom = list.scrollHeight - list.scrollTop - list.clientHeight < 64
                followMessagesRef.current = nearBottom
                setShowScrollDown(!nearBottom)
              }}
              className="tp-chat-scroll h-full space-y-5 overflow-y-auto bg-[#fbfcfe] px-3 py-5 sm:px-6 sm:py-6"
            >
              {messages.map((message) => (
                <div key={message.id} className={`tp-message flex items-start gap-2 sm:gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}>
                  {message.role === 'assistant' && (
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e9f0ff] text-electric" aria-hidden="true">
                      <KiAvatar />
                    </span>
                  )}
                  <div className={`min-w-0 max-w-[min(85%,660px)] rounded-2xl px-3.5 py-3 text-[15px] leading-relaxed sm:px-4 ${message.role === 'user' ? 'rounded-br-md bg-electric text-white' : 'rounded-bl-md border border-[#e6ebf2] bg-white text-midnight shadow-sm'}`}>
                    <span className="sr-only">{message.role === 'user' ? 'Deine Nachricht: ' : 'TeilePilot Assistent: '}</span>
                    <p className="whitespace-pre-line">
                      {message.id === 0 && quota.used > 0
                        ? `Hallo! 👋 Du hast noch ${MAX_AI_QUESTIONS - quota.used} von ${MAX_AI_QUESTIONS} KI-Fragen in diesem Zeitraum.`
                        : message.text}
                    </p>
                    {message.id === 0 && (
                      <p className="mt-2 text-xs leading-relaxed text-midnight/55">
                        Die häufig gestellten Fragen unten sind kostenlos und verbrauchen kein KI-Kontingent.
                      </p>
                    )}
                    {message.showWhatsAppCta && (
                      <a
                        href={assistantWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={trackWhatsAppConversion}
                        className="mt-4 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-lg bg-whatsapp px-3 py-2 text-center text-xs font-semibold text-white transition-colors hover:bg-whatsapp-dark sm:w-auto sm:text-sm"
                      >
                        <MessageCircle size={16} aria-hidden="true" />
                        Passendes Teil per WhatsApp prüfen lassen
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e9f0ff] text-electric" aria-hidden="true">
                    <KiAvatar thinking />
                  </span>
                  <div className="inline-flex min-h-11 items-center gap-3 rounded-2xl rounded-bl-md border border-[#e6ebf2] bg-white px-4 py-2.5 text-sm text-midnight/65 shadow-sm">
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
                <div className="pl-0 sm:pl-11">
                  <p className="mb-2 text-xs font-medium text-midnight/45">Oder starte mit einem Beispiel:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickStarts.map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        disabled={isTyping}
                        onClick={() => startReply(prompt)}
                        className="min-h-11 rounded-xl border border-[#dce5f4] bg-white px-3 py-2 text-left text-xs font-medium text-midnight/75 transition-colors hover:border-electric hover:text-electric disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric sm:text-sm"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                  <p className="mt-2 text-[11px] text-midnight/45">Beispiele verwenden eine KI-Frage.</p>
                </div>
              )}
            </div>
            {showScrollDown && !isFaqOpen && <button type="button" aria-label="Zu den neuesten Nachrichten" onClick={() => { followMessagesRef.current = true; messageListRef.current?.scrollTo({ top: messageListRef.current.scrollHeight }); setShowScrollDown(false) }} className="absolute bottom-3 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-silver bg-white text-electric shadow-lg"><ArrowDown size={19} /></button>}
            {isFaqOpen && (
              <div id="assistant-chat-faq" className="absolute inset-0 z-10 flex min-h-0 flex-col bg-[#f8faff]" role="region" aria-label="Kostenlose häufig gestellte Fragen">
                <div className="flex shrink-0 items-center justify-between gap-2 border-b border-silver px-4 py-2">
                  <div><h3 className="text-sm font-semibold">Häufige Fragen</h3><p className="text-xs text-midnight/55">Kostenlos · ohne KI-Kontingent</p></div>
                  <button type="button" aria-label="Häufige Fragen schließen" onClick={() => setIsFaqOpen(false)} className="flex h-11 w-11 items-center justify-center rounded-xl hover:bg-silver/50"><X size={18} /></button>
                </div>
                <div className="tp-chat-scroll min-h-0 flex-1 overflow-y-auto p-3">
                  <div className="grid gap-2 sm:grid-cols-2">
                    {chatFaqItems.map((item) => <button key={item.question} type="button" disabled={isTyping} onClick={() => startFaqReply(item)} className="flex min-h-12 items-center justify-between gap-3 rounded-xl border border-[#e1e7f0] bg-white px-3 py-3 text-left text-sm leading-snug hover:border-electric disabled:opacity-50">{item.question}<ArrowRight size={15} className="shrink-0 text-electric" /></button>)}
                  </div>
                </div>
              </div>
            )}
            </div>

            <div className="tp-composer-wrap shrink-0 border-t border-[#e8edf4] bg-white px-3 pb-2 pt-3 sm:px-5 sm:pb-3">
              <form onSubmit={sendMessage} className="tp-composer flex items-end gap-2 rounded-2xl border border-[#dce4ef] bg-white p-1.5 transition-shadow focus-within:border-electric" aria-label="Frage eingeben">
                <label htmlFor="assistant-question" className="sr-only">Deine Frage zum Fahrzeug oder Ersatzteil</label>
                <textarea
                  id="assistant-question"
                  ref={inputRef}
                  onFocus={() => { if (window.innerWidth < 640) setMobileFocus(true); setIsFaqOpen(false) }}
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  onKeyDown={handleInputKeyDown}
                  maxLength={600}
                  rows={2}
                  placeholder="Schreib deine Frage …"
                  className="min-h-11 min-w-0 w-full resize-none border-0 bg-transparent px-2.5 py-2 text-base text-midnight placeholder:text-midnight/40 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!draft.trim() || isTyping}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-electric text-white transition-colors hover:bg-electric-dark disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label={isTyping ? 'Antwort wird vorbereitet' : 'Nachricht senden'}
                >
                  {isTyping ? <LoaderCircle size={19} className="motion-safe:animate-spin" aria-hidden="true" /> : <Send size={19} aria-hidden="true" />}
                </button>
              </form>
              <div className="mt-2 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => { inputRef.current?.blur(); setIsFaqOpen((open) => !open) }}
                  aria-expanded={isFaqOpen}
                  aria-controls="assistant-chat-faq"
                  className="inline-flex min-h-11 items-center gap-1.5 text-xs font-semibold text-electric hover:text-electric-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
                >
                  Häufige Fragen <ChevronDown size={15} className={`transition-transform ${isFaqOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                <span className="text-[11px] text-midnight/40">{draft.length > 500 ? `${draft.length} / 600` : <span className="hidden sm:inline">Enter zum Senden</span>}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3 rounded-xl border border-[#e1e7f0] bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
            <div>
              <p className="text-sm font-semibold">Du brauchst ein konkretes Ersatzteil?</p>
              <p className="mt-1 text-xs leading-relaxed text-midnight/60 sm:text-sm">Unser Team prüft deine Fahrzeugdaten persönlich und erstellt danach ein Angebot.</p>
            </div>
            <a
              href={assistantWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppConversion}
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-whatsapp px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-whatsapp-dark"
            >
              <MessageCircle size={17} aria-hidden="true" /> Per WhatsApp anfragen
            </a>
          </div>
          <p className="mt-4 text-center text-xs leading-relaxed text-midnight/50">
            KI-Antworten können Fehler enthalten. Eine verbindliche Teilezuordnung erfolgt erst nach persönlicher Prüfung.
          </p>
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
