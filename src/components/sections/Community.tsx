'use client'
import { useState } from 'react'
import { submitBetaRegistration } from '@/lib/actions'

export default function Community() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    use_case: 'Trekking & Adventure',
    device_model: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    try {
      await submitBetaRegistration({
        name: formData.name,
        email: formData.email,
        device_model: formData.device_model,
        use_case: formData.use_case,
        city: '',
        state: '',
        feature_interest: '',
        would_test: '',
        feedback: ''
      })
      setSubmitted(true)
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="community" className="relative py-32 bg-[#04101f] overflow-hidden">
      
      {/* India network background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 pointer-events-none"
        style={{ backgroundImage: "url('/background.png')" }}
      />
      {/* Left gradient so form is readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#04101f]/95 via-[#04101f]/80 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Help build the network.
          </h2>
          <p className="text-lg text-white/60 font-medium">
            Join the beta, test the application, and contribute to the protocol.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Name</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--saffron)] transition-all" 
                    placeholder="Enter your name" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--saffron)] transition-all" 
                    placeholder="you@example.com" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Primary Use Case</label>
                <select 
                  value={formData.use_case}
                  onChange={(e) => setFormData({...formData, use_case: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[var(--saffron)] transition-all"
                >
                  <option>Trekking & Adventure</option>
                  <option>Disaster Relief & NGO</option>
                  <option>Rural Operations</option>
                  <option>Festival / Event Management</option>
                  <option>General Interest</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Device Model</label>
                <input 
                  type="text" 
                  required 
                  value={formData.device_model}
                  onChange={(e) => setFormData({...formData, device_model: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--saffron)] transition-all" 
                  placeholder="e.g. Google Pixel 7" 
                />
              </div>

              {error && (
                <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                  {error}
                </div>
              )}

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full btn-primary py-4 rounded-xl text-[15px] shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Request Beta Access'}
                </button>
              </div>
              <p className="text-center text-xs text-white/30 mt-4">
                By requesting access, you agree to participate in testing and provide feedback.
              </p>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-[var(--green)]/20 border border-[var(--green)]/40 rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--green)] text-2xl font-bold">✓</div>
              <h3 className="text-2xl font-bold text-white mb-2">Request Received</h3>
              <p className="text-white/60">We will notify you when a spot opens up in the beta program.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
