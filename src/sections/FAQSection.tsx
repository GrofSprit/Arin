import { useState, useCallback, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Ist die Anfrage kostenlos?',
    answer: 'Ja, die Anfrage ist völlig kostenlos und unverbindlich. Sie erhalten ein persönliches Angebot und können frei entscheiden, ob Sie bestellen möchten.',
  },
  {
    question: 'Muss ich sofort kaufen?',
    answer: 'Nein. Das Angebot ist komplett unverbindlich. Sie entscheiden, ob und wann Sie bestellen möchten. Es entstehen Ihnen keine Kosten durch die Anfrage.',
  },
  {
    question: 'Kann ich den Fahrzeugschein per WhatsApp senden?',
    answer: 'Ja, das ist die einfachste Methode. Schreiben Sie uns per WhatsApp, welches Teil Sie benötigen, und senden Sie uns ein Foto Ihres Fahrzeugscheins. Wir prüfen alles Weitere für Sie.',
  },
  {
    question: 'Wie schnell bekomme ich ein Angebot?',
    answer: 'In der Regel erhalten Sie Ihr persönliches Angebot innerhalb von 24 Stunden (werktags). Bei komplexen Anfragen kann es bis zu 48 Stunden dauern.',
  },
  {
    question: 'Prüfen Sie die Teile automatisch mit KI?',
    answer: 'Nein. Die Teileauswahl wird von einer echten Person manuell geprüft. Wir lesen die VIN aus, prüfen die OEM-Kompatibilität und stellen sicher, dass das Teil wirklich zu Ihrem Fahrzeug passt. Keine automatische KI-Zuordnung.',
  },
  {
    question: 'Wie läuft der Versand ab?',
    answer: 'Wir versenden Bestellungen ausschließlich mit Sendungsverfolgung. Die Versandkosten werden vor der Bestellung transparent im Angebot angezeigt.',
  },
  {
    question: 'Was passiert, wenn ein Paket nicht ankommt?',
    answer: 'Jede Sendung erhält eine Trackingnummer. Sollte es ein Problem mit der Zustellung geben, prüfen wir den Versandstatus gemeinsam mit dem Versanddienstleister.',
  },
]

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    }
  }, [answer])

  return (
    <div className="border-b border-silver/70">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left group cursor-pointer select-none"
        aria-expanded={isOpen}
        type="button"
      >
        <span className={`text-base md:text-lg font-medium pr-6 transition-colors duration-200 ${isOpen ? 'text-electric' : 'text-midnight group-hover:text-electric'}`}>
          {question}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-silver/60 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-electric/10 rotate-180' : 'group-hover:bg-electric/10'}`}>
          <ChevronDown size={18} className={`transition-colors duration-200 ${isOpen ? 'text-electric' : 'text-midnight/40'}`} strokeWidth={2} />
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: isOpen ? height : 0, opacity: isOpen ? 1 : 0 }}
      >
        <div ref={contentRef} className="pb-5 md:pb-6 pr-12">
          <p className="text-base text-midnight/60 leading-relaxed">{answer}</p>
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
    <section id="faq" className="bg-silver/40 py-20 md:py-28 lg:py-36">
      <div className="max-w-[800px] mx-auto px-5 md:px-10 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="entrance-headline text-3xl md:text-4xl lg:text-[42px] text-midnight font-semibold mb-4">
            Häufige Fragen
          </h2>
          <p className="entrance text-base md:text-lg text-midnight/55" style={{ transitionDelay: '0.1s' }}>
            Alles, was Sie über TeilePilot24 wissen sollten.
          </p>
        </div>

        <div className="bg-white shadow-sm border border-silver/50 px-5 md:px-8">
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
      </div>
    </section>
  )
}
