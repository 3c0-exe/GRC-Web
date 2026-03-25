import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

// import grcLogo from '../assets/grc-logo.png'

const GRC_RED = '#C8102E'

const navLinks = [
  { label: 'Home',         path: '/' },
  { label: 'Achievements', path: '/achievements' },
  { label: 'Alumni',       path: '/alumni' },
  { label: 'About Us',     path: '/about' },
  { label: 'Contact Us',   path: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 10)
      setVisible(currentY < lastScrollY.current || currentY < 10)
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <>
      {/* DESKTOP */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: 'white',
        boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.1)' : '0 1px 4px rgba(0,0,0,0.06)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        fontFamily: "'Poppins', sans-serif",
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Replace with: <img src={grcLogo} alt="GRC Logo" style={{ height: '40px', objectFit: 'contain' }} /> */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: GRC_RED, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'white', fontSize: '11px', fontWeight: 800 }}>GRC</span>
              </div>
              <div style={{ lineHeight: 1.2 }}>
                <p style={{ color: GRC_RED, fontSize: '11px', fontWeight: 800, margin: 0 }}>Global</p>
                <p style={{ color: GRC_RED, fontSize: '11px', fontWeight: 800, margin: 0 }}>Reciprocal</p>
                <p style={{ color: GRC_RED, fontSize: '11px', fontWeight: 800, margin: 0 }}>Colleges</p>
              </div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul style={{ display: 'flex', alignItems: 'center', gap: '4px', listStyle: 'none', margin: 0, padding: 0 }} className="hidden lg:flex">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  style={{
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontWeight: 600,
                    padding: '6px 14px',
                    borderRadius: '999px',
                    display: 'block',
                    transition: 'all 0.2s',
                    backgroundColor: isActive(link.path) ? GRC_RED : 'transparent',
                    color: isActive(link.path) ? 'white' : '#444',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: '#333' }}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ backgroundColor: 'white', borderTop: '1px solid #f0f0f0', padding: '16px 32px 24px' }} className="lg:hidden">
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      textDecoration: 'none', fontSize: '14px', fontWeight: 600,
                      padding: '10px 14px', borderRadius: '8px', display: 'block',
                      backgroundColor: isActive(link.path) ? GRC_RED : 'transparent',
                      color: isActive(link.path) ? 'white' : '#444',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  )
}
