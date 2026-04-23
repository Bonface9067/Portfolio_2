import React from 'react';
import AboutImage from '../../assets/images/KSA_DATA_SHARING_FRAMEWORK_ME.jpg';
import { useInView, sectionPad, container } from './_shared';

const facts = [
  { label: 'Education', value: 'BSc Geoinformatics' },
  { label: 'Institution', value: 'Taita Taveta University' },
  { label: 'Location', value: 'Nairobi, Kenya' },
  { label: 'Languages', value: 'English · Kiswahili' },
];

const highlights = [
  { icon: '◈', label: 'BSc Geoinformatics', sub: 'GIS · Remote Sensing · Cartography', color: '#00b88f' },
  { icon: '◈', label: 'Published Research', sub: 'Peer-reviewed drought quantification', color: '#a78bfa' },
  { icon: '◈', label: 'Earth Observation', sub: 'Marine, coastal, agricultural EO', color: '#34d399' },
  { icon: '◈', label: 'Capacity Building', sub: 'Workshops across East & Southern Africa', color: '#f59e0b' },
];

const paragraphs = [
  'I am a GIS and Remote Sensing professional rooted in Nairobi, Kenya — where I see, daily, how geospatial intelligence can transform lives. My foundation is a BSc in Geoinformatics from Taita Taveta University, where I began building the technical fluency that would take me across Eastern and Southern Africa.',
  'Today, as Spatial Applications Research Expert at LocateIT Kenya Limited, I develop predictive models for desert locust outbreak monitoring in collaboration with ICPAC, and lead methodological work spanning coastal erosion, rangeland degradation, and flood impact assessment across the continent.',
  'My evolving research focus is Geo-Agentic AI — autonomous, spatially-aware intelligence systems that do not merely analyse data but act on it. I am actively exploring the possibilities of quantum computing for computationally intractable spatial problems, and blockchain for trustworthy environmental data ecosystems that can anchor climate finance and carbon markets.',
];

const About: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="about" style={{ ...sectionPad, background: 'var(--bg-alt)' }}>
      <div aria-hidden style={{
        position: 'absolute', inset: 0, opacity: 0.6, pointerEvents: 'none',
        backgroundImage:
          'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />

      <div ref={ref} style={{
        ...container,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
        position: 'relative',
      }}>
        <div style={{ marginBottom: 56 }}>
          <div style={{
            fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'var(--accent)', fontWeight: 600, marginBottom: 12,
          }}>About</div>
          <h2 style={{
            fontFamily: "'Syne',sans-serif", fontWeight: 800,
            fontSize: 'clamp(32px,4vw,52px)', lineHeight: 1.08,
            letterSpacing: '-0.025em', color: 'var(--text-primary)', margin: 0,
          }}>
            Mapping intelligence<br />onto the{' '}
            <span style={{
              background: 'linear-gradient(90deg, var(--accent), #4ade80)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>surface of the Earth</span>
          </h2>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'minmax(0, 340px) 1fr',
          gap: 48, alignItems: 'start',
        }} className="about-grid">
          {/* Photo */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 20, overflow: 'hidden',
              border: '1px solid var(--accent-border)',
              aspectRatio: '4/5', background: 'var(--card-bg)', position: 'relative',
            }}>
              <img src={AboutImage} alt="Bonface Odhiambo"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, var(--overlay-strong) 0%, transparent 50%)',
              }} />
              <div style={{
                position: 'absolute', bottom: 16, left: 16, right: 16,
                background: 'var(--overlay-strong)', backdropFilter: 'blur(12px)',
                border: '1px solid var(--accent-border)', borderRadius: 10, padding: '12px 16px',
              }}>
                <div style={{
                  fontFamily: "'Syne',sans-serif", fontWeight: 700,
                  color: 'var(--text-primary)', fontSize: 15,
                }}>Bonface Odhiambo</div>
                <div style={{ fontSize: 11, color: 'var(--accent)', marginTop: 3, letterSpacing: '0.05em' }}>
                  Spatial Applications Research Expert
                </div>
              </div>
            </div>
            <div style={{
              position: 'absolute', top: -8, left: -8, width: 24, height: 24,
              borderTop: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)',
            }} />
            <div style={{
              position: 'absolute', bottom: -8, right: -8, width: 24, height: 24,
              borderBottom: '2px solid var(--accent)', borderRight: '2px solid var(--accent)',
            }} />
          </div>

          {/* Narrative */}
          <div>
            {paragraphs.map((p, i) => (
              <p key={i} style={{
                color: 'var(--text-secondary)', lineHeight: 1.75,
                fontSize: 15, marginBottom: 18,
              }}>{p}</p>
            ))}

            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20,
              marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--border-soft)',
            }}>
              {facts.map((f) => (
                <div key={f.label}>
                  <div style={{
                    fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: 'var(--text-muted)', marginBottom: 4,
                  }}>{f.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-strong)' }}>{f.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 16, marginTop: 48,
        }}>
          {highlights.map((h) => (
            <div key={h.label} style={{
              background: 'var(--card-bg)', border: '1px solid var(--border-soft)',
              borderRadius: 16, padding: 24, transition: 'border-color 0.3s, transform 0.3s',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${h.color}66`;
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-soft)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10, display: 'flex',
                alignItems: 'center', justifyContent: 'center', marginBottom: 14, fontSize: 20,
                background: `${h.color}18`, border: `1px solid ${h.color}55`, color: h.color,
              }}>{h.icon}</div>
              <div style={{
                fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 14,
                color: 'var(--text-primary)', marginBottom: 6,
              }}>{h.label}</div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{h.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
