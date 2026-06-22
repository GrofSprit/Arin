import { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { useRequests } from '@/context/RequestContext';
import { FileImage } from 'lucide-react';

interface OfferFormProps {
  requestId: number;
  currentStatus: string;
}

const quickOffers = [
  { brand: 'Sachs', product: 'Stoßdämpfer', price: '89 €', delivery: '2-3 Werktage', cost: '63 €' },
  { brand: 'Bilstein', product: 'Stoßdämpfer', price: '105 €', delivery: '2-4 Werktage', cost: '78 €' },
  { brand: 'TRW', product: 'Stoßdämpfer', price: '79 €', delivery: '1-3 Werktage', cost: '54 €' },
];

export default function OfferForm({ requestId, currentStatus: _cs }: OfferFormProps) {
  const { t } = useApp();
  const { updateStatus, addChatMessage } = useRequests();
  const [brand, setBrand] = useState('');
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [delivery, setDelivery] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [costPrice, setCostPrice] = useState('');

  const profit = (() => {
    const s = parseFloat(salePrice.replace(/[^0-9.]/g, '')) || 0;
    const c = parseFloat(costPrice.replace(/[^0-9.]/g, '')) || 0;
    return Math.max(0, s - c).toFixed(2).replace('.', ',');
  })();

  const fillQuickOffer = (q: typeof quickOffers[0]) => {
    setBrand(q.brand);
    setProduct(q.product);
    setPrice(q.price);
    setDelivery(q.delivery);
    setSalePrice(q.price);
    setCostPrice(q.cost);
  };

  const handleSendOffer = () => {
    if (!brand || !product || !price || !delivery) {
      addChatMessage(requestId, { from: 'admin', text: 'Bitte Marke, Produkt, Preis und Lieferzeit eintragen, bevor ein Angebot gesendet wird.' });
      return;
    }
    updateStatus(requestId, 'Angebot gesendet');
    addChatMessage(requestId, {
      from: 'offer',
      offer: { brand, product, price, delivery, warranty: '12 Monate Gewährleistung' },
    });
  };

  return (
    <div className="p-4 space-y-4">
      {/* Quick Offers */}
      <div className="grid grid-cols-3 gap-2">
        {quickOffers.map((q, i) => (
          <button
            key={i}
            onClick={() => fillQuickOffer(q)}
            className="rounded-2xl border border-[rgba(201,154,72,0.28)] p-3 text-left text-xs font-black text-[#f0dcba] bg-[rgba(201,154,72,0.09)] hover:bg-[rgba(201,154,72,0.15)] transition-colors"
          >
            <span className="block">{q.brand}</span>
            <span className="block text-sm mt-1">{q.price}</span>
          </button>
        ))}
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <input value={brand} onChange={(e) => setBrand(e.target.value)} placeholder={t('brand') + ', z. B. Sachs'}
          className="h-11 rounded-2xl border border-[var(--border-line)] px-3.5 bg-white/[0.06] text-sm outline-none focus:border-[rgba(29,167,216,0.54)]" />
        <input value={product} onChange={(e) => setProduct(e.target.value)} placeholder={t('product') + ', z. B. Stoßdämpfer'}
          className="h-11 rounded-2xl border border-[var(--border-line)] px-3.5 bg-white/[0.06] text-sm outline-none focus:border-[rgba(29,167,216,0.54)]" />
        <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder={t('price') + ', z. B. 89 €'}
          className="h-11 rounded-2xl border border-[var(--border-line)] px-3.5 bg-white/[0.06] text-sm outline-none focus:border-[rgba(29,167,216,0.54)]" />
        <input value={delivery} onChange={(e) => setDelivery(e.target.value)} placeholder={t('delivery') + ', z. B. 2-3 Werktage'}
          className="h-11 rounded-2xl border border-[var(--border-line)] px-3.5 bg-white/[0.06] text-sm outline-none focus:border-[rgba(29,167,216,0.54)]" />
      </div>

      {/* Image Upload */}
      <label className="relative flex items-center justify-center h-10 rounded-xl border border-dashed border-[rgba(220,232,240,0.28)] text-xs font-bold text-[#c4d1dc] bg-white/[0.04] cursor-pointer hover:bg-white/[0.07] transition-colors">
        <FileImage className="w-4 h-4 mr-2" />
        Optionales Produktbild hochladen
        <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" />
      </label>

      <button
        onClick={handleSendOffer}
        className="w-full h-11 rounded-2xl text-white font-black text-sm transition-all hover:brightness-110"
        style={{ background: 'linear-gradient(135deg, var(--brand-blue), #11799b)', boxShadow: '0 12px 28px rgba(29,167,216,0.18)' }}
      >
        {t('sendOffer')}
      </button>

      {/* Profit Calculator */}
      <div className="rounded-2xl border border-[var(--border-line)] p-4 bg-white/[0.04] space-y-3">
        <strong className="text-sm font-bold block">{t('profitCalc')}</strong>
        <div className="grid grid-cols-2 gap-2.5">
          <input value={salePrice} onChange={(e) => setSalePrice(e.target.value)} placeholder={t('salePrice') + ', z. B. 89 €'}
            className="h-11 rounded-2xl border border-[var(--border-line)] px-3.5 bg-white/[0.06] text-sm outline-none focus:border-[rgba(29,167,216,0.54)]" />
          <input value={costPrice} onChange={(e) => setCostPrice(e.target.value)} placeholder={t('costPrice') + ', z. B. 63 €'}
            className="h-11 rounded-2xl border border-[var(--border-line)] px-3.5 bg-white/[0.06] text-sm outline-none focus:border-[rgba(29,167,216,0.54)]" />
        </div>
        <div className="text-[var(--green)] font-black text-sm">
          {t('profit')}: {profit} €
        </div>
      </div>
    </div>
  );
}
