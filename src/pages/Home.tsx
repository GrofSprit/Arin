import Navigation from '../sections/Navigation'
import TrustBar from '../sections/TrustBar'
import Hero from '../sections/Hero'
import PartsCategory from '../sections/PartsCategory'
import PopularBrandsSection from '../sections/PopularBrandsSection'
import HowItWorks from '../sections/HowItWorks'
import CompanySection from '../sections/CompanySection'
import FAQSection from '../sections/FAQSection'
import FinalCTA from '../sections/FinalCTA'
import Footer from '../sections/Footer'
import StickyWhatsApp from '../sections/StickyWhatsApp'
import { useScrollEntrance } from '../hooks/useScrollEntrance'
import { usePageMetadata } from '../hooks/usePageMetadata'
import { STATIC_ROUTE_METADATA } from '../lib/routeSeo'

export default function Home() {
  useScrollEntrance()
  usePageMetadata(STATIC_ROUTE_METADATA['/'])

  return (
    <>
      <Navigation transparent />
      <TrustBar />
      <main>
        <Hero />
        <PartsCategory />
        <PopularBrandsSection />
        <HowItWorks />
        <CompanySection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  )
}
