import React from "react"
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lora } from 'next/font/google'

import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Luxe Dining - Fine Restaurant',
  description: 'Experience culinary excellence in a timeless, handcrafted atmosphere',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
  themeColor: '#0A0A0A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${lora.variable}`}>
      <body className="font-body antialiased bg-background text-foreground">{children}</body>
    </html>
  )
}
