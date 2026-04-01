import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Search, Filter, Star, ShoppingCart } from 'lucide-react'

export const metadata = {
  title: 'Shop | Art Gallery Online',
  description: 'Browse our collection of unique handcrafted paintings, custom portraits, and stunning artworks.',
}

export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: 'Sunset Mountain Landscape',
      artist: 'Ahmed Khan',
      price: 250,
      originalPrice: 350,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 24,
      category: 'Landscape',
    },
    {
      id: 2,
      name: 'Abstract Emotion Collection',
      artist: 'Fatima Ahmed',
      price: 180,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 18,
      category: 'Abstract',
    },
    {
      id: 3,
      name: 'Traditional Mughal Art',
      artist: 'Ali Rahman',
      price: 420,
      originalPrice: 500,
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=400&fit=crop',
      rating: 5.0,
      reviews: 12,
      category: 'Traditional',
    },
    {
      id: 4,
      name: 'Urban Cityscape',
      artist: 'Sanaullah',
      price: 199,
      originalPrice: 280,
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 31,
      category: 'Modern',
    },
    {
      id: 5,
      name: 'Floral Serenity',
      artist: 'Aisha Malik',
      price: 150,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 45,
      category: 'Floral',
    },
    {
      id: 6,
      name: 'Ocean Waves Symphony',
      artist: 'Ahmed Khan',
      price: 320,
      originalPrice: 400,
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 19,
      category: 'Landscape',
    },
  ]

  const categories = ['All', 'Landscape', 'Abstract', 'Traditional', 'Modern', 'Floral', 'Portrait']

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
            Our Collection
          </h1>
          <p className="text-white/80 dark:text-white/80 text-lg mt-4 max-w-2xl">
            Discover unique handcrafted paintings from talented artists worldwide
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white dark:bg-grey-lightest shadow-sm sticky top-20 z-40 transition-colors duration-300">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All'
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
                placeholder="Search artworks..."
                className="w-full px-4 py-2 pl-10 border border-grey-lighter dark:border-grey-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-grey-lightest text-black dark:text-white transition-colors duration-300"
              />
              <Search className="w-5 h-5 text-grey dark:text-grey-light absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-grey-lightest rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-square bg-grey-lighter dark:bg-grey-dark relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 bg-[#800000] text-white px-3 py-1 rounded-full text-sm font-medium">
                      Sale
                    </div>
                  )}
                  <button className="absolute bottom-4 right-4 bg-white dark:bg-grey-lightest p-2 rounded-full shadow-lg hover:bg-grey-lighter dark:hover:bg-grey-dark transition-colors">
                    <ShoppingCart className="w-5 h-5 text-black dark:text-white" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs text-grey dark:text-grey-light uppercase tracking-wide mb-2 transition-colors duration-300">
                    {product.category}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-black dark:text-white mb-1 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm text-grey-dark dark:text-grey-light mb-3 transition-colors duration-300">by {product.artist}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-500 fill-current'
                              : 'text-grey dark:text-grey-light'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-grey dark:text-grey-light transition-colors duration-300">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-black dark:text-white transition-colors duration-300">
                      ₨{product.price * 280}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-grey dark:text-grey-light line-through transition-colors duration-300">
                        ₨{product.originalPrice * 280}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-primary">
              Load More Artworks
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
