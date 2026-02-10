import { Preloader } from '@/components/preloader'
import { Navbar } from '@/components/navbar'
import { HeroSlider } from '@/components/hero-slider'
import { AboutSection } from '@/components/about-section'
import { StrengthsSection } from '@/components/strengths-section'
import { DishesGrid } from '@/components/dishes-grid'
import { ParallaxSection } from '@/components/parallax-section'
import { MenuPreview } from '@/components/menu-preview'
import { ReservationSection } from '@/components/reservation-section'
import { GallerySection } from '@/components/gallery-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <HeroSlider />
        <AboutSection />
        <StrengthsSection />
        <DishesGrid />
        <ParallaxSection />
        <MenuPreview />
        <ReservationSection />
        <GallerySection />
      </main>
      <Footer />
    </>
  )
}
