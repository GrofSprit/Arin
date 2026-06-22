import { MessageCircle } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/491733795779?text=Hallo%20TeilePilot24,%20ich%20ben%C3%B6tige%20ein%20Ersatzteil%20f%C3%BCr%20mein%20Fahrzeug.'

const messages = [
  { sender: 'customer', text: 'Hallo, ich brauche vorne rechts einen Scheinwerfer für meinen Golf 7.', time: '09:15' },
  { sender: 'service', text: 'Gerne. Bitte senden Sie uns ein Foto vom Fahrzeugschein.', time: '09:16' },
  { sender: 'customer', text: 'Foto gesendet.', time: '09:18' },
  { sender: 'service', text: 'Wir prüfen das passende Teil und melden uns mit einem Angebot.', time: '09:20' },
]

export default function WhatsAppChatPreview() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div className="entrance flex items-center gap-2 mb-5">
              <MessageCircle size={18} className="text-whatsapp" />
              <span className="text-xs font-semibold text-whatsapp uppercase tracking-wider">Beispiel-Anfrage</span>
            </div>
            <h2 className="entrance-headline text-2xl md:text-3xl lg:text-[38px] text-midnight font-semibold mb-4 leading-tight tracking-tight">
              So sieht eine Anfrage aus
            </h2>
            <p className="entrance text-base text-midnight/55 mb-8 leading-relaxed" style={{ transitionDelay: '0.1s' }}>
              Einfach per WhatsApp schreiben, Fahrzeugschein senden – wir kümmern uns um den Rest. Schnell, persönlich und unkompliziert.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="entrance inline-flex items-center justify-center gap-2.5 bg-whatsapp text-white text-base font-semibold px-7 py-3.5 shadow-lg shadow-whatsapp/20 transition-all duration-200 hover:bg-whatsapp-dark hover:shadow-xl active:scale-[0.97]"
              style={{ transitionDelay: '0.15s' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Jetzt per WhatsApp anfragen
            </a>
          </div>

          {/* Right: Chat */}
          <div className="entrance" style={{ transitionDelay: '0.2s' }}>
            <div className="max-w-sm mx-auto shadow-xl shadow-midnight/8 overflow-hidden border border-silver/40">
              {/* Header */}
              <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div>
                  <p className="text-sm text-white font-semibold">TeilePilot24</p>
                  <p className="text-xs text-white/60">Online</p>
                </div>
              </div>

              {/* Messages */}
              <div className="bg-[#E5DDD5] px-4 py-5 space-y-2.5 min-h-[260px]">
                <div className="flex justify-center mb-3">
                  <span className="bg-[#D1ECB8] text-[#2D5F2D] text-xs px-3 py-1 rounded shadow-sm">Heute</span>
                </div>
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.sender === 'customer' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`${msg.sender === 'customer' ? 'bg-[#DCF8C6] rounded-2xl rounded-br-sm' : 'bg-white rounded-2xl rounded-bl-sm'} px-3.5 py-2.5 text-sm shadow-sm max-w-[88%]`}>
                      <p className="text-midnight/85 leading-relaxed">{msg.text}</p>
                      <p className={`text-right text-[11px] mt-1 ${msg.sender === 'customer' ? 'text-midnight/35' : 'text-midnight/30'}`}>{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="bg-[#F0F0F0] px-4 py-2.5">
                <div className="bg-white rounded-full px-4 py-2 text-sm text-midnight/30">
                  Nachricht schreiben...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
