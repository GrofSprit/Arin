import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'
import StickyWhatsApp from '../sections/StickyWhatsApp'

export default function Widerrufsbelehrung() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const previousTitle = document.title
    document.title = 'Widerrufsbelehrung | TeilePilot24'
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
            <h1 className="text-3xl md:text-5xl font-semibold text-midnight tracking-tight mb-4">Widerrufsbelehrung</h1>
            <p className="text-base md:text-lg text-midnight/60 leading-relaxed">Informationen zum gesetzlichen Widerrufsrecht bei Bestellungen über TeilePilot24.</p>
          </header>

          <article className="legal-content bg-white border border-silver/70 shadow-sm p-6 md:p-10">
            <section>
              <h2>Widerrufsrecht</h2>
              <p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>
              <p>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Ware in Besitz genommen haben bzw. hat. Bei mehreren Waren einer einheitlichen Bestellung beginnt die Widerrufsfrist ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die letzte Ware in Besitz genommen haben bzw. hat.</p>
              <p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns</p>
              <address>
                <strong>TeilePilot24</strong><br />
                B&amp;C Fahrzeugteile, Bilal Demirci<br />
                Limitenstrasse 111<br />
                41236 Mönchengladbach<br />
                E-Mail: <a href="mailto:aa@bc-fahrzeugteile.de">aa@bc-fahrzeugteile.de</a>
              </address>
              <p>mittels einer eindeutigen Erklärung, zum Beispiel per Brief oder E-Mail, über Ihren Entschluss informieren, diesen Vertrag zu widerrufen.</p>
              <p>Sie können dafür das <Link to="/widerrufsformular">Widerrufsformular</Link> verwenden, das jedoch nicht vorgeschrieben ist.</p>
              <p>Sofern auf unserer Website eine elektronische Widerrufsfunktion bereitgestellt wird, können Sie Ihren Widerruf auch direkt über diese Funktion erklären. Nach Absenden des Widerrufs erhalten Sie eine Bestätigung über den Eingang Ihres Widerrufs.</p>
              <p>Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.</p>
            </section>

            <section>
              <h2>Folgen des Widerrufs</h2>
              <p>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.</p>
              <p>Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart. In keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.</p>
              <p>Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.</p>
              <p>Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns zurückzusenden oder zu übergeben.</p>
              <p>Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden.</p>
              <p>Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.</p>
              <p>Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.</p>
            </section>

            <section>
              <h2>Ausschluss des Widerrufsrechts</h2>
              <p>Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von Waren, die nicht vorgefertigt sind und für deren Herstellung eine individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich ist oder die eindeutig auf die persönlichen Bedürfnisse des Verbrauchers zugeschnitten sind.</p>
              <p>Das Widerrufsrecht besteht außerdem nicht bei Verträgen zur Lieferung von Waren, wenn diese nach der Lieferung aufgrund ihrer Beschaffenheit untrennbar mit anderen Gütern vermischt wurden.</p>
              <p>Bitte beachten Sie: Bei Fahrzeugersatzteilen, die lediglich anhand von Fahrzeugdaten, Fahrzeugschein, VIN oder OEM-Nummer passend ausgewählt werden, handelt es sich nicht automatisch um individuell angefertigte Waren. In diesen Fällen bleibt das gesetzliche Widerrufsrecht grundsätzlich bestehen, sofern keine gesetzliche Ausnahme vorliegt.</p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  )
}
