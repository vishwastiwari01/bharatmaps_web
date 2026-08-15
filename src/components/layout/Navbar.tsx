'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Safety', href: '#sos' },
  { label: 'Community', href: '#community' },
  { label: 'Roadmap', href: '#roadmap' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Tricolor top bar */}
      <div className="tricolor-bar fixed top-0 left-0 right-0 z-50" />

      <nav
        className={`fixed top-[3px] left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#05080f]/95 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 flex-shrink-0">
                <svg viewBox="0 0 32 32" className="w-full h-full">
                  <circle cx="16" cy="16" r="14" fill="none" stroke="#FF9933" strokeWidth="1.5" />
                  {/* India silhouette simplified */}
                  <path d="M16 4 C20 5, 24 8, 25 12 C27 15, 26 19, 24 22 C22 25, 19 27, 16 28 C13 27, 10 25, 8 22 C6 19, 5 15, 7 12 C8 8, 12 5, 16 4Z"
                    fill="rgba(255,153,51,0.15)" stroke="#FF9933" strokeWidth="1" />
                  <circle cx="16" cy="16" r="2" fill="#138808" />
                  {/* BLE rings */}
                  <circle cx="16" cy="16" r="5" fill="none" stroke="#FF9933" strokeWidth="0.5" opacity="0.5" />
                  <circle cx="16" cy="16" r="8" fill="none" stroke="#FF9933" strokeWidth="0.3" opacity="0.3" />
                </svg>
              </div>
              <div>
                <span className="text-white font-bold text-base tracking-wide group-hover:text-[#FF9933] transition-colors">
                  BHARAT MAPS
                </span>
                <div className="text-[10px] text-[#FF9933] font-mono tracking-widest -mt-0.5 opacity-70">
                  OFFLINE FIRST
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#beta"
                className="btn-saffron px-5 py-2 rounded-lg text-sm"
              >
                Join Beta
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 space-y-1.5">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="bg-[#05080f]/98 backdrop-blur-xl border-t border-white/5 px-4 pb-6 pt-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-slate-400 hover:text-white border-b border-white/5 text-sm"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#beta"
                onClick={() => setMenuOpen(false)}
                className="btn-saffron block text-center px-5 py-3 rounded-lg text-sm"
              >
                Join Beta
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
