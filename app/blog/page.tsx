import Link from 'next/link'
import Image from 'next/image'
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
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=400&h=250&fit=crop',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'Artist Spotlight: Ali Rahman and the Revival of Mughal Art',
      excerpt: 'An in-depth interview with master artist Ali Rahman about his journey in traditional miniature painting.',
      author: 'Sanaullah',
      date: 'March 5, 2024',
      category: 'Artist Spotlight',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=250&fit=crop',
      readTime: '10 min read',
    },
    {
      id: 4,
      title: 'Caring for Your Artwork: Essential Tips for Preservation',
      excerpt: 'Learn how to properly maintain and protect your paintings for generations to come.',
      author: 'Aisha Malik',
      date: 'February 28, 2024',
      category: 'Care Tips',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=250&fit=crop',
      readTime: '4 min read',
    },
    {
      id: 5,
      title: 'Custom Portraits: A Timeless Gift for Any Occasion',
      excerpt: 'Why personalized portraits make meaningful gifts and how to commission one.',
      author: 'Hassan Raza',
      date: 'February 20, 2024',
      category: 'Services',
      image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&h=250&fit=crop',
      readTime: '6 min read',
    },
    {
      id: 6,
      title: 'The Psychology of Colors in Art and Home Decor',
      excerpt: 'How color choices in artwork can affect mood and atmosphere in your living spaces.',
      author: 'Fatima Ahmed',
      date: 'February 15, 2024',
      category: 'Interior Design',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=250&fit=crop',
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
            Blog
          </h1>
          <p className="text-white/80 dark:text-white/80 text-lg mt-4 max-w-2xl">
            Insights, tips, and stories from the world of art
          </p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="bg-white dark:bg-grey-lightest shadow-sm transition-colors duration-300">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All Posts'
                      ? 'bg-black dark:bg-white text-white dark:text-black'
                      : 'bg-grey-lighter dark:bg-grey-dark text-black dark:text-white hover:bg-grey dark:hover:bg-grey-light'
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
                className="w-full px-4 py-2 pl-10 border border-grey-lighter dark:border-grey-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-grey-lightest text-black dark:text-white transition-colors duration-300"
              />
              <Search className="w-5 h-5 text-grey dark:text-grey-light absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-white dark:bg-grey-lightest rounded-2xl shadow-lg overflow-hidden transition-colors duration-300">
            <div className="grid md:grid-cols-2">
              <div className="aspect-video md:aspect-auto bg-grey-lighter dark:bg-grey-dark relative">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-[#800000] dark:text-[#800000] text-sm font-medium mb-3">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-black dark:text-white mb-4 transition-colors duration-300">
                  {featuredPost.title}
                </h2>
                <p className="text-grey-dark dark:text-grey-light mb-6 transition-colors duration-300">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-grey dark:text-grey-light mb-6 transition-colors duration-300">
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
          <h2 className="text-2xl font-serif font-bold text-black dark:text-white mb-8 transition-colors duration-300">
            Recent Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white dark:bg-grey-lightest rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-video bg-grey-lighter dark:bg-grey-dark relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-[#800000] dark:text-[#800000] text-xs font-medium">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-black dark:text-white mt-2 mb-3 line-clamp-2 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-grey-dark dark:text-grey-light text-sm mb-4 line-clamp-2 transition-colors duration-300">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-grey dark:text-grey-light transition-colors duration-300">
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
      <section className="bg-gradient-to-br from-black to-grey-dark dark:from-grey-lightest dark:to-grey-dark py-16 transition-colors duration-300">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white dark:text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/80 dark:text-white/80 text-lg mb-8">
              Get the latest articles, artist features, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-black dark:text-white bg-white dark:bg-grey-lightest focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-white transition-colors duration-300"
              />
              <button className="bg-white dark:bg-white text-black dark:text-black px-8 py-3 rounded-lg font-medium hover:bg-grey-light dark:hover:bg-grey-lighter transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
