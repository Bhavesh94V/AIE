"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { GraduationCap, Menu, X, BookOpen, Users, Trophy, Camera, Phone, UserPlus } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home", icon: GraduationCap },
    { href: "/about", label: "About Us", icon: Users },
    { href: "/courses", label: "Courses", icon: BookOpen },
    { href: "/success-stories", label: "Success Stories", icon: Trophy },
    { href: "/gallery", label: "Gallery", icon: Camera },
    { href: "/contact", label: "Contact", icon: Phone },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <GraduationCap className="h-10 w-10 text-[#1e40af] group-hover:text-[#f59e0b] transition-colors duration-300" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#f59e0b] rounded-full opacity-80"></div>
            </div>
            <div className="ml-3">
              <span className="text-3xl font-bold bg-gradient-to-r from-[#1e40af] to-[#3b82f6] bg-clip-text text-transparent">
                AIE
              </span>
              <div className="text-xs text-gray-600 font-medium -mt-1">Work Is Worship</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group ${
                    pathname === item.href
                      ? "bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white shadow-lg"
                      : "text-gray-700 hover:text-[#1e40af] hover:bg-gray-50"
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              asChild
              className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/join-aie">
                <UserPlus className="h-4 w-4 mr-2" />
                Join AIE
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      pathname === item.href
                        ? "bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-3" />
                    {item.label}
                  </Link>
                )
              })}
              <Button asChild className="w-full mt-4 bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white">
                <Link href="/join-aie">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Join AIE
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
