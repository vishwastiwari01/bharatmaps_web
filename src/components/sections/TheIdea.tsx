export default function TheIdea() {
  return (
    <section className="relative py-40 bg-white flex items-center justify-center text-center px-4 overflow-hidden">
      {/* Background.png gives this white section visual texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.12] pointer-events-none"
        style={{ backgroundImage: "url('/background.png')" }}
      />
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[var(--text-primary)]">
          The network doesn't have to end<br />
          when the internet does.
        </h2>
      </div>
    </section>
  )
}
