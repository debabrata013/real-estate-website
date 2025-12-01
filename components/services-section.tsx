import { Home, Building2, MapPin, Key, TrendingUp, FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Home,
    title: "Residential Properties",
    description:
      "Find your dream home from our curated collection of houses, apartments, and villas in prime locations.",
  },
  {
    icon: Building2,
    title: "Commercial Properties",
    description: "Explore offices, shops, showrooms, and commercial spaces perfect for your business needs.",
  },
  {
    icon: MapPin,
    title: "Land & Plots",
    description: "Invest in premium land and plots in developing areas with high appreciation potential.",
  },
  {
    icon: Key,
    title: "Rental Services",
    description: "Whether renting or leasing, we help you find the perfect property that fits your requirements.",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Get expert guidance on property investments with high returns and secure documentation.",
  },
  {
    icon: FileText,
    title: "Documentation Help",
    description: "Complete assistance with property documentation, registration, and legal formalities.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            What We Offer
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-serif">
            Our Premium <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We offer comprehensive real estate solutions tailored to meet all your property needs in Jhansi and nearby
            areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border bg-background overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-primary transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl text-foreground font-serif">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
