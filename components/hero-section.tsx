import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Home, Building, MapPin, Key, Sparkles } from "lucide-react"
import { getImagePath } from "@/lib/utils"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-secondary via-secondary to-[oklch(0.22_0.01_30)] overflow-hidden min-h-[90vh] flex items-center">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 py-20 md:py-28 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-secondary-foreground">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg">
              <Sparkles className="h-4 w-4" />
              Jhansi&apos;s Most Trusted Real Estate Partner
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-balance font-serif">
              Find Your Perfect <span className="text-primary drop-shadow-lg">Dream Home</span> With Us
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/85 mb-10 leading-relaxed max-w-xl">
              Shyam Sarkar Real Estate brings you the finest properties in Jhansi and nearby areas. Whether you&apos;re
              buying, selling, or investing — we transform your property dreams into reality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-[oklch(0.65_0.14_75)] hover:opacity-90 text-primary-foreground font-semibold text-base px-8 py-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5"
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
                className="border-2 border-secondary-foreground/80 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary font-semibold text-base px-8 py-6 bg-transparent transition-all"
              >
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary via-primary/60 to-primary/30 rounded-3xl rotate-2" />
              <div className="absolute -inset-1 bg-gradient-to-br from-secondary-foreground/20 to-transparent rounded-2xl" />
              <Image
                src={getImagePath("/luxury-modern-home-exterior-with-beautiful-landsca.jpg")}
                alt="Premium Property"
                width={800}
                height={600}
                className="relative rounded-2xl shadow-2xl w-full h-auto border-4 border-secondary-foreground/10"
              />
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-primary to-[oklch(0.65_0.14_75)] text-primary-foreground px-6 py-3 rounded-xl shadow-xl font-semibold">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-xs uppercase tracking-wide">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-secondary-foreground/20">
          {[
            { icon: Home, value: "500+", label: "Properties Sold" },
            { icon: Building, value: "200+", label: "Commercial Deals" },
            { icon: MapPin, value: "15+", label: "Years Experience" },
            { icon: Key, value: "1000+", label: "Happy Clients" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/20 mb-3 group-hover:bg-primary/30 transition-colors">
                <stat.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1 font-serif">{stat.value}</div>
              <div className="text-secondary-foreground/70 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
