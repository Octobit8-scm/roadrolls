'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function TrainsPage() {
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    date: '',
    class: 'all'
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Search params:', searchParams)
  }

  const trains = [
    {
      id: 1,
      name: 'Express Train',
      route: 'Mumbai - Delhi',
      duration: '16h 30m',
      price: '₹2,500',
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3',
      features: ['AC Sleeper', 'Food Service', 'WiFi']
    },
    {
      id: 2,
      name: 'Superfast Express',
      route: 'Delhi - Kolkata',
      duration: '17h 45m',
      price: '₹2,800',
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3',
      features: ['AC Chair Car', 'Food Service', 'WiFi']
    },
    {
      id: 3,
      name: 'Rajdhani Express',
      route: 'Delhi - Mumbai',
      duration: '15h 55m',
      price: '₹3,200',
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3',
      features: ['AC First Class', 'Food Service', 'WiFi']
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1474487548417-781cb71495f3"
            alt="Train background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">Book Your Train Journey</h1>
          <p className="text-xl">Find and book train tickets across India</p>
        </div>
      </section>

      {/* Search Form */}
      <section className="max-w-4xl mx-auto -mt-20 px-4 relative z-20">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="from" className="block text-sm font-medium text-gray-700 mb-1">
                  From Station
                </label>
                <input
                  type="text"
                  id="from"
                  value={searchParams.from}
                  onChange={(e) => setSearchParams({ ...searchParams, from: e.target.value })}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Enter departure station"
                  required
                />
              </div>
              <div>
                <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">
                  To Station
                </label>
                <input
                  type="text"
                  id="to"
                  value={searchParams.to}
                  onChange={(e) => setSearchParams({ ...searchParams, to: e.target.value })}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Enter arrival station"
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
                <label htmlFor="class" className="block text-sm font-medium text-gray-700 mb-1">
                  Travel Class
                </label>
                <select
                  id="class"
                  value={searchParams.class}
                  onChange={(e) => setSearchParams({ ...searchParams, class: e.target.value })}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="all">All Classes</option>
                  <option value="ac1">AC First Class</option>
                  <option value="ac2">AC 2 Tier</option>
                  <option value="ac3">AC 3 Tier</option>
                  <option value="sleeper">Sleeper Class</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark transition-colors"
            >
              Search Trains
            </button>
          </form>
        </div>
      </section>

      {/* Featured Trains */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Train Routes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trains.map((train) => (
            <div key={train.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={train.image}
                  alt={train.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder-train.svg';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{train.name}</h3>
                <p className="text-gray-600 mb-2">{train.route}</p>
                <p className="text-gray-600 mb-2">Duration: {train.duration}</p>
                <p className="text-primary font-semibold mb-4">From {train.price}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {train.features.map((feature, index) => (
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