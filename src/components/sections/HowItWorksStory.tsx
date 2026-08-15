'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Bluetooth, Radio, RefreshCcw, Navigation } from 'lucide-react'

export default function HowItWorksStory() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Horizontal scroll mapping for the timeline nodes
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])

  const steps = [
    {
      id: '01',
      title: 'BLE Discovery',
      desc: 'Devices constantly scan for nearby Bharat Maps users using ultra-low-power Bluetooth.',
      icon: Bluetooth,
      color: 'var(--blue)'
    },
    {
      id: '02',
      title: 'Local Connect',
      desc: 'When in range, devices automatically form secure, encrypted local ad-hoc connections.',
      icon: Radio,
      color: 'var(--saffron)'
    },
    {
      id: '03',
      title: 'Mesh Relay',
      desc: 'Messages hop seamlessly from device to device, extending the physical range of the network.',
      icon: RefreshCcw,
      color: 'var(--green)'
    },
    {
      id: '04',
      title: 'Global Reach',
      desc: 'If any single device in the mesh has internet, the entire local network gains gateway access.',
      icon: Navigation,
      color: 'var(--navy-nav)'
    }
  ]

  return (
    <section id="how-it-works" className="py-32 bg-[#05101E] overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          How the mesh forms.
        </h2>
        <p className="text-lg text-white/60 font-medium max-w-2xl">
          An organic, self-healing network that grows stronger with every user. No cell towers required.
        </p>
      </div>

      <div className="relative h-[400px] w-full flex items-center">
        {/* Background Network Graphic */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, var(--saffron) 0%, transparent 70%)', mixBlendMode: 'screen' }} />
        
        <motion.div 
          className="flex items-center gap-16 md:gap-32 px-4 md:px-32 absolute left-0"
          style={{ x }}
        >
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col w-[300px] flex-shrink-0 group">
              
              {/* Connecting Line to next node */}
              {index < steps.length - 1 && (
                <div className="absolute top-12 left-[100%] w-full h-[2px] bg-gradient-to-r from-white/20 to-transparent -z-10 overflow-hidden">
                   <div className="w-1/2 h-full bg-white/50 animate-[translate_2s_linear_infinite]" />
                </div>
              )}

              {/* Node Visualization */}
              <div className="relative w-24 h-24 mb-8">
                <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-white/30 transition-colors" />
                <div className="absolute inset-2 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center border border-white/5">
                  <step.icon className="w-8 h-8 text-white/70" />
                </div>
                
                {/* Organic particles around node */}
                <div className="absolute -inset-4 border border-white/5 rounded-full animate-[spin_10s_linear_infinite] border-dashed" />
                <div className="absolute -inset-8 border border-white/5 rounded-full animate-[spin_15s_linear_reverse_infinite] border-dotted" />
              </div>

              <div className="mono text-[10px] text-white/40 mb-3 tracking-widest">{step.id}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
