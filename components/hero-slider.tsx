'use client'

import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

const heroSlides = [
  {
    id: 1,
    subtitle: 'Culinary Excellence',
    title: 'An Unforgettable\nDining Experience',
    description: 'Discover the finest ingredients prepared by world-class chefs in an intimate, timeless setting.',
    image: 'https://plus.unsplash.com/premium_photo-1674106347866-8282d8c19f84?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    subtitle: 'Premium Atmosphere',
    title: 'Elegance\nRedefined',
    description: 'Step into our sanctuary of refined hospitality where every detail celebrates luxury and comfort.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    subtitle: 'Seasonal Creations',
    title: 'Crafted with\nPassion',
    description: 'Each plate tells a story of tradition, innovation, and our commitment to culinary perfection.',
    image: 'https://images.unsplash.com/photo-1644447381290-85358ae625cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden pt-20">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${slide.image}')`,
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <p className="font-body text-primary text-sm tracking-widest uppercase mb-4">
            {heroSlides[currentSlide].subtitle}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight whitespace-pre-line text-balance">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="font-body text-foreground/80 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            {heroSlides[currentSlide].description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <button className="px-8 py-3 bg-primary text-background font-body text-sm hover:opacity-90 transition-opacity duration-300">
              Explore Menu
            </button>
            <button className="px-8 py-3 border border-primary text-primary font-body text-sm hover:bg-primary hover:text-background transition-all duration-300">
              Make Reservation
            </button>
          </div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary w-8' : 'bg-foreground/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-foreground/60" />
      </div>
    </div>
  )
}
