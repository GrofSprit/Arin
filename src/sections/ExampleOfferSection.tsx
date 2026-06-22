import { Car, CheckCircle, Clock } from 'lucide-react'

export default function ExampleOfferSection() {
  return (
    <section className="bg-silver py-24 md:py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="entrance-headline text-h2 md:text-h2-md sm:text-h2-sm text-midnight font-medium mb-4">
            Ein Beispielangebot
          </h2>
          <p className="entrance text-body text-midnight/70 max-w-lg mx-auto" style={{ transitionDelay: '0.1s' }}>
            So sieht ein typisches Angebot von uns aus – klar, geprüft, verbindlich.
          </p>
        </div>

        <div className="entrance flex justify-center" style={{ transitionDelay: '0.2s' }}>
          <div className="bg-white w-full max-w-lg overflow-hidden">
            {/* Card Header */}
            <div className="bg-midnight px-8 py-6">
              <div className="flex items-center gap-3 mb-2">
                <Car size={20} className="text-electric" strokeWidth={1.5} />
                <span className="text-caption text-white/60 uppercase tracking-wider">Beispielangebot</span>
              </div>
              <h3 className="text-h3-sm text-white font-medium">
                Sachs Stoßdämpfer hinten
              </h3>
            </div>

            {/* Card Body */}
            <div className="px-8 py-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-electric flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-body-sm text-midnight">VIN-geprüft</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-electric flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-body-sm text-midnight">Lieferzeit: 2–3 Werktage</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-silver">
                <div className="flex items-baseline justify-between">
                  <span className="text-body-sm text-midnight/60">Preis</span>
                  <span className="text-h3 text-midnight font-medium">89 €</span>
                </div>
                <p className="text-caption text-midnight/40 mt-1 text-right">inkl. MwSt.</p>
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-8 pb-6">
              <a
                href="#request-form"
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.getElementById('request-form')
                  if (el) {
                    const offset = 80
                    const top = el.getBoundingClientRect().top + window.pageYOffset - offset
                    window.scrollTo({ top, behavior: 'smooth' })
                  }
                }}
                className="block w-full text-center bg-electric text-white text-body-sm font-medium py-4 transition-colors duration-300 hover:bg-electric-dark active:scale-[0.97]"
              >
                Ähnliches Teil anfragen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
