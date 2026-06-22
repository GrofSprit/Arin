const categories = [
  { name: 'Bremsen', image: '/images/parts-brakes.jpg' },
  { name: 'Scheinwerfer', image: '/images/parts-headlight.jpg' },
  { name: 'Stoßdämpfer', image: '/images/parts-shock.jpg' },
  { name: 'Filter', image: '/images/parts-filters.jpg' },
  { name: 'Karosserieteile', image: '/images/parts-body.jpg' },
  { name: 'Motorteile', image: '/images/parts-engine.jpg' },
  { name: 'Sensoren', image: '/images/parts-sensors.jpg' },
  { name: 'Kupplung', image: '/images/parts-clutch.jpg' },
]

export default function PartsCategory() {
  return (
    <section id="parts" className="bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="entrance-headline text-2xl md:text-3xl lg:text-[38px] text-midnight font-semibold mb-3 tracking-tight">
            Welche Teile können Sie anfragen?
          </h2>
          <p className="entrance text-base text-midnight/55 max-w-lg mx-auto" style={{ transitionDelay: '0.1s' }}>
            Wir helfen Ihnen bei fast allen Ersatzteilen – vom Ölfilter bis zum Scheinwerfer.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {categories.map((cat, i) => (
            <a
              key={cat.name}
              href={createWhatsAppUrl(`Hallo TeilePilot24, ich suche ein Ersatzteil aus der Kategorie „${cat.name}“. Bitte helfen Sie mir, das passende Teil für mein Fahrzeug zu finden.`)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${cat.name} per WhatsApp anfragen`}
              className="entrance group relative aspect-[4/3] overflow-hidden bg-midnight shadow-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-electric/40"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="part-card-gradient absolute inset-0" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 flex items-end justify-between gap-2">
                <div>
                  <h3 className="text-sm md:text-base text-white font-semibold">{cat.name}</h3>
                  <p className="hidden sm:block text-xs text-white/65 mt-1">Per WhatsApp anfragen</p>
                </div>
                <span className="w-8 h-8 flex items-center justify-center bg-whatsapp text-white rounded-full flex-shrink-0 transition-transform group-hover:scale-110" aria-hidden="true">
                  <MessageCircle size={16} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
import { MessageCircle } from 'lucide-react'
import { createWhatsAppUrl } from '../lib/whatsapp'
