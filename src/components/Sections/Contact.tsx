import React, { useState } from 'react';
import { portfolioApi } from '../../lib/supabase';
import { contactInfo } from '../../lib/contact';
import { useInView, sectionPad, container } from './_shared';

const contacts = [
  { icon: '✉', label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: '📞', label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s+/g, '')}` },
  { icon: '📍', label: 'Location', value: 'Nairobi, Kenya', href: 'https://maps.google.com/?q=Nairobi+Kenya' },
  { icon: '💼', label: 'LinkedIn', value: contactInfo.linkedinHandle, href: contactInfo.linkedinUrl },
  { icon: '🐙', label: 'GitHub', value: contactInfo.githubHandle, href: contactInfo.githubUrl },
].filter((c) => c.value);

const Contact: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setErr('Please enter a valid email address');
      return;
    }
    setLoading(true);
    setErr('');
    try {
      await portfolioApi.submitContactForm(form);
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setErr('Failed to send. Please try again or email directly.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 16px', borderRadius: 8, fontSize: 14,
    background: 'var(--card-bg-hover)', border: '1px solid var(--border-soft)',
    color: 'var(--text-primary)', fontFamily: "'DM Sans',sans-serif", outline: 'none',
    transition: 'border-color 0.2s', boxSizing: 'border-box',
  };

  return (
    <section id="contact" style={{ ...sectionPad, background: 'var(--bg-primary)' }}>
      <div style={{
        position: 'absolute', bottom: 0, right: '10%', width: 600, height: 500,
        background: 'radial-gradient(ellipse at center, var(--accent-soft) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div ref={ref} style={{
        ...container,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
        position: 'relative',
      }}>
        <div className="contact-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start',
        }}>
          <div>
            <div style={{
              fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase',
              color: 'var(--accent)', marginBottom: 12, fontWeight: 600,
            }}>Let's Connect</div>
            <h2 style={{
              fontFamily: "'Syne',sans-serif", fontWeight: 800,
              fontSize: 'clamp(30px,3.8vw,50px)', lineHeight: 1.08,
              letterSpacing: '-0.025em', color: 'var(--text-primary)', margin: 0,
            }}>
              Start a{' '}
              <span style={{
                background: 'linear-gradient(90deg, var(--accent), #3b82f6)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>Conversation</span>
            </h2>

            <p style={{
              color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: 15,
              margin: '24px 0 40px', maxWidth: 480,
            }}>
              Whether you need geospatial intelligence, Geo-AI system design, climate research collaboration, or Earth observation consultancy — I am here to help turn complex spatial challenges into actionable solutions.
            </p>

            {contacts.map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20,
                textDecoration: 'none', transition: 'opacity 0.2s',
              }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10, display: 'flex',
                  alignItems: 'center', justifyContent: 'center', fontSize: 18,
                  background: 'var(--accent-soft)', border: '1px solid var(--accent-border)',
                }}>{c.icon}</div>
                <div>
                  <div style={{
                    fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.12em',
                    textTransform: 'uppercase', marginBottom: 3,
                  }}>{c.label}</div>
                  <div style={{
                    fontSize: 14, color: 'var(--text-strong)', fontWeight: 500,
                  }}>{c.value}</div>
                </div>
              </a>
            ))}

            <div style={{
              marginTop: 32, padding: '16px 20px', borderRadius: 12,
              background: 'var(--accent-soft)', border: '1px solid var(--accent-border)',
            }}>
              <div style={{
                fontSize: 12, color: 'var(--accent)', fontWeight: 600, marginBottom: 4,
              }}>⚡ Response time</div>
              <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                I typically respond within 24–48 hours. For urgent matters, indicate that in your message subject.
              </div>
            </div>
          </div>

          <div style={{
            background: 'var(--card-bg)', border: '1px solid var(--border-soft)',
            borderRadius: 20, padding: 36,
          }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{ fontSize: 48, marginBottom: 16, color: 'var(--accent)' }}>✓</div>
                <div style={{
                  fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 22,
                  color: 'var(--text-primary)', marginBottom: 8,
                }}>Message Sent!</div>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
                  Thank you for reaching out. I'll get back to you within 12–48 hours.
                </p>
                <button onClick={() => setSent(false)} style={{
                  marginTop: 16, fontSize: 13, color: 'var(--accent)', background: 'none',
                  border: 'none', cursor: 'pointer', fontWeight: 600,
                }}>← Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{
                  fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 19,
                  color: 'var(--text-primary)', marginBottom: 24,
                }}>Send a Message</div>

                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16,
                }}>
                  <div>
                    <label style={{
                      fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.12em',
                      textTransform: 'uppercase', display: 'block', marginBottom: 6,
                    }}>Full Name *</label>
                    <input type="text" required placeholder="Your full name"
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent-border)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-soft)')} />
                  </div>
                  <div>
                    <label style={{
                      fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.12em',
                      textTransform: 'uppercase', display: 'block', marginBottom: 6,
                    }}>Email *</label>
                    <input type="email" required placeholder="your@email.com"
                      value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent-border)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-soft)')} />
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={{
                    fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.12em',
                    textTransform: 'uppercase', display: 'block', marginBottom: 6,
                  }}>Subject *</label>
                  <input type="text" required placeholder="Brief description of your inquiry"
                    value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-border)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-soft)')} />
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={{
                    fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.12em',
                    textTransform: 'uppercase', display: 'block', marginBottom: 6,
                  }}>Message *</label>
                  <textarea required rows={5} placeholder="Tell me about your project or inquiry..."
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'none' }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-border)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-soft)')} />
                </div>

                {err && (
                  <div style={{
                    background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
                    borderRadius: 8, padding: '10px 14px', fontSize: 13, color: '#f87171', marginBottom: 16,
                  }}>{err}</div>
                )}

                <button type="submit" disabled={loading} style={{
                  width: '100%', padding: '14px', borderRadius: 8,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  background: loading ? 'var(--accent-soft)' : 'linear-gradient(135deg, var(--accent), #3b82f6)',
                  color: '#030812', fontWeight: 700, fontSize: 14, border: 'none',
                  letterSpacing: '0.08em', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', gap: 8, transition: 'opacity 0.2s',
                }}
                  onMouseEnter={(e) => { if (!loading) e.currentTarget.style.opacity = '0.88'; }}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}>
                  {loading ? (
                    <span style={{
                      display: 'inline-block', width: 16, height: 16,
                      border: '2px solid rgba(3,8,18,0.4)', borderTopColor: '#030812',
                      borderRadius: '50%', animation: 'spin 0.8s linear infinite',
                    }} />
                  ) : <span>✈</span>}
                  {loading ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
