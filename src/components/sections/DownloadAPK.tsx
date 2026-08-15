'use client'
import { useState } from 'react'
import { Download, CheckCircle2, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function DownloadAPK() {
  const [downloading, setDownloading] = useState(false)
  const [downloaded, setDownloaded] = useState(false)

  const handleDownload = () => {
    setDownloading(true)
    // Simulate download delay
    setTimeout(() => {
      setDownloading(false)
      setDownloaded(true)
      // Reset after a while
      setTimeout(() => setDownloaded(false), 5000)
    }, 2000)
  }

  return (
    <section id="download" className="py-32 bg-[var(--bg-primary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Bharat Maps for Android.
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
            Experience the early developer beta. Only install if you are comfortable testing pre-release software.
          </p>
        </div>

        {/* Polished Software Release Card */}
        <div className="glass-panel p-1 rounded-3xl max-w-2xl mx-auto shadow-2xl relative overflow-hidden">
          {/* Subtle gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--saffron)] via-[var(--bg-primary)] to-[var(--green)] opacity-20" />
          
          <div className="relative bg-[var(--bg-primary)] rounded-[22px] p-8 sm:p-12">
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12 border-b border-[var(--border-subtle)] pb-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Bharat Maps Beta</h3>
                <div className="flex items-center gap-3">
                  <span className="mono text-xs font-bold text-[var(--saffron)] bg-[var(--saffron)]/10 px-2 py-1 rounded">v0.1.0</span>
                  <span className="mono text-[10px] text-[var(--text-tertiary)] font-bold tracking-widest">RELEASED 15 AUG 2026</span>
                </div>
              </div>
              <div className="flex items-center gap-2 border border-[var(--border-medium)] px-3 py-1.5 rounded-lg bg-[var(--bg-secondary)]">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#3DDC84]" fill="currentColor">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0004.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.4162.4162 0 00-.5676.1521l-2.0221 3.503C15.545 8.1633 13.8242 7.747 12 7.747c-1.8242 0-3.545.4163-5.1374 1.203L4.8405 5.447a.4163.4163 0 00-.5676-.1521.4158.4158 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
                </svg>
                <span className="mono text-xs font-bold text-[var(--text-primary)]">ANDROID</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-6">
              
              <button
                onClick={handleDownload}
                disabled={downloading || downloaded}
                className="relative overflow-hidden group btn-primary w-full sm:w-auto min-w-[240px] h-14 rounded-xl flex items-center justify-center font-bold text-[15px]"
                data-cursor="expand"
              >
                <AnimatePresence mode="wait">
                  {downloading ? (
                    <motion.div
                      key="downloading"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span>DOWNLOADING...</span>
                    </motion.div>
                  ) : downloaded ? (
                    <motion.div
                      key="downloaded"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 text-[#3DDC84]"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span>DOWNLOADED</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      <span>DOWNLOAD APK</span>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Download Progress Bar Animation */}
                {downloading && (
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-[#3DDC84]"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "linear" }}
                  />
                )}
              </button>

              <div className="text-center w-full">
                <span className="mono text-[9px] font-bold text-[var(--text-tertiary)] block mb-1">SHA-256 CHECKSUM</span>
                <code className="mono text-[10px] text-[var(--text-secondary)] bg-[var(--bg-secondary)] px-3 py-1.5 rounded border border-[var(--border-subtle)] break-all select-all">
                  a1b2c3d4e5f67890a1b2c3d4e5f67890a1b2c3d4e5f67890a1b2c3d4e5f67890
                </code>
              </div>

              <a href="#install" className="flex items-center gap-1 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--navy-nav)] transition-colors group mt-2">
                Installation Guide <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
