import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Research', href: '#research' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Publications', href: '#publications' },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = ['home', 'about', 'research', 'skills', 'experience', 'projects', 'publications', 'organizations', 'contact'];
      let cur = 'home';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 80) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href: string) => {
    const el = document.querySelector(href) as HTMLElement | null;
    if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, height: 60,
        display: 'flex', alignItems: 'center', padding: '0 clamp(20px, 4vw, 40px)',
        background: scrolled ? 'color-mix(in srgb, var(--bg-primary) 90%, transparent)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-soft)' : '1px solid transparent',
        transition: 'background 0.4s, border-color 0.4s',
      }}
    >
      <a
        href="#home"
        onClick={(e) => { e.preventDefault(); go('#home'); }}
        style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 20,
          letterSpacing: '-0.03em', color: 'var(--text-primary)',
          textDecoration: 'none', marginRight: 'auto',
        }}
      >
        B<span style={{ color: 'var(--accent)' }}>O</span>
      </a>

      <nav className="hidden md:flex" style={{ alignItems: 'center' }}>
        {navigation.map((n) => {
          const id = n.href.replace('#', '');
          const isActive = active === id;
          return (
            <button
              key={n.name}
              onClick={() => go(n.href)}
              style={{
                fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', padding: '8px 13px',
                textTransform: 'uppercase', background: 'transparent', border: 'none', cursor: 'pointer',
                color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                fontFamily: "'DM Sans', sans-serif", transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? 'var(--accent)' : 'var(--text-secondary)')}
            >
              {n.name}
            </button>
          );
        })}
        <button
          onClick={() => go('#contact')}
          style={{
            marginLeft: 12, padding: '7px 18px', borderRadius: 6,
            background: 'var(--accent-soft)', border: '1px solid var(--accent-border)',
            color: 'var(--accent)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Contact
        </button>
        <div style={{ marginLeft: 10 }}>
          <ThemeToggle compact />
        </div>
      </nav>

      <div className="md:hidden" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <ThemeToggle compact />
        <button
          onClick={() => setOpen(!open)}
          style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: 6 }}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden"
          style={{
            position: 'absolute', top: 60, left: 0, right: 0,
            background: 'color-mix(in srgb, var(--bg-primary) 96%, transparent)',
            backdropFilter: 'blur(16px)', borderBottom: '1px solid var(--border-soft)',
            padding: 12, display: 'flex', flexDirection: 'column', gap: 4,
          }}
        >
          {navigation.concat({ name: 'Contact', href: '#contact' }).map((n) => (
            <button
              key={n.name}
              onClick={() => go(n.href)}
              style={{
                textAlign: 'left', padding: '10px 14px', background: 'transparent',
                border: 'none', color: 'var(--text-primary)', cursor: 'pointer',
                fontSize: 13, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {n.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
