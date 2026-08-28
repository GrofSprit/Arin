import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'

import App from './App'
import { getPrerenderManifest, getRouteSeoState } from './lib/routeSeo'

export { getPrerenderManifest }

export function render(pathname: string) {
  const seo = getRouteSeoState(pathname)
  if (!seo) {
    throw new Error(`Prerender route is not registered: ${pathname}`)
  }

  const appHtml = renderToString(
    <MemoryRouter initialEntries={[pathname]}>
      <App />
    </MemoryRouter>,
  )

  return { appHtml, ...seo }
}
