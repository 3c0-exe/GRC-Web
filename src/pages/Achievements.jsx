import React from 'react';

// ── 1. ASSET CONFIGURATION ──
const GRC_RED = '#C8102E';
const NOISE = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const GRC_ICON_PHOTO = "src/img/grc logo.png"; 

// ── 2. STYLES ARCHIVE ──
const styles = {
  container: { fontFamily: "'Poppins', sans-serif", color: '#333' },
  sectionMax: { maxWidth: '1200px', margin: '0 auto', padding: '0 48px' },

  hero: { 
    backgroundColor: GRC_RED, 
    minHeight: '100vh', 
    position: 'relative', 
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
  },

  projectGrid: { 
    display: 'grid', 
    gridTemplateColumns: '1fr 1.6fr 1fr', 
    gap: '20px', 
    alignItems: 'stretch' 
  },
  projectCard: { 
    backgroundColor: '#FDE8EC', 
    borderRadius: '12px', 
    minHeight: '220px', 
    border: '1px solid rgba(200,16,46,0.08)' 
  },

  noise: { 
    position: 'absolute', inset: 0, opacity: 0.06, 
    backgroundImage: NOISE, backgroundSize: '200px 200px', pointerEvents: 'none' 
  },
};

export default function Achievements() {
  return (
    <div style={styles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;900&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-eyebrow { animation: fadeUp 0.6s ease both; animation-delay: 0.1s; }
        .hero-heading { animation: fadeUp 0.7s ease both; animation-delay: 0.25s; }
        .hero-divider { animation: fadeUp 0.6s ease both; animation-delay: 0.42s; }
        .hero-body    { animation: fadeUp 0.6s ease both; animation-delay: 0.55s; }
        .hero-image   { animation: fadeUp 0.8s ease both; animation-delay: 0.3s; }
      `}</style>

      {/* ── HERO SECTION ── */}
      <section style={styles.hero}>
        <div style={styles.noise} />

        {/* Dark gradient for depth */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(105deg, rgba(0,0,0,0.3) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        {/* Bottom accent line */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '6px', backgroundColor: '#8B0000', zIndex: 2 }} />

        <div style={{ ...styles.sectionMax, width: '100%', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '60px',
            flexWrap: 'wrap',
            padding: '100px 0',
          }}>

            {/* ── LEFT: Text ── */}
            <div style={{ flex: 1, minWidth: '300px', maxWidth: '580px' }}>

              {/* Eyebrow */}
              <div className="hero-eyebrow" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '32px',
              }}>
                <span style={{ display: 'block', width: '40px', height: '2px', backgroundColor: 'rgba(255,255,255,0.5)' }} />
                <span style={{
                  color: 'rgba(255,255,255,0.65)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  fontFamily: "'Poppins', sans-serif",
                }}>
                  Our Achievements
                </span>
              </div>

              {/* Heading — Times New Roman */}
              <h1 className="hero-heading" style={{
                fontFamily: "'Times New Roman', Times, serif",
                color: 'white',
                fontSize: 'clamp(38px, 5vw, 66px)',
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: '-0.01em',
                margin: 0,
              }}>
                Integrity in Learning,{' '}
                <br />
                <span style={{ fontStyle: 'italic' }}>Trust</span>{' '}
                in Leadership.
              </h1>

              {/* Divider */}
              <div className="hero-divider" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                margin: '32px 0',
                maxWidth: '340px',
              }}>
                <span style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.25)' }} />
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'white', flexShrink: 0 }} />
                <span style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.25)' }} />
              </div>

              {/* Body */}
              <p className="hero-body" style={{
                fontFamily: "'Poppins', sans-serif",
                color: 'rgba(255,255,255,0.82)',
                fontSize: '15px',
                fontWeight: 400,
                lineHeight: 1.9,
                maxWidth: '450px',
                margin: '0 0 44px 0',
              }}>
                Four decades of academic milestones and career breakthroughs. 
                From top-tier board passers to industry innovators, we shape 
                the future of global industries.
              </p>

            </div>

            {/* ── RIGHT: Logo ── */}
            <div className="hero-image" style={{ flexShrink: 0 }}>
              <img 
                src={GRC_ICON_PHOTO}
                alt="GRC Logo" 
                style={{ 
                  width: 'clamp(260px, 33vw, 440px)',
                  height: 'clamp(260px, 33vw, 440px)',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.3))',
                }} 
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── PROJECTS SECTION ── */}
      <section style={{ backgroundColor: 'white', padding: '80px 0' }}>
        <div style={styles.sectionMax}>
          <h2 style={{ textAlign: 'center', fontWeight: 900, fontSize: '32px', color: GRC_RED, marginBottom: '50px' }}>
            Projects
          </h2>
          <div style={styles.projectGrid}>
            <div style={styles.projectCard} />
            <div style={{ ...styles.projectCard, minHeight: '300px' }} />
            <div style={styles.projectCard} />
          </div>
          <hr style={{ marginTop: '60px', border: 'none', height: '2px', background: `linear-gradient(to right, transparent, ${GRC_RED}, transparent)`, opacity: 0.2 }} />
        </div>
      </section>

      {/* ── INNOVATION & GROWTH ── */}
      <section style={{ backgroundColor: 'white', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '0 32px' }}>
          <h2 style={{ fontWeight: 900, fontSize: '36px', color: GRC_RED, marginBottom: '15px' }}>Innovation & Growth</h2>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '30px', fontStyle: 'italic' }}>Future-forward thinking and academic excellence.</p>
          <p style={{ color: '#555', fontSize: '16px', lineHeight: 1.9 }}>
            Our journey is defined by a series of milestones that bridge the gap between academic research and industry application. 
            By leveraging cutting-edge expertise, we have pioneered innovative solutions that foster long-term sustainability.
          </p>
        </div>
      </section>

      {/* ── GALLERY SECTION ── */}
      <section style={{ backgroundColor: GRC_RED, padding: '60px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ ...styles.noise, opacity: 0.05 }} />
        <div style={styles.sectionMax}>
          <GalleryRow />
          <GalleryRow />
          <GalleryRow />
        </div>
      </section>

      {/* ── MAP FOOTER ── */}
      <div style={{ width: '100%', height: '380px' }}>
        <iframe
          title="GRC Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.5!2d120.9813!3d14.6507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b1234567890a%3A0x1234567890abcdef!2sGlobal%20Reciprocal%20Colleges!5e0!3m2!1sen!2sph!4v1234567890"
          style={{ width: '100%', height: '100%', border: 'none' }}
          loading="lazy"
        />
      </div>
    </div>
  );
}

function GalleryRow() {
  return (
    <div style={{
      display: 'grid', 
      gridTemplateColumns: '1fr 1.3fr 1fr', 
      gap: '16px', 
      marginBottom: '16px'
    }}>
      <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '10px', height: '200px' }} />
      <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '10px', height: '200px' }} />
      <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '10px', height: '200px' }} />
    </div>
  );
}