import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#04101f]">
      
      {/* India Network Background */}
      <div 
        className="absolute inset-0 bg-cover bg-right-bottom bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/background.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#04101f] via-[#04101f]/85 to-[#04101f]/30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">

        {/* Main Row */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-8">

          {/* Left: Brand + Founders side by side */}
          <div className="max-w-lg">
            <div className="flex items-center gap-2.5 mb-4">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                <path d="M12 2C8.68629 2 6 4.68629 6 8C6 11.866 12 22 12 22" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C12 22 18 11.866 18 8" stroke="#138A3D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="8" r="3" fill="white"/>
              </svg>
              <span className="font-black text-[18px] tracking-tight text-white">Bharat Maps</span>
              {/* Dare to Dream Badge inline with logo */}
              <div className="flex items-center gap-1.5 ml-2 bg-[var(--saffron)]/10 border border-[var(--saffron)]/30 rounded-full px-3 py-1">
                <svg className="w-3 h-3 text-[var(--saffron)]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <span className="mono text-[9px] font-bold tracking-wider text-[var(--saffron)]">DARE TO DREAM 5.0</span>
              </div>
            </div>

            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Offline mesh communication and navigation built for India. Keeps people connected when conventional connectivity fails.
            </p>

            <a 
              href="mailto:enfibiotechnologiespvtltd@gmail.com"
              className="inline-flex items-center gap-2 text-[var(--saffron)] text-sm font-semibold hover:text-white transition-colors mb-6"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              enfibiotechnologiespvtltd@gmail.com
            </a>

            {/* Founders inline */}
            <div>
              <p className="mono text-[9px] font-bold tracking-widest text-white/30 uppercase mb-3">Built by</p>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.linkedin.com/in/vishwas-tiwari-a05a65256" target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[var(--saffron)]/40 rounded-xl px-3 py-2 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--saffron)] to-[#c96000] flex items-center justify-center text-white font-black text-xs shadow-md flex-shrink-0">VT</div>
                  <div>
                    <p className="text-white text-[13px] font-bold leading-tight group-hover:text-[var(--saffron)] transition-colors">Vishwas Tiwari</p>
                    <p className="text-white/30 text-[10px] font-mono">Co-founder</p>
                  </div>
                  <svg className="w-3 h-3 text-white/20 group-hover:text-[var(--saffron)] transition-colors ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>

                <a href="https://www.linkedin.com/in/shardul-pande-/" target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[var(--green)]/40 rounded-xl px-3 py-2 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--green)] to-[#0a5a28] flex items-center justify-center text-white font-black text-xs shadow-md flex-shrink-0">SP</div>
                  <div>
                    <p className="text-white text-[13px] font-bold leading-tight group-hover:text-[var(--green)] transition-colors">Shardul Pande</p>
                    <p className="text-white/30 text-[10px] font-mono">Co-founder</p>
                  </div>
                  <svg className="w-3 h-3 text-white/20 group-hover:text-[var(--green)] transition-colors ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Links + Award */}
          <div className="flex flex-col sm:flex-row gap-12">
            <div>
              <h4 className="mono text-[9px] font-bold tracking-widest text-white/30 uppercase mb-4">Product</h4>
              <ul className="space-y-3">
                <li><Link href="#features" className="text-[13px] font-medium text-white/60 hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#how-it-works" className="text-[13px] font-medium text-white/60 hover:text-white transition-colors">How it works</Link></li>
                <li><Link href="#safety" className="text-[13px] font-medium text-white/60 hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="#community" className="text-[13px] font-medium text-white/60 hover:text-white transition-colors">Join Beta</Link></li>
              </ul>
            </div>

            {/* Dare to Dream Award Card — more prominent */}
            <div className="flex flex-col justify-start">
              <h4 className="mono text-[9px] font-bold tracking-widest text-white/30 uppercase mb-4">Recognition</h4>
              <a href="/daretodream.png" target="_blank" rel="noopener noreferrer"
                className="relative bg-gradient-to-br from-[var(--saffron)]/20 to-[var(--green)]/10 border border-[var(--saffron)]/30 rounded-2xl overflow-hidden group hover:border-[var(--saffron)]/60 transition-all w-[200px] h-[120px] block">
                <img src="/daretodream.png" alt="Dare to Dream 5.0" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04101f]/90 via-[#04101f]/50 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <svg className="w-3 h-3 text-[var(--saffron)]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    <span className="text-[var(--saffron)] font-black text-[10px] tracking-wider">WINNER</span>
                  </div>
                  <p className="text-white font-bold text-sm leading-tight">Dare to Dream 5.0</p>
                  <p className="text-white/50 text-[10px] font-mono">Validated startup idea</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a href="https://www.linkedin.com/company/enfibio-technologies-private-limited" target="_blank" rel="noopener noreferrer"
            className="text-white/30 text-xs hover:text-white/60 transition-colors font-medium">
            Enfibio Technologies Pvt. Ltd.
          </a>
          <p className="text-white/20 text-[10px] font-mono">© {new Date().getFullYear()} · Bharat Maps · Made in India</p>
        </div>

      </div>
    </footer>
  )
}
