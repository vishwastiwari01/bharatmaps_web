export default function Privacy() {
  return (
    <section id="safety" className="py-32 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] text-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.10] pointer-events-none"
        style={{ backgroundImage: "url('/background.png')" }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="w-16 h-16 mx-auto bg-white border border-[var(--border-subtle)] rounded-2xl flex items-center justify-center shadow-sm mb-8">
          <svg className="w-8 h-8 text-[var(--text-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-6 tracking-tight">
          Your location belongs to you.
        </h2>
        
        <p className="text-lg text-[var(--text-secondary)] font-medium leading-relaxed max-w-2xl mx-auto">
          Bharat Maps operates primarily offline. Local mesh communications are encrypted end-to-end. We do not track your location, and we do not store your message history on centralized servers.
        </p>

      </div>
    </section>
  )
}
