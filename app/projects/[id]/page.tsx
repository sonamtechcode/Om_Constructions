import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Calendar, Building, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock data for projects
const projectsData = {
  1: {
    title: "Skyline Heights",
    subtitle: "Luxury Apartments",
    location: "Mumbai, India",
    type: "Residential",
    completionYear: "2023",
    client: "ABC Developers Pvt. Ltd.",
    scope: "Civil, Electrical, Finishing",
    description:
      "Skyline Heights is a modern 20-story apartment complex that redefines luxury living in Mumbai. The project focused on luxury design, structural strength, and sustainable green spaces. We delivered the entire project within 14 months, incorporating state-of-the-art amenities and eco-friendly features.",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1515263487990-61b07816b924?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=500&fit=crop",
    ],
    features: [
      "20-story luxury apartment complex",
      "120 premium residential units",
      "Rooftop garden and recreational area",
      "Underground parking for 150 vehicles",
      "24/7 security and concierge services",
      "Swimming pool and fitness center",
      "Sustainable green building features",
    ],
    specifications: {
      "Total Area": "2.5 Million sq ft",
      "Number of Units": "120 Apartments",
      Floors: "20 Floors + Basement",
      Parking: "150 Car Spaces",
      Amenities: "Pool, Gym, Garden, Security",
    },
  },
  2: {
    title: "Greenview Villas",
    subtitle: "Residential Complex",
    location: "Pune, India",
    type: "Residential",
    completionYear: "2023",
    client: "Green Living Developers",
    scope: "Complete Construction, Landscaping",
    description:
      "Greenview Villas is an exclusive residential complex featuring 50 independent villas designed for modern families. Each villa combines contemporary architecture with traditional Indian elements, set within beautifully landscaped gardens.",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=500&fit=crop",
    ],
    features: [
      "50 independent luxury villas",
      "3 & 4 BHK configurations",
      "Private gardens for each villa",
      "Community clubhouse",
      "Children's play area",
      "Jogging track and outdoor gym",
      "24/7 gated community security",
    ],
    specifications: {
      "Total Villas": "50 Units",
      "Villa Types": "3 BHK & 4 BHK",
      "Plot Size": "2000-3000 sq ft",
      "Built-up Area": "1800-2500 sq ft",
      Amenities: "Clubhouse, Security, Gardens",
    },
  },
  3: {
    title: "Tech Park Offices",
    subtitle: "Commercial Building",
    location: "Bangalore, India",
    type: "Commercial",
    completionYear: "2022",
    client: "TechCorp Solutions",
    scope: "Civil, MEP, Interior Fit-out",
    description:
      "Tech Park Offices is a state-of-the-art commercial building designed to meet the needs of modern technology companies. The building features flexible office spaces, advanced IT infrastructure, and sustainable design elements.",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=500&fit=crop",
    ],
    features: [
      "15-floor modern office building",
      "Flexible office space configurations",
      "Advanced IT and telecom infrastructure",
      "Energy-efficient HVAC systems",
      "Multi-level parking facility",
      "Food court and recreational areas",
      "LEED Gold certified building",
    ],
    specifications: {
      "Total Area": "1.8 Million sq ft",
      Floors: "15 Floors + Basement",
      "Office Capacity": "2000+ Employees",
      Parking: "400 Car Spaces",
      Certification: "LEED Gold",
    },
  },
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const projectId = Number.parseInt(params.id)
  const project = projectsData[projectId as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/portfolio">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-orange-100 text-orange-800">{project.type}</Badge>
            <Badge variant="outline">{project.completionYear}</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{project.subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-orange-600" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-orange-600" />
              <span>Completed {project.completionYear}</span>
            </div>
            <div className="flex items-center gap-2">
              <Building className="h-4 w-4 text-orange-600" />
              <span>{project.scope}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-orange-600" />
              <span>{project.client}</span>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <Image
                src={project.images[0] || "/placeholder.svg"}
                alt={`${project.title} main image`}
                width={800}
                height={500}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {project.images.slice(1, 3).map((image, index) => (
                <Image
                  key={index}
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} image ${index + 2}`}
                  width={400}
                  height={240}
                  className="w-full h-44 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>

          {project.images.length > 3 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {project.images.slice(3).map((image, index) => (
                <Image
                  key={index}
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} image ${index + 4}`}
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover rounded-lg"
                />
              ))}
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Project Description</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{project.description}</p>

            <h3 className="text-xl font-bold mb-4">Key Features</h3>
            <ul className="space-y-2 mb-8">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Project Specifications</h3>
                <div className="space-y-3">
                  {Object.entries(project.specifications).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="font-medium text-sm">{key}:</span>
                      <span className="text-sm text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="mt-6">
              <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(projectsData)
              .filter(([id]) => Number.parseInt(id) !== projectId)
              .slice(0, 3)
              .map(([id, relatedProject]) => (
                <Card key={id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                  <Link href={`/projects/${id}`}>
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <Image
                          src={relatedProject.images[0] || "/placeholder.svg"}
                          alt={relatedProject.title}
                          width={400}
                          height={250}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-1">{relatedProject.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{relatedProject.subtitle}</p>
                        <p className="text-sm text-orange-600">{relatedProject.location}</p>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
          </div>
        </section>
      </div>
    </div>
  )
}
