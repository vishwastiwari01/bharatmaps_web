'use client'
import { ROADMAP_PHASES } from '@/lib/constants'

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-[#fafafa]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label mb-4 block w-fit mx-auto">The Future</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            Roadmap to Wider Release
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
            We are rolling out Bharat Maps carefully to ensure reliability and safety before a general public release.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-6 lg:ml-8">
          {ROADMAP_PHASES.map((phase, i) => (
            <div key={phase.phase} className="mb-10 last:mb-0 relative pl-8 sm:pl-10">
              {/* Timeline dot */}
              <div 
                className={`absolute left-[-9px] top-1 w-4 h-4 rounded-full border-2 bg-white ${
                  phase.status === 'current' ? 'border-[#FF9933] shadow-[0_0_0_4px_rgba(255,153,51,0.2)]' : 
                  phase.status === 'past' ? 'border-[#138808]' : 
                  'border-slate-300'
                }`} 
              />
              
              <div className={`card p-6 rounded-2xl border ${
                phase.status === 'current' ? 'border-[#FF9933]/30 bg-[#FF9933]/5' : 
                'border-slate-200'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <div className="flex items-center gap-3">
                    <span className="mono text-xs font-bold text-slate-400">PHASE {phase.phase}</span>
                    <h3 className="text-lg font-bold text-[#0f172a]">{phase.title}</h3>
                  </div>
                  {phase.status === 'current' && (
                    <span className="text-[10px] mono tracking-widest px-2 py-1 rounded bg-[#FF9933]/10 text-[#FF9933] font-bold border border-[#FF9933]/20 self-start sm:self-auto uppercase">
                      In Progress
                    </span>
                  )}
                  {phase.status === 'past' && (
                    <span className="text-[10px] mono tracking-widest px-2 py-1 rounded bg-[#138808]/10 text-[#138808] font-bold border border-[#138808]/20 self-start sm:self-auto uppercase">
                      Completed
                    </span>
                  )}
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
