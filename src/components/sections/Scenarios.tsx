'use client'
import { SCENARIOS } from '@/lib/constants'

export default function Scenarios() {
  return (
    <section id="scenarios" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label mb-4 block w-fit mx-auto">Use Cases</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0f172a] mb-4 leading-tight">
            When It Matters<br />
            <span className="text-[#FF9933]">Most</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SCENARIOS.map((scenario) => (
            <div
              key={scenario.id}
              className="relative rounded-2xl overflow-hidden group h-80 card flex flex-col justify-end p-5"
            >
              {/* Background gradient placeholder - you could replace this with actual background images */}
              <div 
                className={`absolute inset-0 bg-gradient-to-b ${scenario.gradient} opacity-90 transition-opacity duration-300 group-hover:opacity-100`} 
              />
              
              <div className="relative z-10">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-3 shadow-lg"
                  style={{ background: scenario.accent, color: 'white' }}
                >
                  {scenario.emoji}
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{scenario.title}</h3>
                <p className="text-white/80 text-xs font-medium mb-2">{scenario.headline}</p>
                
                {/* Description shows on hover on desktop, always on mobile (handled via CSS classes or just let it be visible) */}
                <p className="text-white/70 text-xs leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-300 overflow-hidden">
                  {scenario.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
