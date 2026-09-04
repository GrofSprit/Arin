import {
  Activity,
  ArrowRight,
  BatteryCharging,
  CircleDot,
  Disc3,
  Filter,
  Gauge,
  Lightbulb,
  Settings,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import VinWhatsAppCheck from '../components/VinWhatsAppCheck'

const parts = [
  { name: 'Bremsbeläge', path: '/bremsbelaege', description: 'Ausführung und Fahrzeugvariante eingrenzen.', icon: CircleDot },
  { name: 'Bremsscheiben', path: '/bremsscheiben', description: 'Maße und Bremsanlage passend abgleichen.', icon: Disc3 },
  { name: 'Scheinwerfer', path: '/scheinwerfer', description: 'Bauform, Seite und Ausstattung prüfen.', icon: Lightbulb },
  { name: 'Autobatterie', path: '/batterie', description: 'Kapazität, Maße und Fahrzeugdaten beachten.', icon: BatteryCharging },
  { name: 'Turbolader', path: '/turbolader', description: 'Motorisierung und Variante genauer bestimmen.', icon: Gauge },
  { name: 'Kupplung', path: '/kupplung', description: 'Kupplungsausführung anhand der Daten prüfen.', icon: Settings },
  { name: 'ABS-Sensor', path: '/abs-sensor', description: 'Achse und Einbauposition richtig zuordnen.', icon: Activity },
  { name: 'Ölfilter', path: '/oelfilter', description: 'Filterausführung zum Fahrzeug eingrenzen.', icon: Filter },
]

export default function PartsCategory() {
  return (
    <section id="parts" className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-12">
        <div className="text-center mb-7 md:mb-10">
          <h2 className="entrance-headline text-2xl md:text-3xl lg:text-[38px] text-midnight font-semibold mb-3 tracking-tight">
            Beliebte Ersatzteile
          </h2>
          <p className="entrance mx-auto max-w-2xl text-base text-midnight/65" style={{ transitionDelay: '0.1s' }}>
            Wählen Sie aus häufig gesuchten Ersatzteilen oder öffnen Sie die vollständige Teileübersicht.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2.5 md:gap-4 lg:grid-cols-4">
          {parts.map((part, i) => (
            <Link
              key={part.path}
              to={part.path}
              className="entrance group flex min-h-[84px] flex-col justify-center border border-silver/80 bg-silver/25 p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-electric/30 hover:bg-white hover:shadow-card focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-electric/30 md:min-h-36 md:justify-start md:p-5"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="mb-2 flex items-start justify-between gap-2 md:mb-5 md:gap-3">
                <span className="flex h-8 w-8 items-center justify-center bg-electric/10 text-electric transition-colors group-hover:bg-electric group-hover:text-white md:h-11 md:w-11">
                  <part.icon size={20} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <ArrowRight size={18} className="mt-1 text-midnight/25 transition-all group-hover:translate-x-1 group-hover:text-electric" aria-hidden="true" />
              </div>
              <h3 className="text-sm font-semibold text-midnight md:text-base">{part.name}</h3>
              <p className="mt-2 hidden text-sm leading-relaxed text-midnight/70 md:block">{part.description}</p>
            </Link>
          ))}
        </div>

        <div className="entrance mt-7 text-center md:mt-8" style={{ transitionDelay: '0.45s' }}>
          <Link to="/teile" className="inline-flex items-center gap-2 border border-electric/25 px-5 py-3 text-sm font-semibold text-electric transition-colors hover:border-electric/50 hover:bg-electric/5">
            Alle Ersatzteile ansehen <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <VinWhatsAppCheck />
      </div>
    </section>
  )
}
