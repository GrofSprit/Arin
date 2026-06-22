import { useEffect, type ReactNode } from 'react'
import { AlertTriangle } from 'lucide-react'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'
import StickyWhatsApp from '../sections/StickyWhatsApp'

interface LegalPageLayoutProps {
  title: string
  intro: string
  children: ReactNode
}

export default function LegalPageLayout({ title, intro, children }: LegalPageLayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
    const previousTitle = document.title
    document.title = `${title} | TeilePilot24`
    return () => {
      document.title = previousTitle
    }
  }, [title])

  return (
    <>
      <Navigation transparent={false} />
      <main className="min-h-screen bg-silver/40 pt-[72px]">
        <div className="max-w-[900px] mx-auto px-5 md:px-10 py-14 md:py-20">
          <header className="mb-9 md:mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-electric mb-3">Rechtliche Informationen</p>
            <h1 className="text-3xl md:text-5xl font-semibold text-midnight tracking-tight mb-4">{title}</h1>
            <p className="text-base md:text-lg text-midnight/60 leading-relaxed">{intro}</p>
          </header>

          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 p-4 md:p-5 mb-8 text-sm text-amber-950 leading-relaxed">
            <AlertTriangle size={20} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p><strong>Rechtlicher Hinweis:</strong> Dieser Inhalt ist ein sorgfältig erstellter Entwurf und muss vor der Veröffentlichung durch eine rechtlich qualifizierte Person geprüft und vervollständigt werden.</p>
          </div>

          <article className="legal-content bg-white border border-silver/70 shadow-sm p-6 md:p-10">
            {children}
          </article>
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  )
}
