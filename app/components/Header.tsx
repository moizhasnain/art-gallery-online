'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

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
    <header className="bg-white dark:bg-grey-lightest shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center transition-colors duration-300">
              <span className="text-white dark:text-black font-serif text-xl font-bold">A</span>
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-black dark:text-white transition-colors duration-300">
                Art Gallery
              </h1>
              <p className="text-xs text-grey dark:text-grey-light transition-colors duration-300">Online</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-black dark:text-white hover:text-grey-dark dark:hover:text-grey-light font-medium transition-colors duration-200"
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
              className="p-2 hover:bg-grey-lighter dark:hover:bg-grey-dark rounded-full transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-black dark:text-white" />
            </button>

            {/* User */}
            <Link
              href="/account"
              className="p-2 hover:bg-grey-lighter dark:hover:bg-grey-dark rounded-full transition-colors"
              aria-label="Account"
            >
              <User className="w-5 h-5 text-black dark:text-white" />
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="p-2 hover:bg-grey-lighter dark:hover:bg-grey-dark rounded-full transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5 text-black dark:text-white" />
              <span className="absolute -top-1 -right-1 bg-[#800000] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                0
              </span>
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-grey-lighter dark:hover:bg-grey-dark rounded-full transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-black dark:text-white" />
              ) : (
                <Menu className="w-5 h-5 text-black dark:text-white" />
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
                className="w-full px-4 py-3 border-2 border-black dark:border-white rounded-lg focus:outline-none bg-white dark:bg-grey-lightest text-black dark:text-white transition-colors duration-300"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-md hover:bg-grey-dark dark:hover:bg-grey-lighter transition-colors">
                Search
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-grey-lighter dark:border-grey-dark pt-4 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-black dark:text-white hover:text-grey-dark dark:hover:text-grey-light font-medium py-2 transition-colors"
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
