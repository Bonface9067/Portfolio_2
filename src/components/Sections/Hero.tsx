import React, { useEffect, useState } from 'react';
import ProfessionalImage from '../../assets/images/PROFFESSIONAL.jpg';
import Globe from './Globe';
import { contactInfo } from '../../lib/contact';

const tags = [
  'Geo-Agentic AI Systems',
  'Earth Intelligence',
  'Climate Research',
  'Quantum Geospatial',
  'Blockchain for Earth Data',
];

const Hero: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [tagIdx, setTagIdx] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const iv = setInterval(() => setTagIdx((i) => (i + 1) % tags.length), 3200);
    return () => clearInterval(iv);
  }, []);

  const scroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative', minHeight: '100vh', display: 'flex',
        alignItems: 'center', overflow: 'hidden', background: 'var(--bg-primary)',
      }}
    >
      <Globe style={{ opacity: 0.55, zIndex: 0 }} />
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at 70% 50%, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 70% 50%, black 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute', right: '-10%', top: '15%', width: 600, height: 600,
          background: 'radial-gradient(circle, var(--accent-soft), transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative', zIndex: 2, maxWidth: 720,
          padding: '100px clamp(20px, 5vw, 48px) 60px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 1s ease, transform 1s ease',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
          <div style={{
            width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)',
            boxShadow: '0 0 10px var(--accent-glow)', animation: 'pulse 2s ease-in-out infinite',
          }} />
          <span style={{
            fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--accent)', fontWeight: 500,
          }}>Nairobi, Kenya</span>
          <div style={{ height: 1, width: 80, background: 'var(--accent-border)' }} />
          <span style={{ fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.12em' }}>
            Geo-AI · Climate · Earth Systems
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 28 }}>
          <div style={{
            width: 64, height: 64, borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--accent), #3b82f6)', padding: 2, flexShrink: 0,
          }}>
            <div style={{
              width: '100%', height: '100%', borderRadius: '50%',
              overflow: 'hidden', border: '2px solid var(--border-soft)', background: 'var(--bg-primary)',
            }}>
              <img src={ProfessionalImage} alt="Bonface Odhiambo"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.12em', marginBottom: 3 }}>
              BSc GEOINFORMATICS
            </div>
            <div style={{ fontSize: 13, color: 'var(--text-strong)', fontWeight: 500 }}>
              LocateIT Kenya Limited · Nairobi
            </div>
          </div>
        </div>

        <h1 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800,
          fontSize: 'clamp(42px, 6vw, 76px)', lineHeight: 1.0,
          letterSpacing: '-0.03em', color: 'var(--text-primary)', margin: '0 0 8px',
        }}>
          Bonface<br />
          <span style={{
            background: 'linear-gradient(90deg, var(--accent) 0%, #4ade80 60%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>Odhiambo</span>
        </h1>

        <div style={{
          fontSize: 'clamp(14px, 1.8vw, 19px)', color: 'var(--text-secondary)',
          fontWeight: 400, marginBottom: 24,
        }}>
          Spatial Applications &amp; Research Expert
        </div>

        <div style={{
          height: 30, overflow: 'hidden', marginBottom: 28,
          borderLeft: '2px solid var(--accent-border)', paddingLeft: 14,
        }}>
          <div style={{ fontSize: 15, color: 'var(--accent)', fontWeight: 500, letterSpacing: '0.04em' }}>
            {tags[tagIdx]}
          </div>
        </div>

        <p style={{
          fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7,
          maxWidth: 540, marginBottom: 36,
        }}>
          Pioneering the fusion of{' '}
          <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Geo-Agentic AI</strong>,
          quantum computing, and blockchain to decode Earth&apos;s most complex systems — from urban flood
          response in Kenyan cities to desert locust outbreak prediction across the Horn of Africa.
        </p>

        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 40 }}>
          <button
            onClick={() => scroll('projects')}
            style={{
              padding: '13px 28px', borderRadius: 6,
              background: 'linear-gradient(135deg, var(--accent), #3b82f6)',
              color: '#030812', fontWeight: 700, fontSize: 13,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              border: 'none', cursor: 'pointer',
              boxShadow: '0 0 24px var(--accent-glow)',
            }}>Explore Work</button>
          <a href={contactInfo.linkedinUrl} target="_blank" rel="noopener noreferrer"
            style={{
              padding: '13px 28px', borderRadius: 6,
              background: 'var(--card-bg)', color: 'var(--text-primary)',
              fontWeight: 600, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase',
              border: '1px solid var(--border-soft)', textDecoration: 'none',
            }}>LinkedIn</a>
          <button
            onClick={() => scroll('about')}
            style={{
              padding: '13px 28px', borderRadius: 6, background: 'transparent',
              color: 'var(--text-secondary)', fontWeight: 600, fontSize: 13,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              border: '1px solid var(--accent-border)', cursor: 'pointer',
            }}>About Me</button>
        </div>

        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
          {[
            { val: '2+', label: 'Years Experience' },
            { val: '10+', label: 'Projects Delivered' },
            { val: '4', label: 'Countries Served' },
          ].map((s) => (
            <div key={s.label}>
              <div style={{
                fontSize: 28, fontWeight: 800, color: 'var(--accent)',
                fontFamily: "'Syne', sans-serif", lineHeight: 1,
              }}>{s.val}</div>
              <div style={{
                fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.1em',
                marginTop: 3, textTransform: 'uppercase',
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
        zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        opacity: 0.6,
      }}>
        <div style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Scroll</div>
        <div style={{
          width: 1, height: 40,
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
          animation: 'scrollPulse 2s ease-in-out infinite',
        }} />
      </div>
    </section>
  );
};

export default Hero;
