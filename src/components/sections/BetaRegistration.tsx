'use client'
import { useState } from 'react'

export default function BetaRegistration() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    // Simulate API call or real Supabase integration here
    try {
      // Fake delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Assume success for now since we are in placeholder mode
      setSuccess(true)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="beta" className="py-24 bg-[#fafafa]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {!success ? (
          <div className="card rounded-3xl p-8 sm:p-12 border border-[#FF9933]/20 bg-white relative overflow-hidden">
            {/* Top tricolor edge */}
            <div className="absolute top-0 left-0 right-0 tricolor-bar"></div>
            
            <div className="text-center mb-10">
              <span className="section-label mb-3">Early Access</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
                Help Us Build Bharat Maps
              </h2>
              <p className="text-slate-500">
                Bharat Maps is currently being opened to early testers. Tell us what you think and what you would use it for before we scale it.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                  <input required id="name" name="name" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#FF9933] focus:ring-2 focus:ring-[#FF9933]/20 outline-none transition-all" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                  <input required id="email" name="email" type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#FF9933] focus:ring-2 focus:ring-[#FF9933]/20 outline-none transition-all" placeholder="you@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="city" className="text-sm font-medium text-slate-700">City</label>
                  <input required id="city" name="city" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#FF9933] focus:ring-2 focus:ring-[#FF9933]/20 outline-none transition-all" placeholder="e.g. Pune" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="device" className="text-sm font-medium text-slate-700">Android Device Model</label>
                  <input required id="device" name="device" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#FF9933] focus:ring-2 focus:ring-[#FF9933]/20 outline-none transition-all" placeholder="e.g. Samsung Galaxy S23" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="feature" className="text-sm font-medium text-slate-700">Which feature interests you most?</label>
                <select required id="feature" name="feature" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#FF9933] focus:ring-2 focus:ring-[#FF9933]/20 outline-none transition-all bg-white">
                  <option value="" disabled selected>Select an option...</option>
                  <option value="offline_messaging">Offline Messaging</option>
                  <option value="sos">SOS Signals</option>
                  <option value="navigation">Offline Navigation</option>
                  <option value="location">Location Sharing</option>
                  <option value="mesh">Mesh Networking</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="usecase" className="text-sm font-medium text-slate-700">How would you use Bharat Maps?</label>
                <textarea required id="usecase" name="usecase" rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#FF9933] focus:ring-2 focus:ring-[#FF9933]/20 outline-none transition-all resize-none" placeholder="Tell us about your use case..."></textarea>
              </div>

              {error && (
                <div className="p-4 rounded-lg bg-red-50 text-red-600 text-sm border border-red-100">
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full btn-primary py-4 rounded-xl text-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Join the Beta'}
              </button>
            </form>
          </div>
        ) : (
          <div className="card rounded-3xl p-10 sm:p-16 border border-[#138808]/20 bg-white text-center">
            <div className="w-20 h-20 bg-[#138808]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">✅</span>
            </div>
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">You're on the early-access list.</h2>
            <p className="text-slate-500 mb-8 max-w-md mx-auto">
              Thank you for signing up. We'll use community feedback to improve Bharat Maps before a wider release. We will email you when your access is ready.
            </p>
            <button onClick={() => setSuccess(false)} className="text-[#FF9933] font-medium hover:underline">
              Submit another response
            </button>
          </div>
        )}

      </div>
    </section>
  )
}
