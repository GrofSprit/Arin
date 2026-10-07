import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function KiAssistentSection() {
  return (
    <section aria-labelledby="home-ki-title" className="bg-white px-5 pt-10 md:px-10 md:pt-14 lg:px-12">
      <div className="mx-auto max-w-[1104px] rounded-2xl border border-electric/15 bg-gradient-to-br from-electric/5 via-white to-electric/10 p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="min-w-0 max-w-2xl">
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-wide text-electric sm:text-sm">
              <Sparkles size={18} aria-hidden="true" /> NEU · TeilePilot KI-Assistent
            </p>
            <h2 id="home-ki-title" className="text-2xl font-semibold leading-tight tracking-tight text-midnight sm:text-3xl lg:text-[36px]">
              Frag die KI, bevor du das falsche Teil kaufst.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-midnight/70">
              Fragen zu Ersatzteilen, Motoröl, OEM-Nummern oder deinem Fahrzeug? Der TeilePilot KI-Assistent gibt dir direkt eine erste Einschätzung.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 lg:items-center">
            <Link to="/ki-assistent" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-electric px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-electric-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-electric/30 focus-visible:ring-offset-2">
              KI-Assistent starten <ArrowRight size={19} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <p className="mt-6 border-t border-electric/10 pt-4 text-xs leading-relaxed text-midnight/60 sm:text-sm">
          KI für die erste Orientierung. Verbindliche Teilezuordnung anschließend persönlich durch TeilePilot24.
        </p>
      </div>
    </section>
  )
}
