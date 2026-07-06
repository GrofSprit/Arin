import { Navigate, useLocation } from 'react-router-dom'

import SeoPageLayout from '../components/SeoPageLayout'
import { getSeoPageByPath } from '../data/seoPages'

export default function SeoPage() {
  const location = useLocation()
  const page = getSeoPageByPath(location.pathname)

  if (!page) {
    return <Navigate to="/" replace />
  }

  return <SeoPageLayout page={page} />
}
