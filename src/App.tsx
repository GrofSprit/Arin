import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'

import Home from './pages/Home'
import Success from './pages/Success'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import Widerrufsbelehrung from './pages/Widerrufsbelehrung'
import Widerrufsformular from './pages/Widerrufsformular'
import SeoPage from './pages/SeoPage'
import NotFound from './pages/NotFound'
import { seoPages } from './data/seoPages'
import CookieBanner from './components/CookieBanner'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/widerrufsbelehrung" element={<Widerrufsbelehrung />} />
        <Route path="/widerrufsformular" element={<Widerrufsformular />} />
        {seoPages.map((page) => (
          <Route key={page.path} path={page.path} element={<SeoPage />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Analytics />
      <CookieBanner />
    </>
  )
}
