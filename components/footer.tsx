import Link from "next/link"
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <GraduationCap className="h-10 w-10 text-[#f59e0b] mr-3" />
              <div>
                <span className="text-2xl font-bold">AIE</span>
                <div className="text-sm text-gray-300">Work Is Worship</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Accountancy Institute of Education - Shaping futures through quality education and expert guidance for
              over 25 years.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#f59e0b] transition-colors duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#f59e0b]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#f59e0b] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#f59e0b] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-[#f59e0b] transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-gray-300 hover:text-[#f59e0b] transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-[#f59e0b] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#f59e0b] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/join-aie" className="text-gray-300 hover:text-[#f59e0b] transition-colors">
                  Join AIE
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#f59e0b]">Our Courses</h4>
            <ul className="space-y-3">
              {[
                "5th - 10th Standard",
                "11th - 12th Commerce",
                "B.Com Coaching",
                "CA Foundation",
                "Career Guidance",
                "Weekly Test Series",
              ].map((course) => (
                <li key={course}>
                  <span className="text-gray-300 flex items-center group">
                    <span className="w-2 h-2 bg-[#3b82f6] rounded-full mr-3"></span>
                    {course}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#f59e0b]">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[#f59e0b] mr-3 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <div className="font-medium">Main Branch</div>
                  <div className="text-sm">123 Education Street, Academic Zone</div>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#f59e0b] mr-3" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#f59e0b] mr-3" />
                <span className="text-gray-300">info@aie-education.com</span>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-[#f59e0b] mr-3 mt-1" />
                <div className="text-gray-300">
                  <div>Mon - Sat: 9:00 AM - 6:00 PM</div>
                  <div className="text-sm text-[#f59e0b]">Sunday: Weekly Tests</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} AIE - Accountancy Institute of Education. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#f59e0b] text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
