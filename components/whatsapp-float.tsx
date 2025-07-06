"use client"

import { useState } from "react"
import { MessageCircle, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappNumber = "+919876543210"
  const defaultMessage =
    "Hello! I'm interested in learning more about AIE courses. Can you please provide more information?"

  const openWhatsApp = (customMessage?: string) => {
    const message = customMessage || defaultMessage
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
    setIsOpen(false)
  }

  const quickMessages = [
    {
      title: "Course Inquiry",
      message: "Hi! I want to know more about your courses and admission process.",
    },
    {
      title: "Fee Structure",
      message: "Hello! Can you please share the fee structure for your courses?",
    },
    {
      title: "Schedule Visit",
      message: "Hi! I would like to schedule a visit to your institute.",
    },
    {
      title: "Admission Process",
      message: "Hello! Can you guide me through the admission process?",
    },
  ]

  return (
    <>
      {/* WhatsApp Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 z-50 shadow-2xl border-0 bg-white animate-slideInUp">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">AIE Support</h3>
                  <p className="text-xs opacity-90">Typically replies instantly</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <CardContent className="p-4">
            <p className="text-sm text-gray-600 mb-4">
              Hi there! 👋 How can we help you today? Choose a quick option or send a custom message.
            </p>

            <div className="space-y-2 mb-4">
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => openWhatsApp(msg.message)}
                  className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all duration-200 text-sm"
                >
                  {msg.title}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <Button
                onClick={() => openWhatsApp()}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                size="sm"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat Now
              </Button>
              <Button
                onClick={() => (window.location.href = "tel:+919876543210")}
                variant="outline"
                size="sm"
                className="border-green-500 text-green-500 hover:bg-green-50"
              >
                <Phone className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center animate-pulse-glow"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </>
  )
}
