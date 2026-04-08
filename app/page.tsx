import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedRentals } from "@/components/featured-rentals"
import { Categories } from "@/components/categories"
import { HowItWorks } from "@/components/how-it-works"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { QuoteSection } from "@/components/quote-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturedRentals />
      <Categories />
      <HowItWorks />
      <Gallery />
      <Testimonials />
      <FAQ />
      <QuoteSection />
      <Footer />
    </main>
  )
}
