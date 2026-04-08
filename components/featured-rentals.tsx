import Image from "next/image"

const rentals = [
  {
    title: "Candelabras",
    description: "Sculptural light for atmosphere that speaks before a word is said",
    image: "/images/rentals/candelabras.jpg",
  },
  {
    title: "Tables",
    description: "Thoughtfully crafted surfaces where memories are made",
    image: "/images/rentals/tables.jpg",
  },
  {
    title: "Chairs",
    description: "Quietly considered seating that elevates every detail",
    image: "/images/rentals/chairs.jpg",
  },
  {
    title: "Centerpieces",
    description: "Composed arrangements that bring intention to every table",
    image: "/images/rentals/centerpieces.jpg",
  },
  {
    title: "Arches",
    description: "Framing your most meaningful moments with timeless form",
    image: "/images/rentals/arches.jpg",
  },
]

export function FeaturedRentals() {
  return (
    <section id="rentals" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
  <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
    What We Provide
  </p>

  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight">
    Everything You Need for a Complete Event Setup
  </h2>

  <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
    From tables and chairs to full decorative setups, we provide everything needed to host a clean, coordinated event without the stress.
  </p>
</div>

        {/* Rentals Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          {rentals.map((rental) => (
            <div
              key={rental.title}
              className="group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-sm"
            >
              <div className="relative w-full overflow-hidden bg-muted rounded-sm" style={{ paddingBottom: "133.33%" }}>
                <Image
                  src={rental.image}
                  alt={rental.title}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 text-center px-1">
                <h3 className="text-sm tracking-widest uppercase text-foreground font-semibold">
                  {rental.title}
                </h3>
                <p className="mt-3 text-xs text-muted-foreground/80 leading-relaxed font-light">
                  {rental.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
