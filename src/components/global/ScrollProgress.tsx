'use client'
import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'network', label: 'NETWORK' },
  { id: 'features', label: 'FEATURES' },
  { id: 'how-it-works', label: 'HOW IT WORKS' },
  { id: 'sos', label: 'SOS' },
  { id: 'navigation', label: 'NAVIGATION' },
  { id: 'community', label: 'COMMUNITY' },
  { id: 'download', label: 'DOWNLOAD' }
]

export default function ScrollProgress() {
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Simplistic intersection observation logic using scroll position
      // In a real robust setup, we'd use IntersectionObserver
      const scrollPos = window.scrollY + window.innerHeight / 3
      
      let currentIdx = 0
      for (let i = 0; i < SECTIONS.length; i++) {
        const el = document.getElementById(SECTIONS[i].id)
        if (el && el.offsetTop <= scrollPos) {
          currentIdx = i
        }
      }
      setActiveIdx(currentIdx)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Initial check
    setTimeout(handleScroll, 100)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-1">
      {SECTIONS.map((section, idx) => {
        const isActive = idx === activeIdx
        return (
          <div key={section.id} className="flex items-center gap-3 group relative h-6">
            <span className={`text-[9px] font-mono font-bold tracking-widest transition-all duration-300 absolute right-6 whitespace-nowrap ${isActive ? 'text-[var(--text-primary)] opacity-100' : 'text-[var(--text-tertiary)] opacity-0 group-hover:opacity-100'}`}>
              0{idx + 1} {section.label}
            </span>
            <div className={`w-[2px] transition-all duration-300 ${isActive ? 'h-full bg-[var(--navy-nav)]' : 'h-1/2 bg-[var(--border-medium)] group-hover:h-full group-hover:bg-[var(--text-tertiary)]'}`} />
          </div>
        )
      })}
    </div>
  )
}
