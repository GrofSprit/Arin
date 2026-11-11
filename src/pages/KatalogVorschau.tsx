import { useRef, useState } from 'react'
import { ArrowLeft, ArrowUpRight, MessageCircle, X } from 'lucide-react'
import { usePageMetadata } from '../hooks/usePageMetadata'
import { createWhatsAppUrl, WHATSAPP_URL } from '../lib/whatsapp'
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
  const [selected, setSelected] = useState<number>(0)
  const details = useRef<HTMLDialogElement>(null)
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
      <div className="catalog-width catalog-opening catalog-opening-actions"><div><h1>Welches Teil brauchst du?</h1><p>Teil auswählen – wir prüfen die passende Ausführung und senden dir ein Angebot.</p></div><a className="catalog-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />Direkt per WhatsApp fragen</a></div>
      <section className="catalog-width catalog-shop" aria-labelledby="catalog-heading">
        <nav aria-label="Katalog-Kategorien" className="catalog-tabs"><button aria-pressed={active === null} onClick={() => selectCategory(null)}>Alle Kategorien</button>{groups.map((g, i) => <button key={g.name} aria-pressed={active === i} onClick={() => selectCategory(i)}>{g.name}</button>)}</nav>
        <div className="catalog-section-title"><div><p className="catalog-eyebrow">{current ? 'ERSATZTEILE' : 'UNSER SORTIMENT'}</p><h2 id="catalog-heading" ref={heading} tabIndex={-1}>{current?.name || 'Ersatzteile nach Kategorie'}</h2><p>{current ? 'Wähle dein Teil für weitere Informationen.' : 'Wähle dein Teil für weitere Informationen.'}</p></div><span className="catalog-count">{current ? `${current.parts.length} Teilearten` : '5 Kategorien'}</span></div>
        {current ? <div className="catalog-grid catalog-products">{current.parts.map(index => <button key={index} className="catalog-card" aria-haspopup="dialog" onClick={() => { setSelected(index); details.current?.showModal() }}><div className="catalog-image-wrap"><ProductImage index={index} /><span className="catalog-card-arrow"><ArrowUpRight size={19} /></span></div><div className="catalog-card-copy"><h3>{parts[index]}</h3><p>{descriptions[index]}</p><span className="catalog-discover">Teil auswählen <ArrowUpRight size={16} /></span></div></button>)}</div> : <div className="catalog-grid">{groups.map((group, index) => <button key={group.name} className="catalog-card" onClick={() => selectCategory(index)}><div className="catalog-image-wrap"><ProductImage index={group.image} /></div><div className="catalog-card-copy"><h3>{group.name}</h3><p>{group.note}</p><span className="catalog-discover">Teile ansehen <ArrowUpRight size={16} /></span></div></button>)}<a className="catalog-card catalog-help-card" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle size={36} /><h3>Dein Teil nicht dabei?</h3><p>Sag uns, was du suchst.</p><span className="catalog-whatsapp">Per WhatsApp fragen</span></a></div>}
        <p className="catalog-image-note">KI-generierte Symbolbilder – keine konkreten Lagerartikel. Ausführung, Preis und Verfügbarkeit werden persönlich geprüft.</p>
        {current && <button className="catalog-back" onClick={() => selectCategory(null)}><ArrowLeft size={17} />Zurück zu allen Kategorien</button>}
      </section>
    </main>
    <dialog ref={details} className="catalog-detail" aria-labelledby="catalog-detail-title">
      <button className="catalog-detail-close" onClick={() => details.current?.close()} aria-label="Schließen" autoFocus><X size={22} /></button>
      <div className="catalog-detail-product"><ProductImage index={selected} /><div><p className="catalog-eyebrow">DEIN AUSGEWÄHLTES TEIL</p><h2 id="catalog-detail-title">{parts[selected]}</h2><p>{descriptions[selected]}</p></div></div>
      <h3>Passend zu deinem Fahrzeug – persönlich geprüft.</h3>
      <p>Auch beim gleichen Fahrzeugmodell können unterschiedliche Ausführungen verbaut sein. Deshalb prüfen wir deine Fahrzeugdaten, bevor wir dir ein konkretes Teil anbieten.</p>
      <ol><li><strong>1. WhatsApp öffnen</strong><span>Dein ausgewähltes Teil steht bereits in der Nachricht.</span></li><li><strong>2. Fahrzeugschein senden</strong><span>Hänge das Foto direkt in WhatsApp an.</span></li><li><strong>3. Angebot erhalten</strong><span>Wir prüfen die Ausführung und Liefermöglichkeit. Du erhältst Preis und Lieferzeit und entscheidest dann über die Bestellung.</span></li></ol>
      <p className="catalog-detail-privacy">Nicht benötigte persönliche Angaben kannst du abdecken. Technische Fahrzeugdaten müssen lesbar bleiben.</p>
      <a className="catalog-whatsapp" href={createWhatsAppUrl(`Hallo TeilePilot24, ich möchte ${parts[selected]} für mein Fahrzeug kaufen. Ich sende Ihnen gleich ein Foto meines Fahrzeugscheins. Bitte prüfen Sie die passende Ausführung und senden Sie mir ein Angebot mit Preis und Lieferzeit.`)} target="_blank" rel="noopener noreferrer"><MessageCircle size={19} />Preis & Lieferzeit per WhatsApp anfragen</a>
      <p className="catalog-channel">Mit der Anfrage gibst du noch keine Bestellung auf.</p>
    </dialog>
    <Footer />
  </div>
}
