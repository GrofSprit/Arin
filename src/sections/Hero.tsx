import { useEffect, useRef } from 'react'
import { CheckCircle2, MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../lib/whatsapp'

const trustBadges = [
  'Kostenlose Anfrage',
  'VIN & OEM Prüfung',
  'Versand in ganz Deutschland',
  'Abholung in Mönchengladbach möglich',
]

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const isHoverDevice = window.matchMedia('(hover: hover)').matches
    if (!isHoverDevice) return
    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      hero.style.setProperty('--mouse-x', x + '%')
      hero.style.setProperty('--mouse-y', y + '%')
    }
    hero.addEventListener('mousemove', handleMouseMove)
    return () => hero.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 124
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section ref={heroRef} className="hero-section relative min-h-[100svh] lg:min-h-[100dvh] flex items-center bg-midnight overflow-hidden">
      {/* Reactive gradient layers */}
      <div className="absolute inset-0 pointer-events-none will-change-[background]" style={{ background: 'radial-gradient(circle 600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(67, 97, 238, 0.15), transparent)' }} />
      <div className="absolute inset-0 pointer-events-none will-change-[background] mix-blend-overlay" style={{ background: 'radial-gradient(circle 400px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.06), transparent)' }} />

      <div className="relative z-[1] max-w-[1200px] mx-auto px-5 md:px-10 lg:px-12 pt-40 pb-16 md:pt-44 md:pb-20 lg:pt-40 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            <h1 className="hero-entrance animate-hero-headline text-[34px] md:text-[50px] lg:text-[58px] text-white font-semibold mb-5 leading-[1.08] tracking-tight">
              Auto kaputt?<br />
              Ersatzteil in wenigen Minuten finden.
            </h1>
            <p className="hero-entrance animate-hero-desc text-base md:text-lg text-white/65 max-w-lg mb-6 leading-relaxed">
              Senden Sie uns Ihren Fahrzeugschein oder Ihre VIN per WhatsApp. Wir prüfen VIN, OEM-Nummern und Fahrzeugdaten manuell und finden das passende Ersatzteil für Ihr Fahrzeug.
            </p>
            <p className="hero-entrance animate-hero-desc text-sm md:text-base text-electric font-semibold mb-5" style={{ transitionDelay: '0.05s' }}>
              Powered by B&amp;C Fahrzeugteile
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-entrance animate-hero-cta1 inline-flex items-center justify-center gap-2.5 bg-whatsapp text-white text-base md:text-lg font-semibold px-7 md:px-9 py-4 md:py-[1.125rem] shadow-xl shadow-whatsapp/25 transition-all duration-200 hover:bg-whatsapp-dark hover:shadow-2xl hover:-translate-y-0.5 active:scale-[0.97]"
              >
                <MessageCircle size={21} />
                Jetzt per WhatsApp anfragen
              </a>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="hero-entrance animate-hero-cta2 inline-flex items-center justify-center gap-2 bg-transparent border border-white/25 text-white text-base font-medium px-6 md:px-8 py-3.5 transition-all duration-200 hover:bg-white/10 active:scale-[0.97]"
              >
                So funktioniert’s
              </button>
            </div>

            {/* Trust badges */}
            <div className="hero-entrance animate-hero-trust flex flex-wrap gap-2 max-w-lg">
              {trustBadges.map((badge) => (
                <span key={badge} className="trust-badge text-xs md:text-sm">
                  <CheckCircle2 size={13} className="text-electric flex-shrink-0" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Visual Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-3 order-1 lg:order-2">
            {/* Card 1: Fahrzeugschein */}
            <div className="hero-entrance animate-hero-cta1 bg-white/[0.06] backdrop-blur-sm border border-white/10 p-4 animate-float" style={{ animationDelay: '0s' }}>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 bg-electric/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4361EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M9 13h7"/><path d="M9 17h4"/></svg>
                </div>
                <span className="text-sm text-white/80 font-medium">Fahrzeugschein senden</span>
              </div>
              <div className="rounded overflow-hidden">
                <img src="/images/fahrzeugschein.jpg" alt="Fahrzeugschein" className="w-full h-24 object-cover" />
              </div>
              <p className="text-xs text-white/40 mt-2">Foto aufnehmen & per WhatsApp senden</p>
            </div>

            {/* Card 2: WhatsApp */}
            <div className="hero-entrance animate-hero-cta2 bg-white/[0.06] backdrop-blur-sm border border-white/10 p-4 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 bg-whatsapp/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <span className="text-sm text-white/80 font-medium">VIN & OEM prüfen</span>
              </div>
              <div className="space-y-2">
                <div className="bg-white/[0.08] rounded-lg rounded-bl-sm px-3 py-2 text-xs text-white/60">Hallo, ich brauche einen Scheinwerfer für meinen Golf 7...</div>
                <div className="bg-whatsapp/20 rounded-lg rounded-br-sm px-3 py-2 text-xs text-white/80">Gerne! Wir prüfen VIN und OEM-Nummern.</div>
              </div>
            </div>

            {/* Card 3: Angebot */}
            <div className="hero-entrance animate-hero-trust bg-white/[0.06] backdrop-blur-sm border border-white/10 p-4 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 bg-electric/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4361EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <span className="text-sm text-white/80 font-medium">Angebot erstellt</span>
              </div>
              <div className="bg-white/[0.08] px-4 py-3">
                <p className="text-[10px] text-electric font-medium uppercase tracking-wider mb-1">VIN-geprüft</p>
                <p className="text-sm text-white font-medium">Scheinwerfer rechts - Golf 7</p>
                <p className="text-lg text-electric font-semibold mt-1">124 €</p>
              </div>
            </div>

            {/* Card 4: Teil */}
            <div className="hero-entrance animate-hero-trust bg-white/[0.06] backdrop-blur-sm border border-white/10 p-4 animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 bg-electric/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4361EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
                <span className="text-sm text-white/80 font-medium">Teil bestellen</span>
              </div>
              <div className="rounded overflow-hidden">
                <img src="/images/parts-headlight.jpg" alt="Scheinwerfer" className="w-full h-24 object-cover" />
              </div>
              <p className="text-xs text-white/40 mt-2">Versand oder Abholung möglich</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
