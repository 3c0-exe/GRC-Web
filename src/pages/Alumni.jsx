import { useState } from 'react';

// ── 1. CONFIGURATION & THEME ──
const GRC_RED = '#C8102E';
const NOISE_SVG = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

// INSERT YOUR PHOTO PATH HERE
const HERO_BG_PHOTO = "src/img/schoool_Image_aeq4ijaeq4ijaeq4.png"; 

// ── 2. MODULAR STYLES ──
const styles = {
  input: {
    width: '200%',
    padding: '14px 18px',
    border: '1px solid rgba(255,255,255,0.25)',
    borderRadius: '6px',
    fontSize: '14px',
    backgroundColor: 'rgba(255,255,255,0.12)',
    color: 'white',
    outline: 'none',
    fontFamily: "'Poppins', sans-serif",
    transition: 'all 0.2s ease',
  },
  button: {
    backgroundColor: GRC_RED,
    color: 'white',
    border: 'none',
    padding: '14px 36px',
    fontWeight: 700,
    fontSize: '14px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: '0.05em',
    transition: 'opacity 0.2s ease',
  },
  formContainer: {
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '12px',
    padding: '40px',
    backgroundColor: 'rgba(0,0,0,0.15)',
    backdropFilter: 'blur(5px)',
  },
  gridTwo: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' },
  gridThree: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' },
  
  // New Background Photo Styles
  heroBg: {
    position: 'absolute', 
    inset: 0,
    backgroundImage: `url(${HERO_BG_PHOTO})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: 0
  },
  // The dark/red tint overlay to make text pop
  heroOverlay: {
    position: 'absolute', 
    inset: 0, 
    background: 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(139,0,0,0.4) 60%, rgba(200,16,46,0.2) 100%)',
    zIndex: 1
  }
};

function Field({ placeholder, value, onChange, name }) {
  return (
    <input
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={styles.input}
      autoComplete="off"
    />
  );
}

export default function Alumni() {
  const [form, setForm] = useState({
    studentNo: '', name: '', address: '', facebookName: '',
    email: '', courseMajor: '', yearGraduated: '', contactNo: '',
    jobTitle: '', companyName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear the form?")) {
      setForm({
        studentNo: '', name: '', address: '', facebookName: '',
        email: '', courseMajor: '', yearGraduated: '', contactNo: '',
        jobTitle: '', companyName: '',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <style>{`
        input::placeholder { color: rgba(255,255,255,0.55); }
        input:focus { border-color: rgba(255,255,255,0.6); background-color: rgba(255,255,255,0.18); }
        button:hover { opacity: 0.9; }
      `}</style>

      {/* ── HERO SECTION ── */}
      <section style={{ position: 'relative', minHeight: '550px', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        
        {/* The Photo Background */}
        <div style={styles.heroBg} />
        
        {/* The Color Overlay */}
        <div style={styles.heroOverlay} />

        {/* Red bottom accent line */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '6px', backgroundColor: GRC_RED, zIndex: 2 }} />

        <div style={{ position: 'relative', zIndex: 3, maxWidth: '1100px', margin: '0 auto', padding: '100px 32px 80px', width: '100%' }}>
          <h1 style={{ color: 'white', fontSize: 'clamp(32px, 5.5vw, 60px)', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px' }}>
            Securing Our Legacy,<br />Reciprocating Your Success.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '16px', fontWeight: 500, lineHeight: 1.8, maxWidth: '550px', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
            From your first steps as a student to your journey as a leader, we provide professional connections tailored to your growth.
          </p>
        </div>
      </section>

      {/* ── ALUMNI FORM SECTION ── */}
      <section style={{ background: `linear-gradient(170deg, #9b0020 0%, #6b0010 100%)`, padding: '80px 32px', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none', backgroundImage: NOISE_SVG }} />

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: 'white', fontSize: '32px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '40px', textAlign: 'center' }}>
            Alumni Information Sheet
          </h2>

          <div style={styles.formContainer}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={styles.gridTwo}>
                <Field placeholder="Student Number" name="studentNo" value={form.studentNo} onChange={handleChange} />
                <Field placeholder="Full Name" name="name" value={form.name} onChange={handleChange} />
              </div>

              <Field placeholder="Permanent Address" name="address" value={form.address} onChange={handleChange} />

              <div style={styles.gridTwo}>
                <Field placeholder="Facebook Name" name="facebookName" value={form.facebookName} onChange={handleChange} />
                <Field placeholder="Email Address" name="email" value={form.email} onChange={handleChange} />
              </div>

              <div style={styles.gridThree}>
                <Field placeholder="Course & Major" name="courseMajor" value={form.courseMajor} onChange={handleChange} />
                <Field placeholder="Year Graduated" name="yearGraduated" value={form.yearGraduated} onChange={handleChange} />
                <Field placeholder="Contact Number" name="contactNo" value={form.contactNo} onChange={handleChange} />
              </div>

              <div style={styles.gridTwo}>
                <Field placeholder="Current Job Title" name="jobTitle" value={form.jobTitle} onChange={handleChange} />
                <Field placeholder="Company Name" name="companyName" value={form.companyName} onChange={handleChange} />
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '20px' }}>
                <button type="button" onClick={handleClear} style={{ ...styles.button, backgroundColor: 'transparent', border: '1px solid white' }}>
                  Clear Form
                </button>
                <button type="submit" style={styles.button}>
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}