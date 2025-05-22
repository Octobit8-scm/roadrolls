'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline'

const cars = [
  {
    id: 1,
    name: 'Toyota Camry',
    type: 'Sedan',
    price: 50,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d',
    features: ['Automatic', '4 Doors', '5 Seats', 'Air Conditioning'],
  },
  {
    id: 2,
    name: 'Honda CR-V',
    type: 'SUV',
    price: 65,
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a',
    features: ['Automatic', '5 Doors', '5 Seats', '4WD Available'],
  },
  {
    id: 3,
    name: 'BMW 3 Series',
    type: 'Luxury',
    price: 85,
    image: 'https://images.unsplash.com/photo-1555215695-300b0ca6ba4d',
    features: ['Automatic', '4 Doors', '5 Seats', 'Premium Sound'],
  },
]

export default function CarsPage() {
  const [searchParams, setSearchParams] = useState({
    location: '',
    pickupDate: '',
    returnDate: '',
    carType: '',
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log('Searching cars with params:', searchParams)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          alt="Car Rental"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Find Your Perfect Ride</h1>
            <p className="text-xl">Rent a car for your next adventure</p>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Pick-up Location
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPinIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Enter city or airport"
                  value={searchParams.location}
                  onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700">
                Pick-up Date
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CalendarIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="date"
                  name="pickupDate"
                  id="pickupDate"
                  className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  value={searchParams.pickupDate}
                  onChange={(e) => setSearchParams({ ...searchParams, pickupDate: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700">
                Return Date
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CalendarIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="date"
                  name="returnDate"
                  id="returnDate"
                  className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  value={searchParams.returnDate}
                  onChange={(e) => setSearchParams({ ...searchParams, returnDate: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label htmlFor="carType" className="block text-sm font-medium text-gray-700">
                Car Type
              </label>
              <select
                id="carType"
                name="carType"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                value={searchParams.carType}
                onChange={(e) => setSearchParams({ ...searchParams, carType: e.target.value })}
              >
                <option value="">All Types</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="luxury">Luxury</option>
                <option value="sports">Sports</option>
              </select>
            </div>

            <div className="md:col-span-4">
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Search Cars
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Featured Cars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{car.name}</h3>
                    <p className="text-gray-600">{car.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">${car.price}</p>
                    <p className="text-sm text-gray-600">per day</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {car.features.map((feature, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="mt-6 w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 