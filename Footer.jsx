import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="font-bold text-lg mb-2">Global Reciprocal College</p>
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} GRC. All rights reserved.</p>
        </div>
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-white/70">
          <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
          <li><Link to="/achievements" className="hover:text-white transition-colors">Achievements</Link></li>
          <li><Link to="/alumni" className="hover:text-white transition-colors">Alumni</Link></li>
          <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
        </ul>
      </div>
    </footer>
  )
}
