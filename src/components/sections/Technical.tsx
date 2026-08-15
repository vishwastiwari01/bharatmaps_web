'use client'
import { TECH_STACK } from '@/lib/constants'

export default function Technical() {
  return (
    <section id="technical" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          <div className="lg:w-1/2">
            <span className="section-label mb-4 block w-fit">Architecture</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-6">
              Under the Hood
            </h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              Bharat Maps relies on specialized protocols and hardware capabilities to enable connectivity without internet access.
            </p>
            
            <div className="space-y-6">
              {TECH_STACK.map((item) => (
                <div key={item.key} className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-6 flex items-center justify-center bg-slate-100 rounded text-[10px] font-mono font-bold text-slate-500 border border-slate-200">
                    {item.key}
                  </div>
                  <div>
                    <h4 className="text-[#0f172a] font-bold text-sm mb-1">{item.label}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="card rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h3 className="mono text-xs text-slate-400 mb-6 font-bold tracking-widest text-center uppercase">System Architecture</h3>
              
              <div className="flex flex-col gap-3 font-mono text-[11px] sm:text-xs">
                {[
                  { text: 'User Application (Android)', icon: '📱', color: 'bg-[#FF9933]/10 text-[#FF9933] border-[#FF9933]/20' },
                  { text: '↓', icon: '', color: 'text-slate-300 text-center border-transparent' },
                  { text: 'Local Routing / Mesh Protocol', icon: '🕸️', color: 'bg-white text-slate-600 border-slate-200' },
                  { text: '↓', icon: '', color: 'text-slate-300 text-center border-transparent' },
                  { text: 'Encrypted Payload', icon: '🔒', color: 'bg-white text-slate-600 border-slate-200' },
                  { text: '↓', icon: '', color: 'text-slate-300 text-center border-transparent' },
                  { text: 'BLE Advertising & GATT', icon: '📡', color: 'bg-white text-slate-600 border-slate-200' },
                  { text: '↓', icon: '', color: 'text-slate-300 text-center border-transparent' },
                  { text: 'Nearby Devices (Relay/Receive)', icon: '👥', color: 'bg-[#138808]/10 text-[#138808] border-[#138808]/20' },
                ].map((step, idx) => (
                  <div key={idx} className={`p-3 rounded-lg border ${step.color} flex items-center justify-center gap-2`}>
                    {step.icon && <span className="text-base">{step.icon}</span>}
                    {step.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
