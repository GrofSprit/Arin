import { useEffect, useState } from 'react'

const STORAGE_KEY = 'teilepilot24-cookie-choice'
type CookieChoice = 'accepted' | 'rejected'

declare global {
  interface Window {
    tp24SetGoogleConsent?: (choice: CookieChoice) => void
  }
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsVisible(!localStorage.getItem(STORAGE_KEY))
    })

    return () => window.cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('tp24:cookie-banner-visibility', { detail: isVisible }))

    return () => {
      window.dispatchEvent(new CustomEvent('tp24:cookie-banner-visibility', { detail: false }))
    }
  }, [isVisible])

  const saveChoice = (choice: CookieChoice) => {
    localStorage.setItem(STORAGE_KEY, choice)
    window.tp24SetGoogleConsent?.(choice)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[260] px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 md:px-4 md:pb-[calc(1rem+env(safe-area-inset-bottom))] md:pt-4"
      role="region"
      aria-label="Cookie-Hinweis"
    >
      <div className="pointer-events-auto mx-auto flex w-full max-w-[1120px] flex-col gap-3 border border-white/10 bg-midnight/95 p-3.5 text-white shadow-[0_-12px_42px_rgba(20,33,61,0.28)] backdrop-blur md:flex-row md:items-center md:justify-between md:gap-6 md:p-5">
        <p className="text-sm leading-relaxed text-white/75 md:text-[15px]">
          Wir verwenden Cookies und ähnliche Technologien, um unsere Website zu verbessern und Anfragen besser auswerten zu können. Weitere Informationen finden Sie in unserer{' '}
          <a
            href="/datenschutz"
            className="font-semibold text-white underline decoration-white/35 underline-offset-4 transition-colors hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Datenschutzerklärung
          </a>.
        </p>

        <div className="grid grid-cols-2 gap-2 md:flex md:flex-shrink-0 md:items-center">
          <button
            type="button"
            onClick={() => saveChoice('accepted')}
            className="inline-flex min-h-11 w-full items-center justify-center bg-electric px-5 text-sm font-semibold text-white transition-colors hover:bg-electric-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:w-auto"
          >
            Akzeptieren
          </button>
          <button
            type="button"
            onClick={() => saveChoice('rejected')}
            className="inline-flex min-h-11 w-full items-center justify-center border border-white/25 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:w-auto"
          >
            Ablehnen
          </button>
        </div>
      </div>
    </div>
  )
}
