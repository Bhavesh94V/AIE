"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Star,
  Trophy,
  Award,
  GraduationCap,
  Target,
  TrendingUp,
  Users,
  BookOpen,
  Calendar,
  MapPin,
  Quote,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SuccessStoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const successStories = [
    {
      id: 1,
      name: "Rahul Sharma",
      achievement: "CA Foundation - All India Rank 15",
      category: "ca-foundation",
      year: "2024",
      course: "CA Foundation",
      score: "AIR 15",
      image: "https://img.freepik.com/free-photo/handsome-smiling-man-wearing-green-shirt-standing-against-blue-background_662251-587.jpg?t=st=1751800135~exp=1751803735~hmac=4e718c4f4a5531ffdbc36c839f80b31c442d0c2474f70bffd342a1dd56a21d2e&w=1800",
      // image: "/placeholder.svg?height=300&width=300",
      quote:
        "AIE's systematic approach and expert guidance helped me achieve my dream rank. The faculty's dedication and personalized attention made all the difference.",
      details: "Secured All India Rank 15 in CA Foundation with 89% marks. Now pursuing CA Intermediate.",
      background: "Commerce student from 12th standard",
      currentStatus: "CA Intermediate Student",
      tips: "Consistent practice and regular doubt clearing sessions were key to my success.",
    },
    {
      id: 2,
      name: "Priya Patel",
      achievement: "12th Commerce - 95.2%",
      category: "12th-commerce",
      year: "2024",
      course: "12th Commerce",
      score: "95.2%",
      image: "https://img.freepik.com/free-photo/lifestyle-different-emotions-leisure-activities-concept-cheerful-young-caucasian-girl-female-student-checked-casual-shirt-cross-arms-chest-demiling-pleased-standing-white-background_1258-107331.jpg?t=st=1751800091~exp=1751803691~hmac=22fd733018c99baf4fc68be37c5725499f5703787c17f1b70d28a239466e7bcd&w=1380",
      // image: "/placeholder.svg?height=300&width=300",
      quote:
        "The faculty at AIE made complex concepts simple and easy to understand. Their teaching methodology is exceptional.",
      details: "Scored 95.2% in 12th Commerce boards, securing admission in top college for B.Com.",
      background: "Average student in 11th, improved significantly in 12th",
      currentStatus: "B.Com Student at Delhi University",
      tips: "Regular revision and mock tests helped me gain confidence.",
    },
    {
      id: 3,
      name: "Amit Kumar",
      achievement: "B.Com Graduate - Placed at Big 4",
      category: "bcom",
      year: "2023",
      course: "B.Com",
      score: "First Class",
      image: "https://img.freepik.com/free-photo/handsome-smiling-man-wearing-green-shirt-standing-against-blue-background_662251-587.jpg?t=st=1751800135~exp=1751803735~hmac=4e718c4f4a5531ffdbc36c839f80b31c442d0c2474f70bffd342a1dd56a21d2e&w=1800",
      // image: "/placeholder.svg?height=300&width=300",
      quote:
        "AIE not only prepared me academically but also guided my career choices. The placement support was incredible.",
      details: "Graduated with First Class and secured placement at Deloitte with 8 LPA package.",
      background: "B.Com student with career confusion",
      currentStatus: "Associate Consultant at Deloitte",
      tips: "Focus on practical knowledge along with theoretical concepts.",
    },
    {
      id: 4,
      name: "Sneha Gupta",
      achievement: "10th Standard - 96%",
      category: "10th-standard",
      year: "2024",
      course: "10th Standard",
      score: "96%",
      image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?t=st=1751800220~exp=1751803820~hmac=bbc945f97ccf74ca41fac8e8f0062f08b9ea61f78a4b24c4e59fa89bbd4b1f8c&w=1800",
      // image: "/placeholder.svg?height=300&width=300",
      quote: "AIE helped me build a strong foundation. The teachers were always available for doubt clearing.",
      details: "Scored 96% in 10th boards and secured admission in top school for 11th Commerce.",
      background: "Struggled with Mathematics initially",
      currentStatus: "11th Commerce Student",
      tips: "Never hesitate to ask questions and practice regularly.",
    },
    {
      id: 5,
      name: "Vikash Singh",
      achievement: "CA Foundation - State Rank 3",
      category: "ca-foundation",
      year: "2023",
      course: "CA Foundation",
      score: "State Rank 3",
      image: "https://img.freepik.com/free-photo/handsome-smiling-man-wearing-green-shirt-standing-against-blue-background_662251-587.jpg?t=st=1751800135~exp=1751803735~hmac=4e718c4f4a5531ffdbc36c839f80b31c442d0c2474f70bffd342a1dd56a21d2e&w=1800",
      // image: "/placeholder.svg?height=300&width=300",
      quote: "The mock test series and regular assessments at AIE prepared me well for the actual exam.",
      details: "Achieved State Rank 3 in CA Foundation and cleared CA Intermediate in first attempt.",
      background: "Commerce student with CA aspirations",
      currentStatus: "CA Final Student",
      tips: "Time management and regular practice are crucial for CA exams.",
    },
    {
      id: 6,
      name: "Anjali Joshi",
      achievement: "B.Com - University Topper",
      category: "bcom",
      year: "2023",
      course: "B.Com",
      score: "University Topper",
      image: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?t=st=1751800220~exp=1751803820~hmac=bbc945f97ccf74ca41fac8e8f0062f08b9ea61f78a4b24c4e59fa89bbd4b1f8c&w=1800",
      // image: "/placeholder.svg?height=300&width=300",
      quote: "AIE's comprehensive approach and industry exposure helped me excel in my studies.",
      details: "Secured University First Position in B.Com and received gold medal.",
      background: "Average student who improved with proper guidance",
      currentStatus: "MBA Student at IIM",
      tips: "Consistent effort and proper guidance can work wonders.",
    },
  ]

  const categories = [
    { id: "all", label: "All Stories", icon: Trophy },
    { id: "ca-foundation", label: "CA Foundation", icon: Award },
    { id: "12th-commerce", label: "12th Commerce", icon: GraduationCap },
    { id: "bcom", label: "B.Com", icon: BookOpen },
    { id: "10th-standard", label: "10th Standard", icon: Target },
  ]

  const achievements = [
    { number: "500+", label: "Toppers", icon: Trophy, color: "from-[#f59e0b] to-[#d97706]" },
    { number: "100%", label: "Success Rate", icon: Target, color: "from-[#10b981] to-[#059669]" },
    { number: "2000+", label: "Alumni", icon: Users, color: "from-[#3b82f6] to-[#1e40af]" },
    { number: "25+", label: "Years", icon: Calendar, color: "from-[#8b5cf6] to-[#7c3aed]" },
  ]

  const filteredStories =
    selectedCategory === "all" ? successStories : successStories.filter((story) => story.category === selectedCategory)

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
            <Badge className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white mb-6 px-4 py-2">
              Success Stories
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Student</span>
              <br />
              <span className="bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
                Achievements
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Celebrating the remarkable achievements of our students who turned their dreams into reality
            </p>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Track Record</h2>
            <p className="text-xl text-gray-600">Numbers that speak for our excellence</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mb-2">{achievement.number}</div>
                    <div className="text-gray-600 font-medium">{achievement.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-md"
                  }`}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  {category.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => (
              <Card
                key={story.id}
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 bg-white overflow-hidden ${
                  isVisible ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white">
                    {story.year}
                  </Badge>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-[#f59e0b] font-bold text-sm">{story.score}</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-[#f59e0b] mr-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <Badge variant="outline" className="border-[#3b82f6] text-[#3b82f6]">
                      {story.course}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">{story.name}</h3>
                  <p className="text-[#f59e0b] font-semibold mb-4">{story.achievement}</p>

                  <div className="relative mb-4">
                    <Quote className="h-6 w-6 text-[#3b82f6] absolute -top-2 -left-2" />
                    <p className="text-gray-600 italic pl-4 leading-relaxed">{story.quote}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-[#10b981] mr-2" />
                      <span className="text-gray-600">{story.details}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <TrendingUp className="h-4 w-4 text-[#3b82f6] mr-2" />
                      <span className="text-gray-600">{story.currentStatus}</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Success Tip:</h4>
                    <p className="text-sm text-gray-600 italic">"{story.tips}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Network */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#3b82f6] to-[#1e40af] text-white mb-4 px-4 py-2">
              Alumni Network
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Where Our Students Are Now</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our alumni are making their mark in top companies and institutions worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { company: "Deloitte", count: "50+", logo: "/placeholder.svg?height=80&width=120" },
              { company: "KPMG", count: "40+", logo: "/placeholder.svg?height=80&width=120" },
              { company: "EY", count: "35+", logo: "/placeholder.svg?height=80&width=120" },
              { company: "PwC", count: "30+", logo: "/placeholder.svg?height=80&width=120" },
              { company: "TCS", count: "60+", logo: "/placeholder.svg?height=80&width=120" },
              { company: "Infosys", count: "45+", logo: "/placeholder.svg?height=80&width=120" },
              { company: "ICAI", count: "200+", logo: "/placeholder.svg?height=80&width=120" },
              { company: "Top Universities", count: "300+", logo: "/placeholder.svg?height=80&width=120" },
            ].map((placement, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <Image
                    src={placement.logo || "/placeholder.svg"}
                    alt={placement.company}
                    width={120}
                    height={80}
                    className="mx-auto mb-4 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <h3 className="font-semibold text-gray-800 mb-2">{placement.company}</h3>
                  <div className="text-2xl font-bold text-[#f59e0b]">{placement.count}</div>
                  <div className="text-sm text-gray-600">Alumni Placed</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who achieved their dreams with AIE's expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 px-8 py-4"
            >
              <Link href="/join-aie">
                <Trophy className="mr-2 h-5 w-5" />
                Start Your Journey
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0f172a] bg-transparent px-8 py-4"
            >
              <Link href="/contact">
                <MapPin className="mr-2 h-5 w-5" />
                Visit Us Today
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
