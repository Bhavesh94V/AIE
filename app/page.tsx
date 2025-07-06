"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Users,
  Trophy,
  Star,
  ArrowRight,
  CheckCircle,
  Award,
  Target,
  Clock,
  Eye,
  Heart,
  Lightbulb,
  Shield,
  Zap,
  TrendingUp,
  Globe,
  Calendar,
  PlayCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

// Parallax Section Component
function ParallaxSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={className} style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
      {children}
    </div>
  )
}

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#f59e0b]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#f59e0b]/5 to-[#3b82f6]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <Badge className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white mb-6 px-4 py-2 text-sm font-medium">
                <Award className="h-4 w-4 mr-2" />
                25+ Years of Excellence
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  Shape Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">
                  Future
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  with AIE
                </span>
              </h1>

              <p className="text-xl mb-8 text-gray-300 leading-relaxed max-w-lg">
                Accountancy Institute of Education - Where academic excellence meets career success. Join thousands of
                successful students who achieved their dreams with our expert guidance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg"
                >
                  <Link href="/contact">
                    <Zap className="mr-2 h-5 w-5" />
                    Enroll Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-2 border-white/30 text-white hover:bg-white hover:text-[#0f172a] bg-transparent backdrop-blur-sm px-8 py-4 text-lg transition-all duration-300"
                >
                  <Link href="/about">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Learn More
                  </Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#f59e0b] mb-1">100%</div>
                  <div className="text-sm text-gray-400">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#f59e0b] mb-1">5000+</div>
                  <div className="text-sm text-gray-400">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#f59e0b] mb-1">25+</div>
                  <div className="text-sm text-gray-400">Years</div>
                </div>
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b]/20 to-[#3b82f6]/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <Image
                  src="https://img.freepik.com/free-vector/education-easy-learning-set-icons_24877-51590.jpg?t=st=1751798607~exp=1751802207~hmac=d05eca068d8efeeacbdaa91eded80ea9565e8a960dbf5e465d8086d7d72d9482&w=1380"
                  // src="/placeholder.svg?height=600&width=700"
                  alt="Students studying at AIE"
                  width={700}
                  height={600}
                  className="relative max-h-[600px] rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Achievement Cards */}
                <div className="absolute -bottom-6 -left-6 bg-white text-[#0f172a] p-6 rounded-2xl shadow-2xl transform hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-[#f59e0b] mb-1">100%</div>
                  <div className="text-sm font-medium">Success Rate</div>
                </div>

                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-[#3b82f6] to-[#1e40af] text-white p-6 rounded-2xl shadow-2xl transform hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold mb-1">25+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: 25, suffix: "+", label: "Years Experience", icon: Clock, color: "from-[#f59e0b] to-[#d97706]" },
              {
                number: 5000,
                suffix: "+",
                label: "Students Taught",
                icon: Users,
                color: "from-[#3b82f6] to-[#1e40af]",
              },
              { number: 100, suffix: "%", label: "Success Rate", icon: Trophy, color: "from-[#10b981] to-[#059669]" },
              { number: 2, suffix: "", label: "Branches", icon: Globe, color: "from-[#8b5cf6] to-[#7c3aed]" },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center group">
                  <div
                    className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-800 mb-2">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#3b82f6] to-[#1e40af] text-white mb-4 px-4 py-2">
              Our Foundation
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Vision & Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving educational excellence through innovation, dedication, and unwavering commitment to student
              success
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Vision */}
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#3b82f6] to-[#1e40af] rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  To be the leading educational institution that transforms students into confident, knowledgeable, and
                  successful professionals, setting new standards in commerce and accountancy education across the
                  nation.
                </p>
                <div className="space-y-3">
                  {["Excellence in Education", "Innovation in Teaching", "Student-Centric Approach"].map(
                    (item, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-[#3b82f6] mr-3" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-orange-50 to-amber-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#f59e0b] to-[#d97706] rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  To provide comprehensive, high-quality education that empowers students with knowledge, skills, and
                  values necessary for academic excellence and professional success in the field of commerce and beyond.
                </p>
                <div className="space-y-3">
                  {["Quality Education for All", "Holistic Development", "Career-Ready Graduates"].map(
                    (item, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-[#f59e0b] mr-3" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <ParallaxSection className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#f59e0b]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#3b82f6]/10 rounded-full blur-3xl"></div>
        </ParallaxSection>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#10b981] to-[#059669] text-white mb-4 px-4 py-2">Our Values</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">What Drives Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values shape every aspect of our educational approach and student relationships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Passion",
                description: "Passionate about education and student success",
                color: "from-red-500 to-pink-500",
              },
              {
                icon: Shield,
                title: "Integrity",
                description: "Maintaining highest standards of honesty and ethics",
                color: "from-blue-500 to-indigo-500",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Embracing modern teaching methods and technology",
                color: "from-yellow-500 to-orange-500",
              },
              {
                icon: TrendingUp,
                title: "Excellence",
                description: "Striving for excellence in everything we do",
                color: "from-green-500 to-emerald-500",
              },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose AIE Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white mb-4 px-4 py-2">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Why AIE Stands Apart</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes us the preferred choice for thousands of students and parents
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://img.freepik.com/free-photo/business-man-holding-clipboard-with-why-choose-us-question_23-2148932313.jpg?t=st=1751799681~exp=1751803281~hmac=f7725eb3450ae4b2f99da7a3b16ff7006a47ea43cbcf124a6c0f0f541ee6cd43&w=1380"
                // src="/placeholder.svg?height=500&width=600"
                alt="Why choose AIE"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Award,
                  title: "Proven Track Record",
                  description: "25+ years of consistent results with 100% success rate",
                },
                {
                  icon: Users,
                  title: "Expert Faculty",
                  description: "Highly qualified teachers with 5+ years of specialized experience",
                },
                {
                  icon: BookOpen,
                  title: "Comprehensive Curriculum",
                  description: "Complete coverage from basics to advanced levels",
                },
                {
                  icon: Clock,
                  title: "Regular Assessment",
                  description: "Weekly tests and continuous evaluation for better performance",
                },
                {
                  icon: Target,
                  title: "Personalized Attention",
                  description: "Individual focus on each student's strengths and weaknesses",
                },
                {
                  icon: Trophy,
                  title: "Career Guidance",
                  description: "Professional counseling for future career planning",
                },
              ].map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex items-start group">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#f59e0b] to-[#d97706] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white relative overflow-hidden">
        <ParallaxSection>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5"></div>
        </ParallaxSection>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white mb-4 px-4 py-2">
              Student Success
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our successful students who achieved their dreams with AIE
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Rahul Sharma",
                achievement: "CA Foundation - AIR 15",
                quote: "AIE's systematic approach and expert guidance helped me achieve my dream rank.",
                rating: 5,
              },
              {
                name: "Priya Patel",
                achievement: "12th Commerce - 95.2%",
                quote: "The faculty at AIE made complex concepts simple and easy to understand.",
                rating: 5,
              },
              {
                name: "Amit Kumar",
                achievement: "B.Com Graduate - Big 4 Placement",
                quote: "AIE not only prepared me academically but also guided my career choices.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <div className="flex text-[#f59e0b] mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-200 italic mb-4">"{testimonial.quote}"</p>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-[#f59e0b] text-sm">{testimonial.achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 px-8 py-4"
            >
              <Link href="/success-stories">
                View All Success Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#f59e0b] to-[#d97706] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who chose AIE for their academic and career growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#f59e0b] hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold"
            >
              <Link href="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#f59e0b] bg-transparent px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              <Link href="/courses">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Courses
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
