import React from 'react';

// ── 1. ASSET CONFIGURATION ──
const GRC_RED = '#C8102E';
const NOISE = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

// Your local image path
const GRC_ICON_PHOTO = "src/img/grc logo.png"; 

// ── 2. STYLES ARCHIVE ──
const styles = {
  container: { fontFamily: "'Poppins', sans-serif", color: '#333' },
  sectionMax: { maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }, // Slightly wider for better spacing
  
  hero: { 
    backgroundColor: GRC_RED, 
    minHeight: '500px', 
    position: 'relative', 
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center'
  },
  heroContent: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    gap: '80px', // INCREASED GAP: Adds significant space between text and photo
    flexWrap: 'wrap', 
    position: 'relative', 
    zIndex: 1,
    padding: '100px 0'
  },
  textSide: {
    flex: 1, 
    minWidth: '300px',
    paddingRight: '40px' // ASIDE: Pushes the text specifically further to the left
  },
  heroTitle: { 
    color: 'white', 
    fontSize: 'clamp(32px, 5vw, 52px)', 
    fontWeight: 900, 
    lineHeight: 1.1 
  },
  heroSub: { 
    color: 'rgba(255,255,255,0.9)', 
    fontSize: '15px', 
    lineHeight: 1.8, 
    maxWidth: '450px', 
    marginTop: '24px' 
  },

  // ── LOGO STYLES ──
  photoContainer: {
    flexShrink: 0,
    width: '450px', 
    height: '450px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    opacity: 1.0, 
    zIndex: 2,
  },
  photoImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    filter: 'drop-shadow(0px 15px 30px rgba(0,0,0,0.25))' 
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

  galleryGrid: { 
    display: 'grid', 
    gridTemplateColumns: '1fr 1.3fr 1fr', 
    gap: '16px', 
    marginBottom: '16px' 
  },
  galleryCard: { 
    backgroundColor: 'rgba(255,255,255,0.15)', 
    borderRadius: '10px', 
    height: '200px' 
  },

  noise: { 
    position: 'absolute', inset: 0, opacity: 0.06, 
    backgroundImage: NOISE, backgroundSize: '200px 200px', pointerEvents: 'none' 
  },
  gradient: { 
    position: 'absolute', inset: 0, 
    background: 'linear-gradient(105deg, rgba(0,0,0,0.3) 0%, transparent 70%)', pointerEvents: 'none' 
  }
};

export default function Achievements() {
  return (
    <div style={styles.container}>

      {/* ── HERO SECTION ── */}
      <section style={styles.hero}>
        <div style={styles.noise} />
        <div style={styles.gradient} />

        <div style={{ ...styles.sectionMax, width: '100%' }}>
          <div style={styles.heroContent}>
            
            {/* ── TEXT SIDE (Adjusted spacing) ── */}
            <div style={styles.textSide}>
              <h1 style={styles.heroTitle}>Integrity in Learning,<br />Trust in Leadership.</h1>
              <p style={styles.heroSub}>
                Four decades of academic milestones and career breakthroughs. From top-tier board passers 
                to industry innovators, we shape the future of global industries.
              </p>
            </div>

            {/* ── LOGO SIDE ── */}
            <div style={styles.photoContainer}>
              <img 
                src={GRC_ICON_PHOTO} 
                alt="GRC Logo" 
                style={styles.photoImg} 
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
    <div style={styles.galleryGrid}>
      <div style={styles.galleryCard} />
      <div style={styles.galleryCard} />
      <div style={styles.galleryCard} />
    </div>
  );
}