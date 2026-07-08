import { type FormEvent, useEffect, useState } from 'react'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'
import StickyWhatsApp from '../sections/StickyWhatsApp'

const inputClass = 'mt-2 w-full border border-silver/70 bg-white px-4 py-3 text-sm text-midnight outline-none transition-colors focus:border-electric focus:ring-2 focus:ring-electric/20'
const labelClass = 'block text-sm font-semibold text-midnight'
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwvdjdja'

export default function Widerrufsformular() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'succeeded' | 'error'>('idle')

  useEffect(() => {
    window.scrollTo(0, 0)
    const previousTitle = document.title
    document.title = 'Widerrufsformular | TeilePilot24'
    return () => {
      document.title = previousTitle
    }
  }, [])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitting')

    const form = event.currentTarget
    const formData = new FormData(form)
    const customerEmail = String(formData.get('email') || '')

    formData.set('_subject', 'Widerrufsformular TeilePilot24')
    formData.set('form_name', 'Widerrufsformular')
    formData.set('_replyto', customerEmail)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Formspree submission failed')
      }

      form.reset()
      setStatus('succeeded')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Navigation transparent={false} />
      <main className="min-h-screen bg-silver/40 pt-[72px]">
        <div className="max-w-[900px] mx-auto px-5 md:px-10 py-14 md:py-20">
          <header className="mb-9 md:mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-electric mb-3">Rechtliche Informationen</p>
            <h1 className="text-3xl md:text-5xl font-semibold text-midnight tracking-tight mb-4">Widerrufsformular</h1>
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

              {status === 'succeeded' && (
                <div className="mb-6 border border-emerald-200 bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-950">
                  Ihr Widerruf wurde gesendet. Sie bleiben auf dieser Seite und können bei Bedarf ein weiteres Formular absenden.
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 border border-red-200 bg-red-50 p-4 text-sm leading-relaxed text-red-950">
                  Das Formular konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder senden Sie Ihren Widerruf per E-Mail an <a href="mailto:aa@bc-fahrzeugteile.de">aa@bc-fahrzeugteile.de</a>.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="_subject" value="Widerrufsformular TeilePilot24" />
                <input type="hidden" name="form_name" value="Widerrufsformular" />

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
                    E-Mail-Adresse:
                    <input type="email" name="email" required className={inputClass} autoComplete="email" />
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
                  disabled={status === 'submitting'}
                  className="inline-flex w-full sm:w-auto items-center justify-center bg-electric px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-electric-dark disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'submitting' ? 'Wird gesendet...' : 'Widerruf absenden'}
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
