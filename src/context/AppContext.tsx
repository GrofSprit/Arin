import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Language } from '@/types';
import { translations } from '@/i18n/translations';

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  rtl: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('de');
  const rtl = lang === 'ar';

  const t = useCallback(
    (key: string): string => {
      const tr = translations[lang];
      return tr?.[key] ?? key;
    },
    [lang]
  );

  return (
    <AppContext.Provider value={{ lang, setLang, t, rtl }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
