import { ArrowRight, ExternalLink, MapPin, RotateCcw, Store, Truck, WalletCards } from 'lucide-react'
import { Link } from 'react-router-dom'
import { GOOGLE_MAPS_URL } from '../lib/externalLinks'
import ReviewsSection from './ReviewsSection'

export default function CompanySection() {
  return (
    <section id="reviews" aria-labelledby="company-title" className="bg-silver/40 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-12">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-x-8 lg:gap-y-6">
          <div className="lg:col-start-1 lg:row-start-1">
            <p className="entrance mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-electric">
              <Store size={14} aria-hidden="true" />
              Realer Standort in Mönchengladbach
            </p>
            <h2 id="company-title" className="entrance-headline mb-4 text-2xl font-semibold leading-tight text-midnight md:text-3xl lg:text-[38px]">
              B&amp;C Fahrzeugteile &amp; Service
            </h2>
            <p className="entrance max-w-xl text-base leading-relaxed text-midnight/60" style={{ transitionDelay: '0.1s' }}>
              TeilePilot24 ist der digitale Anfrage-Service von B&amp;C Fahrzeugteile in Mönchengladbach. Das Team übernimmt die persönliche Prüfung Ihrer Fahrzeug- und Teileinformationen und erstellt anschließend das Angebot.
            </p>
          </div>

          <ReviewsSection />

          <div className="entrance border border-silver bg-white p-5 shadow-sm md:p-6 lg:col-start-1 lg:row-start-2" style={{ transitionDelay: '0.15s' }}>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center bg-electric/10">
                <MapPin size={22} className="text-electric" aria-hidden="true" />
              </span>
              <address className="not-italic text-sm leading-relaxed text-midnight/65 md:text-base">
                <strong className="mb-1 block font-semibold text-midnight">B&amp;C Fahrzeugteile</strong>
                Limitenstraße 111<br />
                41236 Mönchengladbach
              </address>
            </div>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 hidden min-h-11 w-full items-center justify-center gap-2 border border-electric px-5 text-sm font-semibold text-electric transition-colors hover:bg-electric hover:text-white lg:inline-flex"
            >
              Route mit Google Maps öffnen
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:col-start-2 lg:row-start-2">
            <article className="entrance border border-silver bg-white p-4 md:p-5">
              <Truck size={21} className="mb-3 text-electric" aria-hidden="true" />
              <h3 className="text-base font-semibold text-midnight">Versand</h3>
              <p className="mt-1 text-sm text-midnight/55">Deutschlandweiter Versand.</p>
            </article>
            <article className="entrance border border-silver bg-white p-4 md:p-5" style={{ transitionDelay: '0.06s' }}>
              <Store size={21} className="mb-3 text-electric" aria-hidden="true" />
              <h3 className="text-base font-semibold text-midnight">Abholung</h3>
              <p className="mt-1 text-sm text-midnight/55">In Mönchengladbach.</p>
            </article>
          </div>

          <div className="grid gap-3 border-t border-midnight/10 pt-5 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-[1fr_1.15fr] lg:gap-8">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 border border-electric px-5 text-sm font-semibold text-electric transition-colors hover:bg-electric hover:text-white sm:col-span-2 lg:hidden"
            >
              Route mit Google Maps öffnen
              <ExternalLink size={15} aria-hidden="true" />
            </a>
            <div className="entrance flex items-start gap-3">
              <WalletCards size={21} className="mt-0.5 flex-shrink-0 text-electric" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-semibold text-midnight">Zahlung</h3>
                <p className="mt-1 text-sm leading-relaxed text-midnight/55">PayPal, Überweisung oder Barzahlung bei Abholung.</p>
              </div>
            </div>
            <div className="entrance flex items-start gap-3" style={{ transitionDelay: '0.06s' }}>
              <RotateCcw size={21} className="mt-0.5 flex-shrink-0 text-electric" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-semibold text-midnight">Rückgabe &amp; Widerruf</h3>
                <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
                  <Link to="/widerrufsbelehrung" className="inline-flex items-center gap-1.5 text-electric hover:text-electric-dark">
                    Widerrufsbelehrung <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                  <Link to="/widerrufsformular" className="inline-flex items-center gap-1.5 text-electric hover:text-electric-dark">
                    Widerrufsformular <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
