import { MapPin, PackageCheck, Star, Store } from 'lucide-react'
import { WHATSAPP_URL } from '../lib/whatsapp'

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
              <li className="flex items-center gap-2"><Star size={15} className="text-electric fill-electric" /> 4,6 bei Google</li>
              <li className="flex items-center gap-2"><PackageCheck size={15} className="text-electric" /> Deutschlandweiter Versand</li>
              <li className="flex items-center gap-2"><Store size={15} className="text-electric" /> Abholung möglich</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">Kontakt</h4>
            <ul className="space-y-2.5">
              <li><a href="mailto:aa@bc-fahrzeugteile.de" className="text-sm text-white/50 hover:text-white/80 transition-colors">aa@bc-fahrzeugteile.de</a></li>
              <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-whatsapp hover:text-whatsapp-dark transition-colors">+49 173 3795779</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">© {new Date().getFullYear()} TeilePilot24. Alle Rechte vorbehalten.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-xs text-whatsapp/60 hover:text-whatsapp transition-colors">
            WhatsApp Anfrage
          </a>
        </div>
      </div>
    </footer>
  )
}
