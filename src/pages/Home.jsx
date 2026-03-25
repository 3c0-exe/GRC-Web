import { Link } from 'react-router-dom';

// ── 1. ASSET IMPORTS ──
// import rceMedallion from '../assets/rce-medallion.png';
// import grcIcon from '../assets/grc-logo.png';

const GRC_RED = '#C8102E';

// ── 2. EXTRACTED STYLES (Clean & Easy to Identify) ──
const styles = {
  container: { fontFamily: "'Poppins', sans-serif" },
  sectionMax: { maxWidth: '1200px', margin: '0 auto' }, // Increased maxWidth slightly for better balance with larger images
  heroSection: { 
    backgroundColor: GRC_RED, 
    minHeight: '600px', // Increased minHeight to accommodate larger medallion
    position: 'relative', 
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center'
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
          width: '100%',
          padding: '80px 40px', // Adjusted padding
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          gap: '80px', // Increased gap
          flexWrap: 'wrap' 
        }}>
          {/* Left Text Content */}
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h1 style={styles.heroText}>
              Research and<br />Community<br />Extension
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: 1.75, maxWidth: '480px', marginBottom: '36px' }}>
              Leaders in transformative research and grassroots extension. Building knowledge. Empowering communities. Changing lives.
            </p>
            <Link to="/contact" style={styles.btnRed}>Enroll Now!</Link>
          </div>

          {/* Right — LARGE RCE Medallion Image */}
          <div style={{ flexShrink: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img 
              src="path-to-your-rce-medallion.png" // Replace with {rceMedallion}
              alt="RCE Medallion" 
              style={{ 
                width: '500px', // Significantly increased size
                height: '500px', // Significantly increased size
                objectFit: 'contain',
                filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.3))' // Stronger shadow for larger element
              }} 
              onError={(e) => { e.target.src = "src/img/RCE logo.png" }}
            />
          </div>
        </div>
      </section>

      {/* ── INFORMATION SECTION ── */}
      <section style={{ backgroundColor: 'white', padding: '100px 32px' }}>
        <div style={styles.sectionMax}>
          <h2 style={{ textAlign: 'center', fontWeight: 900, fontSize: '32px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#111', marginBottom: '60px' }}>Information</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ backgroundColor: '#FDE8EC', borderRadius: '12px', height: '220px', border: '1px solid rgba(200,16,46,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                <span style={{ color: 'rgba(200,16,46,0.25)', fontSize: '14px', fontWeight: 600, textAlign: 'center' }}>Detailed<br/>Information<br/>Card {i}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '60px', height: '2px', background: `linear-gradient(to right, ${GRC_RED}, transparent)`, opacity: 0.3 }} />
        </div>
      </section>

      {/* ── ABOUT US SECTION ── */}
      <section style={{ backgroundColor: 'white', padding: '10px 35px 100px', marginLeft: '100px' }}>
        <div style={{ ...styles.sectionMax, display: 'flex', alignItems: 'center', gap: '200px', flexWrap: 'wrap' }}>
          
          {/* LARGE GRC Icon Image */}
          <div style={{ flexShrink: 0, width: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img 
              src={"grcIcon"} // Replace with {grcIcon}
              alt="GRC Icon"
              style={{ 
                width: '450px', // Increased size
                maxWidth: '450%', // Ensure it doesn't overflow on smaller screens
                height: '450px', // Increased size
                objectFit: 'contain' 
              }}
              onError={(e) => { e.target.style.opacity = "0.2"; e.target.src="src/img/grc logo.png" }}
            />
          </div>

          <div style={{ flex: 1, minWidth: '20px' }}>
            <p style={{ color: GRC_RED, fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '16px' }}>About Us</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: '#111', lineHeight: 1.15, marginBottom: '25px' }}>
              Driving <span style={{ color: GRC_RED }}>Knowledge,</span><br />
              Serving <span style={{ color: GRC_RED }}>Communities.</span>
            </h2>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: 1.8, maxWidth: '600px', marginBottom: '40px' }}>
              Leveraging academic expertise to provide real-world, innovative solutions that directly benefit our local and global partners. We translate theory into practice for sustainable impact.
            </p>

            {/* Stats Grid */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0', marginBottom: '48px', flexWrap: 'wrap' }}>
              {[
                { val: '150+', label: 'Community Partners' }, 
                { val: '200+', label: 'Outreach Projects' }, 
                { val: '25+', label: 'Years of Impact' }
              ].map((stat, i) => (
                <div key={stat.label} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ paddingRight: '30px' }}>
                    <p style={{ fontSize: '36px', fontWeight: 900, color: '#111', lineHeight: 1 }}>{stat.val}</p>
                    <p style={{ fontSize: '12px', color: '#999', marginTop: '6px' }}>{stat.label}</p>
                  </div>
                  {i < 2 && <div style={{ width: '1px', height: '50px', backgroundColor: '#ddd', marginRight: '30px' }} />}
                </div>
              ))}
            </div>
            <Link to="/about" style={{ ...styles.btnRed, backgroundColor: GRC_RED, boxShadow: 'none' }}>Learn More</Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM SECTION ── */}
      <section style={{ background: `linear-gradient(135deg, #e0102e 0%, #9b0020 100%)`, padding: '100px 32px', position: 'relative', overflow: 'hidden' }}>
        <div style={styles.noiseOverlay} />
        <div style={{ ...styles.sectionMax, position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ color: 'white', fontSize: 'clamp(28px, 4.5vw, 52px)', fontWeight: 900, lineHeight: 1.2, marginBottom: '16px' }}>
              Let's Build the Future, <span style={{ color: '#FFCCD5' }}>Together.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>Reach out to explore partnerships and join our mission.</p>
          </div>

          <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', alignItems: 'center' }}>
            {/* Contact Details */}
            <div style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
               <ContactInfo icon="📍" text="GRC Building, Caloocan, Philippines" />
               <ContactInfo icon="📞" text="0999-999-9999" />
               <ContactInfo icon="✉️" text="rceassistextension0104@gmail.com" />
            </div>

            {/* Concern Form */}
            <div style={{ flex: 1.5, minWidth: '300px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', backgroundColor: 'rgba(255,255,255,0.1)', padding: '40px', borderRadius: '8px' }}>
                <input style={styles.inputField} placeholder="Full Name" />
                <div style={{ display: 'flex', gap: '12px' }}>
                    <input style={styles.inputField} placeholder="Year & Sec" />
                    <input style={styles.inputField} placeholder="Student No" />
                </div>
                <textarea style={{ ...styles.inputField, resize: 'none' }} placeholder="Your Message or Concern" rows={5} />
                <button style={{ ...styles.btnRed, border: 'none', cursor: 'pointer', backgroundColor: '#6B0000', width: '100%', fontSize: '14px', marginTop: '10px' }}>Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP FOOTER ── */}
      <div style={{ width: '100%', height: '400px' }}>
        <iframe title="GRC Location" src="about:blank" style={{ width: '100%', height: '100%', border: 'none' }} loading="lazy" />
      </div>

    </div>
  );
}

// ── HELPER COMPONENT (Cleaner code structure) ──
function ContactInfo({ icon, text }) {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.05)', padding: '15px 20px', borderRadius: '4px' }}>
      <span style={{ fontSize: '24px' }}>{icon}</span>
      <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>{text}</p>
    </div>
  );
}