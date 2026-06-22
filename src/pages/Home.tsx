import Navigation from '../sections/Navigation'
import TrustBar from '../sections/TrustBar'
import Hero from '../sections/Hero'
import TrustSection from '../sections/TrustSection'
import ReviewsSection from '../sections/ReviewsSection'
import PartsCategory from '../sections/PartsCategory'
import HowItWorks from '../sections/HowItWorks'
import FAQSection from '../sections/FAQSection'
import FinalCTA from '../sections/FinalCTA'
import Footer from '../sections/Footer'
import StickyWhatsApp from '../sections/StickyWhatsApp'
import { useScrollEntrance } from '../hooks/useScrollEntrance'

export default function Home() {
  useScrollEntrance()

  return (
    <>
      <Navigation transparent />
      <TrustBar />
      <main>
        <Hero />
        <TrustSection />
        <ReviewsSection />
        <PartsCategory />
        <HowItWorks />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  )
}
