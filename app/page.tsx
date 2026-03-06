import Link from 'next/link'
import { ArrowRight, Star, Paintbrush, Palette, Award, Truck, Shield, RefreshCcw } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white-light to-white"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-black rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-grey rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-fadeIn">
              <span className="inline-block bg-black/10 text-black px-4 py-2 rounded-full text-sm font-medium mb-6">
                Custom Paintings & Artworks
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-black leading-tight mb-6">
                Beautiful Art for
                <span className="text-black block">Every Space</span>
              </h1>
              <p className="text-lg text-grey-dark mb-8 max-w-lg">
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
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-grey-lighter">
                <div>
                  <p className="text-3xl font-bold text-black">500+</p>
                  <p className="text-sm text-grey">Happy Customers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-black">100+</p>
                  <p className="text-sm text-grey">Artworks</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-black">50+</p>
                  <p className="text-sm text-grey">Artists</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-slideInRight">
              <div className="relative bg-white rounded-2xl shadow-2xl p-4">
                <div className="aspect-[4/3] bg-gradient-to-br from-black/10 to-grey/20 rounded-xl overflow-hidden">
                  {/* Placeholder for hero image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <Paintbrush className="w-24 h-24 text-black mx-auto mb-4" />
                      <p className="text-grey">Featured Artwork</p>
                    </div>
                  </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 flex items-center space-x-3">
                  <div className="w-12 h-12 bg-grey rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-black">4.9/5</p>
                    <p className="text-sm text-grey">Customer Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="bg-black py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <Truck className="w-8 h-8 text-grey-light" />
              <div>
                <p className="font-semibold text-white">Free Delivery</p>
                <p className="text-sm text-white/70">On orders over ₨5,000</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-grey-light" />
              <div>
                <p className="font-semibold text-white">Secure Payment</p>
                <p className="text-sm text-white/70">100% Secure</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <RefreshCcw className="w-8 h-8 text-grey-light" />
              <div>
                <p className="font-semibold text-white">Easy Returns</p>
                <p className="text-sm text-white/70">7-day return policy</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="w-8 h-8 text-grey-light" />
              <div>
                <p className="font-semibold text-white">Quality Art</p>
                <p className="text-sm text-white/70">Handcrafted with love</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-white-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">
              Shop by Category
            </h2>
            <p className="text-grey-dark max-w-2xl mx-auto">
              Explore our wide range of art products and services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Paintings', icon: Paintbrush, href: '/shop/paintings' },
              { name: 'Portraits', icon: Palette, href: '/shop/portraits' },
              { name: 'Canvas', icon: Paintbrush, href: '/shop/canvas' },
              { name: 'Paints', icon: Palette, href: '/shop/paints' },
              { name: 'Brushes', icon: Paintbrush, href: '/shop/brushes' },
              { name: 'Supplies', icon: Palette, href: '/shop/supplies' },
            ].map((category, index) => (
              <Link
                key={category.name}
                href={category.href}
                className="group bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-black transition-colors">
                  <category.icon className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-black group-hover:text-black transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">
                Featured Artworks
              </h2>
              <p className="text-grey-dark">Handpicked pieces for your space</p>
            </div>
            <Link
              href="/shop"
              className="hidden md:inline-flex items-center space-x-2 text-black hover:text-grey-dark font-medium"
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
                image: 'painting-1'
              },
              {
                name: 'Portrait Sketch',
                category: 'Portraits',
                price: '₨5,000',
                image: 'portrait-1'
              },
              {
                name: 'Abstract Art',
                category: 'Paintings',
                price: '₨12,000',
                image: 'abstract-1'
              },
              {
                name: 'Floral Canvas',
                category: 'Canvas',
                price: '₨6,500',
                image: 'canvas-1'
              },
            ].map((product, index) => (
              <div
                key={product.name}
                className="card group animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square bg-gradient-to-br from-black/10 to-grey/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Paintbrush className="w-16 h-16 text-black/30" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Link
                      href={`/product/${product.image}`}
                      className="bg-white text-black px-4 py-2 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-all"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-grey mb-1">{product.category}</p>
                  <h3 className="font-semibold text-black mb-2 group-hover:text-black transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-lg font-bold text-black">{product.price}</p>
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
      <section className="section-padding bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-grey-dark rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-grey rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Get Your Custom Portrait
              </h2>
              <p className="text-grey-light mb-8 text-lg">
                Turn your favorite photo into a beautiful hand-drawn portrait. 
                Perfect for gifts, home decor, or commemorating special moments.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <div className="flex items-center space-x-2 text-white">
                  <div className="w-2 h-2 bg-grey rounded-full"></div>
                  <span>Upload your photo</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <div className="w-2 h-2 bg-grey rounded-full"></div>
                  <span>Choose style & size</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <div className="w-2 h-2 bg-grey rounded-full"></div>
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
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="aspect-[4/3] bg-gradient-to-br from-grey/30 to-grey-dark/30 rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <Paintbrush className="w-20 h-20 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-medium">Custom Portrait Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding bg-white-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">
              Transparent Pricing
            </h2>
            <p className="text-grey-dark max-w-2xl mx-auto">
              Choose the perfect artwork for your budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all ${
                  index === 1 ? 'ring-2 ring-black transform md:-translate-y-2' : ''
                }`}
              >
                {index === 1 && (
                  <span className="bg-black text-white text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-serif font-bold text-black mt-3">
                  {tier.name}
                </h3>
                <p className="text-2xl font-bold text-black mt-2">{tier.price}</p>
                <p className="text-grey text-sm mt-2">{tier.description}</p>
                <ul className="mt-6 space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-sm text-grey-dark">
                      <div className="w-1.5 h-1.5 bg-grey rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-6 block w-full py-3 rounded-lg text-center font-medium transition-colors ${
                    index === 1
                      ? 'bg-black text-white hover:bg-grey-dark'
                      : 'bg-white-light text-black hover:bg-black hover:text-white'
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">
              What Our Customers Say
            </h2>
            <p className="text-grey-dark">Real feedback from real customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
                className="bg-white-light rounded-xl p-6 shadow-md"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-black fill-black" />
                  ))}
                </div>
                <p className="text-grey-dark mb-4">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-black">{testimonial.name}</p>
                    <p className="text-sm text-grey">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-grey-light text-lg max-w-2xl mx-auto mb-8">
            Browse our collection or get in touch for custom artwork. 
            We're here to bring your artistic vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/shop"
              className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-grey-light transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
