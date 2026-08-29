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
              className="entrance group relative flex min-h-32 flex-col justify-between border border-silver/70 bg-white p-4 shadow-sm transition-all duration-300 last:col-span-2 hover:-translate-y-1 hover:border-electric/25 hover:shadow-card focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-electric/30 sm:last:col-span-1 lg:min-h-40 lg:p-5"
              style={{ transitionDelay: `${index * 0.07}s` }}
            >
              <div className="min-w-0">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-electric/80">Fahrzeugmarke</span>
                <h3 className="mt-2 whitespace-nowrap text-[15px] font-semibold tracking-tight text-midnight lg:text-lg">{brand.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-midnight/60 lg:text-sm">Ersatzteile nach Fahrzeugdaten</p>
              </div>
              <ArrowRight size={18} className="absolute right-4 top-4 text-midnight/30 transition-all group-hover:translate-x-1 group-hover:text-electric lg:right-5 lg:top-5" aria-hidden="true" />
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
