import { MessageCircle, Shield, Clock, Wallet, HelpCircle } from 'lucide-react'

const points = [
  {
    icon: MessageCircle,
    title: 'Kein komplizierter Online-Katalog',
    description: 'Kein Durchsuchen endloser Teilelisten. Einfach per WhatsApp schreiben.',
  },
  {
    icon: Shield,
    title: 'Keine Unsicherheit bei OEM-Nummern',
    description: 'Wir prüfen die richtige OEM-Nummer für Ihr Fahrzeug manuell.',
  },
  {
    icon: HelpCircle,
    title: 'Persönliche Prüfung statt automatischer Teilesuche',
    description: 'Ein echter Experte prüft Ihre Anfrage – keine KI, keine Fehler.',
  },
  {
    icon: Wallet,
    title: 'Kostenlos und unverbindlich',
    description: 'Die Anfrage ist komplett kostenlos. Sie entscheiden, ob Sie bestellen.',
  },
  {
    icon: Clock,
    title: 'Ideal, wenn Sie nicht genau wissen, welches Teil passt',
    description: 'Wir finden das richtige Teil für Sie – auch bei unklarer Bezeichnung.',
  },
]

export default function TrustSection() {
  return (
    <section id="advantages" className="bg-midnight py-20 md:py-28 lg:py-36">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <span className="entrance inline-flex items-center gap-2 text-xs font-semibold text-electric uppercase tracking-wider mb-4">
            <MessageCircle size={14} />
            WhatsApp-Vorteile
          </span>
          <h2 className="entrance-headline text-3xl md:text-4xl lg:text-[42px] text-white font-semibold mb-4 leading-tight">
            Warum Kunden lieber per WhatsApp anfragen
          </h2>
          <p className="entrance text-base md:text-lg text-white/50 max-w-xl mx-auto" style={{ transitionDelay: '0.1s' }}>
            Schnell, persönlich und unkompliziert – direkt vom Smartphone aus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {points.map((point, i) => (
            <div
              key={point.title}
              className="entrance group bg-white/5 border border-white/10 p-6 md:p-7 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="w-11 h-11 bg-electric/15 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-electric/25">
                <point.icon size={22} className="text-electric" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
