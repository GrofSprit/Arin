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
    <section className="bg-silver/40 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-12">
        <div className="mb-10 text-center md:mb-14">
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

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-5">
          {brands.map((brand, index) => (
            <Link
              key={brand.path}
              to={brand.path}
              className="entrance group flex min-h-40 flex-col justify-between bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-electric/30"
              style={{ transitionDelay: `${index * 0.07}s` }}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-12 min-w-12 items-center justify-center bg-midnight px-2 text-xs font-semibold text-white" aria-hidden="true">
                  {brand.shortName}
                </span>
                <ArrowRight size={18} className="mt-1 text-midnight/25 transition-all group-hover:translate-x-1 group-hover:text-electric" aria-hidden="true" />
              </div>
              <div className="mt-6">
                <h3 className="text-base font-semibold text-midnight">{brand.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-midnight/50">Ersatzteile nach Fahrzeugdaten finden</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="entrance mt-8 text-center" style={{ transitionDelay: '0.4s' }}>
          <Link to="/marken" className="inline-flex items-center gap-2 border border-electric/25 bg-white px-5 py-3 text-sm font-semibold text-electric transition-colors hover:border-electric/50 hover:bg-electric/5">
            Alle Automarken ansehen <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
