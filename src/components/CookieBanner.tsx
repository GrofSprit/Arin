import { useEffect, useState } from 'react'

const STORAGE_KEY = 'teilepilot24-cookie-choice'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(!localStorage.getItem(STORAGE_KEY))
  }, [])

  const saveChoice = (choice: 'accepted' | 'rejected') => {
    localStorage.setItem(STORAGE_KEY, choice)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[260] px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4 pointer-events-none"
      role="region"
      aria-label="Cookie-Hinweis"
    >
      <div className="pointer-events-auto mx-auto flex w-full max-w-[1120px] flex-col gap-4 border border-white/10 bg-midnight/95 p-4 text-white shadow-[0_-12px_42px_rgba(20,33,61,0.28)] backdrop-blur md:flex-row md:items-center md:justify-between md:gap-6 md:p-5">
        <p className="text-sm leading-relaxed text-white/75 md:text-[15px]">
          Wir verwenden Cookies und ähnliche Technologien, um unsere Website zu verbessern und Anfragen besser auswerten zu können. Weitere Informationen finden Sie in unserer Datenschutzerklärung.
        </p>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center md:flex-shrink-0">
          <button
            type="button"
            onClick={() => saveChoice('accepted')}
            className="inline-flex min-h-11 items-center justify-center bg-electric px-5 text-sm font-semibold text-white transition-colors hover:bg-electric-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Akzeptieren
          </button>
          <button
            type="button"
            onClick={() => saveChoice('rejected')}
            className="inline-flex min-h-11 items-center justify-center border border-white/20 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Ablehnen
          </button>
          <a
            href="/datenschutz"
            className="inline-flex min-h-11 items-center justify-center px-5 text-sm font-semibold text-white/75 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Mehr erfahren
          </a>
        </div>
      </div>
    </div>
  )
}
