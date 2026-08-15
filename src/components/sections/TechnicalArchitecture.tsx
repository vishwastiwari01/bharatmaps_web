'use client'
import { motion } from 'framer-motion'
import { Smartphone, Bluetooth, Network, Radio } from 'lucide-react'

export default function TechnicalArchitecture() {
  return (
    <section className="py-32 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] relative overflow-hidden">
      
      {/* Dotted grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '20px 20px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="w-full lg:w-1/2">
            <span className="mono text-[11px] font-bold tracking-widest text-[var(--text-tertiary)] mb-4 block uppercase">
              Technical Architecture
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              How the network connects.
            </h2>
            <p className="text-[var(--text-secondary)] text-lg mb-12 leading-relaxed">
              Bharat Maps bypasses traditional IP routing, establishing localized transport layers over peer-to-peer radio protocols.
            </p>

            <div className="space-y-6">
              {[
                { label: 'BLE', desc: 'Bluetooth Low Energy discovery and advertising.' },
                { label: 'LOCAL COMMUNICATION', desc: 'Encrypted device-to-device socket connections.' },
                { label: 'MESH', desc: 'Multi-hop message routing algorithm.' },
                { label: 'GNSS / GPS', desc: 'Hardware location independent of mobile data.' },
                { label: 'MAP DATA', desc: 'Pre-processed vector tiles stored on device.' },
                { label: 'PLATFORM', desc: 'Android native implementation.' },
              ].map((spec) => (
                <div key={spec.label} className="flex border-b border-[var(--border-subtle)] pb-4">
                  <div className="w-1/3">
                    <span className="mono text-[10px] font-bold tracking-widest text-[var(--text-tertiary)]">{spec.label}</span>
                  </div>
                  <div className="w-2/3">
                    <span className="text-[14px] font-medium text-[var(--text-secondary)]">{spec.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            {/* Animated Diagram */}
            <div className="bg-white rounded-3xl border border-[var(--border-subtle)] shadow-xl p-8 sm:p-12 w-full max-w-md flex flex-col items-center relative">
              
              <div className="w-full space-y-8">
                
                {/* Step 1: Device */}
                <div className="relative">
                  <div className="flex items-center justify-between border border-[var(--border-medium)] rounded-xl px-4 py-3 bg-[var(--bg-secondary)]">
                    <span className="mono text-xs font-bold">ORIGIN DEVICE</span>
                    <Smartphone className="w-4 h-4 text-[var(--text-tertiary)]" />
                  </div>
                  
                  {/* Connecting Line */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-px h-8 bg-[var(--border-medium)] top-full" />
                </div>

                {/* Step 2: Protocol */}
                <div className="relative pt-8">
                  <div className="flex items-center justify-between border border-[var(--saffron)] bg-[var(--saffron)]/5 rounded-xl px-4 py-3">
                    <span className="mono text-xs font-bold text-[var(--saffron)]">BLE DISCOVERY</span>
                    <Bluetooth className="w-4 h-4 text-[var(--saffron)]" />
                  </div>
                  
                  {/* Connecting Line */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-px h-8 bg-[var(--border-medium)] top-full" />
                </div>

                {/* Step 3: Mesh */}
                <div className="relative pt-8">
                  <div className="flex items-center justify-between border border-[var(--navy-nav)] bg-[var(--navy-nav)]/5 rounded-xl px-4 py-3">
                    <span className="mono text-xs font-bold text-[var(--navy-nav)]">MESH ROUTING</span>
                    <Network className="w-4 h-4 text-[var(--navy-nav)]" />
                  </div>
                  
                  {/* Connecting Line */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-px h-8 bg-[var(--border-medium)] top-full" />
                </div>

                {/* Step 4: Receiver */}
                <div className="relative pt-8">
                  <div className="flex items-center justify-between border border-[var(--green)] bg-[var(--green)]/5 rounded-xl px-4 py-3">
                    <span className="mono text-xs font-bold text-[var(--green)]">NEARBY DEVICE</span>
                    <Radio className="w-4 h-4 text-[var(--green)]" />
                  </div>
                </div>

              </div>

              {/* Animated Data Packet */}
              <motion.div 
                className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--text-primary)] shadow-[0_0_10px_rgba(7,26,45,0.3)] z-10"
                initial={{ top: '8%' }}
                animate={{ top: ['8%', '34%', '60%', '88%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", times: [0, 0.33, 0.66, 1] }}
              />

            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
