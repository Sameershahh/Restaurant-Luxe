'use client'

import { useInView } from 'react-intersection-observer'
import { Wine, Users, Clock } from 'lucide-react'

const strengths = [
  {
    icon: Wine,
    title: 'Premium Selection',
    description: 'Carefully curated wines and ingredients sourced from around the globe',
  },
  {
    icon: Users,
    title: 'Expert Service',
    description: 'Knowledgeable staff dedicated to creating your perfect evening',
  },
  {
    icon: Clock,
    title: 'Timeless Ambiance',
    description: 'An intimate setting that celebrates the art of fine dining',
  },
]

export function StrengthsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="strengths" ref={ref} className="py-28 bg-background px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl font-bold text-foreground mb-6">
            Why Choose Us
          </h2>
          <div className="flex justify-center">
            <div className="w-16 h-px bg-primary/40" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {strengths.map((strength, index) => {
            const Icon = strength.icon
            return (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center mb-6">
                  <Icon size={40} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3 uppercase tracking-wide">
                  {strength.title}
                </h3>
                <p className="font-body text-foreground/70 leading-relaxed">
                  {strength.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
