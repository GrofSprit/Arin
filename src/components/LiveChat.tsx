import { useState, useRef, useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { useRequests } from '@/context/RequestContext';
import { Send, FileImage } from 'lucide-react';
import type { ChatMessage } from '@/types';

interface LiveChatProps {
  requestId: number;
  chat: ChatMessage[];
}

export default function LiveChat({ requestId, chat }: LiveChatProps) {
  const { t } = useApp();
  const { addChatMessage } = useRequests();
  const [reply, setReply] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat.length]);

  const handleSend = () => {
    if (!reply.trim()) return;
    addChatMessage(requestId, { from: 'admin', text: reply.trim() });
    setReply('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4">
      {/* Messages */}
      <div className="h-72 overflow-y-auto space-y-3 pr-1 mb-4">
        {chat.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.from === 'customer' ? 'justify-start' : 'justify-end'} animate-slide-up`}
          >
            {msg.from === 'offer' && msg.offer ? (
              <div className="chat-bubble chat-bubble-offer max-w-[85%]">
                <div className="space-y-2">
                  <div className="h-20 rounded-xl border border-white/10"
                    style={{
                      background: 'radial-gradient(circle at 50% 35%, rgba(255,255,255,0.32), transparent 18%), linear-gradient(145deg, #24303b, #0b1117)',
                    }} />
                  <strong className="text-sm font-bold block">{msg.offer.brand} {msg.offer.product}</strong>
                  <div className="text-xs space-y-1 text-[#dfebf2]">
                    <div>Preis: <strong>{msg.offer.price}</strong></div>
                    <div>Lieferzeit: {msg.offer.delivery}</div>
                    <div>{msg.offer.warranty || 'Gewährleistung nach Gesetz'}</div>
                  </div>
                  <div className="flex gap-2 pt-1">
                    <button className="flex-1 h-8 rounded-xl bg-[rgba(29,167,216,0.18)] text-white text-xs font-bold hover:bg-[rgba(29,167,216,0.28)] transition-colors">
                      Angebot annehmen
                    </button>
                    <button className="flex-1 h-8 rounded-xl bg-[rgba(29,167,216,0.18)] text-white text-xs font-bold hover:bg-[rgba(29,167,216,0.28)] transition-colors">
                      Frage stellen
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className={`chat-bubble ${msg.from === 'admin' || msg.from === 'assistant' ? 'chat-bubble-admin' : ''}`}>
                {msg.text}
              </div>
            )}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Composer */}
      <div className="flex gap-2.5">
        <textarea
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t('replyPlaceholder')}
          className="flex-1 min-h-[46px] max-h-24 rounded-2xl border border-[var(--border-line)] px-3.5 py-2.5 bg-white/[0.06] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none focus:border-[rgba(29,167,216,0.54)] resize-none"
        />
        <button
          onClick={handleSend}
          className="h-[46px] px-4 rounded-2xl text-white font-black text-sm flex-shrink-0 transition-all hover:brightness-110"
          style={{ background: 'linear-gradient(135deg, var(--brand-blue), #11799b)', boxShadow: '0 12px 28px rgba(29,167,216,0.18)' }}
        >
          <Send className="w-4 h-4" />
        </button>
      </div>

      {/* File Upload */}
      <label className="mt-2 relative flex items-center justify-center h-10 rounded-xl border border-dashed border-[rgba(220,232,240,0.28)] text-xs font-bold text-[#c4d1dc] bg-white/[0.04] cursor-pointer hover:bg-white/[0.07] transition-colors">
        <FileImage className="w-4 h-4 mr-2" />
        Produktfoto in den Chat senden
        <input type="file" accept="image/*,.pdf" className="absolute inset-0 opacity-0 cursor-pointer" />
      </label>
    </div>
  );
}
