import { ExternalLink, MapPin, Store } from 'lucide-react'
import { GOOGLE_MAPS_URL } from '../lib/externalLinks'

export default function CompanySection() {
  return (
    <section aria-labelledby="company-title" className="bg-silver/40 py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="entrance inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-electric mb-3">
              <Store size={14} aria-hidden="true" />
              Realer Standort in Mönchengladbach
            </p>
            <h2 id="company-title" className="entrance-headline text-2xl md:text-3xl lg:text-[38px] font-semibold text-midnight leading-tight mb-4">
              Hinter TeilePilot24 steht B&amp;C Fahrzeugteile
            </h2>
            <p className="entrance text-base text-midnight/60 leading-relaxed max-w-xl" style={{ transitionDelay: '0.1s' }}>
              TeilePilot24 ist der digitale Anfrage-Service von B&amp;C Fahrzeugteile in Mönchengladbach. Das Team übernimmt die persönliche Prüfung Ihrer Fahrzeug- und Teileinformationen und erstellt anschließend das Angebot.
            </p>
          </div>
          <div className="entrance bg-white border border-silver p-6 md:p-8 shadow-sm" style={{ transitionDelay: '0.15s' }}>
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
              className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-electric text-white text-sm font-semibold px-5 py-3.5 transition-colors hover:bg-electric-dark"
            >
              Route mit Google Maps öffnen
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
