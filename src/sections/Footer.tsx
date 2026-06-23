import { Clock, MapPin, MessageCircle, PackageCheck, Star, Store } from 'lucide-react'
import { Link } from 'react-router-dom'
import { WHATSAPP_URL } from '../lib/whatsapp'
import { GOOGLE_REVIEWS_URL } from '../lib/externalLinks'

export default function Footer() {
  return (
    <footer className="bg-midnight border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 md:gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-0 mb-3">
              <span className="text-xl font-semibold text-white">Teile</span>
              <span className="text-xl font-semibold text-electric">Pilot</span>
              <span className="text-xl font-semibold text-white">24</span>
            </div>
            <p className="text-sm text-white/45 max-w-sm leading-relaxed">
              Das passende Ersatzteil. Ohne Stress. Wir prüfen die VIN und finden das richtige Teil für Ihr Fahrzeug.
            </p>
            <p className="text-sm text-white/65 mt-4">Ein Service von <strong className="text-white font-semibold">B&amp;C Fahrzeugteile</strong></p>
          </div>

          {/* Business information */}
          <div>
            <h4 className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">B&amp;C Fahrzeugteile</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-center gap-2"><MapPin size={15} className="text-electric" /> Mönchengladbach</li>
              <li>
                <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                  <Star size={15} className="text-electric fill-electric" /> 4,6 bei Google
                </a>
              </li>
              <li className="flex items-center gap-2"><PackageCheck size={15} className="text-electric" /> Deutschlandweiter Versand</li>
              <li className="flex items-center gap-2"><Store size={15} className="text-electric" /> Abholung möglich</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li><a href="mailto:aa@bc-fahrzeugteile.de" className="text-sm text-white/50 hover:text-white/80 transition-colors">aa@bc-fahrzeugteile.de</a></li>
              <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-whatsapp hover:text-whatsapp-dark transition-colors">+49 177 3773486</a></li>
              <li className="flex items-center gap-2 text-sm text-white/50"><Clock size={15} className="text-electric flex-shrink-0" /> Mo–Fr: 08:00–18:00</li>
              <li className="flex items-center gap-2 text-sm text-white/50"><MessageCircle size={15} className="text-electric flex-shrink-0" /> Antwort meist am selben Tag</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">© {new Date().getFullYear()} TeilePilot24. Alle Rechte vorbehalten.</p>
          <nav aria-label="Rechtliche Links" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            <Link to="/impressum" className="text-xs text-white/40 hover:text-white/80 transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="text-xs text-white/40 hover:text-white/80 transition-colors">Datenschutz</Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-xs text-whatsapp/60 hover:text-whatsapp transition-colors">WhatsApp Anfrage</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
