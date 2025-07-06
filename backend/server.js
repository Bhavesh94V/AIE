const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")
const rateLimit = require("express-rate-limit")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(
  cors({
    origin: ["http://localhost:3000", "https://aieinstitute.vercel.app"],
    credentials: true,
  }),
)
app.use(express.json())

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
})

app.use("/api/", limiter)

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "harshprajapati080705@gmail.com",
    pass: "wifhyozqyhrbrfvd",
  },
})

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error("Email configuration error:", error)
  } else {
    console.log("Email server is ready to send messages")
  }
})

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, course, branch, message } = req.body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !course) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      })
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/
    if (!phoneRegex.test(phone.replace(/\D/g, "").slice(-10))) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid 10-digit phone number.",
      })
    }

    // Email to admin
    const adminMailOptions = {
      from: "harshprajapati080705@gmail.com",
      to: "harshprajapati080705@gmail.com",
      subject: `New Contact Inquiry - ${course}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #f59e0b, #d97706); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Contact Inquiry</h1>
          </div>
          
          <div style="padding: 20px; background: #f9fafb;">
            <h2 style="color: #1f2937; margin-bottom: 20px;">Contact Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Course Interest:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${course}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Preferred Branch:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${branch || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #374151; vertical-align: top;">Message:</td>
                <td style="padding: 10px; color: #6b7280;">${message || "No message provided"}</td>
              </tr>
            </table>
            
            <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-radius: 8px;">
              <p style="margin: 0; color: #1e40af; font-weight: bold;">📅 Received: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `,
    }

    // Confirmation email to user
    const userMailOptions = {
      from: "harshprajapati080705@gmail.com",
      to: email,
      subject: "Thank you for contacting AIE - We'll be in touch soon!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #f59e0b, #d97706); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Thank You for Contacting AIE!</h1>
          </div>
          
          <div style="padding: 20px; background: #f9fafb;">
            <h2 style="color: #1f2937;">Dear ${firstName},</h2>
            
            <p style="color: #6b7280; line-height: 1.6;">
              Thank you for your interest in <strong>Accountancy Institute of Education (AIE)</strong>. 
              We have received your inquiry regarding <strong>${course}</strong> and our team will contact you within 24 hours.
            </p>
            
            <div style="background: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">Your Inquiry Details:</h3>
              <ul style="color: #374151; margin: 0;">
                <li>Course: ${course}</li>
                <li>Preferred Branch: ${branch || "Not specified"}</li>
                <li>Contact Number: ${phone}</li>
              </ul>
            </div>
            
            <p style="color: #6b7280; line-height: 1.6;">
              In the meantime, feel free to explore our website to learn more about our courses and success stories.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://aie-education.com" style="background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">Visit Our Website</a>
            </div>
            
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
              <h3 style="color: #1f2937;">Contact Information:</h3>
              <p style="color: #6b7280; margin: 5px 0;">📞 Phone: +91 98765 43210</p>
              <p style="color: #6b7280; margin: 5px 0;">📧 Email: info@aie-education.com</p>
              <p style="color: #6b7280; margin: 5px 0;">📍 Address: 123 Education Street, Academic Zone</p>
            </div>
          </div>
          
          <div style="background: #374151; padding: 20px; text-align: center;">
            <p style="color: #9ca3af; margin: 0; font-size: 14px;">
              © 2024 AIE - Accountancy Institute of Education. All rights reserved.
            </p>
          </div>
        </div>
      `,
    }

    // Send emails
    await Promise.all([transporter.sendMail(adminMailOptions), transporter.sendMail(userMailOptions)])

    // Log the inquiry (in production, save to database)
    console.log("New contact inquiry:", {
      firstName,
      lastName,
      email,
      phone,
      course,
      branch,
      message,
      timestamp: new Date().toISOString(),
    })

    res.json({
      success: true,
      message: `Thank you ${firstName}! Your inquiry has been received. We'll contact you within 24 hours to discuss your ${course} enrollment.`,
    })
  } catch (error) {
    console.error("Contact form error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
    })
  }
})

// Enrollment form endpoint
app.post("/api/enrollment", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      selectedCourse,
      dateOfBirth,
      currentEducation,
      address,
      branch,
      parentName,
      parentPhone,
    } = req.body

    // Validate required fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !selectedCourse ||
      !dateOfBirth ||
      !currentEducation ||
      !address ||
      !branch
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      })
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/
    if (!phoneRegex.test(phone.replace(/\D/g, "").slice(-10))) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid 10-digit phone number.",
      })
    }

    // Generate student ID
    const studentId = `AIE${Date.now().toString().slice(-6)}`

    // Email to admin
    const adminMailOptions = {
      from: "harshprajapati080705@gmail.com",
      to: "harshprajapati080705@gmail.com",
      subject: `New Enrollment Application - ${selectedCourse}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b82f6, #1e40af); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Enrollment Application</h1>
          </div>
          
          <div style="padding: 20px; background: #f9fafb;">
            <h2 style="color: #1f2937; margin-bottom: 20px;">Student Information</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Student ID:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${studentId}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Date of Birth:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${dateOfBirth}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Current Education:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${currentEducation}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Selected Course:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${selectedCourse}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Preferred Branch:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${branch}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Address:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${address}</td>
              </tr>
              ${
                parentName
                  ? `
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Parent/Guardian:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${parentName}</td>
              </tr>
              `
                  : ""
              }
              ${
                parentPhone
                  ? `
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #374151;">Parent Phone:</td>
                <td style="padding: 10px; color: #6b7280;">${parentPhone}</td>
              </tr>
              `
                  : ""
              }
            </table>
            
            <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-radius: 8px;">
              <p style="margin: 0; color: #1e40af; font-weight: bold;">📅 Application Received: ${new Date().toLocaleString()}</p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 8px;">
              <p style="margin: 0; color: #92400e; font-weight: bold;">⚡ Action Required: Contact student within 24 hours</p>
            </div>
          </div>
        </div>
      `,
    }

    // Confirmation email to student
    const studentMailOptions = {
      from: "harshprajapati080705@gmail.com",
      to: email,
      subject: "Welcome to AIE - Enrollment Application Received!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b82f6, #1e40af); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Welcome to AIE Family!</h1>
          </div>
          
          <div style="padding: 20px; background: #f9fafb;">
            <h2 style="color: #1f2937;">Dear ${firstName},</h2>
            
            <p style="color: #6b7280; line-height: 1.6;">
              Congratulations! Your enrollment application for <strong>${selectedCourse}</strong> has been successfully received at 
              <strong>Accountancy Institute of Education (AIE)</strong>.
            </p>
            
            <div style="background: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">Your Application Details:</h3>
              <ul style="color: #374151; margin: 0;">
                <li>Course: ${selectedCourse}</li>
                <li>Branch: ${branch}</li>
                <li>Application Date: ${new Date().toLocaleDateString()}</li>
                <li>Student ID: ${studentId}</li>
              </ul>
            </div>
            
            <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #166534; margin-top: 0;">What Happens Next?</h3>
              <ol style="color: #374151; margin: 0;">
                <li>Our counselor will contact you within 24 hours</li>
                <li>Document verification and counseling session</li>
                <li>Fee payment and final enrollment</li>
                <li>Class schedule and study material distribution</li>
              </ol>
            </div>
            
            <p style="color: #6b7280; line-height: 1.6;">
              Please keep your documents ready for verification. If you have any questions, 
              feel free to contact us at the numbers below.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://aie-education.com/courses/${selectedCourse}" style="background: linear-gradient(135deg, #3b82f6, #1e40af); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">View Course Details</a>
            </div>
            
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
              <h3 style="color: #1f2937;">Contact Information:</h3>
              <p style="color: #6b7280; margin: 5px 0;">📞 Phone: +91 98765 43210</p>
              <p style="color: #6b7280; margin: 5px 0;">📧 Email: info@aie-education.com</p>
              <p style="color: #6b7280; margin: 5px 0;">📍 Address: 123 Education Street, Academic Zone</p>
              <p style="color: #6b7280; margin: 5px 0;">🕒 Office Hours: Mon-Sat 9:00 AM - 6:00 PM</p>
            </div>
          </div>
          
          <div style="background: #374151; padding: 20px; text-align: center;">
            <p style="color: #9ca3af; margin: 0; font-size: 14px;">
              © 2024 AIE - Accountancy Institute of Education. All rights reserved.
            </p>
          </div>
        </div>
      `,
    }

    // Send emails
    await Promise.all([transporter.sendMail(adminMailOptions), transporter.sendMail(studentMailOptions)])

    // Log the enrollment (in production, save to database)
    console.log("New enrollment received:", {
      studentId,
      firstName,
      lastName,
      email,
      phone,
      selectedCourse,
      dateOfBirth,
      currentEducation,
      address,
      branch,
      parentName,
      parentPhone,
      timestamp: new Date().toISOString(),
    })

    res.json({
      success: true,
      message: `Welcome to AIE, ${firstName}! Your enrollment for ${selectedCourse} has been received. Our counselor will contact you within 24 hours to complete the admission process. Please check your email for further details.`,
      studentId,
    })
  } catch (error) {
    console.error("Enrollment form error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to submit enrollment. Please try again later.",
    })
  }
})

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "AIE Backend Server is running",
    timestamp: new Date().toISOString(),
  })
})

// Error handling middleware
app.use((error, req, res, next) => {
  console.error("Server error:", error)
  res.status(500).json({
    success: false,
    message: "Internal server error",
  })
})

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found",
  })
})

app.listen(PORT, () => {
  console.log(`🚀 AIE Backend Server is running on port ${PORT}`)
  console.log(`📧 Email service configured for: harshprajapati080705@gmail.com`)
  console.log(`🌐 Health check: http://localhost:${PORT}/api/health`)
})
