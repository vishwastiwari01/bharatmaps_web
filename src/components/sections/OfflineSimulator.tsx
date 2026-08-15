'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Wifi, WifiOff, Map, Navigation, Bluetooth, Waypoints } from 'lucide-react'

export default function OfflineSimulator() {
  const [isOffline, setIsOffline] = useState(false)
  const [messageStep, setMessageStep] = useState(-1)

  useEffect(() => {
    if (isOffline) {
      let step = 0
      setMessageStep(0)
      const interval = setInterval(() => {
        step++
        setMessageStep(step)
        if (step > 3) clearInterval(interval)
      }, 1000)
      return () => clearInterval(interval)
    } else {
      setMessageStep(-1)
    }
  }, [isOffline])

  return (
    <section className="py-32 bg-[var(--bg-primary)] overflow-hidden relative border-t border-[var(--border-subtle)]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.10] pointer-events-none"
        style={{ backgroundImage: "url('/background.png')" }}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 font-bold tracking-tight">
            What still works when the internet doesn't?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] font-medium max-w-2xl mx-auto">
            Experience how Bharat Maps relies on local hardware protocols to maintain a communication layer when cell towers go dark.
          </p>
        </div>

        {/* Simulator Container */}
        <div className="bg-[#05101E] text-white border border-[var(--border-subtle)] rounded-3xl p-6 sm:p-12 relative overflow-hidden shadow-2xl">
          
          {/* Top Toggle Area */}
          <div className="flex flex-col items-center mb-16 relative z-10">
            <span className="mono text-[11px] font-bold tracking-widest text-white/50 mb-4">
              SIMULATION TOGGLE
            </span>
            
            <button
              onClick={() => setIsOffline(!isOffline)}
              className={`flex items-center gap-4 px-6 py-3 rounded-2xl border-2 transition-all duration-500 shadow-sm ${
                isOffline 
                  ? 'border-[var(--saffron)] bg-white text-black' 
                  : 'border-[var(--navy-nav)] bg-[#071A2D] text-white hover:bg-[#0b2440]'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-bold text-[15px]">INTERNET</span>
                <div className={`px-3 py-1 rounded text-xs font-mono font-bold transition-colors ${
                  isOffline ? 'bg-red-50 text-red-600' : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {isOffline ? 'OFFLINE' : 'CONNECTED'}
                </div>
              </div>
              <div className="w-[1px] h-6 bg-[var(--border-subtle)] opacity-50" />
              {isOffline ? <WifiOff className="w-5 h-5 text-red-600" /> : <Wifi className="w-5 h-5 text-blue-400" />}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[350px]">
            
            {/* Status Panel */}
            <div className="space-y-4 relative z-10 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
              <h3 className="mono text-[10px] font-bold tracking-widest text-white/50 mb-6 border-b border-white/10 pb-2">
                SYSTEM CAPABILITIES
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <WifiOff className="w-4 h-4 text-white/50" />
                    <span className="font-medium text-[14px]">Internet</span>
                  </div>
                  <span className={`mono text-[10px] font-bold ${isOffline ? 'text-red-500' : 'text-blue-400'}`}>
                    {isOffline ? 'OFFLINE' : 'ACTIVE'}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Navigation className="w-4 h-4 text-white/50" />
                    <span className="font-medium text-[14px]">GPS / GNSS</span>
                  </div>
                  <span className="mono text-[10px] font-bold text-[#3DDC84]">ACTIVE</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Bluetooth className="w-4 h-4 text-white/50" />
                    <span className="font-medium text-[14px]">Bluetooth LE</span>
                  </div>
                  <span className="mono text-[10px] font-bold text-[#3DDC84]">ACTIVE</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Waypoints className="w-4 h-4 text-white/50" />
                    <span className="font-medium text-[14px]">Mesh Protocol</span>
                  </div>
                  <span className={`mono text-[10px] font-bold ${isOffline ? 'text-[var(--saffron)] animate-pulse' : 'text-white/30'}`}>
                    {isOffline ? 'ROUTING' : 'STANDBY'}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Map className="w-4 h-4 text-white/50" />
                    <span className="font-medium text-[14px]">Offline Maps</span>
                  </div>
                  <span className="mono text-[10px] font-bold text-[#3DDC84]">AVAILABLE</span>
                </div>
              </div>
            </div>

            {/* Network Visualization */}
            <div className="relative h-full min-h-[300px] flex items-center justify-center">
              
              {/* Mesh grid background */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] opacity-10" />

              {/* Devices */}
              <div className="relative w-full h-full max-w-[300px] max-h-[300px] z-20">
                {/* Lines */}
                <div className={`absolute inset-0 transition-opacity duration-1000 ${isOffline ? 'opacity-100' : 'opacity-10'}`}>
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                    <motion.path 
                      d="M15,50 L50,15 L85,50 L50,85 Z" 
                      fill="none" 
                      stroke="var(--saffron)" 
                      strokeWidth="0.5" 
                      strokeDasharray="2 2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isOffline ? 0.5 : 0 }}
                      transition={{ duration: 1 }}
                    />
                  </svg>
                </div>

                {/* Nodes */}
                {[
                  { id: 'PHONE A', x: '0%', y: '50%' },
                  { id: 'PHONE B', x: '50%', y: '0%' },
                  { id: 'PHONE C', x: '50%', y: '100%' },
                  { id: 'PHONE D', x: '100%', y: '50%' }
                ].map((node, i) => (
                  <div key={node.id} className="absolute flex flex-col items-center" style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)' }}>
                    <div className={`w-10 h-16 rounded-lg border-2 bg-[#071A2D] flex items-center justify-center transition-all ${
                      isOffline 
                        ? (messageStep >= i ? 'border-[var(--saffron)] shadow-[0_0_15px_rgba(255,122,0,0.4)]' : 'border-white/20') 
                        : 'border-[#1264D6]/50 shadow-[0_0_15px_rgba(18,100,214,0.2)]'
                    }`}>
                      {isOffline ? <Bluetooth className={`w-3 h-3 ${messageStep >= i ? 'text-[var(--saffron)]' : 'text-white/30'}`} /> : <Wifi className="w-3 h-3 text-[#1264D6]" />}
                    </div>
                    <span className="mono text-[8px] font-bold mt-2 text-white/70">{node.id}</span>
                  </div>
                ))}

                {/* Traveling Message Packet */}
                <AnimatePresence>
                  {isOffline && messageStep >= 0 && messageStep <= 3 && (
                    <motion.div
                      className="absolute w-3 h-3 rounded-full bg-[var(--saffron)] shadow-[0_0_15px_var(--saffron)] z-30"
                      initial={{ left: '0%', top: '50%', x: '-50%', y: '-50%', scale: 0 }}
                      animate={{ 
                        left: messageStep === 1 ? '50%' : (messageStep === 2 ? '50%' : (messageStep === 3 ? '100%' : '0%')),
                        top: messageStep === 1 ? '0%' : (messageStep === 2 ? '100%' : '50%'),
                        scale: 1 
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
