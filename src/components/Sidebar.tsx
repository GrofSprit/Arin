import { useApp } from '@/context/AppContext';
import { Shield, Package, RotateCcw, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import type { AdminPanel } from '@/types';

interface SidebarProps {
  activePanel: AdminPanel;
  onPanelChange: (panel: AdminPanel) => void;
  statusCounts: Record<string, number>;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export default function Sidebar({ activePanel, onPanelChange, statusCounts, collapsed, onToggleCollapse }: SidebarProps) {
  const { t } = useApp();

  const requestNavItems = [
    { key: 'all', label: t('allRequests'), count: statusCounts.all },
    { key: 'Neue Anfrage', label: t('newRequests'), count: statusCounts['Neue Anfrage'] },
    { key: 'In Bearbeitung', label: t('inProgress'), count: statusCounts['In Bearbeitung'] },
    { key: 'Angebot gesendet', label: t('offers'), count: statusCounts['Angebot gesendet'] },
    { key: 'Angenommen', label: t('accepted'), count: statusCounts['Angenommen'] },
    { key: 'Abgeschlossen', label: t('completed'), count: statusCounts['Abgeschlossen'] },
  ];

  const managementItems = [
    { key: 'shipping' as AdminPanel, label: t('todayShipping'), icon: Package, count: 2 },
    { key: 'returns' as AdminPanel, label: t('returns'), icon: RotateCcw, count: 3 },
    { key: 'accounting' as AdminPanel, label: t('accounting'), icon: BookOpen, count: 3 },
  ];

  return (
    <aside
      className={`sticky top-0 h-screen border-r border-[var(--border-line)] transition-all duration-300 flex-shrink-0 overflow-y-auto ${
        collapsed ? 'w-[70px] px-2' : 'w-[270px] px-4'
      }`}
      style={{
        background: 'linear-gradient(180deg, rgba(18,29,39,0.96), rgba(7,11,16,0.98)), var(--bg-panel)',
      }}
    >
      {/* Collapse Toggle */}
      <button
        onClick={onToggleCollapse}
        className="absolute -right-3 top-6 w-6 h-6 rounded-full bg-[var(--bg-panel-2)] border border-[var(--border-line)] flex items-center justify-center text-[var(--text-muted)] hover:text-white z-10"
      >
        {collapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
      </button>

      {/* Brand */}
      <div className="flex items-center gap-3 py-5 mb-4">
        <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-white font-black text-sm flex-shrink-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.05)), #0f2b39',
            border: '1px solid var(--border-strong)',
            boxShadow: '0 12px 30px rgba(29,167,216,0.16)',
          }}>
          <Shield className="w-5 h-5" />
        </div>
        {!collapsed && (
          <div>
            <strong className="text-lg font-black block">EasyVIN</strong>
            <span className="text-[11px] text-[var(--text-muted)]">Experten-Dashboard</span>
          </div>
        )}
      </div>

      {/* Requests Nav */}
      {!collapsed && (
        <div className="text-[11px] font-black text-[#5f7181] uppercase tracking-wider mb-2 px-3">
          Anfragen
        </div>
      )}
      <nav className="space-y-1 mb-4">
        {requestNavItems.map((item) => (
          <button
            key={item.key}
            onClick={() => onPanelChange('requests')}
            className={`nav-btn ${activePanel === 'requests' ? 'active' : ''}`}
            title={collapsed ? item.label : undefined}
          >
            {!collapsed && <span>{item.label}</span>}
            <span className="min-w-6 h-6 rounded-full flex items-center justify-center bg-white/[0.08] text-[#d7e8f2] text-xs font-bold">
              {item.count}
            </span>
          </button>
        ))}
      </nav>

      {/* Management Nav */}
      {!collapsed && (
        <div className="text-[11px] font-black text-[#5f7181] uppercase tracking-wider mb-2 px-3 mt-6">
          Management
        </div>
      )}
      <nav className="space-y-1">
        {managementItems.map((item) => (
          <button
            key={item.key}
            onClick={() => onPanelChange(item.key)}
            className={`nav-btn ${activePanel === item.key ? 'active' : ''}`}
            title={collapsed ? item.label : undefined}
          >
            {!collapsed && (
              <span className="flex items-center gap-2">
                <item.icon className="w-4 h-4" />
                {item.label}
              </span>
            )}
            {collapsed && <item.icon className="w-4 h-4" />}
            <span className="min-w-6 h-6 rounded-full flex items-center justify-center bg-white/[0.08] text-[#d7e8f2] text-xs font-bold">
              {item.count}
            </span>
          </button>
        ))}
      </nav>

      {/* AI Warning */}
      {!collapsed && (
        <div className="mt-8 rounded-2xl border border-[rgba(201,154,72,0.24)] p-4 bg-[rgba(201,154,72,0.08)] text-[#e7d6b8] text-xs leading-relaxed">
          <strong className="block mb-1">Nur für Fachkräfte.</strong>
          {t('aiWarning')}
        </div>
      )}

      {/* Back to Site */}
      {!collapsed && (
        <button
          onClick={() => window.location.href = '/'}
          className="mt-6 w-full h-10 rounded-xl border border-[var(--border-line)] flex items-center justify-center gap-2 text-xs font-bold bg-white/5 hover:bg-white/10 transition-colors text-[var(--text-muted)]"
        >
          <ChevronLeft className="w-4 h-4" />
          Zurück zur Seite
        </button>
      )}
    </aside>
  );
}
