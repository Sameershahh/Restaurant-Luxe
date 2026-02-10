'use client'

import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export function ParallaxSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (!inView) return

    const handleScroll = () => {
      const element = document.getElementById('parallax-section')
      if (element) {
        const rect = element.getBoundingClientRect()
        const offset = rect.top * 0.5
        setOffset(offset)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [inView])

  return (
    <section
      id="parallax-section"
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1504674900152-b8b528627246?w=1600&h=900&fit=crop")',
          transform: `translateY(${offset}px)`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl mx-auto animate-fade-in-up">
        <blockquote>
          <p className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight italic">
            "A meal is not just nourishment, it's an experience that touches all the senses and creates lasting memories."
          </p>
          <footer className="font-body text-foreground/80 text-sm tracking-widest uppercase">
            — Chef's Philosophy
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
