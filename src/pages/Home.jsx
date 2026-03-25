import { Link } from 'react-router-dom'
import logo from '../img/logo.png' // ✅ your image

const GRC_RED = '#C8102E'

export default function Home() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* ================= HERO SECTION ================= */}
      <section style={heroSection}>
        
        {/* Background Noise */}
        <div style={heroBackground} />

        <div style={heroContainer}>

          {/* LEFT: TEXT */}
          <div style={heroText}>
            <h1 style={heroTitle}>
              Research and<br />Community<br />Extension
            </h1>

            <p style={heroParagraph}>
              Leaders in transformative research and grassroots extension.
              Building knowledge. Empowering communities. Changing lives.
            </p>

            <Link to="/contact" style={heroButton}>
              Enroll Now!
            </Link>
          </div>

          {/* RIGHT: LOGO IMAGE */}
          <div>
            <img src="src/img/RCE logo.png" alt="RCE Logo" style={heroImage} />
          </div>

        </div>
      </section>

      {/* ================= INFORMATION ================= */}
      <section style={infoSection}>
        <div style={container}>
          
          <h2 style={sectionTitle}>Information</h2>

          <div style={infoGrid}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={infoCard}>
                <span style={infoText}>Card {i}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}

/* ================= STYLES ================= */

const heroSection = {
  backgroundColor: GRC_RED,
  minHeight: '420px',
  position: 'relative',
  overflow: 'hidden'
}

const heroBackground = {
  position: 'absolute',
  inset: 0,
  opacity: 0.06,
  pointerEvents: 'none',
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
  backgroundSize: '200px 200px'
}

const heroContainer = {
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '120px 32px 72px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '40px'
}

const heroText = {
  flex: 1,
  minWidth: '200px'
}

const heroTitle = {
  color: 'white',
  fontSize: 'clamp(32px, 5vw, 54px)',
  fontWeight: 900,
  textTransform: 'uppercase',
  lineHeight: 1.1,
  marginBottom: '20px'
}

const heroParagraph = {
  color: 'rgba(255,255,255,0.85)',
  fontSize: '14px',
  lineHeight: 1.7,
  marginBottom: '30px'
}

const heroButton = {
  display: 'inline-block',
  backgroundColor: '#8B0000',
  color: 'white',
  padding: '12px 28px',
  fontWeight: 700,
  textDecoration: 'none',
  borderRadius: '4px'
}

const heroImage = {
  width: '450px',
  height: '450px',
  objectFit: 'contain'
}

const infoSection = {
  backgroundColor: 'white',
  padding: '60px 30px'
}

const container = {
  maxWidth: '1100px',
  margin: '0 auto'
}

const sectionTitle = {
  textAlign: 'center',
  fontSize: '26px',
  fontWeight: 900,
  marginBottom: '40px'
}

const infoGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '20px'
}

const infoCard = {
  backgroundColor: '#FDE8EC',
  height: '180px',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const infoText = {
  color: '#C8102E',
  fontWeight: 600
}