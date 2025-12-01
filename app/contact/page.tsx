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
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle, ExternalLink } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    content: "762, Badapull, Infront of Ansal Basera, Gwalior Road, Jhansi",
    link: "https://maps.google.com/?q=762+Badapull+Gwalior+Road+Jhansi",
  },
  {
    icon: Phone,
    title: "Phone Number",
    content: "+91 7985206466",
    link: "tel:+917985206466",
  },
  {
    icon: Mail,
    title: "Email Address",
    content: "kushwaha89ghanshyam@gmail.com",
    link: "mailto:kushwaha89ghanshyam@gmail.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Sat: 9:00 AM - 7:00 PM",
    link: null,
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const phoneNumber = "917985206466"
  const whatsappMessage = encodeURIComponent(
    "Hello! I am interested in your real estate services. Please provide more information.",
  )

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Get In <span className="text-secondary">Touch</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 font-[family-name:var(--font-inter)]">
                Have questions about properties or need assistance? We&apos;re here to help. Reach out to us through any
                of the channels below.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-border">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm font-[family-name:var(--font-inter)]"
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm font-[family-name:var(--font-inter)]">
                        {info.content}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="border-border shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <CardDescription className="font-[family-name:var(--font-inter)]">
                      Fill out the form below and we&apos;ll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {submitted ? (
                      <div className="flex flex-col items-center justify-center py-8 text-center">
                        <CheckCircle className="h-16 w-16 text-green-600 mb-4" />
                        <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground font-[family-name:var(--font-inter)]">
                          Thank you for contacting us. We&apos;ll respond shortly.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-1 font-[family-name:var(--font-inter)]">
                              Full Name *
                            </label>
                            <Input placeholder="Your name" required className="font-[family-name:var(--font-inter)]" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-1 font-[family-name:var(--font-inter)]">
                              Mobile Number *
                            </label>
                            <Input
                              type="tel"
                              placeholder="Your mobile"
                              required
                              className="font-[family-name:var(--font-inter)]"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1 font-[family-name:var(--font-inter)]">
                            Email Address
                          </label>
                          <Input
                            type="email"
                            placeholder="Your email"
                            className="font-[family-name:var(--font-inter)]"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1 font-[family-name:var(--font-inter)]">
                            Inquiry Type *
                          </label>
                          <Select required>
                            <SelectTrigger className="font-[family-name:var(--font-inter)]">
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="buy">Want to Buy Property</SelectItem>
                              <SelectItem value="sell">Want to Sell Property</SelectItem>
                              <SelectItem value="rent">Looking for Rental</SelectItem>
                              <SelectItem value="invest">Investment Inquiry</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1 font-[family-name:var(--font-inter)]">
                            Message *
                          </label>
                          <Textarea
                            placeholder="Tell us about your requirements..."
                            rows={4}
                            required
                            className="font-[family-name:var(--font-inter)]"
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-primary hover:bg-primary/90 font-[family-name:var(--font-inter)]"
                        >
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>

                {/* Quick Contact Buttons */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white font-[family-name:var(--font-inter)]"
                  >
                    <a
                      href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-[family-name:var(--font-inter)]"
                  >
                    <a href="tel:+917985206466">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>

              {/* Google Map */}
              <div>
                <Card className="border-border shadow-lg overflow-hidden h-full min-h-[500px]">
                  <div className="h-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.2395837253784!2d78.57!3d25.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI3JzAwLjAiTiA3OMKwMzQnMTIuMCJF!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: "500px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Shyam Sarkar Real Estate Office Location"
                    />
                  </div>
                </Card>
                <div className="mt-4 text-center">
                  <Button asChild variant="outline" className="font-[family-name:var(--font-inter)] bg-transparent">
                    <a
                      href="https://maps.google.com/?q=762+Badapull+Gwalior+Road+Jhansi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open in Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Owner Info Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-primary-foreground">
              <h2 className="text-3xl font-bold mb-6">
                Meet The <span className="text-secondary">Owner</span>
              </h2>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-secondary-foreground">GK</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Ghanshyam Kushwaha</h3>
                <p className="text-primary-foreground/80 mb-4 font-[family-name:var(--font-inter)]">
                  Founder & Director, Shyam Sarkar Real Estate Pvt. Ltd.
                </p>
                <p className="text-primary-foreground/70 max-w-xl mb-6 font-[family-name:var(--font-inter)]">
                  With over 15 years of experience in the real estate industry, Mr. Kushwaha has helped thousands of
                  families find their dream properties in Jhansi and nearby areas.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    asChild
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-[family-name:var(--font-inter)]"
                  >
                    <a href="tel:+917985206466">
                      <Phone className="mr-2 h-4 w-4" />
                      +91 7985206466
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-[family-name:var(--font-inter)] bg-transparent"
                  >
                    <a href="mailto:kushwaha89ghanshyam@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </a>
                  </Button>
                </div>
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
