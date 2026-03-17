import Link from 'next/link'
import { ArrowLeft, Calendar, User, ArrowRight, Search } from 'lucide-react'

export const metadata = {
  title: 'Blog | Art Gallery Online',
  description: 'Read our latest articles about art, painting techniques, artist interviews, and home decor tips.',
}

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: 'The Art of Choosing the Perfect Painting for Your Home',
    excerpt: 'Discover how to select artwork that complements your interior design and reflects your personal style.',
    author: 'Fatima Ahmed',
    date: 'March 15, 2024',
    category: 'Interior Design',
    image: '/api/placeholder/800/400',
    readTime: '5 min read',
  }

  const blogPosts = [
    {
      id: 2,
      title: 'Understanding Different Art Styles: A Beginner\'s Guide',
      excerpt: 'From abstract to realism, learn about the various art movements and find what resonates with you.',
      author: 'Ahmed Khan',
      date: 'March 10, 2024',
      category: 'Art Education',
      image: '/api/placeholder/400/250',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'Artist Spotlight: Ali Rahman and the Revival of Mughal Art',
      excerpt: 'An in-depth interview with master artist Ali Rahman about his journey in traditional miniature painting.',
      author: 'Sanaullah',
      date: 'March 5, 2024',
      category: 'Artist Spotlight',
      image: '/api/placeholder/400/250',
      readTime: '10 min read',
    },
    {
      id: 4,
      title: 'Caring for Your Artwork: Essential Tips for Preservation',
      excerpt: 'Learn how to properly maintain and protect your paintings for generations to come.',
      author: 'Aisha Malik',
      date: 'February 28, 2024',
      category: 'Care Tips',
      image: '/api/placeholder/400/250',
      readTime: '4 min read',
    },
    {
      id: 5,
      title: 'Custom Portraits: A Timeless Gift for Any Occasion',
      excerpt: 'Why personalized portraits make meaningful gifts and how to commission one.',
      author: 'Hassan Raza',
      date: 'February 20, 2024',
      category: 'Services',
      image: '/api/placeholder/400/250',
      readTime: '6 min read',
    },
    {
      id: 6,
      title: 'The Psychology of Colors in Art and Home Decor',
      excerpt: 'How color choices in artwork can affect mood and atmosphere in your living spaces.',
      author: 'Fatima Ahmed',
      date: 'February 15, 2024',
      category: 'Interior Design',
      image: '/api/placeholder/400/250',
      readTime: '8 min read',
    },
  ]

  const categories = [
    'All Posts',
    'Interior Design',
    'Art Education',
    'Artist Spotlight',
    'Care Tips',
    'Services',
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
            Blog
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            Insights, tips, and stories from the world of art
          </p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="bg-white shadow-sm">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All Posts'
                      ? 'bg-black text-white'
                      : 'bg-grey-lighter text-black hover:bg-grey'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-2 pl-10 border border-grey-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <Search className="w-5 h-5 text-grey absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="aspect-video md:aspect-auto bg-grey-lighter flex items-center justify-center">
                <span className="text-grey">Featured Image</span>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-[#800000] text-sm font-medium mb-3">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-black mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-grey-dark mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-grey mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                <button className="btn-primary inline-flex items-center gap-2 self-start">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="pb-20">
        <div className="container-custom">
          <h2 className="text-2xl font-serif font-bold text-black mb-8">
            Recent Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Image */}
                <div className="aspect-video bg-grey-lighter flex items-center justify-center">
                  <span className="text-grey">Blog Image</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-[#800000] text-xs font-medium">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-black mt-2 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-grey-dark text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-grey">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-br from-black to-grey-dark py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Get the latest articles, artist features, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-grey-light transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
