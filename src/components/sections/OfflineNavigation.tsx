'use client'
import { PremiumPhoneWrapper } from '@/components/ui/PremiumPhoneWrapper'
import { Navigation as NavIcon, MapPin, Search } from 'lucide-react'
import { motion } from 'framer-motion'

export default function OfflineNavigation() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden flex items-center">
      
      {/* Immersive Map Background */}
      <div className="absolute inset-0 bg-[#e5e7eb]">
        <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]" />
        
        {/* Large abstract map elements */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M 0 300 Q 200 400 400 300 T 800 500 T 1000 200 L 1000 1000 L 0 1000 Z" fill="#d1d5db" />
          <path d="M -100 800 Q 300 700 500 850 T 1100 600" fill="none" stroke="#9ca3af" strokeWidth="40" strokeLinecap="round" />
          <path d="M 100 100 Q 400 200 600 50 T 1100 300" fill="none" stroke="#9ca3af" strokeWidth="20" strokeLinecap="round" />
          <path d="M 400 100 L 450 900" fill="none" stroke="#ffffff" strokeWidth="15" />
          <path d="M 600 -100 L 500 1100" fill="none" stroke="#ffffff" strokeWidth="15" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-8 justify-between">
          
          {/* LEFT: Phone Overlay */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-start">
            <PremiumPhoneWrapper className="shadow-2xl">
              <div className="flex-1 bg-white relative overflow-hidden flex flex-col">
                
                {/* Simulated Map Header */}
                <div className="h-24 bg-[var(--navy-nav)] text-white p-4 pt-10 rounded-b-3xl shadow-lg relative z-20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-lg">Navigate</span>
                    <div className="px-2 py-1 bg-white/20 rounded text-[10px] font-bold font-mono">OFFLINE</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2 flex items-center gap-2">
                    <Search className="w-4 h-4 text-white/50" />
                    <span className="text-white/50 text-sm">Search downloaded region...</span>
                  </div>
                </div>

                {/* Map Area */}
                <div className="flex-1 relative bg-[#e5e7eb]">
                  <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]" />
                  
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 260 400">
                    <path d="M 40 350 Q 80 200 180 50" fill="none" stroke="white" strokeWidth="12" strokeLinecap="round" />
                    <path d="M 40 350 Q 80 200 180 50" fill="none" stroke="#1264D6" strokeWidth="6" strokeLinecap="round" />
                    <circle cx="180" cy="50" r="6" fill="white" stroke="#1264D6" strokeWidth="3" />
                  </svg>
                  
                  {/* Current Location Marker */}
                  <div className="absolute top-[350px] left-[40px] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#1264D6]/20 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-[#1264D6] border-2 border-white shadow-md" />
                  </div>
                  
                  {/* Nav Card */}
                  <div className="absolute bottom-4 inset-x-4 bg-white rounded-xl p-4 shadow-xl border border-gray-100">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-2xl font-bold text-[var(--text-primary)]">28 min</div>
                        <div className="text-xs text-[var(--text-secondary)] font-medium">12 km • 14:30 ETA</div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#1264D6] text-white flex items-center justify-center shadow-md">
                        <NavIcon className="w-5 h-5 fill-current" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </PremiumPhoneWrapper>
          </div>

          {/* RIGHT: Typography */}
          <div className="w-full lg:w-[45%] bg-white/80 backdrop-blur-xl p-8 sm:p-12 rounded-3xl shadow-xl border border-white">
            <div className="inline-flex items-center gap-2 mb-6">
              <MapPin className="w-4 h-4 text-[#1264D6]" />
              <span className="mono text-[10px] font-bold tracking-widest text-[#1264D6] uppercase">Location</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-6 tracking-tight leading-[1.1]">
              Know where you are. Anywhere.
            </h2>
            
            <p className="text-lg text-[var(--text-secondary)] font-medium mb-8">
              Download entire states directly to your device. Bharat Maps uses your phone's built-in GNSS receiver to provide accurate turn-by-turn navigation even when cell towers are hundreds of miles away.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1264D6]/10 flex items-center justify-center text-[#1264D6]">✓</div>
                <span className="font-medium text-[var(--text-primary)]">Turn-by-turn routing</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1264D6]/10 flex items-center justify-center text-[#1264D6]">✓</div>
                <span className="font-medium text-[var(--text-primary)]">State-wide offline downloads</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1264D6]/10 flex items-center justify-center text-[#1264D6]">✓</div>
                <span className="font-medium text-[var(--text-primary)]">GNSS hardware integration</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
