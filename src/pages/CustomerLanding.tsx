import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/context/AppContext';
import { Shield, Check, MessageCircle, ChevronRight, Lock, Zap, Globe, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import type { Language } from '@/types';

const languages: { code: Language; flag: string; label: string }[] = [
  { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
  { code: 'tr', flag: '🇹🇷', label: 'Türkçe' },
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'ar', flag: '🇸🇦', label: 'العربية' },
  { code: 'pl', flag: '🇵🇱', label: 'Polski' },
  { code: 'ro', flag: '🇷🇴', label: 'Română' },
  { code: 'ru', flag: '🇷🇺', label: 'Русский' },
];

export default function CustomerLanding() {
  const { lang, setLang, t, rtl } = useApp();
  const navigate = useNavigate();
  const [flowOpen, setFlowOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [partDesc, setPartDesc] = useState('');
  const [docUploaded, setDocUploaded] = useState(false);
  const [oem, setOem] = useState('');
  const [extraNotes, setExtraNotes] = useState('');
  const [success, setSuccess] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedChip, setSelectedChip] = useState<string | null>(null);

  const resetFlow = useCallback(() => {
    setStep(1);
    setPartDesc('');
    setDocUploaded(false);
    setOem('');
    setExtraNotes('');
    setSuccess(false);
    setSelectedChip(null);
  }, []);

  const handleOpenFlow = () => {
    resetFlow();
    setFlowOpen(true);
  };

  const handleSubmit = () => {
    setSuccess(true);
  };

  const processSteps = t('process').split(',');
  const chips = t('chips').split(',');

  return (
    <div className={`min-h-screen bg-gradient-radial ${rtl ? 'rtl' : ''}`}>
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#1da7d8] to-[#146781] border border-white/20 shadow-lg shadow-[#1da7d8]/20">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-lg font-black tracking-tight">Easy<span className="text-[#1da7d8]">VIN</span></div>
            <div className="text-[11px] text-[var(--text-muted)]">{t('brandSubtitle')}</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="h-9 min-w-[70px] rounded-full border border-[var(--border-line)] px-3 flex items-center justify-center gap-1.5 text-sm font-bold bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs uppercase">{lang}</span>
            </button>
            {langOpen && (
              <div className="absolute top-11 right-0 z-50 w-48 rounded-2xl border border-[var(--border-line)] p-2 bg-[rgba(10,13,18,0.98)] shadow-2xl backdrop-blur-xl animate-fade-in">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setLangOpen(false); }}
                    className={`w-full h-10 rounded-xl px-3 flex items-center justify-between text-sm font-bold transition-colors ${lang === l.code ? 'bg-[rgba(46,167,255,0.15)] text-white' : 'text-white/80 hover:bg-white/5'}`}
                  >
                    <span>{l.flag} {l.label}</span>
                    {lang === l.code && <Check className="w-4 h-4 text-[var(--brand-blue)]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Live Status */}
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-[var(--border-line)] px-3 py-2 bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse" />
            <span className="text-xs font-bold">{t('supportStatus')}</span>
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden w-10 h-10 rounded-full border border-[var(--border-line)] flex items-center justify-center bg-white/5"
          >
            {mobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Admin Link */}
          <button
            onClick={() => navigate('/admin')}
            className="hidden lg:flex h-9 px-4 rounded-full border border-[var(--border-line)] items-center gap-2 text-xs font-bold bg-white/5 hover:bg-white/10 transition-colors"
          >
            Admin
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenu && (
        <div className="lg:hidden px-6 pb-4 animate-fade-in">
          <div className="flex items-center gap-2 rounded-full border border-[var(--border-line)] px-3 py-2 bg-white/5 w-fit mb-3">
            <span className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse" />
            <span className="text-xs font-bold">{t('supportStatus')}</span>
          </div>
          <button
            onClick={() => { navigate('/admin'); setMobileMenu(false); }}
            className="h-10 px-4 rounded-xl border border-[var(--border-line)] flex items-center gap-2 text-sm font-bold bg-white/5"
          >
            Admin Dashboard
          </button>
        </div>
      )}

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-6 py-12 md:py-20 max-w-2xl mx-auto text-center">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-[46px] font-black leading-[0.98] tracking-tight mb-4">
          {t('heroTitle').split('.')[0]}.
          <br />
          <span className="text-gradient-blue">{t('heroTitle').split('.')[1]?.trim().replace('.', '')}.</span>
        </h1>

        <p className="text-base md:text-lg text-[var(--text-muted)] max-w-md mb-4">
          {t('heroSubtitle')}
        </p>

        {/* Value Pill */}
        <div className="w-fit rounded-full border border-[rgba(46,167,255,0.24)] px-4 py-2.5 text-sm font-bold text-[#dff3ff] bg-[rgba(46,167,255,0.1)] backdrop-blur-sm mb-6">
          {t('valuePill')}
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 gap-3 max-w-sm w-full mb-8">
          {[
            { icon: Check, label: t('badgePersonal') },
            { icon: Shield, label: t('badgeVin') },
            { icon: Zap, label: t('badgeNoAi') },
            { icon: MessageCircle, label: t('badgeSupport') },
          ].map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 min-h-11 rounded-2xl px-3 py-2 text-xs font-bold text-[rgba(247,249,252,0.88)]"
            >
              <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-[var(--accent-blue)] bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.16),transparent_38%),rgba(46,167,255,0.12)] border border-[rgba(46,167,255,0.24)] shadow-[0_0_24px_rgba(46,167,255,0.12)]">
                <badge.icon className="w-4 h-4" />
              </span>
              <span className="text-left leading-tight">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          onClick={handleOpenFlow}
          className="relative w-full max-w-sm h-14 rounded-3xl text-lg font-black animate-glow transition-all hover:brightness-110"
          style={{
            background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
            boxShadow: '0 22px 44px rgba(29,78,216,0.34), inset 0 0 0 1px rgba(255,255,255,0.22)',
          }}
        >
          <span className="flex items-center gap-3">
            <MessageCircle className="w-6 h-6" />
            {t('cta')}
          </span>
        </Button>

        {/* Microcopy */}
        <p className="mt-3 text-xs text-[var(--text-muted)]">{t('microcopy')}</p>

        {/* Data Trust */}
        <div className="mt-6 w-full max-w-sm rounded-2xl border border-[rgba(37,99,235,0.24)] p-4 grid grid-cols-[32px_1fr] gap-3 text-left bg-white/[0.04] backdrop-blur-sm">
          <span className="w-8 h-8 rounded-full flex items-center justify-center text-[#dbeafe] bg-[rgba(37,99,235,0.18)] border border-[rgba(37,99,235,0.28)]">
            <Lock className="w-4 h-4" />
          </span>
          <div>
            <strong className="text-xs font-bold text-white block mb-0.5">{t('dataTrustTitle')}</strong>
            <span className="text-[11px] text-[var(--text-muted)] leading-snug">{t('dataTrustText')}</span>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mt-8 w-full max-w-md">
          <div className="grid grid-cols-4 gap-2">
            {processSteps.map((s, i) => (
              <div
                key={i}
                className={`flex flex-col items-center gap-2 text-center ${i === 0 ? 'text-[#dff3ff]' : 'text-[#667382]'}`}
              >
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                  i === 0 ? 'bg-[#1d4ed8] text-white border border-white/20 shadow-[0_0_24px_rgba(46,167,255,0.38)]' : 'bg-white/5 border border-[var(--border-line)]'
                }`}>
                  {i === 0 ? '1' : i + 1}
                </span>
                <span className="text-[10px] font-bold">{s.trim()}</span>
              </div>
            ))}
          </div>
          {/* Connector lines */}
          <div className="flex items-center gap-1 mt-2 px-4">
            {processSteps.slice(0, -1).map((_, i) => (
              <div key={i} className="flex-1 h-px bg-[var(--border-line)]" />
            ))}
          </div>
        </div>

        {/* Response Time */}
        <p className="mt-4 text-xs text-[rgba(247,249,252,0.68)]">
          <Zap className="w-3 h-3 inline mr-1" />
          {t('responseTime')}
        </p>
      </main>

      {/* Request Flow Modal */}
      <Dialog open={flowOpen} onOpenChange={setFlowOpen}>
        <DialogContent className="max-w-[520px] p-0 gap-0 border-[var(--border-line)] rounded-[22px] overflow-hidden"
          style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.018)), var(--bg-panel)' }}>
          {!success ? (
            <>
              <DialogHeader className="p-5 pb-0">
                <DialogTitle className="text-lg font-bold text-center">{t('chatTitle')}</DialogTitle>
                <p className="text-xs text-[var(--text-muted)] text-center">{t('chatSub')}</p>
              </DialogHeader>

              {/* Progress Steps */}
              <div className="flex px-6 py-4 gap-2">
                {t('steps').split(',').map((s, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                    <div className={`w-full h-1.5 rounded-full transition-colors ${i + 1 <= step ? 'bg-[var(--brand-blue)]' : 'bg-white/10'}`} />
                    <span className={`text-[10px] font-bold ${i + 1 <= step ? 'text-[var(--brand-blue)]' : 'text-[var(--text-muted)]'}`}>
                      {s.trim()}
                    </span>
                  </div>
                ))}
              </div>

              <div className="px-6 pb-6 max-h-[60vh] overflow-y-auto">
                {/* Step 1 */}
                {step === 1 && (
                  <div className="animate-fade-in space-y-4">
                    <div className="rounded-2xl border border-[var(--border-line)] p-4 bg-white/5 text-sm text-[rgba(247,249,252,0.9)] leading-relaxed whitespace-pre-line">
                      {t('welcome')}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {chips.map((chip, i) => (
                        <button
                          key={i}
                          onClick={() => { setSelectedChip(chip.trim()); setPartDesc(chip.trim()); }}
                          className={`h-10 rounded-full px-4 text-sm font-bold border transition-all ${
                            selectedChip === chip.trim()
                              ? 'border-[rgba(46,167,255,0.52)] bg-[rgba(46,167,255,0.16)] text-[#eaf6ff] shadow-[0_0_22px_rgba(46,167,255,0.16)]'
                              : 'border-[var(--border-line)] bg-white/5 text-[#eaf6ff] hover:bg-white/10'
                          }`}
                        >
                          {chip.trim()}
                        </button>
                      ))}
                    </div>
                    <textarea
                      value={partDesc}
                      onChange={(e) => setPartDesc(e.target.value)}
                      placeholder={t('partPlaceholder')}
                      className="w-full min-h-32 rounded-3xl border border-[var(--border-line)] p-4 bg-white/[0.06] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-base outline-none focus:border-[rgba(29,167,216,0.54)] focus:shadow-[0_0_0_4px_rgba(29,167,216,0.1)] resize-none"
                    />
                    <Button
                      onClick={() => partDesc.trim() ? setStep(2) : null}
                      disabled={!partDesc.trim()}
                      className="w-full h-14 rounded-2xl text-base font-black bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:brightness-110 disabled:opacity-50"
                    >
                      {t('next')}
                      <ChevronRight className="w-5 h-5 ml-1" />
                    </Button>
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div className="animate-fade-in space-y-4">
                    <div className="rounded-[30px] border border-[rgba(46,167,255,0.24)] p-6 bg-[radial-gradient(circle_at_top_right,rgba(46,167,255,0.19),transparent_34%),rgba(255,255,255,0.06)] shadow-2xl">
                      <div className="w-14 h-[68px] rounded-2xl mb-4 relative bg-gradient-to-b from-white/20 to-white/5 border border-[var(--border-strong)]">
                        <div className="absolute left-3 right-3 top-6 h-0.5 rounded-full bg-white/40 shadow-[0_10px_0_rgba(255,255,255,0.3),0_20px_0_rgba(255,255,255,0.2)]" />
                      </div>
                      <h3 className="text-xl font-black mb-2">{t('docTitle')}</h3>
                      <p className="text-sm text-[rgba(247,249,252,0.72)] mb-4">{t('docText')}</p>
                      <div className="space-y-2">
                        <label className="relative flex items-center justify-center h-12 rounded-2xl border border-[var(--border-line)] bg-white/[0.06] text-sm font-bold cursor-pointer hover:bg-white/10 transition-colors">
                          <span>{t('camera')}</span>
                          <input type="file" accept="image/*,.pdf" capture="environment" className="absolute inset-0 opacity-0 cursor-pointer" onChange={() => setDocUploaded(true)} />
                        </label>
                        <label className="relative flex items-center justify-center h-12 rounded-2xl border border-[var(--border-line)] bg-white/[0.06] text-sm font-bold cursor-pointer hover:bg-white/10 transition-colors">
                          <span>{t('gallery')}</span>
                          <input type="file" accept="image/*,.pdf" className="absolute inset-0 opacity-0 cursor-pointer" onChange={() => setDocUploaded(true)} />
                        </label>
                      </div>
                      {docUploaded && (
                        <div className="mt-3 rounded-full border border-[rgba(68,211,127,0.26)] px-3 py-2 text-xs font-bold text-[#caf7dc] bg-[rgba(68,211,127,0.1)] animate-fade-in">
                          ✓ Dokument hochgeladen
                        </div>
                      )}
                      <p className="mt-3 text-xs text-[#ffe7b0]">{t('docWarning')}</p>
                    </div>
                    <div className="flex gap-3">
                      <Button
                        onClick={() => setStep(3)}
                        className="flex-1 h-14 rounded-2xl text-base font-black bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:brightness-110"
                      >
                        {t('next')}
                      </Button>
                      <Button
                        onClick={() => setStep(1)}
                        variant="outline"
                        className="h-14 rounded-2xl text-base font-bold border-[var(--border-line)] bg-white/5 hover:bg-white/10"
                      >
                        {t('back')}
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <div className="animate-fade-in space-y-4">
                    <h3 className="text-xl font-black">{t('extraTitle')}</h3>
                    <p className="text-sm text-[var(--text-muted)]">{t('extraText')}</p>
                    <input
                      value={oem}
                      onChange={(e) => setOem(e.target.value)}
                      placeholder={t('oem')}
                      className="w-full h-14 rounded-3xl border border-[var(--border-line)] px-4 bg-white/[0.06] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none focus:border-[rgba(29,167,216,0.54)]"
                    />
                    <label className="relative flex items-center justify-center h-14 rounded-2xl border border-dashed border-[var(--border-line)] bg-white/[0.06] text-sm font-bold cursor-pointer hover:bg-white/10 transition-colors">
                      <span>{t('photos')}</span>
                      <input type="file" accept="image/*,.pdf" multiple className="absolute inset-0 opacity-0 cursor-pointer" />
                    </label>
                    <textarea
                      value={extraNotes}
                      onChange={(e) => setExtraNotes(e.target.value)}
                      placeholder={t('notes')}
                      className="w-full min-h-28 rounded-3xl border border-[var(--border-line)] p-4 bg-white/[0.06] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none focus:border-[rgba(29,167,216,0.54)] resize-none"
                    />
                    <div className="space-y-2">
                      <Button
                        onClick={handleSubmit}
                        className="w-full h-14 rounded-2xl text-base font-black bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:brightness-110"
                      >
                        {t('submit')}
                      </Button>
                      <Button
                        onClick={handleSubmit}
                        variant="outline"
                        className="w-full h-12 rounded-2xl font-bold border-[var(--border-line)] bg-white/5 hover:bg-white/10"
                      >
                        {t('skip')}
                      </Button>
                      <Button
                        onClick={() => setStep(2)}
                        variant="outline"
                        className="w-full h-12 rounded-2xl font-bold border-[var(--border-line)] bg-white/5 hover:bg-white/10"
                      >
                        {t('back')}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            /* Success Screen */
            <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center animate-fade-in">
              <div className="w-28 h-28 rounded-full flex items-center justify-center mb-6 animate-success"
                style={{
                  background: 'radial-gradient(circle at 50% 35%, rgba(255,255,255,0.32), transparent 24%), linear-gradient(135deg, #50e38a, #158bff)',
                  boxShadow: '0 0 64px rgba(68,211,127,0.24), 0 24px 60px rgba(0,0,0,0.34)',
                }}>
                <Check className="w-14 h-14 text-white" />
              </div>
              <h2 className="text-3xl font-black mb-3">{t('thanks')}</h2>
              <p className="text-[var(--text-muted)] mb-2 max-w-xs">{t('sent')}</p>
              <p className="text-[var(--text-muted)] mb-4 max-w-xs text-sm">{t('follow')}</p>
              <div className="rounded-2xl border border-[rgba(46,167,255,0.22)] p-4 text-sm text-[#dff3ff] bg-[rgba(46,167,255,0.09)] mb-6 max-w-xs">
                {t('track')}
              </div>
              <div className="flex gap-3 w-full max-w-xs">
                <Button
                  onClick={resetFlow}
                  className="flex-1 h-12 rounded-2xl font-black bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:brightness-110"
                >
                  {t('newRequest')}
                </Button>
                <Button
                  onClick={() => setFlowOpen(false)}
                  variant="outline"
                  className="flex-1 h-12 rounded-2xl font-bold border-[var(--border-line)] bg-white/5"
                >
                  {t('openRequests')}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
