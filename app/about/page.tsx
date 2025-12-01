import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Target, Heart, Shield, Handshake, ArrowRight, Phone } from "lucide-react"

export const metadata = {
  title: "About Us | Shyam Sarkar Real Estate Pvt. Ltd.",
  description:
    "Learn about Shyam Sarkar Real Estate - Your trusted real estate partner in Jhansi with 15+ years of experience in property buying, selling, and investment.",
}

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "We believe in honest dealings with complete transparency in all our transactions.",
  },
  {
    icon: Heart,
    title: "Client-First Approach",
    description: "Your satisfaction is our priority. We go the extra mile to meet your expectations.",
  },
  {
    icon: Target,
    title: "Expert Guidance",
    description: "Our experienced team provides professional advice for all your property decisions.",
  },
  {
    icon: Handshake,
    title: "Long-term Relationships",
    description: "We build lasting relationships with our clients based on trust and mutual respect.",
  },
]

const achievements = [
  { value: "15+", label: "Years of Experience" },
  { value: "1000+", label: "Happy Clients" },
  { value: "500+", label: "Properties Sold" },
  { value: "200+", label: "Commercial Deals" },
]

const whyChooseUs = [
  "Verified and legal properties only",
  "Transparent pricing with no hidden costs",
  "Complete documentation assistance",
  "Post-sale support and guidance",
  "Wide network across Jhansi region",
  "Personalized property matching",
  "Expert market knowledge",
  "Flexible payment solutions",
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                About <span className="text-secondary">Shyam Sarkar</span> Real Estate
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed font-[family-name:var(--font-inter)]">
                For over 15 years, we have been helping families, investors, and businesses find their perfect
                properties in Jhansi and nearby areas.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img src="/professional-real-estate-office-team-meeting.jpg" alt="Our Team" className="rounded-2xl shadow-lg w-full h-auto" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our <span className="text-secondary">Story</span>
                </h2>
                <div className="space-y-4 text-muted-foreground font-[family-name:var(--font-inter)]">
                  <p className="leading-relaxed">
                    Shyam Sarkar Real Estate Pvt. Ltd. was founded with a simple mission - to make property buying,
                    selling, and investment a seamless experience for everyone in Jhansi.
                  </p>
                  <p className="leading-relaxed">
                    Under the leadership of <strong className="text-foreground">Mr. Ghanshyam Kushwaha</strong>, our
                    company has grown from a small local agency to one of the most trusted names in real estate across
                    the Jhansi region.
                  </p>
                  <p className="leading-relaxed">
                    We understand that property is not just an investment - it&apos;s about finding a place to call
                    home, a space to build your business, or land to secure your future. That&apos;s why we treat every
                    client&apos;s needs as our own.
                  </p>
                </div>
                <div className="mt-8 p-6 bg-muted rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-secondary">GK</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">Ghanshyam Kushwaha</h3>
                      <p className="text-muted-foreground font-[family-name:var(--font-inter)]">Founder & Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{item.value}</div>
                  <div className="text-muted-foreground font-[family-name:var(--font-inter)]">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core <span className="text-secondary">Values</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto font-[family-name:var(--font-inter)]">
                These principles guide everything we do and how we serve our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-border">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm font-[family-name:var(--font-inter)]">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                  Why Choose <span className="text-secondary">Us?</span>
                </h2>
                <p className="text-primary-foreground/80 mb-8 font-[family-name:var(--font-inter)]">
                  When you work with Shyam Sarkar Real Estate, you get more than just a property dealer - you get a
                  trusted partner committed to your success.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-primary-foreground font-[family-name:var(--font-inter)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src="/real-estate-agent-showing-property-to-happy-client.jpg"
                  alt="Our Services"
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your <span className="text-secondary">Property Journey?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 font-[family-name:var(--font-inter)]">
              Whether you&apos;re looking to buy, sell, or invest in property, we&apos;re here to help. Get in touch
              with us today and let&apos;s make your property dreams a reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 font-[family-name:var(--font-inter)]">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-[family-name:var(--font-inter)] bg-transparent"
              >
                <a href="tel:+917985206466">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: +91 7985206466
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
