import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Clock, Users, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const featuredProjects = [
    {
      id: 1,
      title: "Skyline Heights",
      category: "Luxury Apartments",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      location: "Mumbai, India",
      status: "Completed",
    },
    {
      id: 2,
      title: "Greenview Villas",
      category: "Villa Complex",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      location: "Pune, India",
      status: "Completed",
    },
    {
      id: 3,
      title: "Tech Park Offices",
      category: "Office Building",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      location: "Bangalore, India",
      status: "Completed",
    },
    {
      id: 4,
      title: "Industrial Hub",
      category: "Manufacturing Facility",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      location: "Chennai, India",
      status: "Completed",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=800&fit=crop')",
          }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">We Build Your Dreams into Reality</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            With over 15 years of experience, we specialize in residential, commercial, and industrial construction
            projects across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8">
              <Link href="/portfolio">View Our Portfolio</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
            >
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About OmConscructions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Building excellence since 2008, we have established ourselves as a trusted name in the construction
              industry.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">120+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">10+</div>
              <div className="text-muted-foreground">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              Explore some of our most successful and innovative construction projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
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
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-green-100 text-green-800">{project.status}</Badge>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-orange-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{project.category}</p>
                      <p className="text-sm text-orange-600 font-medium">{project.location}</p>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose OmConscructions?</h2>
            <p className="text-lg text-muted-foreground">
              What makes us the preferred choice for construction projects across India
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">High-Quality Construction</h3>
              <p className="text-muted-foreground">
                We use premium materials and follow international quality standards to ensure durability and excellence.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">On-Time Delivery</h3>
              <p className="text-muted-foreground">
                We pride ourselves on completing projects within the agreed timeline without compromising on quality.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Experienced Team</h3>
              <p className="text-muted-foreground">
                Our team of skilled engineers, architects, and project managers brings decades of industry expertise.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Transparent Process</h3>
              <p className="text-muted-foreground">
                Complete transparency in our processes, pricing, and regular project progress updates for peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Dream Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our expertise and commitment to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
