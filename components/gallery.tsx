import Image from "next/image"

const galleryImages = [
  {
    src: "/images/gallery/gallery-1.jpg",
    alt: "Outdoor wedding ceremony setup",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/images/gallery/gallery-2.jpg",
    alt: "Elegant indoor reception",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery/gallery-3.jpg",
    alt: "Sweetheart table setup",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery/gallery-4.jpg",
    alt: "Wedding lounge seating",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery/gallery-5.jpg",
    alt: "Dessert table display",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery/gallery-6.jpg",
    alt: "Evening reception under lights",
    className: "col-span-2 row-span-1",
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
            Inspiration
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight">
            Our Gallery
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden bg-muted group ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
