import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Rakesh Sharma",
      position: "CEO, UrbanTech Pvt. Ltd.",
      company: "UrbanTech Pvt. Ltd.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      testimonial:
        "OmConscructions delivered our commercial building on time with exceptional quality. Their attention to detail and professional approach made the entire process smooth. We highly recommend them for any construction project!",
      project: "Tech Park Offices, Bangalore",
    },
    {
      name: "Priya Patel",
      position: "Director, Green Living Developers",
      company: "Green Living Developers",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      testimonial:
        "Working with OmConscructions on our villa project was an absolute pleasure. They understood our vision perfectly and executed it beyond our expectations. The quality of work and timely delivery impressed us greatly.",
      project: "Greenview Villas, Pune",
    },
    {
      name: "Amit Kumar",
      position: "Managing Director, ABC Developers",
      company: "ABC Developers Pvt. Ltd.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      testimonial:
        "The team at OmConscructions is highly professional and skilled. They completed our luxury apartment project with outstanding quality and within budget. Their project management skills are commendable.",
      project: "Skyline Heights, Mumbai",
    },
    {
      name: "Sunita Reddy",
      position: "Owner, Reddy Industries",
      company: "Reddy Industries",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      testimonial:
        "OmConscructions handled our industrial facility construction with great expertise. They understood the technical requirements and delivered a robust structure that meets all our operational needs.",
      project: "Industrial Hub, Chennai",
    },
    {
      name: "Rajesh Gupta",
      position: "Chairman, Metro Group",
      company: "Metro Group",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      testimonial:
        "Excellent work quality and professional service. The shopping complex they built for us has become a landmark in the area. Their team's dedication and expertise are truly remarkable.",
      project: "Metro Shopping Complex, Delhi",
    },
    {
      name: "Kavita Singh",
      position: "Director, Riverside Developers",
      company: "Riverside Developers",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      testimonial:
        "From planning to execution, OmConscructions maintained the highest standards. Our apartment complex project was completed ahead of schedule with superior quality. Highly satisfied with their services.",
      project: "Riverside Apartments, Hyderabad",
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`h-4 w-4 ${index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience
            working with OmConscructions.
          </p>
        </div>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">120+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">4.9</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-orange-600 mb-4" />
                </div>

                <blockquote className="text-muted-foreground mb-6 flex-grow">"{testimonial.testimonial}"</blockquote>

                <div className="border-t pt-4">
                  <div className="flex items-center gap-4 mb-3">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                      <div className="text-sm text-orange-600">{testimonial.company}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">{renderStars(testimonial.rating)}</div>

                  <div className="text-xs text-muted-foreground">Project: {testimonial.project}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <section className="mt-20 text-center bg-slate-50 py-16 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Happy Clients?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the same level of quality and professionalism that our clients rave about. Let's discuss your
            construction project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-orange-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-orange-700"
            >
              Get Free Consultation
            </a>
            <a
              href="/portfolio"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              View Our Work
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
