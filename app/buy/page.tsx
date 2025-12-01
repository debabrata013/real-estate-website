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
  Home,
  Building2,
  MapPin,
  Search,
  FileCheck,
  Key,
  CheckCircle,
  ArrowRight,
  Phone,
  Send,
  Handshake,
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

export default function BuyPage() {
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
                Buy Your <span className="text-secondary">Dream Property</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-8 font-[family-name:var(--font-inter)]">
                Find the perfect property in Jhansi with our expert guidance. From search to handover, we&apos;re with
                you every step of the way.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-[family-name:var(--font-inter)]"
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

        {/* Property Types */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground text-center mb-10">
              What Are You Looking <span className="text-secondary">To Buy?</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {propertyTypes.map((type, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow border-border group hover:-translate-y-1"
                >
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                      <type.icon className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{type.title}</h3>
                    <p className="text-muted-foreground font-[family-name:var(--font-inter)]">{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Buying Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Buying <span className="text-secondary">Process</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto font-[family-name:var(--font-inter)]">
                A simple and transparent process to help you find and buy your ideal property.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {buyingSteps.map((step, index) => (
                <div key={index} className="flex gap-4 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <step.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    {index < buyingSteps.length - 1 && <div className="w-0.5 h-full bg-primary/20 mt-2" />}
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

        {/* Buyer Inquiry Form */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-primary-foreground">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Tell Us Your <span className="text-secondary">Requirements</span>
                </h2>
                <p className="text-primary-foreground/80 mb-6 font-[family-name:var(--font-inter)]">
                  Fill out the form with your property requirements and our team will get back to you with matching
                  properties within 24 hours.
                </p>
                <ul className="space-y-3 font-[family-name:var(--font-inter)]">
                  {[
                    "Personalized property recommendations",
                    "Free consultation with our experts",
                    "No obligation to purchase",
                    "Complete documentation assistance",
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
                  <CardTitle>Property Requirement Form</CardTitle>
                  <CardDescription className="font-[family-name:var(--font-inter)]">
                    Share your requirements and we&apos;ll find the perfect property for you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <CheckCircle className="h-16 w-16 text-green-600 mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">Thank You!</h3>
                      <p className="text-muted-foreground font-[family-name:var(--font-inter)]">
                        We&apos;ve received your requirements. Our team will contact you soon.
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
                          <SelectItem value="residential">Residential Property</SelectItem>
                          <SelectItem value="commercial">Commercial Property</SelectItem>
                          <SelectItem value="land">Land / Plot</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger className="font-[family-name:var(--font-inter)]">
                          <SelectValue placeholder="Budget Range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-25l">Under ₹25 Lakhs</SelectItem>
                          <SelectItem value="25l-50l">₹25 - 50 Lakhs</SelectItem>
                          <SelectItem value="50l-1cr">₹50 Lakhs - 1 Crore</SelectItem>
                          <SelectItem value="1cr-2cr">₹1 - 2 Crore</SelectItem>
                          <SelectItem value="above-2cr">Above ₹2 Crore</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input placeholder="Preferred Location" className="font-[family-name:var(--font-inter)]" />
                      <Textarea
                        placeholder="Additional Requirements..."
                        rows={3}
                        className="font-[family-name:var(--font-inter)]"
                      />
                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 font-[family-name:var(--font-inter)]"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Submit Requirements
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
