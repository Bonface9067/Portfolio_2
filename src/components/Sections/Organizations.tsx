import React from 'react';
import LocateLogo from '../../assets/images/LocateIT.jpg';
import EsriLogo from '../../assets/images/ESRI_2.png';
import MercyCorpsLogo from '../../assets/images/Mercycorps.jpg';
import IcpacLogo from '../../assets/images/ICPAC.webp';
import GmesLogo from '../../assets/images/LOGO-GMES.png';
import SasscalLogo from '../../assets/images/Sasscal.png';
import TTULogo from '../../assets/images/Taita-Taveta-University.webp';
import { useInView, container } from './_shared';

const orgs = [
  { name: 'ICPAC', sub: 'Intergovernmental Authority on Development Climate Prediction & Applications Centre', img: IcpacLogo, role: 'Research Partner' },
  { name: 'GMES & Africa', sub: 'Global Monitoring for Environment and Security — Africa Programme', img: GmesLogo, role: 'Consortium Project' },
  { name: 'Kenya Space Agency', sub: 'National space programme authority', img: null, role: 'Policy Engagement', initials: 'KSA' },
  { name: 'SASSCAL', sub: 'Southern African Science Service Centre for Climate Change and Adaptive Land Management', img: SasscalLogo, role: 'WeMAST Consortium' },
  { name: 'MercyCorps AgriFin', sub: 'Financial inclusion for smallholder farmers in East Africa', img: MercyCorpsLogo, role: 'Geospatial Consultancy' },
  { name: 'LocateIT Kenya', sub: 'Geospatial solutions firm leading Earth observation innovation in Kenya', img: LocateLogo, role: 'Current Employer' },
  { name: 'ESRI Eastern Africa', sub: 'Leading GIS software and solutions provider for Africa', img: EsriLogo, role: 'Former Intern' },
  { name: 'Taita Taveta University', sub: 'Centre of excellence in geoinformatics education in Kenya', img: TTULogo, role: 'Academic Institution' },
] as const;

const Organizations: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);

  return (
    <section id="organizations" style={{ padding: '80px 0', background: 'var(--bg-alt)' }}>
      <div ref={ref} style={{
        ...container,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{
            fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'var(--accent)', marginBottom: 12, fontWeight: 600,
          }}>Network &amp; Partnerships</div>
          <h2 style={{
            fontFamily: "'Syne',sans-serif", fontWeight: 800,
            fontSize: 'clamp(30px,3.8vw,50px)', lineHeight: 1.08,
            letterSpacing: '-0.025em', color: 'var(--text-primary)', margin: 0,
          }}>
            Organisations &amp;{' '}
            <span style={{
              background: 'linear-gradient(90deg, var(--accent), #3b82f6)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Affiliations</span>
          </h2>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16,
        }}>
          {orgs.map((o, i) => (
            <div key={o.name} style={{
              background: 'var(--card-bg)', border: '1px solid var(--border-soft)',
              borderRadius: 14, padding: 20, textAlign: 'center',
              transition: 'border-color 0.3s, transform 0.3s',
              opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(16px)',
              transitionDelay: `${i * 0.07}s`,
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-border)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-soft)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
              <div style={{
                width: 64, height: 64, borderRadius: 12, overflow: 'hidden',
                margin: '0 auto 14px', background: 'var(--card-bg-hover)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {o.img ? (
                  <img src={o.img} alt={o.name}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 6 }} />
                ) : (
                  <span style={{
                    fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 20, color: 'var(--accent)',
                  }}>{('initials' in o && o.initials) || o.name.slice(0, 2)}</span>
                )}
              </div>
              <div style={{
                fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13,
                color: 'var(--text-primary)', marginBottom: 5, lineHeight: 1.3,
              }}>{o.name}</div>
              <div style={{
                fontSize: 10, color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: 8,
              }}>{o.sub}</div>
              <div style={{
                fontSize: 10, padding: '3px 9px', borderRadius: 20, display: 'inline-block',
                background: 'var(--accent-soft)', color: 'var(--accent)',
                border: '1px solid var(--accent-border)', letterSpacing: '0.08em',
              }}>{o.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizations;
