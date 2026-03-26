import { Link } from 'react-router-dom';

// ── 1. ASSET IMPORTS ──
// import rceMedallion from '../assets/rce-medallion.png';
// import grcIcon from '../assets/grc-logo.png';

const GRC_RED = '#C8102E';

const styles = {
  container: { fontFamily: "'Poppins', sans-serif" },
  sectionMax: { maxWidth: '1200px', margin: '0 auto' },
  heroSection: { 
    backgroundColor: GRC_RED, 
    minHeight: '420px', 
    position: 'relative', 
    overflow: 'hidden' 
  },
  heroText: { 
    color: 'white', 
    fontSize: 'clamp(32px, 5vw, 54px)', 
    fontWeight: 900, 
    textTransform: 'uppercase', 
    lineHeight: 1.08, 
    marginBottom: '20px', 
    letterSpacing: '-0.01em',
    textAlign: 'left'
  },
  btnRed: { 
    display: 'inline-block', 
    backgroundColor: '#8B0000', 
    color: 'white', 
    fontSize: '13px', 
    fontWeight: 700, 
    padding: '14px 32px', 
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

      {/* ── HERO SECTION ── */}
      <section style={styles.heroSection}>
        <div style={styles.noiseOverlay} />
        <div style={{ 
          ...styles.sectionMax, 
          padding: '120px 20px 72px 10px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'flex-start', 
          gap: '60px', 
          flexWrap: 'wrap' 
        }}>
          <div style={{ flex: 1, minWidth: '280px' }}>
            <h1 style={styles.heroText}>Research and<br />Community<br />Extension</h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', lineHeight: 1.75, maxWidth: '360px', marginBottom: '36px' }}>
              Leaders in transformative research and grassroots extension. Building knowledge. Empowering communities. Changing lives.
            </p>
            <Link to="/contact" style={styles.btnRed}>Enroll Now!</Link>
          </div>

          <div style={{ flexShrink: 0 }}>
            <img 
              src="src/img/RCE logo.png" 
              alt="RCE Medallion" 
              style={{ 
                width: '500px', 
                height: '500px', 
                objectFit: 'contain',
                filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.25))' 
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
              style={{ 
                width: '450px', 
                height: '450px', 
                objectFit: 'contain' 
              }}
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
            <Link to="/about" style={{ ...styles.btnRed, backgroundColor: GRC_RED, boxShadow: 'none' }}>Learn More</Link>
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
            {/* Contact Details & Follow Us */}
            <div style={{ flex: 1, minWidth: '240px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
               <div>
                  <ContactInfo icon="📍" text="GRC Building, Caloocan, Philippines" />
                  <ContactInfo icon="📞" text="0999-999-9999" />
                  <ContactInfo icon="✉️" text="rceassistextension0104@gmail.com" />
               </div>

               {/* FOLLOW US NAVIGATION */}
               <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '24px' }}>
                  <p style={{ color: 'white', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.1em' }}>Follow Us</p>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    {/* Replace '#' with your actual social media links */}
                    <a href="#" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="FB" style={styles.socialIcon} /></a>
                    <a href="#" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="IG" style={styles.socialIcon} /></a>
                    <a href="#" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" style={styles.socialIcon} /></a>
                    <a href="#" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="IN" style={styles.socialIcon} /></a>
                  </div>
               </div>
            </div>

            <div style={{ flex: 1.3, minWidth: '280px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input style={styles.inputField} placeholder="Name" />
                <input style={styles.inputField} placeholder="Year & Sec" />
                <input style={styles.inputField} placeholder="Student No" />
                <textarea style={{ ...styles.inputField, resize: 'none' }} placeholder="Message" rows={4} />
                <button style={{ ...styles.btnRed, border: 'none', cursor: 'pointer', backgroundColor: '#6B0000', width: '100%' }}>Send Message</button>
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