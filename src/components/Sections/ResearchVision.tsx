import React from 'react';
import { useInView, sectionPad, container } from './_shared';

const pillars = [
  {
    num: '01', title: 'Geo-Agentic AI', headline: 'Autonomous Earth Intelligence',
    desc: 'Designing AI agents that perceive, reason, and act on geospatial data in real time — from desert locust swarm prediction to urban flood response. Building systems that close the loop between Earth observation and decision-making without human intermediation.',
    tags: ['LLM · RAG', 'Model Context Protocol', 'Autonomous Agents', 'Spatial Reasoning'],
    color: '#00b88f', projects: ['JIJI LETU', 'AuraClim', 'Mkulima Sauti'],
  },
  {
    num: '02', title: 'Quantum Geospatial', headline: 'Computing Beyond Classical Limits',
    desc: 'Exploring quantum algorithms for computationally intractable spatial optimisation problems — route optimisation across continental scales, climate model ensemble runs, and high-resolution EO data inversion — that classical hardware cannot solve in operational timeframes.',
    tags: ['Quantum Optimisation', 'Variational Algorithms', 'Climate Modelling', 'Spatial Analytics'],
    color: '#a78bfa', projects: ['Research Vision', 'Climate Forecasting'],
  },
  {
    num: '03', title: 'Blockchain for Earth', headline: 'Trustworthy Environmental Data',
    desc: 'Building immutable, decentralised ledgers for environmental data provenance — enabling transparent carbon markets, verifiable land-use change records, and tamper-proof climate finance flows anchored in satellite evidence across African landscapes.',
    tags: ['Data Provenance', 'Carbon Markets', 'Smart Contracts', 'EO Verification'],
    color: '#f59e0b', projects: ['EO Data Framework', 'Climate Finance'],
  },
];

const ResearchVision: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="research" style={{ ...sectionPad, background: 'var(--bg-primary)' }}>
      <div ref={ref} style={{
        ...container,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48,
          alignItems: 'end', marginBottom: 64,
        }} className="rv-head-grid">
          <div>
            <div style={{
              fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase',
              color: 'var(--accent)', fontWeight: 600, marginBottom: 12,
            }}>Research Vision</div>
            <h2 style={{
              fontFamily: "'Syne',sans-serif", fontWeight: 800,
              fontSize: 'clamp(32px,4vw,52px)', lineHeight: 1.08,
              letterSpacing: '-0.025em', color: 'var(--text-primary)', margin: 0,
            }}>
              Three technologies.<br />
              <span style={{
                background: 'linear-gradient(90deg,#a78bfa, var(--accent))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>One mission.</span>
            </h2>
          </div>
          <p style={{
            color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: 15, margin: 0,
          }}>
            Solving the multisectoral challenges of climate change, food security, and disaster resilience
            demands tools that are as complex as the problems themselves. I am building at the intersection
            of three paradigm-shifting technologies to make planetary-scale intelligence operationally accessible.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24,
        }}>
          {pillars.map((p) => (
            <div key={p.num} style={{
              background: 'var(--card-bg)', border: '1px solid var(--border-soft)',
              borderRadius: 20, padding: 32, position: 'relative', overflow: 'hidden',
              transition: 'border-color 0.3s, transform 0.3s',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${p.color}66`;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-soft)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
              <div style={{
                position: 'absolute', top: 16, right: 20, fontFamily: "'Syne',sans-serif",
                fontWeight: 800, fontSize: 64, color: `${p.color}18`, lineHeight: 1, userSelect: 'none',
              }}>{p.num}</div>

              <div style={{
                width: 40, height: 3, background: p.color, borderRadius: 2,
                marginBottom: 24, boxShadow: `0 0 12px ${p.color}60`,
              }} />

              <div style={{
                fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
                color: p.color, marginBottom: 8,
              }}>{p.title}</div>
              <h3 style={{
                fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 22,
                color: 'var(--text-primary)', marginBottom: 16, lineHeight: 1.2,
              }}>{p.headline}</h3>
              <p style={{
                color: 'var(--text-secondary)', lineHeight: 1.72, fontSize: 14, marginBottom: 24,
              }}>{p.desc}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                {p.tags.map((t) => (
                  <span key={t} style={{
                    fontSize: 11, padding: '4px 10px', borderRadius: 20,
                    background: `${p.color}14`, color: p.color,
                    border: `1px solid ${p.color}44`, letterSpacing: '0.05em',
                  }}>{t}</span>
                ))}
              </div>

              <div style={{ borderTop: '1px solid var(--border-soft)', paddingTop: 16 }}>
                <div style={{
                  fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.15em',
                  textTransform: 'uppercase', marginBottom: 8,
                }}>Applied in</div>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  {p.projects.map((pr) => (
                    <span key={pr} style={{ fontSize: 11, color: 'var(--text-strong)', fontWeight: 500 }}>
                      → {pr}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 860px) {
          .rv-head-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
};

export default ResearchVision;
