'use client'

import { useEffect, useState } from 'react'

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Show preloader for 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 bg-background z-50 flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="text-center">
        <h1 className="font-serif text-6xl font-bold text-primary animate-fade-in-up">
          LUXE
        </h1>
        <p className="font-body text-primary mt-4 text-sm tracking-widest uppercase opacity-60">
          Fine Dining
        </p>
      </div>
    </div>
  )
}
