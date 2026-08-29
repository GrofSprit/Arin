import { ArrowRight, FileText, Fingerprint, Hash, ScanLine } from 'lucide-react'
import { Link } from 'react-router-dom'

const guides = [
  {
    title: 'VIN / Fahrgestellnummer',
    path: '/vin-nummer',
    description: 'Die VIN hilft, Baureihe, Motorisierung und Fahrzeugvariante genauer einzugrenzen.',
    icon: Fingerprint,
  },
  {
    title: 'OEM-Nummer',
    path: '/oem-nummer',
    description: 'Eine vorhandene OEM-Nummer kann als Referenz beim Abgleich eines Ersatzteils dienen.',
    icon: Hash,
  },
  {
    title: 'Fahrzeugschein',
    path: '/fahrzeugschein-erklaert',
    description: 'HSN, TSN und weitere Angaben helfen dabei, das betreffende Fahrzeug genauer zu bestimmen.',
    icon: FileText,
  },
  {
    title: 'PR-Code bei VW, Audi, Seat & Skoda',
    path: '/pr-code-vag',
    description: 'PR-Codes können bei bestimmten VAG-Modellen helfen, Ausstattungs- und Teilevarianten zu unterscheiden.',
    icon: ScanLine,
  },
]

export default function PartsSearchHelpSection() {
  return (
    <section className="bg-midnight py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-12">
        <div className="mb-10 text-center md:mb-14">
          <span className="entrance mb-4 inline-block text-xs font-semibold uppercase tracking-wider text-electric">Orientierung vor der Anfrage</span>
          <h2 className="entrance-headline mb-3 text-2xl font-semibold tracking-tight text-white md:text-3xl lg:text-[38px]">
            Hilfe bei der richtigen Teileauswahl
          </h2>
          <p className="entrance mx-auto max-w-2xl text-base text-white/50" style={{ transitionDelay: '0.1s' }}>
            Erfahren Sie, welche Fahrzeugangaben bei der persönlichen Teileprüfung nützlich sein können.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {guides.map((guide, index) => (
            <Link
              key={guide.path}
              to={guide.path}
              className="entrance group flex min-h-44 flex-col border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-electric/40 md:p-7"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center bg-electric/15 text-electric transition-colors group-hover:bg-electric group-hover:text-white">
                  <guide.icon size={22} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <ArrowRight size={18} className="mt-1 text-white/25 transition-all group-hover:translate-x-1 group-hover:text-electric" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{guide.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{guide.description}</p>
            </Link>
          ))}
        </div>

        <div className="entrance mt-8 text-center" style={{ transitionDelay: '0.4s' }}>
          <Link to="/ratgeber" className="inline-flex items-center gap-2 border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-electric/60 hover:text-electric">
            Alle Ratgeber ansehen <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
