'use client'
import { useState, useRef } from 'react'
import { MessageSquare, LifeBuoy, MapPin, Map, Share2 } from 'lucide-react'

const FEATURES = [
  { id: 1, title: 'OFFLINE MESSAGING', icon: MessageSquare, label: 'DEVICE → DEVICE', desc: 'Direct, encrypted device-to-device messaging without any server routing.' },
  { id: 2, title: 'SOS SIGNALS', icon: LifeBuoy, label: 'EMERGENCY', desc: 'Broadcast distress signals to the local mesh to find nearby help immediately.' },
  { id: 3, title: 'LIVE LOCATION', icon: MapPin, label: 'SPATIAL', desc: 'Share coordinates directly over Bluetooth to locate nearby peers.' },
  { id: 4, title: 'OFFLINE MAPS', icon: Map, label: 'NAVIGATION', desc: 'Store local map regions and use GPS without ever turning on cellular data.' },
  { id: 5, title: 'MESH NETWORK', icon: Share2, label: 'TOPOLOGY', desc: 'Every participating device extends the range of the entire local network.' }
]

export default function FeaturesRail() {
  const [hovered, setHovered] = useState<number | null>(null)
  const railRef = useRef<HTMLDivElement>(null)

  return (
    <section id="features" className="py-32 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Capabilities</h2>
        <p className="text-[var(--text-secondary)] text-lg max-w-xl">
          A resilient communication layer built entirely on local device protocols.
        </p>
      </div>

      {/* Horizontal Rail */}
      <div 
        ref={railRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pl-4 sm:pl-6 lg:pl-8 pb-12 gap-6"
        style={{ scrollbarWidth: 'none' }}
      >
        {FEATURES.map((feat) => {
          const isHovered = hovered === feat.id
          const isOtherHovered = hovered !== null && hovered !== feat.id

          return (
            <div 
              key={feat.id}
              onMouseEnter={() => setHovered(feat.id)}
              onMouseLeave={() => setHovered(null)}
              className={`snap-start flex-shrink-0 w-[85vw] sm:w-[400px] h-[500px] rounded-3xl border border-[var(--border-subtle)] p-8 flex flex-col justify-between transition-all duration-500 cursor-default ${
                isHovered ? 'bg-white shadow-xl scale-[1.02] border-[var(--border-medium)]' : 
                isOtherHovered ? 'bg-[var(--bg-secondary)] opacity-50 scale-[0.98]' : 'bg-[var(--bg-secondary)] hover:bg-white'
              }`}
            >
              <div className="flex justify-between items-start">
                <span className="mono text-[11px] font-bold tracking-widest text-[var(--text-tertiary)]">
                  0{feat.id}
                </span>
                <span className="mono text-[9px] font-bold tracking-widest px-2.5 py-1 rounded-full border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                  {feat.label}
                </span>
              </div>

              {/* Abstract Visual Placeholder */}
              <div className="flex-1 my-8 relative flex items-center justify-center">
                <div className={`w-24 h-24 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  isHovered ? 'bg-[var(--bg-tertiary)] text-[var(--navy-ashoka)]' : 'bg-[var(--bg-primary)] text-[var(--text-tertiary)]'
                }`}>
                  <feat.icon strokeWidth={1.5} className="w-10 h-10" />
                </div>
                
                {/* Spotlight effect behind icon */}
                {isHovered && (
                  <div className="absolute inset-0 bg-[var(--navy-nav)] opacity-5 blur-[60px] rounded-full transition-opacity duration-500" />
                )}
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-[var(--text-primary)] transition-colors duration-300">
                  {feat.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          )
        })}
        {/* Spacer for right edge */}
        <div className="flex-shrink-0 w-4 sm:w-8" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="flex items-center gap-4">
          <div className="h-[1px] flex-1 bg-[var(--border-subtle)]" />
          <span className="mono text-[10px] text-[var(--text-tertiary)] font-bold tracking-widest">DRAG TO EXPLORE</span>
          <div className="h-[1px] flex-1 bg-[var(--border-subtle)]" />
        </div>
      </div>
    </section>
  )
}
