'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Command, ArrowRight } from 'lucide-react'

const LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Safety & SOS', href: '#sos' },
  { label: 'Join Beta', href: '#community' },
  { label: 'Download APK', href: '#download' },
  { label: 'Privacy', href: '#privacy' }
]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const filtered = LINKS.filter(l => l.label.toLowerCase().includes(query.toLowerCase()))

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-[var(--text-primary)]/20 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-1/4 left-1/2 -translate-x-1/2 w-full max-w-lg bg-[var(--bg-primary)] rounded-2xl shadow-2xl border border-[var(--border-subtle)] z-[101] overflow-hidden"
          >
            <div className="flex items-center px-4 border-b border-[var(--border-subtle)]">
              <Search className="w-5 h-5 text-[var(--text-tertiary)]" />
              <input 
                autoFocus
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search Bharat Maps..."
                className="w-full bg-transparent border-none py-5 px-4 outline-none text-[15px] font-medium text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)]"
              />
              <div className="flex items-center gap-1 border border-[var(--border-medium)] rounded px-1.5 py-0.5 text-[var(--text-tertiary)]">
                <Command className="w-3 h-3" />
                <span className="text-[10px] font-mono font-bold leading-none">K</span>
              </div>
            </div>

            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.length > 0 ? (
                filtered.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-[var(--bg-secondary)] transition-colors group cursor-pointer"
                  >
                    <span className="text-[14px] font-medium text-[var(--text-primary)]">{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-[var(--text-tertiary)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))
              ) : (
                <div className="px-4 py-8 text-center text-[14px] text-[var(--text-tertiary)]">
                  No results found.
                </div>
              )}
            </div>
            
            <div className="bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] px-4 py-3 flex items-center justify-between">
              <span className="text-[11px] font-medium text-[var(--text-tertiary)]">
                Navigate the network
              </span>
              <span className="text-[11px] font-mono text-[var(--text-tertiary)]">
                ESC to close
              </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
