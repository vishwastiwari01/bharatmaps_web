'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin } from 'lucide-react'

const SCENARIOS = [
  { id: 1, title: 'TREKKING', desc: 'Stay connected across remote trails and mountain routes.', img: 'https://images.news18.com/webstories/uploads/2026/01/13-best-trekking-in-world-2026-01-b635f854c07100f650bad138c5fe3516.jpg' }, 
  { id: 2, title: 'DISASTER RESPONSE', desc: 'Local communication when conventional infrastructure is disrupted.', img: 'https://bunny-wp-pullzone-3xue3q6yzy.b-cdn.net/wp-content/uploads/2024/10/Disaster-response-Hurrican-Harvey-3.jpg' }, 
  { id: 3, title: 'FESTIVALS', desc: 'Stay connected in dense crowds and large public gatherings.', img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2000&auto=format&fit=crop' }, 
  { id: 4, title: 'RURAL AREAS', desc: 'Communication and navigation where connectivity can be limited.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCKBiIsBRwT8U38WaD8nhZVmI4pmfRT0zGTEHDkhS9BA&s=10' }, 
  { id: 5, title: 'ROAD TRIPS', desc: 'Keep navigating and communicating across long stretches of road.', img: 'https://d2w184mfj9gts1.cloudfront.net/blog/6273c611-5db7-4e1b-93c5-38341d880a0d.jpg' }, 
]

export default function ScenariosGallery() {
  const [hoveredId, setHoveredId] = useState<number>(3)

  return (
    <section className="py-24 sm:py-32 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold">
          When conventional connectivity<br className="hidden sm:block" />isn't enough.
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 h-[400px] sm:h-[600px] flex flex-col sm:flex-row gap-2 sm:gap-4 transition-all duration-500">
        {SCENARIOS.map((scen) => {
          const isHovered = hoveredId === scen.id
          
          return (
            <div 
              key={scen.id}
              className={`relative rounded-3xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-default bg-[#071A2D] ${
                isHovered ? 'flex-[4] sm:flex-[5] lg:flex-[6]' : 'flex-1'
              }`}
              onMouseEnter={() => setHoveredId(scen.id)}
            >
              {/* Background Image - loads immediately with the dark #071A2D fallback */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                style={{ 
                  backgroundImage: `url(${scen.img})`,
                  transform: isHovered ? 'scale(1.05)' : 'scale(1)' 
                }}
              />
              
              {/* Overlays */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'bg-gradient-to-t from-black/90 via-black/30 to-transparent' : 'bg-black/60'}`} />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-10">
                
                {/* Vertical title when collapsed (Desktop only) */}
                <div className={`hidden sm:flex absolute inset-0 items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                   <span className="text-white font-mono font-bold tracking-[0.3em] text-xs -rotate-90 whitespace-nowrap">
                     {scen.title}
                   </span>
                </div>

                {/* Horizontal title when collapsed (Mobile only) */}
                <div className={`flex sm:hidden absolute inset-0 items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                   <span className="text-white font-mono font-bold tracking-widest text-[10px] whitespace-nowrap px-4 text-center">
                     {scen.title}
                   </span>
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="w-full max-w-lg"
                    >
                      <div className="hidden sm:flex items-center gap-2 mb-3">
                        <MapPin className="w-4 h-4 text-[var(--saffron)]" />
                        <span className="mono text-[10px] font-bold tracking-widest text-[var(--saffron)]">USE CASE</span>
                      </div>
                      <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
                        {scen.title}
                      </h3>
                      <p className="text-white/80 text-sm sm:text-lg font-medium leading-relaxed">
                        {scen.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
