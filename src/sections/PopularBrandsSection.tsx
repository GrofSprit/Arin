import { ArrowRight, CarFront } from 'lucide-react'
import { Link } from 'react-router-dom'

const brands = [
  { name: 'Volkswagen', path: '/vw-ersatzteile' },
  { name: 'BMW', path: '/bmw-ersatzteile' },
  { name: 'Mercedes-Benz', path: '/mercedes-ersatzteile' },
  { name: 'Audi', path: '/audi-ersatzteile' },
  { name: 'Opel', path: '/opel-ersatzteile' },
]

export default function PopularBrandsSection() {
  return (
    <section className="bg-silver/40 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-12">
        <div className="mb-7 text-center md:mb-10">
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

        <div className="grid grid-cols-2 gap-2.5 md:gap-3 lg:grid-cols-5">
          {brands.map((brand, index) => (
            <Link
              key={brand.path}
              to={brand.path}
              className="entrance group flex min-h-16 items-center justify-between gap-3 border border-silver/70 bg-white px-4 py-3 text-midnight transition-all duration-300 last:col-span-2 hover:border-electric/30 hover:text-electric focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-electric/30 sm:last:col-span-1 md:min-h-[72px]"
              style={{ transitionDelay: `${index * 0.07}s` }}
            >
              <h3 className="min-w-0 text-sm font-semibold tracking-tight sm:text-[15px] lg:text-base">{brand.name}</h3>
              <ArrowRight size={17} className="shrink-0 text-midnight/30 transition-transform group-hover:translate-x-1 group-hover:text-electric" aria-hidden="true" />
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
