import { useApp } from '@/context/AppContext';
import { returnItems } from '@/data/mockData';
import { RotateCcw, Hash, AlertCircle } from 'lucide-react';

function statusClass(status: string): string {
  if (status.includes('genehmigt')) return 'status-accepted';
  if (status.includes('läuft')) return 'status-progress';
  return 'status-new';
}

export default function ReturnsPanel() {
  const { t } = useApp();

  return (
    <div className="panel">
      <div className="flex items-center justify-between gap-3 p-4 border-b border-[var(--border-line)] bg-white/[0.025]">
        <div className="flex items-center gap-2">
          <RotateCcw className="w-5 h-5 text-[var(--gold)]" />
          <h2 className="text-lg font-bold">{t('returns')}</h2>
        </div>
        <span className="status-badge status-progress">{returnItems.length} Fälle</span>
      </div>

      <div className="p-4 space-y-3">
        {returnItems.map((item, i) => (
          <div key={i} className="rounded-2xl border border-[var(--border-line)] p-4 bg-white/[0.04] space-y-2.5">
            <div className="flex items-start justify-between gap-3">
              <strong className="text-sm font-bold">{item.customer}</strong>
              <span className={`status-badge ${statusClass(item.status)}`}>{item.status}</span>
            </div>
            <div className="space-y-1.5 text-xs text-[var(--text-muted)]">
              <div className="flex items-center gap-1.5">
                <Hash className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Bestellung: <span className="text-[var(--text-primary)] font-bold">{item.order}</span></span>
              </div>
              <div className="flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Grund: {item.reason}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <button className="h-8 px-3 rounded-xl border border-[var(--border-line)] text-xs font-bold bg-white/5 hover:bg-white/10 transition-colors">
                Support kontaktieren
              </button>
              <button className="h-8 px-3 rounded-xl border border-[var(--border-line)] text-xs font-bold bg-white/5 hover:bg-white/10 transition-colors">
                Austausch starten
              </button>
              <button
                className="h-8 px-3 rounded-xl text-xs font-bold text-white transition-all hover:brightness-110"
                style={{ background: 'linear-gradient(135deg, var(--green), #2a9d6a)' }}
              >
                Rückerstattung bestätigen
              </button>
            </div>
          </div>
        ))}

        {returnItems.length === 0 && (
          <div className="text-center py-12 text-sm text-[var(--text-muted)]">
            Keine Rücksendungen vorhanden
          </div>
        )}
      </div>
    </div>
  );
}
