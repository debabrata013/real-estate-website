"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink, User, Building2 } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    content: "762, Badapull, Infront of Ansal Basera, Gwalior Road, Jhansi",
    link: "https://maps.google.com/?q=762+Badapull+Infront+of+Ansal+Basera+Gwalior+Road+Jhansi",
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
  const phoneNumber = "917985206466"
  const whatsappMessage = encodeURIComponent(
    "Hello! I am interested in your real estate services. Please provide more information.",
  )

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
                Get In <span className="text-secondary">Touch</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 font-[family-name:var(--font-inter)] leading-relaxed">
                Have questions about properties or need assistance? We&apos;re here to help you find your dream property
                in Jhansi.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-300 border-border group hover:-translate-y-2 bg-background"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <info.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm font-[family-name:var(--font-inter)] leading-relaxed block"
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm font-[family-name:var(--font-inter)] leading-relaxed">
                        {info.content}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to <span className="text-secondary">Connect?</span>
                </h2>
                <p className="text-muted-foreground text-lg font-[family-name:var(--font-inter)] max-w-2xl mx-auto leading-relaxed">
                  Choose your preferred way to reach us. We&apos;re available to discuss your property needs and answer
                  any questions you may have.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card className="border-2 border-[#25D366]/20 hover:border-[#25D366] transition-all duration-300 hover:shadow-2xl group">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#25D366] group-hover:scale-110 transition-all duration-300">
                      <MessageCircle className="h-10 w-10 text-[#25D366] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">WhatsApp Us</h3>
                    <p className="text-muted-foreground mb-6 font-[family-name:var(--font-inter)] leading-relaxed">
                      Get instant responses to your queries via WhatsApp messaging
                    </p>
                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-[family-name:var(--font-inter)] h-12 text-base shadow-lg hover:shadow-xl transition-all"
                    >
                      <a
                        href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-secondary/20 hover:border-secondary transition-all duration-300 hover:shadow-2xl group">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                      <Phone className="h-10 w-10 text-secondary group-hover:text-secondary-foreground transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Call Us Now</h3>
                    <p className="text-muted-foreground mb-6 font-[family-name:var(--font-inter)] leading-relaxed">
                      Speak directly with our property experts for immediate assistance
                    </p>
                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-[family-name:var(--font-inter)] h-12 text-base shadow-lg hover:shadow-xl transition-all"
                    >
                      <a href={`tel:+${phoneNumber}`}>
                        <Phone className="mr-2 h-5 w-5" />
                        +91 7985206466
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">Email Us</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 font-[family-name:var(--font-inter)]">
                    Send us a detailed message about your requirements
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="font-[family-name:var(--font-inter)] border-2 hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <a href="mailto:kushwaha89ghanshyam@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      kushwaha89ghanshyam@gmail.com
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Visit Our <span className="text-secondary">Office</span>
              </h2>
              <p className="text-muted-foreground text-lg font-[family-name:var(--font-inter)] max-w-2xl mx-auto">
                Located conveniently on Gwalior Road, Jhansi. Drop by for a personal consultation.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Card className="border-border shadow-2xl overflow-hidden">
                <div className="h-[500px] md:h-[600px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.0!2d78.5776!3d25.4484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI2JzU0LjIiTiA3OMKwMzQnMzkuNCJF!5e0!3m2!1sen!2sin!4v1733314800000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shyam Sarkar Real Estate Office - 762, Badapull, Gwalior Road, Jhansi"
                  />
                </div>
              </Card>
              <div className="mt-6 text-center">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="font-[family-name:var(--font-inter)] bg-background border-2 hover:bg-foreground hover:text-background transition-all shadow-md"
                >
                  <a
                    href="https://maps.google.com/?q=762+Badapull+Infront+of+Ansal+Basera+Gwalior+Road+Jhansi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Open in Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Owner Info Section */}
        <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Meet The <span className="text-secondary">Owner</span>
                </h2>
                <p className="text-primary-foreground/90 text-lg font-[family-name:var(--font-inter)]">
                  Your trusted partner in real estate
                </p>
              </div>

              <Card className="bg-background/95 backdrop-blur-sm border-0 shadow-2xl">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-5xl font-bold text-secondary-foreground">GK</span>
                      </div>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-3xl font-bold text-foreground mb-2">Ghanshyam Kushwaha</h3>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mb-4">
                        <Building2 className="h-5 w-5" />
                        <p className="font-[family-name:var(--font-inter)]">
                          Founder & Director, Shyam Sarkar Real Estate Pvt. Ltd.
                        </p>
                      </div>
                      <p className="text-muted-foreground mb-6 font-[family-name:var(--font-inter)] leading-relaxed">
                        With over 20 years of experience in the real estate industry, Mr. Kushwaha has helped thousands
                        of families find their dream properties in Jhansi and nearby areas. His expertise and dedication
                        to client satisfaction have made Shyam Sarkar Real Estate a trusted name in the region.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button
                          asChild
                          size="lg"
                          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-[family-name:var(--font-inter)] shadow-lg hover:shadow-xl transition-all"
                        >
                          <a href={`tel:+${phoneNumber}`}>
                            <Phone className="mr-2 h-5 w-5" />
                            +91 7985206466
                          </a>
                        </Button>
                        <Button
                          asChild
                          size="lg"
                          variant="outline"
                          className="border-2 font-[family-name:var(--font-inter)] hover:bg-foreground hover:text-background transition-all shadow-lg hover:shadow-xl"
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
                      </div>
                    </div>
                  </div>
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
