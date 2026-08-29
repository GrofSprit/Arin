import { MessageCircle, ScanSearch, ShieldCheck, WalletCards } from 'lucide-react'

const points = [
  {
    icon: ShieldCheck,
    title: 'Persönliche Prüfung',
    description: 'Keine rein automatische Trefferliste: Fahrzeug- und Teileinformationen werden individuell geprüft.',
  },
  {
    icon: ScanSearch,
    title: 'VIN & OEM-Abgleich',
    description: 'VIN, Fahrzeugdaten und OEM-Referenzen können bei Bedarf mit weiteren technischen Angaben abgeglichen werden.',
  },
  {
    icon: MessageCircle,
    title: 'Direkter Kontakt',
    description: 'Rückfragen lassen sich unkompliziert direkt über WhatsApp klären.',
  },
  {
    icon: WalletCards,
    title: 'Unverbindliche Anfrage',
    description: 'Die Anfrage ist kostenlos. Nach dem Angebot entscheiden Sie selbst, ob Sie bestellen möchten.',
  },
]

export default function TrustSection() {
  return (
    <section id="advantages" className="bg-white py-16 md:py-24 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <span className="entrance inline-flex items-center gap-2 text-xs font-semibold text-electric uppercase tracking-wider mb-4">
            <ShieldCheck size={14} />
            Persönlich statt anonym
          </span>
          <h2 className="entrance-headline text-3xl md:text-4xl lg:text-[42px] text-midnight font-semibold mb-4 leading-tight">
            Warum TeilePilot24?
          </h2>
          <p className="entrance text-base md:text-lg text-midnight/55 max-w-2xl mx-auto" style={{ transitionDelay: '0.1s' }}>
            Ihre Anfrage landet nicht in einer anonymen Teileliste, sondern wird persönlich anhand der verfügbaren Fahrzeug- und Teileinformationen geprüft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {points.map((point, i) => (
            <div
              key={point.title}
              className="entrance group bg-silver/30 border border-silver p-6 md:p-7 transition-all duration-300 hover:bg-white hover:border-electric/30 hover:shadow-sm"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="w-11 h-11 bg-electric/15 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-electric/25">
                <point.icon size={22} className="text-electric" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-midnight mb-2">{point.title}</h3>
              <p className="text-sm text-midnight/60 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
