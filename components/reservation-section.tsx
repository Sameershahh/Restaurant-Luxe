'use client'

import React from "react"

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

export function ReservationSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Reservation data:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
    })
  }

  return (
    <section
      id="reservation"
      ref={ref}
      className="py-28 bg-card px-6 md:px-12"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-primary text-sm tracking-widest uppercase mb-4">
            Reserve Your Table
          </p>
          <h2 className="font-serif text-5xl font-bold text-foreground">
            Book Your Experience
          </h2>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label className="block font-body text-foreground text-sm mb-3">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border text-foreground font-body focus:border-primary focus:outline-none transition-colors duration-300"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-body text-foreground text-sm mb-3">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border text-foreground font-body focus:border-primary focus:outline-none transition-colors duration-300"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-body text-foreground text-sm mb-3">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border text-foreground font-body focus:border-primary focus:outline-none transition-colors duration-300"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block font-body text-foreground text-sm mb-3">
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border text-foreground font-body focus:border-primary focus:outline-none transition-colors duration-300"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block font-body text-foreground text-sm mb-3">
                Preferred Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border text-foreground font-body focus:border-primary focus:outline-none transition-colors duration-300"
              />
            </div>

            {/* Guests */}
            <div>
              <label className="block font-body text-foreground text-sm mb-3">
                Number of Guests
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border text-foreground font-body focus:border-primary focus:outline-none transition-colors duration-300"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-8 py-3 bg-primary text-background font-body text-sm font-semibold hover:opacity-90 transition-opacity duration-300 mt-8"
          >
            Confirm Reservation
          </button>

          <p className="text-center font-body text-foreground/60 text-xs mt-6">
            We'll send you a confirmation email within 24 hours
          </p>
        </form>
      </div>
    </section>
  )
}
