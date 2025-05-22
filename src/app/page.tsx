import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const featuredDestinations = [
    {
      id: 1,
      name: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
      description: 'Experience the perfect blend of culture and paradise',
    },
    {
      id: 2,
      name: 'Bangkok, Thailand',
      image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365',
      description: 'Discover the vibrant heart of Thailand',
    },
    {
      id: 3,
      name: 'Kuala Lumpur, Malaysia',
      image: 'https://images.unsplash.com/photo-1588668219995-d3f3b3a3b1f3',
      description: 'Modern city life meets rich cultural heritage',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
            alt="Travel background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Your Journey Begins Here</h1>
          <p className="text-xl mb-8">Discover amazing destinations and create unforgettable memories</p>
          <div className="flex gap-4 justify-center">
            <Link href="/planner" className="btn-primary">
              Start Planning
            </Link>
            <Link href="/packages" className="btn-secondary">
              View Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((destination) => (
            <div key={destination.id} className="card group">
              <div className="relative h-64">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                <p className="text-gray-600">{destination.description}</p>
                <Link
                  href={`/destinations/${destination.name.toLowerCase().replace(',', '')}`}
                  className="text-primary font-medium mt-4 inline-block hover:text-secondary"
                >
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
} 