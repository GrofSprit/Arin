import { FileText, Upload, UserCheck, FileSearch } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Bedarf beschreiben',
    description: 'Sagen Sie uns, welches Ersatzteil Sie benötigen – so konkret wie möglich.',
  },
  {
    number: '02',
    icon: Upload,
    title: 'Fahrzeugschein hochladen',
    description: 'Laden Sie einen klaren Scan oder ein Foto Ihres Fahrzeugscheins hoch.',
  },
  {
    number: '03',
    icon: UserCheck,
    title: 'Expertenprüfung',
    description: 'Unser Team prüft Ihre VIN und die OEM-Kompatibilität manuell – keine KI-Ratespiele.',
  },
  {
    number: '04',
    icon: FileSearch,
    title: 'Angebot erhalten',
    description: 'Sie erhalten ein persönliches Angebot mit dem korrekten, passenden Ersatzteil.',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-silver py-24 md:py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="entrance-headline text-h2 md:text-h2-md sm:text-h2-sm text-midnight font-medium mb-4">
            So funktioniert's
          </h2>
          <p className="entrance text-body text-midnight/70 max-w-lg mx-auto" style={{ transitionDelay: '0.1s' }}>
            Vier einfache Schritte zum richtigen Ersatzteil – ohne komplizierte Kataloge.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="entrance bg-white p-8 relative"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Step number */}
              <span className="text-caption text-electric/40 font-medium absolute top-6 right-6">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-electric/10 mb-6">
                <step.icon size={24} className="text-electric" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-h3-sm text-midnight font-medium mb-3">{step.title}</h3>
              <p className="text-body-sm text-midnight/60">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
