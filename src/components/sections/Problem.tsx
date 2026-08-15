'use client'

const PROBLEMS = [
  { icon: '🏔️', title: 'Remote Areas',         desc: 'Trekking routes, forests, mountains — places where towers don\'t reach.' },
  { icon: '🌊', title: 'Natural Disasters',     desc: 'Floods, earthquakes, cyclones — events that knock out entire network infrastructure.' },
  { icon: '🎪', title: 'Crowded Events',        desc: 'Millions at a festival means congested networks and dropped connections.' },
  { icon: '⚡', title: 'Power Outages',         desc: 'Extended outages bring down cell towers along with everything else.' },
  { icon: '🚧', title: 'Network Blackouts',     desc: 'Administrative shutdowns leave people without conventional communication.' },
  { icon: '🛣️', title: 'Highways & Rural Roads',desc: 'Long stretches with poor or absent cellular coverage across India.' },
]

export default function Problem() {
  return (
    <section id="problem" className="py-24 bg-[#fafafa] relative">
      <div className="hr-tricolor" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="text-center mb-14">
          <span className="section-label mb-4 block w-fit mx-auto">The Reality</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0f172a] mb-4 leading-tight">
            What happens when the<br />
            <span className="text-[#FF9933]">network disappears?</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
            Millions of people across India face connectivity challenges every day — and conventional solutions depend on the same infrastructure that fails when you need it most.
          </p>
        </div>

        {/* Problem grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {PROBLEMS.map((p) => (
            <div key={p.title} className="card rounded-2xl p-5 group cursor-default">
              <div className="text-2xl mb-3">{p.icon}</div>
              <h3 className="text-[#0f172a] font-semibold mb-1.5 text-sm">{p.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">

          {/* Traditional */}
          <div className="rounded-2xl border border-red-100 bg-red-50/50 p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <span className="mono text-[10px] text-red-400 tracking-widest uppercase font-medium">Traditional Connectivity</span>
            </div>
            <div className="space-y-1.5">
              {['📱 Your Phone','📡 Cell Tower','🌐 Internet','🖥️ Server','📱 Their Phone'].map((s, i) => (
                <div key={s}>
                  <div className="bg-white border border-red-100 rounded-lg px-4 py-2.5 text-sm text-slate-600">{s}</div>
                  {i < 4 && <div className="flex justify-center my-1"><div className="w-px h-3 bg-red-200" /></div>}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-red-100">
              <p className="text-xs text-red-400 mono">⚠ FAILS if any link breaks</p>
            </div>
          </div>

          {/* Bharat Maps */}
          <div className="rounded-2xl border border-[#FF9933]/25 bg-[#FF9933]/4 p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="dot-green w-2 h-2 rounded-full" />
              <span className="mono text-[10px] text-[#138808] tracking-widest uppercase font-medium">Bharat Maps</span>
            </div>
            <div className="space-y-1.5">
              {['📱 Your Phone','📱 Nearby Phone','📱 Another Phone','📱 Another Phone','📱 Their Phone'].map((s, i) => (
                <div key={i}>
                  <div className="bg-white border border-[#FF9933]/20 rounded-lg px-4 py-2.5 text-sm text-slate-700">{s}</div>
                  {i < 4 && (
                    <div className="flex justify-center items-center gap-1 my-1">
                      <div className="w-px h-2 bg-[#FF9933]/40" />
                      <span className="mono text-[8px] text-[#FF9933]/60">BLE</span>
                      <div className="w-px h-2 bg-[#FF9933]/40" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-[#FF9933]/15">
              <p className="text-xs text-[#138808] mono font-medium">✓ No tower. No internet. No server.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
