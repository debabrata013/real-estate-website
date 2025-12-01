import Link from "next/link"
import { Building2, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Sparkles, Code2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Gold accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <Building2 className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif">Shyam Sarkar</h3>
                <p className="text-xs text-secondary-foreground/70 font-medium">Real Estate Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed mb-6">
              Your trusted partner for all real estate needs in Jhansi and nearby areas. We specialize in residential,
              commercial, and land properties.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">15+ Years of Excellence</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary font-serif">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/properties", label: "Properties" },
                { href: "/buy", label: "Buy Property" },
                { href: "/sell", label: "Sell Property" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary font-serif">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Property Buying",
                "Property Selling",
                "Land & Plots",
                "Rental Services",
                "Investment Advisory",
                "Commercial Properties",
              ].map((service) => (
                <li key={service} className="text-secondary-foreground/80 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary font-serif">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span className="text-secondary-foreground/80 text-sm leading-relaxed">
                  762, Badapull, Infront of Ansal Basera, Gwalior Road, Jhansi
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <a
                  href="tel:+917985206466"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors font-medium"
                >
                  +91 7985206466
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <a
                  href="mailto:kushwaha89ghanshyam@gmail.com"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  kushwaha89ghanshyam@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-lg flex items-center justify-center transition-all text-secondary-foreground/80 hover:text-primary-foreground"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Shyam Sarkar Real Estate Pvt. Ltd. All rights reserved. | Owner: Ghanshyam
              Kushwaha
            </p>
            <div className="flex items-center gap-2 text-secondary-foreground/60 text-sm">
              <Code2 className="h-4 w-4 text-accent" />
              <span>Designed by</span>
              <span className="font-semibold text-accent">TechBro24</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
