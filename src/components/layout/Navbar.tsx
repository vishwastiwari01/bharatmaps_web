'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features',     href: '#features' },
  { label: 'Safety',       href: '#sos' },
  { label: 'Community',    href: '#community' },
  { label: 'Roadmap',      href: '#roadmap' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      {/* Tricolor stripe — always visible */}
      <div className="tricolor-bar fixed top-0 left-0 right-0 z-50" />

      <nav
        className={`fixed top-[4px] left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-black/6'
            : 'bg-white/80 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group select-none">
              {/* Icon */}
              <div className="relative w-9 h-9 flex-shrink-0">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  {/* Outer ring — saffron */}
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#FF9933" strokeWidth="1.8" />
                  {/* India fill */}
                  <path
                    d="M18 5 C21 6,25 9,26 13 C28 16,27 20,25 23 C23 26,20 28,18 29 C16 28,13 26,11 23 C9 20,8 16,10 13 C11 9,15 6,18 5Z"
                    fill="rgba(255,153,51,0.12)" stroke="#FF9933" strokeWidth="1.2"
                  />
                  {/* Centre Chakra dot */}
                  <circle cx="18" cy="18" r="2.5" fill="#138808" />
                  <circle cx="18" cy="18" r="1"   fill="#000066" />
                  {/* BLE rings */}
                  <circle cx="18" cy="18" r="6"  fill="none" stroke="#FF9933" strokeWidth="0.6" opacity="0.4" />
                  <circle cx="18" cy="18" r="10" fill="none" stroke="#FF9933" strokeWidth="0.3" opacity="0.2" />
                </svg>
              </div>

              <div>
                <div className="text-[#0f172a] font-black text-base tracking-widest leading-none group-hover:text-[#FF9933] transition-colors">
                  BHARAT MAPS
                </div>
                <div className="text-[9px] font-mono text-[#FF9933] tracking-[0.2em] mt-0.5 opacity-70 uppercase">
                  Offline First
                </div>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-slate-600 hover:text-[#FF9933] font-medium transition-colors tracking-wide"
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a href="#beta" className="btn-primary px-5 py-2.5 rounded-xl text-sm">
                Join Beta 🇮🇳
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-slate-600 hover:text-[#FF9933] transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-5 space-y-[5px]">
                <span className={`block h-0.5 bg-current transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 border-t border-black/5 ${open ? 'max-h-[400px]' : 'max-h-0'}`}>
          <div className="bg-white px-4 pb-6 pt-3 space-y-0.5">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-slate-600 hover:text-[#FF9933] border-b border-black/5 text-sm font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-4">
              <a href="#beta" onClick={() => setOpen(false)}
                className="btn-primary w-full py-3 rounded-xl text-sm">
                Join Beta 🇮🇳
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
