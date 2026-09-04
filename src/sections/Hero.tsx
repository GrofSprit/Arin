import { useEffect, useRef } from 'react'
import { CheckCircle2, FileText, MessageCircle, PackageCheck, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { trackWhatsAppConversion, WHATSAPP_URL } from '../lib/whatsapp'

const trustBadges = [
  'Kostenlos & unverbindlich',
  'Persönlich geprüft',
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
    <section ref={heroRef} className="hero-section relative min-h-[100svh] lg:min-h-[800px] flex items-center bg-midnight overflow-hidden">
      {/* Reactive gradient layers */}
      <div className="absolute inset-0 pointer-events-none will-change-[background]" style={{ background: 'radial-gradient(circle 600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(67, 97, 238, 0.15), transparent)' }} />
      <div className="absolute inset-0 pointer-events-none will-change-[background] mix-blend-overlay" style={{ background: 'radial-gradient(circle 400px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.06), transparent)' }} />

      <div className="relative z-[1] max-w-[1200px] mx-auto w-full px-5 pb-12 pt-36 md:px-10 md:pb-16 md:pt-40 lg:px-12 lg:pb-10 lg:pt-28">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            <h1 className="hero-entrance animate-hero-headline mb-4 text-[34px] font-semibold leading-[1.08] tracking-tight text-white md:text-[50px] lg:text-[54px]">
              Auto kaputt?<br />
              Passendes Ersatzteil-Angebot anfragen.
            </h1>
            <p className="hero-entrance animate-hero-desc mb-5 max-w-lg text-base leading-relaxed text-white/65 md:text-lg">
              Fahrzeugschein oder VIN per WhatsApp senden. Wir prüfen, welches Ersatzteil zu Ihrem Fahrzeug passt, und erstellen ein persönliches Angebot.
            </p>
            <p className="hero-entrance animate-hero-desc mb-5 max-w-lg text-sm leading-relaxed text-white/50" style={{ transitionDelay: '0.05s' }}>
              Bei Bedarf gleichen wir zusätzlich OEM-Nummern, PR-Codes und weitere Fahrzeugdaten ab.
            </p>

            {/* CTAs */}
            <div className="mb-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppConversion}
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

            <div className="hero-entrance animate-hero-trust mb-4 flex max-w-lg items-start gap-2.5 text-xs leading-relaxed text-white/45">
              <ShieldCheck size={15} className="mt-0.5 flex-shrink-0 text-electric" aria-hidden="true" />
              <p>
                Für die Teileprüfung sind vor allem die technischen Fahrzeugdaten relevant. Hinweise zur Verarbeitung Ihrer Angaben finden Sie im{' '}
                <Link to="/datenschutz" className="text-white/70 underline underline-offset-2 hover:text-white">Datenschutz</Link>.
              </p>
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

          {/* Right: Two-part visual story */}
          <div className="order-1 hidden grid-cols-2 gap-4 lg:order-2 lg:grid">
            <article className="hero-entrance animate-hero-cta1 border border-white/15 bg-white/[0.08] p-5 shadow-lg shadow-black/10 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center bg-electric/20 text-electric">
                  <FileText size={18} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <span className="text-sm font-semibold text-white/90">Fahrzeugschein oder VIN senden</span>
              </div>
              <div className="overflow-hidden">
                <img src="/images/fahrzeugschein.jpg" alt="Fahrzeugschein als Grundlage für die Teileanfrage" className="h-40 w-full object-cover" />
              </div>
              <div className="mt-4 flex items-start gap-2.5 bg-whatsapp/15 px-3.5 py-3 text-xs leading-relaxed text-white/75">
                <MessageCircle size={17} className="mt-0.5 shrink-0 text-whatsapp" aria-hidden="true" />
                Foto oder VIN bequem per WhatsApp senden.
              </div>
            </article>

            <article className="hero-entrance animate-hero-cta2 border border-white/15 bg-white/[0.08] p-5 shadow-lg shadow-black/10 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center bg-electric/20 text-electric">
                  <PackageCheck size={18} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <span className="text-sm font-semibold text-white/90">Geprüftes Ersatzteil-Angebot</span>
              </div>
              <div className="overflow-hidden">
                <img src="/images/parts-headlight.jpg" alt="Passender Scheinwerfer als geprüftes Ersatzteil" className="h-40 w-full object-cover" />
              </div>
              <div className="mt-4 bg-white/[0.08] px-3.5 py-3">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-electric">Persönlich geprüft</p>
                <p className="mt-1 text-sm font-medium text-white">Passende Variante für Ihr Fahrzeug</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
