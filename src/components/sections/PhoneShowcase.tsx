'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Map, MessageSquare, AlertCircle } from 'lucide-react'

// The premium phone shell based on the Uiverse design
function PremiumPhoneWrapper({ children, style, className = "" }: { children: React.ReactNode, style?: any, className?: string }) {
  return (
    <motion.div 
      style={style}
      className={`absolute z-10 w-[260px] h-[550px] ${className}`}
    >
      <div className="group relative flex justify-center h-full w-full border-[3px] border-gray-800 rounded-[2.5rem] bg-gray-900 shadow-xl ring-1 ring-gray-900/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 select-none">
        
        {/* Inner Border */}
        <div className="absolute inset-0 rounded-[2.3rem] border border-white/10 pointer-events-none z-50"></div>

        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-[#071A2D] flex flex-col">
          
          {/* Dynamic Island / Notch */}
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 z-50 group/notch">
            <div className="h-5 w-20 rounded-full bg-black transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] group-hover/notch:w-[160px] group-hover/notch:h-12 group-hover/notch:rounded-[18px] flex items-center justify-between px-2 overflow-hidden cursor-pointer shadow-lg border border-white/5">
              
              {/* Notch Expanded Content */}
              <div className="opacity-0 group-hover/notch:opacity-100 transition-opacity duration-300 delay-100 flex items-center gap-2 w-full text-white text-[8px]">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-inner">
                  <Map className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col leading-tight whitespace-nowrap">
                  <span className="font-semibold text-[9px]">Bharat Maps</span>
                  <span className="text-gray-400 text-[8px]">Active</span>
                </div>
                <div className="flex items-end gap-[1.5px] h-3 ml-auto pr-1">
                  <div className="w-[2px] bg-green-400 h-full animate-[bounce_1s_infinite]"></div>
                  <div className="w-[2px] bg-green-400 h-2/3 animate-[bounce_1.2s_infinite]"></div>
                  <div className="w-[2px] bg-green-400 h-1/2 animate-[bounce_0.8s_infinite]"></div>
                </div>
              </div>

            </div>
          </div>

          {/* Glare effect */}
          <div className="absolute top-0 right-0 w-[120%] h-full bg-gradient-to-tr from-white/0 via-white/5 to-white/0 -skew-x-12 translate-x-[20%] pointer-events-none group-hover:translate-x-[-100%] transition-transform duration-1000 ease-in-out z-40"></div>

          {/* Status Bar Background for readability */}
          <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-black/50 to-transparent z-30 pointer-events-none"></div>

          {/* Actual Screen Content */}
          <div className="flex-1 relative z-20 flex flex-col">
            {children}
          </div>
        </div>

        {/* Hardware Buttons */}
        <span className="absolute -right-[4px] top-24 h-12 w-[3px] rounded-r-md bg-gray-700 shadow-sm border-l border-gray-900 z-0"></span>
        <span className="absolute -left-[4px] top-16 h-8 w-[3px] rounded-l-md bg-gray-700 shadow-sm border-r border-gray-900 z-0"></span>
        <span className="absolute -left-[4px] top-32 h-12 w-[3px] rounded-l-md bg-gray-700 shadow-sm border-r border-gray-900 z-0"></span>
        <span className="absolute -left-[4px] top-48 h-12 w-[3px] rounded-l-md bg-gray-700 shadow-sm border-r border-gray-900 z-0"></span>
      </div>
    </motion.div>
  )
}

export default function PhoneShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Staggered entering and rotating of phones based on scroll
  const y1 = useTransform(scrollYProgress, [0.2, 0.8], [200, -100])
  const y2 = useTransform(scrollYProgress, [0.3, 0.9], [300, -150])
  const y3 = useTransform(scrollYProgress, [0.4, 1.0], [400, -200])

  const r1 = useTransform(scrollYProgress, [0, 1], [-10, -2])
  const r2 = useTransform(scrollYProgress, [0, 1], [0, 0])
  const r3 = useTransform(scrollYProgress, [0, 1], [10, 2])

  return (
    <section className="py-32 bg-[var(--bg-secondary)] overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Built around your phone.
          </h2>
          <p className="text-lg text-[var(--text-secondary)] font-medium max-w-2xl mx-auto">
            A premium Android application engineered for resilience. No complex hardware required — just the device in your pocket.
          </p>
        </div>

        <div className="relative h-[700px] flex justify-center items-center">
          
          {/* Phone 1: MAP */}
          <PremiumPhoneWrapper 
            style={{ y: y1, rotate: r1 }} 
            className="left-[5%] md:left-[15%] lg:left-[20%]"
          >
            <div className="flex-1 relative p-4 flex flex-col pt-12">
              <div className="flex-1 bg-[#0b2440] rounded-xl border border-white/10 relative overflow-hidden">
                 <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]" />
                 <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-[var(--saffron)] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_var(--saffron)] border-2 border-white" />
              </div>
            </div>
            {/* Bottom Nav */}
            <div className="h-16 border-t border-white/10 flex justify-around items-center px-2 bg-black/20 backdrop-blur-md">
              <Map className="w-5 h-5 text-white" />
              <MessageSquare className="w-5 h-5 text-white/40" />
              <AlertCircle className="w-5 h-5 text-white/40" />
            </div>
          </PremiumPhoneWrapper>

          {/* Phone 2: NAV (Center) */}
          <PremiumPhoneWrapper 
            style={{ y: y2, rotate: r2, zIndex: 30 }}
            className=""
          >
            <div className="flex-1 relative bg-[#0b2440]">
               <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-[var(--green)] text-white text-[10px] font-bold px-3 py-1 rounded-full z-10">
                 OFFLINE ROUTE
               </div>
               {/* Route Line SVG */}
               <svg className="absolute inset-0 w-full h-full" viewBox="0 0 260 550">
                  <path d="M 130,420 Q 50,250 180,100" fill="none" stroke="var(--saffron)" strokeWidth="6" strokeLinecap="round" />
                  <circle cx="180" cy="100" r="6" fill="white" />
                  <circle cx="130" cy="420" r="8" fill="var(--navy-nav)" stroke="white" strokeWidth="2" />
               </svg>
               {/* Nav Card */}
               <div className="absolute bottom-4 inset-x-4 bg-white rounded-xl p-4 shadow-xl">
                 <div className="flex justify-between items-end">
                   <div>
                     <div className="text-[24px] font-bold text-[var(--text-primary)]">14 min</div>
                     <div className="text-[12px] text-[var(--text-secondary)] font-medium">3.2 km • 12:45 PM</div>
                   </div>
                   <div className="w-10 h-10 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center">
                     <span className="text-[var(--text-primary)] font-bold text-lg">×</span>
                   </div>
                 </div>
               </div>
            </div>
          </PremiumPhoneWrapper>

          {/* Phone 3: SOS */}
          <PremiumPhoneWrapper 
            style={{ y: y3, rotate: r3 }}
            className="right-[5%] md:right-[15%] lg:right-[20%]"
          >
            <div className="flex-1 relative p-4 flex flex-col pt-24 items-center text-center">
              <div className="w-24 h-24 rounded-full bg-[var(--red-sos)]/20 flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 rounded-full border border-[var(--red-sos)] animate-ping" />
                <div className="w-16 h-16 rounded-full bg-[var(--red-sos)] flex items-center justify-center text-white font-bold shadow-[0_0_20px_var(--red-sos)]">
                  SOS
                </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Signal Active</h3>
              <p className="text-white/60 text-xs mb-8">Broadcasting to nearby devices over BLE mesh.</p>
              
              <div className="w-full bg-white/5 rounded-lg p-3 border border-white/10 text-left">
                <div className="text-white/40 text-[10px] mb-1 font-mono uppercase">Reaching</div>
                <div className="text-white font-bold text-sm">12 Nearby Nodes</div>
              </div>
            </div>
            
            <div className="h-16 border-t border-white/10 flex justify-around items-center px-2 bg-black/20 backdrop-blur-md">
              <Map className="w-5 h-5 text-white/40" />
              <MessageSquare className="w-5 h-5 text-white/40" />
              <AlertCircle className="w-5 h-5 text-[var(--red-sos)]" />
            </div>
          </PremiumPhoneWrapper>

        </div>
      </div>
    </section>
  )
}
