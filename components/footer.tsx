'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background border-t border-primary/20 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Left - Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-3">
              LUXE
            </h3>
            <p className="font-body text-foreground/60 text-sm leading-relaxed">
              Experience timeless elegance and culinary excellence at our fine dining establishment, where every moment is crafted to perfection.
            </p>
          </div>

          {/* Center - Navigation */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-6 uppercase tracking-wide text-sm">
              Navigation
            </h4>
            <nav className="space-y-3">
              {['Home', 'About', 'Menu', 'Gallery', 'Reservation', 'Contact'].map(
                (item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="font-body text-foreground/60 text-sm hover:text-primary transition-colors duration-300 block"
                  >
                    {item}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Right - Contact */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-6 uppercase tracking-wide text-sm">
              Contact & Hours
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <p className="font-body text-foreground/60 text-sm">
                  123 Fine Dining Lane<br />
                  New York, NY 10001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <a
                  href="tel:+12125551234"
                  className="font-body text-foreground/60 text-sm hover:text-primary transition-colors"
                >
                  +1 (212) 555-1234
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <a
                  href="mailto:reservations@luxe.com"
                  className="font-body text-foreground/60 text-sm hover:text-primary transition-colors"
                >
                  reservations@luxe.com
                </a>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="font-body text-foreground/60 text-sm mb-3">
                <strong>Hours:</strong>
              </p>
              <p className="font-body text-foreground/60 text-sm">
                Tuesday - Thursday: 5pm - 10pm<br />
                Friday - Saturday: 5pm - 11pm<br />
                Sunday: 4pm - 9pm<br />
                Closed Mondays
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-foreground/50 text-xs text-center md:text-left">
              © 2024 LUXE Fine Dining. All rights reserved.
            </p>
            <div className="flex gap-8">
              {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="font-body text-foreground/50 text-xs hover:text-primary transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
