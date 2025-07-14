import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Rakesh Sharma",
      position: "CEO",
      company: "UrbanTech Pvt. Ltd.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial:
        "OmConscructions delivered our commercial building project on time with exceptional quality. Their attention to detail and professional approach made the entire process smooth. We highly recommend them for any construction project.",
      project: "Tech Park Offices",
    },
    {
      id: 2,
      name: "Priya Patel",
      position: "Managing Director",
      company: "Green Living Developers",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c1c2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial:
        "Working with OmConscructions was a fantastic experience. They understood our vision for eco-friendly villas and executed it perfectly. The quality of construction and finishing is outstanding. Truly professional team!",
      project: "Greenview Villas",
    },
    {
      id: 3,
      name: "Amit Kumar",
      position: "Project Director",
      company: "ABC Developers Pvt. Ltd.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial:
        "The Skyline Heights project was completed within the promised timeline without compromising on quality. OmConscructions' team showed great expertise in handling complex construction challenges. Excellent work!",
      project: "Skyline Heights",
    },
    {
      id: 4,
      name: "Sunita Reddy",
      position: "Operations Head",
      company: "Manufacturing Corp Ltd.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial:
        "Our industrial facility was built to international standards with all safety protocols in place. OmConscructions demonstrated exceptional project management skills and delivered beyond our expectations.",
      project: "Industrial Hub",
    },
    {
      id: 5,
      name: "Vikram Singh",
      position: "Chairman",
      company: "Luxury Resorts India",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial:
        "The luxury resort project required intricate design and premium finishing. OmConscructions exceeded our expectations with their craftsmanship and attention to detail. The result is simply magnificent!",
      project: "Luxury Resort",
    },
    {
      id: 6,
      name: "Neha Gupta",
      position: "Real Estate Developer",
      company: "Metro Properties",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial:
        "OmConscructions has been our trusted construction partner for multiple projects. Their consistency in quality, timely delivery, and transparent communication makes them stand out in the industry.",
      project: "Metro Shopping Complex",
    },
  ]

  const stats = [
    { number: "120+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Years Experience" },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`h-4 w-4 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Hear what our satisfied clients have to say about their experience working with OmConscructions.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Real feedback from real clients who trusted us with their construction projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="w-15 h-15 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      <p className="text-sm text-orange-600">{testimonial.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-4">{renderStars(testimonial.rating)}</div>

                  <div className="relative mb-4">
                    <Quote className="h-8 w-8 text-orange-200 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground italic pl-6">"{testimonial.testimonial}"</p>
                  </div>

                  <Badge variant="outline" className="text-xs">
                    Project: {testimonial.project}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Satisfied Clients</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the OmConscructions difference. Let us help you build your dream project with the same quality
            and dedication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition-colors">
              <a href="/contact">Start Your Project</a>
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors bg-transparent">
              <a href="/portfolio">View Our Work</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
