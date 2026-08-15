'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How it works' },
    { href: '#safety', label: 'Privacy' },
  ]

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-[100] flex flex-col items-center px-3 sm:px-4">
      <div
        className={`w-full max-w-5xl flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-500 ${
          scrolled || menuOpen
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/60'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7">
            <path d="M12 2C8.68629 2 6 4.68629 6 8C6 11.866 12 22 12 22" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 22C12 22 18 11.866 18 8" stroke="#138A3D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="8" r="3" fill="#172B5B"/>
          </svg>
          <span className="font-bold text-[15px] sm:text-[16px] tracking-tight text-[var(--text-primary)] group-hover:text-[var(--navy-nav)] transition-colors">
            Bharat Maps
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-gray-50/60 rounded-full p-1 border border-gray-100/60">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-[13px] font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white px-4 py-1.5 rounded-full transition-all">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right: CTA + Hamburger */}
        <div className="flex items-center gap-2">
          <a href="#community" className="btn-primary px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[12px] sm:text-[13px] font-bold btn-shimmer shadow-md hover:shadow-lg transition-all border border-transparent">
            Join Beta
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-gray-100/80 hover:bg-gray-200 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-4 h-4 text-[var(--text-primary)]" /> : <Menu className="w-4 h-4 text-[var(--text-primary)]" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden w-full max-w-5xl mt-2 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-xl py-3 px-2">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-[14px] font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-gray-50 rounded-xl transition-all"
            >
              {l.label}
            </a>
          ))}
          <div className="border-t border-gray-100 mt-2 pt-2 px-2">
            <a
              href="#community"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center btn-primary py-3 rounded-xl text-[14px] font-bold"
            >
              Join Beta
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
