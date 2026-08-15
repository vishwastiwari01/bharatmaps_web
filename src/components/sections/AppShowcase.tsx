'use client'
import { PremiumPhoneWrapper } from '@/components/ui/PremiumPhoneWrapper'
import { Map, MessageSquare, AlertCircle, Users, Navigation } from 'lucide-react'
import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

export default function AppShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Subtle parallax effects for the phones
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100])
  
  return (
    <section id="features" className="bg-white py-32 relative overflow-hidden" ref={containerRef}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.10] pointer-events-none"
        style={{ backgroundImage: "url('/background.png')" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-48 relative z-10">
        
        {/* Feature 1: Offline Messaging */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 mb-6">
              <MessageSquare className="w-4 h-4 text-[var(--saffron)]" />
              <span className="mono text-[10px] font-bold tracking-widest text-[var(--saffron)] uppercase">Encrypted</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-[var(--text-primary)]">
              Peer-to-peer<br/>messaging.
            </h2>
            <p className="text-lg text-[var(--text-secondary)] font-medium max-w-md">
              Send encrypted text messages and broadcast critical updates directly to nearby devices using Bluetooth Low Energy, completely bypassing cell towers.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <PremiumPhoneWrapper style={{ y: y1 }} className="shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              <div className="flex-1 bg-[#071A2D] p-4 pt-12 flex flex-col">
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[var(--saffron)]/20 border border-[var(--saffron)]/30 flex items-center justify-center">
                    <span className="text-[var(--saffron)] font-bold text-sm">SP</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Shardul Pande</h4>
                    <span className="text-[var(--green)] text-[10px] font-mono">15m away via Mesh</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-2xl rounded-tl-sm p-3 max-w-[85%] text-white/90 text-sm">
                    Vishwas, are you on the upper trail? The lower bridge is washed out.
                  </div>
                  <div className="bg-[var(--navy-nav)] rounded-2xl rounded-tr-sm p-3 max-w-[85%] self-end text-white text-sm ml-auto">
                    Yes, took the ridge. We're safe.
                  </div>
                </div>
              </div>
            </PremiumPhoneWrapper>
          </div>
        </div>

        {/* Feature 2: SOS */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-32">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 mb-6">
              <AlertCircle className="w-4 h-4 text-[var(--red-sos)]" />
              <span className="mono text-[10px] font-bold tracking-widest text-[var(--red-sos)] uppercase">Emergency</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-[var(--text-primary)]">
              Broadcast SOS.<br/>Find help locally.
            </h2>
            <p className="text-lg text-[var(--text-secondary)] font-medium max-w-md">
              Trigger a distress signal that propagates endlessly across the mesh network until it reaches a device with internet access or a rescue team.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <PremiumPhoneWrapper style={{ y: y2 }} className="shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              <div className="flex-1 bg-[#0b0303] p-4 pt-20 flex flex-col items-center justify-center text-center">
                <div className="w-32 h-32 rounded-full bg-[var(--red-sos)]/20 flex items-center justify-center mb-8 relative">
                  <div className="absolute inset-0 rounded-full border border-[var(--red-sos)] animate-ping" />
                  <div className="absolute inset-2 rounded-full border border-[var(--red-sos)] animate-ping" style={{ animationDelay: '0.2s' }} />
                  <div className="w-20 h-20 rounded-full bg-[var(--red-sos)] flex items-center justify-center text-white font-black text-xl shadow-[0_0_30px_var(--red-sos)]">
                    SOS
                  </div>
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Broadcasting...</h3>
                <p className="text-[var(--red-sos)] text-sm mb-8 font-mono">14 NODES REACHED</p>
                <button className="w-full py-4 rounded-xl bg-white/10 text-white font-bold border border-white/20">
                  CANCEL SIGNAL
                </button>
              </div>
            </PremiumPhoneWrapper>
          </div>
        </div>

        {/* Feature 3: Live Location */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 mb-6">
              <Users className="w-4 h-4 text-[#1264D6]" />
              <span className="mono text-[10px] font-bold tracking-widest text-[#1264D6] uppercase">Awareness</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-[var(--text-primary)]">
              See who's<br/>around you.
            </h2>
            <p className="text-lg text-[var(--text-secondary)] font-medium max-w-md">
              Share your location securely with your convoy or trekking group over the local mesh. Everyone stays on the map, even off the grid.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <PremiumPhoneWrapper style={{ y: y1 }} className="shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              <div className="flex-1 bg-[#0b2440] relative overflow-hidden">
                <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]" />
                
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 260 550">
                   {/* Map routes */}
                   <path d="M 50 150 Q 130 250 80 400" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" strokeLinecap="round" />
                   
                   {/* Users */}
                   <circle cx="50" cy="150" r="12" fill="#1264D6" opacity="0.2" />
                   <circle cx="50" cy="150" r="4" fill="#1264D6" />
                   
                   <circle cx="100" cy="200" r="12" fill="var(--saffron)" opacity="0.2" />
                   <circle cx="100" cy="200" r="4" fill="var(--saffron)" />
                   
                   <circle cx="80" cy="400" r="12" fill="var(--green)" opacity="0.2" />
                   <circle cx="80" cy="400" r="4" fill="var(--green)" stroke="white" strokeWidth="1.5" />
                </svg>

                <div className="absolute bottom-6 inset-x-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                  <div className="text-white text-sm font-bold mb-3">Group (2 Active)</div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-8 h-8 rounded-full bg-[var(--navy-nav)] border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">VT</div>
                      <span className="text-white/80 text-[10px] font-medium">Vishwas</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-8 h-8 rounded-full bg-[var(--saffron)] border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">SP</div>
                      <span className="text-white/80 text-[10px] font-medium">Shardul</span>
                    </div>
                  </div>
                </div>
              </div>
            </PremiumPhoneWrapper>
          </div>
        </div>

      </div>
    </section>
  )
}
