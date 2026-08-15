'use client'
import { PremiumPhoneWrapper } from '@/components/ui/PremiumPhoneWrapper'
import { Map, MessageSquare, AlertCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section id="network" className="relative min-h-[100svh] pt-20 pb-12 lg:pt-24 lg:pb-16 flex items-center overflow-hidden bg-white">
      
      {/* 
        The background.png provided by the user is a fully composed graphic 
        (mountains on left, India mesh on right). 
        We use it explicitly as the hero backdrop.
      */}
      <div 
        className="absolute inset-0 bg-cover bg-right-bottom md:bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/background.png')" }}
      />
      
      {/* We blend in the independanceday.png or India.png if needed to make it 'graphic filled' */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-40 mix-blend-multiply z-0 pointer-events-none"
        style={{ backgroundImage: "url('/independanceday.png')" }}
      />

      {/* Gradient fade on the left to ensure text readability against the busy background graphic */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent w-full lg:w-[60%] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full z-10 relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-20">
          
          {/* LEFT: Typography & CTAs */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--green)]" />
              <span className="mono text-[10px] font-bold tracking-widest text-[var(--text-secondary)] uppercase">
                Offline Communication Network
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 leading-[1.0] tracking-tight text-[var(--text-primary)]">
              Stay connected.<br />
              Even when you're <span className="text-[var(--green)]">offline.</span>
            </h1>

            <p className="text-[15px] sm:text-[16px] lg:text-[18px] text-[var(--text-secondary)] leading-relaxed mb-7 max-w-lg font-medium">
              Bharat Maps uses Bluetooth, mesh networking, offline maps and GPS to keep people connected when conventional connectivity isn't available.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a href="#community" className="btn-primary px-6 py-3.5 rounded-xl text-[14px] btn-shimmer border border-transparent shadow-md hover:shadow-lg">
                Join Beta
              </a>
              <a href="#how-it-works" className="btn-outline px-6 py-3.5 rounded-xl text-[14px] bg-white/80 backdrop-blur-sm">
                Explore the Network
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4">
              <span className="mono text-[10px] tracking-widest text-[var(--text-secondary)] font-bold">BLE</span>
              <span className="text-[var(--border-medium)]">•</span>
              <span className="mono text-[10px] tracking-widest text-[var(--text-secondary)] font-bold">MESH</span>
              <span className="text-[var(--border-medium)]">•</span>
              <span className="mono text-[10px] tracking-widest text-[var(--text-secondary)] font-bold">OFFLINE MAPS</span>
              <span className="text-[var(--border-medium)]">•</span>
              <span className="mono text-[10px] tracking-widest text-[var(--text-secondary)] font-bold">GPS</span>
            </div>
          </div>

          {/* RIGHT: Phone — hidden on mobile, visible lg+ */}
          <div className="hidden lg:flex w-full lg:w-1/2 xl:w-[48%] relative justify-center lg:justify-end items-center min-h-[520px]">
            
            {/* We place the PremiumPhoneWrapper slightly off-center to align with the India mesh graphic in the background */}
            <div className="relative rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
              <PremiumPhoneWrapper scale={0.9}>
                <div className="flex-1 flex flex-col bg-[#050e1a] pt-10 rounded-[2.2rem] overflow-hidden relative">

                  {/* Header */}
                  <div className="flex flex-col items-center px-5 pt-4 pb-2 relative z-10">
                    {/* Logo Icon */}
                    <div className="mb-3">
                      <svg viewBox="0 0 32 32" fill="none" className="w-9 h-9">
                        <path d="M16 2C11.582 2 8 5.582 8 10C8 15.644 16 30 16 30" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 30C16 30 24 15.644 24 10" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="16" cy="10" r="4" fill="#172B5B" stroke="white" strokeWidth="1.5"/>
                        <circle cx="16" cy="10" r="2" fill="white"/>
                      </svg>
                    </div>
                    <h2 className="text-white font-black text-[17px] tracking-tight mb-0.5">Bharat Maps</h2>
                    <p className="text-white/60 text-[10px] text-center font-medium leading-tight">
                      Stay connected.<br/>Even when you&apos;re{' '}
                      <span className="text-[#22c55e] font-bold">offline.</span>
                    </p>
                  </div>

                  {/* India Mesh Map — SVG */}
                  <div className="flex-1 flex items-center justify-center px-3 py-1 relative z-10">
                    {/* Glow */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-[#22c55e]/10 blur-2xl" />
                    </div>
                    <svg viewBox="0 0 200 220" className="w-full max-w-[180px] relative z-10" fill="none">
                      {/* India outline — simplified */}
                      <path
                        d="M85 15 L100 10 L118 16 L130 24 L140 38 L145 52 L148 68 L142 82 L138 96 L145 108 L150 122 L148 138 L140 152 L128 162 L115 172 L105 180 L100 188 L95 180 L84 170 L72 158 L62 144 L55 128 L50 112 L52 96 L58 80 L54 66 L58 52 L65 38 L75 26 Z"
                        stroke="#22c55e"
                        strokeWidth="1.5"
                        fill="rgba(34,197,94,0.06)"
                        strokeLinejoin="round"
                      />
                      {/* Mesh network nodes */}
                      {[
                        [100,10],[130,24],[148,68],[145,122],[105,180],[65,38],[50,112],[58,80],[138,96]
                      ].map(([x,y],i) => (
                        <g key={i}>
                          <circle cx={x} cy={y} r="3" fill="#22c55e" opacity="0.9"/>
                          <circle cx={x} cy={y} r="6" fill="none" stroke="#22c55e" strokeWidth="0.8" opacity="0.4"/>
                        </g>
                      ))}
                      {/* Connecting lines */}
                      <path d="M100 10 L130 24 L148 68 L145 122 L105 180" stroke="#22c55e" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4"/>
                      <path d="M65 38 L58 80 L50 112" stroke="#22c55e" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4"/>
                      <path d="M100 10 L65 38" stroke="#22c55e" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4"/>
                      <path d="M130 24 L138 96 L148 68" stroke="#22c55e" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4"/>
                      {/* Active pulse node — center */}
                      <circle cx="100" cy="105" r="4" fill="#22c55e"/>
                      <circle cx="100" cy="105" r="8" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.5" className="animate-ping"/>
                    </svg>
                  </div>

                  {/* Feature icons row */}
                  <div className="grid grid-cols-3 gap-1 px-3 pb-3 relative z-10">
                    {[
                      { icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', label: 'Offline\nComm' },
                      { icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6-10l6-3m0 13l5.447 2.724A1 1 0 0021 18.618V7.382a1 1 0 00-.553-.894L15 4m0 13V4', label: 'Offline\nMaps' },
                      { icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', label: 'Secure\nNetwork' },
                    ].map((f, i) => (
                      <div key={i} className="flex flex-col items-center gap-1 bg-white/5 rounded-xl py-2.5">
                        <svg className="w-5 h-5 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={f.icon}/>
                        </svg>
                        <span className="text-white/70 text-[8px] font-semibold text-center leading-tight whitespace-pre-line">{f.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="px-4 pb-2 relative z-10">
                    <button className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-[#050e1a] font-bold text-[13px] py-3 rounded-xl flex items-center justify-center gap-2 transition-colors">
                      Get Started
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                    </button>
                    <p className="text-center text-[#22c55e] text-[9px] font-semibold mt-2 tracking-wide cursor-pointer hover:text-white transition-colors">Explore the Network &rsaquo;</p>
                  </div>

                  {/* Pagination dots */}
                  <div className="flex justify-center gap-1.5 pb-4 relative z-10">
                    <div className="w-4 h-1.5 rounded-full bg-[#22c55e]"/>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20"/>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20"/>
                  </div>
                </div>
              </PremiumPhoneWrapper>

              {/* Additional floating UI element to enhance "real app" feel */}
              <div className="absolute -bottom-8 -left-12 bg-white rounded-xl p-4 shadow-2xl border border-[var(--border-subtle)] z-20 flex items-center gap-3 animate-[bounce_4s_infinite]">
                <div className="w-8 h-8 rounded-full bg-[var(--green)]/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse" />
                </div>
                <div>
                  <p className="mono text-[10px] text-[var(--text-secondary)] font-bold mb-0.5">LOCAL MESH</p>
                  <p className="text-[14px] font-bold text-[var(--text-primary)]">Connected</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
