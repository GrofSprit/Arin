import { Link } from 'react-router-dom'

const guides = [
  {
    title: 'VIN / Fahrgestellnummer',
    path: '/vin-nummer',
  },
  {
    title: 'OEM-Nummer',
    path: '/oem-nummer',
  },
  {
    title: 'Fahrzeugschein',
    path: '/fahrzeugschein-erklaert',
  },
  {
    title: 'PR-Code bei VW, Audi, Seat & Skoda',
    path: '/pr-code-vag',
  },
]

export default function PartsSearchHelpSection() {
  return (
    <nav aria-label="Ratgeber zur Teileauswahl" className="entrance mt-8 border-t border-silver/70 pt-6 md:mt-10 md:pt-7">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <p className="shrink-0 text-sm font-semibold text-midnight">Mehr zur Teileauswahl:</p>
        <div className="flex flex-wrap gap-2">
          {guides.map((guide) => (
            <Link
              key={guide.path}
              to={guide.path}
              className="inline-flex min-h-10 items-center border border-silver/80 bg-silver/20 px-3 text-xs font-semibold text-midnight/70 transition-colors hover:border-electric/30 hover:bg-electric/5 hover:text-electric focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-electric/25 sm:text-sm"
            >
              {guide.title}
            </Link>
          ))}
          <Link
            to="/ratgeber"
            className="inline-flex min-h-10 items-center border border-electric/25 px-3 text-xs font-semibold text-electric transition-colors hover:border-electric/50 hover:bg-electric/5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-electric/25 sm:text-sm"
          >
            Alle Ratgeber
          </Link>
        </div>
      </div>
    </nav>
  )
}
