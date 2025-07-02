import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Civil Engineer with 20+ years of experience in large-scale construction projects.",
    },
    {
      name: "Priya Sharma",
      position: "Project Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in project coordination and quality assurance with 15 years of experience.",
    },
    {
      name: "Amit Patel",
      position: "Chief Architect",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Award-winning architect specializing in sustainable and modern design solutions.",
    },
    {
      name: "Sunita Reddy",
      position: "Operations Head",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Operations specialist ensuring smooth execution of all construction phases.",
    },
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About OmConscructions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building excellence since 2008, we have established ourselves as a trusted name in the construction industry
            across India.
          </p>
        </div>

        {/* Company Overview */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                OmConscructions has been shaping infrastructure since 2008. We have completed over 120 projects with a
                strong focus on durability, modern design, and client satisfaction.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                From residential complexes to commercial buildings and industrial facilities, we bring expertise,
                innovation, and reliability to every project we undertake.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-orange-600">120+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop"
                alt="Construction site"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-lg text-muted-foreground">
                  To be a leader in sustainable and innovative construction across India, setting new standards for
                  quality, efficiency, and environmental responsibility.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-lg text-muted-foreground">
                  To build lasting structures with integrity, quality, and environmental responsibility while exceeding
                  client expectations through innovative solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced professionals are the backbone of our success, bringing expertise and dedication to every
              project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-3">{member.position}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
