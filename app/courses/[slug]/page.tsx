"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Clock,
  Users,
  Trophy,
  CheckCircle,
  Star,
  Calendar,
  GraduationCap,
  ArrowRight,
  User,
  DollarSign,
  MessageCircle,
  Phone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function CourseDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const courseData: Record<string, any> = {
    "5th-10th": {
      title: "5th - 10th Standard",
      subtitle: "Foundation Building Program",
      price: "₹15,000",
      originalPrice: "₹20,000",
      duration: "10 Months",
      students: "500+",
      successRate: "100%",
      batchSize: "15-20 Students",
      // image: "/placeholder.svg?height=400&width=600",
      image: "https://images.pexels.com/photos/2675061/pexels-photo-2675061.jpeg",
      description:
        "Our comprehensive foundation program for 5th to 10th standard students focuses on building strong conceptual understanding across all subjects. We ensure students develop critical thinking skills and academic excellence.",
      highlights: [
        "Interactive Learning Methods",
        "Small Batch Size for Personal Attention",
        "Regular Parent-Teacher Meetings",
        "Comprehensive Study Material",
        "Weekly Progress Reports",
        "Doubt Clearing Sessions",
      ],
      subjects: [
        { name: "Mathematics", topics: ["Algebra", "Geometry", "Arithmetic", "Statistics"] },
        { name: "Science", topics: ["Physics", "Chemistry", "Biology", "Environmental Science"] },
        { name: "English", topics: ["Grammar", "Literature", "Writing Skills", "Communication"] },
        { name: "Social Studies", topics: ["History", "Geography", "Civics", "Economics"] },
        { name: "Hindi", topics: ["Grammar", "Literature", "Writing", "Speaking"] },
      ],
      curriculum: [
        {
          phase: "Foundation Phase (Months 1-3)",
          topics: ["Basic Concepts", "Fundamental Skills", "Study Habits", "Time Management"],
        },
        {
          phase: "Development Phase (Months 4-7)",
          topics: ["Advanced Topics", "Problem Solving", "Critical Thinking", "Application Skills"],
        },
        {
          phase: "Mastery Phase (Months 8-10)",
          topics: ["Exam Preparation", "Revision", "Mock Tests", "Performance Analysis"],
        },
      ],
      faculty: [
        {
          name: "Mrs. Priya Sharma",
          subject: "Mathematics & Science",
          experience: "8+ Years",
          qualification: "M.Sc. Mathematics, B.Ed",
        },
        {
          name: "Mr. Rajesh Kumar",
          subject: "English & Social Studies",
          experience: "6+ Years",
          qualification: "M.A. English, B.Ed",
        },
      ],
      testimonials: [
        {
          name: "Sneha Gupta",
          achievement: "96% in 10th Boards",
          quote: "AIE helped me build a strong foundation. The teachers were always supportive.",
        },
        {
          name: "Arjun Patel",
          achievement: "95% in 10th Boards",
          quote: "The study material and regular tests helped me score excellent marks.",
        },
      ],
    },
    "11th-12th": {
      title: "11th - 12th Commerce",
      subtitle: "Commerce Specialization Program",
      price: "₹25,000",
      originalPrice: "₹30,000",
      duration: "2 Years",
      students: "800+",
      successRate: "100%",
      batchSize: "20-25 Students",
      image: "https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg",
      description:
        "Specialized commerce education program designed to prepare students for board examinations and future career opportunities in business, accounting, and economics.",
      highlights: [
        "Board Exam Focused Curriculum",
        "Industry Expert Faculty",
        "Real-world Case Studies",
        "University Entrance Preparation",
        "Career Counseling Sessions",
        "Internship Opportunities",
      ],
      subjects: [
        { name: "Accountancy", topics: ["Financial Accounting", "Partnership", "Company Accounts", "Analysis"] },
        { name: "Business Studies", topics: ["Management", "Marketing", "Finance", "Operations"] },
        { name: "Economics", topics: ["Microeconomics", "Macroeconomics", "Indian Economy", "Statistics"] },
        { name: "Mathematics", topics: ["Calculus", "Statistics", "Probability", "Linear Programming"] },
        { name: "English", topics: ["Literature", "Writing Skills", "Communication", "Presentation"] },
      ],
      curriculum: [
        {
          phase: "11th Standard (Year 1)",
          topics: ["Foundation Concepts", "Basic Principles", "Practical Applications", "Project Work"],
        },
        {
          phase: "12th Standard (Year 2)",
          topics: ["Advanced Topics", "Board Preparation", "Competitive Exams", "Career Guidance"],
        },
      ],
      faculty: [
        {
          name: "Prof. Rajesh Kumar",
          subject: "Accountancy",
          experience: "10+ Years",
          qualification: "M.Com, CA Inter, B.Ed",
        },
        {
          name: "Dr. Anjali Gupta",
          subject: "Business Studies & Economics",
          experience: "8+ Years",
          qualification: "MBA, M.Com, Ph.D",
        },
      ],
      testimonials: [
        {
          name: "Priya Patel",
          achievement: "95.2% in 12th Boards",
          quote: "The faculty made complex business concepts easy to understand.",
        },
        {
          name: "Rohit Sharma",
          achievement: "94.8% in 12th Boards",
          quote: "Excellent preparation for both boards and competitive exams.",
        },
      ],
    },
    bcom: {
      title: "B.Com Coaching",
      subtitle: "Professional Degree Support",
      price: "₹30,000",
      originalPrice: "₹35,000",
      duration: "3 Years",
      students: "300+",
      successRate: "100%",
      batchSize: "25-30 Students",
      image: "https://images.pexels.com/photos/267491/pexels-photo-267491.jpeg",
      description:
        "Comprehensive B.Com coaching program with industry-relevant curriculum, practical knowledge, and placement support to ensure successful career outcomes.",
      highlights: [
        "All Semester Coverage",
        "Industry Partnerships",
        "100% Placement Record",
        "Skill Development Programs",
        "Project Guidance",
        "Internship Assistance",
      ],
      subjects: [
        { name: "Advanced Accounting", topics: ["Corporate Accounting", "Cost Accounting", "Management Accounting"] },
        { name: "Corporate Law", topics: ["Company Law", "Business Law", "Commercial Law"] },
        { name: "Taxation", topics: ["Income Tax", "GST", "Corporate Tax"] },
        { name: "Finance", topics: ["Financial Management", "Investment Analysis", "Banking"] },
        { name: "Management", topics: ["Principles", "HR", "Marketing", "Operations"] },
      ],
      curriculum: [
        {
          phase: "First Year",
          topics: ["Foundation Subjects", "Basic Accounting", "Business Environment", "Communication Skills"],
        },
        {
          phase: "Second Year",
          topics: ["Advanced Accounting", "Corporate Law", "Taxation", "Financial Management"],
        },
        {
          phase: "Third Year",
          topics: ["Specialization", "Project Work", "Internship", "Placement Preparation"],
        },
      ],
      faculty: [
        {
          name: "CA Vikash Singh",
          subject: "Advanced Accounting & Taxation",
          experience: "12+ Years",
          qualification: "CA, M.Com",
        },
        {
          name: "Prof. Meera Joshi",
          subject: "Corporate Law & Finance",
          experience: "10+ Years",
          qualification: "LLB, MBA Finance",
        },
      ],
      testimonials: [
        {
          name: "Amit Kumar",
          achievement: "Placed at Deloitte",
          quote: "AIE's placement support helped me secure my dream job at a Big 4 firm.",
        },
        {
          name: "Neha Agarwal",
          achievement: "University Topper",
          quote: "The comprehensive curriculum and expert faculty made me university topper.",
        },
      ],
    },
    "ca-foundation": {
      title: "CA Foundation",
      subtitle: "Chartered Accountancy Foundation",
      price: "₹35,000",
      originalPrice: "₹40,000",
      duration: "6-8 Months",
      students: "400+",
      successRate: "100%",
      batchSize: "30-35 Students",
      image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg",
      description:
        "Comprehensive CA Foundation preparation program designed to help students clear the first level of Chartered Accountancy with excellent ranks and strong conceptual understanding.",
      highlights: [
        "All India Rank Holders",
        "Comprehensive Study Material",
        "Regular Mock Test Series",
        "Doubt Clearing Sessions",
        "Performance Analysis",
        "Exam Strategy Guidance",
      ],
      subjects: [
        {
          name: "Principles of Accounting",
          topics: ["Accounting Principles", "Journal Entries", "Final Accounts", "Partnership"],
        },
        { name: "Business Laws", topics: ["Indian Contract Act", "Sale of Goods Act", "Partnership Act"] },
        {
          name: "Business Mathematics",
          topics: ["Ratio & Proportion", "Algebra", "Statistics", "Probability"],
        },
        {
          name: "Business Economics",
          topics: ["Demand & Supply", "Market Structure", "National Income", "Money & Banking"],
        },
      ],
      curriculum: [
        {
          phase: "Foundation Phase (Months 1-2)",
          topics: ["Basic Concepts", "Fundamental Principles", "Study Plan", "Time Management"],
        },
        {
          phase: "Development Phase (Months 3-5)",
          topics: ["Advanced Topics", "Problem Solving", "Practice Tests", "Revision"],
        },
        {
          phase: "Exam Phase (Months 6-8)",
          topics: ["Mock Tests", "Exam Strategy", "Final Revision", "Performance Analysis"],
        },
      ],
      faculty: [
        {
          name: "CA Lokesh Sharma",
          subject: "Accounting & Business Laws",
          experience: "25+ Years",
          qualification: "CA, M.Com",
        },
        {
          name: "Prof. Suresh Kumar",
          subject: "Mathematics & Economics",
          experience: "15+ Years",
          qualification: "M.A. Economics, M.Sc. Mathematics",
        },
      ],
      testimonials: [
        {
          name: "Rahul Sharma",
          achievement: "All India Rank 15",
          quote: "AIE's systematic approach helped me achieve AIR 15 in CA Foundation.",
        },
        {
          name: "Vikash Singh",
          achievement: "State Rank 3",
          quote: "The mock test series and faculty guidance were exceptional.",
        },
      ],
    },
  }

  const course = courseData[slug]

  if (!course) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-8">The course you're looking for doesn't exist.</p>
          <Button asChild className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white">
            <Link href="/courses">
              <ArrowRight className="mr-2 h-4 w-4" />
              View All Courses
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  const openWhatsApp = (message: string) => {
    const whatsappNumber = "+919876543210"
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#f59e0b]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <Badge className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white mb-4 px-4 py-2">
                Course Details
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {course.title}
                </span>
              </h1>
              <p className="text-xl text-[#f59e0b] mb-6 font-semibold">{course.subtitle}</p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">{course.description}</p>

              {/* Course Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                  <DollarSign className="h-6 w-6 text-[#f59e0b] mx-auto mb-2" />
                  <div className="text-lg font-bold">{course.price}</div>
                  <div className="text-xs text-gray-400">Course Fee</div>
                </div>
                <div className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                  <Clock className="h-6 w-6 text-[#3b82f6] mx-auto mb-2" />
                  <div className="text-lg font-bold">{course.duration}</div>
                  <div className="text-xs text-gray-400">Duration</div>
                </div>
                <div className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                  <Users className="h-6 w-6 text-[#10b981] mx-auto mb-2" />
                  <div className="text-lg font-bold">{course.batchSize}</div>
                  <div className="text-xs text-gray-400">Batch Size</div>
                </div>
                <div className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                  <Trophy className="h-6 w-6 text-[#f59e0b] mx-auto mb-2" />
                  <div className="text-lg font-bold">{course.successRate}</div>
                  <div className="text-xs text-gray-400">Success Rate</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/join-aie">
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Enroll Now
                  </Link>
                </Button>
                <Button
                  onClick={() =>
                    openWhatsApp(
                      `Hi! I'm interested in the ${course.title} course. Can you provide more details about admission and fees?`,
                    )
                  }
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Inquiry
                </Button>
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="relative">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  width={600}
                  height={400}
                  className="rounded-3xl max-h-[600px] shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-[#0f172a] p-4 rounded-2xl shadow-2xl">
                  <div className="text-2xl font-bold text-[#f59e0b]">{course.students}</div>
                  <div className="text-sm">Students Enrolled</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Course Highlights</h2>
            <p className="text-xl text-gray-600">What makes this course special</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {course.highlights.map((highlight: string, index: number) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#f59e0b] to-[#d97706] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800">{highlight}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects & Curriculum */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Subjects */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Subjects Covered</h2>
              <div className="space-y-6">
                {course.subjects.map((subject: any, index: number) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-[#f59e0b]">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{subject.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {subject.topics.map((topic: string, idx: number) => (
                          <Badge key={idx} variant="outline" className="border-[#3b82f6] text-[#3b82f6]">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Curriculum Structure</h2>
              <div className="space-y-6">
                {course.curriculum.map((phase: any, index: number) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{phase.phase}</h3>
                      <div className="space-y-2">
                        {phase.topics.map((topic: string, idx: number) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-[#10b981] mr-3 flex-shrink-0" />
                            <span className="text-gray-600">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Expert Faculty</h2>
            <p className="text-xl text-gray-600">Learn from the best in the field</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {course.faculty.map((faculty: any, index: number) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#3b82f6] to-[#1e40af] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{faculty.name}</h3>
                  <p className="text-[#f59e0b] font-semibold mb-2">{faculty.subject}</p>
                  <p className="text-gray-600 mb-2">{faculty.experience}</p>
                  <p className="text-sm text-gray-500">{faculty.qualification}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600">What our students say about this course</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {course.testimonials.map((testimonial: any, index: number) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="p-8">
                  <div className="flex text-[#f59e0b] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#f59e0b] to-[#d97706] rounded-full flex items-center justify-center mr-4">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-[#f59e0b] text-sm">{testimonial.achievement}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start This Course?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful students who chose this course for their career growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 px-8 py-4"
            >
              <Link href="/join-aie">
                <Calendar className="mr-2 h-5 w-5" />
                Enroll Now
              </Link>
            </Button>
            <Button
              onClick={() =>
                openWhatsApp(
                  `Hi! I want to enroll in the ${course.title} course. Can you help me with the admission process?`,
                )
              }
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
            <Button
              onClick={() => (window.location.href = "tel:+919876543210")}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0f172a] bg-transparent px-8 py-4"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
