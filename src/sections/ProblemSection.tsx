import { XCircle } from 'lucide-react'

const problems = [
  'Motorcode, Baujahr und Ausstattung müssen stimmen',
  'PR-Nummern und OEM-Nummern sind entscheidend',
  'Viele Teile sehen identisch aus, passen aber nicht',
  'Ein falsches Teil kostet Zeit, Geld und Nerven',
]

export default function ProblemSection() {
  return (
    <section className="bg-midnight py-16 md:py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div className="entrance flex items-center gap-2 mb-5">
              <span className="text-xs font-semibold text-electric uppercase tracking-wider">Das Problem</span>
            </div>
            <h2 className="entrance-headline text-2xl md:text-3xl lg:text-[38px] text-white font-semibold mb-5 leading-tight tracking-tight">
              Warum nicht einfach selbst online suchen?
            </h2>
            <p className="entrance text-base text-white/55 mb-7 leading-relaxed" style={{ transitionDelay: '0.1s' }}>
              Viele Teile sehen gleich aus, passen aber nicht. Die Details machen den Unterschied – und die finden Sie nicht immer im Katalog.
            </p>

            <ul className="space-y-3">
              {problems.map((p, i) => (
                <li key={i} className="entrance flex items-start gap-3" style={{ transitionDelay: `${(i + 2) * 0.08}s` }}>
                  <XCircle size={18} className="text-red-400/80 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-sm md:text-base text-white/75">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Comparison */}
          <div className="entrance" style={{ transitionDelay: '0.3s' }}>
            <div className="bg-white/[0.04] border border-white/10">
              {/* Self search */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center gap-2.5 mb-4">
                  <XCircle size={18} className="text-red-400/70" strokeWidth={2} />
                  <span className="text-sm font-semibold text-white/70">Selbst suchen</span>
                </div>
                <div className="space-y-2.5 pl-7">
                  {['Katalog durchsuchen', 'Motorcode prüfen', 'OEM-Nummer vergleichen', 'Risiko: Falsches Teil'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <XCircle size={13} className="text-red-400/40 flex-shrink-0" />
                      <span className="text-sm text-white/40">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* TeilePilot24 */}
              <div className="p-6">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-5 h-5 rounded-full bg-whatsapp/20 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <span className="text-sm font-semibold text-white">TeilePilot24</span>
                </div>
                <div className="space-y-2.5 pl-7">
                  {['WhatsApp senden', 'Fahrzeugschein foto', 'Wir prüfen alles manuell', 'Passendes Angebot'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      <span className="text-sm text-white/75">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
