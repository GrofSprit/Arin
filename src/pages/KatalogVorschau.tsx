import { useRef, useState } from 'react'
import { ArrowLeft, ArrowUpRight, Check, FileText, MessageCircle, ShieldCheck } from 'lucide-react'
import { usePageMetadata } from '../hooks/usePageMetadata'
import { createWhatsAppUrl } from '../lib/whatsapp'
import './KatalogVorschau.css'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'
import { STATIC_ROUTE_METADATA } from '../lib/routeSeo'

const groups = [
  { name: 'Filter & Inspektion', note: 'Alles für deinen nächsten Service.', image: 4, parts: [0, 1, 2, 3, 4] },
  { name: 'Bremsen', note: 'Scheiben, Beläge und komplette Sets.', image: 7, parts: [5, 6, 7] },
  { name: 'Scheibenwischer', note: 'Klare Sicht. Vorne und hinten.', image: 8, parts: [8, 9] },
  { name: 'Motor & Zündung', note: 'Die kleinen Teile, die viel bewegen.', image: 10, parts: [10, 11, 12] },
  { name: 'Fahrwerk', note: 'Rund um Rad und Aufhängung.', image: 14, parts: [13, 14, 15] },
]
const parts = ['Ölfilter', 'Luftfilter', 'Innenraumfilter', 'Kraftstofffilter', 'Inspektionspaket', 'Bremsbeläge', 'Bremsscheiben', 'Bremsscheiben + Beläge', 'Frontscheibenwischer', 'Heckscheibenwischer', 'Zündkerzen', 'Glühkerzen', 'Zündspulen', 'Koppelstangen', 'Querlenker', 'Radlager']

const descriptions = [
  'Ölfilter für den regelmäßigen Ölwechsel.',
  'Luftfilter für die Wartung deines Motors.',
  'Pollenfilter für die Luft im Fahrzeuginnenraum.',
  'Kraftstofffilter passend zur Motorisierung.',
  'Filter für deinen Service – den Umfang stimmen wir persönlich ab.',
  'Bremsbeläge für die passende Achse und Bremsanlage.',
  'Bremsscheiben passend zu deiner Bremsanlage.',
  'Scheiben und Beläge zusammen anfragen.',
  'Wischerblätter für die Frontscheibe.',
  'Wischerblatt für die Heckscheibe.',
  'Zündkerzen passend zu deinem Benzinmotor.',
  'Glühkerzen passend zu deinem Dieselmotor.',
  'Zündspulen für dein Fahrzeug anfragen.',
  'Koppelstangen für die passende Einbauseite.',
  'Querlenker passend zu Achse und Einbauseite.',
  'Radlager passend zu Fahrzeug und Achse.',
]

function ProductImage({ index }: { index: number }) {
  return <div aria-hidden="true" className="catalog-photo" style={{ backgroundPosition: `${(index % 4) * 100 / 3}% ${Math.floor(index / 4) * 100 / 3}%` }} />
}

export default function KatalogVorschau() {
  usePageMetadata(STATIC_ROUTE_METADATA['/katalog'])
  const [active, setActive] = useState<number | null>(null)
  const heading = useRef<HTMLHeadingElement>(null)
  const current = active === null ? null : groups[active]
  function selectCategory(index: number | null) {
    setActive(index)
    requestAnimationFrame(() => {
      heading.current?.focus({ preventScroll: true })
      heading.current?.scrollIntoView({ block: 'start', behavior: 'instant' })
    })
  }
  return <div className="catalog-page">
    <Navigation transparent={false} />
    <main>
      <section className="catalog-hero catalog-width">
        <div><p className="catalog-eyebrow">ERSATZTEILE · PERSÖNLICH BERATEN</p><h1>Autoteile kaufen.<br /><span>Persönlich geprüft.</span></h1><p className="catalog-intro">Entdecke Ersatzteile für Wartung und Reparatur. Wähle dein Teil und erhalte ein passendes Angebot mit Preis und Lieferzeit – persönlich per WhatsApp.</p><div className="catalog-benefits"><span><Check size={16} />Persönliche Teileprüfung</span><span><Check size={16} />Kein Konto nötig</span></div></div>
        <aside className="catalog-how"><div className="catalog-how-heading"><FileText size={24} /><strong>Dein Weg zum passenden Angebot.</strong></div><ol><li><span>01</span>Teil auswählen</li><li><span>02</span>Fahrzeugschein in WhatsApp anhängen</li><li><span>03</span>Preis & Lieferzeit erhalten</li></ol><p>Decke nicht benötigte persönliche Angaben ab. Technische Fahrzeugdaten müssen lesbar bleiben.</p></aside>
      </section>
      <section className="catalog-width catalog-shop" aria-labelledby="catalog-heading">
        <div className="catalog-department"><span>Ersatzteile</span><p>Wartung & Reparatur</p><strong>Persönliches Angebot statt Fehlkauf</strong></div><nav aria-label="Katalog-Kategorien" className="catalog-tabs"><button aria-pressed={active === null} onClick={() => selectCategory(null)}>Alle Kategorien</button>{groups.map((g, i) => <button key={g.name} aria-pressed={active === i} onClick={() => selectCategory(i)}>{g.name}</button>)}</nav>
        <div className="catalog-section-title"><div><p className="catalog-eyebrow">{current ? 'ERSATZTEILE' : 'UNSER SORTIMENT'}</p><h2 id="catalog-heading" ref={heading} tabIndex={-1}>{current?.name || 'Ersatzteile nach Kategorie'}</h2><p>{current ? 'Wähle dein Teil und frage Preis und Lieferzeit per WhatsApp an.' : 'Von der Inspektion bis zur Reparatur: Finde den passenden Bereich für dein Fahrzeug.'}</p></div><span className="catalog-count">{current ? `${current.parts.length} Teilearten` : '5 Kategorien'}</span></div>
        {current ? <div className="catalog-grid catalog-products">{current.parts.map(index => <a key={index} className="catalog-card" href={createWhatsAppUrl(`Hallo TeilePilot24, ich möchte ${parts[index]} für mein Fahrzeug kaufen. Ich sende Ihnen gleich ein Foto meines Fahrzeugscheins. Bitte prüfen Sie die passende Ausführung und senden Sie mir ein Angebot mit Preis und Lieferzeit.`)} target="_blank" rel="noopener noreferrer" aria-label={`${parts[index]} per WhatsApp anfragen`}><div className="catalog-image-wrap"><ProductImage index={index} /><span className="catalog-card-arrow"><ArrowUpRight size={19} /></span></div><div className="catalog-card-copy"><h3>{parts[index]}</h3><p>{descriptions[index]}</p><div className="catalog-purchase"><span className="catalog-offer-label">Fahrzeugabhängig · auf Anfrage</span><span className="catalog-whatsapp"><MessageCircle size={17} />Preis & Lieferzeit anfragen</span><span className="catalog-channel">Anfrage per WhatsApp</span></div></div></a>)}</div> : <div className="catalog-grid">{groups.map((g, index) => <button className="catalog-card" key={g.name} onClick={() => selectCategory(index)}><div className="catalog-image-wrap"><ProductImage index={g.image} /><span className="catalog-card-arrow"><ArrowUpRight size={19} /></span></div><div className="catalog-card-copy"><span className="catalog-card-kicker">{g.parts.length} TEILEARTEN</span><h3>{g.name}</h3><p>{g.note}</p><span className="catalog-discover">Teile ansehen <ArrowUpRight size={16} /></span></div></button>)}</div>}
        <p className="catalog-image-note">KI-generierte Symbolbilder – keine konkreten Lagerartikel. Ausführung, Preis und Verfügbarkeit werden persönlich geprüft.</p>
        {current && <button className="catalog-back" onClick={() => selectCategory(null)}><ArrowLeft size={17} />Zurück zu allen Kategorien</button>}
      </section>
      <section className="catalog-width catalog-reassurance"><ShieldCheck size={28} /><div><h2>Du musst die genaue Variante nicht kennen.</h2><p>Wir prüfen anhand deiner Fahrzeugdaten, welches Teil infrage kommt. Eine verbindliche Zuordnung erfolgt persönlich – nicht durch das Produktbild.</p></div></section>

    </main>
    <Footer />
  </div>
}
