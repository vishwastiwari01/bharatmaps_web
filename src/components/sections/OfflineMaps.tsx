'use client'

export default function OfflineMaps() {
  return (
    <section id="offline-maps" className="py-24 bg-[#0a1122]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#0d1b2a] to-[#040814] border border-white/10 p-8 lg:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Topographic map lines background effect */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, #FF9933 0%, transparent 50%)' }}></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                India In Your Pocket.<br />
                <span className="text-[#FF9933]">Even Offline.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-lg">
                Download or store the map data you need and navigate without continuously depending on mobile internet.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-[#FF9933] text-2xl mt-1">🗺️</div>
                  <div>
                    <h4 className="text-white font-semibold">Offline Maps</h4>
                    <p className="text-slate-400 text-sm">Download and use maps without internet.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-[#FF9933] text-2xl mt-1">📍</div>
                  <div>
                    <h4 className="text-white font-semibold">GPS Navigation</h4>
                    <p className="text-slate-400 text-sm">Navigate with GPS, not mobile data.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-[#FF9933] text-2xl mt-1">👥</div>
                  <div>
                    <h4 className="text-white font-semibold">Save Data, Stay Independent</h4>
                    <p className="text-slate-400 text-sm">No internet? No problem.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-mono font-medium">
                GPS ≠ Internet
              </div>
              <p className="text-xs text-slate-500 mt-3 max-w-sm">
                GPS/GNSS can determine location independently of mobile internet, while Bharat Maps provides the offline map and local communication layer.
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-end relative">
              {/* Mockup of phone with map */}
              <div className="w-[300px] h-[550px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl relative overflow-hidden flex flex-col">
                <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 rounded-b-xl w-32 mx-auto z-20"></div>
                
                {/* Fake map UI */}
                <div className="flex-1 bg-[#1a2333] relative">
                  {/* Grid lines */}
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#2a3b5c 1px, transparent 1px), linear-gradient(90deg, #2a3b5c 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  
                  {/* Route line */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 500">
                    <path d="M 50,400 Q 100,300 150,250 T 250,100" fill="none" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="50" cy="400" r="8" fill="#FF9933" />
                    <circle cx="250" cy="100" r="8" fill="#138808" />
                  </svg>

                  {/* UI Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-800/90 backdrop-blur-md rounded-2xl p-4 border border-slate-700">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-white font-bold">Navigating to Base Camp</div>
                      <div className="text-xs font-mono text-[#138808] bg-[#138808]/20 px-2 py-1 rounded">OFFLINE</div>
                    </div>
                    <div className="text-slate-400 text-sm">4.2 km • 1h 15m</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
