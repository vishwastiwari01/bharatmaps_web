'use client'
import Link from 'next/link'

const FOOTER_LINKS = {
  Product: [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Roadmap', href: '#roadmap' },
  ],
  Safety: [
    { label: 'SOS Signal', href: '#sos' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Security', href: '/privacy#security' },
  ],
  Community: [
    { label: 'Join Beta', href: '#beta' },
    { label: 'Feedback', href: '#community' },
    { label: 'Contact', href: 'mailto:hello@bharatmaps.in' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#03050b] border-t border-white/5">
      {/* Tricolor accent */}
      <div className="tricolor-bar opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7">
                <svg viewBox="0 0 32 32" className="w-full h-full">
                  <circle cx="16" cy="16" r="14" fill="none" stroke="#FF9933" strokeWidth="1.5" />
                  <path d="M16 4 C20 5, 24 8, 25 12 C27 15, 26 19, 24 22 C22 25, 19 27, 16 28 C13 27, 10 25, 8 22 C6 19, 5 15, 7 12 C8 8, 12 5, 16 4Z"
                    fill="rgba(255,153,51,0.12)" stroke="#FF9933" strokeWidth="1" />
                  <circle cx="16" cy="16" r="2" fill="#138808" />
                </svg>
              </div>
              <span className="text-white font-bold tracking-wide text-sm">BHARAT MAPS</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4 max-w-xs">
              Stay connected. Even when you&apos;re offline. A decentralized communication and navigation network built for India.
            </p>
            <div className="flex items-center gap-2 mb-6">
              <div className="status-online" />
              <span className="text-xs font-mono text-slate-500">BETA • v0.1.0</span>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { label: 'GitHub', icon: 'GH', href: '#' },
                { label: 'X', icon: 'X', href: '#' },
                { label: 'Instagram', icon: 'IG', href: '#' },
                { label: 'LinkedIn', icon: 'LI', href: '#' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-xs text-slate-500 hover:border-[#FF9933]/40 hover:text-[#FF9933] transition-all"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-mono text-slate-500 tracking-widest uppercase mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-[#FF9933] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="hr-tricolor my-10" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs text-slate-600 font-mono">
            <span>Built by </span>
            <span className="text-slate-400">Shardul Pande & Vishwas Tiwari</span>
            <span> · Made in India 🇮🇳</span>
          </div>
          <div className="text-xs text-slate-600 font-mono">
            Launched on India&apos;s 80th Independence Day · 15 August 2026
          </div>
        </div>

        <p className="text-xs text-slate-700 mt-6 max-w-2xl leading-relaxed">
          Bharat Maps is in beta. Performance depends on device density, Bluetooth range, permissions, battery, and environment. 
          Do not rely solely on Bharat Maps for emergency communication. Always follow official safety guidance.
        </p>
      </div>
    </footer>
  )
}
