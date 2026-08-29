import { ExternalLink, Star } from 'lucide-react'
import { GOOGLE_REVIEWS_URL } from '../lib/externalLinks'

export default function ReviewsSection() {
  return (
      <section id="reviews" className="bg-silver/40 py-16 md:py-24 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="entrance bg-midnight p-7 md:p-10 text-white shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wider text-electric mb-4">Google-Bewertung</p>
              <div className="flex items-end gap-3 mb-3">
                <strong className="text-5xl md:text-6xl font-semibold leading-none">4,9/5</strong>
              </div>
              <div className="flex gap-1" aria-label="4,9 von 5 Sternen bei Google">
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
              <p className="entrance text-xs font-semibold uppercase tracking-wider text-electric mb-3">Öffentlich bei Google</p>
              <h2 className="entrance-headline text-3xl md:text-4xl lg:text-[42px] font-semibold text-midnight leading-tight mb-5">
                Kundenbewertungen
              </h2>
              <p className="entrance text-base md:text-lg text-midnight/60 leading-relaxed mb-7" style={{ transitionDelay: '0.1s' }}>
                Über den hinterlegten Google-Eintrag können Sie die öffentlich sichtbaren Bewertungen und einzelnen Erfahrungen direkt bei Google nachlesen.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}
