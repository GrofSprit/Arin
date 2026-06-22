import { useApp } from '@/context/AppContext';
import { useRequests } from '@/context/RequestContext';
import { Search } from 'lucide-react';

interface RequestListPanelProps {
  activeStatus: string;
  onStatusChange: (status: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

function statusClass(status: string): string {
  if (status === 'Neue Anfrage') return 'status-new';
  if (status === 'In Bearbeitung') return 'status-progress';
  if (status === 'Angebot gesendet') return 'status-sent';
  if (status === 'Angenommen' || status === 'Abgeschlossen') return 'status-accepted';
  return 'status-progress';
}

export default function RequestListPanel({ activeStatus, onStatusChange: _osc, searchTerm, onSearchChange }: RequestListPanelProps) {
  const { t } = useApp();
  const { filteredRequests, selectedId, selectRequest } = useRequests();
  const items = filteredRequests(activeStatus, searchTerm);

  return (
    <div className="panel">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 p-4 border-b border-[var(--border-line)] bg-white/[0.025]">
        <h2 className="text-base font-bold">{t('incomingRequests')}</h2>
        <span className={`status-badge status-new`}>{items.length} {t('visible')}</span>
      </div>

      {/* Search */}
      <div className="relative p-3">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
        <input
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t('searchPlaceholder')}
          className="w-full h-11 rounded-xl border border-[var(--border-line)] pl-10 pr-4 bg-white/[0.06] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none focus:border-[rgba(29,167,216,0.54)]"
        />
      </div>

      {/* Request List */}
      <div className="p-3 pt-0 space-y-2 max-h-[calc(100vh-340px)] overflow-y-auto">
        {items.map((request) => (
          <button
            key={request.id}
            onClick={() => selectRequest(request.id)}
            className={`w-full text-left rounded-2xl border p-3.5 transition-all duration-200 ${
              selectedId === request.id
                ? 'border-[rgba(29,167,216,0.48)] bg-[rgba(29,167,216,0.09)] -translate-y-px'
                : 'border-[var(--border-line)] bg-white/[0.04] hover:border-[rgba(29,167,216,0.3)] hover:bg-[rgba(29,167,216,0.05)] hover:-translate-y-px'
            }`}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="min-w-0">
                <strong className="text-sm font-bold block truncate">{request.name}</strong>
                <p className="text-xs text-[#bdc9d4] mt-0.5 line-clamp-2">{request.part}</p>
              </div>
              <span className={`status-badge ${statusClass(request.status)} flex-shrink-0`}>
                {request.status}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 text-[11px] text-[var(--text-muted)] mb-2">
              <span>OEM: {request.oem}</span>
              <span>•</span>
              <span>{request.time}</span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              <span className="indicator indicator-ok">VIN ✓</span>
              <span className={`indicator ${request.photos.length ? 'indicator-ok' : 'indicator-no'}`}>
                Foto {request.photos.length ? '✓' : '✕'}
              </span>
              <span className={`indicator ${request.oem !== 'Nicht angegeben' ? 'indicator-ok' : 'indicator-no'}`}>
                OEM {request.oem !== 'Nicht angegeben' ? '✓' : '✕'}
              </span>
              <span className={`indicator ${request.phone ? 'indicator-ok' : 'indicator-no'}`}>
                Tel {request.phone ? '✓' : '✕'}
              </span>
            </div>
          </button>
        ))}

        {items.length === 0 && (
          <div className="text-center py-8 text-sm text-[var(--text-muted)]">
            Keine Anfragen gefunden
          </div>
        )}
      </div>
    </div>
  );
}
