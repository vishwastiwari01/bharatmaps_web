'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Define fixed nodes for the topology
const NODES = [
  { id: 'DEL', x: 30, y: 25, devices: 145, relays: 12 },
  { id: 'MUM', x: 22, y: 60, devices: 210, relays: 18 },
  { id: 'BLR', x: 35, y: 80, devices: 180, relays: 15 },
  { id: 'KOL', x: 75, y: 45, devices: 95,  relays: 8 },
  { id: 'HYD', x: 40, y: 65, devices: 120, relays: 10 },
  { id: 'CHD', x: 28, y: 15, devices: 45,  relays: 3 },
  { id: 'JAI', x: 20, y: 35, devices: 60,  relays: 5 },
  { id: 'LKO', x: 45, y: 35, devices: 85,  relays: 7 },
  { id: 'PUN', x: 24, y: 65, devices: 110, relays: 9 },
  { id: 'CHN', x: 42, y: 85, devices: 130, relays: 11 },
  { id: 'GWH', x: 85, y: 35, devices: 35,  relays: 2 },
  { id: 'SRI', x: 22, y: 5,  devices: 20,  relays: 1 },
]

// Connections between nodes
const CONNECTIONS = [
  ['DEL', 'CHD'], ['DEL', 'JAI'], ['DEL', 'LKO'],
  ['MUM', 'PUN'], ['MUM', 'HYD'], ['PUN', 'BLR'],
  ['BLR', 'CHN'], ['BLR', 'HYD'], ['HYD', 'CHN'],
  ['LKO', 'KOL'], ['KOL', 'GWH'], ['MUM', 'JAI']
]

export default function InteractiveMap() {
  const [hoveredNode, setHoveredNode] = useState<typeof NODES[0] | null>(null)
  const [pulseNode, setPulseNode] = useState<string>('MUM')

  // Rotate pulsing node
  useEffect(() => {
    const interval = setInterval(() => {
      const randomNode = NODES[Math.floor(Math.random() * NODES.length)].id
      setPulseNode(randomNode)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full aspect-square max-w-[600px] mx-auto">
      {/* SVG Container */}
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl" preserveAspectRatio="xMidYMid meet">
        {/* Actual India Map Image */}
        <image 
          href="/India.png" 
          x="10" y="5" 
          width="80" height="90" 
          opacity="0.15" 
          style={{ mixBlendMode: 'multiply' }}
        />

        {/* Draw connections */}
        {CONNECTIONS.map(([n1, n2], idx) => {
          const p1 = NODES.find(n => n.id === n1)
          const p2 = NODES.find(n => n.id === n2)
          if(!p1 || !p2) return null
          
          const isPulse = pulseNode === n1 || pulseNode === n2
          const isHovered = hoveredNode?.id === n1 || hoveredNode?.id === n2

          return (
            <motion.line
              key={`${n1}-${n2}`}
              x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
              stroke={isHovered ? "var(--saffron)" : (isPulse ? "var(--navy-nav)" : "rgba(7, 26, 45, 0.1)")}
              strokeWidth={isHovered ? 0.4 : 0.2}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: idx * 0.1 }}
            />
          )
        })}

        {/* Draw nodes */}
        {NODES.map((node) => {
          const isHovered = hoveredNode?.id === node.id
          const isPulse = pulseNode === node.id

          return (
            <g 
              key={node.id} 
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
              className="cursor-pointer outline-none"
              data-cursor="target"
            >
              {isPulse && (
                <motion.circle 
                  cx={node.x} cy={node.y} r={4} 
                  fill="none" 
                  stroke="var(--green)" 
                  strokeWidth="0.2"
                  initial={{ scale: 0.5, opacity: 1 }}
                  animate={{ scale: 3, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
              )}
              
              <circle 
                cx={node.x} cy={node.y} 
                r={isHovered ? 1.5 : 1} 
                fill={isHovered ? "var(--saffron)" : "var(--navy-ashoka)"} 
                className="transition-all duration-300"
              />
            </g>
          )
        })}
      </svg>

      {/* Floating Tooltip */}
      <AnimatePresence>
        {hoveredNode && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute z-20 bg-white/95 backdrop-blur shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-[var(--border-medium)] rounded-lg p-3 pointer-events-none"
            style={{
              left: `${hoveredNode.x}%`,
              top: `${hoveredNode.y}%`,
              transform: 'translate(-50%, -120%)'
            }}
          >
            <div className="flex items-center gap-2 mb-2 border-b border-[var(--border-subtle)] pb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" />
              <span className="mono text-[10px] font-bold text-[var(--text-primary)]">NODE {hoveredNode.id}</span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between gap-6">
                <span className="text-[10px] text-[var(--text-secondary)]">Nearby devices</span>
                <span className="mono text-[10px] font-bold text-[var(--text-primary)]">{hoveredNode.devices}</span>
              </div>
              <div className="flex justify-between gap-6">
                <span className="text-[10px] text-[var(--text-secondary)]">Relay paths</span>
                <span className="mono text-[10px] font-bold text-[var(--text-primary)]">{hoveredNode.relays}</span>
              </div>
              <div className="flex justify-between gap-6">
                <span className="text-[10px] text-[var(--text-secondary)]">Signal</span>
                <span className="mono text-[10px] font-bold text-[var(--green)]">ACTIVE</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
