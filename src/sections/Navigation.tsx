import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import { WHATSAPP_URL } from '../lib/whatsapp'

interface NavigationProps {
  transparent?: boolean
}

export default function Navigation({ transparent = true }: NavigationProps) {
  const [scrolled, setScrolled] = useState(() => !transparent || window.scrollY > 80)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (!transparent) return
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [transparent])

  useEffect(() => {
    if (!mobileOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [mobileOpen])

  const scrollToSection = useCallback((id: string) => {
    setMobileOpen(false)
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(id)
    if (el) {
      const offset = 124
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [])

  const navLinks = [
    { label: "So funktioniert's", id: 'how-it-works' },
    { label: 'Teile', id: 'parts' },
    { label: 'Vorteile', id: 'advantages' },
    { label: 'Bewertungen', id: 'reviews' },
    { label: 'FAQ', id: 'faq' },
  ]

  const isDark = transparent && !scrolled

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isDark ? 'bg-transparent' : 'bg-white border-b border-silver/60 shadow-sm'}`}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-12 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <button onClick={() => scrollToSection('top')} className="flex items-center select-none" aria-label="Zur Startseite">
            <span className={`text-xl font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-midnight'}`}>Teile</span>
            <span className="text-xl font-semibold text-electric">Pilot</span>
            <span className={`text-xl font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-midnight'}`}>24</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-electric ${isDark ? 'text-white/70' : 'text-midnight/70'}`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp text-white text-sm font-semibold px-5 py-2.5 transition-all duration-200 hover:bg-whatsapp-dark hover:shadow-lg active:scale-[0.97] flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Anfrage
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className={`lg:hidden p-2 transition-colors ${isDark ? 'text-white' : 'text-midnight'}`} aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'} aria-expanded={mobileOpen} aria-controls="mobile-navigation">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-[99] transition-all duration-300 ${mobileOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div className={`absolute inset-0 bg-midnight/60 transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setMobileOpen(false)} />
        {/* Panel */}
        <div id="mobile-navigation" className={`absolute top-[72px] left-0 right-0 bg-white shadow-2xl transition-all duration-300 ${mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
          <div className="flex flex-col p-6 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-base font-medium text-midnight py-3 px-2 hover:text-electric transition-colors border-b border-silver/40"
              >
                {link.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp text-white text-base font-semibold py-3.5 px-4 mt-3 flex items-center justify-center gap-2 transition-colors hover:bg-whatsapp-dark active:scale-[0.97]"
              onClick={() => setMobileOpen(false)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Anfrage
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
