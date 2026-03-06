'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Artists', href: '/artists' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-cream shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-burgundy rounded-full flex items-center justify-center">
              <span className="text-cream font-serif text-xl font-bold">A</span>
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-charcoal">
                Art Gallery
              </h1>
              <p className="text-xs text-gray-500">Online</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-charcoal hover:text-burgundy font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-cream-dark rounded-full transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-charcoal" />
            </button>

            {/* User */}
            <Link
              href="/account"
              className="p-2 hover:bg-cream-dark rounded-full transition-colors"
              aria-label="Account"
            >
              <User className="w-5 h-5 text-charcoal" />
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="p-2 hover:bg-cream-dark rounded-full transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5 text-charcoal" />
              <span className="absolute -top-1 -right-1 bg-burgundy text-cream text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                0
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-cream-dark rounded-full transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-charcoal" />
              ) : (
                <Menu className="w-5 h-5 text-charcoal" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4 animate-fadeIn">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for paintings, artworks, supplies..."
                className="w-full px-4 py-3 border-2 border-burgundy rounded-lg focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-burgundy text-cream px-4 py-2 rounded-md hover:bg-burgundy-dark transition-colors">
                Search
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200 pt-4 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-charcoal hover:text-burgundy font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
