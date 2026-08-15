'use client'
import { useState } from 'react'
import { Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const OPTIONS = [
  'Messaging',
  'SOS',
  'Navigation',
  'Travel',
  'Family',
  'Groups',
  'Rural Connectivity'
]

export default function CommunityPoll() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section id="community" className="py-32 bg-[var(--bg-secondary)] border-y border-[var(--border-subtle)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="mono text-[11px] font-bold tracking-widest text-[var(--saffron)] mb-4 block uppercase">
            COMMUNITY TESTING
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            What would you use Bharat Maps for?
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            Help shape the network. Tell us your primary use case to guide development priorities.
          </p>
        </div>

        <div className="space-y-3">
          {OPTIONS.map((opt) => {
            const isSelected = selected === opt
            
            return (
              <div 
                key={opt}
                onClick={() => setSelected(opt)}
                className={`relative flex items-center justify-between p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? 'border-[var(--saffron)] bg-white shadow-lg scale-[1.02] z-10' 
                    : 'border-[var(--border-subtle)] bg-[var(--bg-primary)] hover:border-[var(--border-medium)]'
                }`}
              >
                <span className={`text-xl font-bold transition-colors ${isSelected ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                  {opt}
                </span>

                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  isSelected ? 'bg-[var(--saffron)] text-white' : 'bg-[var(--bg-secondary)] border border-[var(--border-subtle)]'
                }`}>
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <Check className="w-4 h-4" strokeWidth={3} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )
          })}
        </div>
        
        {selected && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-center text-sm font-medium text-[var(--text-secondary)]"
          >
            Thank you for your feedback. Real aggregated results will be shown here once data collection concludes.
          </motion.div>
        )}

      </div>
    </section>
  )
}
