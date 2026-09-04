import { ExternalLink, Star } from 'lucide-react'
import { GOOGLE_REVIEWS_URL, GOOGLE_WRITE_REVIEW_URL } from '../lib/externalLinks'

export default function ReviewsSection() {
  return (
    <aside
      aria-labelledby="reviews-title"
      className="entrance bg-midnight p-5 text-white shadow-card md:p-7 lg:col-start-2 lg:row-start-1"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-electric">
        Google-Bewertung für B&amp;C Fahrzeugteile
      </p>
      <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
        <strong id="reviews-title" className="text-4xl font-semibold leading-none md:text-5xl">
          4,9/5
        </strong>
        <div className="flex gap-1" aria-label="4,9 von 5 Sternen bei Google">
          {[0, 1, 2, 3, 4].map((star) => (
            <Star key={star} size={20} className="fill-electric text-electric" aria-hidden="true" />
          ))}
        </div>
      </div>
      <p className="mt-3 text-sm text-white/70">
        Basierend auf 38 Google Bewertungen für B&amp;C Fahrzeugteile.
      </p>
      <p className="mt-2 text-sm leading-relaxed text-white/55">
        Die Bewertung gehört zum Google-Profil von B&amp;C Fahrzeugteile, dem physischen Fahrzeugteilehandel hinter TeilePilot24.
      </p>
      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 border border-white/20 px-4 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          Google Bewertungen ansehen
          <ExternalLink size={15} aria-hidden="true" />
        </a>
        <a
          href={GOOGLE_WRITE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 bg-electric px-4 text-center text-sm font-semibold text-white transition-colors hover:bg-electric-dark"
        >
          TeilePilot24 bewerten
          <ExternalLink size={15} aria-hidden="true" />
        </a>
      </div>
    </aside>
  )
}
