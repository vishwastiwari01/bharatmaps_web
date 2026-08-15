'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-4 inset-x-0 z-[100] flex justify-center px-4 transition-all duration-500">
      <div 
        className={`w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50' 
            : 'bg-transparent'
        }`}
      >
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-7 h-7 flex-shrink-0">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M12 2C8.68629 2 6 4.68629 6 8C6 11.866 12 22 12 22" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 22C12 22 18 11.866 18 8" stroke="#138A3D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="8" r="3" fill="#172B5B"/>
            </svg>
          </div>
          <span className="font-bold text-[16px] tracking-tight text-[var(--text-primary)] transition-colors group-hover:text-[var(--navy-nav)]">
            Bharat Maps
          </span>
        </Link>

        {/* Center: Links */}
        <nav className="hidden md:flex items-center gap-1 bg-gray-50/50 rounded-full p-1 border border-gray-100/50">
          <Link href="#features" className="text-[13px] font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white px-4 py-1.5 rounded-full transition-all">Features</Link>
          <Link href="#how-it-works" className="text-[13px] font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white px-4 py-1.5 rounded-full transition-all">How it works</Link>
          <Link href="#safety" className="text-[13px] font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white px-4 py-1.5 rounded-full transition-all">Safety</Link>
        </nav>

        {/* Right: Join Beta CTA */}
        <div className="flex items-center">
          <a 
            href="#community" 
            className="btn-primary px-5 py-2.5 rounded-full text-[13px] font-bold btn-shimmer border border-transparent shadow-md hover:shadow-lg transition-all"
          >
            Join Beta
          </a>
        </div>

      </div>
    </header>
  )
}
