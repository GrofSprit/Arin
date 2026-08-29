import { ArrowRight, CarFront } from 'lucide-react'
import { Link } from 'react-router-dom'

const brands = [
  { name: 'Volkswagen', shortName: 'VW', path: '/vw-ersatzteile' },
  { name: 'BMW', shortName: 'BMW', path: '/bmw-ersatzteile' },
  { name: 'Mercedes-Benz', shortName: 'MB', path: '/mercedes-ersatzteile' },
  { name: 'Audi', shortName: 'Audi', path: '/audi-ersatzteile' },
  { name: 'Opel', shortName: 'Opel', path: '/opel-ersatzteile' },
]

export default function PopularBrandsSection() {
  return (
    <section className="bg-silver/40 py-14 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-12">
        <div className="mb-8 text-center md:mb-12">
          <span className="entrance mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-electric">
            <CarFront size={15} aria-hidden="true" /> Nach Fahrzeugmarke
          </span>
          <h2 className="entrance-headline mb-3 text-2xl font-semibold tracking-tight text-midnight md:text-3xl lg:text-[38px]">
            Ersatzteile nach Automarke
          </h2>
          <p className="entrance mx-auto max-w-2xl text-base text-midnight/55" style={{ transitionDelay: '0.1s' }}>
            Starten Sie mit Ihrer Fahrzeugmarke und grenzen Sie das gesuchte Teil anschließend über Modell und Fahrzeugdaten ein.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-5">
          {brands.map((brand, index) => (
            <Link
              key={brand.path}
              to={brand.path}
              className="entrance group relative flex min-h-[84px] items-center gap-3 bg-white p-3 pr-8 shadow-sm transition-all duration-300 last:col-span-2 hover:-translate-y-1 hover:shadow-card focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-electric/30 sm:last:col-span-1 lg:min-h-40 lg:block lg:p-5"
              style={{ transitionDelay: `${index * 0.07}s` }}
            >
              <span className="flex h-9 min-w-9 items-center justify-center bg-midnight px-1.5 text-[11px] font-semibold text-white lg:h-12 lg:min-w-12 lg:px-2 lg:text-xs" aria-hidden="true">
                {brand.shortName}
              </span>
              <div className="min-w-0 lg:mt-6">
                <h3 className="text-sm font-semibold text-midnight lg:text-base">{brand.name}</h3>
                <p className="mt-1 hidden text-sm leading-relaxed text-midnight/50 lg:block">Ersatzteile nach Fahrzeugdaten finden</p>
              </div>
              <ArrowRight size={17} className="absolute right-3 top-1/2 -translate-y-1/2 text-midnight/25 transition-all group-hover:translate-x-1 group-hover:text-electric lg:right-5 lg:top-5 lg:translate-y-0" aria-hidden="true" />
            </Link>
          ))}
        </div>

        <div className="entrance mt-7 text-center md:mt-8" style={{ transitionDelay: '0.4s' }}>
          <Link to="/marken" className="inline-flex items-center gap-2 border border-electric/25 bg-white px-5 py-3 text-sm font-semibold text-electric transition-colors hover:border-electric/50 hover:bg-electric/5">
            Alle Automarken ansehen <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
