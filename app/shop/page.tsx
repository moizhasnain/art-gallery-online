import Link from 'next/link'
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
      image: '/api/placeholder/400/400',
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
      image: '/api/placeholder/400/400',
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
      image: '/api/placeholder/400/400',
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
      image: '/api/placeholder/400/400',
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
      image: '/api/placeholder/400/400',
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
      image: '/api/placeholder/400/400',
      rating: 4.6,
      reviews: 19,
      category: 'Landscape',
    },
  ]

  const categories = ['All', 'Landscape', 'Abstract', 'Traditional', 'Modern', 'Floral', 'Portrait']

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
            Our Collection
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            Discover unique handcrafted paintings from talented artists worldwide
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white shadow-sm sticky top-20 z-40">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All'
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
                placeholder="Search artworks..."
                className="w-full px-4 py-2 pl-10 border border-grey-lighter rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <Search className="w-5 h-5 text-grey absolute left-3 top-1/2 -translate-y-1/2" />
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
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Image */}
                <div className="aspect-square bg-grey-lighter relative">
                  <div className="absolute inset-0 flex items-center justify-center text-grey">
                    <span className="text-lg">Product Image</span>
                  </div>
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 bg-[#800000] text-white px-3 py-1 rounded-full text-sm font-medium">
                      Sale
                    </div>
                  )}
                  <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-grey-lighter transition-colors">
                    <ShoppingCart className="w-5 h-5 text-black" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs text-grey uppercase tracking-wide mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-black mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-grey-dark mb-3">by {product.artist}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-500 fill-current'
                              : 'text-grey'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-grey">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-black">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-grey line-through">
                        ${product.originalPrice}
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
