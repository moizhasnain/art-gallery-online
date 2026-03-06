import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Art Gallery Online | Custom Paintings & Artworks',
  description: 'Art Gallery Online - Your destination for custom paintings, artworks, portrait sketches, and art supplies. Shop unique pieces for your home, office, or as personalized gifts.',
  keywords: 'art gallery, paintings, custom art, portrait sketches, wall art, home decor, office art, handmade paintings',
  openGraph: {
    title: 'Art Gallery Online | Custom Paintings & Artworks',
    description: 'Your destination for custom paintings, artworks, portrait sketches, and art supplies.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
