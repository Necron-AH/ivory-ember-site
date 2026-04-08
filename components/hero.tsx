import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-wedding.jpg"
          alt="Elegant wedding reception setup"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-serif text-background tracking-tight drop-shadow-md">
          <span className="block text-2xl md:text-3xl lg:text-4xl font-normal leading-snug text-background/80 uppercase tracking-widest mb-3">
            Chicago Event Setups
          </span>
          <span className="block text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-balance">
            Beautiful Setups for 50–70 Guests,<br className="hidden md:block" /> Without Overspending
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-background max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
          Affordable, stress-free event setups for Chicago hosts. We handle delivery, setup, and breakdown so you can focus on your guests.
        </p>

        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-base tracking-wide"
          >
            <Link href="#quote">Get a Quote in 24 Hours</Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-background/50" />
      </div>
    </section>
  )
}