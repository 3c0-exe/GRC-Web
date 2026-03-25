import { Link } from 'react-router-dom'

const GRC_RED = '#C8102E'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#111', color: 'white', padding: '56px 32px 32px', fontFamily: "'Poppins', sans-serif" }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', flexWrap: 'wrap' }}>

          {/* Col 1 — Follow Us */}
          <div>
            <p style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'white', marginBottom: '20px' }}>Follow Us</p>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', flexWrap: 'wrap' }}>
              {[
                { label: 'X', svg: <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.736l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                { label: 'IG', svg: <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg> },
                { label: 'YT', svg: <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg> },
                { label: 'LI', svg: <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
              ].map((s) => (
                <a key={s.label} href="#" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', flexShrink: 0 }}>
                  {s.svg}
                </a>
              ))}
            </div>
            <Link to="/contact" style={{
              display: 'inline-block', backgroundColor: GRC_RED, color: 'white',
              fontSize: '12px', fontWeight: 700, padding: '10px 20px',
              textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em',
              borderRadius: '4px',
            }}>
              Contact Us
            </Link>
          </div>

          {/* Col 2 — Office Hours */}
          <div>
            <p style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'white', marginBottom: '20px' }}>Office Hours</p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', lineHeight: 2 }}>
              Monday to Saturday<br />
              8:00 AM – 5:00PM<br /><br />
              Sunday<br />
              Closed
            </p>
          </div>

          {/* Col 3 — Company */}
          <div>
            <p style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'white', marginBottom: '20px' }}>Company</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Achievements', path: '/achievements' },
                { label: 'Projects',     path: '/achievements' },
                { label: 'About Us',     path: '/about' },
                { label: 'Contact Us',   path: '/contact' },
              ].map((link) => (
                <Link key={link.label} to={link.path} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s' }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <p style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'white', marginBottom: '20px' }}>Contact</p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', lineHeight: 1.8 }}>
              GRC Building, 454, 1400 Rizal Ave Ext,<br />
              Grace Park East, Caloocan,<br />
              Metro Manila, Philippines<br /><br />
              0999-999-9999<br />
              (63+)900-000-0000<br /><br />
              <a href="mailto:rceassistextension0104@gmail.com" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'underline', wordBreak: 'break-all' }}>
                rceassistextension0104@gmail.com
              </a>
            </p>
          </div>

        </div>

        <div style={{ marginTop: '48px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px' }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>
            © {new Date().getFullYear()} Global Reciprocal Colleges. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
