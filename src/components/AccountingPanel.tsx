import { useState, useMemo } from 'react';
import { useApp } from '@/context/AppContext';
import { salesRecords as initialSalesRecords, salesColumns } from '@/data/mockData';
import type { SalesRecord } from '@/types';
import { BookOpen, Search, Download, Printer } from 'lucide-react';

export default function AccountingPanel() {
  const { t } = useApp();
  const [records, setRecords] = useState<SalesRecord[]>(initialSalesRecords);
  const [search, setSearch] = useState('');
  const [paymentFilter, setPaymentFilter] = useState('all');
  const [vatFilter, setVatFilter] = useState('all');
  const [editingId, setEditingId] = useState<number | null>(null);

  // Form state
  const [form, setForm] = useState<Partial<SalesRecord>>({
    date: new Date().toLocaleDateString('de-DE'), orderNumber: '', invoiceNumber: '',
    customerName: '', vehicle: '', vin: '', part: '', oem: '', brand: '', supplier: '',
    costPrice: '', salePrice: '', vat: '19%', paymentStatus: 'Offen', shippingStatus: 'Nicht versendet',
    trackingNumber: '', notes: '',
  });

  const filtered = useMemo(() => {
    return records.filter((r) => {
      const haystack = `${r.invoiceNumber} ${r.orderNumber} ${r.customerName} ${r.vehicle} ${r.vin} ${r.oem} ${r.brand} ${r.supplier} ${r.date}`.toLowerCase();
      const matchTerm = !search || haystack.includes(search.toLowerCase());
      const matchPayment = paymentFilter === 'all' || r.paymentStatus === paymentFilter;
      const matchVat = vatFilter === 'all' || r.vat === vatFilter;
      return matchTerm && matchPayment && matchVat;
    });
  }, [records, search, paymentFilter, vatFilter]);

  const profit = useMemo(() => {
    const s = parseFloat((form.salePrice || '').replace(/[^0-9.]/g, '')) || 0;
    const c = parseFloat((form.costPrice || '').replace(/[^0-9.]/g, '')) || 0;
    return Math.max(0, s - c).toFixed(2).replace('.', ',');
  }, [form.salePrice, form.costPrice]);

  const handleSave = () => {
    if (editingId) {
      setRecords((prev) => prev.map((r) => (r.id === editingId ? { ...r, ...form } as SalesRecord : r)));
      setEditingId(null);
    } else {
      const newRecord: SalesRecord = {
        id: Date.now(),
        date: form.date || new Date().toLocaleDateString('de-DE'),
        orderNumber: form.orderNumber || `ET-${1000 + records.length + 1}`,
        invoiceNumber: form.invoiceNumber || `RE-2026-${String(records.length + 1).padStart(4, '0')}`,
        customerName: form.customerName || '', vehicle: form.vehicle || '', vin: form.vin || '',
        part: form.part || '', oem: form.oem || '', brand: form.brand || '', supplier: form.supplier || '',
        costPrice: form.costPrice || '', salePrice: form.salePrice || '', vat: form.vat || '19%',
        paymentStatus: form.paymentStatus || 'Offen', shippingStatus: form.shippingStatus || 'Nicht versendet',
        trackingNumber: form.trackingNumber || '', notes: form.notes || '',
      };
      setRecords((prev) => [newRecord, ...prev]);
    }
    setForm({ date: new Date().toLocaleDateString('de-DE'), orderNumber: '', invoiceNumber: '',
      customerName: '', vehicle: '', vin: '', part: '', oem: '', brand: '', supplier: '',
      costPrice: '', salePrice: '', vat: '19%', paymentStatus: 'Offen', shippingStatus: 'Nicht versendet',
      trackingNumber: '', notes: '' });
  };

  const handleEdit = (record: SalesRecord) => {
    setEditingId(record.id);
    setForm({ ...record });
  };

  const handleDelete = (id: number) => {
    if (confirm('Eintrag wirklich löschen?')) {
      setRecords((prev) => prev.filter((r) => r.id !== id));
      if (editingId === id) setEditingId(null);
    }
  };

  const exportCsv = () => {
    const headers = salesColumns.map(([, label]) => label);
    const rows = filtered.map((r) => salesColumns.map(([key]) => {
      if (key === 'profit') {
        const s = parseFloat(r.salePrice.replace(/[^0-9.]/g, '')) || 0;
        const c = parseFloat(r.costPrice.replace(/[^0-9.]/g, '')) || 0;
        return `${Math.max(0, s - c).toFixed(2).replace('.', ',')} €`;
      }
      return r[key as keyof SalesRecord] || '';
    }));
    const csv = [headers, ...rows].map((row) => row.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(';')).join('\n');
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'easyvin-verkaufsprotokoll.csv'; a.click();
    URL.revokeObjectURL(url);
  };

  function statusClass(value: string): string {
    if (['Bezahlt', 'Versendet', 'Zugestellt'].includes(value)) return 'status-accepted';
    if (['Offen', 'Nicht versendet', 'Prüfung läuft'].includes(value)) return 'status-progress';
    if (['Rückerstattet', 'Rücksendung'].includes(value)) return 'status-sent';
    return 'status-new';
  }

  return (
    <div className="panel">
      <div className="flex items-center justify-between gap-3 p-4 border-b border-[var(--border-line)] bg-white/[0.025]">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[var(--brand-blue)]" />
          <h2 className="text-lg font-bold">{t('accounting')}</h2>
        </div>
        <span className="status-badge status-progress">{records.length} Einträge</span>
      </div>

      <div className="p-4 space-y-4">
        {/* Info Note */}
        <div className="rounded-2xl border border-[rgba(29,167,216,0.2)] p-4 text-sm text-[#c9d7e1] bg-[rgba(29,167,216,0.075)] leading-relaxed">
          Internes Verkaufsprotokoll für Buchhaltung, Steuervorbereitung, Umsatztracking und Reporting. Kunden sehen diesen Bereich niemals.
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap gap-2 items-center">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
            <input value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechnung, Bestellung, Kunde, Fahrzeug, VIN, OEM suchen..."
              className="w-full h-10 rounded-xl border border-[var(--border-line)] pl-10 pr-3 bg-white/[0.06] text-sm outline-none focus:border-[rgba(29,167,216,0.54)]" />
          </div>
          <select value={paymentFilter} onChange={(e) => setPaymentFilter(e.target.value)}
            className="h-10 rounded-xl border border-[var(--border-line)] px-3 bg-white/[0.06] text-sm outline-none">
            <option value="all">Alle Zahlungen</option><option>Offen</option><option>Bezahlt</option><option>Rückerstattet</option>
          </select>
          <select value={vatFilter} onChange={(e) => setVatFilter(e.target.value)}
            className="h-10 rounded-xl border border-[var(--border-line)] px-3 bg-white/[0.06] text-sm outline-none">
            <option value="all">Alle MwSt.</option><option>19%</option><option>7%</option><option>0%</option>
          </select>
          <button onClick={exportCsv} className="h-10 px-3 rounded-xl border border-[var(--border-line)] text-xs font-bold bg-white/5 hover:bg-white/10 flex items-center gap-1.5">
            <Download className="w-3.5 h-3.5" /> CSV
          </button>
          <button onClick={() => window.print()} className="h-10 px-3 rounded-xl border border-[var(--border-line)] text-xs font-bold bg-white/5 hover:bg-white/10 flex items-center gap-1.5">
            <Printer className="w-3.5 h-3.5" /> Drucken
          </button>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-[var(--border-line)] p-4 bg-white/[0.04] space-y-3">
          <h3 className="text-sm font-bold">{editingId ? 'Eintrag bearbeiten' : 'Neuen Verkauf erfassen'}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {salesColumns.filter(([key]) => key !== 'profit').map(([key, label]) => (
              key === 'vat' ? (
                <select key={key} value={form.vat || '19%'} onChange={(e) => setForm({ ...form, vat: e.target.value })}
                  className="h-10 rounded-xl border border-[var(--border-line)] px-3 bg-white/[0.06] text-sm outline-none">
                  <option>19%</option><option>7%</option><option>0%</option>
                </select>
              ) : key === 'paymentStatus' ? (
                <select key={key} value={form.paymentStatus || 'Offen'} onChange={(e) => setForm({ ...form, paymentStatus: e.target.value })}
                  className="h-10 rounded-xl border border-[var(--border-line)] px-3 bg-white/[0.06] text-sm outline-none">
                  <option>Offen</option><option>Bezahlt</option><option>Rückerstattet</option>
                </select>
              ) : key === 'shippingStatus' ? (
                <select key={key} value={form.shippingStatus || 'Nicht versendet'} onChange={(e) => setForm({ ...form, shippingStatus: e.target.value })}
                  className="h-10 rounded-xl border border-[var(--border-line)] px-3 bg-white/[0.06] text-sm outline-none">
                  <option>Nicht versendet</option><option>Versendet</option><option>Zugestellt</option><option>Rücksendung</option>
                </select>
              ) : (
                <input key={key} value={(form[key as keyof SalesRecord] || '') as string}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  placeholder={label}
                  className="h-10 rounded-xl border border-[var(--border-line)] px-3 bg-white/[0.06] text-sm outline-none focus:border-[rgba(29,167,216,0.54)]" />
              )
            ))}
          </div>
          <div className="text-[var(--green)] font-black text-sm">
            Automatischer Gewinn: {profit} €
          </div>
          <div className="flex gap-2">
            <button onClick={handleSave}
              className="h-9 px-4 rounded-xl text-xs font-bold text-white transition-all hover:brightness-110"
              style={{ background: 'linear-gradient(135deg, var(--brand-blue), #11799b)' }}>
              {editingId ? 'Aktualisieren' : 'Verkauf speichern'}
            </button>
            {editingId && (
              <button onClick={() => { setEditingId(null); setForm({}); }}
                className="h-9 px-4 rounded-xl border border-[var(--border-line)] text-xs font-bold bg-white/5 hover:bg-white/10">
                Abbrechen
              </button>
            )}
          </div>
        </div>

        {/* Table */}
        <div className="rounded-2xl border border-[var(--border-line)] overflow-auto bg-[rgba(7,11,16,0.55)]">
          <table className="w-full min-w-[1400px] text-xs">
            <thead>
              <tr className="text-[#b8c9d5] uppercase tracking-wider text-[11px]">
                {salesColumns.map(([, label]) => (
                  <th key={label} className="sticky top-0 z-10 bg-[#0d151d] px-3 py-3 text-left font-bold border-b border-[rgba(220,232,240,0.08)]">{label}</th>
                ))}
                <th className="sticky top-0 z-10 bg-[#0d151d] px-3 py-3 text-left font-bold border-b border-[rgba(220,232,240,0.08)]">Aktionen</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((record) => (
                <tr key={record.id} className="border-b border-[rgba(220,232,240,0.06)] hover:bg-[rgba(29,167,216,0.06)] transition-colors">
                  {salesColumns.map(([key]) => (
                    <td key={key} className={`px-3 py-2.5 whitespace-nowrap ${key === 'profit' ? 'text-[var(--green)] font-bold' : ''}`}>
                      {key === 'profit' ? (
                        `${(() => {
                          const s = parseFloat(record.salePrice.replace(/[^0-9.]/g, '')) || 0;
                          const c = parseFloat(record.costPrice.replace(/[^0-9.]/g, '')) || 0;
                          return `${Math.max(0, s - c).toFixed(2).replace('.', ',')} €`;
                        })()}`
                      ) : key === 'paymentStatus' || key === 'shippingStatus' ? (
                        <span className={`status-badge ${statusClass(record[key as keyof SalesRecord] as string)}`}>
                          {record[key as keyof SalesRecord]}
                        </span>
                      ) : (
                        record[key as keyof SalesRecord] || '-'
                      )}
                    </td>
                  ))}
                  <td className="px-3 py-2.5">
                    <div className="flex gap-1.5">
                      <button onClick={() => handleEdit(record)}
                        className="h-7 px-2 rounded-lg border border-[var(--border-line)] text-[11px] font-bold bg-white/5 hover:bg-white/10">
                        Bearbeiten
                      </button>
                      <button onClick={() => handleDelete(record.id)}
                        className="h-7 px-2 rounded-lg border border-[rgba(239,99,88,0.28)] text-[11px] font-bold text-[#ffbbb5] bg-[rgba(239,99,88,0.08)] hover:bg-[rgba(239,99,88,0.15)]">
                        Löschen
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="text-center py-8 text-sm text-[var(--text-muted)]">
              Keine Einträge gefunden
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
