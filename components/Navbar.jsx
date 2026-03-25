import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

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
  const [visible, setVisible] = useState(true)
  const [atTop, setAtTop] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setAtTop(currentY < 10)
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
      <nav className="hidden lg:block absolute top-0 w-full z-50 bg-transparent">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="text-white font-bold text-lg">
            {/* Replace with GRC logo */}
            GRC
          </Link>
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 relative pb-1 ${
                    isActive(link.path) ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-white" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* MOBILE */}
      <nav
        className="lg:hidden fixed top-0 w-full z-50 transition-transform duration-300"
        style={{
          transform: visible ? 'translateY(0)' : 'translateY(-100%)',
          backgroundColor: atTop && !menuOpen ? 'transparent' : 'rgba(0,0,0,0.95)',
          backdropFilter: atTop && !menuOpen ? 'none' : 'blur(8px)',
        }}
      >
        <div className="px-6 py-5 flex items-center justify-between">
          <Link to="/" className="text-white font-bold text-lg">GRC</Link>
          <button
            className="text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {menuOpen && (
          <div className="bg-black/95 px-6 pb-6">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`text-sm font-medium block py-2 border-b border-white/10 transition-colors ${
                      isActive(link.path) ? 'text-white' : 'text-white/70 hover:text-white'
                    }`}
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
