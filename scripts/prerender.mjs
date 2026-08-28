import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(projectRoot, 'dist')
const serverEntry = path.join(projectRoot, 'dist-ssr', 'entry-server.js')
const sitemapFile = path.join(distDir, 'sitemap.xml')
const validateOnly = process.argv.includes('--validate-only')
const siteOrigin = 'https://www.teilepilot24.de'

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function decodeHtml(value) {
  return value
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&amp;', '&')
}

function parseAttributes(tag) {
  return Object.fromEntries(
    [...tag.matchAll(/([:\w-]+)=["']([^"']*)["']/g)].map((match) => [match[1], decodeHtml(match[2])]),
  )
}

function parseSitemapPaths(xml) {
  const locations = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => decodeHtml(match[1].trim()))
  assert(locations.length > 0, 'Sitemap contains no URLs')

  return locations.map((location) => {
    const url = new URL(location)
    assert(url.origin === siteOrigin, `Sitemap URL uses an unexpected origin: ${location}`)
    assert(!url.search && !url.hash, `Sitemap URL must not contain a query or hash: ${location}`)
    return url.pathname
  })
}

function samePathSet(left, right) {
  return left.length === right.length && left.every((pathname) => right.includes(pathname))
}

function outputFileForPath(pathname) {
  assert(pathname === '/' || /^\/[a-z0-9-]+(?:\/[a-z0-9-]+)*$/.test(pathname), `Unsafe prerender path: ${pathname}`)
  return pathname === '/'
    ? path.join(distDir, 'index.html')
    : path.join(distDir, pathname.slice(1), 'index.html')
}

function stripManagedHead(html) {
  const managedMetaKeys = [
    'description',
    'robots',
    'og:title',
    'og:description',
    'og:url',
    'twitter:title',
    'twitter:description',
  ]

  let output = html.replace(/<title>[\s\S]*?<\/title>\s*/i, '')
  output = output.replace(/<link\s+[^>]*rel=["']canonical["'][^>]*>\s*/gi, '')

  for (const key of managedMetaKeys) {
    const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    output = output.replace(
      new RegExp(`<meta\\s+[^>]*(?:name|property)=["']${escapedKey}["'][^>]*>\\s*`, 'gi'),
      '',
    )
  }

  for (const id of ['seo-breadcrumb-schema', 'seo-faq-schema', 'seo-article-schema']) {
    output = output.replace(
      new RegExp(`<script\\s+[^>]*id=["']${id}["'][^>]*>[\\s\\S]*?<\\/script>\\s*`, 'gi'),
      '',
    )
  }

  return output
}

function renderDocument(template, routeResult) {
  const { appHtml, metadata, schemas } = routeResult
  const canonicalUrl = metadata.canonicalPath === null ? null : `${siteOrigin}${metadata.canonicalPath}`
  const robots = metadata.robots ?? 'index, follow, max-image-preview:large'
  const ogTitle = metadata.ogTitle ?? metadata.title
  const ogDescription = metadata.ogDescription ?? metadata.description
  const twitterTitle = metadata.twitterTitle ?? ogTitle
  const twitterDescription = metadata.twitterDescription ?? ogDescription

  const head = [
    `<title>${escapeHtml(metadata.title)}</title>`,
    `<meta name="description" content="${escapeHtml(metadata.description)}" />`,
    `<meta name="robots" content="${escapeHtml(robots)}" />`,
    canonicalUrl ? `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />` : '',
    `<meta property="og:title" content="${escapeHtml(ogTitle)}" />`,
    `<meta property="og:description" content="${escapeHtml(ogDescription)}" />`,
    canonicalUrl ? `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />` : '',
    `<meta name="twitter:title" content="${escapeHtml(twitterTitle)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(twitterDescription)}" />`,
    ...schemas.map(({ id, data }) => (
      `<script id="${id}" type="application/ld+json">${JSON.stringify(data).replaceAll('<', '\\u003c')}</script>`
    )),
  ].filter(Boolean).join('\n    ')

  const withoutManagedHead = stripManagedHead(template)
  assert(withoutManagedHead.includes('<div id="root"></div>'), 'Client template has no empty #root mount point')

  return withoutManagedHead
    .replace('</head>', `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
}

function getMetaTags(html, attribute, key) {
  return [...html.matchAll(/<meta\s+[^>]*>/gi)]
    .map((match) => parseAttributes(match[0]))
    .filter((attributes) => attributes[attribute] === key)
}

function getSingleMeta(html, attribute, key, pathname) {
  const tags = getMetaTags(html, attribute, key)
  assert(tags.length === 1, `${pathname}: expected exactly one ${attribute}="${key}" meta tag, found ${tags.length}`)
  return tags[0].content
}

function getSingleCanonical(html, pathname) {
  const tags = [...html.matchAll(/<link\s+[^>]*>/gi)]
    .map((match) => parseAttributes(match[0]))
    .filter((attributes) => attributes.rel === 'canonical')
  assert(tags.length === 1, `${pathname}: expected exactly one canonical, found ${tags.length}`)
  return tags[0].href
}

function collectHtmlFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name)
    return entry.isDirectory() ? collectHtmlFiles(fullPath) : entry.name.endsWith('.html') ? [fullPath] : []
  })
}

function validateDocument(pathname, html, expected) {
  const { metadata, schemas } = expected
  const titleMatches = [...html.matchAll(/<title>([\s\S]*?)<\/title>/gi)]
  assert(titleMatches.length === 1, `${pathname}: expected exactly one title, found ${titleMatches.length}`)
  assert(decodeHtml(titleMatches[0][1]) === metadata.title, `${pathname}: title does not match route data`)
  assert(getSingleMeta(html, 'name', 'description', pathname) === metadata.description, `${pathname}: description does not match route data`)
  assert(getSingleMeta(html, 'name', 'robots', pathname) === (metadata.robots ?? 'index, follow, max-image-preview:large'), `${pathname}: robots does not match route data`)

  const canonicalUrl = `${siteOrigin}${metadata.canonicalPath}`
  assert(getSingleCanonical(html, pathname) === canonicalUrl, `${pathname}: canonical does not match route data`)
  assert(getSingleMeta(html, 'property', 'og:url', pathname) === canonicalUrl, `${pathname}: og:url does not match canonical`)
  getSingleMeta(html, 'property', 'og:title', pathname)
  getSingleMeta(html, 'property', 'og:description', pathname)
  getSingleMeta(html, 'name', 'twitter:title', pathname)
  getSingleMeta(html, 'name', 'twitter:description', pathname)

  assert(html.includes('<div id="root">') && !html.includes('<div id="root"></div>'), `${pathname}: prerendered #root is empty`)
  assert(/<h1(?:\s[^>]*)?>[\s\S]*?<\/h1>/i.test(html), `${pathname}: static body has no H1`)

  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? ''
  const visibleText = decodeHtml(body.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim())
  assert(visibleText.length >= 500, `${pathname}: static body is unexpectedly thin (${visibleText.length} characters)`)

  const jsonLdTags = [...html.matchAll(/<script\s+([^>]*)type=["']application\/ld\+json["']([^>]*)>([\s\S]*?)<\/script>/gi)]
  assert(jsonLdTags.length >= 1, `${pathname}: no JSON-LD found`)
  for (const match of jsonLdTags) JSON.parse(match[3])

  for (const schema of schemas) {
    const count = [...html.matchAll(new RegExp(`id=["']${schema.id}["']`, 'g'))].length
    assert(count === 1, `${pathname}: expected one ${schema.id}, found ${count}`)
  }

  const globalSchemaExists = jsonLdTags.some((match) => match[3].includes('AutoPartsStore') && match[3].includes('WebSite'))
  assert(globalSchemaExists, `${pathname}: global AutoPartsStore/WebSite schema is missing`)

  for (const match of html.matchAll(/(?:src|href)=["'](\/assets\/[^"']+)["']/g)) {
    const assetPath = match[1].split(/[?#]/)[0]
    assert(existsSync(path.join(distDir, assetPath.slice(1))), `${pathname}: referenced asset is missing: ${assetPath}`)
  }
}

assert(existsSync(serverEntry), 'SSR bundle is missing. Run the full build before prerender validation.')
assert(existsSync(sitemapFile), 'dist/sitemap.xml is missing. Run the client build first.')

const serverModule = await import(`${pathToFileURL(serverEntry).href}?validation=${Date.now()}`)
const manifest = serverModule.getPrerenderManifest()
const sitemapPaths = parseSitemapPaths(readFileSync(sitemapFile, 'utf8'))

assert(new Set(sitemapPaths).size === sitemapPaths.length, 'Sitemap contains duplicate URLs')
assert(new Set(manifest.indexablePaths).size === manifest.indexablePaths.length, 'Route data contains duplicate indexable paths')
assert(samePathSet(sitemapPaths, manifest.indexablePaths), 'Sitemap and central indexable route data are out of sync')
assert(!sitemapPaths.some((pathname) => manifest.noindexPaths.includes(pathname)), 'Sitemap contains a noindex route')
assert(!manifest.legalPaths.some((pathname) => sitemapPaths.includes(pathname)), 'Legal routes must remain outside the sitemap')

const prerenderPaths = [...manifest.indexablePaths, ...manifest.legalPaths]
assert(new Set(prerenderPaths).size === prerenderPaths.length, 'Prerender route list contains duplicates')

if (!validateOnly) {
  const template = readFileSync(path.join(distDir, 'index.html'), 'utf8')
  for (const pathname of prerenderPaths) {
    const outputFile = outputFileForPath(pathname)
    mkdirSync(path.dirname(outputFile), { recursive: true })
    writeFileSync(outputFile, renderDocument(template, serverModule.render(pathname)), 'utf8')
  }
}

for (const pathname of prerenderPaths) {
  const outputFile = outputFileForPath(pathname)
  assert(existsSync(outputFile), `${pathname}: prerendered HTML file is missing`)
  validateDocument(pathname, readFileSync(outputFile, 'utf8'), serverModule.render(pathname))
}

for (const pathname of manifest.noindexPaths) {
  assert(!existsSync(outputFileForPath(pathname)), `${pathname}: noindex route was unexpectedly prerendered`)
}

const htmlFiles = collectHtmlFiles(distDir)
assert(htmlFiles.length === prerenderPaths.length, `Expected ${prerenderPaths.length} HTML files in dist, found ${htmlFiles.length}`)

console.log(`[prerender] Validated ${manifest.indexablePaths.length} sitemap routes, ${manifest.legalPaths.length} legal routes and ${manifest.noindexPaths.length} non-prerendered noindex routes.`)
