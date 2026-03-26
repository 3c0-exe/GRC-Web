import { useState } from 'react'

// import grcBuilding from '../assets/grc-building.jpg'

const GRC_RED = '#C8102E'
const DARK_RED = '#8B0000'

const inputStyle = {
  width: '100%',
  padding: '14px 18px',
  border: '1px solid rgba(255,255,255,0.25)',
  borderRadius: '6px',
  fontSize: '14px',
  backgroundColor: 'rgba(255,255,255,0.12)',
  color: 'white',
  outline: 'none',
  fontFamily: "'Poppins', sans-serif",
}

const placeholderColor = `
  input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.55); }
  input:focus, textarea:focus { border-color: rgba(255,255,255,0.6); background-color: rgba(255,255,255,0.18); }
`

function Field({ placeholder, value, onChange, name }) {
  return (
    <input
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={inputStyle}
    />
  )
}

export default function Alumni() {
  const [form, setForm] = useState({
    studentNo: '', name: '', address: '', facebookName: '',
    email: '', courseMajor: '', yearGraduated: '', contactNo: '',
    jobTitle: '', companyName: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleClear = () => {
    setForm({
      studentNo: '', name: '', address: '', facebookName: '',
      email: '', courseMajor: '', yearGraduated: '', contactNo: '',
      jobTitle: '', companyName: '',
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // wire up to your backend / emailjs / formspree here
    alert('Form submitted!')
  }

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <style>{placeholderColor}</style>

      {/* ── HERO — building photo bg ── */}
      <section style={{ position: 'relative', minHeight: '500px', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        {/* Background image — replace div with <img> or use as CSS bg */}
        {/* Replace with: style={{ backgroundImage: `url(${grcBuilding})`, backgroundSize: 'cover', backgroundPosition: 'center' }} */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundColor: '#555',
          backgroundImage: 'linear-gradient(135deg, #888 0%, #444 100%)',
          // backgroundImage: `url(${grcBuilding})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />

        {/* Dark + red overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(139,0,0,0.55) 60%, rgba(200,16,46,0.3) 100%)' }} />

        {/* Red bottom border accent */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '6px', backgroundColor: GRC_RED }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto', padding: '140px 32px 60px', width: '100%' }}>
          <h1 style={{ color: 'white', fontSize: 'clamp(32px, 5.5vw, 60px)', fontWeight: 900, lineHeight: 1.08, marginBottom: '24px', maxWidth: '640px' }}>
            Securing Our Legacy,<br />
            Reciprocating Your<br />
            Success.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'clamp(13px, 1.5vw, 15px)', fontWeight: 700, lineHeight: 1.75, maxWidth: '480px' }}>
            From guiding your first steps as a student to supporting your journey as a leader we provide a full range of professional connections and mentorship tailored to your growth.
          </p>
        </div>
      </section>

      {/* ── ALUMNI FORM ── */}
      <section style={{ background: `linear-gradient(170deg, #9b0020 0%, #6b0010 100%)`, padding: '56px 32px 72px', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle noise */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none',
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '200px 200px',
        }} />

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '32px', letterSpacing: '0.02em' }}>
            Alumni Form
          </h2>

          <div style={{ border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px', padding: '40px', backgroundColor: 'rgba(0,0,0,0.15)' }}>
            <h3 style={{ color: 'white', fontWeight: 800, fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.12em', textAlign: 'center', marginBottom: '28px' }}>
              Information Sheet
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Student No */}
              <Field placeholder="Student No." name="studentNo" value={form.studentNo} onChange={handleChange} />

              {/* Name */}
              <Field placeholder="Name:" name="name" value={form.name} onChange={handleChange} />

              {/* Address */}
              <Field placeholder="Address:" name="address" value={form.address} onChange={handleChange} />

              {/* Facebook + Email */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <Field placeholder="Facebook Name:" name="facebookName" value={form.facebookName} onChange={handleChange} />
                <Field placeholder="Email:" name="email" value={form.email} onChange={handleChange} />
              </div>

              {/* Course + Year + Contact */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                <Field placeholder="Course & Major:" name="courseMajor" value={form.courseMajor} onChange={handleChange} />
                <Field placeholder="Year Graduated:" name="yearGraduated" value={form.yearGraduated} onChange={handleChange} />
                <Field placeholder="Contact No." name="contactNo" value={form.contactNo} onChange={handleChange} />
              </div>

              {/* Job Title + Send */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '12px', alignItems: 'center' }}>
                <Field placeholder="Current Job Title:" name="jobTitle" value={form.jobTitle} onChange={handleChange} />
                <button type="submit" style={{
                  backgroundColor: GRC_RED, color: 'white', border: 'none',
                  padding: '14px 36px', fontWeight: 700, fontSize: '14px',
                  borderRadius: '6px', cursor: 'pointer', whiteSpace: 'nowrap',
                  fontFamily: "'Poppins', sans-serif", letterSpacing: '0.05em',
                }}>
                  Send
                </button>
              </div>

              {/* Company + Clear */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '12px', alignItems: 'center' }}>
                <Field placeholder="Company Name:" name="companyName" value={form.companyName} onChange={handleChange} />
                <button type="button" onClick={handleClear} style={{
                  backgroundColor: GRC_RED, color: 'white', border: 'none',
                  padding: '14px 36px', fontWeight: 700, fontSize: '14px',
                  borderRadius: '6px', cursor: 'pointer', whiteSpace: 'nowrap',
                  fontFamily: "'Poppins', sans-serif", letterSpacing: '0.05em',
                }}>
                  Clear Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  )
}