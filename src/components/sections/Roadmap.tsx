export default function Roadmap() {
  const roadmap = [
    { phase: 'PHASE 1', status: 'ACTIVE', title: 'Developer Beta', desc: 'Core BLE mesh networking, basic map rendering, and device discovery.' },
    { phase: 'PHASE 2', status: 'UPCOMING', title: 'SOS & Encrypted Messaging', desc: 'Secure packet routing and emergency broadcast prioritization.' },
    { phase: 'PHASE 3', status: 'PLANNED', title: 'Offline Navigation', desc: 'Full vector tile caching, turn-by-turn routing without data.' },
    { phase: 'PHASE 4', status: 'PLANNED', title: 'Cross-Platform Mesh', desc: 'iOS integration to exponentially increase network density.' }
  ]

  return (
    <section className="py-32 bg-[var(--bg-primary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Development Roadmap</h2>
          <p className="text-[var(--text-secondary)] text-lg">
            Building a decentralized network requires careful staging.
          </p>
        </div>

        <div className="relative border-l border-[var(--border-medium)] ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-16">
          {roadmap.map((item, idx) => (
            <div key={item.phase} className="relative group">
              
              {/* Timeline dot */}
              <div className={`absolute -left-[45px] sm:-left-[61px] top-1 w-6 h-6 rounded-full border-4 border-[var(--bg-primary)] ${
                item.status === 'ACTIVE' ? 'bg-[var(--saffron)] shadow-[0_0_10px_var(--saffron)]' : 'bg-[var(--border-medium)]'
              }`} />

              <div className="flex items-center gap-4 mb-3">
                <span className="mono text-xs font-bold tracking-widest text-[var(--text-tertiary)]">{item.phase}</span>
                <span className={`mono text-[10px] font-bold tracking-widest px-2 py-0.5 rounded ${
                  item.status === 'ACTIVE' ? 'bg-[var(--saffron)]/10 text-[var(--saffron)]' : 'bg-[var(--bg-secondary)] text-[var(--text-tertiary)] border border-[var(--border-subtle)]'
                }`}>
                  {item.status}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-[var(--text-secondary)] font-medium max-w-lg">
                {item.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
