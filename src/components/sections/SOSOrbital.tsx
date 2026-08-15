'use client'
import { motion } from 'framer-motion'

export default function SOSOrbital() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#020812] relative overflow-hidden flex items-center">
      
      {/* Immersive Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* LEFT: Typography */}
          <div className="w-full lg:w-[45%] z-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              A signal can travel further than a phone.
            </h2>
            <p className="text-base sm:text-lg text-white/60 mb-8 max-w-md font-medium">
              Broadcast an emergency signal across the local mesh. The network relays it from device to device until help is found.
            </p>

            <div className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md max-w-sm">
              <div className="flex-1">
                <span className="mono text-[10px] text-[var(--red-sos)] block mb-1">ORIGIN</span>
                <span className="text-white font-mono text-xl">01</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div className="flex-1">
                <span className="mono text-[10px] text-[var(--saffron)] block mb-1">RELAY</span>
                <span className="text-white font-mono text-xl">12</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div className="flex-1">
                <span className="mono text-[10px] text-[var(--green)] block mb-1">RECEIVING</span>
                <span className="text-white font-mono text-xl">24</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Large Immersive Network Visualization */}
          <div className="hidden lg:block w-full lg:w-[55%] relative h-[400px] sm:h-[500px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
              
              {/* Distance Rings */}
              {[1, 2, 3, 4, 5].map((ring) => (
                <div 
                  key={`ring-${ring}`}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
                  style={{ width: `${ring * 160}px`, height: `${ring * 160}px` }}
                />
              ))}

              {/* Origin Device (SOS) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <div className="w-4 h-4 rounded-full bg-[var(--red-sos)] shadow-[0_0_20px_var(--red-sos)] relative">
                  <div className="absolute inset-0 rounded-full border border-[var(--red-sos)] animate-ping" />
                  <div className="absolute -inset-4 rounded-full border border-[var(--red-sos)] opacity-50 animate-ping" style={{ animationDelay: '0.3s' }} />
                </div>
              </div>

              {/* Relay Nodes & Silhouettes */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 800">
                
                {/* Connecting Lines (Relay Paths) */}
                <path d="M 400 400 L 480 320 L 580 350" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 400 400 L 320 480 L 250 450" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 400 400 L 450 500 L 550 600" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
                
                {/* Active Relay Highlighting */}
                <path d="M 400 400 L 480 320" fill="none" stroke="var(--saffron)" strokeWidth="2" className="animate-[dash_2s_linear_infinite]" strokeDasharray="10 20" />

                {/* Nodes */}
                <circle cx="480" cy="320" r="4" fill="var(--saffron)" />
                <circle cx="580" cy="350" r="3" fill="var(--green)" />
                <circle cx="320" cy="480" r="4" fill="var(--saffron)" />
                <circle cx="250" cy="450" r="3" fill="var(--green)" />
                <circle cx="450" cy="500" r="4" fill="var(--saffron)" />
                <circle cx="550" cy="600" r="3" fill="var(--green)" />
                
                {/* Background ambient nodes */}
                <circle cx="200" cy="300" r="2" fill="rgba(255,255,255,0.2)" />
                <circle cx="650" cy="250" r="2" fill="rgba(255,255,255,0.2)" />
                <circle cx="600" cy="500" r="2" fill="rgba(255,255,255,0.2)" />
                <circle cx="300" cy="200" r="2" fill="rgba(255,255,255,0.2)" />

              </svg>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
