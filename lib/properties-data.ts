export interface Property {
  id: number
  title: string
  location: string
  price: string
  priceNumeric: number
  type: "Residential" | "Commercial" | "Land"
  status: "For Sale" | "For Rent"
  beds: number
  baths: number
  area: string
  areaNumeric: number
  image: string
  description: string
  features: string[]
  isFeatured: boolean
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Modern 3BHK Apartment",
    location: "Civil Lines, Jhansi",
    price: "₹85 Lakhs",
    priceNumeric: 8500000,
    type: "Residential",
    status: "For Sale",
    beds: 3,
    baths: 2,
    area: "1450 sq.ft",
    areaNumeric: 1450,
    image: "/modern-apartment-living-room.png",
    description:
      "Beautifully designed 3BHK apartment in the heart of Civil Lines with modern amenities and great connectivity.",
    features: ["Modular Kitchen", "Power Backup", "Parking", "Security", "Garden View"],
    isFeatured: true,
  },
  {
    id: 2,
    title: "Commercial Shop Space",
    location: "Gwalior Road, Jhansi",
    price: "₹1.2 Crore",
    priceNumeric: 12000000,
    type: "Commercial",
    status: "For Sale",
    beds: 0,
    baths: 1,
    area: "800 sq.ft",
    areaNumeric: 800,
    image: "/commercial-shop-front-retail-space.jpg",
    description: "Prime commercial space on Gwalior Road with excellent footfall and visibility for retail businesses.",
    features: ["Main Road Facing", "Parking Available", "Power Backup", "Water Supply"],
    isFeatured: true,
  },
  {
    id: 3,
    title: "Premium Residential Plot",
    location: "Sipri Bazaar, Jhansi",
    price: "₹45 Lakhs",
    priceNumeric: 4500000,
    type: "Land",
    status: "For Sale",
    beds: 0,
    baths: 0,
    area: "2000 sq.ft",
    areaNumeric: 2000,
    image: "/residential-plot-land-green-area.jpg",
    description: "Well-located residential plot in a developing area with all civic amenities nearby.",
    features: ["Corner Plot", "Clear Title", "Boundary Wall", "Road Access", "Water Connection"],
    isFeatured: true,
  },
  {
    id: 4,
    title: "Luxury Villa with Garden",
    location: "Sadar Bazaar, Jhansi",
    price: "₹2.5 Crore",
    priceNumeric: 25000000,
    type: "Residential",
    status: "For Sale",
    beds: 4,
    baths: 3,
    area: "3200 sq.ft",
    areaNumeric: 3200,
    image: "/luxury-villa-exterior-garden.jpg",
    description:
      "Exquisite 4BHK villa with beautiful garden, modern interiors, and premium fittings in a posh locality.",
    features: ["Private Garden", "Servant Quarter", "Swimming Pool", "Modular Kitchen", "Home Theater"],
    isFeatured: true,
  },

  {
    id: 7,
    title: "Independent House",
    location: "Narayan Bagh, Jhansi",
    price: "₹1.8 Crore",
    priceNumeric: 18000000,
    type: "Residential",
    status: "For Sale",
    beds: 5,
    baths: 4,
    area: "2800 sq.ft",
    areaNumeric: 2800,
    image: "/modern-apartment-living-room.png",
    description: "Spacious independent house with multiple floors, ideal for joint families.",
    features: ["Independent Entry", "Terrace", "Car Parking", "Garden", "Servant Room"],
    isFeatured: false,
  },
  {
    id: 8,
    title: "Agricultural Land",
    location: "Orchha Road, Jhansi",
    price: "₹80 Lakhs",
    priceNumeric: 8000000,
    type: "Land",
    status: "For Sale",
    beds: 0,
    baths: 0,
    area: "5 Acres",
    areaNumeric: 217800,
    image: "/modern-office-interior.png",
    description: "Fertile agricultural land with irrigation facilities, perfect for farming or farmhouse development.",
    features: ["Irrigation", "Electricity", "Road Access", "Fenced", "Tube Well"],
    isFeatured: false,
  },
  {
    id: 9,
    title: "Retail Showroom",
    location: "Manik Chowk, Jhansi",
    price: "₹2.8 Crore",
    priceNumeric: 28000000,
    type: "Commercial",
    status: "For Sale",
    beds: 0,
    baths: 2,
    area: "2500 sq.ft",
    areaNumeric: 2500,
    image: "/luxury-villa-exterior-garden.jpg",
    description: "Large retail showroom in prime commercial area with excellent visibility and customer flow.",
    features: ["Glass Facade", "AC Ducting", "Basement Storage", "Customer Parking", "Generator Room"],
    isFeatured: false,
  },

  {
    id: 12,
    title: "Corner Plot",
    location: "Bijauli, Jhansi",
    price: "₹35 Lakhs",
    priceNumeric: 3500000,
    type: "Land",
    status: "For Sale",
    beds: 0,
    baths: 0,
    area: "1600 sq.ft",
    areaNumeric: 1600,
    image: "/modern-apartment-living-room.png",
    description: "Corner plot in a residential colony with all basic amenities and good appreciation potential.",
    features: ["Corner Location", "Wide Road", "Registry Ready", "Boundary", "Near School"],
    isFeatured: false,
  },
]
