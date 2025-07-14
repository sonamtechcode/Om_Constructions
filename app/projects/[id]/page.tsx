import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Calendar, Building, User } from "lucide-react"

// Project data with proper typing
const projectsData = {
  "1": {
    id: "1",
    title: "Skyline Heights",
    type: "Residential",
    category: "Luxury Apartments",
    location: "Mumbai, India",
    completionYear: "2023",
    client: "ABC Developers Pvt. Ltd.",
    status: "Completed",
    description:
      "Skyline Heights is a modern 20-story luxury apartment complex featuring contemporary design, premium amenities, and sustainable green spaces. The project focused on creating a perfect blend of comfort and elegance for urban living.",
    scope: ["Civil Construction", "Electrical Work", "Interior Finishing", "Landscaping"],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    ],
    specifications: {
      "Total Area": "2.5 acres",
      "Total Units": "120 apartments",
      Floors: "20 floors",
      Parking: "150 car spaces",
      Amenities: "Swimming pool, Gym, Garden",
    },
  },
  "2": {
    id: "2",
    title: "Greenview Villas",
    type: "Residential",
    category: "Villa Complex",
    location: "Pune, India",
    completionYear: "2022",
    client: "Green Living Developers",
    status: "Completed",
    description:
      "Greenview Villas is an exclusive residential complex featuring 25 independent villas with modern architecture and eco-friendly design. Each villa is designed with spacious layouts and premium finishes.",
    scope: ["Civil Construction", "Electrical Work", "Plumbing", "Landscaping", "Interior Design"],
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    ],
    specifications: {
      "Total Area": "5 acres",
      "Total Villas": "25 independent villas",
      "Villa Size": "2500-3500 sq ft",
      Bedrooms: "3-4 BHK",
      "Special Features": "Private gardens, Solar panels",
    },
  },
  "3": {
    id: "3",
    title: "Tech Park Offices",
    type: "Commercial",
    category: "Office Building",
    location: "Bangalore, India",
    completionYear: "2023",
    client: "TechCorp Solutions",
    status: "Completed",
    description:
      "A state-of-the-art commercial office building designed for modern businesses. Features include smart building technology, energy-efficient systems, and flexible workspace solutions.",
    scope: ["Civil Construction", "MEP Services", "IT Infrastructure", "Interior Fit-out"],
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=600&fit=crop",
    ],
    specifications: {
      "Total Area": "1.2 million sq ft",
      Floors: "15 floors",
      Capacity: "5000 employees",
      Parking: "800 car spaces",
      Certification: "LEED Gold certified",
    },
  },
  "4": {
    id: "4",
    title: "Industrial Hub",
    type: "Industrial",
    category: "Manufacturing Facility",
    location: "Chennai, India",
    completionYear: "2022",
    client: "Manufacturing Corp Ltd.",
    status: "Completed",
    description:
      "A comprehensive industrial manufacturing facility with modern production lines, warehouse spaces, and administrative offices. Built to international standards with focus on safety and efficiency.",
    scope: ["Civil Construction", "Structural Steel", "MEP Services", "Fire Safety Systems"],
    images: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    ],
    specifications: {
      "Total Area": "10 acres",
      "Built-up Area": "500,000 sq ft",
      "Production Lines": "8 automated lines",
      Warehouse: "200,000 sq ft",
      "Power Capacity": "5 MW",
    },
  },
  "skyline-heights": {
    id: "skyline-heights",
    title: "Skyline Heights",
    type: "Residential",
    category: "Luxury Apartments",
    location: "Mumbai, India",
    completionYear: "2023",
    client: "ABC Developers Pvt. Ltd.",
    status: "Completed",
    description:
      "Skyline Heights is a modern 20-story luxury apartment complex featuring contemporary design, premium amenities, and sustainable green spaces. The project focused on creating a perfect blend of comfort and elegance for urban living.",
    scope: ["Civil Construction", "Electrical Work", "Interior Finishing", "Landscaping"],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    ],
    specifications: {
      "Total Area": "2.5 acres",
      "Total Units": "120 apartments",
      Floors: "20 floors",
      Parking: "150 car spaces",
      Amenities: "Swimming pool, Gym, Garden",
    },
  },
}

const relatedProjects = [
  {
    id: "2",
    title: "Greenview Villas",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    location: "Pune, India",
  },
  {
    id: "3",
    title: "Tech Park Offices",
    type: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    location: "Bangalore, India",
  },
]

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectsData[params.id as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Button asChild variant="outline" size="sm">
              <Link href="/portfolio">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Link>
            </Button>
            <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
              <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {project.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {project.completionYear}
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  {project.type}
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {project.client}
                </div>
              </div>
              <p className="text-lg text-muted-foreground">{project.description}</p>
            </div>
            <div className="relative">
              <Image
                src={project.images[0] || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="relative group cursor-pointer">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Scope of Work */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Scope of Work</h3>
                <ul className="space-y-2">
                  {project.scope.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Project Specifications */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Project Specifications</h3>
                <div className="space-y-3">
                  {Object.entries(project.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-medium">{key}:</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedProjects.map((relatedProject) => (
              <Card key={relatedProject.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <Link href={`/projects/${relatedProject.id}`}>
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={relatedProject.image || "/placeholder.svg"}
                        alt={relatedProject.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1">{relatedProject.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{relatedProject.type}</p>
                      <p className="text-sm text-orange-600">{relatedProject.location}</p>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in a Similar Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your construction vision to life with the same quality and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
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
