import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react"

const properties = [
  {
    id: 1,
    title: "Modern 3BHK Apartment",
    location: "Civil Lines, Jhansi",
    price: "₹85 Lakhs",
    type: "Residential",
    status: "For Sale",
    beds: 3,
    baths: 2,
    area: "1450 sq.ft",
    image: "/modern-apartment-living-room.png",
  },
  {
    id: 2,
    title: "Commercial Shop Space",
    location: "Gwalior Road, Jhansi",
    price: "₹1.2 Crore",
    type: "Commercial",
    status: "For Sale",
    beds: 0,
    baths: 1,
    area: "800 sq.ft",
    image: "/commercial-shop-front-retail-space.jpg",
  },
  {
    id: 3,
    title: "Premium Plot",
    location: "Sipri Bazaar, Jhansi",
    price: "₹45 Lakhs",
    type: "Land",
    status: "For Sale",
    beds: 0,
    baths: 0,
    area: "2000 sq.ft",
    image: "/residential-plot-land-green-area.jpg",
  },
  {
    id: 4,
    title: "Luxury Villa",
    location: "Sadar Bazaar, Jhansi",
    price: "₹2.5 Crore",
    type: "Residential",
    status: "For Sale",
    beds: 4,
    baths: 3,
    area: "3200 sq.ft",
    image: "/luxury-villa-exterior-garden.jpg",
  },
  {
    id: 5,
    title: "Office Space",
    location: "Elite Chowk, Jhansi",
    price: "₹25,000/month",
    type: "Commercial",
    status: "For Rent",
    beds: 0,
    baths: 2,
    area: "1200 sq.ft",
    image: "/modern-office-interior.png",
  },
  {
    id: 6,
    title: "2BHK Flat",
    location: "Kanpur Road, Jhansi",
    price: "₹12,000/month",
    type: "Residential",
    status: "For Rent",
    beds: 2,
    baths: 1,
    area: "950 sq.ft",
    image: "/cozy-apartment-bedroom-interior.jpg",
  },
]

export function FeaturedProperties() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured <span className="text-secondary">Properties</span>
            </h2>
            <p className="text-muted-foreground max-w-xl font-[family-name:var(--font-inter)]">
              Discover our handpicked selection of premium properties in Jhansi and surrounding areas.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-4 md:mt-0 font-[family-name:var(--font-inter)] bg-transparent"
          >
            <Link href="/properties">
              View All Properties
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Card key={property.id} className="group overflow-hidden hover:shadow-xl transition-all border-border">
              <div className="relative overflow-hidden">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  width={400}
                  height={300}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge className="bg-primary text-primary-foreground font-[family-name:var(--font-inter)]">
                    {property.type}
                  </Badge>
                  <Badge
                    className={
                      property.status === "For Rent"
                        ? "bg-secondary text-secondary-foreground font-[family-name:var(--font-inter)]"
                        : "bg-green-600 text-white font-[family-name:var(--font-inter)]"
                    }
                  >
                    {property.status}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-5">
                <div className="text-2xl font-bold text-primary mb-2 font-[family-name:var(--font-inter)]">
                  {property.price}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{property.title}</h3>
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4 font-[family-name:var(--font-inter)]">
                  <MapPin className="h-4 w-4" />
                  {property.location}
                </div>
                <div className="flex items-center gap-4 text-muted-foreground text-sm border-t border-border pt-4 font-[family-name:var(--font-inter)]">
                  {property.beds > 0 && (
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      {property.beds} Beds
                    </div>
                  )}
                  {property.baths > 0 && (
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      {property.baths} Baths
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Square className="h-4 w-4" />
                    {property.area}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
