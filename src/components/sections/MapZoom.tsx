'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ZoomIn, ZoomOut, MousePointer2 } from 'lucide-react'

// Dummy map grid generation
const MESH_NODES = Array.from({ length: 40 }).map((_, i) => ({
  id: i,
  x: Math.random() * 800 + 100,
  y: Math.random() * 600 + 100,
  devices: Math.floor(Math.random() * 10) + 1,
  connections: Math.floor(Math.random() * 5) + 1
}))

// Create random connections (distance based)
const CONNECTIONS: [number, number][] = []
for (let i = 0; i < MESH_NODES.length; i++) {
  for (let j = i + 1; j < MESH_NODES.length; j++) {
    const dx = MESH_NODES[i].x - MESH_NODES[j].x
    const dy = MESH_NODES[i].y - MESH_NODES[j].y
    if (Math.sqrt(dx*dx + dy*dy) < 150) {
      if (Math.random() > 0.5) CONNECTIONS.push([i, j])
    }
  }
}

export default function MapZoom() {
  const [scale, setScale] = useState(1)
  const [activeNode, setActiveNode] = useState<typeof MESH_NODES[0] | null>(null)
  
  const handleZoomIn = () => setScale(s => Math.min(s * 1.5, 3))
  const handleZoomOut = () => setScale(s => Math.max(s / 1.5, 0.5))

  return (
    <section className="py-32 bg-[var(--bg-secondary)] border-y border-[var(--border-subtle)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Explore the local network.</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            A conceptual visualization of how devices form an organic, decentralized mesh across a geographic area.
          </p>
        </div>

        {/* Map Canvas Frame */}
        <div className="w-full max-w-5xl h-[600px] bg-white rounded-3xl border border-[var(--border-medium)] shadow-xl relative overflow-hidden flex flex-col">
          
          {/* Top Bar */}
          <div className="h-12 border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)] flex items-center justify-between px-4">
            <span className="mono text-[10px] font-bold text-[var(--text-tertiary)] tracking-widest">
              CONCEPTUAL NETWORK VISUALIZATION
            </span>
            <div className="flex gap-2">
              <button onClick={handleZoomOut} className="p-1.5 hover:bg-black/5 rounded text-[var(--text-secondary)]">
                <ZoomOut className="w-4 h-4" />
              </button>
              <button onClick={handleZoomIn} className="p-1.5 hover:bg-black/5 rounded text-[var(--text-secondary)]">
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Area */}
          <div className="flex-1 relative overflow-hidden cursor-move bg-[#f8fafc]">
            <motion.div 
              drag
              dragConstraints={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
              animate={{ scale }}
              className="absolute inset-0 w-[1000px] h-[800px] origin-center"
              style={{ x: 'calc(50% - 500px)', y: 'calc(50% - 400px)' }}
            >
              
              {/* Render Connections */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {CONNECTIONS.map(([n1, n2], idx) => {
                  const p1 = MESH_NODES[n1]
                  const p2 = MESH_NODES[n2]
                  return (
                    <line 
                      key={idx}
                      x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
                      stroke="var(--border-medium)"
                      strokeWidth={1 / scale}
                    />
                  )
                })}
              </svg>

              {/* Render Nodes */}
              {MESH_NODES.map((node) => (
                <div 
                  key={node.id}
                  className="absolute group cursor-pointer"
                  style={{ left: node.x, top: node.y, transform: `translate(-50%, -50%) scale(${1/scale})` }}
                  onMouseEnter={() => setActiveNode(node)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  {/* Subtle pulse for larger nodes */}
                  {node.devices > 5 && (
                    <div className="absolute inset-0 bg-[var(--saffron)] opacity-20 rounded-full animate-ping" style={{ transform: 'scale(3)' }} />
                  )}
                  
                  <div className={`w-3 h-3 rounded-full border-2 border-white shadow-sm transition-all duration-300 ${
                    activeNode?.id === node.id ? 'bg-[var(--navy-nav)] scale-150' : (node.devices > 5 ? 'bg-[var(--saffron)]' : 'bg-[var(--navy-ashoka)]')
                  }`} />
                </div>
              ))}
            </motion.div>

            {/* Hover Data Panel (Overlay) */}
            {activeNode && (
              <div className="absolute bottom-6 left-6 glass-panel p-5 rounded-2xl shadow-xl w-64 pointer-events-none transition-all">
                <div className="flex items-center gap-2 mb-4 border-b border-[var(--border-subtle)] pb-3">
                  <MousePointer2 className="w-4 h-4 text-[var(--saffron)]" />
                  <span className="mono text-[11px] font-bold tracking-widest text-[var(--text-primary)]">
                    BHARAT NODE
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-[var(--text-secondary)]">Devices nearby</span>
                    <span className="mono text-sm font-bold">{String(activeNode.devices).padStart(2, '0')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-[var(--text-secondary)]">Mesh connections</span>
                    <span className="mono text-sm font-bold">{String(activeNode.connections).padStart(2, '0')}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t border-[var(--border-subtle)]">
                    <span className="text-xs font-medium text-[var(--text-secondary)]">GPS</span>
                    <span className="mono text-[10px] font-bold text-[var(--green)]">ACTIVE</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-[var(--text-secondary)]">Network</span>
                    <span className="mono text-[10px] font-bold text-[var(--text-primary)]">LOCAL</span>
                  </div>
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </section>
  )
}
