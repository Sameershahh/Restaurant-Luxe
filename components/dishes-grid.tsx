'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const dishes = [
  {
    id: 1,
    name: 'Pan-Seared Foie Gras',
    description: 'Accompanied by black cherry gastrique and brioche toast',
    price: '$38',
    image: 'https://plus.unsplash.com/premium_photo-1663036447682-8f0d918adbed?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Wagyu A5 Ribeye',
    description: 'Dry-aged 45 days, finished with truffle butter and sea salt',
    price: '$72',
    image: 'https://images.unsplash.com/photo-1632898657999-ae6920976661?q=80&w=1048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Dover Sole Meunière',
    description: 'Whole fish expertly filleted tableside with brown butter and lemon',
    price: '$56',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop',
  },
]

export function DishesGrid() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="menu" ref={ref} className="py-28 bg-card px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-body text-primary text-sm tracking-widest uppercase mb-4">
            Signature Selection
          </p>
          <h2 className="font-serif text-5xl font-bold text-foreground">
            Our Specialties
          </h2>
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {dishes.map((dish, index) => (
            <div
              key={dish.id}
              className={`transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="aspect-square bg-foreground/10 rounded-sm overflow-hidden mb-6 group cursor-pointer">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${dish.image}')`,
                  }}
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {dish.name}
                </h3>
                <p className="font-body text-foreground/70 text-sm leading-relaxed mb-4">
                  {dish.description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <span className="text-xs text-foreground/50">SIGNATURE</span>
                  <span className="font-serif text-lg font-bold text-primary">
                    {dish.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-12 py-3 border border-primary text-primary font-body text-sm hover:bg-primary hover:text-background transition-all duration-300">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  )
}
