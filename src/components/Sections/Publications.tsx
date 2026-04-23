import React, { useState } from 'react';
import KSAGroup from '../../assets/images/KSA_DATA_SHARING_FRAMEWORK_GROUP.jpg';
import KSAMe from '../../assets/images/KSA_DATA_SHARING_FRAMEWORK_ME.jpg';
import AIJudge from '../../assets/images/AI_FOR_CLIMATE_ACTION_JUDGE.jpg';
import { useInView, container } from './_shared';

type Item = {
  id: string; type: 'publication' | 'workshop' | 'engagement' | 'presentation';
  title: string; venue: string; date: string; desc: string;
  authors?: string; participants?: string; keywords: string[];
  url?: string; img?: string; imgSecondary?: string; color: string;
};

const items: Item[] = [
  {
    id: 'pub-drought', type: 'publication',
    title: 'Spatio-Temporal Agricultural Drought Quantification in a Rainfed Agriculture, Athi-Galana-Sabaki River Basin',
    venue: 'Journal of Geographic Information System, Vol. 16', date: '2024',
    desc: 'Developed a comprehensive agricultural drought monitoring system using satellite imagery and agro-meteorological models, computing TCI, VCI, Precipitation Index and Agricultural Drought Index.',
    authors: 'Tete J., Makokha G., Ngesa O., Muthami J., Odhiambo B.',
    keywords: ['Agricultural Drought', 'Remote Sensing', 'Spatio-temporal Analysis', 'Early Warning'],
    url: 'https://doi.org/10.4236/jgis.2024.164013', color: '#3b82f6',
  },
  {
    id: 'ws-ksa-data', type: 'workshop',
    title: 'Kenyan EO Data Sharing Framework Formulation Workshop',
    venue: 'Kenya Space Agency · Nairobi', date: 'Feb 16–17, 2026',
    desc: 'Co-developed the national Kenyan Earth Observation Data Sharing Framework — harmonising access, licensing, interoperability and archival of EO datasets across government agencies, academia and industry.',
    participants: 'Kenya Space Agency, ministries, academia, private sector & development partners',
    keywords: ['EO Data Policy', 'Interoperability', 'Kenya Space Agency', 'Data Governance'],
    img: KSAGroup, imgSecondary: KSAMe, color: '#00b88f',
  },
  {
    id: 'ws-ai-judge', type: 'engagement',
    title: 'Judge — AI for Climate Action Innovation Challenge 2025',
    venue: 'AI for Climate Action Innovation Challenge, Kenya', date: 'Dec 10, 2025',
    desc: 'Evaluated finalist submissions on scientific rigour, climate-impact potential, scalability across African contexts, ethical AI practice and deployment readiness. Focused on Geo-AI, climate-risk modelling and EO integrations.',
    participants: 'Finalist teams, climate-tech mentors & African AI researchers',
    keywords: ['AI for Climate', 'Innovation Challenge', 'Geo-AI', 'Climate Resilience'],
    img: AIJudge, color: '#f59e0b',
  },
  {
    id: 'ws-space-bill', type: 'engagement',
    title: 'Kenya Space Bill Stakeholder Review',
    venue: 'Kenya Space Agency · Nairobi', date: 'Nov 2024',
    desc: 'Representative of LocateIT Kenya for the review of the Kenya Space Bill, shaping future space policy and fostering innovation across industries reliant on space-based solutions.',
    keywords: ['Space Policy', 'Kenya Space Bill', 'Earth Observation', 'Stakeholder Engagement'],
    url: 'https://www.linkedin.com/posts/bonface-odhiambo-17245a1ab_locateit-kenyaspacebill-earthobservation-activity-7258516042174382081-J9mX',
    color: '#a78bfa',
  },
  {
    id: 'ws-locust-sc', type: 'presentation',
    title: '6th Steering Committee Meeting — Desert Locust Management',
    venue: 'Ole Sereni Hotel · Nairobi', date: 'Feb 2025',
    desc: 'Presented progress on Locust Breeding Suitability predictive models and Vegetation-onset & locust-stay-duration predictive models across the Horn of Africa.',
    keywords: ['Desert Locust', 'Predictive Modelling', 'ICPAC', 'Regional Collaboration'],
    color: '#4ade80',
  },
  {
    id: 'ws-rangeland', type: 'workshop',
    title: 'Rangeland Monitoring & Management Training',
    venue: 'Garissa University', date: 'Nov 18–19, 2024',
    desc: 'Comprehensive training on practical applications of Earth observation data for rangeland monitoring, including satellite data processing and analysis tools for sustainable rangeland management.',
    participants: 'Students and county officials',
    keywords: ['Rangeland Management', 'Earth Observation', 'Capacity Building'],
    color: '#00b88f',
  },
  {
    id: 'ws-coastal', type: 'workshop',
    title: 'End User Workshop — Coastal Geomorphological Mapping',
    venue: 'LocateIT · Nairobi', date: 'Feb 7–9, 2024',
    desc: 'Training on coastal monitoring tools covering shoreline extraction, trend analysis, and coastal change assessment using remote sensing and GIS techniques.',
    keywords: ['Coastal Monitoring', 'Shoreline Analysis', 'Capacity Building'],
    color: '#34d399',
  },
  {
    id: 'ws-biodiversity', type: 'presentation',
    title: 'Storytelling for Biodiversity Conservation using GIS/RS',
    venue: '4th Biennial CEMEREM Conference · Mombasa', date: 'Oct 5–6, 2023',
    desc: 'Oral presentation on innovative approaches to biodiversity conservation through GIS and remote sensing-powered storytelling, with practical applications in natural resource management.',
    keywords: ['Biodiversity Conservation', 'GIS Remote Sensing', 'Storytelling', 'Sustainable Mining'],
    url: 'https://storymaps.arcgis.com/stories/cd4be5d84d404c07b963167cfda8a431', color: '#f59e0b',
  },
];

const typeMap: Record<Item['type'], string> = {
  publication: '📖 Publication', workshop: '🛠 Workshop',
  engagement: '⚡ Engagement', presentation: '🎤 Presentation',
};
const filters = [
  { id: 'all', label: 'All' },
  { id: 'publication', label: 'Publications' },
  { id: 'workshop', label: 'Workshops' },
  { id: 'engagement', label: 'Engagements' },
  { id: 'presentation', label: 'Presentations' },
];

const Publications: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.08);
  const [filter, setFilter] = useState('all');
  const shown = filter === 'all' ? items : items.filter((i) => i.type === filter);

  return (
    <section id="publications" style={{
      padding: '96px 0', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden',
    }}>
      <div aria-hidden style={{
        position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none',
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
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          marginBottom: 52, gap: 24, flexWrap: 'wrap',
        }}>
          <div>
            <div style={{
              fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase',
              color: 'var(--accent)', marginBottom: 12, fontWeight: 600,
            }}>Research · Speaking · Policy</div>
            <h2 style={{
              fontFamily: "'Syne',sans-serif", fontWeight: 800,
              fontSize: 'clamp(30px,3.8vw,50px)', lineHeight: 1.08,
              letterSpacing: '-0.025em', color: 'var(--text-primary)', margin: 0,
            }}>
              Publications{' '}
              <span style={{
                background: 'linear-gradient(90deg, var(--accent), #a78bfa)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>&amp; Engagements</span>
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {filters.map((f) => (
              <button key={f.id} onClick={() => setFilter(f.id)} style={{
                padding: '7px 16px', borderRadius: 20, fontSize: 11, fontWeight: 600,
                cursor: 'pointer', transition: 'all 0.2s',
                background: filter === f.id ? 'var(--accent)' : 'var(--card-bg)',
                color: filter === f.id ? '#030812' : 'var(--text-secondary)',
                border: filter === f.id ? '1px solid transparent' : '1px solid var(--border-soft)',
              }}>{f.label}</button>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {shown.map((item, i) => (
            <article key={item.id} style={{
              background: 'var(--card-bg)', border: '1px solid var(--border-soft)',
              borderRadius: 18, overflow: 'hidden', display: 'grid',
              gridTemplateColumns: item.img ? '260px 1fr' : '1fr',
              transition: 'border-color 0.3s, transform 0.3s',
              opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(16px)',
              transitionDelay: `${i * 0.06}s`,
            }}
              className={item.img ? 'pub-card' : ''}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${item.color}55`;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-soft)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>

              {item.img && (
                <div style={{ overflow: 'hidden', position: 'relative', minHeight: 180 }}>
                  <img src={item.img} alt=""
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                  {item.imgSecondary && (
                    <img src={item.imgSecondary} alt="" style={{
                      position: 'absolute', bottom: 8, right: 8,
                      width: 64, height: 64, objectFit: 'cover', borderRadius: 8,
                      border: '2px solid rgba(5,8,18,0.9)',
                    }} />
                  )}
                </div>
              )}

              <div style={{ padding: '24px 28px' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  marginBottom: 14, flexWrap: 'wrap', gap: 8,
                }}>
                  <span style={{
                    fontSize: 11, padding: '4px 12px', borderRadius: 20,
                    background: `${item.color}18`, color: item.color,
                    border: `1px solid ${item.color}44`, letterSpacing: '0.06em',
                  }}>{typeMap[item.type]}</span>
                  <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>📅 {item.date}</span>
                </div>

                <h3 style={{
                  fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 17,
                  color: 'var(--text-primary)', marginBottom: 6, lineHeight: 1.3,
                }}>{item.title}</h3>
                <div style={{ fontSize: 12, color: item.color, fontWeight: 600, marginBottom: 12 }}>
                  {item.venue}
                </div>
                {item.authors && (
                  <div style={{
                    fontSize: 12, color: 'var(--text-muted)', marginBottom: 10, fontStyle: 'italic',
                  }}>{item.authors}</div>
                )}
                {item.participants && (
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 10 }}>
                    👥 {item.participants}
                  </div>
                )}
                <p style={{
                  fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 14,
                }}>{item.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                  {item.keywords.map((k) => (
                    <span key={k} style={{
                      fontSize: 10, padding: '3px 9px', borderRadius: 20,
                      background: 'var(--card-bg-hover)', color: 'var(--text-muted)',
                      border: '1px solid var(--border-soft)',
                    }}>{k}</span>
                  ))}
                </div>

                {item.url && (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12,
                    color: item.color, fontWeight: 700, textDecoration: 'none',
                    padding: '8px 18px', borderRadius: 6,
                    background: `${item.color}18`, border: `1px solid ${item.color}44`,
                  }}>↗ {item.type === 'publication' ? 'View Publication' : 'View Post'}</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 780px) {
          .pub-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Publications;
