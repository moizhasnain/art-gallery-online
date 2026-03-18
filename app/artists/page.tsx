import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Award, Palette, Mail, Instagram, Facebook } from 'lucide-react'

export const metadata = {
  title: 'Our Artists | Art Gallery Online',
  description: 'Meet the talented artists behind our unique handcrafted paintings and artworks.',
}

export default function ArtistsPage() {
  const artists = [
    {
      id: 1,
      name: 'Ahmed Khan',
      specialty: 'Landscape & Seascape',
      bio: 'With over 15 years of experience, Ahmed creates stunning landscapes that capture the essence of nature. His work has been featured in galleries across Pakistan.',
      image: '/api/placeholder/400/400',
      artworks: 45,
      awards: 3,
      style: 'Realism',
    },
    {
      id: 2,
      name: 'Fatima Ahmed',
      specialty: 'Abstract & Contemporary',
      bio: 'Fatima brings emotion to canvas through bold colors and abstract forms. Her unique style explores the depths of human experience through art.',
      image: '/api/placeholder/400/400',
      artworks: 38,
      awards: 2,
      style: 'Abstract Expressionism',
    },
    {
      id: 3,
      name: 'Ali Rahman',
      specialty: 'Traditional & Mughal',
      bio: 'Ali is a master of traditional Pakistani art, specializing in Mughal miniature paintings. His intricate details preserve centuries-old techniques.',
      image: '/api/placeholder/400/400',
      artworks: 52,
      awards: 5,
      style: 'M miniature',
    },
    {
      id: 4,
      name: 'Sanaullah',
      specialty: 'Modern & Urban',
      bio: 'Sanaullah captures the energy of modern cities in his vibrant artworks. His contemporary pieces blend urban elements with classical techniques.',
      image: '/api/placeholder/400/400',
      artworks: 33,
      awards: 1,
      style: 'Contemporary',
    },
    {
      id: 5,
      name: 'Aisha Malik',
      specialty: 'Floral & Nature',
      bio: 'Aisha\'s floral paintings celebrate the beauty of nature. Her delicate use of color brings flowers to life on canvas.',
      image: '/api/placeholder/400/400',
      artworks: 67,
      awards: 4,
      style: 'Realism',
    },
    {
      id: 6,
      name: 'Hassan Raza',
      specialty: 'Portraits & Character',
      bio: 'Hassan is renowned for his lifelike portraits that capture the essence of his subjects. His custom portrait service is highly sought after.',
      image: '/api/placeholder/400/400',
      artworks: 89,
      awards: 6,
      style: 'Portrait',
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
            Our Artists
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">
            Meet the talented artists behind our unique collection of handcrafted paintings
          </p>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist) => (
              <div
                key={artist.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Image */}
                <div className="aspect-square bg-grey-lighter relative">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-black text-white px-2 py-1 rounded">
                      {artist.style}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-black mb-1">
                    {artist.name}
                  </h3>
                  <p className="text-[#800000] font-medium mb-3">
                    {artist.specialty}
                  </p>
                  <p className="text-grey-dark text-sm mb-4 line-clamp-3">
                    {artist.bio}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Palette className="w-4 h-4 text-grey" />
                      <span className="text-grey-dark">{artist.artworks} artworks</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-grey" />
                      <span className="text-grey-dark">{artist.awards} awards</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button className="btn-primary flex-1 text-center">
                      View Profile
                    </button>
                    <button className="p-2 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become an Artist CTA */}
      <section className="bg-gradient-to-br from-black to-grey-dark py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Are You an Artist?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Join our community of talented artists and showcase your artwork to thousands of customers worldwide.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-grey-light transition-colors"
            >
              Apply as an Artist
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
