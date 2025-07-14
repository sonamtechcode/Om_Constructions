"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: "1",
    title: "Skyline Heights",
    type: "Residential",
    category: "Luxury Apartments",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
    location: "Mumbai, India",
    status: "Completed",
    year: "2023",
    description: "Modern 20-story luxury apartment complex with premium amenities and sustainable design.",
  },
  {
    id: "2",
    title: "Greenview Villas",
    type: "Residential",
    category: "Villa Complex",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    location: "Pune, India",
    status: "Completed",
    year: "2022",
    description: "Exclusive residential complex featuring 25 independent villas with eco-friendly design.",
  },
  {
    id: "3",
    title: "Tech Park Offices",
    type: "Commercial",
    category: "Office Building",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    location: "Bangalore, India",
    status: "Completed",
    year: "2023",
    description: "State-of-the-art commercial office building with smart building technology.",
  },
  {
    id: "4",
    title: "Industrial Hub",
    type: "Industrial",
    category: "Manufacturing Facility",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
    location: "Chennai, India",
    status: "Completed",
    year: "2022",
    description: "Comprehensive industrial manufacturing facility built to international standards.",
  },
  {
    id: "5",
    title: "Metro Shopping Complex",
    type: "Commercial",
    category: "Retail Complex",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    location: "Delhi, India",
    status: "Completed",
    year: "2021",
    description: "Large-scale retail complex with modern amenities and sustainable features.",
  },
  {
    id: "6",
    title: "Riverside Apartments",
    type: "Residential",
    category: "Apartment Complex",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
    location: "Hyderabad, India",
    status: "Ongoing",
    year: "2024",
    description: "Contemporary apartment complex with scenic river views and modern amenities.",
  },
  {
    id: "7",
    title: "Corporate Headquarters",
    type: "Commercial",
    category: "Corporate Building",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
    location: "Gurgaon, India",
    status: "Ongoing",
    year: "2024",
    description: "Modern corporate headquarters with sustainable design and advanced technology integration.",
  },
  {
    id: "8",
    title: "Luxury Resort",
    type: "Hospitality",
    category: "Resort Complex",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    location: "Goa, India",
    status: "Completed",
    year: "2023",
    description: "Luxury resort complex with world-class amenities and beachfront location.",
  },
]

export default function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState("All")

  const filters = ["All", "Residential", "Commercial", "Industrial", "Hospitality"]

  const filteredProjects =
    selectedFilter === "All" ? projects : projects.filter((project) => project.type === selectedFilter)

  const achievements = [
    { number: "120+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Happy Clients" },
    { number: "98%", label: "Success Rate" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Explore our diverse range of construction projects that showcase our expertise and commitment to excellence.
          </p>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {achievements.map((achievement, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-orange-600 mb-2">{achievement.number}</div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter)}
                className={selectedFilter === filter ? "bg-orange-600 hover:bg-orange-700" : ""}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <Link href={`/projects/${project.id}`}>
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                          {project.status}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="outline" className="bg-white/90">
                          {project.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{project.category}</p>
                      <p className="text-sm text-orange-600 font-medium mb-3">
                        {project.location} • {project.year}
                      </p>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
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
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
