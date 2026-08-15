'use client'
import { motion } from 'framer-motion'
import { Map } from 'lucide-react'

export function PremiumPhoneWrapper({ children, style, className = "", scale = 1 }: { children: React.ReactNode, style?: any, className?: string, scale?: number }) {
  return (
    <motion.div 
      style={{ ...style, transform: `scale(${scale})` }}
      className={`relative z-10 w-[260px] h-[550px] ${className}`}
    >
      <div className="group/phone relative flex justify-center h-full w-full border-[3px] border-gray-800 rounded-[2.5rem] bg-gray-900 shadow-2xl ring-1 ring-gray-900/50 transition-all duration-500 hover:shadow-3xl hover:-translate-y-2 select-none">
        
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
          <div className="absolute top-0 right-0 w-[120%] h-full bg-gradient-to-tr from-white/0 via-white/5 to-white/0 -skew-x-12 translate-x-[20%] pointer-events-none group-hover/phone:translate-x-[-100%] transition-transform duration-1000 ease-in-out z-40"></div>

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
