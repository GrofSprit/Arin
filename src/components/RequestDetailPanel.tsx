import { useApp } from '@/context/AppContext';
import { useRequests } from '@/context/RequestContext';
import { FileText, Camera } from 'lucide-react';
import LiveChat from './LiveChat';
import OfferForm from './OfferForm';

function statusClass(status: string): string {
  if (status === 'Neue Anfrage') return 'status-new';
  if (status === 'In Bearbeitung') return 'status-progress';
  if (status === 'Angebot gesendet') return 'status-sent';
  if (status === 'Angenommen' || status === 'Abgeschlossen') return 'status-accepted';
  return 'status-progress';
}

export default function RequestDetailPanel() {
  const { t } = useApp();
  const { requests, selectedId, updateStatus, updateNotes } = useRequests();
  const request = requests.find((r) => r.id === selectedId);

  if (!request) {
    return (
      <div className="panel flex items-center justify-center min-h-[400px]">
        <p className="text-sm text-[var(--text-muted)]">Wählen Sie eine Anfrage aus der Liste</p>
      </div>
    );
  }

  const handleSetProgress = () => {
    updateStatus(request.id, 'In Bearbeitung');
  };

  return (
    <div className="panel">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 p-4 border-b border-[var(--border-line)] bg-white/[0.025]">
        <h2 className="text-base font-bold truncate">{request.name} · Anfrage #{request.id}</h2>
        <span className={`status-badge ${statusClass(request.status)}`}>{request.status}</span>
      </div>

      {/* Detail Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        {/* 1. Request Details */}
        <div className="section-card">
          <div className="flex items-center justify-between gap-3 p-3.5 border-b border-[var(--border-line)] bg-white/[0.025]">
            <h3 className="text-sm font-bold">1. {t('requestDetails')}</h3>
            {request.status === 'Neue Anfrage' && (
              <button
                onClick={handleSetProgress}
                className="h-8 px-3 rounded-xl border border-[var(--border-line)] text-xs font-bold bg-white/5 hover:bg-white/10 transition-colors"
              >
                {t('inProgress')}
              </button>
            )}
          </div>
          <div className="p-4 space-y-3 text-sm">
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <dt className="text-[var(--text-muted)] font-bold text-xs">{t('customer')}</dt>
              <dd>{request.name}</dd>
              <dt className="text-[var(--text-muted)] font-bold text-xs">{t('request')}</dt>
              <dd>{request.part}</dd>
              <dt className="text-[var(--text-muted)] font-bold text-xs">{t('status')}</dt>
              <dd>{request.status}</dd>
              <dt className="text-[var(--text-muted)] font-bold text-xs">OEM</dt>
              <dd>{request.oem}</dd>
              <dt className="text-[var(--text-muted)] font-bold text-xs">{t('time')}</dt>
              <dd>{request.time}</dd>
            </div>

            {/* Vehicle Card */}
            <div className="mt-3 rounded-2xl border border-[rgba(29,167,216,0.26)] p-3.5 bg-[rgba(29,167,216,0.08)]">
              <strong className="text-sm font-bold text-[#bdeeff] block mb-2">{t('vehicle')}</strong>
              <div className="grid grid-cols-[80px_1fr] gap-2 text-xs">
                <span className="text-[var(--text-muted)] font-bold">{t('model')}</span>
                <span>{request.vehicle.model}</span>
                <span className="text-[var(--text-muted)] font-bold">{t('year')}</span>
                <span>{request.vehicle.year}</span>
                <span className="text-[var(--text-muted)] font-bold">VIN</span>
                <span className="font-mono">{request.vehicle.vin}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Documents */}
        <div className="section-card">
          <div className="flex items-center justify-between gap-3 p-3.5 border-b border-[var(--border-line)] bg-white/[0.025]">
            <h3 className="text-sm font-bold">2. {t('documents')}</h3>
            <button className="h-8 px-3 rounded-xl border border-[var(--border-line)] text-xs font-bold bg-white/5 hover:bg-white/10 transition-colors">
              {t('showAll')}
            </button>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-2.5">
              {/* Fahrzeugschein */}
              <div className="min-h-[110px] rounded-2xl border border-[var(--border-line)] p-3 flex flex-col justify-between gap-3"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.075), rgba(255,255,255,0.02)), #0d151d' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--brand-blue-soft)] text-[#aee9ff] font-black text-xs">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-xs font-bold block">Fahrzeugschein</strong>
                  <span className="text-[11px] text-[var(--text-muted)] block mt-0.5 truncate">{request.fahrzeugschein}</span>
                  <button className="text-[11px] font-black text-[#9ee7ff] mt-1 hover:underline">Anzeigen</button>
                </div>
              </div>

              {/* Photos */}
              {request.photos.map((photo, i) => (
                <div key={i} className="min-h-[110px] rounded-2xl border border-[var(--border-line)] p-3 flex flex-col justify-between gap-3"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.075), rgba(255,255,255,0.02)), #0d151d' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--brand-blue-soft)] text-[#aee9ff] font-black text-xs">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-xs font-bold block">Teilfoto {i + 1}</strong>
                    <span className="text-[11px] text-[var(--text-muted)] block mt-0.5 truncate">{photo}</span>
                    <button className="text-[11px] font-black text-[#9ee7ff] mt-1 hover:underline">Anzeigen</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Live Chat */}
        <div className="section-card lg:col-span-2">
          <div className="flex items-center justify-between gap-3 p-3.5 border-b border-[var(--border-line)] bg-white/[0.025]">
            <h3 className="text-sm font-bold">3. {t('liveChat')}</h3>
            <span className="status-badge status-progress">{t('humanSupport')}</span>
          </div>
          <LiveChat requestId={request.id} chat={request.chat} />
        </div>

        {/* 4. Offer Form */}
        <div className="section-card lg:col-span-2">
          <div className="flex items-center justify-between gap-3 p-3.5 border-b border-[var(--border-line)] bg-white/[0.025]">
            <h3 className="text-sm font-bold">4. {t('createOffer')}</h3>
            <span className="status-badge status-sent">{t('manual')}</span>
          </div>
          <OfferForm requestId={request.id} currentStatus={request.status} />
        </div>

        {/* 5. Internal Notes */}
        <div className="section-card lg:col-span-2">
          <div className="flex items-center justify-between gap-3 p-3.5 border-b border-[var(--border-line)] bg-white/[0.025]">
            <h3 className="text-sm font-bold">5. {t('internalNotes')}</h3>
            <span className="status-badge status-progress">{t('employeesOnly')}</span>
          </div>
          <div className="p-4 space-y-3">
            <textarea
              defaultValue={request.notes}
              onBlur={(e) => updateNotes(request.id, e.target.value)}
              placeholder="Interne Notizen..."
              className="w-full min-h-24 rounded-2xl border border-[var(--border-line)] p-3 bg-white/[0.06] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none focus:border-[rgba(29,167,216,0.54)] resize-none"
            />
            <button
              onClick={() => updateNotes(request.id, (document.querySelector('textarea[placeholder="Interne Notizen..."]') as HTMLTextAreaElement)?.value || '')}
              className="h-9 px-4 rounded-xl border border-[var(--border-line)] text-xs font-bold bg-white/5 hover:bg-white/10 transition-colors"
            >
              {t('saveNote')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
