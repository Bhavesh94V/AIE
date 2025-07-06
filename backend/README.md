# AIE Backend Server

Backend server for Accountancy Institute of Education (AIE) website.

## Features

- Contact form handling with email notifications
- Enrollment form processing
- Email confirmations to users
- Rate limiting for API protection
- CORS configuration for frontend integration
- Input validation and sanitization

## Setup

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Configure environment variables:
\`\`\`bash
cp .env.example .env
# Edit .env with your configuration
\`\`\`

3. Start the server:
\`\`\`bash
# Development
npm run dev

# Production
npm start
\`\`\`

## API Endpoints

### POST /api/contact
Submit contact inquiry form

**Request Body:**
\`\`\`json
{
  "firstName": "string",
  "lastName": "string", 
  "email": "string",
  "phone": "string",
  "course": "string",
  "branch": "string",
  "message": "string"
}
\`\`\`

### POST /api/enrollment
Submit enrollment application

**Request Body:**
\`\`\`json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string", 
  "phone": "string",
  "selectedCourse": "string",
  "dateOfBirth": "string",
  "currentEducation": "string",
  "address": "string",
  "branch": "string",
  "parentName": "string",
  "parentPhone": "string"
}
\`\`\`

### GET /api/health
Health check endpoint

## Email Configuration

The server uses Gmail SMTP for sending emails. Make sure to:

1. Enable 2-factor authentication on your Gmail account
2. Generate an app-specific password
3. Use the app password in the EMAIL_PASS environment variable

## Rate Limiting

- 10 requests per 15 minutes per IP address
- Applied to all /api/ endpoints

## CORS Configuration

Configured to allow requests from:
- http://localhost:3000 (development)
- Your production frontend domain

## Error Handling

- Input validation with detailed error messages
- Email delivery error handling
- Rate limiting with appropriate responses
- 404 handling for unknown endpoints
