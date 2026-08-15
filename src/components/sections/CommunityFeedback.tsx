'use client'
import { useState } from 'react'

export default function CommunityFeedback() {
  const [voted, setVoted] = useState(false)

  const handleVote = () => {
    // Fake vote simulation
    setVoted(true)
  }

  return (
    <section id="community" className="py-24 bg-white border-t border-slate-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-label mb-4 block w-fit mx-auto" style={{ color: '#0f172a', background: '#f1f5f9', borderColor: '#cbd5e1' }}>
            Community Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            Before We Go Further,<br />
            We Want Your Opinion.
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
            Bharat Maps is built by and for the community. Tell us if we are building the right thing.
          </p>
        </div>

        <div className="card rounded-3xl p-6 sm:p-10 border border-slate-200">
          <h3 className="text-xl font-bold text-[#0f172a] mb-6 text-center">Would you use Bharat Maps?</h3>
          
          {!voted ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button onClick={handleVote} className="py-4 px-6 rounded-2xl border-2 border-[#138808]/20 bg-[#138808]/5 hover:bg-[#138808]/10 hover:border-[#138808]/40 transition-all font-bold text-[#138808]">
                YES
              </button>
              <button onClick={handleVote} className="py-4 px-6 rounded-2xl border-2 border-[#FF9933]/20 bg-[#FF9933]/5 hover:bg-[#FF9933]/10 hover:border-[#FF9933]/40 transition-all font-bold text-[#FF9933]">
                MAYBE
              </button>
              <button onClick={handleVote} className="py-4 px-6 rounded-2xl border-2 border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-slate-300 transition-all font-bold text-slate-600">
                NO
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 font-bold text-[#138808]">YES</div>
                <div className="flex-1 h-6 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#138808] w-[85%]"></div>
                </div>
                <div className="w-12 text-right font-mono text-sm text-slate-500">85%</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 font-bold text-[#FF9933]">MAYBE</div>
                <div className="flex-1 h-6 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#FF9933] w-[12%]"></div>
                </div>
                <div className="w-12 text-right font-mono text-sm text-slate-500">12%</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 font-bold text-slate-600">NO</div>
                <div className="flex-1 h-6 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-300 w-[3%]"></div>
                </div>
                <div className="w-12 text-right font-mono text-sm text-slate-500">3%</div>
              </div>
              <p className="text-center text-sm text-slate-400 mt-6 pt-6 border-t border-slate-100">
                Thank you for your response.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
