import { useEffect } from 'react'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'
import StickyWhatsApp from '../sections/StickyWhatsApp'

export default function Impressum() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const previousTitle = document.title
    document.title = 'IMPRESSUM | TeilePilot24'
    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <>
      <Navigation transparent={false} />
      <main className="min-h-screen bg-silver/40 pt-[72px]">
        <div className="max-w-[900px] mx-auto px-5 md:px-10 py-14 md:py-20">
          <article className="legal-content bg-white border border-silver/70 shadow-sm p-6 md:p-10">
            <h1>IMPRESSUM</h1>

            <section>
              <h3>Seitenbetreiber / Verantwortlicher</h3>
              <p>Der Verantwortliche im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze ist:</p>
              <address>
                <strong>Bilal Demirci</strong><br />
                Limitenstr. 111<br />
                41236 Mönchengladbach
              </address>
              <p>
                <strong>Inhaber:</strong> Bilal Demirci<br />
                <strong>Tel.:</strong> 02166 555 8 747<br />
                <strong>E-Mail:</strong> <a href="mailto:bd@bd-fahrzeugteile.de">bd@bd-fahrzeugteile.de</a>
              </p>
              <p>
                <strong>Umsatzsteuer-Identifikationsnummer gem. § 27a Umsatzsteuergesetz:</strong><br />
                DE351501463
              </p>
            </section>

            <hr />

            <section>
              <h2>Haftungsausschluss – Disclaimer</h2>
              <p>Alle Inhalte unseres Internetauftritts wurden mit größter Sorgfalt und nach bestem Gewissen erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
              <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
              <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.</p>
              <p>Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntniserlangung einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von Rechtsverletzungen werden wir diese Inhalte unverzüglich entfernen.</p>
            </section>

            <hr />

            <section>
              <h2>Haftungsbeschränkung für externe Links</h2>
              <p>Unsere Webseite kann Links auf externe Webseiten Dritter enthalten. Auf die Inhalte dieser direkt oder indirekt verlinkten Webseiten haben wir keinen Einfluss. Daher können wir für diese externen Links keine Gewähr für die Richtigkeit der Inhalte übernehmen. Für die Inhalte der externen Links sind die jeweiligen Anbieter oder Betreiber verantwortlich.</p>
              <p>Die externen Links wurden zum Zeitpunkt der Linksetzung auf mögliche Rechtsverstöße überprüft und waren zu diesem Zeitpunkt frei von rechtswidrigen Inhalten. Eine permanente inhaltliche Kontrolle der externen Links ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.</p>
              <p>Diese Haftungsausschlusserklärung gilt auch innerhalb des eigenen Internetauftrittes <strong><a href="http://www.teilepilot24.de/" target="_blank" rel="noopener noreferrer">www.teilepilot24.de</a></strong> gesetzten Links und Verweise. Für illegale, fehlerhafte oder unvollständige Inhalte sowie insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcher Informationen entstehen, haftet allein der Anbieter der jeweiligen Seite.</p>
              <p>Werden uns Rechtsverletzungen bekannt, werden die entsprechenden externen Links unverzüglich entfernt.</p>
            </section>

            <hr />

            <section>
              <h2>Urheberrecht</h2>
              <p>Die auf unserer Webseite veröffentlichten Inhalte und Werke unterliegen dem deutschen Urheberrecht.</p>
              <p>Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen Urhebers.</p>
              <p>Downloads und Kopien dieser Seite sind nur für den privaten und nicht kommerziellen Gebrauch gestattet.</p>
              <p>Soweit Inhalte auf dieser Webseite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet und entsprechend gekennzeichnet.</p>
              <p>Sollten Sie dennoch auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir entsprechende Inhalte unverzüglich entfernen.</p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  )
}
