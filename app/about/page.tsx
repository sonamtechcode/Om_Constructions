import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Users, Award, Target } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Hariom",
      role: "Owner",
      image: "/team/hariom-owner.png",
      description:
        "Visionary leader with over 15 years of experience in the construction industry. Hariom founded OmConscructions with a mission to deliver quality construction projects across India.",
    },
    {
      name: "Sonam",
      role: "Managing Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description:
        "Strategic leader overseeing business operations and client relationships. Sonam ensures that every project meets our high standards of quality and client satisfaction.",
    },
    {
      name: "Manish",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description:
        "Experienced executive driving company growth and innovation. Manish leads our team with a focus on sustainable construction practices and technological advancement.",
    },
    {
      name: "Ajab Singh",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
      description:
        "Expert project manager ensuring timely delivery and quality execution. Ajab Singh coordinates all construction activities and maintains our reputation for on-time project completion.",
    },
  ]

  const achievements = [
    { number: "120+", label: "Projects Completed" },
    { number: "15+", label: "Years of Experience" },
    { number: "50+", label: "Happy Clients" },
    { number: "10+", label: "Cities Covered" },
  ]

  const values = [
    {
      icon: <Building className="h-8 w-8 text-orange-600" />,
      title: "Quality Excellence",
      description: "We never compromise on quality and use only the finest materials and construction techniques.",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Client Focus",
      description:
        "Our clients are at the center of everything we do. We listen, understand, and deliver beyond expectations.",
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: "Professional Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices in all our dealings.",
    },
    {
      icon: <Target className="h-8 w-8 text-orange-600" />,
      title: "Innovation",
      description: "We embrace new technologies and construction methods to deliver modern, efficient solutions.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About OmConscructions</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Building dreams into reality since 2008 with unwavering commitment to quality, innovation, and client
            satisfaction.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                OmConscructions was founded in 2008 with a simple yet powerful vision: to transform the construction
                landscape in India through quality, innovation, and unwavering commitment to excellence. What started as
                a small construction firm has grown into one of the most trusted names in the industry.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Over the years, we have successfully completed more than 120 projects across residential, commercial,
                and industrial sectors. Our journey has been marked by continuous learning, adaptation to new
                technologies, and an unwavering focus on client satisfaction.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, OmConscructions stands as a testament to what can be achieved through dedication, hard work, and
                a commitment to building not just structures, but lasting relationships with our clients.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop"
                alt="Construction site"
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-lg text-muted-foreground">
              Numbers that reflect our commitment to excellence and client satisfaction
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">{achievement.number}</div>
                <div className="text-muted-foreground font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Our Vision</h3>
                <p className="text-lg text-muted-foreground">
                  To be the leading construction company in India, recognized for our commitment to quality, innovation,
                  and sustainable building practices. We envision a future where every structure we build contributes to
                  the growth and development of communities across the nation.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Our Mission</h3>
                <p className="text-lg text-muted-foreground">
                  To deliver exceptional construction services that exceed client expectations through innovative
                  solutions, superior craftsmanship, and unwavering commitment to quality. We strive to build lasting
                  relationships based on trust, integrity, and mutual respect.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              The experienced professionals behind OmConscructions' success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover rounded-full border-4 border-orange-100"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">
                    {member.role}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the OmConscructions difference. Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition-colors">
              <a href="/contact">Get Started Today</a>
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
