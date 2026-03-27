import { Link } from 'react-router-dom';

const GRC_RED = '#C8102E';

const styles = {
  container: { fontFamily: "'Poppins', sans-serif" },
  sectionMax: { maxWidth: '1200px', margin: '0 auto' },
  heroSection: { 
    backgroundColor: GRC_RED, 
    minHeight: '100vh', 
    position: 'relative', 
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
  },
  btnDark: { 
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: '#8B0000', 
    color: 'white', 
    fontSize: '13px', 
    fontWeight: 700, 
    padding: '15px 34px', 
    textDecoration: 'none', 
    textTransform: 'uppercase', 
    letterSpacing: '0.08em', 
    borderRadius: '4px', 
    boxShadow: '0 4px 20px rgba(0,0,0,0.35)' 
  },
  inputField: { 
    width: '100%', 
    padding: '12px 16px', 
    border: 'none', 
    borderRadius: '4px', 
    fontSize: '14px', 
    backgroundColor: 'rgba(255,255,255,0.96)', 
    outline: 'none', 
    color: '#333' 
  },
  noiseOverlay: {
    position: 'absolute', inset: 0, opacity: 0.06, pointerEvents: 'none',
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
    backgroundSize: '200px 200px',
  },
  socialIcon: {
    width: '32px',
    height: '32px',
    transition: 'transform 0.2s ease',
    cursor: 'pointer'
  }
};

export default function Home() {
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
        .hero-cta     { animation: fadeUp 0.6s ease both; animation-delay: 0.68s; }
        .hero-image   { animation: fadeUp 0.8s ease both; animation-delay: 0.3s; }
        .social-icon:hover { transform: scale(1.15); }
      `}</style>

      {/* ── HERO SECTION ── */}
      <section style={styles.heroSection}>
        <div style={styles.noiseOverlay} />

        {/* Bottom accent line */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '6px', backgroundColor: '#8B0000', zIndex: 2 }} />

        <div style={{
          ...styles.sectionMax,
          padding: '0 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '60px',
          flexWrap: 'wrap',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}>

          {/* ── LEFT: Text content ── */}
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
                GRC Office
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
              margin: '0',
            }}>
              Research &amp;{' '}
              <span style={{ fontStyle: 'italic' }}>Community</span>
              <br />Extension
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
              maxWidth: '440px',
              margin: '0 0 44px 0',
            }}>
              Leaders in transformative research and grassroots extension.
              Building knowledge. Empowering communities. Changing lives.
            </p>

            {/* CTA */}
            <div className="hero-cta">
              <Link
                to="/contact"
                style={styles.btnDark}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Enroll Now!
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Logo image ── */}
          <div className="hero-image" style={{ flexShrink: 0 }}>
            <img 
              src="src/img/RCE logo.png" 
              alt="RCE Medallion" 
              style={{ 
                width: 'clamp(280px, 35vw, 460px)',
                height: 'clamp(280px, 35vw, 460px)',
                objectFit: 'contain',
                filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))' 
              }} 
            />
          </div>

        </div>
      </section>

      {/* ── INFORMATION SECTION ── */}
      <section style={{ backgroundColor: 'white', padding: '72px 32px' }}>
        <div style={styles.sectionMax}>
          <h2 style={{ textAlign: 'center', fontWeight: 900, fontSize: '26px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#111', marginBottom: '40px' }}>Information</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ backgroundColor: '#FDE8EC', borderRadius: '12px', height: '190px', border: '1px solid rgba(200,16,46,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'rgba(200,16,46,0.25)', fontSize: '13px', fontWeight: 600 }}>Card {i}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '48px', height: '2px', background: `linear-gradient(to right, ${GRC_RED}, transparent)`, opacity: 0.3 }} />
        </div>
      </section>

      {/* ── ABOUT US SECTION ── */}
      <section style={{ backgroundColor: 'white', padding: '10px 35px 100px', marginLeft: '100px' }}>
        <div style={{ ...styles.sectionMax, display: 'flex', alignItems: 'center', gap: '200px', flexWrap: 'wrap' }}>
          <div style={{ flexShrink: 0, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '400px' }}>
            <img 
              src="src/img/grc logo.png" 
              alt="GRC Icon"
              style={{ width: '450px', height: '450px', objectFit: 'contain' }}
            />
          </div>

          <div style={{ flex: 1, minWidth: '20px' }}>
            <p style={{ color: GRC_RED, fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '16px' }}>About Us</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: '#111', lineHeight: 1.15, marginBottom: '25px' }}>
              Driving <span style={{ color: GRC_RED }}>Knowledge,</span><br />
              Serving <span style={{ color: GRC_RED }}>Communities.</span>
            </h2>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: 1.8, maxWidth: '520px', marginBottom: '32px' }}>
              Leveraging academic expertise to provide real-world, innovative solutions that directly benefit our local and global partners.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0', marginBottom: '36px' }}>
              {[
                { val: '150+', label: 'Community Partners' }, 
                { val: '200+', label: 'Outreach Projects' }, 
                { val: '25+', label: 'Years of Impact' }
              ].map((stat, i) => (
                <div key={stat.label} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ paddingRight: '24px' }}>
                    <p style={{ fontSize: '30px', fontWeight: 900, color: '#111', lineHeight: 1 }}>{stat.val}</p>
                    <p style={{ fontSize: '11px', color: '#999', marginTop: '4px' }}>{stat.label}</p>
                  </div>
                  {i < 2 && <div style={{ width: '1px', height: '44px', backgroundColor: '#ddd', marginRight: '24px' }} />}
                </div>
              ))}
            </div>
            <Link to="/about" style={{ ...styles.btnDark, backgroundColor: GRC_RED, boxShadow: 'none' }}>Learn More</Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT & FOLLOW US SECTION ── */}
      <section style={{ background: `linear-gradient(135deg, #e0102e 0%, #9b0020 100%)`, padding: '80px 32px', position: 'relative', overflow: 'hidden' }}>
        <div style={styles.noiseOverlay} />
        <div style={{ ...styles.sectionMax, position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ color: 'white', fontSize: 'clamp(26px, 4vw, 46px)', fontWeight: 900, lineHeight: 1.2, marginBottom: '14px' }}>
              Let's Build the Future, <span style={{ color: '#FFCCD5' }}>Together.</span>
            </h2>
          </div>

          <div style={{ display: 'flex', gap: '56px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '240px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
               <div>
                  <ContactInfo icon="📍" text="GRC Building, Caloocan, Philippines" />
                  <ContactInfo icon="📞" text="0999-999-9999" />
                  <ContactInfo icon="✉️" text="rceassistextension0104@gmail.com" />
               </div>

               <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '24px' }}>
                  <p style={{ color: 'white', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.1em' }}>Follow Us</p>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <a href="#" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="FB" style={styles.socialIcon} className="social-icon" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="IG" style={styles.socialIcon} className="social-icon" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" style={styles.socialIcon} className="social-icon" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="IN" style={styles.socialIcon} className="social-icon" /></a>
                  </div>
               </div>
            </div>

            <div style={{ flex: 1.3, minWidth: '280px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input style={styles.inputField} placeholder="Name" />
                <input style={styles.inputField} placeholder="Year & Sec" />
                <input style={styles.inputField} placeholder="Student No" />
                <textarea style={{ ...styles.inputField, resize: 'none' }} placeholder="Message" rows={4} />
                <button style={{ ...styles.btnDark, border: 'none', cursor: 'pointer', backgroundColor: '#6B0000', width: '100%', justifyContent: 'center' }}>Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP FOOTER ── */}
      <div style={{ width: '100%', height: '340px' }}>
        <iframe title="GRC Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.5!2d120.9813!3d14.6507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b1234567890a%3A0x1234567890abcdef!2sGlobal%20Reciprocal%20Colleges!5e0!3m2!1sen!2sph!4v1234567890" style={{ width: '100%', height: '100%', border: 'none' }} loading="lazy" />
      </div>

    </div>
  );
}

function ContactInfo({ icon, text }) {
  return (
    <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '15px' }}>
      <span style={{ fontSize: '18px' }}>{icon}</span>
      <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>{text}</p>
    </div>
  );
}