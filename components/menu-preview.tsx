'use client'

import { useInView } from 'react-intersection-observer'

const menuItems = [
  {
    name: 'Amuse Bouche',
    price: 'Complimentary',
    description: 'Chef\'s seasonal selection',
  },
  {
    name: 'Oyster Selection',
    price: '$18',
    description: 'Three premium varieties',
  },
  {
    name: 'Lobster Bisque',
    price: '$24',
    description: 'Silky smooth with cognac',
  },
  {
    name: 'Beef Wellington',
    price: '$68',
    description: 'Center cut, perfectly aged',
  },
  {
    name: 'Wild Mushroom Risotto',
    price: '$42',
    description: 'Truffle oil and parmigiano',
  },
  {
    name: 'Chocolate Soufflé',
    price: '$16',
    description: 'With Grand Marnier sauce',
  },
]

export function MenuPreview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={ref} className="py-28 bg-background px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column */}
          <div
            className={`transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <h2 className="font-serif text-5xl font-bold text-foreground mb-8">
              Culinary Journey
            </h2>
            <p className="font-body text-foreground/80 leading-relaxed mb-6">
              Our menu is a testament to the seasons and our dedication to pristine ingredients. Each course has been thoughtfully composed to create a harmonious progression of flavors and textures.
            </p>
            <p className="font-body text-foreground/80 leading-relaxed">
              We offer both à la carte selections and our acclaimed tasting menu, designed to showcase the depth of our culinary expertise.
            </p>
          </div>

          {/* Right Column - Menu Items */}
          <div
            className={`transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="space-y-6">
              {menuItems.map((item, index) => (
                <div key={index} className="pb-6 border-b border-border last:border-b-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-serif text-lg font-bold text-foreground">
                      {item.name}
                    </h3>
                    <span className="font-serif text-primary font-bold">
                      {item.price}
                    </span>
                  </div>
                  <p className="font-body text-foreground/60 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
