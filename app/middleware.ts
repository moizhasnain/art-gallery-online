import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 100 // requests per window

// Simple in-memory rate limiter (for production, use Redis or similar)
const requestCounts = new Map<string, { count: number; resetTime: number }>()

export function middleware(request: NextRequest) {
  // Skip rate limiting for non-API routes during development
  if (!request.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.next()
  }

  // Get client IP
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
             request.headers.get('x-real-ip') || 
             'unknown'

  // Get current time
  const now = Date.now()

  // Get or create rate limit entry
  let clientData = requestCounts.get(ip)
  
  if (!clientData || now > clientData.resetTime) {
    clientData = {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW * 1000
    }
    requestCounts.set(ip, clientData)
    return NextResponse.next()
  }

  // Check if rate limit exceeded
  if (clientData.count >= MAX_REQUESTS_PER_WINDOW) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { 
        status: 429,
        headers: {
          'Retry-After': String(Math.ceil((clientData.resetTime - now) / 1000))
        }
      }
    )
  }

  // Increment request count
  clientData.count++

  // Add rate limit headers to response
  const response = NextResponse.next()
  response.headers.set('X-RateLimit-Limit', String(MAX_REQUESTS_PER_WINDOW))
  response.headers.set('X-RateLimit-Remaining', String(MAX_REQUESTS_PER_WINDOW - clientData.count))
  response.headers.set('X-RateLimit-Reset', String(clientData.resetTime))

  return response
}

// Configure which routes to apply middleware to
export const config = {
  matcher: '/api/:path*'
}
