import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemePref = 'light' | 'dark' | 'system';
type ThemeCtx = { pref: ThemePref; resolved: 'light' | 'dark'; setPref: (p: ThemePref) => void };

const Ctx = createContext<ThemeCtx | null>(null);

const STORAGE_KEY = 'portfolio-theme';

function applyClass(resolved: 'light' | 'dark') {
  const root = document.documentElement;
  if (resolved === 'dark') root.classList.add('dark');
  else root.classList.remove('dark');
  root.style.colorScheme = resolved;
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pref, setPrefState] = useState<ThemePref>(() => {
    if (typeof window === 'undefined') return 'system';
    return (localStorage.getItem(STORAGE_KEY) as ThemePref) || 'system';
  });
  const [resolved, setResolved] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const compute = () => {
      const r: 'light' | 'dark' = pref === 'system' ? (mq.matches ? 'dark' : 'light') : pref;
      setResolved(r);
      applyClass(r);
    };
    compute();
    if (pref === 'system') {
      mq.addEventListener('change', compute);
      return () => mq.removeEventListener('change', compute);
    }
  }, [pref]);

  const setPref = (p: ThemePref) => {
    setPrefState(p);
    if (p === 'system') localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, p);
  };

  return <Ctx.Provider value={{ pref, resolved, setPref }}>{children}</Ctx.Provider>;
};

export function useTheme() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useTheme must be used within ThemeProvider');
  return v;
}
