import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-cream">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-burgundy rounded-full flex items-center justify-center">
                <span className="text-cream font-serif text-xl font-bold">A</span>
              </div>
              <div>
                <h2 className="text-xl font-serif font-bold text-cream">
                  Art Gallery
                </h2>
                <p className="text-xs text-gray-400">Online</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Bringing beautiful artworks to homes and offices. Custom paintings, 
              portrait sketches, and premium art supplies for every space.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-burgundy rounded-full hover:bg-burgundy-light transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-burgundy rounded-full hover:bg-burgundy-light transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-burgundy rounded-full hover:bg-burgundy-light transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-ochre transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/artists" className="text-gray-400 hover:text-ochre transition-colors">
                  Our Artists
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-ochre transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-ochre transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-ochre transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop/paintings" className="text-gray-400 hover:text-ochre transition-colors">
                  Paintings & Artworks
                </Link>
              </li>
              <li>
                <Link href="/shop/portraits" className="text-gray-400 hover:text-ochre transition-colors">
                  Portrait Sketches
                </Link>
              </li>
              <li>
                <Link href="/shop/canvas" className="text-gray-400 hover:text-ochre transition-colors">
                  Canvas & Boards
                </Link>
              </li>
              <li>
                <Link href="/shop/paints" className="text-gray-400 hover:text-ochre transition-colors">
                  Paints
                </Link>
              </li>
              <li>
                <Link href="/shop/brushes" className="text-gray-400 hover:text-ochre transition-colors">
                  Brushes & Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-5 h-5 text-ochre" />
                <span>Your City, Pakistan</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-5 h-5 text-ochre" />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-5 h-5 text-ochre" />
                <span>info@artgalleryonline.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© {currentYear} Art Gallery Online. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="/privacy" className="hover:text-ochre transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-ochre transition-colors">
                Terms of Service
              </Link>
              <Link href="/refunds" className="hover:text-ochre transition-colors">
                Refund Policy
              </Link>
              <Link href="/return-policy" className="hover:text-ochre transition-colors">
                Return Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
