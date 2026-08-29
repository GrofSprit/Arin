import { ArrowRight, ExternalLink, MapPin, RotateCcw, Store, Truck, WalletCards } from 'lucide-react'
import { Link } from 'react-router-dom'
import { GOOGLE_MAPS_URL } from '../lib/externalLinks'

export default function CompanySection() {
  return (
    <section aria-labelledby="company-title" className="bg-silver/40 py-14 md:py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-12">
        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-10">
          <div>
            <p className="entrance inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-electric mb-3">
              <Store size={14} aria-hidden="true" />
              Realer Standort in Mönchengladbach
            </p>
            <h2 id="company-title" className="entrance-headline text-2xl md:text-3xl lg:text-[38px] font-semibold text-midnight leading-tight mb-4">
              B&amp;C Fahrzeugteile &amp; Service
            </h2>
            <p className="entrance text-base text-midnight/60 leading-relaxed max-w-xl" style={{ transitionDelay: '0.1s' }}>
              TeilePilot24 ist der digitale Anfrage-Service von B&amp;C Fahrzeugteile in Mönchengladbach. Das Team übernimmt die persönliche Prüfung Ihrer Fahrzeug- und Teileinformationen und erstellt anschließend das Angebot.
            </p>
            <div className="entrance mt-6 border border-silver bg-white p-5 shadow-sm md:p-6" style={{ transitionDelay: '0.15s' }}>
              <div className="flex items-start gap-4">
                <span className="w-11 h-11 bg-electric/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-electric" aria-hidden="true" />
                </span>
                <address className="not-italic text-sm md:text-base text-midnight/65 leading-relaxed">
                  <strong className="block text-midnight font-semibold mb-1">B&amp;C Fahrzeugteile</strong>
                  Limitenstraße 111<br />
                  41236 Mönchengladbach
                </address>
              </div>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-electric text-white text-sm font-semibold px-5 py-3 transition-colors hover:bg-electric-dark"
              >
                Route mit Google Maps öffnen
                <ExternalLink size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
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
            <article className="entrance border border-silver bg-white p-4 md:p-5" style={{ transitionDelay: '0.12s' }}>
              <WalletCards size={21} className="mb-3 text-electric" aria-hidden="true" />
              <h3 className="text-base font-semibold text-midnight">Zahlung</h3>
              <p className="mt-1 text-sm leading-relaxed text-midnight/55">PayPal, Überweisung oder Barzahlung bei Abholung.</p>
            </article>
            <article className="entrance border border-silver bg-white p-4 md:p-5" style={{ transitionDelay: '0.18s' }}>
              <RotateCcw size={21} className="mb-3 text-electric" aria-hidden="true" />
              <h3 className="text-base font-semibold text-midnight">Rückgabe &amp; Widerruf</h3>
              <div className="mt-2 flex flex-col items-start gap-1.5 text-sm font-semibold">
                <Link to="/widerrufsbelehrung" className="inline-flex items-center gap-1.5 text-electric hover:text-electric-dark">
                  Widerrufsbelehrung <ArrowRight size={14} aria-hidden="true" />
                </Link>
                <Link to="/widerrufsformular" className="inline-flex items-center gap-1.5 text-electric hover:text-electric-dark">
                  Widerrufsformular <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
