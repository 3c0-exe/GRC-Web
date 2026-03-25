import { Link } from 'react-router-dom'

// ── Swap these with your actual asset imports ──
// import grcLogo from '../assets/grc-logo.png'
// import rceMedallion from '../assets/rce-medallion.png'
// import grcIcon from '../assets/grc-icon.png'

const GRC_RED = '#C8102E'

export default function Home() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* ── HERO ── */}
      <section style={{ backgroundColor: GRC_RED, minHeight: '420px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.06, pointerEvents: 'none',
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '200px 200px',
        }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '120px 32px 72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
          {/* Left text */}
          <div style={{ flex: 1, minWidth: '280px' }}>
            <h1 style={{ color: 'white', fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.08, marginBottom: '20px', letterSpacing: '-0.01em' }}>
              Research and<br />Community<br />Extension
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', lineHeight: 1.75, maxWidth: '360px', marginBottom: '36px' }}>
              Leaders in transformative research and grassroots extension. Building knowledge. Empowering communities. Changing lives.
            </p>
            <Link to="/contact" style={{
              display: 'inline-block', backgroundColor: '#8B0000', color: 'white',
              fontSize: '13px', fontWeight: 700, padding: '14px 32px',
              textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em',
              borderRadius: '4px', boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
            }}>
              Enroll Now!
            </Link>
          </div>

          {/* Right — RCE medallion */}
          <div style={{ flexShrink: 0 }}>
            {/* Replace div with: <img src={rceMedallion} alt="RCE Medallion" style={{ width: '280px', height: '280px', objectFit: 'contain' }} /> */}
            <div style={{ width: '260px', height: '260px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.12)', border: '3px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', fontWeight: 600, textAlign: 'center' }}>RCE Medallion<br />Image Here</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── INFORMATION ── */}
      <section style={{ backgroundColor: 'white', padding: '72px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 900, fontSize: '26px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#111', marginBottom: '40px' }}>
            Information
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{
                backgroundColor: '#FDE8EC',
                borderRadius: '12px',
                height: '190px',
                border: '1px solid rgba(200,16,46,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ color: 'rgba(200,16,46,0.25)', fontSize: '13px', fontWeight: 600 }}>Card {i}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '48px', height: '2px', background: `linear-gradient(to right, ${GRC_RED}, transparent)`, opacity: 0.3 }} />
        </div>
      </section>

      {/* ── ABOUT US ── */}
      <section style={{ backgroundColor: 'white', padding: '64px 32px 80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '64px', flexWrap: 'wrap' }}>
          {/* Left — GRC icon */}
          <div style={{ flexShrink: 0, width: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Replace with: <img src={grcIcon} alt="GRC" style={{ width: '200px', objectFit: 'contain' }} /> */}
            <div style={{ width: '200px', height: '200px', borderRadius: '50%', border: `5px solid ${GRC_RED}`, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.25 }}>
              <span style={{ color: GRC_RED, fontSize: '13px', fontWeight: 600, textAlign: 'center' }}>GRC<br />Icon Here</span>
            </div>
          </div>

          {/* Right — text */}
          <div style={{ flex: 1, minWidth: '280px' }}>
            <p style={{ color: GRC_RED, fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '12px' }}>
              About Us
            </p>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 900, color: '#111', lineHeight: 1.15, marginBottom: '20px' }}>
              Driving <span style={{ color: GRC_RED }}>Knowledge,</span><br />
              Serving <span style={{ color: GRC_RED }}>Communities.</span>
            </h2>
            <p style={{ color: '#555', fontSize: '14px', lineHeight: 1.8, maxWidth: '480px', marginBottom: '32px' }}>
              Leveraging academic expertise to provide real-world, innovative solutions that directly benefit our local and global partners. We translate theory into practice for sustainable impact.
            </p>

            {/* Stats */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0', marginBottom: '36px' }}>
              {[
                { val: '150+', label: 'Community Partners' },
                { val: '200+', label: 'Outreach Projects' },
                { val: '25+',  label: 'Years of Impact' },
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

            <Link to="/about" style={{
              display: 'inline-block', backgroundColor: GRC_RED, color: 'white',
              fontSize: '13px', fontWeight: 700, padding: '13px 30px',
              textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em',
              borderRadius: '4px',
            }}>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA + CONTACT FORM ── */}
      <section style={{ background: `linear-gradient(135deg, #e0102e 0%, #9b0020 100%)`, padding: '80px 32px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none',
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '200px 200px',
        }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Heading */}
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ color: 'white', fontSize: 'clamp(26px, 4vw, 46px)', fontWeight: 900, lineHeight: 1.2, marginBottom: '14px' }}>
              Let's Build the Future, <span style={{ color: '#FFCCD5' }}>Together.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', maxWidth: '460px', margin: '0 auto', lineHeight: 1.75 }}>
              Reach out to our RCE team to explore research partnerships and join our mission of empowering local communities.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '56px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Left — contact details */}
            <div style={{ flex: 1, minWidth: '240px', display: 'flex', flexDirection: 'column', gap: '22px', paddingTop: '8px' }}>
              {[
                {
                  icon: (
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
                    </svg>
                  ),
                  text: 'GRC Building, 454, 1400 Rizal Ave Ext, Grace Park East, Caloocan, Metro Manila, Philippines',
                },
                {
                  icon: (
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0112 18.9a19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  ),
                  text: '0999-999-9999\n(63+)900-000-0000',
                },
                {
                  icon: (
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                  text: 'rceassistextension0104@gmail.com',
                },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ marginTop: '2px', flexShrink: 0 }}>{item.icon}</div>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{item.text}</p>
                </div>
              ))}
            </div>

            {/* Right — concern form */}
            <div style={{ flex: 1.3, minWidth: '280px' }}>
              <p style={{ color: 'white', fontWeight: 700, fontSize: '16px', marginBottom: '16px' }}>Concern Form:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Name:', 'Year & Sec:', 'Student No:'].map((label) => (
                  <input
                    key={label}
                    placeholder={label}
                    style={{
                      width: '100%', padding: '12px 16px',
                      border: 'none', borderRadius: '4px',
                      fontSize: '14px', backgroundColor: 'rgba(255,255,255,0.96)',
                      outline: 'none', color: '#333',
                    }}
                  />
                ))}
                <textarea
                  placeholder="Message"
                  rows={4}
                  style={{
                    width: '100%', padding: '12px 16px',
                    border: 'none', borderRadius: '4px',
                    fontSize: '14px', backgroundColor: 'rgba(255,255,255,0.96)',
                    outline: 'none', resize: 'none', color: '#333',
                  }}
                />
                <button style={{
                  backgroundColor: '#6B0000', color: 'white', border: 'none',
                  padding: '14px', fontWeight: 700, fontSize: '13px',
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                  borderRadius: '4px', cursor: 'pointer', marginTop: '4px',
                }}>
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <div style={{ width: '100%', height: '340px' }}>
        <iframe
          title="GRC Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.5!2d120.9813!3d14.6507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b1234567890a%3A0x1234567890abcdef!2sGlobal%20Reciprocal%20Colleges!5e0!3m2!1sen!2sph!4v1234567890"
          style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    </div>
  )
}
