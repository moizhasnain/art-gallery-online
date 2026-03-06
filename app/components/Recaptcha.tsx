'use client'

import { useState, useEffect } from 'react'

// This is a client-side reCAPTCHA component
// To use it, you need to:
// 1. Go to https://www.google.com/recaptcha/admin
// 2. Create a site key for your domain
// 3. Add NEXT_PUBLIC_RECAPTCHA_SITE_KEY to your .env file

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

interface RecaptchaButtonProps {
  onVerify: (token: string) => void
  action?: string
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

export default function RecaptchaButton({
  onVerify,
  action = 'submit',
  children,
  className = '',
  disabled = false
}: RecaptchaButtonProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)

  useEffect(() => {
    // Load reCAPTCHA script
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`
    script.async = true
    script.onload = () => setIsLoaded(true)
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleClick = async () => {
    if (!isLoaded || isVerifying || disabled) return

    setIsVerifying(true)
    try {
      if (window.grecaptcha) {
        const token = await window.grecaptcha.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
          { action }
        )
        onVerify(token)
      }
    } catch (error) {
      console.error('reCAPTCHA error:', error)
    } finally {
      setIsVerifying(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled || !isLoaded || isVerifying}
      className={className}
    >
      {isVerifying ? 'Verifying...' : children}
    </button>
  )
}

// Simple email validation helper
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Simple phone validation helper
export function validatePhone(phone: string): boolean {
  const phoneRegex = /^(\+92|0)?[3][0-9]{9}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}
