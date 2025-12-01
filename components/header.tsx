"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, Mail, Building2, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Properties", href: "/properties" },
  { name: "Buy Property", href: "/buy" },
  { name: "Sell Property", href: "/sell" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-background/98 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-2.5 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6 flex-wrap">
            <a
              href="tel:+917985206466"
              className="flex items-center gap-2 hover:text-primary transition-colors font-medium"
            >
              <Phone className="h-4 w-4 text-primary" />
              <span>+91 7985206466</span>
            </a>
            <a
              href="mailto:kushwaha89ghanshyam@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors hidden sm:flex"
            >
              <Mail className="h-4 w-4 text-primary" />
              <span>kushwaha89ghanshyam@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-primary font-semibold hidden md:flex">
            <MapPin className="h-4 w-4" />
            Trusted Real Estate Partner in Jhansi
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4 border-b border-border/50">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-[oklch(0.65_0.14_75)] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <Building2 className="h-7 w-7 text-secondary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-secondary leading-tight font-serif">Shyam Sarkar</h1>
              <p className="text-xs text-muted-foreground font-medium tracking-wide">Real Estate Pvt. Ltd.</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-[oklch(0.65_0.14_75)] hover:opacity-90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all px-6"
            >
              <a href="tel:+917985206466">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary font-medium transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-[oklch(0.65_0.14_75)] text-primary-foreground w-full font-semibold"
              >
                <a href="tel:+917985206466">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
