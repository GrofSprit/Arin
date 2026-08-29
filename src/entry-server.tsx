import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'

import App from './App'
import {
  getPrerenderManifest,
  getRouteSeoState,
  NOT_FOUND_METADATA,
  STATIC_ROUTE_METADATA,
} from './lib/routeSeo'

export { getPrerenderManifest }

function renderApp(pathname: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={pathname}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}

export function render(pathname: string) {
  const seo = getRouteSeoState(pathname)
  if (!seo) {
    throw new Error(`Prerender route is not registered: ${pathname}`)
  }

  return { appHtml: renderApp(pathname), ...seo }
}

export function renderNotFound() {
  return {
    appHtml: renderApp('/__teilepilot24-not-found__'),
    metadata: NOT_FOUND_METADATA,
    schemas: [],
  }
}

export function renderSuccess() {
  return {
    appHtml: renderApp('/success'),
    metadata: STATIC_ROUTE_METADATA['/'],
    schemas: [],
  }
}
