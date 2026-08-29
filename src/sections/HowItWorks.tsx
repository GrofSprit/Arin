import { FileCheck, FileText, MessageCircle, ScanSearch, Search, ShieldCheck, WalletCards } from 'lucide-react'

const steps = [
  {
    number: '1',
    icon: MessageCircle,
    title: 'Ersatzteil nennen',
    description: 'Beschreiben Sie kurz, welches Ersatzteil Sie benötigen, und ergänzen Sie bei Bedarf ein Foto.',
  },
  {
    number: '2',
    icon: FileText,
    title: 'Fahrzeugschein oder VIN senden',
    description: 'Senden Sie die Fahrzeugdaten bequem per WhatsApp, damit das Fahrzeug genauer eingegrenzt werden kann.',
  },
  {
    number: '3',
    icon: Search,
    title: 'Persönliche Prüfung',
    description: 'Wir prüfen die Fahrzeugdaten und berücksichtigen bei Bedarf OEM-Referenzen, PR-Codes oder weitere technische Angaben.',
  },
  {
    number: '4',
    icon: FileCheck,
    title: 'Unverbindliches Angebot erhalten',
    description: 'Sie erhalten ein persönliches Ersatzteil-Angebot und entscheiden anschließend selbst, ob Sie bestellen möchten.',
  },
]

const benefits = [
  { icon: ShieldCheck, title: 'Persönliche Prüfung', detail: 'Individuell statt rein automatisch.' },
  { icon: ScanSearch, title: 'VIN & OEM-Abgleich', detail: 'Bei Bedarf mit weiteren Fahrzeugdaten.' },
  { icon: MessageCircle, title: 'Direkter Kontakt', detail: 'Rückfragen unkompliziert per WhatsApp.' },
  { icon: WalletCards, title: 'Unverbindliche Anfrage', detail: 'Sie entscheiden nach dem Angebot.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-32 bg-white py-14 md:scroll-mt-36 md:py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-12">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="entrance-headline text-2xl md:text-3xl lg:text-[38px] text-midnight font-semibold mb-3 tracking-tight">
            So einfach funktioniert's
          </h2>
          <p className="entrance text-base text-midnight/55 max-w-md mx-auto" style={{ transitionDelay: '0.1s' }}>
            Von der Teileanfrage bis zum persönlichen Angebot – transparent in vier Schritten.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 md:gap-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="entrance group border border-silver/70 bg-silver/25 p-4 shadow-sm md:p-5"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-start gap-3 sm:block sm:text-center">
                <div className="flex shrink-0 flex-col items-center gap-2 sm:flex-row sm:justify-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-electric text-xs font-bold text-white transition-colors group-hover:bg-electric-dark">
                    {step.number}
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center bg-electric/8">
                    <step.icon size={20} className="text-electric" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="min-w-0 sm:mt-4">
                  <h3 className="mb-1.5 text-sm font-semibold text-midnight md:text-base">{step.title}</h3>
                  <p className="text-xs leading-relaxed text-midnight/55 md:text-sm">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2 lg:grid-cols-4 md:mt-8 md:gap-3">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="entrance flex items-start gap-2.5 border border-electric/15 bg-electric/5 px-3 py-3 md:px-4"
              style={{ transitionDelay: `${(index + 4) * 0.06}s` }}
            >
              <benefit.icon size={17} className="mt-0.5 shrink-0 text-electric" strokeWidth={1.7} aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold text-midnight md:text-sm">{benefit.title}</p>
                <p className="mt-0.5 text-[11px] leading-snug text-midnight/50 md:text-xs">{benefit.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
