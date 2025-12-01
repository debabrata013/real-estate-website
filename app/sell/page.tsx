"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ClipboardList,
  Camera,
  Users,
  Handshake,
  FileCheck,
  CheckCircle,
  ArrowRight,
  Phone,
  Send,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react"

const sellingSteps = [
  {
    icon: ClipboardList,
    title: "Property Listing",
    description: "Share your property details with us and we'll create an attractive listing.",
  },
  {
    icon: Camera,
    title: "Professional Showcase",
    description: "We photograph and present your property to attract serious buyers.",
  },
  {
    icon: Users,
    title: "Buyer Matching",
    description: "We connect you with verified buyers genuinely interested in your property.",
  },
  {
    icon: Handshake,
    title: "Negotiation",
    description: "Our experts negotiate on your behalf to get the best possible price.",
  },
  {
    icon: FileCheck,
    title: "Seamless Transfer",
    description: "Complete documentation and registration assistance for hassle-free transfer.",
  },
]

const whySellWithUs = [
  {
    icon: TrendingUp,
    title: "Best Market Price",
    description: "Our market expertise ensures you get the maximum value for your property.",
  },
  {
    icon: Users,
    title: "Wide Buyer Network",
    description: "Access to thousands of verified buyers actively looking for properties.",
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "All transactions are legally verified and completely secure.",
  },
  {
    icon: Clock,
    title: "Quick Sale",
    description: "Our efficient process helps you sell your property faster.",
  },
]

export default function SellPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Sell Your <span className="text-secondary">Property</span> With Confidence
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-8 font-[family-name:var(--font-inter)]">
                Get the best value for your property with our expert selling services. We handle everything from listing
                to final handover.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-[family-name:var(--font-inter)]"
                >
                  <a href="#sell-form">
                    List Your Property
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-[family-name:var(--font-inter)] bg-transparent"
                >
                  <a href="tel:+917985206466">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Sell With Us */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground text-center mb-10">
              Why Sell <span className="text-secondary">With Us?</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whySellWithUs.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-border">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm font-[family-name:var(--font-inter)]">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Selling Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Selling <span className="text-secondary">Process</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto font-[family-name:var(--font-inter)]">
                A hassle-free process designed to sell your property quickly at the best price.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {sellingSteps.map((step, index) => (
                <div key={index} className="flex gap-4 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <step.icon className="h-7 w-7 text-secondary-foreground" />
                    </div>
                    {index < sellingSteps.length - 1 && <div className="w-0.5 h-full bg-secondary/30 mt-2" />}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Step {index + 1}: {step.title}
                    </h3>
                    <p className="text-muted-foreground font-[family-name:var(--font-inter)]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seller Form */}
        <section id="sell-form" className="py-20 bg-primary scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-primary-foreground">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  List Your <span className="text-secondary">Property</span> Now
                </h2>
                <p className="text-primary-foreground/80 mb-6 font-[family-name:var(--font-inter)]">
                  Share your property details and our team will evaluate and create an attractive listing to reach
                  potential buyers quickly.
                </p>
                <ul className="space-y-3 font-[family-name:var(--font-inter)]">
                  {[
                    "Free property valuation",
                    "Professional photography",
                    "Verified buyer connections",
                    "Complete documentation support",
                    "No upfront charges",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle>Property Listing Form</CardTitle>
                  <CardDescription className="font-[family-name:var(--font-inter)]">
                    Fill in your property details and we&apos;ll help you find the right buyer.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <CheckCircle className="h-16 w-16 text-green-600 mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">Thank You!</h3>
                      <p className="text-muted-foreground font-[family-name:var(--font-inter)]">
                        We&apos;ve received your listing. Our team will contact you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <Input placeholder="Full Name *" required className="font-[family-name:var(--font-inter)]" />
                        <Input
                          type="tel"
                          placeholder="Mobile Number *"
                          required
                          className="font-[family-name:var(--font-inter)]"
                        />
                      </div>
                      <Input
                        type="email"
                        placeholder="Email Address"
                        className="font-[family-name:var(--font-inter)]"
                      />
                      <Select required>
                        <SelectTrigger className="font-[family-name:var(--font-inter)]">
                          <SelectValue placeholder="Property Type *" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="house">House / Villa</SelectItem>
                          <SelectItem value="flat">Flat / Apartment</SelectItem>
                          <SelectItem value="shop">Shop / Showroom</SelectItem>
                          <SelectItem value="office">Office Space</SelectItem>
                          <SelectItem value="land">Land / Plot</SelectItem>
                          <SelectItem value="warehouse">Warehouse / Godown</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        placeholder="Property Location *"
                        required
                        className="font-[family-name:var(--font-inter)]"
                      />
                      <div className="grid md:grid-cols-2 gap-4">
                        <Input placeholder="Property Size (sq.ft)" className="font-[family-name:var(--font-inter)]" />
                        <Input placeholder="Expected Price" className="font-[family-name:var(--font-inter)]" />
                      </div>
                      <Textarea
                        placeholder="Property Description..."
                        rows={3}
                        className="font-[family-name:var(--font-inter)]"
                      />
                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 font-[family-name:var(--font-inter)]"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Submit Listing
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
