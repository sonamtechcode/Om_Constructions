import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your construction project? Get in touch with our team for a free consultation and detailed
            quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-orange-600" />
                    Office Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    OmConscructions
                    <br />
                    Sector 45, Plot No. 123
                    <br />
                    Noida, Uttar Pradesh 201301
                    <br />
                    India
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-orange-600" />
                    Phone Number
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    +91-9876543210
                    <br />
                    +91-9876543211
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-orange-600" />
                    Email Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    info@omconscructions.com
                    <br />
                    projects@omconscructions.com
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-orange-600" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Get a Free Quote</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed consultation.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <select id="projectType" className="w-full px-3 py-2 border border-input rounded-md bg-background">
                      <option value="">Select project type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="industrial">Industrial</option>
                      <option value="renovation">Renovation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Estimated Budget</Label>
                    <select id="budget" className="w-full px-3 py-2 border border-input rounded-md bg-background">
                      <option value="">Select budget range</option>
                      <option value="under-50l">Under ₹50 Lakhs</option>
                      <option value="50l-1cr">₹50 Lakhs - ₹1 Crore</option>
                      <option value="1cr-5cr">₹1 Crore - ₹5 Crores</option>
                      <option value="5cr-10cr">₹5 Crores - ₹10 Crores</option>
                      <option value="above-10cr">Above ₹10 Crores</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Project Location</Label>
                    <Input id="location" placeholder="Enter project location" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your project requirements, timeline, and any specific needs..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="terms" className="rounded" required />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the terms and conditions and privacy policy *
                    </Label>
                  </div>

                  <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700" size="lg">
                    Send Message & Get Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Find Us</CardTitle>
              <p className="text-muted-foreground">
                Visit our office for in-person consultations and project discussions.
              </p>
            </CardHeader>
            <CardContent>
              <div className="w-full h-96 bg-slate-200 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Interactive Map Placeholder</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
