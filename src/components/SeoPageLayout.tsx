import { useEffect, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react'

import Footer from '../sections/Footer'
import Navigation from '../sections/Navigation'
import StickyWhatsApp from '../sections/StickyWhatsApp'
import { trackWhatsAppConversion, WHATSAPP_URL } from '../lib/whatsapp'
import { type SeoPageData } from '../data/seoPages'
import { usePageMetadata } from '../hooks/usePageMetadata'
import { getSeoPageJsonLd, getSeoPageMetadata } from '../lib/routeSeo'

interface SeoPageLayoutProps {
  page: SeoPageData
  children?: ReactNode
}

function setJsonLd(id: string, data: unknown) {
  let script = document.getElementById(id) as HTMLScriptElement | null
  if (!script) {
    script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(data)
}

function removeJsonLd(id: string) {
  document.getElementById(id)?.remove()
}

export default function SeoPageLayout({ page, children }: SeoPageLayoutProps) {
  const secondaryCta = page.secondaryCta ?? { label: 'Ratgeber ansehen', path: '/ratgeber' }
  usePageMetadata(getSeoPageMetadata(page))

  useEffect(() => {
    const schemas = getSeoPageJsonLd(page)
    const schemaIds = ['seo-breadcrumb-schema', 'seo-faq-schema', 'seo-article-schema']
    schemaIds.forEach(removeJsonLd)
    schemas.forEach(({ id, data }) => setJsonLd(id, data))

    return () => {
      schemaIds.forEach(removeJsonLd)
    }
  }, [page])

  return (
    <>
      <Navigation transparent={false} />
      <main className="min-h-screen bg-midnight pt-[72px] text-white">
        <section className="border-b border-white/[0.08] bg-midnight">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-12">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-electric">{page.eyebrow}</p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">{page.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/68 md:text-xl">{page.intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackWhatsAppConversion}
                  className="inline-flex items-center justify-center gap-2 bg-whatsapp px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-dark"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  {page.ctaText}
                </a>
                <Link
                  to={secondaryCta.path}
                  className="inline-flex items-center justify-center gap-2 border border-white/12 px-5 py-3 text-sm font-semibold text-white/82 transition-colors hover:border-electric hover:text-white"
                >
                  {secondaryCta.label}
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <aside className="border border-white/[0.08] bg-white/[0.04] p-6">
              <p className="text-sm font-semibold text-white">Schnelle Prüfung</p>
              <ul className="mt-5 space-y-4 text-sm leading-relaxed text-white/68">
                <li className="flex gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-electric" aria-hidden="true" />
                  Fahrzeugschein oder VIN per WhatsApp senden.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-electric" aria-hidden="true" />
                  Teilenummern, Fotos und Werkstatthinweise ergänzen.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-electric" aria-hidden="true" />
                  Passende Ersatzteil-Variante prüfen lassen.
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="bg-white text-midnight">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-5 py-14 md:px-10 md:py-18 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-12">
            <article className="space-y-10">
              {page.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-semibold text-midnight md:text-3xl">{section.heading}</h2>
                  <p className="mt-4 text-base leading-[1.8] text-midnight/68 md:text-lg">{section.body}</p>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="mt-4 text-base leading-[1.8] text-midnight/68 md:text-lg">{paragraph}</p>
                  ))}
                  {section.subsections?.map((subsection) => (
                    <div key={subsection.heading} className="mt-6">
                      <h3 className="text-xl font-semibold text-midnight">{subsection.heading}</h3>
                      <p className="mt-3 text-base leading-[1.8] text-midnight/68 md:text-lg">{subsection.body}</p>
                    </div>
                  ))}
                  {section.bullets && (
                    <ul className="mt-5 space-y-3 text-base leading-relaxed text-midnight/68 md:text-lg">
                      {section.bullets.map((item) => (
                        <li key={item} className="flex gap-3">
                          <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-electric" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.table && (
                    <div className="mt-6 overflow-x-auto border border-silver/80">
                      <table className="min-w-[680px] w-full border-collapse text-left text-sm md:text-base">
                        <thead className="bg-midnight text-white">
                          <tr>
                            {section.table.headers.map((header) => (
                              <th key={header} scope="col" className="px-4 py-3 font-semibold">{header}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-silver/80">
                          {section.table.rows.map((row) => (
                            <tr key={row[0]} className="align-top">
                              {row.map((cell, index) => (
                                <td key={cell} className={`px-4 py-3 leading-relaxed text-midnight/68 ${index === 0 ? 'font-semibold text-midnight' : ''}`}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {section.links && (
                    <nav aria-label={`${section.heading}: weiterführende Seiten`} className="mt-5 flex flex-wrap gap-3">
                      {section.links.map((link) => (
                        <Link key={link.path} to={link.path} className="inline-flex items-center gap-2 border border-electric/25 bg-electric/5 px-4 py-2.5 text-sm font-semibold text-electric transition-colors hover:border-electric/50 hover:bg-electric/10">
                          {link.label}
                          <ArrowRight size={15} aria-hidden="true" />
                        </Link>
                      ))}
                    </nav>
                  )}
                </section>
              ))}
              {page.linkGroups?.map((group) => (
                <section key={group.title}>
                  <h2 className="text-2xl font-semibold text-midnight md:text-3xl">{group.title}</h2>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {group.links.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="flex items-center justify-between gap-3 border border-silver/80 bg-silver/35 px-4 py-3 text-sm font-semibold text-midnight/76 transition-colors hover:border-electric/40 hover:text-electric"
                      >
                        {link.label}
                        <ArrowRight size={15} aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
              {children}
            </article>

            <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
              <div className="border border-silver/80 bg-silver/40 p-6">
                <h2 className="text-lg font-semibold text-midnight">Verwandte Themen</h2>
                <nav className="mt-4 space-y-2" aria-label="Interne Links">
                  {page.related.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="flex items-center justify-between gap-3 border border-transparent bg-white px-4 py-3 text-sm font-medium text-midnight/72 transition-colors hover:border-electric/30 hover:text-electric"
                    >
                      {link.label}
                      <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="bg-midnight p-6 text-white">
                <p className="text-lg font-semibold">Unsicher, welches Teil passt?</p>
                <p className="mt-3 text-sm leading-relaxed text-white/64">
                  Senden Sie Fahrzeugschein, VIN oder ein Foto vom alten Teil. TeilePilot24 prüft die Angaben persönlich.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackWhatsAppConversion}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-whatsapp px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-dark"
                >
                  <MessageCircle size={17} aria-hidden="true" />
                  WhatsApp Anfrage
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-silver/40 text-midnight">
          <div className="mx-auto max-w-[980px] px-5 py-14 md:px-10 md:py-18">
            <p className="text-xs font-semibold uppercase tracking-wider text-electric">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-midnight md:text-4xl">Häufige Fragen</h2>
            {page.faqCategories ? (
              <div className="mt-8 space-y-8">
                {page.faqCategories.map((category) => (
                  <section key={category.title} className="border border-silver/80 bg-white">
                    <h3 className="border-b border-silver/80 px-5 py-4 text-xl font-semibold text-midnight md:px-6">
                      {category.title}
                    </h3>
                    <div className="divide-y divide-silver/80">
                      {category.items.map((item) => (
                        <section key={item.question} className="p-5 md:p-6">
                          <h4 className="text-lg font-semibold text-midnight">{item.question}</h4>
                          <p className="mt-3 text-base leading-relaxed text-midnight/66">{item.answer}</p>
                        </section>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            ) : (
              <div className="mt-8 divide-y divide-silver/80 border-y border-silver/80 bg-white">
                {page.faq.map((item) => (
                  <section key={item.question} className="p-5 md:p-6">
                    <h3 className="text-lg font-semibold text-midnight">{item.question}</h3>
                    <p className="mt-3 text-base leading-relaxed text-midnight/66">{item.answer}</p>
                  </section>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  )
}
