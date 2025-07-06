"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Users,
  Award,
  BookOpen,
  Trophy,
  CheckCircle,
  GraduationCap,
  Star,
  Calendar,
  MapPin,
  Heart,
  Lightbulb,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import profile from '../../AIE-main/public/p1.jpg'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#f59e0b]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white mb-6 px-4 py-2">About AIE</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Meet Our</span>
              <br />
              <span className="bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
                Expert Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get to know the passionate educators and leaders who make AIE a center of excellence in education
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#3b82f6] to-[#1e40af] text-white mb-4 px-4 py-2">Leadership</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Founder & CEO</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The visionary leader who transformed education for thousands of students
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b]/20 to-[#3b82f6]/20 rounded-3xl blur-2xl transform rotate-3"></div>
                <Image
                  src={profile}
                  // src="/placeholder.svg?height=600&width=500"
                  alt="Mr. Lokesh Sharma - Founder & CEO"
                  width={500}
                  height={600}
                  className="relative w-[100%] max-h-[700px] img-responsive rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />

                {/* Achievement Badges */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white p-4 rounded-2xl shadow-2xl">
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-sm">Years</div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white text-[#0f172a] p-4 rounded-2xl shadow-2xl">
                  <div className="text-2xl font-bold text-[#3b82f6]">5000+</div>
                  <div className="text-sm">Students</div>
                </div>
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <Badge className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white mb-6 px-4 py-2">
                Founder & CEO
              </Badge>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">Mr. Lokesh Sharma</h3>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 25 years of dedicated teaching experience in commerce and education, Mr. Lokesh Sharma has
                transformed thousands of students' lives. His vision of providing quality education with personalized
                attention has made AIE a trusted name in academic excellence.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-l-4 border-l-[#f59e0b] hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <Award className="h-5 w-5 text-[#f59e0b] mr-2" />
                      <span className="font-semibold">Experience</span>
                    </div>
                    <p className="text-gray-600">25+ Years in Commerce Education</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#3b82f6] hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <Trophy className="h-5 w-5 text-[#3b82f6] mr-2" />
                      <span className="font-semibold">Achievement</span>
                    </div>
                    <p className="text-gray-600">100% Student Success Rate</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#10b981] hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <Users className="h-5 w-5 text-[#10b981] mr-2" />
                      <span className="font-semibold">Students</span>
                    </div>
                    <p className="text-gray-600">5000+ Students Mentored</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#8b5cf6] hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <GraduationCap className="h-5 w-5 text-[#8b5cf6] mr-2" />
                      <span className="font-semibold">Expertise</span>
                    </div>
                    <p className="text-gray-600">CA Foundation Specialist</p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Achievements</h4>
                {[
                  "Founded AIE with a vision of educational excellence",
                  "Developed innovative teaching methodologies",
                  "Mentored hundreds of CA Foundation toppers",
                  "Established two successful branches",
                  "Maintained 100% success rate for 25+ years",
                  "Expert in Accountancy and Business Studies",
                ].map((achievement, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#10b981] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-white"
                >
                  <Link href="/contact">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Meeting
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white bg-transparent"
                >
                  <Link href="/courses">
                    <BookOpen className="mr-2 h-4 w-4" />
                    View Courses
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#10b981] to-[#059669] text-white mb-4 px-4 py-2">Our Team</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Expert Faculty Members</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our passionate educators who bring years of experience and dedication to student success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Priya Sharma",
                designation: "Senior Faculty - Mathematics & Statistics",
                experience: "8+ Years",
                specialization: "Advanced Mathematics, Statistical Analysis",
                education: "Ph.D. in Mathematics, M.Sc. Statistics",
                achievements: ["100+ Toppers Mentored", "Research Publications", "Excellence Award 2023"],
                image: "https://img.freepik.com/free-photo/lifestyle-different-emotions-leisure-activities-concept-cheerful-young-caucasian-girl-female-student-checked-casual-shirt-cross-arms-chest-demiling-pleased-standing-white-background_1258-107331.jpg?t=st=1751800091~exp=1751803691~hmac=22fd733018c99baf4fc68be37c5725499f5703787c17f1b70d28a239466e7bcd&w=1380",
                // image: "/placeholder.svg?height=300&width=250",
              },
              {
                name: "Prof. Rajesh Kumar",
                designation: "Head of Accountancy Department",
                experience: "7+ Years",
                specialization: "Financial Accounting, Cost Accounting",
                education: "M.Com, CA Inter, B.Ed",
                achievements: ["CA Foundation Expert", "Curriculum Developer", "Best Teacher Award"],
                image: "https://img.freepik.com/free-photo/handsome-smiling-man-wearing-green-shirt-standing-against-blue-background_662251-587.jpg?t=st=1751800135~exp=1751803735~hmac=4e718c4f4a5531ffdbc36c839f80b31c442d0c2474f70bffd342a1dd56a21d2e&w=1800",
              },
              {
                name: "Ms. Anjali Gupta",
                designation: "Business Studies Faculty",
                experience: "6+ Years",
                specialization: "Business Management, Entrepreneurship",
                education: "MBA, M.Com, NET Qualified",
                achievements: ["Industry Experience", "Case Study Expert", "Student Mentor"],
                image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?t=st=1751800220~exp=1751803820~hmac=bbc945f97ccf74ca41fac8e8f0062f08b9ea61f78a4b24c4e59fa89bbd4b1f8c&w=1800",
              },
              {
                name: "Mr. Vikash Singh",
                designation: "Economics Faculty",
                experience: "5+ Years",
                specialization: "Micro & Macro Economics, Indian Economy",
                education: "M.A. Economics, B.Ed",
                achievements: ["Economics Olympiad Judge", "Research Scholar", "Publication Author"],
                image: "https://img.freepik.com/free-photo/lifestyle-different-emotions-leisure-activities-concept-cheerful-young-caucasian-girl-female-student-checked-casual-shirt-cross-arms-chest-demiling-pleased-standing-white-background_1258-107331.jpg?t=st=1751800091~exp=1751803691~hmac=22fd733018c99baf4fc68be37c5725499f5703787c17f1b70d28a239466e7bcd&w=1380",
              },
              {
                name: "Dr. Meera Joshi",
                designation: "English & Communication Faculty",
                experience: "9+ Years",
                specialization: "Business English, Communication Skills",
                education: "Ph.D. English Literature, M.A. English",
                achievements: ["Communication Expert", "Soft Skills Trainer", "Language Specialist"],
                image: "https://img.freepik.com/free-photo/handsome-smiling-man-wearing-green-shirt-standing-against-blue-background_662251-587.jpg?t=st=1751800135~exp=1751803735~hmac=4e718c4f4a5531ffdbc36c839f80b31c442d0c2474f70bffd342a1dd56a21d2e&w=1800",
              },
              {
                name: "Dr. Meera Joshi",
                designation: "English & Communication Faculty",
                experience: "9+ Years",
                specialization: "Business English, Communication Skills",
                education: "Ph.D. English Literature, M.A. English",
                achievements: ["Communication Expert", "Soft Skills Trainer", "Language Specialist"],
                image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?t=st=1751800220~exp=1751803820~hmac=bbc945f97ccf74ca41fac8e8f0062f08b9ea61f78a4b24c4e59fa89bbd4b1f8c&w=1800",
              },
            ].map((faculty, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white border-0"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={faculty.image || "/placeholder.svg"}
                      alt={faculty.name}
                      width={250}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white">
                      {faculty.experience}
                    </Badge>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{faculty.name}</h3>
                    <p className="text-[#3b82f6] font-medium mb-3">{faculty.designation}</p>
                    <p className="text-gray-600 text-sm mb-4">{faculty.specialization}</p>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <GraduationCap className="h-4 w-4 text-[#f59e0b] mr-2" />
                        <span className="text-gray-600">{faculty.education}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 text-sm">Key Achievements:</h4>
                      {faculty.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <Star className="h-3 w-3 text-[#f59e0b] mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Institute Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white mb-4 px-4 py-2">
              Our Journey
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">25 Years of Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A timeline of our growth, achievements, and milestones in educational excellence
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#f59e0b] to-[#3b82f6] rounded-full"></div>

            <div className="space-y-12">
              {[
                {
                  year: "1999",
                  title: "Foundation of AIE",
                  description: "Mr. Lokesh Sharma founded AIE with a vision to provide quality education",
                  icon: GraduationCap,
                  side: "left",
                },
                {
                  year: "2005",
                  title: "First Branch Success",
                  description: "Achieved 100% success rate and expanded our teaching methodology",
                  icon: Trophy,
                  side: "right",
                },
                {
                  year: "2010",
                  title: "CA Foundation Specialization",
                  description: "Became the leading institute for CA Foundation preparation",
                  icon: Award,
                  side: "left",
                },
                {
                  year: "2015",
                  title: "Second Branch Opening",
                  description: "Expanded to serve more students with our proven teaching methods",
                  icon: MapPin,
                  side: "right",
                },
                {
                  year: "2020",
                  title: "Digital Transformation",
                  description: "Integrated modern technology and online learning platforms",
                  icon: Lightbulb,
                  side: "left",
                },
                {
                  year: "2024",
                  title: "25 Years of Excellence",
                  description: "Celebrating 25 years of consistent success and student achievements",
                  icon: Heart,
                  side: "right",
                },
              ].map((milestone, index) => {
                const Icon = milestone.icon
                return (
                  <div
                    key={index}
                    className={`flex items-center ${milestone.side === "right" ? "flex-row-reverse" : ""}`}
                  >
                    <div className={`w-1/2 ${milestone.side === "right" ? "pl-8" : "pr-8"}`}>
                      <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <CardContent className="p-6">
                          <Badge className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white mb-3">
                            {milestone.year}
                          </Badge>
                          <h3 className="text-xl font-bold text-gray-800 mb-3">{milestone.title}</h3>
                          <p className="text-gray-600">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="w-16 h-16 bg-gradient-to-r from-[#f59e0b] to-[#d97706] rounded-full flex items-center justify-center shadow-lg z-10">
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <div className="w-1/2"></div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Meet Our Team?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a meeting with our founder and faculty to discuss your educational goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 px-8 py-4"
            >
              <Link href="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Meeting
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0f172a] bg-transparent px-8 py-4"
            >
              <Link href="/courses">
                <BookOpen className="mr-2 h-5 w-5" />
                View Courses
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
