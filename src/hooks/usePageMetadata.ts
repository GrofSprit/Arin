import { useEffect } from 'react'

import { INDEX_ROBOTS, SITE_URL, type PageMetadata } from '../lib/routeSeo'

function setMeta(name: string, content: string) {
  let meta = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.name = name
    document.head.appendChild(meta)
  }
  meta.content = content
}

function setPropertyMeta(property: string, content: string) {
  let meta = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('property', property)
    document.head.appendChild(meta)
  }
  meta.content = content
}

function setCanonical(url: string) {
  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }
  canonical.href = url
}

export function usePageMetadata({
  title,
  description,
  canonicalPath,
  robots = INDEX_ROBOTS,
  ogTitle = title,
  ogDescription = description,
  twitterTitle = ogTitle,
  twitterDescription = ogDescription,
}: PageMetadata) {
  useEffect(() => {
    window.scrollTo(0, 0)

    const previousTitle = document.title
    const previousDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]')?.content
    const previousRobots = document.querySelector<HTMLMetaElement>('meta[name="robots"]')?.content
    const previousCanonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href
    const previousOgTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.content
    const previousOgDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.content
    const previousOgUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.content
    const previousTwitterTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')?.content
    const previousTwitterDescription = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')?.content

    document.title = title
    setMeta('description', description)
    setMeta('robots', robots)
    setPropertyMeta('og:title', ogTitle)
    setPropertyMeta('og:description', ogDescription)
    setMeta('twitter:title', twitterTitle)
    setMeta('twitter:description', twitterDescription)

    if (canonicalPath === null) {
      document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.remove()
      document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.remove()
    } else {
      const canonicalUrl = `${SITE_URL}${canonicalPath}`
      setCanonical(canonicalUrl)
      setPropertyMeta('og:url', canonicalUrl)
    }

    return () => {
      document.title = previousTitle
      if (previousDescription) setMeta('description', previousDescription)
      if (previousRobots) setMeta('robots', previousRobots)
      if (previousCanonical) setCanonical(previousCanonical)
      if (previousOgTitle) setPropertyMeta('og:title', previousOgTitle)
      if (previousOgDescription) setPropertyMeta('og:description', previousOgDescription)
      if (previousOgUrl) setPropertyMeta('og:url', previousOgUrl)
      if (previousTwitterTitle) setMeta('twitter:title', previousTwitterTitle)
      if (previousTwitterDescription) setMeta('twitter:description', previousTwitterDescription)
    }
  }, [canonicalPath, description, ogDescription, ogTitle, robots, title, twitterDescription, twitterTitle])
}
