'use client'

import { useInView } from 'react-intersection-observer'

export function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section
      id="about"
      ref={ref}
      className="py-28 bg-card px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Chef Image */}
          <div
            className={`aspect-video md:aspect-[4/5] bg-foreground/10 rounded-sm transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
              alt="Head Chef"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - Content */}
          <div
            className={`transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <p className="font-body text-primary text-sm tracking-widest uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-5xl font-bold text-foreground mb-6">
              Crafted Excellence
            </h2>
            <p className="font-body text-foreground/80 leading-relaxed mb-6">
              For over two decades, we've been dedicated to creating moments of pure culinary magic. Our commitment to sourcing the finest ingredients and employing time-honored techniques has earned us recognition as one of the region's most prestigious dining establishments.
            </p>
            <p className="font-body text-foreground/80 leading-relaxed mb-8">
              Every dish that leaves our kitchen is a testament to our passion for gastronomy and our respect for our guests' palates and time.
            </p>

            {/* Signature Element */}
            <div className="border-t border-primary/20 pt-6 mb-8">
              <p className="font-serif text-primary text-xl italic">
                "Tradition meets innovation on every plate"
              </p>
            </div>

            <button className="px-8 py-3 border border-primary text-primary font-body text-sm hover:bg-primary hover:text-background transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
