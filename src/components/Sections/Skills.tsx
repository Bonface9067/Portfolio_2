import React, { useState } from 'react';
import { useInView, sectionPad, container } from './_shared';

const cats = [
  { id: 'all', label: 'All' },
  { id: 'geospatial', label: 'Geospatial' },
  { id: 'programming', label: 'Programming' },
  { id: 'platforms', label: 'Platforms' },
];

const skills = [
  { name: 'ArcGIS Pro', cat: 'geospatial', pct: 93, color: '#00b88f' },
  { name: 'ArcGIS Online', cat: 'geospatial', pct: 92, color: '#00b88f' },
  { name: 'QGIS', cat: 'geospatial', pct: 89, color: '#00b88f' },
  { name: 'Remote Sensing', cat: 'geospatial', pct: 90, color: '#00b88f' },
  { name: 'Earth Observation', cat: 'geospatial', pct: 92, color: '#00b88f' },
  { name: 'Cartography', cat: 'geospatial', pct: 88, color: '#00b88f' },
  { name: 'Google Earth Engine', cat: 'platforms', pct: 82, color: '#34d399' },
  { name: 'Python', cat: 'programming', pct: 90, color: '#a78bfa' },
  { name: 'Django', cat: 'programming', pct: 85, color: '#a78bfa' },
  { name: 'JavaScript', cat: 'programming', pct: 80, color: '#a78bfa' },
  { name: 'Leaflet.js', cat: 'programming', pct: 85, color: '#a78bfa' },
  { name: 'PostGIS / PostgreSQL', cat: 'platforms', pct: 80, color: '#34d399' },
  { name: 'Geo-AI / ML', cat: 'geospatial', pct: 85, color: '#00b88f' },
  { name: 'Microsoft 365', cat: 'platforms', pct: 85, color: '#34d399' },
  { name: 'Docker / Redis / Celery', cat: 'platforms', pct: 75, color: '#34d399' },
  { name: 'LLM / RAG Systems', cat: 'platforms', pct: 78, color: '#34d399' },
];

const qualifications = [
  'Geographic Information Systems (GIS)',
  'Earth Observation & Data Processing',
  'Marine & Coastal Environment Monitoring',
  'Agricultural Drought Monitoring',
  'Disaster Monitoring & Impact Assessment',
  'Geo-Agentic AI Systems Design',
  'Predictive Modelling & Machine Learning',
  'Capacity Building & Stakeholder Engagement',
];

const Skills: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? skills : skills.filter((s) => s.cat === active);

  return (
    <section id="skills" style={{ ...sectionPad, background: 'var(--bg-alt)' }}>
      <div ref={ref} style={{
        ...container,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}>
        <div style={{ marginBottom: 52 }}>
          <div style={{
            fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'var(--accent)', fontWeight: 600, marginBottom: 12,
          }}>Technical Stack</div>
          <h2 style={{
            fontFamily: "'Syne',sans-serif", fontWeight: 800,
            fontSize: 'clamp(32px,4vw,52px)', lineHeight: 1.08,
            letterSpacing: '-0.025em', color: 'var(--text-primary)', margin: 0,
          }}>
            Skills &amp;{' '}
            <span style={{
              background: 'linear-gradient(90deg, var(--accent), #3b82f6)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Technologies</span>
          </h2>
        </div>

        <div style={{ display: 'flex', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}>
          {cats.map((c) => (
            <button key={c.id} onClick={() => setActive(c.id)} style={{
              padding: '8px 20px', borderRadius: 24, fontSize: 12, fontWeight: 600,
              letterSpacing: '0.06em', cursor: 'pointer', transition: 'all 0.2s',
              background: active === c.id ? 'var(--accent)' : 'var(--card-bg)',
              color: active === c.id ? '#030812' : 'var(--text-secondary)',
              border: active === c.id ? '1px solid transparent' : '1px solid var(--border-soft)',
            }}>{c.label}</button>
          ))}
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16,
        }}>
          {filtered.map((sk, i) => (
            <div key={sk.name} style={{
              background: 'var(--card-bg)', border: '1px solid var(--border-soft)',
              borderRadius: 16, padding: '20px 24px',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(16px)',
              transition: `opacity 0.6s ease ${i * 0.04}s, transform 0.6s ease ${i * 0.04}s, border-color 0.3s`,
            }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${sk.color}55`)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-soft)')}>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12,
              }}>
                <span style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-primary)' }}>{sk.name}</span>
                <span style={{ fontSize: 12, color: sk.color, fontWeight: 700 }}>{sk.pct}%</span>
              </div>
              <div style={{ height: 3, background: 'var(--border-softer)', borderRadius: 2 }}>
                <div style={{
                  height: '100%', borderRadius: 2,
                  background: `linear-gradient(90deg, ${sk.color}, ${sk.color}aa)`,
                  width: inView ? `${sk.pct}%` : '0%',
                  transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${i * 0.04 + 0.3}s`,
                  boxShadow: `0 0 8px ${sk.color}50`,
                }} />
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 56, padding: 36,
          background: 'linear-gradient(135deg, var(--accent-soft), rgba(59,130,246,0.05))',
          border: '1px solid var(--accent-border)', borderRadius: 20,
        }}>
          <div style={{
            fontSize: 10, letterSpacing: '0.22em', color: 'var(--accent)',
            textTransform: 'uppercase', marginBottom: 20,
          }}>Core Qualifications</div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12,
          }}>
            {qualifications.map((q) => (
              <div key={q} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)',
                  flexShrink: 0, boxShadow: '0 0 6px var(--accent-glow)',
                }} />
                <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{q}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
