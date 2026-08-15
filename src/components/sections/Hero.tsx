'use client'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white pt-20">

      {/* Very subtle warm tint */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 65% 50%, rgba(255,153,51,0.06) 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[80vh]">

          {/* ── LEFT: Text ── */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">

            {/* Independence Day badge */}
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xl">🇮🇳</span>
              <span className="mono text-[10px] text-[#FF9933] tracking-[0.2em] uppercase border border-[#FF9933]/40 bg-[#FF9933]/6 px-3 py-1 rounded-sm font-medium">
                India's 80th Independence Day Launch
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { label: 'OFFLINE-FIRST', color: '#FF9933', bg: 'rgba(255,153,51,0.08)', border: 'rgba(255,153,51,0.3)' },
                { label: 'ANDROID BETA',  color: '#138808', bg: 'rgba(19,136,8,0.08)',   border: 'rgba(19,136,8,0.25)' },
                { label: 'BLE MESH',      color: '#000066', bg: 'rgba(0,0,102,0.06)',    border: 'rgba(0,0,102,0.2)' },
              ].map((t) => (
                <span key={t.label} className="mono text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-sm font-medium border"
                  style={{ color: t.color, background: t.bg, borderColor: t.border }}>
                  {t.label}
                </span>
              ))}
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[0.95] mb-5">
              <span className="text-[#0f172a]">BHARAT</span>
              <br />
              <span style={{
                background: 'linear-gradient(120deg, #FF9933 0%, #e07000 45%, #138808 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>MAPS</span>
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-slate-700 mb-2 leading-snug">
              Communication. Navigation. Safety.
            </p>
            <p className="text-xl sm:text-2xl font-medium text-[#FF9933] mb-5 leading-snug">
              Without the Internet.
            </p>

            <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-md">
              A decentralized offline network built for India — connecting nearby people
              through Bluetooth, mesh networking and offline maps.
              <br />
              <span className="font-semibold text-slate-700">When the internet disappears, the network doesn't have to.</span>
            </p>

            {/* Phone chain */}
            <div className="flex items-center gap-1 mb-8 flex-wrap">
              {['📱', '📱', '📱', '📱'].map((ph, i) => (
                <div key={i} className="flex items-center gap-1">
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-xl border border-[#FF9933]/30 bg-[#FF9933]/6 flex items-center justify-center text-base">
                      {ph}
                    </div>
                    <span className="mono text-[8px] text-slate-400 mt-0.5">PHONE</span>
                  </div>
                  {i < 3 && (
                    <div className="flex items-center gap-0.5 -mt-3 mx-0.5">
                      <div className="w-1 h-1 rounded-full bg-[#FF9933]/60" />
                      <div className="w-4 h-px bg-[#FF9933]/30" />
                      <div className="w-1 h-1 rounded-full bg-[#FF9933]/60" />
                    </div>
                  )}
                </div>
              ))}
              <div className="ml-2 flex items-center gap-1.5 -mt-3">
                <div className="dot-green w-6 h-6 rounded-full border border-[#138808]/30 bg-[#138808]/8 flex items-center justify-center text-xs">✓</div>
                <span className="mono text-[9px] text-[#138808] font-semibold uppercase tracking-wide">No Internet</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-5">
              <a href="#beta" className="btn-primary px-7 py-3.5 rounded-xl text-[15px]">
                Join the Beta
              </a>
              <a href="#how-it-works" className="btn-outline px-7 py-3.5 rounded-xl text-[15px]">
                See How It Works
              </a>
            </div>

            <a href="#beta" className="text-sm text-slate-400 hover:text-[#FF9933] transition-colors underline underline-offset-2">
              I'm Interested in Testing Bharat Maps →
            </a>
          </div>

          {/* ── RIGHT: India image ── */}
          <div className="order-1 lg:order-2 flex items-center justify-center relative">
            {/* Soft background glow circles */}
            <div className="absolute w-80 h-80 rounded-full opacity-15 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #FF9933 0%, transparent 70%)' }} />
            <div className="absolute w-64 h-64 rounded-full opacity-10 pointer-events-none translate-x-16 translate-y-10"
              style={{ background: 'radial-gradient(circle, #138808 0%, transparent 70%)' }} />

            <div className="relative w-full max-w-lg xl:max-w-xl animate-float">
              <Image
                src="/india.png"
                alt="India — monuments, map, and tricolor representing Bharat Maps' India-first vision"
                width={900}
                height={600}
                priority
                className="india-hero-img w-full h-auto object-contain"
                style={{ mixBlendMode: 'multiply' }}
              />

              {/* Floating badges over the image */}
              <div className="absolute top-4 right-4 bg-white rounded-xl px-3 py-2 shadow-md border border-black/6 flex items-center gap-2">
                <div className="dot-green" />
                <span className="mono text-[10px] text-[#138808] font-semibold tracking-wide">MESH ACTIVE</span>
              </div>

              <div className="absolute bottom-8 left-4 bg-white rounded-xl px-3 py-2 shadow-md border border-[#FF9933]/25 flex items-center gap-2">
                <span className="text-sm">📡</span>
                <div>
                  <div className="mono text-[9px] text-slate-400 leading-none mb-0.5">BLE RANGE</div>
                  <div className="mono text-[11px] text-[#FF9933] font-bold leading-none">~50–100m</div>
                </div>
              </div>

              <div className="absolute bottom-8 right-4 sos-badge">
                SOS READY
              </div>
            </div>

            {/* Label */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mono text-[9px] text-slate-300 tracking-widest uppercase">
              Conceptual visualization
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-50">
        <span className="mono text-[9px] text-slate-400 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-7 bg-gradient-to-b from-[#FF9933] to-transparent" />
      </div>
    </section>
  )
}
