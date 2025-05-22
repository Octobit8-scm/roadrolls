'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const packages = [
  // India Packages
  {
    id: 'taj-mahal',
    name: 'Taj Mahal Experience',
    country: 'India',
    duration: '3 days',
    price: '₹45,000',
    description: 'Visit the iconic Taj Mahal and explore the rich history of Agra.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
    highlights: ['Taj Mahal', 'Agra Fort', 'Local Cuisine']
  },
  {
    id: 'kerala',
    name: 'Kerala Backwaters',
    country: 'India',
    duration: '5 days',
    price: '₹65,000',
    description: 'Experience the serene backwaters and lush landscapes of Kerala.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    highlights: ['Houseboat Stay', 'Ayurveda', 'Tea Plantations']
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan Royal Tour',
    country: 'India',
    duration: '7 days',
    price: '₹85,000',
    description: 'Explore the royal palaces and desert landscapes of Rajasthan.',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    highlights: ['Jaipur Palace', 'Desert Safari', 'Cultural Shows']
  },
  {
    id: 'goa',
    name: 'Goa Beach Paradise',
    country: 'India',
    duration: '4 days',
    price: '₹55,000',
    description: 'Enjoy the sun, sand, and vibrant nightlife of Goa.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    highlights: ['Beach Hopping', 'Water Sports', 'Portuguese Heritage']
  },

  // Thailand Packages
  {
    id: 'bangkok',
    name: 'Bangkok Explorer',
    country: 'Thailand',
    duration: '4 days',
    price: '₹50,000',
    description: 'Discover the vibrant city life and cultural heritage of Bangkok.',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
    highlights: ['Temples', 'Street Food', 'Night Markets']
  },
  {
    id: 'phuket',
    name: 'Phuket Island Getaway',
    country: 'Thailand',
    duration: '5 days',
    price: '₹70,000',
    description: 'Experience the beautiful beaches and island life of Phuket.',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
    highlights: ['Island Hopping', 'Snorkeling', 'Sunset Views']
  },
  {
    id: 'chiang-mai',
    name: 'Chiang Mai Cultural Tour',
    country: 'Thailand',
    duration: '4 days',
    price: '₹45,000',
    description: 'Immerse yourself in the rich culture and traditions of Northern Thailand.',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80',
    highlights: ['Temple Visits', 'Cooking Class', 'Elephant Sanctuary']
  },
  {
    id: 'krabi',
    name: 'Krabi Adventure',
    country: 'Thailand',
    duration: '6 days',
    price: '₹75,000',
    description: 'Explore the stunning limestone cliffs and hidden beaches of Krabi.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    highlights: ['Rock Climbing', 'Kayaking', 'Hot Springs']
  },

  // Indonesia Packages
  {
    id: 'bali',
    name: 'Bali Adventure',
    country: 'Indonesia',
    duration: '5 days',
    price: '₹60,000',
    description: 'Experience the perfect blend of culture, nature, and adventure in Bali.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    highlights: ['Temples', 'Beaches', 'Rice Terraces']
  },
  {
    id: 'yogyakarta',
    name: 'Yogyakarta Heritage Tour',
    country: 'Indonesia',
    duration: '4 days',
    price: '₹45,000',
    description: 'Discover the ancient temples and rich cultural heritage of Yogyakarta.',
    image: 'https://images.unsplash.com/photo-1588668219995-d3f3b3a3b1f3?auto=format&fit=crop&w=800&q=80',
    highlights: ['Borobudur', 'Prambanan', 'Traditional Arts']
  },
  {
    id: 'lombok',
    name: 'Lombok Island Escape',
    country: 'Indonesia',
    duration: '6 days',
    price: '₹70,000',
    description: 'Experience the pristine beaches and natural beauty of Lombok.',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
    highlights: ['Gili Islands', 'Mount Rinjani', 'Waterfalls']
  },
  {
    id: 'komodo',
    name: 'Komodo Dragon Adventure',
    country: 'Indonesia',
    duration: '5 days',
    price: '₹80,000',
    description: 'Witness the famous Komodo dragons and explore the stunning islands.',
    image: 'https://images.unsplash.com/photo-1588668219995-d3f3b3a3b1f3?auto=format&fit=crop&w=800&q=80',
    highlights: ['Komodo National Park', 'Pink Beach', 'Snorkeling']
  }
]

export default function PackagesPage() {
  const [selectedCountry, setSelectedCountry] = useState<string>('All Countries')
  const countries = ['All Countries', ...new Set(packages.map(pkg => pkg.country))]

  const filteredPackages = selectedCountry === 'All Countries'
    ? packages
    : packages.filter(pkg => pkg.country === selectedCountry)

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80"
            alt="Tour Packages"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">Tour Packages</h1>
          <p className="text-xl">Discover our curated travel experiences</p>
        </div>
      </section>

      {/* Country Filter */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCountry === country
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {country}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <Link
              key={pkg.id}
              href={`/packages/${pkg.id}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-primary">
                  {pkg.country}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>{pkg.duration}</span>
                  <span className="font-semibold text-primary">{pkg.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <div className="flex flex-wrap gap-2">
                  {pkg.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No packages found for the selected country.</p>
          </div>
        )}
      </section>
    </main>
  )
} 