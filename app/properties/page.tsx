"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Bed, Bath, Square, Search, Filter, Phone, MessageCircle } from "lucide-react"
import { properties } from "@/lib/properties-data"

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [propertyType, setPropertyType] = useState("all")
  const [propertyStatus, setPropertyStatus] = useState("all")
  const [sortBy, setSortBy] = useState("featured")

  const filteredProperties = useMemo(() => {
    let filtered = [...properties]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.location.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query),
      )
    }

    // Type filter
    if (propertyType !== "all") {
      filtered = filtered.filter((p) => p.type === propertyType)
    }

    // Status filter
    if (propertyStatus !== "all") {
      filtered = filtered.filter((p) => p.status === propertyStatus)
    }

    // Sorting
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.priceNumeric - b.priceNumeric)
        break
      case "price-high":
        filtered.sort((a, b) => b.priceNumeric - a.priceNumeric)
        break
      case "area":
        filtered.sort((a, b) => b.areaNumeric - a.areaNumeric)
        break
      case "featured":
      default:
        filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0))
        break
    }

    return filtered
  }, [searchQuery, propertyType, propertyStatus, sortBy])

  const phoneNumber = "917985206466"

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                Our <span className="text-secondary">Properties</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 font-[family-name:var(--font-inter)]">
                Explore our curated collection of premium properties in Jhansi and nearby areas.
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-muted border-b border-border sticky top-[130px] z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by location, property name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 font-[family-name:var(--font-inter)]"
                />
              </div>
              <div className="flex flex-wrap gap-4 w-full lg:w-auto">
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="w-full sm:w-[150px] font-[family-name:var(--font-inter)]">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Residential">Residential</SelectItem>
                    <SelectItem value="Commercial">Commercial</SelectItem>
                    <SelectItem value="Land">Land / Plot</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={propertyStatus} onValueChange={setPropertyStatus}>
                  <SelectTrigger className="w-full sm:w-[140px] font-[family-name:var(--font-inter)]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="For Sale">For Sale</SelectItem>
                    <SelectItem value="For Rent">For Rent</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-[150px] font-[family-name:var(--font-inter)]">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="area">Area: Largest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground font-[family-name:var(--font-inter)]">
                Showing <span className="font-semibold text-foreground">{filteredProperties.length}</span> properties
              </p>
            </div>

            {filteredProperties.length === 0 ? (
              <div className="text-center py-16">
                <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No Properties Found</h3>
                <p className="text-muted-foreground font-[family-name:var(--font-inter)]">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <Card
                    key={property.id}
                    className="group overflow-hidden hover:shadow-xl transition-all border-border"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
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
                      {property.isFeatured && (
                        <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground font-[family-name:var(--font-inter)]">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-5">
                      <div className="text-2xl font-bold text-primary mb-2 font-[family-name:var(--font-inter)]">
                        {property.price}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{property.title}</h3>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3 font-[family-name:var(--font-inter)]">
                        <MapPin className="h-4 w-4" />
                        {property.location}
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 font-[family-name:var(--font-inter)]">
                        {property.description}
                      </p>
                      <div className="flex items-center gap-4 text-muted-foreground text-sm border-t border-border pt-4 mb-4 font-[family-name:var(--font-inter)]">
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
                      <div className="flex gap-2">
                        <Button
                          asChild
                          className="flex-1 bg-primary hover:bg-primary/90 font-[family-name:var(--font-inter)]"
                        >
                          <a href={`tel:+${phoneNumber}`}>
                            <Phone className="mr-2 h-4 w-4" />
                            Call
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="flex-1 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-[family-name:var(--font-inter)] bg-transparent"
                        >
                          <a
                            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                              `Hi, I'm interested in: ${property.title} at ${property.location} (${property.price})`,
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MessageCircle className="mr-2 h-4 w-4" />
                            WhatsApp
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6 font-[family-name:var(--font-inter)]">
              Contact us with your specific requirements and we&apos;ll help you find the perfect property.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-[family-name:var(--font-inter)]"
            >
              <a href="tel:+917985206466">
                <Phone className="mr-2 h-5 w-5" />
                Call: +91 7985206466
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
