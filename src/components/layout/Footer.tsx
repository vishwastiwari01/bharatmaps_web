import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#04101f]">
      
      {/* === India Network Background — the MAIN visual === */}
      <div 
        className="absolute inset-0 bg-cover bg-right-bottom bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/background.png')" }}
      />
      {/* Dark gradient on the left so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#04101f] via-[#04101f]/90 to-[#04101f]/40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 mb-16">

          {/* Left: Brand + Description */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 mb-5">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <path d="M12 2C8.68629 2 6 4.68629 6 8C6 11.866 12 22 12 22" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C12 22 18 11.866 18 8" stroke="#138A3D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="8" r="3" fill="white"/>
              </svg>
              <span className="font-black text-[20px] tracking-tight text-white">Bharat Maps</span>
            </div>
            <p className="text-white/60 text-[15px] leading-relaxed mb-6">
              Offline mesh communication and navigation built for India. Keeps people connected when conventional connectivity fails.
            </p>
            <a 
              href="mailto:enfibiotechnologiespvtltd@gmail.com"
              className="inline-flex items-center gap-2 text-[var(--saffron)] text-sm font-semibold hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              enfibiotechnologiespvtltd@gmail.com
            </a>
          </div>

          {/* Right: Links */}
          <div className="flex flex-col sm:flex-row gap-12">
            <div>
              <h4 className="mono text-[10px] font-bold tracking-widest text-white/40 uppercase mb-5">Product</h4>
              <ul className="space-y-3">
                <li><Link href="#features" className="text-[14px] font-medium text-white/70 hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#how-it-works" className="text-[14px] font-medium text-white/70 hover:text-white transition-colors">How it works</Link></li>
                <li><Link href="#safety" className="text-[14px] font-medium text-white/70 hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="#community" className="text-[14px] font-medium text-white/70 hover:text-white transition-colors">Join Beta</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mono text-[10px] font-bold tracking-widest text-white/40 uppercase mb-5">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.linkedin.com/company/enfibio-technologies-private-limited" target="_blank" rel="noopener noreferrer" className="text-[14px] font-medium text-white/70 hover:text-white transition-colors">
                    Enfibio Technologies
                  </a>
                </li>
                <li>
                  <a href="mailto:enfibiotechnologiespvtltd@gmail.com" className="text-[14px] font-medium text-white/70 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">

            {/* Builders — Creative Card Style */}
            <div>
              <p className="mono text-[10px] font-bold tracking-widest text-white/40 uppercase mb-4">Built by</p>
              <div className="flex flex-col sm:flex-row gap-4">

                {/* Vishwas Tiwari Card */}
                <a 
                  href="https://www.linkedin.com/in/vishwas-tiwari-a05a65256" 
                  target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[var(--saffron)]/40 rounded-2xl px-4 py-3 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--saffron)] to-[#d4620a] flex items-center justify-center text-white font-black text-sm shadow-lg shadow-[var(--saffron)]/20 flex-shrink-0">
                    VT
                  </div>
                  <div>
                    <p className="text-white font-bold text-[14px] leading-tight group-hover:text-[var(--saffron)] transition-colors">Vishwas Tiwari</p>
                    <p className="text-white/40 text-[11px] font-mono">Co-founder · Enfibio</p>
                  </div>
                  <svg className="w-3.5 h-3.5 text-white/30 group-hover:text-[var(--saffron)] ml-1 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>

                {/* Shardul Pande Card */}
                <a 
                  href="https://www.linkedin.com/in/shardul-pande-/" 
                  target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[var(--green)]/40 rounded-2xl px-4 py-3 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--green)] to-[#0d6b30] flex items-center justify-center text-white font-black text-sm shadow-lg shadow-[var(--green)]/20 flex-shrink-0">
                    SP
                  </div>
                  <div>
                    <p className="text-white font-bold text-[14px] leading-tight group-hover:text-[var(--green)] transition-colors">Shardul Pande</p>
                    <p className="text-white/40 text-[11px] font-mono">Co-founder · Enfibio</p>
                  </div>
                  <svg className="w-3.5 h-3.5 text-white/30 group-hover:text-[var(--green)] ml-1 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>

              </div>
            </div>

            {/* Copyright */}
            <div className="text-right">
              <p className="text-white/40 text-xs">© {new Date().getFullYear()} Enfibio Technologies Pvt. Ltd.</p>
              <p className="text-white/20 text-[10px] mt-1 font-mono">Bharat Maps — Made in India</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
