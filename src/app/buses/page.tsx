'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function BusesPage() {
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    date: '',
    type: 'all'
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Search params:', searchParams)
  }

  const buses = [
    {
      id: 1,
      name: 'Deluxe Bus',
      route: 'Mumbai - Pune',
      duration: '3h 30m',
      price: '₹500',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957',
      features: ['AC', 'WiFi', 'Reclining Seats']
    },
    {
      id: 2,
      name: 'Sleeper Bus',
      route: 'Delhi - Jaipur',
      duration: '6h 15m',
      price: '₹800',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957',
      features: ['AC', 'Sleeper Berths', 'Blankets']
    },
    {
      id: 3,
      name: 'Luxury Bus',
      route: 'Bangalore - Chennai',
      duration: '7h 45m',
      price: '₹1,200',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957',
      features: ['AC', 'WiFi', 'Entertainment', 'Refreshments']
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957"
            alt="Bus background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">Book Your Bus Journey</h1>
          <p className="text-xl">Find and book bus tickets across India</p>
        </div>
      </section>

      {/* Search Form */}
      <section className="max-w-4xl mx-auto -mt-20 px-4 relative z-20">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="from" className="block text-sm font-medium text-gray-700 mb-1">
                  From City
                </label>
                <input
                  type="text"
                  id="from"
                  value={searchParams.from}
                  onChange={(e) => setSearchParams({ ...searchParams, from: e.target.value })}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Enter departure city"
                  required
                />
              </div>
              <div>
                <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">
                  To City
                </label>
                <input
                  type="text"
                  id="to"
                  value={searchParams.to}
                  onChange={(e) => setSearchParams({ ...searchParams, to: e.target.value })}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Enter arrival city"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Journey Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={searchParams.date}
                  onChange={(e) => setSearchParams({ ...searchParams, date: e.target.value })}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                  Bus Type
                </label>
                <select
                  id="type"
                  value={searchParams.type}
                  onChange={(e) => setSearchParams({ ...searchParams, type: e.target.value })}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="all">All Types</option>
                  <option value="ac">AC Bus</option>
                  <option value="sleeper">Sleeper Bus</option>
                  <option value="luxury">Luxury Bus</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark transition-colors"
            >
              Search Buses
            </button>
          </form>
        </div>
      </section>

      {/* Featured Buses */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Bus Routes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {buses.map((bus) => (
            <div key={bus.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={bus.image}
                  alt={bus.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder-bus.svg';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{bus.name}</h3>
                <p className="text-gray-600 mb-2">{bus.route}</p>
                <p className="text-gray-600 mb-2">Duration: {bus.duration}</p>
                <p className="text-primary font-semibold mb-4">From {bus.price}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {bus.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
} 