import React from "react"

export function QuoteSection() {
  return (
    <section id="quote" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
            Get a Quote
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight">
            Plan Your Event with Us
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and we’ll provide a detailed quote tailored to your event needs.
          </p>
        </div>
        <form className="max-w-3xl mx-auto grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="location"
            placeholder="Chicago or Suburb (e.g. Naperville, Evanston)"
            required
            className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
          />
          <input
            type="number"
            name="guestCount"
            placeholder="Approx. number of guests (50–70 ideal)"
            required
            className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
          />
          <textarea
            name="details"
            placeholder="Event Details"
            rows={4}
            className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md sm:col-span-2"
          />
          <button
            type="submit"
            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:col-span-2"
          >
            Get My Setup Plan
          </button>
        </form>
      </div>
    </section>
  )
}
