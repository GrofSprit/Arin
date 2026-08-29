import { useState, useCallback, useId } from 'react'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    question: 'Ist die Anfrage kostenlos und unverbindlich?',
    answer: 'Ja, die Anfrage ist völlig kostenlos und unverbindlich. Sie erhalten ein persönliches Angebot und können frei entscheiden, ob Sie bestellen möchten.',
  },
  {
    question: 'Welche Fahrzeugdaten werden benötigt?',
    answer: 'Hilfreich sind ein Foto des Fahrzeugscheins oder die VIN sowie die Bezeichnung des gesuchten Teils. Je nach Fahrzeug und Ersatzteil können zusätzlich eine OEM-Nummer, ein PR-Code oder weitere technische Angaben benötigt werden.',
  },
  {
    question: 'Wie lange dauert die Prüfung und Angebotserstellung?',
    answer: 'In der Regel erhalten Sie Ihr persönliches Angebot innerhalb von 24 Stunden (werktags). Bei komplexen Anfragen kann es bis zu 48 Stunden dauern.',
  },
  {
    question: 'Muss ich nach dem Angebot bestellen?',
    answer: 'Nein. Das Angebot ist unverbindlich. Sie entscheiden selbst, ob Sie bestellen möchten.',
  },
  {
    question: 'Versenden Sie deutschlandweit?',
    answer: 'Ja, TeilePilot24 bietet deutschlandweiten Versand an.',
  },
  {
    question: 'Kann ich Teile in Mönchengladbach abholen?',
    answer: 'Ja, eine Abholung bei B&C Fahrzeugteile in Mönchengladbach ist möglich.',
  },
]

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  const answerId = useId()

  return (
    <div className="border-b border-silver/70">
      <button
        onClick={onToggle}
        className="w-full min-h-16 flex items-center justify-between py-5 md:py-6 text-left group cursor-pointer select-none touch-manipulation"
        aria-expanded={isOpen}
        aria-controls={answerId}
        type="button"
      >
        <span className={`text-[17px] md:text-xl font-medium leading-snug pr-4 md:pr-6 transition-colors duration-200 ${isOpen ? 'text-electric' : 'text-midnight group-hover:text-electric'}`}>
          {question}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-silver/60 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-electric/10 rotate-180' : 'group-hover:bg-electric/10'}`}>
          <ChevronDown size={18} className={`transition-colors duration-200 ${isOpen ? 'text-electric' : 'text-midnight/40'}`} strokeWidth={2} />
        </span>
      </button>
      <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="min-h-0 overflow-hidden">
          <div id={answerId} role="region" className="pb-6 md:pb-7 pr-2 md:pr-12">
            <p className="text-base md:text-[17px] text-midnight/75 leading-[1.7]">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }, [])

  return (
    <section id="faq" className="bg-white py-14 md:py-20 lg:py-24">
      <div className="max-w-[800px] mx-auto px-5 md:px-10 lg:px-12">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="entrance-headline text-2xl md:text-3xl lg:text-[38px] text-midnight font-semibold mb-3">
            Häufige Fragen
          </h2>
          <p className="entrance text-base text-midnight/55" style={{ transitionDelay: '0.1s' }}>
            Alles, was Sie über TeilePilot24 wissen sollten.
          </p>
        </div>

        <div className="bg-silver/20 shadow-sm border border-silver/50 px-5 md:px-8">
          {faqs.map((faq, i) => (
            <div key={i} className="entrance" style={{ transitionDelay: `${(i + 2) * 0.08}s` }}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            </div>
          ))}
        </div>
        <div className="entrance mt-7 text-center">
          <Link to="/faq" className="inline-flex items-center justify-center text-sm font-semibold text-electric hover:text-electric-dark">
            Alle häufigen Fragen
          </Link>
        </div>
      </div>
    </section>
  )
}
