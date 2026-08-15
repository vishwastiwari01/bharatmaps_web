import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-[var(--border-subtle)] overflow-hidden">
      
      {/* India Network Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.07] pointer-events-none"
        style={{ backgroundImage: "url('/background.png')" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">

        {/* Top Row */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-16">

          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                <path d="M12 2C8.68629 2 6 4.68629 6 8C6 11.866 12 22 12 22" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C12 22 18 11.866 18 8" stroke="#138A3D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="8" r="3" fill="#172B5B"/>
              </svg>
              <span className="font-bold text-[18px] tracking-tight text-[var(--text-primary)]">Bharat Maps</span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Offline mesh communication and navigation for India. Built for the moments when conventional connectivity fails.
            </p>
            <a 
              href="mailto:enfibiotechnologiespvtltd@gmail.com"
              className="inline-block mt-4 text-sm font-medium text-[var(--navy-nav)] hover:underline"
            >
              enfibiotechnologiespvtltd@gmail.com
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-12">
            <div>
              <h4 className="mono text-[10px] font-bold tracking-widest text-[var(--text-secondary)] uppercase mb-4">Product</h4>
              <ul className="space-y-3">
                <li><Link href="#features" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Features</Link></li>
                <li><Link href="#how-it-works" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">How it works</Link></li>
                <li><Link href="#safety" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Privacy</Link></li>
                <li><Link href="#community" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Join Beta</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mono text-[10px] font-bold tracking-widest text-[var(--text-secondary)] uppercase mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.linkedin.com/company/enfibio-technologies-private-limited" 
                    target="_blank" rel="noopener noreferrer"
                    className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    Enfibio Technologies
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:enfibiotechnologiespvtltd@gmail.com"
                    className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[var(--border-subtle)] pt-10">

          {/* Developers Credit */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            
            <div>
              <p className="mono text-[10px] font-bold tracking-widest text-[var(--text-secondary)] uppercase mb-3">Built by</p>
              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href="https://www.linkedin.com/in/vishwas-tiwari-a05a65256" 
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 group"
                >
                  <div className="w-9 h-9 rounded-full bg-[var(--navy-nav)] flex items-center justify-center text-white text-[11px] font-bold shadow-sm group-hover:shadow-md transition-shadow">
                    VT
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--navy-nav)] transition-colors leading-tight">Vishwas Tiwari</p>
                    <p className="text-[10px] text-[var(--text-secondary)] font-medium">Co-founder</p>
                  </div>
                </a>

                <div className="w-px h-8 bg-[var(--border-subtle)]" />

                <a 
                  href="https://www.linkedin.com/in/shardul-pande-/" 
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 group"
                >
                  <div className="w-9 h-9 rounded-full bg-[var(--green)] flex items-center justify-center text-white text-[11px] font-bold shadow-sm group-hover:shadow-md transition-shadow">
                    SP
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--green)] transition-colors leading-tight">Shardul Pande</p>
                    <p className="text-[10px] text-[var(--text-secondary)] font-medium">Co-founder</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xs text-[var(--text-secondary)]">
                © {new Date().getFullYear()} Enfibio Technologies Pvt. Ltd.
              </p>
              <p className="text-[10px] text-[var(--text-secondary)] mt-1">
                Bharat Maps — Made in India
              </p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}
