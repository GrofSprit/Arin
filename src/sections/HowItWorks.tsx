import { MessageCircle, Camera, Search, FileCheck } from 'lucide-react'

const steps = [
  {
    number: '1',
    icon: MessageCircle,
    title: 'WhatsApp senden',
    description: 'Schreiben Sie uns per WhatsApp, welches Teil Sie benötigen.',
  },
  {
    number: '2',
    icon: Camera,
    title: 'Fahrzeugschein fotografieren',
    description: 'Machen Sie ein Foto von Ihrem Fahrzeugschein und senden Sie es uns.',
  },
  {
    number: '3',
    icon: Search,
    title: 'Wir prüfen VIN & OEM',
    description: 'Unser Team prüft die VIN und OEM-Nummer manuell – keine automatische KI.',
  },
  {
    number: '4',
    icon: FileCheck,
    title: 'Sie erhalten ein Angebot',
    description: 'Sie bekommen ein passendes Angebot mit dem korrekten Ersatzteil.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-silver/40 py-16 md:py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="entrance-headline text-2xl md:text-3xl lg:text-[38px] text-midnight font-semibold mb-3 tracking-tight">
            So einfach funktioniert's
          </h2>
          <p className="entrance text-base text-midnight/55 max-w-md mx-auto" style={{ transitionDelay: '0.1s' }}>
            Vier einfache Schritte – kein Katalog, kein Stress.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="entrance bg-white p-6 md:p-7 text-center group shadow-sm"
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

        {/* Mechanic image */}
        <div className="entrance mt-8 md:mt-10 rounded overflow-hidden shadow-md" style={{ transitionDelay: '0.4s' }}>
          <img
            src="/images/mechanic.jpg"
            alt="Mechaniker prüft Ersatzteil in der Werkstatt"
            className="w-full h-48 md:h-64 lg:h-72 object-cover object-center"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
