import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, Paintbrush, Palette, Award, Truck, Shield, RefreshCcw } from 'lucide-react'

// Custom SVG Icons for Categories
const PaintingsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21 15 16 10 5 21"/>
  </svg>
)

const PortraitsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)

const CanvasIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M3 9h18"/>
    <path d="M9 21V9"/>
  </svg>
)

const PaintsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
  </svg>
)

const BrushesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/>
    <line x1="10" y1="5" x2="8" y2="7"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <line x1="7" y1="19" x2="7" y2="21"/>
    <line x1="17" y1="19" x2="17" y2="21"/>
  </svg>
)

const SuppliesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
)

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden mb-12 lg:mb-0">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white-light to-white dark:from-grey-lightest dark:via-grey-lightest dark:to-grey-lightest transition-colors duration-300"></div>
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-black dark:bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-grey dark:bg-grey-dark rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-fadeIn">
              <span className="inline-block bg-black/10 dark:bg-white/10 text-black dark:text-white px-4 py-2 rounded-full text-sm font-medium mb-6 transition-colors duration-300">
                Custom Paintings & Artworks
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-black dark:text-white leading-tight mb-6 transition-colors duration-300">
                Beautiful Art for
                <span className="text-black dark:text-white block">Every Space</span>
              </h1>
              <p className="text-lg text-grey-dark dark:text-grey-light mb-8 max-w-lg transition-colors duration-300">
                Transform your home or office with unique handcrafted paintings. 
                From custom portraits to stunning landscapes, we bring your vision to life.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/shop"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="btn-outline inline-flex items-center space-x-2"
                >
                  <span>Custom Order</span>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-grey-lighter dark:border-grey-dark transition-colors duration-300">
                <div>
                  <p className="text-3xl font-bold text-black dark:text-white transition-colors duration-300">500+</p>
                  <p className="text-sm text-grey dark:text-grey-light transition-colors duration-300">Happy Customers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-black dark:text-white transition-colors duration-300">100+</p>
                  <p className="text-sm text-grey dark:text-grey-light transition-colors duration-300">Artworks</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-black dark:text-white transition-colors duration-300">50+</p>
                  <p className="text-sm text-grey dark:text-grey-light transition-colors duration-300">Artists</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-slideInRight">
              <div className="relative bg-white dark:bg-grey-lightest rounded-2xl shadow-2xl p-4 transition-colors duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-black/10 to-grey/20 dark:from-white/10 dark:to-grey-dark/20 rounded-xl overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=600&fit=crop"
                    alt="Featured Artwork - Beautiful abstract painting"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-4 md:-bottom-6 -left-0 md:-left-6 bg-white dark:bg-grey-lightest rounded-xl shadow-lg p-4 flex items-center space-x-3 transition-colors duration-300">
                  <div className="w-12 h-12 bg-grey dark:bg-grey-dark rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white dark:text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-black dark:text-white transition-colors duration-300">4.9/5</p>
                    <p className="text-sm text-grey dark:text-grey-light transition-colors duration-300">Customer Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="bg-black dark:bg-grey-lightest py-8 transition-colors duration-300">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <div className="flex items-center space-x-2 lg:space-x-3">
              <Truck className="w-6 h-6 lg:w-8 lg:h-8 text-grey-light dark:text-grey-light" />
              <div>
                <p className="font-semibold text-white dark:text-white">Free Delivery</p>
                <p className="text-sm text-white/70 dark:text-white/70">On orders over ₨5,000</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-3">
              <Shield className="w-6 h-6 lg:w-8 lg:h-8 text-grey-light dark:text-grey-light" />
              <div>
                <p className="font-semibold text-white dark:text-white">Secure Payment</p>
                <p className="text-sm text-white/70 dark:text-white/70">100% Secure</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-3">
              <RefreshCcw className="w-6 h-6 lg:w-8 lg:h-8 text-grey-light dark:text-grey-light" />
              <div>
                <p className="font-semibold text-white dark:text-white">Easy Returns</p>
                <p className="text-sm text-white/70 dark:text-white/70">7-day return policy</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-3">
              <Award className="w-6 h-6 lg:w-8 lg:h-8 text-grey-light dark:text-grey-light" />
              <div>
                <p className="font-semibold text-white dark:text-white">Quality Art</p>
                <p className="text-sm text-white/70 dark:text-white/70">Handcrafted with love</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-white-light dark:bg-grey-lightest transition-colors duration-300">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black dark:text-white mb-4 transition-colors duration-300">
              Shop by Category
            </h2>
            <p className="text-grey-dark dark:text-grey-light max-w-2xl mx-auto transition-colors duration-300">
              Explore our wide range of art products and services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Paintings', icon: PaintingsIcon, href: '/shop/paintings' },
              { name: 'Portraits', icon: PortraitsIcon, href: '/shop/portraits' },
              { name: 'Canvas', icon: CanvasIcon, href: '/shop/canvas' },
              { name: 'Paints', icon: PaintsIcon, href: '/shop/paints' },
              { name: 'Brushes', icon: BrushesIcon, href: '/shop/brushes' },
              { name: 'Supplies', icon: SuppliesIcon, href: '/shop/supplies' },
            ].map((category, index) => (
              <Link
                key={category.name}
                href={category.href}
                className="group bg-white dark:bg-grey-lightest rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-black/10 dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-black dark:group-hover:bg-white transition-colors">
                  <category.icon className="w-8 h-8 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors" />
                </div>
                <h3 className="font-semibold text-black dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-white dark:bg-grey-lightest transition-colors duration-300">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-black dark:text-white mb-4 transition-colors duration-300">
                Featured Artworks
              </h2>
              <p className="text-grey-dark dark:text-grey-light transition-colors duration-300">Handpicked pieces for your space</p>
            </div>
            <Link
              href="/shop"
              className="hidden md:inline-flex items-center space-x-2 text-black dark:text-white hover:text-grey-dark dark:hover:text-grey-light font-medium transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Sunset Landscape',
                category: 'Paintings',
                price: '₨8,500',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop'
              },
              {
                name: 'Portrait Sketch',
                category: 'Portraits',
                price: '₨5,000',
                image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&h=400&fit=crop'
              },
              {
                name: 'Abstract Art',
                category: 'Paintings',
                price: '₨12,000',
                image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop'
              },
              {
                name: 'Floral Canvas',
                category: 'Canvas',
                price: '₨6,500',
                image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=400&fit=crop'
              },
            ].map((product, index) => (
              <div
                key={product.name}
                className="card group animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square bg-gradient-to-br from-black/10 to-grey/10 dark:from-white/10 dark:to-grey-dark/10 relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 dark:group-hover:bg-white/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Link
                      href={`/product/${product.image}`}
                      className="bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-all"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-grey dark:text-grey-light mb-1 transition-colors duration-300">{product.category}</p>
                  <h3 className="font-semibold text-black dark:text-white mb-2 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-lg font-bold text-black dark:text-white transition-colors duration-300">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/shop" className="btn-outline inline-flex items-center space-x-2">
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Order Section */}
      <section className="section-padding bg-black dark:bg-grey-lightest relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-grey-dark dark:bg-grey rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-grey dark:bg-grey-dark rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white dark:text-white mb-6 transition-colors duration-300">
                Get Your Custom Portrait
              </h2>
              <p className="text-grey-light dark:text-grey-light mb-8 text-lg transition-colors duration-300">
                Turn your favorite photo into a beautiful hand-drawn portrait. 
                Perfect for gifts, home decor, or commemorating special moments.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <div className="flex items-center space-x-2 text-white dark:text-white">
                  <div className="w-2 h-2 bg-grey dark:bg-grey-dark rounded-full"></div>
                  <span>Upload your photo</span>
                </div>
                <div className="flex items-center space-x-2 text-white dark:text-white">
                  <div className="w-2 h-2 bg-grey dark:bg-grey-dark rounded-full"></div>
                  <span>Choose style & size</span>
                </div>
                <div className="flex items-center space-x-2 text-white dark:text-white">
                  <div className="w-2 h-2 bg-grey dark:bg-grey-dark rounded-full"></div>
                  <span>Receive your artwork</span>
                </div>
              </div>
              <Link
                href="/shop/portraits"
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <span>Order Custom Portrait</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="aspect-[4/3] bg-gradient-to-br from-grey/30 to-grey-dark/30 dark:from-grey-dark/30 dark:to-grey/30 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop"
                    alt="Custom Portrait Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding bg-white-light dark:bg-grey-lightest transition-colors duration-300">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black dark:text-white mb-4 transition-colors duration-300">
              Transparent Pricing
            </h2>
            <p className="text-grey-dark dark:text-grey-light max-w-2xl mx-auto transition-colors duration-300">
              Choose the perfect artwork for your budget
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 px-4 w-full">
            {[
              {
                name: 'Budget-Friendly',
                price: '₨2,000-5,000',
                description: 'Simple prints & small canvases',
                features: ['Small canvases', 'Prints', 'Basic frames']
              },
              {
                name: 'Mid-Range',
                price: '₨5,000-15,000',
                description: 'Custom portraits & medium artworks',
                features: ['Custom portraits', 'Medium canvases', 'Premium frames']
              },
              {
                name: 'Premium',
                price: '₨15,000-50,000',
                description: 'Large paintings & office art',
                features: ['Large paintings', 'Custom designs', 'Premium frames']
              },
              {
                name: 'Masterpiece',
                price: '₨50,000+',
                description: 'Original artworks for collectors',
                features: ['Original art', 'Custom size', 'Certificate']
              },
            ].map((tier, index) => (
              <div
                key={tier.name}
                className={`bg-white dark:bg-grey-lightest rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all w-full ${index === 1 ? 'ring-2 ring-black dark:ring-white transform md:-translate-y-2' : ''}`}
              >
                {index === 1 && (
                  <span className="bg-black dark:bg-white text-white dark:text-black text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-serif font-bold text-black dark:text-white mt-3 transition-colors duration-300">
                  {tier.name}
                </h3>
                <p className="text-2xl font-bold text-black dark:text-white mt-2 transition-colors duration-300">{tier.price}</p>
                <p className="text-grey dark:text-grey-light text-sm mt-2 transition-colors duration-300">{tier.description}</p>
                <ul className="mt-6 space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-sm text-grey-dark dark:text-grey-light transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-grey dark:bg-grey-dark rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-6 block w-full py-3 rounded-lg text-center font-medium transition-colors ${
                    index === 1
                      ? 'bg-black dark:bg-white text-white dark:text-black hover:bg-grey-dark dark:hover:bg-grey-lighter'
                      : 'bg-white-light dark:bg-grey-lightest text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black'
                  }`}
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white dark:bg-grey-lightest transition-colors duration-300">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black dark:text-white mb-4 transition-colors duration-300">
              What Our Customers Say
            </h2>
            <p className="text-grey-dark dark:text-grey-light transition-colors duration-300">Real feedback from real customers</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 px-4 w-full">
            {[
              {
                name: 'Ahmed Khan',
                location: 'Lahore',
                text: 'Absolutely stunning portrait! The artist captured every detail perfectly. My wife loved it as an anniversary gift.',
                rating: 5
              },
              {
                name: 'Sara Ali',
                location: 'Karachi',
                text: 'Beautiful paintings for our new home. The quality exceeded our expectations. Highly recommended!',
                rating: 5
              },
              {
                name: 'Muhammad Usman',
                location: 'Islamabad',
                text: 'Ordered custom office artwork. Professional service and quick delivery. Will definitely order again.',
                rating: 5
              },
            ].map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-white-light dark:bg-grey-lightest rounded-xl p-6 shadow-md w-full transition-colors duration-300"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-black dark:text-white fill-black dark:fill-white" />
                  ))}
                </div>
                <p className="text-grey-dark dark:text-grey-light mb-4 transition-colors duration-300">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center">
                    <span className="text-white dark:text-black font-medium">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-black dark:text-white transition-colors duration-300">{testimonial.name}</p>
                    <p className="text-sm text-grey dark:text-grey-light transition-colors duration-300">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black dark:bg-grey-lightest transition-colors duration-300">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white dark:text-white mb-6 transition-colors duration-300">
            Ready to Transform Your Space?
          </h2>
          <p className="text-grey-light dark:text-grey-light text-lg max-w-2xl mx-auto mb-8 transition-colors duration-300">
            Browse our collection or get in touch for custom artwork. 
            We're here to bring your artistic vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/shop"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Browse Collection</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="btn-outline inline-flex items-center space-x-2"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
