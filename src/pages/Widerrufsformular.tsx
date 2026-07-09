import { useEffect } from 'react'
import { Download, Mail } from 'lucide-react'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'
import StickyWhatsApp from '../sections/StickyWhatsApp'

const PDF_URL = '/widerrufsformular-kfz-teile.pdf'
const MAIL_TO = 'mailto:aa@bc-fahrzeugteile.de?subject=Widerruf%20TeilePilot24'

export default function Widerrufsformular() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const previousTitle = document.title
    document.title = 'Widerrufsformular | TeilePilot24'
    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <>
      <Navigation transparent={false} />
      <main className="min-h-screen bg-silver/40 pt-[72px]">
        <div className="max-w-[900px] mx-auto px-5 md:px-10 py-14 md:py-20">
          <header className="mb-9 md:mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-electric mb-3">Rechtliche Informationen</p>
            <h1 className="text-3xl md:text-5xl font-semibold text-midnight tracking-tight mb-4">Widerrufsformular</h1>
            <p className="text-base md:text-lg text-midnight/60 leading-relaxed">
              Für einen Widerruf müssen Sie kein Online-Formular ausfüllen. Laden Sie einfach das PDF herunter, füllen Sie es aus und senden Sie es per E-Mail an uns zurück.
            </p>
          </header>

          <article className="legal-content bg-white border border-silver/70 shadow-sm p-6 md:p-10">
            <section>
              <h2>So senden Sie Ihren Widerruf</h2>
              <ol className="space-y-4 text-base text-midnight/70 leading-[1.75]">
                <li><strong>1.</strong> PDF-Widerrufsformular herunterladen.</li>
                <li><strong>2.</strong> Formular am Computer ausfüllen oder ausdrucken und handschriftlich ausfüllen.</li>
                <li><strong>3.</strong> Ausgefülltes Formular als PDF, Foto oder Scan per E-Mail an <a href="mailto:aa@bc-fahrzeugteile.de">aa@bc-fahrzeugteile.de</a> senden.</li>
              </ol>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={PDF_URL}
                  download="Widerrufsformular-TeilePilot24.pdf"
                  aria-label="PDF-Widerrufsformular herunterladen"
                  className="inline-flex min-h-12 items-center justify-center gap-2 bg-electric px-6 py-3.5 text-sm font-semibold !text-white transition-colors hover:bg-electric-dark hover:!text-white"
                  style={{ color: '#ffffff' }}
                >
                  <Download size={17} aria-hidden="true" className="text-white" />
                  <span className="text-white">PDF herunterladen</span>
                </a>
                <a
                  href={MAIL_TO}
                  className="inline-flex items-center justify-center gap-2 border border-midnight/15 px-6 py-3.5 text-sm font-semibold text-midnight transition-colors hover:bg-silver/70"
                >
                  <Mail size={17} aria-hidden="true" />
                  Per E-Mail senden
                </a>
              </div>
            </section>

            <section>
              <h2>Empfänger</h2>
              <address>
                <strong>TeilePilot24</strong><br />
                B&amp;C Fahrzeugteile, Bilal Demirci<br />
                Limitenstrasse 111<br />
                41236 Mönchengladbach<br />
                E-Mail: <a href="mailto:aa@bc-fahrzeugteile.de">aa@bc-fahrzeugteile.de</a>
              </address>
            </section>
          </article>
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  )
}
