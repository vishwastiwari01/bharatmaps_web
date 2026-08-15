'use client'

export default function Trust() {
  return (
    <section id="trust" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200">
          
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4">
              Built transparently.<br />
              Tested in the real world.
            </h2>
            <p className="text-slate-500 mb-6 leading-relaxed">
              Security and trust are fundamental to any communication platform. 
              We prioritize local-first communication, explicit permissions, and zero unnecessary cloud dependencies.
            </p>
            <a href="https://github.com/vishwastiwari01/bharatmaps_web" target="_blank" rel="noopener noreferrer" className="btn-outline px-6 py-2.5 rounded-lg text-sm bg-white">
              <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              View on GitHub
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-xl mb-2">🔒</div>
              <h4 className="font-bold text-[#0f172a] text-sm mb-1">Local-First</h4>
              <p className="text-xs text-slate-500">Your data stays on your device.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-xl mb-2">👁️</div>
              <h4 className="font-bold text-[#0f172a] text-sm mb-1">Explicit Consent</h4>
              <p className="text-xs text-slate-500">You control when to share.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-xl mb-2">📡</div>
              <h4 className="font-bold text-[#0f172a] text-sm mb-1">No Tracking</h4>
              <p className="text-xs text-slate-500">Zero unnecessary analytics.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-xl mb-2">🛡️</div>
              <h4 className="font-bold text-[#0f172a] text-sm mb-1">Transparent</h4>
              <p className="text-xs text-slate-500">Open development process.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
