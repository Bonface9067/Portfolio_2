import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../../lib/theme';

const ThemeToggle: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const { pref, setPref } = useTheme();
  const opts: { key: 'light' | 'dark' | 'system'; icon: React.ReactNode; label: string }[] = [
    { key: 'light', icon: <Sun size={14} />, label: 'Light' },
    { key: 'system', icon: <Monitor size={14} />, label: 'Auto' },
    { key: 'dark', icon: <Moon size={14} />, label: 'Dark' },
  ];
  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white/70 p-1 backdrop-blur dark:border-white/10 dark:bg-white/5 ${
        compact ? 'text-[11px]' : 'text-xs'
      }`}
      role="group"
      aria-label="Theme selector"
    >
      {opts.map((o) => (
        <button
          key={o.key}
          onClick={() => setPref(o.key)}
          className={`flex items-center gap-1 rounded-full px-2 py-1 transition ${
            pref === o.key
              ? 'bg-accent text-[#050812] font-semibold'
              : 'text-gray-600 hover:text-gray-900 dark:text-white/60 dark:hover:text-white'
          }`}
          title={o.label}
          aria-pressed={pref === o.key}
        >
          {o.icon}
          {!compact && <span className="hidden sm:inline">{o.label}</span>}
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
