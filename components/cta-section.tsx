import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-muted via-background to-muted relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative">
        <div className="bg-gradient-to-br from-primary via-primary to-[oklch(0.35_0.16_25)] rounded-3xl p-10 md:p-16 shadow-2xl overflow-hidden relative">
          {/* Golden accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />

          <div className="grid md:grid-cols-2 gap-10 items-center relative">
            <div className="text-primary-foreground">
              <div className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full text-secondary text-sm font-semibold mb-6">
                <Sparkles className="h-4 w-4" />
                Start Your Journey Today
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif leading-tight">
                Ready to Find Your <span className="text-secondary">Dream Property?</span>
              </h2>
              <p className="text-primary-foreground/85 mb-8 text-lg leading-relaxed">
                Contact us today and let our experts help you navigate the real estate market. Whether buying, selling,
                or investing — we&apos;re here to assist you every step of the way.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold shadow-xl hover:shadow-2xl transition-all px-8 py-6 text-base"
                >
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary-foreground/80 text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold bg-transparent px-8 py-6 text-base transition-all"
                >
                  <a href="tel:+917985206466">
                    <Phone className="mr-2 h-5 w-5" />
                    +91 7985206466
                  </a>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-secondary/40 to-secondary/10 rounded-2xl rotate-2" />
                <Image
                  src="/happy-family-new-home-keys-handover.jpg"
                  alt="Happy Family with New Home"
                  width={600}
                  height={400}
                  className="relative rounded-2xl w-full h-auto shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
