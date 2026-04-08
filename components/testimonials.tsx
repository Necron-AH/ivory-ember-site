const testimonials = [
  {
    quote:
      "Ivory & Ember transformed our wedding into something out of a dream. Every detail was perfect, and our guests are still talking about how beautiful everything looked.",
    author: "Sarah & Michael",
    event: "September Wedding",
  },
  {
    quote:
      "The team made the entire process so seamless. From the initial consultation to the day-of styling, they exceeded every expectation. Truly exceptional service.",
    author: "Emily Thompson",
    event: "Garden Reception",
  },
  {
    quote:
      "We were blown away by the quality of the rentals and the attention to detail. They brought our vision to life in ways we never imagined possible.",
    author: "Jessica & David",
    event: "Estate Wedding",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
            Kind Words
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="text-center p-8 lg:p-10 bg-secondary"
            >
              <blockquote className="text-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-serif text-lg text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {testimonial.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
