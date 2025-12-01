import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Property Buyer",
    content:
      "Shyam Sarkar Real Estate helped me find my dream home in Civil Lines. Their professional approach and transparency made the entire process smooth. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Land Investor",
    content:
      "I invested in a plot through them and the documentation was handled perfectly. Ghanshyam ji personally ensured everything was in order. Great service!",
    rating: 5,
  },
  {
    name: "Amit Verma",
    role: "Business Owner",
    content:
      "Found the perfect commercial space for my showroom. The team understood my requirements and showed me exactly what I needed. Very satisfied with their service.",
    rating: 5,
  },
  {
    name: "Sunita Devi",
    role: "Property Seller",
    content:
      "Sold my ancestral property through them at a great price. They handled all the buyers and negotiations professionally. Trustworthy and reliable!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our <span className="text-secondary">Clients Say</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto font-[family-name:var(--font-inter)]">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about their
            experience with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-primary-foreground border-0">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-secondary mb-4" />
                <p className="text-white/90 mb-4 leading-relaxed font-[family-name:var(--font-inter)]">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-white font-[family-name:var(--font-inter)]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-white/70 font-[family-name:var(--font-inter)]">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
