import LegalPageLayout from '../components/LegalPageLayout'

export default function Impressum() {
  return (
    <LegalPageLayout
      title="Impressum"
      intro="Anbieterkennzeichnung für TeilePilot24, einen Service von B&C Fahrzeugteile."
    >
      <section>
        <h2>Angaben gemäß § 5 DDG</h2>
        <address>
          <strong>B&amp;C Fahrzeugteile</strong><br />
          Limitenstraße 111<br />
          41236 Mönchengladbach<br />
          Deutschland
        </address>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          Telefon: <a href="tel:+491733795779">+49 173 3795779</a><br />
          E-Mail: <a href="mailto:aa@bc-fahrzeugteile.de">aa@bc-fahrzeugteile.de</a>
        </p>
      </section>

      <section>
        <h2>Noch zu ergänzende Pflichtangaben</h2>
        <p><strong>Vor Veröffentlichung rechtlich prüfen und ergänzen:</strong> Rechtsform, vertretungsberechtigte Person, Register und Registernummer sowie Umsatzsteuer-Identifikationsnummer, soweit jeweils vorhanden oder erforderlich.</p>
      </section>

      <section>
        <h2>Verbraucherstreitbeilegung</h2>
        <p>Die Erklärung zur Bereitschaft oder Verpflichtung zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle muss vor Veröffentlichung passend zum Unternehmen ergänzt und rechtlich geprüft werden.</p>
      </section>
    </LegalPageLayout>
  )
}
