"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, CheckCircle } from "lucide-react"

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <Card className="border-border shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Send Us an Inquiry</CardTitle>
        <CardDescription className="font-[family-name:var(--font-inter)]">
          Fill out the form below and we&apos;ll get back to you shortly.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Thank You!</h3>
            <p className="text-muted-foreground font-[family-name:var(--font-inter)]">
              Your inquiry has been submitted. We&apos;ll contact you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1 font-[family-name:var(--font-inter)]">
                  Full Name *
                </label>
                <Input placeholder="Enter your name" required className="font-[family-name:var(--font-inter)]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1 font-[family-name:var(--font-inter)]">
                  Mobile Number *
                </label>
                <Input
                  type="tel"
                  placeholder="Enter your mobile"
                  required
                  className="font-[family-name:var(--font-inter)]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1 font-[family-name:var(--font-inter)]">
                Email Address
              </label>
              <Input type="email" placeholder="Enter your email" className="font-[family-name:var(--font-inter)]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1 font-[family-name:var(--font-inter)]">
                Property Interest *
              </label>
              <Select required>
                <SelectTrigger className="font-[family-name:var(--font-inter)]">
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential Property</SelectItem>
                  <SelectItem value="commercial">Commercial Property</SelectItem>
                  <SelectItem value="land">Land / Plot</SelectItem>
                  <SelectItem value="rental">Rental Property</SelectItem>
                  <SelectItem value="sell">Want to Sell Property</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1 font-[family-name:var(--font-inter)]">
                Message *
              </label>
              <Textarea
                placeholder="Tell us about your requirements..."
                rows={4}
                required
                className="font-[family-name:var(--font-inter)]"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 font-[family-name:var(--font-inter)]"
            >
              <Send className="mr-2 h-4 w-4" />
              Submit Inquiry
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
