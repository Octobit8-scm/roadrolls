'use client'

import { useState } from 'react'
import SearchForm from '@/components/SearchForm'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'
import { WifiIcon, SparklesIcon, BeakerIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'

interface Hotel {
  id: number
  name: string
  location: string
  rating: number
  price: number
  amenities: string[]
  image: string
  description: string
  reviews: number
  type: 'Luxury' | 'Business' | 'Boutique' | 'Resort'
}

export default function HotelsPage() {
  const [searchResults, setSearchResults] = useState<Hotel[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [filters, setFilters] = useState({
    type: 'all',
    priceRange: 'all',
    rating: 'all'
  })

  const handleSearch = async (searchData: any) => {
    setIsSearching(true)
    // TODO: Implement actual API call to search hotels
    // This is mock data for demonstration
    const mockHotels: Hotel[] = [
      {
        id: 1,
        name: 'The Grand Palace',
        location: searchData.location,
        rating: 4.8,
        price: 8500,
        amenities: ['Free WiFi', 'Swimming Pool', 'Spa', 'Fine Dining'],
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        description: 'Luxury 5-star hotel with stunning city views and world-class amenities',
        reviews: 1245,
        type: 'Luxury'
      },
      {
        id: 2,
        name: 'Seaside Resort & Spa',
        location: searchData.location,
        rating: 4.6,
        price: 6500,
        amenities: ['Beach Access', 'Free WiFi', 'Spa', 'Water Sports'],
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
        description: 'Beachfront resort offering a perfect blend of luxury and natural beauty',
        reviews: 892,
        type: 'Resort'
      },
      {
        id: 3,
        name: 'Business Tower Hotel',
        location: searchData.location,
        rating: 4.4,
        price: 4500,
        amenities: ['Business Center', 'Free WiFi', 'Gym', 'Conference Rooms'],
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        description: 'Modern business hotel in the heart of the city',
        reviews: 567,
        type: 'Business'
      },
      {
        id: 4,
        name: 'Heritage Boutique Hotel',
        location: searchData.location,
        rating: 4.7,
        price: 5500,
        amenities: ['Historic Tours', 'Garden', 'Library', 'Art Gallery'],
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
        description: 'Charming boutique hotel in a historic building',
        reviews: 423,
        type: 'Boutique'
      }
    ]
    
    setTimeout(() => {
      setSearchResults(mockHotels)
      setIsSearching(false)
    }, 1000)
  }

  const filteredHotels = searchResults.filter(hotel => {
    if (filters.type !== 'all' && hotel.type !== filters.type) return false
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number)
      if (hotel.price < min || hotel.price > max) return false
    }
    if (filters.rating !== 'all') {
      const minRating = parseFloat(filters.rating)
      if (hotel.rating < minRating) return false
    }
    return true
  })

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
            alt="Luxury hotel"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Find Your Perfect Stay</h1>
            <p className="text-xl">Discover and book hotels that match your style</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
          <SearchForm type="hotels" onSubmit={handleSearch} />
        </div>

        {isSearching && (
          <div className="mt-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Searching for hotels...</p>
          </div>
        )}

        {searchResults.length > 0 && (
          <>
            {/* Filters */}
            <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
              <div className="flex flex-wrap items-center gap-4">
                <select
                  className="border rounded-md px-3 py-2"
                  value={filters.type}
                  onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                >
                  <option value="all">All Types</option>
                  <option value="Luxury">Luxury</option>
                  <option value="Business">Business</option>
                  <option value="Boutique">Boutique</option>
                  <option value="Resort">Resort</option>
                </select>

                <select
                  className="border rounded-md px-3 py-2"
                  value={filters.priceRange}
                  onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                >
                  <option value="all">All Prices</option>
                  <option value="0-5000">Under ₹5,000</option>
                  <option value="5000-10000">₹5,000 - ₹10,000</option>
                  <option value="10000-999999">Above ₹10,000</option>
                </select>

                <select
                  className="border rounded-md px-3 py-2"
                  value={filters.rating}
                  onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
                >
                  <option value="all">All Ratings</option>
                  <option value="4.5">4.5+ Stars</option>
                  <option value="4.0">4.0+ Stars</option>
                  <option value="3.5">3.5+ Stars</option>
                </select>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredHotels.map((hotel) => (
                <div key={hotel.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/placeholder-hotel.svg';
                      }}
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-primary">
                      {hotel.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold">{hotel.name}</h3>
                        <p className="text-gray-600">{hotel.location}</p>
                      </div>
                      <div className="flex items-center">
                        <StarIcon className="h-5 w-5 text-yellow-400" />
                        <span className="ml-1 font-semibold">{hotel.rating}</span>
                        <span className="ml-1 text-gray-500">({hotel.reviews})</span>
                      </div>
                    </div>
                    
                    <p className="mt-2 text-gray-600">{hotel.description}</p>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {hotel.amenities.map((amenity, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                        >
                          {amenity === 'Free WiFi' && <WifiIcon className="h-4 w-4 mr-1" />}
                          {amenity === 'Swimming Pool' && <BeakerIcon className="h-4 w-4 mr-1" />}
                          {amenity === 'Spa' && <SparklesIcon className="h-4 w-4 mr-1" />}
                          {amenity === 'Fine Dining' && <BuildingOfficeIcon className="h-4 w-4 mr-1" />}
                          {amenity}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-6 flex justify-between items-center">
                      <div>
                        <p className="text-2xl font-bold text-primary">₹{hotel.price}</p>
                        <p className="text-sm text-gray-600">per night</p>
                      </div>
                      <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  )
} 