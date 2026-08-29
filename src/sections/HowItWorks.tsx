import { FileCheck, FileText, MessageCircle, Search } from 'lucide-react'

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

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-32 bg-white py-16 md:scroll-mt-36 md:py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="entrance-headline text-2xl md:text-3xl lg:text-[38px] text-midnight font-semibold mb-3 tracking-tight">
            So einfach funktioniert's
          </h2>
          <p className="entrance text-base text-midnight/55 max-w-md mx-auto" style={{ transitionDelay: '0.1s' }}>
            Von der Teileanfrage bis zum persönlichen Angebot – transparent in vier Schritten.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="entrance group border border-silver/70 bg-silver/25 p-6 text-center shadow-sm md:p-7"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="w-10 h-10 rounded-full bg-electric text-white flex items-center justify-center text-sm font-bold mx-auto mb-4 transition-colors group-hover:bg-electric-dark">
                {step.number}
              </div>
              <div className="w-12 h-12 bg-electric/8 flex items-center justify-center mx-auto mb-4">
                <step.icon size={24} className="text-electric" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold text-midnight mb-2">{step.title}</h3>
              <p className="text-sm text-midnight/55 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
