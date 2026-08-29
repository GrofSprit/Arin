import { ArrowRight, RotateCcw, Store, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PurchaseDeliverySection() {
  return (
    <section aria-labelledby="purchase-delivery-title" className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <h2 id="purchase-delivery-title" className="entrance-headline text-3xl md:text-4xl text-midnight font-semibold mb-4">
            Kauf &amp; Lieferung
          </h2>
          <p className="entrance text-base md:text-lg text-midnight/55 max-w-2xl mx-auto" style={{ transitionDelay: '0.1s' }}>
            Nach dem unverbindlichen Angebot entscheiden Sie, ob Sie bestellen möchten. Versand und Abholung sind möglich.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="entrance border border-silver bg-silver/20 p-6 md:p-7">
            <Truck size={24} className="text-electric mb-5" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-midnight mb-2">Versand</h3>
            <p className="text-sm text-midnight/60 leading-relaxed">Deutschlandweiter Versand ist möglich.</p>
          </article>
          <article className="entrance border border-silver bg-silver/20 p-6 md:p-7" style={{ transitionDelay: '0.08s' }}>
            <Store size={24} className="text-electric mb-5" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-midnight mb-2">Abholung</h3>
            <p className="text-sm text-midnight/60 leading-relaxed">Eine Abholung bei B&amp;C Fahrzeugteile in Mönchengladbach ist möglich.</p>
          </article>
          <article className="entrance border border-silver bg-silver/20 p-6 md:p-7" style={{ transitionDelay: '0.16s' }}>
            <RotateCcw size={24} className="text-electric mb-5" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-midnight mb-2">Widerruf &amp; Rückgabe</h3>
            <p className="text-sm text-midnight/60 leading-relaxed mb-4">Die rechtlichen Informationen und das Formular finden Sie auf den dafür vorgesehenen Seiten.</p>
            <div className="flex flex-col items-start gap-2 text-sm font-semibold">
              <Link to="/widerrufsbelehrung" className="inline-flex items-center gap-1.5 text-electric hover:text-electric-dark">
                Widerrufsbelehrung <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <Link to="/widerrufsformular" className="inline-flex items-center gap-1.5 text-electric hover:text-electric-dark">
                Widerrufsformular <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
