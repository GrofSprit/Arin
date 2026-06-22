import { useApp } from '@/context/AppContext';
import { shippingItems } from '@/data/mockData';
import { Package, Truck, MapPin, Hash } from 'lucide-react';

export default function ShippingPanel() {
  const { t } = useApp();

  return (
    <div className="panel">
      <div className="flex items-center justify-between gap-3 p-4 border-b border-[var(--border-line)] bg-white/[0.025]">
        <div className="flex items-center gap-2">
          <Truck className="w-5 h-5 text-[var(--brand-blue)]" />
          <h2 className="text-lg font-bold">{t('todayShipping')}</h2>
        </div>
        <span className="status-badge status-progress">{shippingItems.length} Aufträge</span>
      </div>

      <div className="p-4 space-y-3">
        {shippingItems.map((item, i) => (
          <div key={i} className="rounded-2xl border border-[var(--border-line)] p-4 bg-white/[0.04] space-y-2.5">
            <div className="flex items-start justify-between gap-3">
              <strong className="text-sm font-bold">{item.customer}</strong>
              <span className="text-[11px] text-[var(--text-muted)] flex items-center gap-1">
                <Hash className="w-3 h-3" />{item.order}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text-muted)]">
              <div className="flex items-center gap-1.5">
                <Package className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{item.product}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[var(--text-primary)] font-bold">{item.vehicle}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:col-span-2">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{item.address}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <button className="h-8 px-3 rounded-xl border border-[var(--border-line)] text-xs font-bold bg-white/5 hover:bg-white/10 transition-colors">
                Trackingnummer hinzufügen
              </button>
              <button
                className="h-8 px-3 rounded-xl text-xs font-bold text-white transition-all hover:brightness-110"
                style={{ background: 'linear-gradient(135deg, var(--brand-blue), #11799b)' }}
              >
                Als versendet markieren
              </button>
            </div>
          </div>
        ))}

        {shippingItems.length === 0 && (
          <div className="text-center py-12 text-sm text-[var(--text-muted)]">
            Keine Versandaufträge für heute
          </div>
        )}
      </div>
    </div>
  );
}
