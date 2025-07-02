import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Users, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const featuredProjects = [
    {
      id: 1,
      title: "Skyline Heights",
      type: "Luxury Apartments",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      location: "Mumbai, India",
    },
    {
      id: 2,
      title: "Greenview Villas",
      type: "Residential Complex",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      location: "Pune, India",
    },
    {
      id: 3,
      title: "Tech Park Offices",
      type: "Commercial Building",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      location: "Bangalore, India",
    },
    {
      id: 4,
      title: "Industrial Hub",
      type: "Manufacturing Facility",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      location: "Chennai, India",
    },
  ]

  const whyChooseUs = [
    {
      icon: <CheckCircle className="h-8 w-8 text-orange-600" />,
      title: "High-Quality Construction",
      description: "We use premium materials and follow international construction standards",
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: "On-Time Delivery",
      description: "98% of our projects are completed within the promised timeline",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Experienced Team",
      description: "Our engineers and staff have over 15 years of industry experience",
    },
    {
      icon: <Eye className="h-8 w-8 text-orange-600" />,
      title: "Transparent Process",
      description: "Regular updates and clear communication throughout the project",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">We Build Your Dreams into Reality</h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              With over 15 years of experience, we specialize in residential, commercial, and industrial construction
              projects across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Link href="/portfolio">View Our Portfolio</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
              >
                <Link href="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore some of our most successful construction projects that showcase our expertise and commitment to
              excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <Link href={`/projects/${project.id}`}>
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{project.type}</p>
                      <p className="text-sm text-orange-600">{project.location}</p>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are committed to delivering exceptional construction services with unmatched quality and
              professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Construction Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and turn it into reality. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
            >
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
