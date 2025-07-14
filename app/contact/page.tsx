"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-orange-600" />,
      title: "Office Address",
      details: ["OmConscructions", "Sector 45, Noida", "Uttar Pradesh, India - 201303"],
    },
    {
      icon: <Phone className="h-6 w-6 text-orange-600" />,
      title: "Phone Numbers",
      details: ["+91-9876543210", "+91-9876543211", "Toll Free: 1800-123-4567"],
    },
    {
      icon: <Mail className="h-6 w-6 text-orange-600" />,
      title: "Email Addresses",
      details: ["info@omconscructions.com", "projects@omconscructions.com", "support@omconscructions.com"],
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-600" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: Closed"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Ready to start your construction project? Get in touch with our team for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">We're here to help you with all your construction needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">{info.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project inquiry, quote request, etc."
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-orange-600 hover:bg-orange-700">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Visit Our Office</h2>
              <div className="bg-slate-100 rounded-lg p-8 mb-6">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">OmConscructions Head Office</h3>
                  <p className="text-muted-foreground mb-4">
                    Sector 45, Noida
                    <br />
                    Uttar Pradesh, India - 201303
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Our office is easily accessible by metro and road. Visitor parking is available.
                  </p>
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Why Choose OmConscructions?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <span className="text-muted-foreground">15+ years of construction experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <span className="text-muted-foreground">120+ successfully completed projects</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <span className="text-muted-foreground">Expert team of engineers and architects</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <span className="text-muted-foreground">On-time delivery guarantee</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <span className="text-muted-foreground">Transparent pricing and processes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't wait! Contact us today for a free consultation and let's bring your construction dreams to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href="tel:+919876543210">Call Now: +91-9876543210</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
            >
              <a href="mailto:info@omconscructions.com">Email Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
