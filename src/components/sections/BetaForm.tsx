'use client'
import { useState } from 'react'

export default function BetaForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    // Supabase integration placeholder
    setSubmitted(true)
  }

  return (
    <section id="beta" className="py-32 bg-[var(--bg-secondary)] border-y border-[var(--border-subtle)]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Request Beta Access</h2>
        <p className="text-[var(--text-secondary)] font-medium mb-12">
          We are slowly rolling out access to ensure network stability. Join the waitlist.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="relative w-full max-w-md mx-auto">
            {/* Uiverse inspired premium input */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--saffron)] to-[var(--green)] rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative flex items-center bg-white rounded-xl overflow-hidden border border-[var(--border-subtle)]">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 bg-transparent border-none py-4 px-6 text-sm outline-none placeholder:text-[var(--text-tertiary)] text-[var(--text-primary)]"
                />
                <button 
                  type="submit"
                  className="bg-[var(--navy-ashoka)] text-white font-bold text-xs px-6 py-4 transition-colors hover:bg-black"
                >
                  JOIN WAITLIST
                </button>
              </div>
            </div>
            <p className="text-xs text-[var(--text-tertiary)] mt-4 font-mono">
              Zero spam. Unsubscribe anytime.
            </p>
          </form>
        ) : (
          <div className="bg-white border border-[var(--border-medium)] rounded-xl p-8 max-w-md mx-auto shadow-lg">
            <div className="w-12 h-12 bg-[var(--green)]/10 text-[var(--green)] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-6 h-6">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">You're on the list.</h3>
            <p className="text-[var(--text-secondary)] text-sm">
              We'll notify {email} when the next batch of beta invites is sent out.
            </p>
          </div>
        )}

      </div>
    </section>
  )
}
