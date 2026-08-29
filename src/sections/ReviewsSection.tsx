import { ExternalLink, Star } from 'lucide-react'
import { GOOGLE_REVIEWS_URL, GOOGLE_WRITE_REVIEW_URL } from '../lib/externalLinks'

export default function ReviewsSection() {
  return (
      <section id="reviews" className="bg-silver/40 py-14 md:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-8">
            <div className="entrance bg-midnight p-6 md:p-8 text-white shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wider text-electric mb-4">Google-Bewertung für B&amp;C Fahrzeugteile</p>
              <div className="flex items-end gap-3 mb-3">
                <strong className="text-4xl md:text-5xl font-semibold leading-none">4,9/5</strong>
              </div>
              <div className="flex gap-1" aria-label="4,9 von 5 Sternen bei Google">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} size={22} className="fill-electric text-electric" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-4 text-sm text-white/60">Basierend auf 38 Google Bewertungen für B&amp;C Fahrzeugteile</p>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-midnight text-sm font-semibold px-5 py-3 transition-colors hover:bg-silver"
              >
                Google Bewertungen ansehen
                <ExternalLink size={15} aria-hidden="true" />
              </a>
            </div>

            <div>
              <p className="entrance text-xs font-semibold uppercase tracking-wider text-electric mb-3">Öffentlich bei Google</p>
              <h2 className="entrance-headline text-2xl md:text-3xl lg:text-[38px] font-semibold text-midnight leading-tight mb-4">
                Kundenbewertungen
              </h2>
              <p className="entrance text-base text-midnight/60 leading-relaxed mb-5" style={{ transitionDelay: '0.1s' }}>
                B&amp;C Fahrzeugteile ist der physische Fahrzeugteilehandel hinter TeilePilot24. Die angezeigte Bewertung von 4,9/5 bei 38 Google Bewertungen gehört zum Google-Profil von B&amp;C Fahrzeugteile.
              </p>
              <p className="entrance text-sm md:text-base text-midnight/60 leading-relaxed mb-4" style={{ transitionDelay: '0.15s' }}>
                Wenn Sie TeilePilot24 genutzt haben, können Sie Ihre Erfahrung direkt bei Google teilen.
              </p>
              <a
                href={GOOGLE_WRITE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="entrance inline-flex w-full items-center justify-center gap-2 bg-electric px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-electric-dark sm:w-auto"
                style={{ transitionDelay: '0.2s' }}
              >
                TeilePilot24 bewerten
                <ExternalLink size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}
