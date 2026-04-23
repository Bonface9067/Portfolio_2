import React from 'react';
import { contactInfo } from '../../lib/contact';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--bg-deeper)',
      borderTop: '1px solid var(--border-soft)',
      padding: '36px clamp(20px, 4vw, 48px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16,
    }}>
      <div>
        <div style={{
          fontFamily: "'Syne',sans-serif",
          fontWeight: 800,
          fontSize: 22,
          letterSpacing: '-0.02em',
          color: 'var(--text-primary)',
        }}>
          B<span style={{ color: 'var(--accent)' }}>O</span>
        </div>
        <p style={{ marginTop: 6, fontSize: 12, color: 'var(--text-muted)' }}>
          Bonface Odhiambo · Geo-AI &amp; Climate Researcher · Nairobi, Kenya
        </p>
      </div>

      <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: 0 }}>
        © {year} Spatial Applications Research Expert
      </p>

      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        {[
          { href: 'https://linkedin.com/in/bonface-odhiambo-17245a1ab', label: 'LinkedIn', external: true },
          { href: '#projects', label: 'Projects' },
          { href: '#publications', label: 'Publications' },
          { href: '#contact', label: 'Contact' },
        ].map((l) => (
          <a key={l.label}
            href={l.href}
            target={l.external ? '_blank' : undefined}
            rel={l.external ? 'noopener noreferrer' : undefined}
            style={{
              fontSize: 12,
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
