import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { useRequests } from '@/context/RequestContext';
import Sidebar from '@/components/Sidebar';
import RequestListPanel from '@/components/RequestListPanel';
import RequestDetailPanel from '@/components/RequestDetailPanel';
import ShippingPanel from '@/components/ShippingPanel';
import ReturnsPanel from '@/components/ReturnsPanel';
import AccountingPanel from '@/components/AccountingPanel';
import MetricsPanel from '@/components/MetricsPanel';
import type { AdminPanel } from '@/types';

export default function AdminDashboard() {
  const { panel } = useParams<{ panel?: AdminPanel }>();
  const { t } = useApp();
  const { requests } = useRequests();
  const navigate = useNavigate();
  const [activeStatus, setActiveStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const activePanel: AdminPanel = panel || 'requests';

  const handlePanelChange = (p: AdminPanel) => {
    navigate(`/admin/${p}`);
  };

  const statusCounts = {
    all: requests.length,
    'Neue Anfrage': requests.filter((r) => r.status === 'Neue Anfrage').length,
    'In Bearbeitung': requests.filter((r) => r.status === 'In Bearbeitung').length,
    'Angebot gesendet': requests.filter((r) => r.status === 'Angebot gesendet').length,
    'Angenommen': requests.filter((r) => r.status === 'Angenommen').length,
    'Abgeschlossen': requests.filter((r) => r.status === 'Abgeschlossen').length,
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]" style={{
      background: 'radial-gradient(circle at 18% 0%, rgba(29,167,216,0.17), transparent 28%), radial-gradient(circle at 88% 18%, rgba(201,154,72,0.09), transparent 24%), linear-gradient(180deg, #071019 0%, var(--bg-primary) 100%)',
    }}>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar
          activePanel={activePanel}
          onPanelChange={handlePanelChange}
          statusCounts={statusCounts}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        {/* Main Content */}
        <main className="flex-1 min-w-0 p-4 md:p-6">
          {/* Top Bar */}
          <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div>
              <h1 className="text-2xl md:text-[30px] font-black leading-tight mb-1">{t('adminTitle')}</h1>
              <p className="text-sm text-[var(--text-muted)]">{t('adminSubtitle')}</p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-[var(--border-line)] p-2.5 bg-white/[0.04] w-fit">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-[var(--brand-blue)] to-[#146781] text-white text-xs font-black">
                LS
              </div>
              <div>
                <strong className="text-xs font-bold block">{t('liveSupport')}</strong>
                <span className="text-[11px] text-[var(--text-muted)]">{t('online')}</span>
              </div>
            </div>
          </header>

          {activePanel === 'requests' && (
            <>
              {/* Metrics */}
              <MetricsPanel counts={statusCounts} />

              {/* Workspace */}
              <div className="grid grid-cols-1 xl:grid-cols-[minmax(300px,390px)_1fr] gap-4 items-start">
                <RequestListPanel
                  activeStatus={activeStatus}
                  onStatusChange={setActiveStatus}
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                />
                <RequestDetailPanel />
              </div>
            </>
          )}

          {activePanel === 'shipping' && <ShippingPanel />}
          {activePanel === 'returns' && <ReturnsPanel />}
          {activePanel === 'accounting' && <AccountingPanel />}

          {/* Footer Note */}
          <p className="mt-6 text-xs text-[var(--text-muted)] text-center">
            EasyVIN Platform — Frontend-Prototyp mit Mock-Daten
          </p>
        </main>
      </div>
    </div>
  );
}
