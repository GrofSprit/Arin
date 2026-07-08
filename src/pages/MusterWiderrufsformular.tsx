import { useEffect } from 'react'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'
import StickyWhatsApp from '../sections/StickyWhatsApp'

const inputClass = 'mt-2 w-full border border-silver/70 bg-white px-4 py-3 text-sm text-midnight outline-none transition-colors focus:border-electric focus:ring-2 focus:ring-electric/20'
const labelClass = 'block text-sm font-semibold text-midnight'

export default function MusterWiderrufsformular() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const previousTitle = document.title
    document.title = 'Muster-Widerrufsformular | TeilePilot24'
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
            <h1 className="text-3xl md:text-5xl font-semibold text-midnight tracking-tight mb-4">Muster-Widerrufsformular</h1>
            <p className="text-base md:text-lg text-midnight/60 leading-relaxed">Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses Formular aus und senden Sie es ab.</p>
          </header>

          <article className="legal-content bg-white border border-silver/70 shadow-sm p-6 md:p-10">
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

            <section>
              <h2>Formular</h2>
              <form action="https://formspree.io/f/xbdvbdgb" method="POST" className="space-y-5">
                <input type="hidden" name="_subject" value="Muster-Widerrufsformular TeilePilot24" />
                <input type="hidden" name="form_name" value="Muster-Widerrufsformular" />

                <label className={labelClass}>
                  Hiermit widerrufe ich den von mir abgeschlossenen Vertrag über den Kauf der folgenden Ware(n):
                  <textarea
                    name="waren"
                    required
                    rows={5}
                    className={inputClass}
                    placeholder="Bitte Ware(n) eintragen"
                  />
                </label>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className={labelClass}>
                    Bestellt am:
                    <input type="date" name="bestellt_am" className={inputClass} />
                  </label>
                  <label className={labelClass}>
                    Erhalten am:
                    <input type="date" name="erhalten_am" className={inputClass} />
                  </label>
                </div>

                <label className={labelClass}>
                  Name des Verbrauchers:
                  <input type="text" name="name" required className={inputClass} autoComplete="name" />
                </label>

                <label className={labelClass}>
                  Anschrift des Verbrauchers:
                  <textarea
                    name="anschrift"
                    required
                    rows={4}
                    className={inputClass}
                    autoComplete="street-address"
                    placeholder="Straße, Hausnummer, PLZ und Ort"
                  />
                </label>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className={labelClass}>
                    Bestellnummer, falls vorhanden:
                    <input type="text" name="bestellnummer" className={inputClass} />
                  </label>
                  <label className={labelClass}>
                    E-Mail-Adresse, falls vorhanden:
                    <input type="email" name="email" className={inputClass} autoComplete="email" />
                  </label>
                </div>

                <label className={labelClass}>
                  Datum:
                  <input type="date" name="datum" required className={inputClass} />
                </label>

                <p className="text-sm text-midnight/60 leading-relaxed">
                  Unterschrift des Verbrauchers: Nur erforderlich, wenn dieses Formular in Papierform übermittelt wird.
                </p>

                <button
                  type="submit"
                  className="inline-flex w-full sm:w-auto items-center justify-center bg-electric px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-electric-dark"
                >
                  Widerruf absenden
                </button>
              </form>
            </section>
          </article>
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  )
}
