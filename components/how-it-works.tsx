const moments = [
  {
    label: "Begin",
    title: "A Conversation About Your Day",
    description:
      "Every event begins with a conversation. You share the feeling you're after — the atmosphere, the details, the things that matter most — and we take it from there.",
  },
  {
    label: "Discover",
    title: "A Collection Shaped Around You",
    description:
      "We bring together a curated selection of pieces that suit your venue, your palette, and your vision. Everything is presented clearly, with nothing left to chance.",
  },
  {
    label: "Experience",
    title: "Arrive to a Space Already Transformed",
    description:
      "Our team handles every detail of delivery and styling before you arrive. The day itself belongs entirely to you.",
  },
]

export function HowItWorks() {
  return (
    <section id="process" className="py-28 lg:py-40 bg-background">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 lg:mb-28">
          <p className="text-xs tracking-widest uppercase text-muted-foreground/70 mb-4">
            The Experience
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight text-balance">
            Everything Taken Care Of, So You Don&apos;t Have To Think Twice
          </h2>
        </div>

        {/* Moments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
          {moments.map((moment) => (
            <div key={moment.label} className="flex flex-col items-center text-center md:items-start md:text-left">
              <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground/35 mb-6 select-none font-light">
                {moment.label}
              </span>
              <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-5 tracking-tight leading-snug">
                {moment.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light max-w-xs">
                {moment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
