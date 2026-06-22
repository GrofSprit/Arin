import { useApp } from '@/context/AppContext';

interface MetricsPanelProps {
  counts: Record<string, number>;
}

export default function MetricsPanel({ counts }: MetricsPanelProps) {
  const { t } = useApp();

  const metrics = [
    { label: t('newRequests'), value: counts['Neue Anfrage'] || 0 },
    { label: t('inProgress'), value: counts['In Bearbeitung'] || 0 },
    { label: t('offers'), value: counts['Angebot gesendet'] || 0 },
    { label: t('accepted'), value: counts['Angenommen'] || 0 },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
      {metrics.map((m, i) => (
        <div
          key={i}
          className="rounded-[18px] border border-[var(--border-line)] p-4 transition-all hover:border-[rgba(29,167,216,0.3)]"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.02)), var(--bg-panel)',
            boxShadow: '0 16px 36px rgba(0,0,0,0.16)',
          }}
        >
          <span className="text-xs font-bold text-[var(--text-muted)]">{m.label}</span>
          <strong className="block text-[28px] font-black mt-2 leading-none">{m.value}</strong>
        </div>
      ))}
    </div>
  );
}
