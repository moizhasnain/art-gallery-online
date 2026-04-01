import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Twitter } from 'lucide-react'

export const metadata = {
  title: 'Contact Us | Art Gallery Online',
  description: 'Get in touch with Art Gallery Online. We\'re here to help with questions about artworks, custom orders, or any inquiries.',
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+92 320 4060398'],
      description: 'Mon-Sat, 9am-6pm PKT',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['artgallerylahore@gmail.com'],
      description: 'We reply within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Lahore, Pakistan'],
      description: 'Visit our gallery Mon-Sat',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday: 9am - 6pm', 'Sunday: Closed'],
      description: 'PKT (UTC+5)',
    },
  ]

  return (
    <div className="min-h-screen bg-white-light dark:bg-grey-lightest transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-black dark:bg-grey-lightest py-16 transition-colors duration-300">
        <div className="container-custom">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 dark:text-white/80 hover:text-white dark:hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white dark:text-white transition-colors duration-300">
            Contact Us
          </h1>
          <p className="text-white/80 dark:text-white/80 text-lg mt-4 max-w-2xl">
            Have a question? We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding pb-0">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white dark:bg-grey-lightest rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-black/10 dark:bg-white/10 rounded-full flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-black dark:text-white" />
                </div>
                <h3 className="text-lg font-serif font-bold text-black dark:text-white mb-3 transition-colors duration-300">
                  {info.title}
                </h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-grey-dark dark:text-grey-light text-sm mb-1 transition-colors duration-300">
                    {detail}
                  </p>
                ))}
                <p className="text-grey dark:text-grey-light text-xs mt-3 transition-colors duration-300">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-grey-lightest rounded-2xl shadow-lg p-8 transition-colors duration-300">
              <h2 className="text-2xl font-serif font-bold text-black dark:text-white mb-6 transition-colors duration-300">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black dark:text-white mb-2 transition-colors duration-300">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-grey-lighter dark:border-grey-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-grey-lightest text-black dark:text-white transition-colors duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black dark:text-white mb-2 transition-colors duration-300">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-grey-lighter dark:border-grey-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-grey-lightest text-black dark:text-white transition-colors duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-2 transition-colors duration-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-grey-lighter dark:border-grey-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-grey-lightest text-black dark:text-white transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-2 transition-colors duration-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-grey-lighter dark:border-grey-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-grey-lightest text-black dark:text-white transition-colors duration-300"
                    placeholder="+92 300 000 0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-2 transition-colors duration-300">
                    Subject *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-grey-lighter dark:border-grey-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-grey-lightest text-black dark:text-white transition-colors duration-300"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Status</option>
                    <option value="custom">Custom Order</option>
                    <option value="artist">Artist Partnership</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black dark:text-white mb-2 transition-colors duration-300">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-grey-lighter dark:border-grey-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-grey-lightest text-black dark:text-white resize-none transition-colors duration-300"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-grey-lighter dark:bg-grey-dark rounded-2xl h-80 relative overflow-hidden transition-colors duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop"
                  alt="Gallery Location Map"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 dark:bg-white/30 flex items-center justify-center">
                  <div className="bg-white dark:bg-grey-lightest rounded-xl p-4 shadow-lg flex items-center gap-3 transition-colors duration-300">
                    <div className="w-10 h-10 bg-[#800000] rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-black dark:text-white text-sm transition-colors duration-300">Visit Our Gallery</p>
                      <p className="text-grey dark:text-grey-light text-xs transition-colors duration-300">Lahore, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white dark:bg-grey-lightest rounded-2xl shadow-lg p-8 transition-colors duration-300">
                <h3 className="text-xl font-serif font-bold text-black dark:text-white mb-4 transition-colors duration-300">
                  Follow Us
                </h3>
                <p className="text-grey-dark dark:text-grey-light mb-6 transition-colors duration-300">
                  Stay connected with us on social media for the latest artworks, 
                  artist features, and exclusive offers.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-black/10 dark:bg-white/10 rounded-full flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-black dark:text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-black/10 dark:bg-white/10 rounded-full flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-black dark:text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-black/10 dark:bg-white/10 rounded-full flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-black dark:text-white" />
                  </a>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="bg-gradient-to-br from-black to-grey-dark dark:from-grey-lightest dark:to-grey-dark rounded-2xl p-8 text-white dark:text-white transition-colors duration-300">
                <h3 className="text-xl font-serif font-bold mb-3">
                  Need Quick Answers?
                </h3>
                <p className="text-white/80 dark:text-white/80 mb-6">
                  Check our frequently asked questions for instant answers to common queries.
                </p>
                <Link
                  href="/faq"
                  className="inline-block bg-white dark:bg-white text-black dark:text-black px-6 py-2 rounded-lg font-medium hover:bg-grey-light dark:hover:bg-grey-lighter transition-colors"
                >
                  View FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
