import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Skyline Heights",
      type: "Residential",
      category: "Luxury Apartments",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      location: "Mumbai, India",
      year: "2023",
      status: "Completed",
    },
    {
      id: 2,
      title: "Greenview Villas",
      type: "Residential",
      category: "Villa Complex",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      location: "Pune, India",
      year: "2023",
      status: "Completed",
    },
    {
      id: 3,
      title: "Tech Park Offices",
      type: "Commercial",
      category: "Office Building",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      location: "Bangalore, India",
      year: "2022",
      status: "Completed",
    },
    {
      id: 4,
      title: "Industrial Hub",
      type: "Industrial",
      category: "Manufacturing Facility",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      location: "Chennai, India",
      year: "2022",
      status: "Completed",
    },
    {
      id: 5,
      title: "Metro Shopping Complex",
      type: "Commercial",
      category: "Retail Complex",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      location: "Delhi, India",
      year: "2021",
      status: "Completed",
    },
    {
      id: 6,
      title: "Riverside Apartments",
      type: "Residential",
      category: "Apartment Complex",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
      location: "Hyderabad, India",
      year: "2021",
      status: "Completed",
    },
    {
      id: 7,
      title: "Corporate Headquarters",
      type: "Commercial",
      category: "Office Tower",
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=400&h=300&fit=crop",
      location: "Gurgaon, India",
      year: "2024",
      status: "Ongoing",
    },
    {
      id: 8,
      title: "Luxury Resort",
      type: "Hospitality",
      category: "Resort Complex",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      location: "Goa, India",
      year: "2024",
      status: "Ongoing",
    },
  ]

  const getStatusColor = (status: string) => {
    return status === "Completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Residential":
        return "bg-purple-100 text-purple-800"
      case "Commercial":
        return "bg-orange-100 text-orange-800"
      case "Industrial":
        return "bg-gray-100 text-gray-800"
      case "Hospitality":
        return "bg-pink-100 text-pink-800"
      default:
        return "bg-blue-100 text-blue-800"
    }
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore Our Work</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our portfolio of successful construction projects spanning residential, commercial, and industrial
            sectors across India.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
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
                      <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getTypeColor(project.type)}>{project.type}</Badge>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
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

        {/* Stats Section */}
        <section className="mt-20 py-16 bg-slate-50 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Our Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
      </div>
    </div>
  )
}
