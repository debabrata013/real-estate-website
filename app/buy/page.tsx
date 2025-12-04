"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Home,
  Building2,
  MapPin,
  Search,
  FileCheck,
  Key,
  CheckCircle,
  ArrowRight,
  Phone,
  Handshake,
  MessageCircle,
  Star,
  Shield,
  Clock,
} from "lucide-react"
import Link from "next/link"

const buyingSteps = [
  {
    icon: Search,
    title: "Tell Us Your Requirements",
    description: "Share your property preferences, budget, and preferred locations with our team.",
  },
  {
    icon: Home,
    title: "Property Matching",
    description: "We'll curate a list of properties that match your criteria and arrange viewings.",
  },
  {
    icon: FileCheck,
    title: "Documentation Check",
    description: "Our experts verify all legal documents and ensure clear title for your safety.",
  },
  {
    icon: Handshake,
    title: "Negotiation & Deal",
    description: "We negotiate the best price on your behalf and facilitate a smooth transaction.",
  },
  {
    icon: Key,
    title: "Handover",
    description: "Complete the registration process and receive the keys to your new property.",
  },
]

const propertyTypes = [
  { icon: Home, title: "Residential", description: "Houses, Flats, Apartments, Villas" },
  { icon: Building2, title: "Commercial", description: "Shops, Offices, Showrooms" },
  { icon: MapPin, title: "Land & Plots", description: "Residential & Agricultural Land" },
]

const whyChooseUs = [
  {
    icon: Star,
    title: "Expert Guidance",
    description: "20+ years of experience in Jhansi real estate market",
  },
  {
    icon: Shield,
    title: "Legal Assistance",
    description: "Complete documentation and legal verification support",
  },
  {
    icon: Clock,
    title: "Quick Process",
    description: "Fast-track property search and transaction completion",
  },
]

export default function BuyPage() {
  const phoneNumber = "917985206466"

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/80 py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 tracking-tight">
                Buy Your <span className="text-secondary">Dream Property</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 font-[family-name:var(--font-inter)] leading-relaxed">
                Find the perfect property in Jhansi with our expert guidance. From search to handover, we&apos;re with
                you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-[family-name:var(--font-inter)] shadow-lg hover:shadow-xl transition-all h-12 text-base"
                >
                  <Link href="/properties">
                    Browse Properties
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-[family-name:var(--font-inter)] bg-transparent h-12 text-base shadow-lg hover:shadow-xl transition-all"
                >
                  <a href={`tel:+${phoneNumber}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Property Types */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Are You Looking <span className="text-secondary">To Buy?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto font-[family-name:var(--font-inter)] text-lg">
                We specialize in all types of properties to suit your needs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {propertyTypes.map((type, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-300 border-border group hover:-translate-y-2 bg-background"
                >
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <type.icon className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-muted-foreground font-[family-name:var(--font-inter)] leading-relaxed">
                      {type.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Buying Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Buying <span className="text-secondary">Process</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto font-[family-name:var(--font-inter)] text-lg leading-relaxed">
                A simple and transparent process to help you find and buy your ideal property
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {buyingSteps.map((step, index) => (
                <div key={index} className="flex gap-6 mb-10 last:mb-0 group">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    {index < buyingSteps.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-primary/20 mt-3" />
                    )}
                  </div>
                  <div className="pb-10 flex-1">
                    <div className="bg-muted/50 rounded-lg p-6 group-hover:bg-muted transition-colors duration-300">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        Step {index + 1}: {step.title}
                      </h3>
                      <p className="text-muted-foreground font-[family-name:var(--font-inter)] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose <span className="text-secondary">Us?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto font-[family-name:var(--font-inter)] text-lg">
                Your trusted partner in finding the perfect property
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {whyChooseUs.map((feature, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-300 border-border group bg-background"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                      <feature.icon className="h-8 w-8 text-secondary group-hover:text-secondary-foreground transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground font-[family-name:var(--font-inter)] leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8 border border-primary/20">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Benefits of Buying With Us</h3>
                  <ul className="space-y-4 font-[family-name:var(--font-inter)]">
                    {[
                      "Personalized property recommendations based on your budget",
                      "Free consultation with our real estate experts",
                      "Complete legal documentation verification",
                      "Best price negotiation on your behalf",
                      "Post-purchase support and assistance",
                      "Access to exclusive off-market properties",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-lg p-8 border border-secondary/20">
                  <h3 className="text-2xl font-bold text-foreground mb-6">What We Handle For You</h3>
                  <ul className="space-y-4 font-[family-name:var(--font-inter)]">
                    {[
                      "Property search and shortlisting",
                      "Site visits and property inspection",
                      "Document verification and due diligence",
                      "Price negotiation with sellers",
                      "Bank loan assistance and processing",
                      "Registration and handover coordination",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Find Your <span className="text-secondary">Dream Property?</span>
              </h2>
              <p className="text-primary-foreground/90 text-lg md:text-xl mb-10 font-[family-name:var(--font-inter)] leading-relaxed">
                Our expert team is ready to help you find the perfect property that matches your requirements and
                budget. Contact us today for a free consultation!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-[family-name:var(--font-inter)] shadow-2xl hover:shadow-3xl transition-all h-14 px-8 text-base"
                >
                  <a href={`tel:+${phoneNumber}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call: +91 7985206466
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-[family-name:var(--font-inter)] bg-transparent h-14 px-8 text-base shadow-2xl hover:shadow-3xl transition-all"
                >
                  <a
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                      "Hi, I'm interested in buying a property. Can you help me?",
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-[family-name:var(--font-inter)] bg-transparent h-14 px-8 text-base shadow-2xl hover:shadow-3xl transition-all"
                >
                  <Link href="/properties">
                    View Properties
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
