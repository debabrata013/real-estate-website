"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Bed, Bath, Square, Search, Filter, Phone, MessageCircle, Heart } from "lucide-react"
import { properties } from "@/lib/properties-data"

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [propertyType, setPropertyType] = useState("all")
  const [propertyStatus, setPropertyStatus] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

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

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(id)) {
        newFavorites.delete(id)
      } else {
        newFavorites.add(id)
      }
      return newFavorites
    })
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/80 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 tracking-tight">
                Our <span className="text-secondary">Properties</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 font-[family-name:var(--font-inter)] max-w-2xl mx-auto">
                Explore our curated collection of premium properties in Jhansi and nearby areas
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-6 bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-40 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by location, property name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-11 font-[family-name:var(--font-inter)] focus-visible:ring-primary"
                />
              </div>
              <div className="flex flex-wrap gap-3 w-full lg:w-auto">
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="w-full sm:w-[160px] h-11 font-[family-name:var(--font-inter)]">
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
                  <SelectTrigger className="w-full sm:w-[150px] h-11 font-[family-name:var(--font-inter)]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="For Sale">For Sale</SelectItem>
                    <SelectItem value="For Rent">For Rent</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-[160px] h-11 font-[family-name:var(--font-inter)]">
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
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-muted-foreground font-[family-name:var(--font-inter)]">
                Showing{" "}
                <span className="font-semibold text-foreground text-lg">{filteredProperties.length}</span>{" "}
                {filteredProperties.length === 1 ? "property" : "properties"}
              </p>
            </div>

            {filteredProperties.length === 0 ? (
              <div className="text-center py-20 bg-background rounded-lg border border-border">
                <Filter className="h-20 w-20 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-2xl font-semibold text-foreground mb-2">No Properties Found</h3>
                <p className="text-muted-foreground font-[family-name:var(--font-inter)] text-lg">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredProperties.map((property) => (
                  <Card
                    key={property.id}
                    className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-border bg-background hover:-translate-y-1"
                  >
                    <div className="relative overflow-hidden h-56 bg-muted">
                      <Image
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        priority={property.isFeatured}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                        <Badge className="bg-primary/90 backdrop-blur-sm text-primary-foreground font-[family-name:var(--font-inter)] shadow-lg">
                          {property.type}
                        </Badge>
                        <Badge
                          className={
                            property.status === "For Rent"
                              ? "bg-secondary/90 backdrop-blur-sm text-secondary-foreground font-[family-name:var(--font-inter)] shadow-lg"
                              : "bg-green-600/90 backdrop-blur-sm text-white font-[family-name:var(--font-inter)] shadow-lg"
                          }
                        >
                          {property.status}
                        </Badge>
                      </div>
                      
                      {property.isFeatured && (
                        <Badge className="absolute top-3 right-3 bg-secondary/90 backdrop-blur-sm text-secondary-foreground font-[family-name:var(--font-inter)] shadow-lg">
                          ⭐ Featured
                        </Badge>
                      )}
                      
                      <button
                        onClick={() => toggleFavorite(property.id)}
                        className="absolute bottom-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-all duration-200 opacity-0 group-hover:opacity-100"
                        aria-label="Add to favorites"
                      >
                        <Heart
                          className={`h-5 w-5 transition-colors ${
                            favorites.has(property.id)
                              ? "fill-red-500 text-red-500"
                              : "text-muted-foreground"
                          }`}
                        />
                      </button>
                    </div>
                    
                    <CardContent className="p-5 space-y-4">
                      <div>
                        <div className="text-2xl font-bold text-primary mb-2 font-[family-name:var(--font-inter)]">
                          {property.price}
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                          {property.title}
                        </h3>
                        <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-3 font-[family-name:var(--font-inter)]">
                          <MapPin className="h-4 w-4 flex-shrink-0" />
                          <span className="line-clamp-1">{property.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground text-sm line-clamp-2 font-[family-name:var(--font-inter)] leading-relaxed">
                        {property.description}
                      </p>
                      
                      <div className="flex items-center gap-4 text-muted-foreground text-sm border-t border-border pt-4 font-[family-name:var(--font-inter)]">
                        {property.beds > 0 && (
                          <div className="flex items-center gap-1.5">
                            <Bed className="h-4 w-4" />
                            <span>{property.beds}</span>
                          </div>
                        )}
                        {property.baths > 0 && (
                          <div className="flex items-center gap-1.5">
                            <Bath className="h-4 w-4" />
                            <span>{property.baths}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1.5">
                          <Square className="h-4 w-4" />
                          <span>{property.area}</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        <Button
                          asChild
                          className="flex-1 bg-primary hover:bg-primary/90 font-[family-name:var(--font-inter)] shadow-sm hover:shadow-md transition-all"
                        >
                          <a href={`tel:+${phoneNumber}`}>
                            <Phone className="mr-2 h-4 w-4" />
                            Call
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="flex-1 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-[family-name:var(--font-inter)] bg-transparent shadow-sm hover:shadow-md transition-all"
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
        <section className="py-20 bg-gradient-to-br from-muted via-background to-muted relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-foreground/5" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 font-[family-name:var(--font-inter)] leading-relaxed">
              Contact us with your specific requirements and we&apos;ll help you find the perfect property
              tailored to your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-[family-name:var(--font-inter)] shadow-lg hover:shadow-xl transition-all h-12 px-8"
              >
                <a href={`tel:+${phoneNumber}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call: +91 7985206466
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 font-[family-name:var(--font-inter)] h-12 px-8 hover:bg-foreground hover:text-background transition-all"
              >
                <a
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    "Hi, I'm looking for a property. Can you help me?",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
