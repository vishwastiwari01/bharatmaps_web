'use client'

const FEATURES = [
  { id:'messaging', icon:'💬', title:'Offline Messaging', desc:'Send messages to nearby Bharat Maps users without depending on cellular internet.', accent:'saffron', wide: false },
  { id:'sos',       icon:'🆘', title:'SOS Signal',        desc:'Broadcast an emergency signal to nearby participating devices.', accent:'red', wide: true,
    flow: ['SOS','Nearby Devices','Relay','Nearby Users'] },
  { id:'location',  icon:'📍', title:'Live Location',     desc:'Share your location with nearby users through the local network — no cloud required.', accent:'green', wide: false },
  { id:'maps',      icon:'🗺️', title:'Offline Maps',      desc:'Access map data without continuously requiring an internet connection.', accent:'navy', wide: false },
  { id:'nav',       icon:'🧭', title:'Offline Navigation',desc:'Navigate using local map data and GPS/GNSS even without internet.', accent:'navy', wide: false },
  { id:'nearby',    icon:'👥', title:'Nearby People',     desc:'See participating Bharat Maps devices around you, subject to privacy controls.', accent:'saffron', wide: false },
  { id:'mesh',      icon:'🕸️', title:'Mesh Network',      desc:'Every participating device can potentially become another node in the network.', accent:'green', wide: false },
]

const ACCENT = {
  saffron: { bg:'#fff7ed', border:'rgba(255,153,51,0.3)', tag:'rgba(255,153,51,0.12)', tagText:'#e07000', left:'#FF9933' },
  green:   { bg:'#f0fdf4', border:'rgba(19,136,8,0.25)',  tag:'rgba(19,136,8,0.10)',   tagText:'#138808', left:'#138808' },
  navy:    { bg:'#eff6ff', border:'rgba(0,0,102,0.2)',    tag:'rgba(0,0,102,0.08)',    tagText:'#000099', left:'#000066' },
  red:     { bg:'#fff1f2', border:'rgba(220,38,38,0.25)', tag:'rgba(220,38,38,0.08)', tagText:'#dc2626', left:'#dc2626' },
}

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label mb-4 block w-fit mx-auto">Capabilities</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0f172a] mb-4">
            What can you do with<br />
            <span className="text-[#FF9933]">Bharat Maps?</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto leading-relaxed">
            A complete offline communication and navigation platform — built from the ground up for situations when conventional networks aren't available.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {FEATURES.map((f) => {
            const a = ACCENT[f.accent as keyof typeof ACCENT]
            return (
              <div
                key={f.id}
                className={`rounded-2xl border p-5 transition-all duration-300 cursor-default group hover:shadow-md ${f.wide ? 'sm:col-span-2' : ''}`}
                style={{
                  background: '#ffffff',
                  borderColor: 'rgba(0,0,0,0.07)',
                  borderLeft: `3px solid ${a.left}`,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = a.bg; e.currentTarget.style.borderColor = a.border; e.currentTarget.style.borderLeftColor = a.left }}
                onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)'; e.currentTarget.style.borderLeftColor = a.left }}
              >
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="text-[#0f172a] font-bold mb-2 text-sm">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>

                {f.flow && (
                  <div className="mt-4 flex flex-wrap gap-1.5 items-center">
                    {f.flow.map((s, si) => (
                      <div key={s} className="flex items-center gap-1.5">
                        <span className="mono text-[10px] px-2 py-0.5 rounded border font-medium"
                          style={{ color: a.tagText, background: a.tag, borderColor: a.border }}>
                          {s}
                        </span>
                        {si < f.flow!.length - 1 && <span className="text-slate-300 text-xs">→</span>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
