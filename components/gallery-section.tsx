'use client'

import { useInView } from 'react-intersection-observer'
import { Eye } from 'lucide-react'

const galleryItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1631100732613-6b65da9a343d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=500&fit=crop',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1651440204296-a79fa9988007?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=500&fit=crop',
    aspect: 'aspect-square',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1515669900249-8887f1b7bcf4?w=500&h=400&fit=crop',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 6,
    image: 'https://plus.unsplash.com/premium_photo-1677000666761-ff476a65c8ba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    aspect: 'aspect-square',
  },
]

export function GallerySection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="gallery" ref={ref} className="py-28 bg-background px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-body text-primary text-sm tracking-widest uppercase mb-4">
            Visual Journey
          </p>
          <h2 className="font-serif text-5xl font-bold text-foreground">
            Gallery
          </h2>
        </div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative overflow-hidden bg-foreground/10 group cursor-pointer transition-all duration-1000 ${
                item.aspect
              } ${inView ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${item.image}')`,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Eye size={32} className="text-foreground" strokeWidth={1} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
