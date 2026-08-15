import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[var(--border-subtle)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 flex-shrink-0">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-60">
              <path d="M12 2C8.68629 2 6 4.68629 6 8C6 11.866 12 22 12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="8" r="3" fill="currentColor"/>
            </svg>
          </div>
          <span className="font-bold text-[14px] text-[var(--text-primary)]">Bharat Maps</span>
        </div>

        <div className="flex items-center gap-6">
          <Link href="#network" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Overview</Link>
          <Link href="#how-it-works" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Protocol</Link>
          <Link href="#community" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Beta</Link>
        </div>

        <div className="text-xs text-[var(--text-secondary)]">
          © {new Date().getFullYear()} Bharat Maps Project.
        </div>

      </div>
    </footer>
  )
}
