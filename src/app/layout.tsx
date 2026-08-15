import type { Metadata } from 'next'
import './globals.css'
import CursorProvider from '@/components/global/CursorProvider'
import ScrollProgress from '@/components/global/ScrollProgress'
import CommandPalette from '@/components/global/CommandPalette'

export const metadata: Metadata = {
  title: 'Bharat Maps | Stay connected. Even when you\'re offline.',
  description: 'Bharat Maps combines BLE, mesh networking, offline maps and GPS to keep people connected when conventional connectivity isn\'t available.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-[#1264D6] selection:text-white">
        <CursorProvider>
          <CommandPalette />
          <ScrollProgress />
          {children}
        </CursorProvider>
      </body>
    </html>
  )
}
