"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function QuoteSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    eventDate: "",
    eventType: "",
    guestCount: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock form submission - in a real app, this would send to a backend
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We&apos;ll be in touch soon.")
    setFormData({ name: "", email: "", location: "", eventDate: "", eventType: "", guestCount: "", message: "" })
  }

  return (
    <section id="quote" className="py-24 lg:py-32 bg-primary">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        {/* Section Header */}
        <p className="text-sm tracking-widest uppercase text-primary-foreground/70 mb-4">
          Get a Quote
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground tracking-tight mb-6">
          Event Setups for 50–70 Guests, Done for You
        </h2>
        <p className="text-primary-foreground/80 mb-2 max-w-xl mx-auto leading-relaxed">
          Tell us your event details and we’ll send you a clear setup plan with pricing, availability, and everything included—delivery, setup, and breakdown.
        </p>
        <p className="text-sm text-primary-foreground/60 mb-10">
          Most quotes are delivered within 24 hours.
        </p>
        <p className="text-sm text-primary-foreground/60 mb-10 flex items-center justify-center gap-2">
          <span className="inline-block w-8 h-px bg-primary-foreground/30" />
          Serving Chicago and surrounding suburbs for events of 50–70 guests
          <span className="inline-block w-8 h-px bg-primary-foreground/30" />
        </p>

        {/* Quote Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-primary-foreground text-foreground placeholder:text-muted-foreground border-0 h-12"
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-primary-foreground text-foreground placeholder:text-muted-foreground border-0 h-12"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="text"
              placeholder="Event Location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="bg-primary-foreground text-foreground placeholder:text-muted-foreground border-0 h-12"
            />
            <Input
              type="text"
              placeholder="Estimated Guest Count"
              value={formData.guestCount}
              onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
              className="bg-primary-foreground text-foreground placeholder:text-muted-foreground border-0 h-12"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="date"
              placeholder="Event Date"
              value={formData.eventDate}
              onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
              className="bg-primary-foreground text-foreground placeholder:text-muted-foreground border-0 h-12"
            />
            <div className="relative">
              <select
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                className="w-full bg-primary-foreground text-foreground border-0 h-12 pl-4 pr-10 rounded-md text-sm tracking-wide focus:outline-none focus:ring-2 focus:ring-accent appearance-none cursor-pointer"
              >
                <option value="" disabled>Type of Event</option>
                <option value="wedding">Wedding</option>
                <option value="engagement">Engagement Celebration</option>
                <option value="birthday">Private Dinner or Party</option>
                <option value="corporate">Corporate Gathering</option>
                <option value="other">Other Occasion</option>
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-muted-foreground">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
          <Textarea
            placeholder="Tell us about your event style, colors, or anything you already have planned..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="bg-primary-foreground text-foreground placeholder:text-muted-foreground border-0 resize-none"
          />
          <Button
            type="submit"
            size="lg"
            className="w-full md:w-auto bg-accent text-accent-foreground hover:brightness-110 px-20 py-8 text-base md:text-lg tracking-widest uppercase font-semibold shadow-lg transition-all duration-200"
          >
            Request a Quote
          </Button>
        </form>
      </div>
    </section>
  )
}
