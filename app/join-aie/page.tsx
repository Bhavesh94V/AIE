"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, GraduationCap, CheckCircle, AlertCircle, Users, Award, BookOpen } from "lucide-react"
import { submitEnrollmentForm, resetEnrollmentState } from "@/lib/features/enrollmentSlice"
import type { RootState, AppDispatch } from "@/lib/store"

const courses = [
  { value: "CA Foundation", label: "CA Foundation", duration: "4-6 months", fee: "₹25,000" },
  { value: "CA Intermediate", label: "CA Intermediate", duration: "8-12 months", fee: "₹45,000" },
  { value: "CA Final", label: "CA Final", duration: "12-18 months", fee: "₹65,000" },
  { value: "CS Foundation", label: "CS Foundation", duration: "4-6 months", fee: "₹20,000" },
  { value: "CS Executive", label: "CS Executive", duration: "8-12 months", fee: "₹35,000" },
  { value: "CS Professional", label: "CS Professional", duration: "12-18 months", fee: "₹55,000" },
  { value: "CMA Foundation", label: "CMA Foundation", duration: "4-6 months", fee: "₹22,000" },
  { value: "CMA Intermediate", label: "CMA Intermediate", duration: "8-12 months", fee: "₹40,000" },
  { value: "CMA Final", label: "CMA Final", duration: "12-18 months", fee: "₹60,000" },
  { value: "ACCA", label: "ACCA", duration: "18-24 months", fee: "₹85,000" },
  { value: "CPA", label: "CPA", duration: "12-18 months", fee: "₹75,000" },
]

const branches = ["Main Branch - Central Location", "North Branch", "South Branch", "East Branch", "West Branch"]

const educationLevels = [
  "10th Grade",
  "12th Grade",
  "Graduation (B.Com)",
  "Graduation (Other)",
  "Post Graduation",
  "Other",
]

export default function JoinAIEPage() {
  const dispatch = useDispatch<AppDispatch>()
  const { loading, success, error, message, studentId } = useSelector((state: RootState) => state.enrollment)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    selectedCourse: "",
    dateOfBirth: "",
    currentEducation: "",
    address: "",
    branch: "",
    parentName: "",
    parentPhone: "",
  })

  const [selectedCourseDetails, setSelectedCourseDetails] = useState<any>(null)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))

    if (field === "selectedCourse") {
      const courseDetails = courses.find((course) => course.value === value)
      setSelectedCourseDetails(courseDetails)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "selectedCourse",
      "dateOfBirth",
      "currentEducation",
      "address",
      "branch",
    ]

    const missingFields = requiredFields.filter((field) => !formData[field as keyof typeof formData])

    if (missingFields.length > 0) {
      return
    }

    dispatch(submitEnrollmentForm(formData))
  }

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      selectedCourse: "",
      dateOfBirth: "",
      currentEducation: "",
      address: "",
      branch: "",
      parentName: "",
      parentPhone: "",
    })
    setSelectedCourseDetails(null)
    dispatch(resetEnrollmentState())
  }

  useEffect(() => {
    if (success) {
      // Reset form after successful submission
      const timer = setTimeout(() => {
        resetForm()
      }, 10000) // Keep success message longer for enrollment
      return () => clearTimeout(timer)
    }
  }, [success])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative my-10 py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join the <span className="text-blue-600">AIE Family</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards your professional accounting career. Enroll now and get personalized guidance
            from our expert faculty.
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">5000+</div>
              <div className="text-gray-600">Students Enrolled</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <BookOpen className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Enrollment Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center">
                  <GraduationCap className="mr-2 h-6 w-6" />
                  Enrollment Application
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Complete the form below to secure your seat in your chosen course
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                {/* Success/Error Messages */}
                {success && (
                  <Alert className="mb-6 border-green-200 bg-green-50">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      <div className="space-y-2">
                        <p>{message}</p>
                        {studentId && <p className="font-semibold">Your Student ID: {studentId}</p>}
                      </div>
                    </AlertDescription>
                  </Alert>
                )}

                {error && (
                  <Alert className="mb-6 border-red-200 bg-red-50">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-800">{error}</AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Personal Information</h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          placeholder="Enter your first name"
                          required
                          disabled={loading}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          placeholder="Enter your last name"
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                          required
                          disabled={loading}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+91 98765 43210"
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                          required
                          disabled={loading}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currentEducation">Current Education Level *</Label>
                        <Select
                          value={formData.currentEducation}
                          onValueChange={(value) => handleInputChange("currentEducation", value)}
                          disabled={loading}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select education level" />
                          </SelectTrigger>
                          <SelectContent>
                            {educationLevels.map((level) => (
                              <SelectItem key={level} value={level}>
                                {level}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Complete Address *</Label>
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        placeholder="Enter your complete address with pincode"
                        rows={3}
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Course Selection</h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="selectedCourse">Select Course *</Label>
                        <Select
                          value={formData.selectedCourse}
                          onValueChange={(value) => handleInputChange("selectedCourse", value)}
                          disabled={loading}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Choose your course" />
                          </SelectTrigger>
                          <SelectContent>
                            {courses.map((course) => (
                              <SelectItem key={course.value} value={course.value}>
                                {course.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="branch">Preferred Branch *</Label>
                        <Select
                          value={formData.branch}
                          onValueChange={(value) => handleInputChange("branch", value)}
                          disabled={loading}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Choose your branch" />
                          </SelectTrigger>
                          <SelectContent>
                            {branches.map((branch) => (
                              <SelectItem key={branch} value={branch}>
                                {branch}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Course Details Display */}
                    {selectedCourseDetails && (
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Course Details</h4>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-blue-800">Duration:</span>
                            <span className="ml-2 text-blue-700">{selectedCourseDetails.duration}</span>
                          </div>
                          <div>
                            <span className="font-medium text-blue-800">Course Fee:</span>
                            <span className="ml-2 text-blue-700">{selectedCourseDetails.fee}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Parent/Guardian Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                      Parent/Guardian Information <span className="text-sm font-normal text-gray-500">(Optional)</span>
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="parentName">Parent/Guardian Name</Label>
                        <Input
                          id="parentName"
                          value={formData.parentName}
                          onChange={(e) => handleInputChange("parentName", e.target.value)}
                          placeholder="Enter parent/guardian name"
                          disabled={loading}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="parentPhone">Parent/Guardian Phone</Label>
                        <Input
                          id="parentPhone"
                          type="tel"
                          value={formData.parentPhone}
                          onChange={(e) => handleInputChange("parentPhone", e.target.value)}
                          placeholder="+91 98765 43210"
                          disabled={loading}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-3 text-lg font-semibold"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      "Submit Enrollment Application"
                    )}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our terms and conditions. Our counselor will contact you
                    within 24 hours to complete the enrollment process.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Information */}
          <div className="space-y-6">
            {/* Enrollment Benefits */}
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
                <CardTitle className="text-xl">Why Choose AIE?</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Expert Faculty</p>
                      <p className="text-sm text-gray-600">
                        Learn from industry professionals with years of experience
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Flexible Batches</p>
                      <p className="text-sm text-gray-600">Morning, evening, and weekend batches available</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Study Material</p>
                      <p className="text-sm text-gray-600">Comprehensive books and online resources included</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Mock Tests</p>
                      <p className="text-sm text-gray-600">Regular assessments and exam preparation</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Career Guidance</p>
                      <p className="text-sm text-gray-600">Placement assistance and career counseling</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="shadow-lg border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-lg text-blue-900">Next Steps</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <p className="text-sm text-gray-700">Submit your enrollment form</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <p className="text-sm text-gray-700">Receive confirmation call within 24 hours</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <p className="text-sm text-gray-700">Complete document verification</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <p className="text-sm text-gray-700">Pay fees and start your classes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="shadow-lg border-orange-200">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Our admission counselors are here to help you choose the right course
                  </p>
                  <Button
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    onClick={() => window.open("tel:+919876543210")}
                  >
                    Call Now: +91 98765 43210
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
