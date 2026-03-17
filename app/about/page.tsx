import Link from 'next/link'
import { ArrowLeft, Palette, Truck, Shield, Award, Heart } from 'lucide-react'

export const metadata = {
  title: 'About Us | Art Gallery Online',
  description: 'Learn about Art Gallery Online - our mission, story, and commitment to bringing beautiful art to homes worldwide.',
}

export default function AboutPage() {
  const stats = [
    { value: '10,000+', label: 'Happy Customers' },
    { value: '500+', label: 'Unique Artworks' },
    { value: '50+', label: 'Talented Artists' },
    { value: '8', label: 'Years Experience' },
  ]

  const values = [
    {
      icon: Palette,
      title: 'Artisan Quality',
      description: 'Every piece is carefully crafted by skilled artists using premium materials.',
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Your transactions are protected with industry-leading security measures.',
    },
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Complimentary delivery on all orders, carefully packaged to arrive safely.',
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: 'We stand behind our art with a satisfaction guarantee on every purchase.',
    },
    {
      icon: Heart,
      title: 'Support Artists',
      description: 'Every purchase directly supports talented artists and their craft.',
    },
  ]

  return (
    <div className="min-h-screen bg-white-light">
      {/* Hero Section */}
      <section className="bg-black py-16">
        <div className="container-custom">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
            About Us
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            Bringing the beauty of art to homes around the world since 2016
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-black mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-grey-dark">
                <p>
                  Art Gallery Online was founded with a simple mission: to make beautiful, 
                  handcrafted art accessible to everyone. What started as a small family 
                  business in 2016 has grown into Pakistan's premier online art gallery.
                </p>
                <p>
                  We believe that art has the power to transform spaces, inspire minds, 
                  and bring joy to everyday life. That's why we work closely with talented 
                  artists from across the country to curate a collection that celebrates 
                  both traditional craftsmanship and contemporary expression.
                </p>
                <p>
                  Every painting in our collection tells a story - whether it's a stunning 
                  landscape captured by a master artist, an abstract piece that challenges 
                  your imagination, or a custom portrait that preserves precious memories.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-grey-lighter rounded-2xl flex items-center justify-center">
              <Palette className="w-24 h-24 text-grey" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl md:text-5xl font-serif font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold text-black text-center mb-4">
            Why Choose Us
          </h2>
          <p className="text-grey-dark text-center max-w-2xl mx-auto mb-12">
            We're committed to providing an exceptional art-buying experience from start to finish.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-black/10 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-xl font-serif font-bold text-black mb-3">
                  {value.title}
                </h3>
                <p className="text-grey-dark">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-gradient-to-br from-black to-grey-dark py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              "To democratize art by connecting talented artists with art lovers worldwide, 
              making handcrafted beauty a part of every home."
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-black mb-4">
              Ready to Explore?
            </h2>
            <p className="text-grey-dark mb-8 max-w-2xl mx-auto">
              Browse our collection of unique artworks or get in touch with our team for custom orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop" className="btn-primary">
                Browse Collection
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
