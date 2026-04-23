import React, { useState } from 'react';
import LocateLogo from '../../assets/images/LocateIT.jpg';
import EsriLogo from '../../assets/images/ESRI_2.png';
import TTULogo from '../../assets/images/Taita-Taveta-University.webp';
import { useInView, sectionPad, container } from './_shared';

type Job = {
  id: string; logo: string; company: string; role: string;
  period: string; location: string; desc: string; bullets: string[]; color: string;
};

const jobs: Job[] = [
  {
    id: 'locateit-now', logo: LocateLogo,
    company: 'LocateIT Kenya Limited', role: 'Spatial Applications Research Expert',
    period: 'Jan 2025 – Present', location: 'Nairobi, Kenya',
    desc: 'Leading methodology development for desert locust outbreak prediction in collaboration with ICPAC across the Horn of Africa.',
    bullets: [
      'Technical proposal formulation and project inception reporting',
      'Integration of historical records, real-time field observations and satellite imagery',
      'Development of Locust Breeding Suitability predictive models for the Horn of Africa',
      'Development of Vegetation Onset & desert locust stay-duration predictive models',
      'Validation of outbreak stage criteria: breeding → hopper bands → swarming',
    ],
    color: '#00b88f',
  },
  {
    id: 'locateit-2024', logo: LocateLogo,
    company: 'LocateIT Kenya Limited', role: 'GIS / Remote Sensing Analyst',
    period: 'Jan 2024 – Dec 2024', location: 'Nairobi, Kenya',
    desc: 'Geospatial analysis across flooding impact, rangeland degradation, and coastal monitoring projects.',
    bullets: [
      'Collected, processed and analysed satellite imagery and field survey data',
      'Developed detailed flood maps and rangeland degradation assessments',
      'Integrated geospatial data into decision support systems',
      'Facilitated capacity-building workshops for county and national stakeholders',
    ],
    color: '#00b88f',
  },
  {
    id: 'ttu-2023', logo: TTULogo,
    company: 'Taita Taveta University', role: 'GIS / Remote Sensing Consultant',
    period: 'Apr 2023 – Aug 2023', location: 'Taita Taveta, Kenya',
    desc: 'Developed a spatio-temporal agricultural drought monitoring system for the Athi-Galana-Sabaki River Basin.',
    bullets: [
      'Curated satellite imagery for agricultural drought analysis',
      'Computed TCI, VCI, Precipitation Index and Agricultural Drought Index',
      'Built integrated drought monitoring system in Django + Python',
      'Developed QGIS plugin for professional users and stakeholders',
    ],
    color: '#a78bfa',
  },
  {
    id: 'esri-2022', logo: EsriLogo,
    company: 'ESRI Eastern Africa', role: 'Technical Intern',
    period: 'Apr 2022 – Jul 2022', location: 'Nairobi, Kenya',
    desc: 'Developed GIS solutions for education and sporting sector management under Kenya\'s Competency-Based Curriculum.',
    bullets: [
      'Intelligence-based tools for student placement prediction',
      'Web apps and web maps utilising Earth observation data',
      'Suitability analysis for senior secondary school channel adoption',
      'Data collection apps for school registration and sporting facility monitoring',
    ],
    color: '#f59e0b',
  },
];

const Experience: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [open, setOpen] = useState<string | null>('locateit-now');

  return (
    <section id="experience" style={{ ...sectionPad, background: 'var(--bg-primary)' }}>
      <div ref={ref} style={{
        ...container,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}>
        <div style={{ marginBottom: 56 }}>
          <div style={{
            fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'var(--accent)', fontWeight: 600, marginBottom: 12,
          }}>Career</div>
          <h2 style={{
            fontFamily: "'Syne',sans-serif", fontWeight: 800,
            fontSize: 'clamp(32px,4vw,52px)', lineHeight: 1.08,
            letterSpacing: '-0.025em', color: 'var(--text-primary)', margin: 0,
          }}>
            Work{' '}
            <span style={{
              background: 'linear-gradient(90deg, var(--accent), #a78bfa)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Experience</span>
          </h2>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute', left: 28, top: 0, bottom: 0, width: 1,
            background: 'linear-gradient(to bottom, var(--accent-border), transparent)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {jobs.map((j, idx) => {
              const isOpen = open === j.id;
              return (
                <div key={j.id} style={{
                  position: 'relative', marginLeft: 64,
                  background: 'var(--card-bg)', border: '1px solid var(--border-soft)',
                  borderRadius: 16, overflow: 'hidden',
                  transition: 'border-color 0.3s',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateX(0)' : 'translateX(-20px)',
                  transitionDelay: `${idx * 0.12}s`,
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${j.color}55`)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-soft)')}>

                  <div style={{
                    position: 'absolute', left: -42, top: 28, width: 13, height: 13,
                    borderRadius: '50%', background: j.color,
                    border: '2px solid var(--bg-primary)',
                    boxShadow: `0 0 10px ${j.color}80`,
                  }} />

                  <div style={{
                    padding: '22px 24px', cursor: 'pointer', display: 'flex',
                    alignItems: 'center', gap: 18,
                  }} onClick={() => setOpen(isOpen ? null : j.id)}>
                    <div style={{
                      width: 52, height: 52, borderRadius: 10, overflow: 'hidden',
                      background: 'var(--card-bg-hover)', flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <img src={j.logo} alt={j.company}
                        style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 4 }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16,
                        color: 'var(--text-primary)', marginBottom: 3,
                      }}>{j.role}</div>
                      <div style={{ fontSize: 13, color: j.color, fontWeight: 600, marginBottom: 2 }}>{j.company}</div>
                      <div style={{
                        fontSize: 12, color: 'var(--text-muted)',
                        display: 'flex', gap: 16, flexWrap: 'wrap',
                      }}>
                        <span>📅 {j.period}</span>
                        <span>📍 {j.location}</span>
                      </div>
                    </div>
                    <div style={{
                      color: 'var(--text-muted)', fontSize: 18, fontWeight: 300,
                      transform: isOpen ? 'rotate(90deg)' : 'rotate(0)',
                      transition: 'transform 0.3s',
                    }}>›</div>
                  </div>

                  <div style={{ padding: '0 24px 12px 94px' }}>
                    <p style={{
                      fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0,
                    }}>{j.desc}</p>
                  </div>

                  <div style={{
                    maxHeight: isOpen ? 500 : 0, overflow: 'hidden',
                    transition: 'max-height 0.4s ease',
                  }}>
                    <div style={{
                      padding: '8px 24px 20px', borderTop: '1px solid var(--border-softer)',
                    }}>
                      <div style={{
                        fontSize: 11, letterSpacing: '0.15em', color: 'var(--text-muted)',
                        textTransform: 'uppercase', marginBottom: 12,
                      }}>Key Contributions</div>
                      {j.bullets.map((b, bi) => (
                        <div key={bi} style={{
                          display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start',
                        }}>
                          <div style={{
                            width: 5, height: 5, borderRadius: '50%', background: j.color,
                            marginTop: 6, flexShrink: 0,
                          }} />
                          <span style={{
                            fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6,
                          }}>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
