"use client"

import { Phone, MessageCircle } from "lucide-react"

export function FloatingButtons() {
  const phoneNumber = "917985206466"
  const whatsappMessage = encodeURIComponent(
    "Hello! I am interested in your real estate services. Please provide more information.",
  )

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-xl transition-all hover:scale-110 hover:shadow-2xl flex items-center justify-center ring-4 ring-[#25D366]/20"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      <a
        href="tel:+917985206466"
        className="bg-gradient-to-br from-primary to-[oklch(0.65_0.14_75)] hover:opacity-90 text-primary-foreground p-4 rounded-full shadow-xl transition-all hover:scale-110 hover:shadow-2xl flex items-center justify-center ring-4 ring-primary/20"
        aria-label="Call Now"
      >
        <Phone className="h-7 w-7" />
      </a>
    </div>
  )
}
