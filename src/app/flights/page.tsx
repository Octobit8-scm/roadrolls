'use client'

import { useState } from 'react'
import SearchForm from '@/components/SearchForm'
import Image from 'next/image'

interface Flight {
  id: number
  airline: string
  flightNumber: string
  departure: string
  arrival: string
  departureTime: string
  arrivalTime: string
  price: number
  duration: string
  airlineLogo: string
  class: 'Economy' | 'Business' | 'First'
  stops: number
}

export default function FlightsPage() {
  const [searchResults, setSearchResults] = useState<Flight[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [filters, setFilters] = useState({
    class: 'all',
    stops: 'all',
    priceRange: 'all'
  })
  const [sortBy, setSortBy] = useState('price')

  const handleSearch = async (searchData: any) => {
    setIsSearching(true)
    // TODO: Implement actual API call to search flights
    // This is mock data for demonstration
    const mockFlights: Flight[] = [
      {
        id: 1,
        airline: 'Air India',
        flightNumber: 'AI101',
        departure: searchData.location,
        arrival: searchData.destination,
        departureTime: '10:00 AM',
        arrivalTime: '12:30 PM',
        price: 4500,
        duration: '2h 30m',
        airlineLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Air_India_Logo.svg/1200px-Air_India_Logo.svg.png',
        class: 'Economy',
        stops: 0
      },
      {
        id: 2,
        airline: 'IndiGo',
        flightNumber: '6E123',
        departure: searchData.location,
        arrival: searchData.destination,
        departureTime: '02:15 PM',
        arrivalTime: '04:45 PM',
        price: 3800,
        duration: '2h 30m',
        airlineLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/IndiGo_logo.svg/1200px-IndiGo_logo.svg.png',
        class: 'Economy',
        stops: 0
      },
      {
        id: 3,
        airline: 'Vistara',
        flightNumber: 'UK825',
        departure: searchData.location,
        arrival: searchData.destination,
        departureTime: '08:30 AM',
        arrivalTime: '11:00 AM',
        price: 5200,
        duration: '2h 30m',
        airlineLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vistara_logo.svg/1200px-Vistara_logo.svg.png',
        class: 'Business',
        stops: 0
      },
      {
        id: 4,
        airline: 'Air India',
        flightNumber: 'AI201',
        departure: searchData.location,
        arrival: searchData.destination,
        departureTime: '03:45 PM',
        arrivalTime: '06:15 PM',
        price: 4200,
        duration: '2h 30m',
        airlineLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Air_India_Logo.svg/1200px-Air_India_Logo.svg.png',
        class: 'Economy',
        stops: 1
      }
    ]
    
    setTimeout(() => {
      setSearchResults(mockFlights)
      setIsSearching(false)
    }, 1000)
  }

  const filteredAndSortedFlights = searchResults
    .filter(flight => {
      if (filters.class !== 'all' && flight.class !== filters.class) return false
      if (filters.stops !== 'all') {
        const stops = parseInt(filters.stops)
        if (stops === 0 && flight.stops !== 0) return false
        if (stops === 1 && flight.stops !== 1) return false
        if (stops === 2 && flight.stops < 2) return false
      }
      if (filters.priceRange !== 'all') {
        const [min, max] = filters.priceRange.split('-').map(Number)
        if (flight.price < min || flight.price > max) return false
      }
      return true
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price
        case 'duration':
          return a.duration.localeCompare(b.duration)
        case 'departure':
          return a.departureTime.localeCompare(b.departureTime)
        default:
          return 0
      }
    })

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
            alt="Airplane in sky"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Find Your Perfect Flight</h1>
            <p className="text-xl">Search and book flights to your favorite destinations</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
          <SearchForm type="flights" onSubmit={handleSearch} />
        </div>

        {isSearching && (
          <div className="mt-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Searching for flights...</p>
          </div>
        )}

        {searchResults.length > 0 && (
          <>
            {/* Filters and Sort */}
            <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-4">
                  <select
                    className="border rounded-md px-3 py-2"
                    value={filters.class}
                    onChange={(e) => setFilters({ ...filters, class: e.target.value })}
                  >
                    <option value="all">All Classes</option>
                    <option value="Economy">Economy</option>
                    <option value="Business">Business</option>
                    <option value="First">First</option>
                  </select>

                  <select
                    className="border rounded-md px-3 py-2"
                    value={filters.stops}
                    onChange={(e) => setFilters({ ...filters, stops: e.target.value })}
                  >
                    <option value="all">All Stops</option>
                    <option value="0">Non-stop</option>
                    <option value="1">1 Stop</option>
                    <option value="2">2+ Stops</option>
                  </select>

                  <select
                    className="border rounded-md px-3 py-2"
                    value={filters.priceRange}
                    onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                  >
                    <option value="all">All Prices</option>
                    <option value="0-5000">Under ₹5,000</option>
                    <option value="5000-10000">₹5,000 - ₹10,000</option>
                    <option value="10000-20000">₹10,000 - ₹20,000</option>
                    <option value="20000-999999">Above ₹20,000</option>
                  </select>
                </div>

                <select
                  className="border rounded-md px-3 py-2"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="price">Sort by Price</option>
                  <option value="duration">Sort by Duration</option>
                  <option value="departure">Sort by Departure Time</option>
                </select>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {filteredAndSortedFlights.map((flight) => (
                <div key={flight.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="relative h-16 w-16 bg-gray-100 rounded-lg p-2">
                          <Image
                            src={flight.airlineLogo}
                            alt={flight.airline}
                            fill
                            className="object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/images/placeholder-airline.svg';
                            }}
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{flight.airline}</h3>
                          <p className="text-sm text-gray-600">{flight.flightNumber}</p>
                          <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 mt-1">
                            {flight.class}
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-xl font-semibold">{flight.departureTime}</p>
                        <p className="text-sm text-gray-600">{flight.departure}</p>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-sm text-gray-600">{flight.duration}</p>
                        <div className="relative w-32 h-0.5 bg-gray-300 my-2">
                          <div className="absolute inset-0 flex items-center justify-between">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500">
                          {flight.stops === 0 ? 'Direct' : `${flight.stops} Stop${flight.stops > 1 ? 's' : ''}`}
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-xl font-semibold">{flight.arrivalTime}</p>
                        <p className="text-sm text-gray-600">{flight.arrival}</p>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">₹{flight.price}</p>
                        <button className="mt-2 bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors">
                          Book Now
                        </button>
                      </div>
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