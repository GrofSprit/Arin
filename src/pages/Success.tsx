import { useEffect } from 'react'
import { CheckCircle, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'
import StickyWhatsApp from '../sections/StickyWhatsApp'

export default function Success() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navigation transparent={false} />
      <main className="min-h-[100dvh] bg-midnight flex items-center justify-center pt-20">
        <div className="max-w-lg mx-auto px-6 md:px-12 text-center py-20">
          <div className="mb-8">
            <div className="w-20 h-20 bg-electric/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-electric" strokeWidth={1.5} />
            </div>
            <h1 className="text-3xl md:text-4xl text-white font-semibold mb-4">
              Danke!
            </h1>
            <p className="text-base text-white/55 mb-10 leading-relaxed">
              Ihre Anfrage wurde gesendet. Wir melden uns schnellstmöglich.
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-3 bg-electric text-white text-base font-semibold px-8 py-3.5 transition-colors hover:bg-electric-dark active:scale-[0.97]"
            >
              <ArrowLeft size={18} />
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  )
}
