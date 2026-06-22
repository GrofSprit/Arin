import { CheckCircle } from 'lucide-react'

const reasons = [
  'Keine komplizierte Teilesuche',
  'Keine 50 falschen Optionen',
  'VIN- und OEM-Prüfung durch Experten',
  'Persönliches Angebot',
  'Ideal für Menschen ohne technisches Fachwissen',
]

export default function WhyEasyVINSection() {
  return (
    <section className="bg-white py-24 md:py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text side */}
          <div>
            <h2 className="entrance-headline text-h2 md:text-h2-md sm:text-h2-sm text-midnight font-medium mb-4">
              Warum EasyVIN?
            </h2>
            <p className="entrance text-body text-midnight/70 mb-10" style={{ transitionDelay: '0.1s' }}>
              Wir nehmen Ihnen die Komplexität ab. Keine Kataloge, keine Unsicherheit – nur das richtige Teil.
            </p>

            <ul className="space-y-4">
              {reasons.map((reason, i) => (
                <li
                  key={reason}
                  className="entrance flex items-start gap-4"
                  style={{ transitionDelay: `${(i + 2) * 0.1}s` }}
                >
                  <CheckCircle size={22} className="text-electric flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-body text-midnight">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual side */}
          <div className="entrance flex justify-center" style={{ transitionDelay: '0.3s' }}>
            <div className="relative w-full max-w-md">
              <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Central shield */}
                <path
                  d="M200 40 L340 100 V200 C340 280 200 340 200 340 C200 340 60 280 60 200 V100 Z"
                  fill="#4361EE"
                  opacity="0.08"
                />
                <path
                  d="M200 40 L340 100 V200 C340 280 200 340 200 340 C200 340 60 280 60 200 V100 Z"
                  stroke="#4361EE"
                  strokeWidth="2"
                  opacity="0.3"
                />
                {/* Checkmark inside shield */}
                <path
                  d="M160 180 L190 210 L250 150"
                  stroke="#4361EE"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                {/* Orbiting elements */}
                <circle cx="60" cy="120" r="30" fill="#14213D" opacity="0.05" />
                <text x="50" y="128" fontSize="20" fontFamily="Space Grotesk, sans-serif" fill="#14213D" opacity="0.3" fontWeight="500">VIN</text>

                <circle cx="340" cy="120" r="30" fill="#14213D" opacity="0.05" />
                <text x="320" y="128" fontSize="18" fontFamily="Space Grotesk, sans-serif" fill="#14213D" opacity="0.3" fontWeight="500">OEM</text>

                <circle cx="60" cy="260" r="25" fill="#14213D" opacity="0.05" />
                <path d="M50 255 L60 265 L72 252" stroke="#14213D" strokeWidth="2" opacity="0.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                <circle cx="340" cy="260" r="25" fill="#14213D" opacity="0.05" />
                <path d="M330 255 L340 265 L352 252" stroke="#14213D" strokeWidth="2" opacity="0.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                {/* Connection lines */}
                <line x1="90" y1="120" x2="170" y2="140" stroke="#4361EE" strokeWidth="1" opacity="0.15" />
                <line x1="310" y1="120" x2="230" y2="140" stroke="#4361EE" strokeWidth="1" opacity="0.15" />
                <line x1="85" y1="260" x2="170" y2="240" stroke="#4361EE" strokeWidth="1" opacity="0.15" />
                <line x1="315" y1="260" x2="230" y2="240" stroke="#4361EE" strokeWidth="1" opacity="0.15" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
