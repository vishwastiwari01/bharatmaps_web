'use client'
import { useEffect, useRef, useState } from 'react'

// City nodes on India map (normalized 0-1 coordinates within SVG viewBox)
const CITY_NODES = [
  { id: 'del', x: 295, y: 178, label: 'Delhi', size: 6 },
  { id: 'mum', x: 210, y: 310, label: 'Mumbai', size: 5 },
  { id: 'ban', x: 255, y: 405, label: 'Bengaluru', size: 5 },
  { id: 'che', x: 295, y: 420, label: 'Chennai', size: 4 },
  { id: 'hyd', x: 270, y: 360, label: 'Hyderabad', size: 4 },
  { id: 'kol', x: 380, y: 255, label: 'Kolkata', size: 5 },
  { id: 'pun', x: 235, y: 165, label: 'Pune', size: 3 },
  { id: 'jai', x: 255, y: 200, label: 'Jaipur', size: 3 },
  { id: 'luc', x: 325, y: 210, label: 'Lucknow', size: 3 },
  { id: 'pat', x: 360, y: 230, label: 'Patna', size: 3 },
  { id: 'cha', x: 255, y: 130, label: 'Chandigarh', size: 2 },
  { id: 'bho', x: 280, y: 255, label: 'Bhopal', size: 3 },
  { id: 'nag', x: 295, y: 290, label: 'Nagpur', size: 3 },
  { id: 'coc', x: 240, y: 450, label: 'Kochi', size: 3 },
  { id: 'guw', x: 415, y: 205, label: 'Guwahati', size: 3 },
]

const MESH_CONNECTIONS = [
  ['del', 'cha'], ['del', 'jai'], ['del', 'luc'],
  ['luc', 'pat'], ['pat', 'kol'], ['kol', 'guw'],
  ['mum', 'pun'], ['pun', 'hyd'], ['hyd', 'ban'],
  ['ban', 'che'], ['ban', 'coc'],
  ['bho', 'nag'], ['nag', 'hyd'], ['del', 'bho'],
  ['luc', 'pat'], ['mum', 'bho'],
]

const SOS_PATH = ['ban', 'hyd', 'nag', 'bho', 'del']

export default function IndiaMapViz() {
  const [sosStep, setSosStep] = useState(-1)
  const [activeMeshLines, setActiveMeshLines] = useState<number[]>([])
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const sosIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    // Animate mesh lines appearing one by one
    let idx = 0
    intervalRef.current = setInterval(() => {
      setActiveMeshLines((prev) => {
        if (idx < MESH_CONNECTIONS.length) {
          idx++
          return [...prev, idx - 1]
        }
        return prev
      })
      if (idx >= MESH_CONNECTIONS.length) {
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
    }, 200)

    // SOS propagation loop
    const startSOS = () => {
      setSosStep(0)
      let step = 0
      sosIntervalRef.current = setInterval(() => {
        step++
        if (step >= SOS_PATH.length) {
          setTimeout(() => {
            setSosStep(-1)
            setTimeout(startSOS, 2000)
          }, 800)
          if (sosIntervalRef.current) clearInterval(sosIntervalRef.current)
        } else {
          setSosStep(step)
        }
      }, 700)
    }

    const sosTimeout = setTimeout(startSOS, 3000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (sosIntervalRef.current) clearInterval(sosIntervalRef.current)
      clearTimeout(sosTimeout)
    }
  }, [])

  const getNode = (id: string) => CITY_NODES.find((n) => n.id === id)!
  const isSOSActive = (nodeId: string) => {
    const idx = SOS_PATH.indexOf(nodeId)
    return sosStep >= 0 && idx >= 0 && idx <= sosStep
  }
  const isSOSSource = (nodeId: string) => SOS_PATH[0] === nodeId && sosStep >= 0

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Label */}
      <div className="absolute top-2 left-2 z-10 font-mono text-[10px] text-slate-500 tracking-widest uppercase bg-[#05080f]/80 px-2 py-1 rounded border border-white/5">
        Conceptual network visualization
      </div>

      <svg
        viewBox="0 0 560 560"
        className="w-full h-auto india-map-glow"
        style={{ filter: 'drop-shadow(0 0 40px rgba(255,153,51,0.08))' }}
      >
        {/* India outline path - simplified but recognizable */}
        <path
          d="M 200 80 
             L 220 65 L 250 62 L 280 68 L 310 60 L 340 70 L 355 80 
             L 365 95 L 380 100 L 395 95 L 410 100 L 420 115
             L 415 130 L 425 145 L 430 165 L 425 185 L 420 200
             L 430 215 L 435 235 L 430 255 L 420 265
             L 415 280 L 420 295 L 410 310 L 400 320
             L 390 335 L 375 345 L 360 355 L 345 365
             L 330 375 L 315 390 L 300 405 L 290 420
             L 280 440 L 275 460 L 270 475 L 265 460
             L 258 448 L 250 435 L 240 420 L 230 405
             L 215 390 L 205 375 L 200 360 L 195 345
             L 185 330 L 178 315 L 175 300 L 170 285
             L 165 268 L 170 252 L 175 238 L 172 222
             L 168 208 L 170 192 L 165 178 L 168 162
             L 175 148 L 178 132 L 185 118 L 192 105 L 200 80Z"
          fill="rgba(255,153,51,0.04)"
          stroke="rgba(255,153,51,0.25)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Grid dots for map feel */}
        {Array.from({ length: 10 }, (_, i) =>
          Array.from({ length: 10 }, (_, j) => (
            <circle
              key={`dot-${i}-${j}`}
              cx={160 + j * 28}
              cy={100 + i * 38}
              r="0.8"
              fill="rgba(255,255,255,0.06)"
            />
          ))
        )}

        {/* Mesh connection lines */}
        {MESH_CONNECTIONS.map((conn, idx) => {
          const a = getNode(conn[0])
          const b = getNode(conn[1])
          const isActive = activeMeshLines.includes(idx)
          return (
            <line
              key={`conn-${idx}`}
              x1={a.x} y1={a.y}
              x2={b.x} y2={b.y}
              stroke={isActive ? 'rgba(255,153,51,0.3)' : 'transparent'}
              strokeWidth="1"
              strokeDasharray="4 3"
              style={{ transition: 'stroke 0.5s ease' }}
            />
          )
        })}

        {/* SOS propagation lines */}
        {SOS_PATH.slice(0, sosStep).map((nodeId, idx) => {
          const a = getNode(SOS_PATH[idx])
          const b = getNode(SOS_PATH[idx + 1])
          if (!b) return null
          return (
            <line
              key={`sos-line-${idx}`}
              x1={a.x} y1={a.y}
              x2={b.x} y2={b.y}
              stroke="rgba(239,68,68,0.8)"
              strokeWidth="2"
              strokeDasharray="6 2"
            />
          )
        })}

        {/* City nodes */}
        {CITY_NODES.map((node) => {
          const sosSrc = isSOSSource(node.id)
          const sosActive = isSOSActive(node.id)
          return (
            <g key={node.id}>
              {/* BLE pulse ring */}
              {sosActive && (
                <>
                  <circle cx={node.x} cy={node.y} r={node.size + 6}
                    fill="none" stroke="rgba(239,68,68,0.4)" strokeWidth="1"
                    style={{ animation: 'sos-ripple 1.2s ease-out infinite' }} />
                  <circle cx={node.x} cy={node.y} r={node.size + 12}
                    fill="none" stroke="rgba(239,68,68,0.2)" strokeWidth="0.8"
                    style={{ animation: 'sos-ripple 1.2s ease-out 0.3s infinite' }} />
                </>
              )}
              {!sosActive && (
                <circle cx={node.x} cy={node.y} r={node.size + 5}
                  fill="none" stroke="rgba(255,153,51,0.15)" strokeWidth="1"
                  style={{ animation: `ble-pulse ${2 + Math.random()}s ease-out infinite` }} />
              )}
              {/* Node dot */}
              <circle
                cx={node.x} cy={node.y} r={node.size}
                fill={sosSrc ? '#ef4444' : sosActive ? '#ef4444' : '#FF9933'}
                style={{
                  filter: sosSrc
                    ? 'drop-shadow(0 0 6px rgba(239,68,68,0.9))'
                    : 'drop-shadow(0 0 4px rgba(255,153,51,0.6))',
                }}
              />
              {/* Inner dot */}
              <circle cx={node.x} cy={node.y} r={node.size * 0.4}
                fill={sosActive ? '#fca5a5' : '#fff5e6'} />
            </g>
          )
        })}

        {/* SOS label */}
        {sosStep >= 0 && (
          <g>
            <rect x={getNode(SOS_PATH[0]).x - 18} y={getNode(SOS_PATH[0]).y - 26}
              width="36" height="14" rx="3"
              fill="rgba(239,68,68,0.9)" />
            <text x={getNode(SOS_PATH[0]).x} y={getNode(SOS_PATH[0]).y - 16}
              textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace" fontWeight="bold">
              SOS
            </text>
          </g>
        )}
      </svg>

      {/* Legend */}
      <div className="absolute bottom-3 right-3 space-y-1.5 text-right">
        <div className="flex items-center justify-end gap-1.5">
          <span className="text-[10px] text-slate-500 font-mono">DEVICE</span>
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF9933]" />
        </div>
        <div className="flex items-center justify-end gap-1.5">
          <span className="text-[10px] text-slate-500 font-mono">BLE MESH</span>
          <div className="w-5 h-px border-t border-dashed border-[#FF9933]/50" />
        </div>
        <div className="flex items-center justify-end gap-1.5">
          <span className="text-[10px] text-slate-500 font-mono">SOS</span>
          <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
        </div>
      </div>
    </div>
  )
}
