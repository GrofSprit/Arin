import { MapPin, MessageCircle, Star, Store, Truck } from 'lucide-react'

const trustItems = [
  { icon: Star, label: '4,6 Google Bewertung' },
  { icon: Truck, label: 'Versand in ganz Deutschland' },
  { icon: Store, label: 'Abholung möglich in Mönchengladbach' },
  { icon: MapPin, label: 'B&C Fahrzeugteile' },
  { icon: MessageCircle, label: 'Anfrage per WhatsApp' },
]

function TrustItems({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="trust-marquee-group" aria-hidden={hidden || undefined}>
      {trustItems.map((item) => (
        <div key={item.label} className="flex items-center gap-2.5 px-5 md:px-8 text-[11px] sm:text-xs font-medium text-white/75 whitespace-nowrap">
          <item.icon size={14} className="text-electric flex-shrink-0" fill={item.icon === Star ? 'currentColor' : 'none'} aria-hidden="true" />
          {item.label}
        </div>
      ))}
    </div>
  )
}

export default function TrustBar() {
  return (
    <aside aria-label="Vertrauensmerkmale" className="fixed top-[72px] left-0 right-0 z-[90] bg-midnight border-y border-white/10 shadow-lg overflow-hidden">
      <div className="relative h-11 flex items-center overflow-hidden">
        <div className="absolute inset-y-0 left-0 z-10 w-8 md:w-16 bg-gradient-to-r from-midnight to-transparent pointer-events-none" />
        <div className="trust-marquee">
          <TrustItems />
          <TrustItems hidden />
        </div>
        <div className="absolute inset-y-0 right-0 z-10 w-8 md:w-16 bg-gradient-to-l from-midnight to-transparent pointer-events-none" />
      </div>
    </aside>
  )
}
