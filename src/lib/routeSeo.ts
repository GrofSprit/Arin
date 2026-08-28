import {
  getSeoPageByPath,
  isSeoPageIndexable,
  seoPages,
  type SeoPageData,
} from '../data/seoPages'

export const SITE_URL = 'https://www.teilepilot24.de'
export const INDEX_ROBOTS = 'index, follow, max-image-preview:large'
export const NOINDEX_ROBOTS = 'noindex, follow'

export interface PageMetadata {
  title: string
  description: string
  canonicalPath: string | null
  robots?: string
  ogTitle?: string
  ogDescription?: string
  twitterTitle?: string
  twitterDescription?: string
}

export interface JsonLdEntry {
  id: string
  data: Record<string, unknown>
}

export const STATIC_ROUTE_METADATA = {
  '/': {
    title: 'Autoersatzteile mit VIN- & OEM-Prüfung | TeilePilot24',
    description: 'Fahrzeugschein oder VIN per WhatsApp senden: TeilePilot24 prüft Fahrzeugdaten und OEM-Nummern persönlich und erstellt ein passendes Ersatzteil-Angebot.',
    canonicalPath: '/',
    robots: INDEX_ROBOTS,
    ogDescription: 'Fahrzeugschein oder VIN per WhatsApp senden: persönliche Prüfung von Fahrzeugdaten und OEM-Nummern, danach erhalten Sie ein passendes Ersatzteil-Angebot.',
    twitterDescription: 'Fahrzeugschein oder VIN senden, persönlich prüfen lassen und ein passendes Ersatzteil-Angebot erhalten.',
  },
  '/impressum': {
    title: 'Impressum | TeilePilot24',
    description: 'Impressum von TeilePilot24: Angaben zum Betreiber B&C Fahrzeugteile, Kontaktinformationen und rechtliche Hinweise.',
    canonicalPath: '/impressum',
    robots: INDEX_ROBOTS,
  },
  '/datenschutz': {
    title: 'Datenschutzerklärung | TeilePilot24',
    description: 'Datenschutzerklärung von TeilePilot24 mit Informationen zur Verarbeitung personenbezogener Daten, Hosting, WhatsApp-Kontakt und Web Analytics.',
    canonicalPath: '/datenschutz',
    robots: INDEX_ROBOTS,
  },
  '/widerrufsbelehrung': {
    title: 'Widerrufsbelehrung | TeilePilot24',
    description: 'Informationen zum gesetzlichen Widerrufsrecht bei Bestellungen über TeilePilot24, zu Fristen, Rücksendung und Folgen des Widerrufs.',
    canonicalPath: '/widerrufsbelehrung',
    robots: INDEX_ROBOTS,
  },
  '/widerrufsformular': {
    title: 'Widerrufsformular | TeilePilot24',
    description: 'Widerrufsformular für TeilePilot24 herunterladen, ausfüllen und per E-Mail an B&C Fahrzeugteile senden.',
    canonicalPath: '/widerrufsformular',
    robots: INDEX_ROBOTS,
  },
} satisfies Record<string, PageMetadata>

export const LEGAL_PRERENDER_PATHS = [
  '/impressum',
  '/datenschutz',
  '/widerrufsbelehrung',
  '/widerrufsformular',
] as const

export const NOT_FOUND_METADATA: PageMetadata = {
  title: 'Seite nicht gefunden | TeilePilot24',
  description: 'Die aufgerufene Seite wurde nicht gefunden. Zurück zu TeilePilot24 oder direkt per WhatsApp Ersatzteile anfragen.',
  canonicalPath: null,
  robots: NOINDEX_ROBOTS,
}

export function absoluteUrl(pathname: string) {
  return `${SITE_URL}${pathname}`
}

export function getSeoPageMetadata(page: SeoPageData): PageMetadata {
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    canonicalPath: page.path,
    robots: isSeoPageIndexable(page.path) ? INDEX_ROBOTS : NOINDEX_ROBOTS,
  }
}

export function getSeoPageJsonLd(page: SeoPageData): JsonLdEntry[] {
  const pageUrl = absoluteUrl(page.path)
  const parentName = page.group === 'marken' ? 'Marken' : page.group === 'teile' ? 'Teile' : 'Ratgeber'
  const parentPath = page.group === 'marken' ? '/marken' : page.group === 'teile' ? '/teile' : '/ratgeber'
  const entries: JsonLdEntry[] = [
    {
      id: 'seo-breadcrumb-schema',
      data: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: absoluteUrl('/') },
          { '@type': 'ListItem', position: 2, name: parentName, item: absoluteUrl(parentPath) },
          { '@type': 'ListItem', position: 3, name: page.title, item: pageUrl },
        ],
      },
    },
  ]

  if (page.faq.length > 0) {
    entries.push({
      id: 'seo-faq-schema',
      data: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: page.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    })
  }

  if (page.path.startsWith('/ratgeber/')) {
    entries.push({
      id: 'seo-article-schema',
      data: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: page.title,
        description: page.metaDescription,
        mainEntityOfPage: pageUrl,
        publisher: { '@type': 'Organization', name: 'TeilePilot24' },
      },
    })
  }

  return entries
}

export function getRouteSeoState(pathname: string) {
  const staticMetadata = STATIC_ROUTE_METADATA[pathname as keyof typeof STATIC_ROUTE_METADATA]
  if (staticMetadata) {
    return { metadata: staticMetadata, schemas: [] as JsonLdEntry[] }
  }

  const page = getSeoPageByPath(pathname)
  if (!page) return undefined

  return {
    metadata: getSeoPageMetadata(page),
    schemas: getSeoPageJsonLd(page),
  }
}

export function getPrerenderManifest() {
  return {
    indexablePaths: ['/', ...seoPages.filter((page) => isSeoPageIndexable(page.path)).map((page) => page.path)],
    legalPaths: [...LEGAL_PRERENDER_PATHS],
    noindexPaths: seoPages.filter((page) => !isSeoPageIndexable(page.path)).map((page) => page.path),
  }
}
