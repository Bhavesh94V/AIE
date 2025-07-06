"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Clock,
  Users,
  Trophy,
  CheckCircle,
  Star,
  Calendar,
  Target,
  Award,
  GraduationCap,
  ArrowRight,
  Download,
  PlayCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const courses = [
    {
      id: "5th-10th",
      title: "5th - 10th Standard",
      category: "foundation",
      duration: "10 Months",
      students: "500+",
      successRate: "100%",
      price: "₹15,000",
      image: "https://images.pexels.com/photos/2675061/pexels-photo-2675061.jpeg",
      description: "Strong foundation building with focus on core subjects and conceptual clarity",
      features: [
        "All Core Subjects Coverage",
        "Regular Mock Tests",
        "Doubt Clearing Sessions",
        "Study Material Provided",
        "Parent-Teacher Meetings",
        "Progress Tracking",
      ],
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi"],
      highlights: [
        "Interactive Learning Methods",
        "Small Batch Size (15-20 students)",
        "Individual Attention",
        "Regular Assessments",
      ],
    },
    {
      id: "11th-12th",
      title: "11th - 12th Commerce",
      category: "commerce",
      duration: "2 Years",
      students: "800+",
      successRate: "100%",
      price: "₹25,000",
      image: "https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg",
      description: "Specialized commerce education preparing students for higher studies and careers",
      features: [
        "Complete Commerce Curriculum",
        "Board Exam Preparation",
        "Practical Sessions",
        "Career Guidance",
        "University Entrance Prep",
        "Industry Exposure",
      ],
      subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "English"],
      highlights: [
        "Expert Faculty with Industry Experience",
        "Real-world Case Studies",
        "Internship Opportunities",
        "College Admission Guidance",
      ],
    },
    {
      id: "bcom",
      title: "B.Com Coaching",
      category: "graduation",
      duration: "3 Years",
      students: "300+",
      successRate: "100%",
      price: "₹30,000",
      image: "https://images.pexels.com/photos/267491/pexels-photo-267491.jpeg",
      description: "Professional degree support with industry-relevant curriculum and practical knowledge",
      features: [
        "All Semester Coverage",
        "Project Guidance",
        "Placement Support",
        "Industry Connections",
        "Skill Development",
        "Internship Assistance",
      ],
      subjects: ["Advanced Accounting", "Corporate Law", "Taxation", "Finance", "Management"],
      highlights: [
        "100% Placement Record",
        "Industry Partnerships",
        "Skill Certification Programs",
        "Alumni Network Support",
      ],
    },
    {
      id: "ca-foundation",
      title: "CA Foundation",
      category: "professional",
      duration: "6-8 Months",
      students: "400+",
      successRate: "100%",
      price: "₹35,000",
      image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg",
      description: "Comprehensive preparation for Chartered Accountancy foundation examinations",
      features: [
        "Complete Syllabus Coverage",
        "Mock Test Series",
        "Previous Year Papers",
        "Expert Faculty",
        "Doubt Resolution",
        "Performance Analysis",
      ],
      subjects: ["Principles of Accounting", "Business Laws", "Business Mathematics", "Business Economics"],
      highlights: [
        "All India Rank Holders",
        "Proven Success Record",
        "Personalized Study Plans",
        "Regular Progress Monitoring",
      ],
    },
    {
      id: "career-guidance",
      title: "Career Guidance",
      category: "guidance",
      duration: "Ongoing",
      students: "1000+",
      successRate: "100%",
      price: "₹5,000",
      image: "https://images.pexels.com/photos/7414023/pexels-photo-7414023.jpeg",
      description: "Professional counseling to help students choose the right career path",
      features: [
        "Aptitude Assessment",
        "Career Counseling",
        "Industry Insights",
        "College Selection",
        "Entrance Exam Guidance",
        "Interview Preparation",
      ],
      subjects: ["Personality Development", "Communication Skills", "Leadership", "Goal Setting"],
      highlights: ["Certified Career Counselors", "Psychometric Testing", "One-on-One Sessions", "Follow-up Support"],
    },
    {
      id: "weekly-tests",
      title: "Weekly Test Series",
      category: "assessment",
      duration: "Year Round",
      students: "All Students",
      successRate: "100%",
      price: "Included",
      image: "https://img.freepik.com/free-vector/realistic-test-paper-composition-with-pencil-stack-students-paperwork-with-marks-correct-answers_1284-54249.jpg?t=st=1751800427~exp=1751804027~hmac=dff716dd86c17311205e5535094bfadaf5079ff1e90a4e0daecbcf0285142792&w=1800",
      // image: "/placeholder.svg?height=300&width=400",
      description: "Regular assessment every Sunday to track progress and improve performance",
      features: [
        "Weekly Assessments",
        "Performance Analysis",
        "Ranking System",
        "Progress Reports",
        "Parent Updates",
        "Remedial Classes",
      ],
      subjects: ["All Enrolled Subjects", "Comprehensive Testing", "Skill Assessment"],
      highlights: ["Competitive Environment", "Real Exam Simulation", "Instant Results", "Improvement Tracking"],
    },
  ]

  const categories = [
    { id: "all", label: "All Courses", icon: BookOpen },
    { id: "foundation", label: "Foundation", icon: GraduationCap },
    { id: "commerce", label: "Commerce", icon: Trophy },
    { id: "graduation", label: "Graduation", icon: Award },
    { id: "professional", label: "Professional", icon: Target },
    { id: "guidance", label: "Guidance", icon: Users },
    { id: "assessment", label: "Assessment", icon: Clock },
  ]

  const filteredCourses =
    selectedCategory === "all" ? courses : courses.filter((course) => course.category === selectedCategory)

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
              Our Courses
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
                Education
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From foundation to professional levels - discover our range of courses designed for your success
            </p>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
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
                      : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
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

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {filteredCourses.map((course, index) => (
              <Card
                key={course.id}
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden ${
                  isVisible ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white">
                    {course.category.charAt(0).toUpperCase() + course.category.slice(1)}
                  </Badge>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-[#f59e0b] font-bold text-lg">{course.price}</span>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{course.title}</h3>
                    <div className="flex text-[#f59e0b]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>

                  {/* Course Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <Clock className="h-5 w-5 text-[#3b82f6] mx-auto mb-1" />
                      <div className="text-sm font-semibold text-gray-800">{course.duration}</div>
                      <div className="text-xs text-gray-600">Duration</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <Users className="h-5 w-5 text-[#10b981] mx-auto mb-1" />
                      <div className="text-sm font-semibold text-gray-800">{course.students}</div>
                      <div className="text-xs text-gray-600">Students</div>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <Trophy className="h-5 w-5 text-[#f59e0b] mx-auto mb-1" />
                      <div className="text-sm font-semibold text-gray-800">{course.successRate}</div>
                      <div className="text-xs text-gray-600">Success</div>
                    </div>
                  </div>

                  {/* Subjects */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Subjects Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.subjects.map((subject, idx) => (
                        <Badge key={idx} variant="outline" className="border-[#3b82f6] text-[#3b82f6]">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Course Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {course.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-[#10b981] mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      asChild
                      className="flex-1 bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-white"
                    >
                      <Link href={`/courses/${course.id}`}>
                        <PlayCircle className="h-4 w-4 mr-2" />
                        View Details
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white bg-transparent"
                    >
                      <Link href="/join-aie">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        Enroll Now
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white mb-4 px-4 py-2">
              Why Choose AIE
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Course Advantages</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">What makes our courses stand out from the rest</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Expert Faculty",
                description: "Learn from industry experts with 5+ years experience",
                color: "from-[#f59e0b] to-[#d97706]",
              },
              {
                icon: Target,
                title: "100% Success Rate",
                description: "Proven track record of student success",
                color: "from-[#10b981] to-[#059669]",
              },
              {
                icon: BookOpen,
                title: "Comprehensive Material",
                description: "Complete study materials and resources provided",
                color: "from-[#3b82f6] to-[#1e40af]",
              },
              {
                icon: Users,
                title: "Small Batches",
                description: "Personal attention with limited students per batch",
                color: "from-[#8b5cf6] to-[#7c3aed]",
              },
            ].map((advantage, index) => {
              const Icon = advantage.icon
              return (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${advantage.color} flex items-center justify-center`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{advantage.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#f59e0b] to-[#d97706]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Learning?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Choose your course and begin your journey towards academic and professional success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#f59e0b] hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 px-8 py-4"
            >
              <Link href="/join-aie">
                <Calendar className="mr-2 h-5 w-5" />
                Enroll Now
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#f59e0b] bg-transparent px-8 py-4"
            >
              <Link href="/contact">
                <Download className="mr-2 h-5 w-5" />
                Download Brochure
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
