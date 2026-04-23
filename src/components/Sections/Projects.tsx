import React, { useEffect, useState } from 'react';
import Locust from '../../assets/images/LOCUST.png';
import Jiji from '../../assets/images/JIJI_LETU.png';
import JijiAnalytics from '../../assets/images/JIJI_LETU_ANALYTICS.png';
import JijiMobile from '../../assets/images/JIJI_LETU_MOBILE.png';
import Mkulima from '../../assets/images/MKULIMA_SAUTI.png';
import Aura from '../../assets/images/AuraCLIM.png';
import Aura2 from '../../assets/images/AuraCLIM_2.png';
import Aura3 from '../../assets/images/AuraCLIM_3.png';
import Flooding from '../../assets/images/FLOODING.png';
import GeoAI from '../../assets/images/GeoAI.webp';
import Wemast from '../../assets/images/WEMAST.png';
import Cogeos from '../../assets/images/COGEOS.jpg';
import Ramdss from '../../assets/images/RAMDSS.png';
import terrawatch from '../../assets/images/TERRAWATCH.png';
import { useInView, container } from './_shared';

type Project = {
  id: string; featured: boolean; category: string;
  title: string; subtitle: string; year: string; client: string;
  desc: string; longDesc?: string; tech: string[];
  stats: Record<string, string>;
  img: string; gallery?: string[]; color: string;
};

const projects: Project[] = [
  {
    id: 'jiji-letu', featured: true, category: 'emergency',
    title: 'JIJI LETU', subtitle: 'AI-Powered Emergency Response System',
    year: '2025', client: 'Innovation · Urban Resilience',
    desc: 'Flood prediction, AI first-responder insights, and a citizen mobile app for urban emergencies in Kenyan cities.',
    longDesc: `JIJI LETU is a next-generation emergency response platform that blends hydrological modelling, Geo-AI and real-time citizen engagement to reduce loss of life and property during urban crises.\n\nThree tightly integrated services: a Flood Prediction Service ingesting CHIRPS/GPM satellite rainfall and DEM-derived flow accumulation to forecast flood extent 24 hours ahead; an AI Insights Service providing responders with retrieval-augmented LLM guidance on their phones; and a Citizen Mobile Application with one-tap SOS, geo-tagged incident reporting, and live evacuation routing on dynamic flood maps.\n\nBuilt on Django + PostGIS + Redis + WebSocket dispatching, with Celery workers for model inference and a Leaflet-based operations dashboard for multi-agency coordination.`,
    tech: ['Django', 'PostGIS', 'Redis', 'Celery', 'Leaflet', 'WebSocket', 'React Native', 'LLM/RAG', 'Docker'],
    stats: { Coverage: 'Urban Kenya (pilot)', Platform: 'Django + PostGIS + React Native', Services: '3 integrated modules' },
    img: Jiji, gallery: [Jiji, JijiAnalytics, JijiMobile], color: '#00b88f',
  },
  {
    id: 'mkulima-sauti', featured: true, category: 'agriculture',
    title: 'MKULIMA SAUTI', subtitle: 'Voice-First Agronomy Assistant',
    year: '2026', client: 'Geo-AI Research · Kenya',
    desc: "Voice-first, multilingual Geo-AI assistant answering Kenyan smallholder farmers' agronomy questions over IVR and WhatsApp.",
    longDesc: `Mkulima Sauti ("Farmer's Voice") reaches smallholder farmers in rural Kenya on basic phone calls or WhatsApp voice notes in Kiswahili, Dholuo and Kikuyu.\n\nA farmer dials an Africa's Talking IVR or sends a voice note. Whisper-small with per-language LoRA adapters transcribes the audio; a hybrid RAG engine (pgvector + BM25 + RRF fusion) grounds the answer in a curated KALRO knowledge base, enriched with geo-context from Google Earth Engine (CHIRPS rainfall, Sentinel-2 NDVI) and SoilGrids scoped to the farmer's exact polygon-drawn farm. The answer is synthesised back to speech with Coqui XTTS-v2 and delivered in under 25 seconds.\n\nDjango modular monolith with nine apps, FastAPI micro-services for ASR and TTS, Celery + Redis, PostgreSQL + PostGIS + pgvector, and a React 19 operations dashboard.`,
    tech: ['Django', 'FastAPI', 'Whisper + LoRA', 'Coqui XTTS-v2', 'pgvector', 'PostGIS', 'Google Earth Engine', 'React 19', 'Gemini/Claude'],
    stats: { Languages: 'Kiswahili · Dholuo · Kikuyu · English', Pipeline: 'IVR → ASR → RAG → LLM → TTS', SLA: '< 25s end-to-end' },
    img: Mkulima, color: '#4ade80',
  },
  {
    id: 'auraclim', featured: true, category: 'climate',
    title: 'AURACLIM KENYA', subtitle: 'Climate & Disease Intelligence Platform',
    year: '2025–Present', client: 'Environmental Health Intelligence',
    desc: 'Predicting climate-sensitive disease outbreaks across Kenya by fusing Earth Observation, climate and health surveillance data.',
    longDesc: `AuraClim predicts climate-sensitive disease outbreaks (malaria, dengue, Rift Valley Fever) in Kenya — shifting from reactive outbreak response to proactive prevention for 3.3–3.5 million annual malaria cases.\n\nI designed the end-to-end product architecture integrating Sentinel-2, MODIS, Landsat, ERA5, GFS, CFSv2, CHIRPS and KHIS2 health surveillance. Predictive transmission models use environmental drivers including rainfall, temperature and vegetation dynamics, plus a Kenya-specific Social Vulnerability Index.\n\nMulti-modal generative AI (TerraMind) and agentic AI using Model Context Protocol (MCP) enable autonomous environmental monitoring, with a real-time early-warning alert framework for county-level health authorities.`,
    tech: ['Sentinel-2/MODIS/Landsat', 'ERA5 · GFS · CHIRPS', 'KHIS2', 'Predictive Modelling', 'TerraMind GenAI', 'Model Context Protocol', 'Agentic AI'],
    stats: { Diseases: 'Malaria · Dengue · Rift Valley Fever', Burden: '3.3–3.5M annual malaria cases', Stack: 'EO + Climate + KHIS2 + Agentic AI' },
    img: Aura, gallery: [Aura, Aura2, Aura3], color: '#f59e0b',
  },
  {
    id: 'terrawatch', featured: true, category: 'monitoring',
    title: 'TERRAWATCH ASM', subtitle: 'Illegal Mining Environmental Surveillance',
    year: '2025', client: 'Taita Taveta County',
    desc: 'BigQuery-AI environmental surveillance detecting illegal artisanal mining and land degradation using multi-temporal satellite analysis.',
    longDesc: `TerraWatch ASM is a BigQuery AI-powered surveillance system detecting illegal artisanal and small-scale mining (ASM) and monitoring land degradation in Taita Taveta County, Kenya.\n\nFull cloud-native architecture integrating Google Earth Engine, BigQuery, Vertex AI and Cloud Functions for continuous surveillance. Multi-temporal processing pipelines for Sentinel-2, Landsat and VIIRS power a mining risk scoring system combining 7 environmental indicators (NDVI, BSI, thermal anomalies and spectral mining indicators).\n\nAI-powered automated report generation uses Vertex AI with AI.GENERATE_TEXT, AI.FORECAST, ML.GENERATE_EMBEDDING and VECTOR_SEARCH. Includes 30-day environmental forecasting, real-time alert engine, and a Streamlit dashboard.`,
    tech: ['Google Earth Engine', 'BigQuery AI', 'Vertex AI', 'Cloud Functions', 'Sentinel-2 · VIIRS', 'Streamlit', 'AI.FORECAST', 'Vector Search'],
    stats: { Indicators: '7 environmental indicators', Forecast: '30-day prediction models', Stack: 'GEE · BigQuery · Vertex AI' },
    img: terrawatch, color: '#a78bfa',
  },
  {
    id: 'drought', featured: false, category: 'agriculture',
    title: 'Agricultural Drought Monitoring', subtitle: 'Athi-Galana-Sabaki Basin',
    year: '2023', client: 'Taita Taveta University',
    desc: 'Spatio-temporal drought monitoring system for the Athi-Galana-Sabaki River Basin with early-warning capabilities.',
    tech: ['Django', 'Python', 'QGIS Plugin', 'Satellite Imagery', 'TCI/VCI/ADI'],
    stats: { Coverage: 'Athi-Galana-Sabaki Basin', Indices: '4 Drought Indices', Output: 'Web + QGIS Plugin' },
    img: GeoAI, color: '#34d399',
  },
  {
    id: 'wemast', featured: false, category: 'wetlands',
    title: 'WeMAST', subtitle: 'Wetlands Monitoring — Southern Africa',
    year: '2020–2023', client: 'SASSCAL',
    desc: 'Wetland monitoring geoportal and mobile app for four transboundary river basins in Southern Africa.',
    tech: ['QGIS Plugin', 'GeoServer', 'Web Development', 'Capacity Building'],
    stats: { Basins: '4 Transboundary Basins', Platform: 'Web + Mobile + QGIS Plugin', Client: 'SASSCAL' },
    img: Wemast, color: '#00b88f',
  },
  {
    id: 'flooding', featured: false, category: 'agriculture',
    title: 'Flooding Impact Assessment', subtitle: 'Kenya Agriculture & Infrastructure',
    year: '2024', client: 'MercyCorps AgriFin',
    desc: 'Comprehensive GIS and remote sensing flood impact assessment for agricultural production and infrastructure.',
    tech: ['GIS', 'Remote Sensing', 'Hydrological Models', 'Mapographics'],
    stats: { Scope: 'National Assessment', Focus: 'Smallholder Farmers', Output: 'Flood Impact Maps' },
    img: Flooding, color: '#f59e0b',
  },
  {
    id: 'locust', featured: false, category: 'monitoring',
    title: 'Desert Locust Monitoring', subtitle: 'Horn of Africa',
    year: '2025', client: 'ICPAC',
    desc: 'Predictive methodology for desert locust outbreak stages across the Horn of Africa.',
    tech: ['Remote Sensing', 'Predictive Modelling', 'Machine Learning', 'GIS'],
    stats: { Coverage: 'Horn of Africa', Models: '2 Predictive Models', Stages: 'Breeding · Hoppers · Swarming' },
    img: Locust, color: '#00b88f',
  },
  {
    id: 'coastal', featured: false, category: 'coastal',
    title: 'Coastal Geomorphological Mapping', subtitle: 'Indian Ocean Island States',
    year: '2024', client: 'GMES&AFRICA',
    desc: 'Automated shoreline extraction and trend analysis for eastern Africa Indian Ocean island countries.',
    tech: ['Machine Learning', 'Image Processing', 'QGIS Plugin', 'Remote Sensing'],
    stats: { Countries: 'Mauritius · Comoros · Madagascar · Seychelles', Tools: 'Web + QGIS Plugin', Focus: 'Shoreline Change' },
    img: Cogeos, color: '#4ade80',
  },
  {
    id: 'rangeland', featured: false, category: 'rangeland',
    title: 'Rangeland Management Tools', subtitle: 'Wajir & Garissa Counties',
    year: '2024', client: 'LocateIT Kenya Limited',
    desc: 'Rangeland degradation assessment combining remote sensing, GIS and traditional ecological knowledge.',
    tech: ['Remote Sensing', 'GIS', 'Field Data', 'Invasive Species Mapping'],
    stats: { Counties: 'Wajir · Garissa', Species: 'Prosopis juliflora · Acacia reficiens', Focus: 'Pastoralist Livelihoods' },
    img: Ramdss, color: '#a78bfa',
  },
];

const cats = [
  { id: 'all', label: 'All Projects' },
  { id: 'emergency', label: 'Emergency Response' },
  { id: 'agriculture', label: 'Agriculture' },
  { id: 'climate', label: 'Climate' },
  { id: 'monitoring', label: 'EO Monitoring' },
  { id: 'wetlands', label: 'Wetlands' },
  { id: 'coastal', label: 'Coastal' },
  { id: 'rangeland', label: 'Rangeland' },
];

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', fn);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', fn); document.body.style.overflow = ''; };
  }, [onClose]);

  const imgs = project.gallery || [project.img];

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(2,5,14,0.88)',
      backdropFilter: 'blur(12px)', zIndex: 1000, display: 'flex',
      alignItems: 'center', justifyContent: 'center', padding: 24,
    }} onClick={onClose}>
      <div style={{
        background: 'var(--bg-alt)', border: '1px solid var(--border-soft)',
        borderRadius: 24, maxWidth: 860, width: '100%', maxHeight: '88vh',
        overflowY: 'auto', position: 'relative',
      }} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={{
          position: 'absolute', top: 20, right: 20, width: 36, height: 36,
          borderRadius: '50%', background: 'var(--card-bg-hover)',
          border: '1px solid var(--border-soft)', color: 'var(--text-primary)',
          fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center',
          justifyContent: 'center', zIndex: 10, lineHeight: 1,
        }}>×</button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: imgs.length > 1 ? '1fr 1fr 1fr' : '1fr',
          gap: 3, height: 240, overflow: 'hidden', borderRadius: '24px 24px 0 0',
        }}>
          {imgs.map((src, i) => (
            <div key={i} style={{
              overflow: 'hidden',
              gridColumn: i === 0 && imgs.length > 1 ? 'span 3' : 'span 1',
              height: i === 0 ? (imgs.length > 1 ? 160 : 240) : 80,
            }}>
              <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>

        <div style={{ padding: 32 }}>
          <div style={{
            fontSize: 10, letterSpacing: '0.2em', color: project.color,
            textTransform: 'uppercase', marginBottom: 6,
          }}>{project.client} · {project.year}</div>
          <h2 style={{
            fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 26,
            color: 'var(--text-primary)', margin: 0, lineHeight: 1.1,
          }}>{project.title}</h2>
          <div style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 4 }}>
            {project.subtitle}
          </div>

          <div style={{ marginTop: 20 }}>
            {(project.longDesc || project.desc).split('\n\n').map((p, i) => (
              <p key={i} style={{
                color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: 14, marginBottom: 16,
              }}>{p.trim()}</p>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 24 }}>
            <div>
              <div style={{
                fontSize: 11, letterSpacing: '0.18em', color: 'var(--text-muted)',
                textTransform: 'uppercase', marginBottom: 12,
              }}>Technologies</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {project.tech.map((t) => (
                  <span key={t} style={{
                    fontSize: 11, padding: '4px 10px', borderRadius: 20,
                    background: `${project.color}18`, color: project.color,
                    border: `1px solid ${project.color}44`,
                  }}>{t}</span>
                ))}
              </div>
            </div>
            <div>
              <div style={{
                fontSize: 11, letterSpacing: '0.18em', color: 'var(--text-muted)',
                textTransform: 'uppercase', marginBottom: 12,
              }}>Project Stats</div>
              {Object.entries(project.stats).map(([k, v]) => (
                <div key={k} style={{
                  display: 'flex', justifyContent: 'space-between',
                  borderBottom: '1px solid var(--border-softer)', paddingBottom: 8, marginBottom: 8,
                }}>
                  <span style={{ fontSize: 12, color: 'var(--text-muted)', textTransform: 'capitalize' }}>{k}</span>
                  <span style={{
                    fontSize: 12, color: 'var(--text-primary)', fontWeight: 600,
                    textAlign: 'right', maxWidth: '55%',
                  }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  const [filter, setFilter] = useState('all');
  const [modal, setModal] = useState<Project | null>(null);

  const featured = projects.filter((p) => p.featured);
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" style={{
      padding: '96px 0', background: 'var(--bg-alt)', position: 'relative', overflow: 'hidden',
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
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48,
          alignItems: 'end', marginBottom: 64,
        }} className="proj-head-grid">
          <div>
            <div style={{
              fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase',
              color: 'var(--accent)', marginBottom: 12, fontWeight: 600,
            }}>Selected Work</div>
            <h2 style={{
              fontFamily: "'Syne',sans-serif", fontWeight: 800,
              fontSize: 'clamp(32px,4vw,52px)', lineHeight: 1.08,
              letterSpacing: '-0.025em', color: 'var(--text-primary)', margin: 0,
            }}>
              Featured{' '}
              <span style={{
                background: 'linear-gradient(90deg, var(--accent), #3b82f6)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>Projects</span>
            </h2>
          </div>
          <p style={{
            color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: 15, margin: 0,
          }}>
            Geospatial intelligence and Geo-AI systems delivered across emergency response, climate health,
            agriculture and environmental monitoring — from Nairobi to Southern Africa.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 24, marginBottom: 72,
        }}>
          {featured.map((p, i) => (
            <article key={p.id} style={{
              background: 'var(--card-bg)', border: '1px solid var(--border-soft)',
              borderRadius: 20, overflow: 'hidden', cursor: 'pointer',
              transition: 'border-color 0.3s, transform 0.3s',
              opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${i * 0.1}s`,
            }}
              onClick={() => setModal(p)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${p.color}66`;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-soft)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
              <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                <img src={p.img} alt={p.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(5,8,18,0.75) 0%, transparent 60%)',
                }} />
                <div style={{
                  position: 'absolute', bottom: 14, left: 14, right: 14,
                  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
                }}>
                  <span style={{
                    fontSize: 11, padding: '4px 12px', borderRadius: 20,
                    background: 'rgba(5,8,18,0.7)', backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.15)', color: '#f0f4ff',
                  }}>{p.client}</span>
                  <span style={{
                    fontSize: 11, padding: '4px 10px', borderRadius: 20,
                    background: `${p.color}33`, border: `1px solid ${p.color}66`, color: p.color,
                  }}>{p.year}</span>
                </div>
              </div>
              <div style={{ padding: 24 }}>
                <div style={{
                  fontSize: 10, letterSpacing: '0.2em', color: p.color,
                  textTransform: 'uppercase', marginBottom: 6,
                }}>{p.title}</div>
                <h3 style={{
                  fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 18,
                  color: 'var(--text-primary)', marginBottom: 10, lineHeight: 1.25,
                }}>{p.subtitle}</h3>
                <p style={{
                  fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: 16,
                }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
                  {p.tech.slice(0, 4).map((t) => (
                    <span key={t} style={{
                      fontSize: 10, padding: '3px 9px', borderRadius: 20,
                      background: `${p.color}18`, color: p.color, border: `1px solid ${p.color}35`,
                    }}>{t}</span>
                  ))}
                  {p.tech.length > 4 && (
                    <span style={{
                      fontSize: 10, padding: '3px 9px', borderRadius: 20,
                      background: 'var(--card-bg-hover)', color: 'var(--text-muted)',
                    }}>+{p.tech.length - 4}</span>
                  )}
                </div>

                <button style={{
                  fontSize: 12, fontWeight: 700, color: '#030812',
                  background: `linear-gradient(90deg, ${p.color}, ${p.color}cc)`,
                  border: 'none', padding: '8px 18px', borderRadius: 6, cursor: 'pointer',
                  letterSpacing: '0.06em',
                }}>View Details →</button>
              </div>
            </article>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 36 }}>
          <h3 style={{
            fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 22,
            color: 'var(--text-primary)', margin: 0, whiteSpace: 'nowrap',
          }}>All Projects</h3>
          <div style={{ flex: 1, height: 1, background: 'var(--border-soft)' }} />
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
          {cats.map((c) => (
            <button key={c.id} onClick={() => setFilter(c.id)} style={{
              padding: '7px 16px', borderRadius: 20, fontSize: 11, fontWeight: 600,
              letterSpacing: '0.06em', cursor: 'pointer', transition: 'all 0.2s',
              background: filter === c.id ? 'var(--accent)' : 'var(--card-bg)',
              color: filter === c.id ? '#030812' : 'var(--text-secondary)',
              border: filter === c.id ? '1px solid transparent' : '1px solid var(--border-soft)',
            }}>{c.label}</button>
          ))}
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16,
        }}>
          {filtered.map((p) => (
            <div key={p.id} style={{
              background: 'var(--card-bg)', border: '1px solid var(--border-soft)',
              borderRadius: 16, overflow: 'hidden', cursor: 'pointer',
              transition: 'border-color 0.3s, transform 0.3s',
            }}
              onClick={() => setModal(p)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${p.color}55`;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-soft)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
              <div style={{ height: 130, overflow: 'hidden', position: 'relative' }}>
                <img src={p.img} alt={p.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute', top: 10, right: 10, fontSize: 10, padding: '3px 8px',
                  borderRadius: 20, background: 'rgba(5,8,18,0.75)', color: '#f0f4ff',
                  backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.15)',
                }}>{p.year}</div>
              </div>
              <div style={{ padding: 16 }}>
                <div style={{
                  fontSize: 10, color: p.color, letterSpacing: '0.15em',
                  textTransform: 'uppercase', marginBottom: 4,
                }}>{p.title}</div>
                <div style={{
                  fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13,
                  color: 'var(--text-primary)', marginBottom: 6, lineHeight: 1.3,
                }}>{p.subtitle}</div>
                <p className="line-clamp-2" style={{
                  fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 8,
                }}>{p.desc}</p>
                <div style={{ fontSize: 11, color: p.color, fontWeight: 600 }}>
                  {p.client} · Learn More →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}
      <style>{`
        @media (max-width: 860px) {
          .proj-head-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
