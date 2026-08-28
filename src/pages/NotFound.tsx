import { ArrowLeft, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

import { usePageMetadata } from '../hooks/usePageMetadata'
import { NOT_FOUND_METADATA } from '../lib/routeSeo'
import { WHATSAPP_URL } from '../lib/whatsapp'
import Footer from '../sections/Footer'
import Navigation from '../sections/Navigation'
import StickyWhatsApp from '../sections/StickyWhatsApp'

export default function NotFound() {
  usePageMetadata(NOT_FOUND_METADATA)

  return (
    <>
      <Navigation transparent={false} />
      <main className="flex min-h-[70vh] items-center bg-midnight px-5 pb-16 pt-[104px] text-white md:px-10">
        <section className="mx-auto w-full max-w-[760px] py-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-electric">Fehler 404</p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Diese Seite wurde nicht gefunden.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
            Die Adresse ist möglicherweise nicht mehr gültig oder wurde falsch eingegeben. Auf der Startseite finden Sie unsere Ersatzteil-Anfrage und alle wichtigen Bereiche.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-electric px-6 py-3.5 text-sm font-semibold text-midnight transition-colors hover:bg-electric-light"
            >
              <ArrowLeft size={18} aria-hidden="true" /> Zur Startseite
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-whatsapp/50 hover:text-whatsapp"
            >
              <MessageCircle size={18} aria-hidden="true" /> Per WhatsApp anfragen
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  )
}
