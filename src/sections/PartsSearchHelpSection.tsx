import { ArrowRight, FileText, Fingerprint, Hash, ScanLine } from 'lucide-react'
import { Link } from 'react-router-dom'

const guides = [
  {
    title: 'VIN / Fahrgestellnummer',
    path: '/vin-nummer',
    description: 'Baureihe und Fahrzeugvariante eingrenzen.',
    icon: Fingerprint,
  },
  {
    title: 'OEM-Nummer',
    path: '/oem-nummer',
    description: 'Teilenummer als Referenz abgleichen.',
    icon: Hash,
  },
  {
    title: 'Fahrzeugschein',
    path: '/fahrzeugschein-erklaert',
    description: 'HSN, TSN und Fahrzeugdaten einordnen.',
    icon: FileText,
  },
  {
    title: 'PR-Code bei VW, Audi, Seat & Skoda',
    path: '/pr-code-vag',
    description: 'Ausstattungsvarianten bei VAG unterscheiden.',
    icon: ScanLine,
  },
]

export default function PartsSearchHelpSection() {
  return (
    <section className="bg-midnight py-14 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-12">
        <div className="mb-8 text-center md:mb-12">
          <span className="entrance mb-4 inline-block text-xs font-semibold uppercase tracking-wider text-electric">Orientierung vor der Anfrage</span>
          <h2 className="entrance-headline mb-3 text-2xl font-semibold tracking-tight text-white md:text-3xl lg:text-[38px]">
            Hilfe bei der richtigen Teileauswahl
          </h2>
          <p className="entrance mx-auto max-w-2xl text-base text-white/50" style={{ transitionDelay: '0.1s' }}>
            Erfahren Sie, welche Fahrzeugangaben bei der persönlichen Teileprüfung nützlich sein können.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4 md:gap-4">
          {guides.map((guide, index) => (
            <Link
              key={guide.path}
              to={guide.path}
              className="entrance group relative flex min-h-[148px] flex-col border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-electric/40 md:min-h-40 md:p-5"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <span className="flex h-9 w-9 items-center justify-center bg-electric/15 text-electric transition-colors group-hover:bg-electric group-hover:text-white">
                <guide.icon size={19} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <ArrowRight size={16} className="absolute right-4 top-4 text-white/25 transition-all group-hover:translate-x-1 group-hover:text-electric" aria-hidden="true" />
              <h3 className="mt-3 pr-5 text-sm font-semibold leading-snug text-white md:text-base">{guide.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-white/55 md:text-sm">{guide.description}</p>
            </Link>
          ))}
        </div>

        <div className="entrance mt-7 text-center md:mt-8" style={{ transitionDelay: '0.4s' }}>
          <Link to="/ratgeber" className="inline-flex items-center gap-2 border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-electric/60 hover:text-electric">
            Alle Ratgeber ansehen <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
