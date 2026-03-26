// import grcIcon from '../assets/grc-icon.png'

const GRC_RED = '#C8102E'

const NOISE = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

export default function Achievements() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* ── HERO ── */}
      <section style={{ backgroundColor: GRC_RED, minHeight: '380px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06, pointerEvents: 'none', backgroundImage: NOISE, backgroundSize: '200px 200px' }} />
        {/* Diagonal dark overlay on left */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.1) 50%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '120px 32px 72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
          {/* Left */}
          <div style={{ flex: 1, minWidth: '280px' }}>
            <h1 style={{ color: 'white', fontSize: 'clamp(28px, 4.5vw, 50px)', fontWeight: 900, lineHeight: 1.12, marginBottom: '20px' }}>
              Integrity in Learning,<br />Trust in Leadership.
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', lineHeight: 1.8, maxWidth: '380px' }}>
              Four decades of academic milestones and career breakthroughs. From top-tier board passers to industry innovators, we are highly trained professionals shaping the future of global industries.
            </p>
          </div>

          {/* Right — GRC icon */}
          <div style={{ flexShrink: 0 }}>
            {/* Replace with: <img src={grcIcon} alt="GRC" style={{ width: '240px', objectFit: 'contain', filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.4))' }} /> */}
            <div style={{ width: '220px', height: '220px', borderRadius: '50%', border: '4px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.4 }}>
              <span style={{ color: 'white', fontSize: '13px', fontWeight: 600, textAlign: 'center' }}>GRC Icon<br />Here</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section style={{ backgroundColor: 'white', padding: '72px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 900, fontSize: '28px', color: GRC_RED, marginBottom: '40px' }}>
            Projects
          </h2>

          {/* 3-col layout: small | large | small */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr 1fr', gap: '20px', alignItems: 'stretch' }}>
            <div style={{ backgroundColor: '#FDE8EC', borderRadius: '12px', minHeight: '220px', border: '1px solid rgba(200,16,46,0.08)' }} />
            <div style={{ backgroundColor: '#FDE8EC', borderRadius: '12px', minHeight: '280px', border: '1px solid rgba(200,16,46,0.08)' }} />
            <div style={{ backgroundColor: '#FDE8EC', borderRadius: '12px', minHeight: '220px', border: '1px solid rgba(200,16,46,0.08)' }} />
          </div>

          <div style={{ marginTop: '48px', height: '2px', background: `linear-gradient(to right, transparent, ${GRC_RED}, transparent)`, opacity: 0.25 }} />
        </div>
      </section>

      {/* ── INNOVATION & GROWTH ── */}
      <section style={{ backgroundColor: 'white', padding: '16px 32px 72px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(22px, 3vw, 34px)', color: GRC_RED, marginBottom: '12px' }}>
            Innovation &amp; Growth
          </h2>
          <p style={{ color: '#888', fontSize: '13px', marginBottom: '28px', fontStyle: 'italic' }}>
            Future-forward thinking and academic excellence.
          </p>
          <p style={{ color: '#555', fontSize: '14px', lineHeight: 1.85 }}>
            Our journey is defined by a series of milestones that bridge the gap between academic research and industry application. By leveraging cutting-edge expertise, we have pioneered innovative solutions that foster long-term sustainability. From developing responsive digital platforms to leading community-centric initiatives, our work consistently empowers our partners to navigate an ever-changing global landscape with confidence and clarity.
          </p>
        </div>
      </section>

      {/* ── GALLERY GRID ── */}
      <section style={{ backgroundColor: GRC_RED, padding: '40px 32px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none', backgroundImage: NOISE, backgroundSize: '200px 200px' }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* Row 1: 3 cols — left tall, center tall, right tall (center is wider) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '10px', height: '200px' }} />
            <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '10px', height: '200px', gridRow: 'span 1' }} />
            <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '10px', height: '200px' }} />
          </div>

          {/* Row 2: center card is taller / wider */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '10px', height: '200px' }} />
            <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '10px', height: '200px' }} />
            <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '10px', height: '200px' }} />
          </div>

          {/* Row 3 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr 1fr', gap: '16px' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '10px', height: '200px' }} />
            <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '10px', height: '200px' }} />
            <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '10px', height: '200px' }} />
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