'use client'
import { useState } from 'react'

const STEPS = [
  { num:'01', title:'Discover', icon:'📡', color:'#FF9933', bg:'#fff7ed', border:'rgba(255,153,51,0.3)',
    desc:'Nearby Bharat Maps devices detect each other using Bluetooth Low Energy — no Wi-Fi or cellular needed.' },
  { num:'02', title:'Connect',  icon:'🔗', color:'#138808', bg:'#f0fdf4', border:'rgba(19,136,8,0.25)',
    desc:'Devices establish local peer-to-peer communication channels without routing through any server.' },
  { num:'03', title:'Relay',    icon:'↔️', color:'#FF9933', bg:'#fff7ed', border:'rgba(255,153,51,0.3)',
    desc:'Information can move through participating nearby devices, extending reach beyond a single connection.' },
  { num:'04', title:'Reach',    icon:'✅', color:'#138808', bg:'#f0fdf4', border:'rgba(19,136,8,0.25)',
    desc:'Messages, SOS signals or location info can potentially travel through multiple nodes in the local mesh.' },
]

export default function HowItWorks() {
  const [active, setActive] = useState(0)

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label mb-4 block w-fit mx-auto">Technology</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0f172a] mb-4 leading-tight">
            A network built around<br />
            <span className="text-[#138808]">people, not towers.</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto leading-relaxed">
            Nearby Bharat Maps devices discover one another and form a local mesh. Information can be relayed between participating devices without any internet connection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Steps */}
          <div className="space-y-3">
            {STEPS.map((s, i) => (
              <div
                key={s.num}
                onClick={() => setActive(i)}
                className={`rounded-2xl p-5 cursor-pointer transition-all duration-300 border ${
                  active === i
                    ? 'shadow-md'
                    : 'bg-white border-slate-100 hover:border-slate-200'
                }`}
                style={active === i ? { background: s.bg, borderColor: s.border } : {}}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background: active === i ? 'white' : '#f8fafc', border: `1px solid ${active === i ? s.border : '#e2e8f0'}` }}>
                    {s.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="mono text-xs text-slate-400">{s.num}</span>
                      <h3 className="font-bold text-[#0f172a]" style={{ color: active === i ? s.color : undefined }}>{s.title}</h3>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Device relay diagram */}
          <div className="flex justify-center">
            <div className="relative flex flex-col items-center gap-0">
              {['User A','User B','User C','User D'].map((user, i) => {
                const lit = i <= active
                return (
                  <div key={user} className="flex flex-col items-center">
                    <div
                      className="relative w-24 h-24 rounded-2xl flex flex-col items-center justify-center transition-all duration-400 border"
                      style={{
                        background: lit ? '#fff7ed' : '#f8fafc',
                        borderColor: lit ? 'rgba(255,153,51,0.4)' : '#e2e8f0',
                        boxShadow: lit ? '0 4px 24px rgba(255,153,51,0.15)' : 'none',
                      }}
                    >
                      <svg viewBox="0 0 24 24" className="w-8 h-8 mb-1" fill="none" strokeWidth="1.5"
                        stroke={lit ? '#FF9933' : '#cbd5e1'}>
                        <rect x="5" y="2" width="14" height="20" rx="2.5"/>
                        <circle cx="12" cy="17.5" r="1" fill={lit ? '#FF9933' : '#cbd5e1'}/>
                      </svg>
                      <span className="mono text-[11px] font-medium" style={{ color: lit ? '#FF9933' : '#94a3b8' }}>{user}</span>
                      {lit && (
                        <div className="absolute inset-0 rounded-2xl pointer-events-none"
                          style={{ boxShadow: '0 0 0 3px rgba(255,153,51,0.15)', animation: 'ble-pulse 1.8s ease-out infinite' }} />
                      )}
                    </div>

                    {i < 3 && (
                      <div className="flex flex-col items-center my-1">
                        <div className="w-px h-3" style={{ background: lit ? '#FF9933' : '#e2e8f0' }} />
                        <span className="mono text-[9px] px-2 py-0.5 rounded border font-medium"
                          style={{
                            color: lit ? '#FF9933' : '#94a3b8',
                            borderColor: lit ? 'rgba(255,153,51,0.35)' : '#e2e8f0',
                            background: lit ? 'rgba(255,153,51,0.06)' : '#f8fafc',
                          }}>BLE</span>
                        <div className="w-px h-3" style={{ background: lit ? '#FF9933' : '#e2e8f0' }} />
                      </div>
                    )}
                  </div>
                )
              })}

              {/* No internet label */}
              <div className="mt-4 flex items-center gap-2 px-4 py-2 rounded-full border border-[#138808]/25 bg-[#138808]/5">
                <div className="dot-green" />
                <span className="mono text-[10px] text-[#138808] font-semibold tracking-wide uppercase">No Internet Required</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <div className="inline-block border border-slate-200 rounded-xl px-5 py-3 bg-slate-50">
            <p className="text-xs text-slate-500 mono leading-relaxed">
              ⚠ Actual range and relay capability depend on device hardware, OS restrictions,
              permissions granted, battery state, and participating device density.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
