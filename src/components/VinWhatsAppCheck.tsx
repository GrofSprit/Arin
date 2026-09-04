import { useId, useState, type ChangeEvent, type ClipboardEvent, type FormEvent, type KeyboardEvent } from 'react'
import { AlertCircle, CheckCircle2, ChevronDown, Fingerprint, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { createWhatsAppUrl, trackWhatsAppConversion } from '../lib/whatsapp'

const VIN_PATTERN = /^[A-HJ-NPR-Z0-9]{17}$/
const EXCLUDED_VIN_CHARACTERS = /[IOQ]/

type ValidationStatus = 'idle' | 'error' | 'success'

function normalizeVin(value: string) {
  return value.trim().toUpperCase()
}

function createVinWhatsAppMessage(vin: string) {
  return `Hallo TeilePilot24,\n\nich benötige ein Ersatzteil.\n\nVIN: ${vin}\n\nBitte prüfen Sie mein Fahrzeug und die passende Teilevariante.`
}

export default function VinWhatsAppCheck() {
  const inputId = useId()
  const helpId = useId()
  const errorId = useId()
  const panelId = useId()
  const [isOpen, setIsOpen] = useState(false)
  const [vin, setVin] = useState('')
  const [validatedVin, setValidatedVin] = useState('')
  const [status, setStatus] = useState<ValidationStatus>('idle')

  const updateVin = (value: string) => {
    setVin(normalizeVin(value))
    setValidatedVin('')
    setStatus('idle')
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    updateVin(event.target.value)
  }

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    const pastedValue = event.clipboardData.getData('text')
    if (!pastedValue) return

    event.preventDefault()
    updateVin(pastedValue)
  }

  const validateVin = () => {
    const normalizedVin = normalizeVin(vin)
    setVin(normalizedVin)

    if (!VIN_PATTERN.test(normalizedVin)) {
      setValidatedVin('')
      setStatus('error')
      return
    }

    setValidatedVin(normalizedVin)
    setStatus('success')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    validateVin()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return

    event.preventDefault()
    validateVin()
  }

  const containsExcludedCharacter = EXCLUDED_VIN_CHARACTERS.test(vin)
  const whatsappUrl = validatedVin
    ? createWhatsAppUrl(createVinWhatsAppMessage(validatedVin))
    : ''

  return (
    <div className="entrance mx-auto mt-7 max-w-5xl border border-silver/80 bg-silver/20 md:mt-9" style={{ transitionDelay: '0.15s' }}>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex min-h-14 w-full items-center justify-between gap-4 px-4 py-3 text-left transition-colors hover:bg-silver/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-electric/25 md:px-5"
      >
        <span className="flex min-w-0 items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-electric/10 text-electric">
            <Fingerprint size={18} strokeWidth={1.7} aria-hidden="true" />
          </span>
          <span>
            <span className="block text-sm font-semibold text-midnight md:text-base">VIN zur Anfrage hinzufügen</span>
            <span className="mt-0.5 block text-xs text-midnight/55">Optional für eine genauere Fahrzeugzuordnung</span>
          </span>
        </span>
        <ChevronDown
          size={19}
          className={`shrink-0 text-midnight/45 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      <div id={panelId} hidden={!isOpen} className="border-t border-silver/80 px-4 pb-4 pt-4 md:px-5 md:pb-5">
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor={inputId} className="mb-2 block text-sm font-semibold text-midnight">
            VIN / Fahrgestellnummer
          </label>
          <div className="grid gap-2.5 sm:grid-cols-[minmax(0,1fr)_auto]">
            <input
              id={inputId}
              type="text"
              value={vin}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onPaste={handlePaste}
              autoComplete="off"
              autoCapitalize="characters"
              spellCheck={false}
              maxLength={17}
              pattern="[A-HJ-NPR-Z0-9]{17}"
              placeholder="17-stellige VIN eingeben"
              aria-invalid={status === 'error'}
              aria-describedby={`${helpId}${status === 'error' ? ` ${errorId}` : ''}`}
              className={`h-12 min-w-0 w-full border bg-white px-3.5 text-base font-medium uppercase tracking-[0.06em] text-midnight outline-none transition-shadow placeholder:normal-case placeholder:tracking-normal placeholder:text-midnight/40 focus:ring-4 focus:ring-electric/20 ${status === 'error' ? 'border-error' : 'border-silver focus:border-electric'}`}
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center bg-electric px-6 text-sm font-semibold text-white transition-colors hover:bg-electric-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-electric/30 active:scale-[0.98]"
            >
              Prüfen
            </button>
          </div>

          <p id={helpId} className="mt-2 text-xs leading-relaxed text-midnight/60">
            Die VIN wird für diese Anfrage verwendet und nicht automatisch als Fahrzeugtreffer bestätigt.{' '}
            <Link to="/datenschutz" className="font-medium text-electric underline underline-offset-2 hover:text-electric-dark">
              Datenschutz
            </Link>
          </p>

          <div aria-live="polite" aria-atomic="true">
            {status === 'error' && (
              <div id={errorId} className="mt-3 flex items-start gap-2 text-sm text-error">
                <AlertCircle size={18} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Bitte geben Sie eine gültige 17-stellige VIN ein.</p>
                  {containsExcludedCharacter && (
                    <p className="mt-1 text-xs">Die Buchstaben I, O und Q werden in einer VIN nicht verwendet.</p>
                  )}
                </div>
              </div>
            )}

            {status === 'success' && validatedVin && (
              <div className="mt-3 flex flex-col gap-3 border border-whatsapp/25 bg-whatsapp/5 p-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex min-w-0 items-start gap-2.5">
                  <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0 text-whatsapp-dark" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-midnight">VIN erfolgreich erfasst</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-midnight/65">
                      Wir prüfen Ihre Fahrzeugdaten und die passende Teilevariante persönlich.
                    </p>
                  </div>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackWhatsAppConversion}
                  className="inline-flex min-h-11 flex-shrink-0 items-center justify-center gap-2 bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp/30"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Mit VIN per WhatsApp anfragen
                </a>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
