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
                <div className="flex-1 relative p-4 flex flex-col pt-12">
                  <div className="flex-1 bg-[#0b2440] rounded-xl border border-white/10 relative overflow-hidden">
                    {/* Dark App Map Background */}
                    <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]" />
                    
                    {/* Simulated Map UI Elements */}
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-60">
                      <path d="M 20 80 Q 50 20 80 80" fill="none" stroke="var(--saffron)" strokeWidth="1" strokeDasharray="2 2" />
                      <circle cx="50" cy="50" r="15" fill="var(--green)" opacity="0.1" />
                    </svg>

                    <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-[var(--green)] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_var(--green)] border-2 border-white flex items-center justify-center">
                      <div className="absolute w-12 h-12 rounded-full border border-[var(--green)] animate-ping" />
                    </div>

                    <div className="absolute top-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/10 flex justify-between items-center">
                      <span className="text-white text-[10px] font-mono">NODES: 12</span>
                      <div className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse" />
                    </div>
                  </div>
                </div>
                {/* Bottom Nav */}
                <div className="h-16 border-t border-white/10 flex justify-around items-center px-2 bg-black/40 backdrop-blur-md">
                  <Map className="w-5 h-5 text-white" />
                  <MessageSquare className="w-5 h-5 text-white/40" />
                  <AlertCircle className="w-5 h-5 text-white/40" />
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
