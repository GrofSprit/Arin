import { ExternalLink, MapPin, Star } from 'lucide-react'
import { GOOGLE_MAPS_URL, GOOGLE_REVIEWS_URL } from '../lib/externalLinks'

const reviewHighlights = [
  'Persönliche Beratung statt anonymer Teilesuche',
  'Manuelle Prüfung von Fahrzeugdaten und Teilenummern',
  'Klare Rückmeldung direkt per WhatsApp',
]

export default function ReviewsSection() {
  return (
    <>
      <section id="reviews" className="bg-white py-16 md:py-24 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="entrance bg-midnight p-7 md:p-10 text-white shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wider text-electric mb-4">Google-Bewertung</p>
              <div className="flex items-end gap-3 mb-3">
                <strong className="text-5xl md:text-6xl font-semibold leading-none">4,6/5</strong>
              </div>
              <div className="flex gap-1" aria-label="4,6 von 5 Sternen bei Google">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} size={22} className="fill-electric text-electric" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-5 text-sm text-white/60">Basierend auf 38 Google Bewertungen</p>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-midnight text-sm font-semibold px-5 py-3 transition-colors hover:bg-silver"
              >
                Google Bewertungen ansehen
                <ExternalLink size={15} aria-hidden="true" />
              </a>
            </div>

            <div>
              <p className="entrance text-xs font-semibold uppercase tracking-wider text-electric mb-3">Erfahrung, die Vertrauen schafft</p>
              <h2 className="entrance-headline text-3xl md:text-4xl lg:text-[42px] font-semibold text-midnight leading-tight mb-5">
                Persönlich beraten. Sorgfältig geprüft.
              </h2>
              <p className="entrance text-base md:text-lg text-midnight/60 leading-relaxed mb-7" style={{ transitionDelay: '0.1s' }}>
                Hinter jeder Anfrage steht ein echtes Team mit Erfahrung im Fahrzeugteilehandel. So erhalten Sie keine beliebige Trefferliste, sondern eine nachvollziehbare Empfehlung für Ihr Fahrzeug.
              </p>
              <ul className="space-y-3">
                {reviewHighlights.map((highlight, index) => (
                  <li key={highlight} className="entrance flex items-start gap-3 text-sm md:text-base text-midnight/75" style={{ transitionDelay: `${(index + 2) * 0.08}s` }}>
                    <Star size={17} className="text-electric fill-electric mt-0.5 flex-shrink-0" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="company-title" className="bg-silver/40 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="entrance text-xs font-semibold uppercase tracking-wider text-electric mb-3">Erfahrung aus Mönchengladbach</p>
              <h2 id="company-title" className="entrance-headline text-2xl md:text-3xl lg:text-[38px] font-semibold text-midnight leading-tight mb-4">
                Hinter TeilePilot24 steht ein echter Ersatzteilhandel
              </h2>
              <p className="entrance text-base text-midnight/60 leading-relaxed max-w-xl" style={{ transitionDelay: '0.1s' }}>
                B&amp;C Fahrzeugteile aus Mönchengladbach beliefert seit Jahren Privat- und Geschäftskunden mit Ersatzteilen für zahlreiche Fahrzeugmarken. Mit TeilePilot24 bringen wir unsere Erfahrung direkt auf Ihr Smartphone – einfach per WhatsApp.
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
    </>
  )
}
