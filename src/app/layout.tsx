import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bharat Maps — Communication. Navigation. Safety. Without the Internet.',
  description: 'A decentralized offline network built for India — connecting nearby people through Bluetooth, mesh networking and offline maps. Launched on India\'s 80th Independence Day.',
  keywords: 'offline maps, mesh network, BLE, SOS, emergency communication, India, offline navigation, peer-to-peer',
  openGraph: {
    title: 'Bharat Maps — Offline Communication Network for India',
    description: 'When the internet disappears, the network doesn\'t have to. Bharat Maps connects nearby devices through Bluetooth mesh networking.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bharat Maps — Offline First. India First.',
    description: 'Offline communication, SOS, navigation and location sharing. No internet required.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
