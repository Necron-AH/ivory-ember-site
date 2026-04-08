"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does pricing work?",
    answer:
      "Our pricing is based on the items you select, the duration of your rental, and your event location. We provide customized quotes for each event to ensure you get exactly what you need within your budget. Contact us for a personalized estimate.",
  },
  {
    question: "Do you deliver and set up the rentals?",
    answer:
      "Yes! Our full-service team handles delivery, setup, and pickup for all rentals. We work closely with your venue and other vendors to ensure everything is in place before your event begins and removed afterward.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 3-6 months in advance, especially for peak wedding season (May through October). However, we do our best to accommodate last-minute requests based on availability.",
  },
  {
    question: "Can I customize the rentals or mix collections?",
    answer:
      "Absolutely! We love creating custom combinations that reflect your unique style. Our team can help you mix and match pieces from different collections to achieve your perfect look.",
  },
  {
    question: "What happens if something gets damaged?",
    answer:
      "Normal wear and tear is expected and covered. For significant damage, we have a clear damage policy that we discuss during the booking process. We also offer optional damage waiver coverage for your peace of mind.",
  },
  {
    question: "Do you offer design consultations?",
    answer:
      "Yes, we offer complimentary design consultations to help you envision how our pieces will transform your space. We can meet in person at our showroom or virtually, depending on your preference.",
  },
]

export function FAQ() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
            Questions
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight">
            Frequently Asked
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left font-serif text-lg text-foreground hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
