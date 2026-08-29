import { MapPin, MessageCircle, Star, Store, Truck } from 'lucide-react'

const trustItems = [
  { icon: Star, label: '4,9 Google Bewertung' },
  { icon: Truck, label: 'Versand in ganz Deutschland' },
  { icon: Store, label: 'Abholung möglich in Mönchengladbach' },
  { icon: MapPin, label: 'B&C Fahrzeugteile' },
  { icon: MessageCircle, label: 'Anfrage per WhatsApp' },
]

function TrustItems({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="trust-marquee-group" aria-hidden={hidden || undefined}>
      {trustItems.map((item) => (
        <div key={item.label} className="flex items-center gap-2.5 text-[10px] font-medium text-white/75 whitespace-nowrap sm:text-xs">
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
      <div className="mx-auto hidden h-11 max-w-[1440px] grid-cols-5 items-center px-5 md:px-10 lg:grid lg:px-12">
        {trustItems.map((item) => (
          <div key={item.label} className="flex min-w-0 items-center justify-center gap-1.5 px-1 text-center text-[10px] font-medium text-white/75 xl:gap-2 xl:text-[11px]">
            <item.icon size={14} className="flex-shrink-0 text-electric" fill={item.icon === Star ? 'currentColor' : 'none'} aria-hidden="true" />
            <span className="whitespace-nowrap">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="relative flex h-11 items-center overflow-hidden lg:hidden">
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
