import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    title: "Ceremony",
    description: "Create a breathtaking backdrop for your vows",
    image: "/images/categories/ceremony.jpg",
  },
  {
    title: "Reception",
    description: "Transform your celebration with elegant touches",
    image: "/images/categories/reception.jpg",
  },
  {
    title: "Table Styling",
    description: "Curated details that elevate every place setting",
    image: "/images/categories/table-styling.jpg",
  },
  {
    title: "Statement Pieces",
    description: "Bold accents that leave lasting impressions",
    image: "/images/categories/statement-pieces.jpg",
  },
]

export function Categories() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight">
            Shop by Category
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.title}
              href="#quote"
              className="group block"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/20 transition-opacity group-hover:bg-foreground/30" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                  <h3 className="font-serif text-2xl text-background mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-background/90">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
