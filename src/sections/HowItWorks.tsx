import { FileCheck, FileText, MessageCircle, Search } from 'lucide-react'
import PartsSearchHelpSection from './PartsSearchHelpSection'

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
    <section id="how-it-works" className="scroll-mt-32 bg-white py-12 md:scroll-mt-36 md:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-12">
        <div className="text-center mb-7 md:mb-10">
          <h2 className="entrance-headline text-2xl md:text-3xl lg:text-[38px] text-midnight font-semibold mb-3 tracking-tight">
            So einfach funktioniert's
          </h2>
          <p className="entrance text-base text-midnight/55 max-w-md mx-auto" style={{ transitionDelay: '0.1s' }}>
            Von der Teileanfrage bis zum persönlichen Angebot – transparent in vier Schritten.
          </p>
        </div>

        <ol className="grid grid-cols-1 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.number}
              className="entrance relative border-l border-electric/25 pb-6 pl-8 last:pb-0 lg:border-l-0 lg:border-t lg:pb-0 lg:pl-0 lg:pr-6 lg:pt-8 lg:last:pr-0"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-electric text-xs font-bold text-white lg:-top-4 lg:left-0">
                {step.number}
              </span>
              <div className="flex items-start gap-3 lg:block">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-electric/8 text-electric lg:mb-3">
                  <step.icon size={19} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="mb-1.5 text-sm font-semibold text-midnight md:text-base lg:pr-2">{step.title}</h3>
                  <p className="text-xs leading-relaxed text-midnight/55 md:text-sm">{step.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <PartsSearchHelpSection />
      </div>
    </section>
  )
}
