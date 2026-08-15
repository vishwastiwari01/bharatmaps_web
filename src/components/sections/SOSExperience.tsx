'use client'
import { useState } from 'react'

const RELAY_NODES = [
  { label: 'SOS Device', sub: 'Signal origin' },
  { label: 'Nearby Device 1', sub: 'First relay' },
  { label: 'Nearby Device 2', sub: 'Forwarding' },
  { label: 'Nearby Device 3', sub: 'Forwarding' },
  { label: 'Wider Local Network', sub: 'Potential reach' },
]

export default function SOSExperience() {
  const [active, setActive] = useState(-1)
  const [running, setRunning] = useState(false)

  function triggerSOS() {
    if (running) return
    setRunning(true)
    setActive(0)
    let step = 0
    const id = setInterval(() => {
      step++
      if (step >= RELAY_NODES.length) {
        clearInterval(id)
        setTimeout(() => { setActive(-1); setRunning(false) }, 1200)
      } else {
        setActive(step)
      }
    }, 600)
  }

  return (
    <section id="sos" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle red tint */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(220,38,38,0.03) 0%, transparent 80%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label mb-4 block w-fit mx-auto" style={{ color:'#dc2626', background:'rgba(220,38,38,0.08)', borderColor:'rgba(220,38,38,0.25)' }}>
            Emergency
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0f172a] mb-4">
            When you need help, every<br />
            <span style={{ color:'#dc2626' }}>nearby device can matter.</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
            Bharat Maps is designed to make emergency signaling possible even when conventional connectivity is unavailable. Actual delivery depends on nearby participating devices and network conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">

          {/* Interactive visualization */}
          <div className="flex flex-col items-center">
            {/* SOS button */}
            <button
              onClick={triggerSOS}
              disabled={running}
              className="relative w-32 h-32 rounded-full mb-10 font-black text-lg tracking-widest transition-all duration-200 select-none"
              style={{
                background: running
                  ? 'linear-gradient(135deg, #dc2626, #b91c1c)'
                  : 'linear-gradient(135deg, #ef4444, #dc2626)',
                color: '#fff',
                boxShadow: running
                  ? '0 0 0 12px rgba(220,38,38,0.15), 0 0 0 24px rgba(220,38,38,0.07)'
                  : '0 4px 24px rgba(220,38,38,0.4)',
                transform: running ? 'scale(0.96)' : 'scale(1)',
              }}
            >
              {running ? (
                <span className="mono text-sm">SENDING…</span>
              ) : (
                <span>SEND<br />SOS</span>
              )}
              {running && (
                <>
                  <div className="absolute inset-0 rounded-full"
                    style={{ boxShadow: '0 0 0 0 rgba(220,38,38,0.4)', animation: 'sos-ripple 1.2s ease-out infinite' }} />
                  <div className="absolute inset-0 rounded-full"
                    style={{ boxShadow: '0 0 0 0 rgba(220,38,38,0.25)', animation: 'sos-ripple 1.2s ease-out 0.4s infinite' }} />
                </>
              )}
            </button>

            {/* Relay chain */}
            <div className="flex flex-col items-center gap-0 w-full max-w-xs">
              {RELAY_NODES.map((node, i) => {
                const lit = active >= i && active >= 0
                const isFirst = i === 0
                return (
                  <div key={node.label} className="flex flex-col items-center w-full">
                    <div
                      className="w-full rounded-xl px-4 py-3 flex items-center gap-3 transition-all duration-300 border"
                      style={{
                        background: lit ? (isFirst ? 'rgba(220,38,38,0.06)' : 'rgba(255,153,51,0.06)') : '#f8fafc',
                        borderColor: lit ? (isFirst ? 'rgba(220,38,38,0.3)' : 'rgba(255,153,51,0.3)') : '#e2e8f0',
                      }}
                    >
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0 transition-all duration-300"
                        style={{
                          background: lit ? (isFirst ? '#dc2626' : '#FF9933') : '#e2e8f0',
                          boxShadow: lit ? (isFirst ? '0 0 8px rgba(220,38,38,0.6)' : '0 0 8px rgba(255,153,51,0.6)') : 'none',
                        }}
                      />
                      <div>
                        <div className="text-sm font-semibold" style={{ color: lit ? (isFirst ? '#dc2626' : '#e07000') : '#94a3b8' }}>
                          {node.label}
                        </div>
                        <div className="mono text-[10px] text-slate-400">{node.sub}</div>
                      </div>
                    </div>
                    {i < RELAY_NODES.length - 1 && (
                      <div className="flex flex-col items-center my-1">
                        <div className="w-px h-4 transition-all duration-300"
                          style={{ background: lit ? 'rgba(255,153,51,0.5)' : '#e2e8f0' }} />
                        <span className="mono text-[8px] text-slate-300">relay</span>
                        <div className="w-px h-4 transition-all duration-300"
                          style={{ background: active >= i + 1 ? 'rgba(255,153,51,0.5)' : '#e2e8f0' }} />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <p className="mono text-[9px] text-slate-400 mt-4 text-center">
              Press SEND SOS to see propagation
            </p>
          </div>

          {/* Copy */}
          <div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-red-100 bg-red-50/50">
                <div className="text-2xl flex-shrink-0">📡</div>
                <div>
                  <h3 className="font-bold text-[#0f172a] mb-1">Local Signal Broadcast</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    An SOS signal is broadcast to all nearby participating Bharat Maps devices via Bluetooth.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-orange-100 bg-orange-50/50">
                <div className="text-2xl flex-shrink-0">🔁</div>
                <div>
                  <h3 className="font-bold text-[#0f172a] mb-1">Mesh Relay</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Participating devices can forward the signal further, potentially extending reach through the local network.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50">
                <div className="text-2xl flex-shrink-0">🔒</div>
                <div>
                  <h3 className="font-bold text-[#0f172a] mb-1">Privacy & Safety</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    SOS requires explicit user action. Location and identity are only shared when you choose to broadcast.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl border border-amber-200 bg-amber-50">
              <p className="text-xs text-amber-800 leading-relaxed">
                <strong>Important:</strong> Do not rely solely on Bharat Maps for emergency communication. 
                Always follow official safety guidance. SOS delivery is not guaranteed and depends on nearby participating devices. 
                Bharat Maps does not connect directly to emergency services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
