import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeProvider } from './components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Art Gallery Online | Buy Custom Paintings, Portraits & Art Supplies',
  description: 'Discover unique handcrafted paintings, custom portraits, and premium art supplies. Shop stunning wall art for home & office decor. Order your personalized artwork today!',
  keywords: 'art gallery, custom paintings, portrait sketches, wall art, home decor, office art, handmade paintings, art supplies, personalized gifts, canvas art, oil paintings, acrylic paintings',
  openGraph: {
    title: 'Art Gallery Online | Buy Custom Paintings, Portraits & Art Supplies',
    description: 'Discover unique handcrafted paintings, custom portraits, and premium art supplies. Shop stunning wall art for home & office decor.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Art Gallery Online',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Art Gallery Online | Buy Custom Paintings, Portraits & Art Supplies',
    description: 'Discover unique handcrafted paintings, custom portraits, and premium art supplies. Shop stunning wall art for home & office decor.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
