'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Accessory {
  id: number
  name: string
  category: string
  price: number
  image: string
  description: string
  weatherConditions: string[]
}

export default function AccessoriesPage() {
  const [weather, setWeather] = useState<string>('sunny')
  const [accessories, setAccessories] = useState<Accessory[]>([])

  const weatherOptions = [
    { id: 'sunny', name: 'Sunny' },
    { id: 'rainy', name: 'Rainy' },
    { id: 'cold', name: 'Cold' },
    { id: 'hot', name: 'Hot' },
  ]

  const allAccessories: Accessory[] = [
    {
      id: 1,
      name: 'UV Protection Sunglasses',
      category: 'Eyewear',
      price: 1500,
      image: 'https://source.unsplash.com/random/800x600?sunglasses',
      description: 'Stylish sunglasses with UV protection for sunny days.',
      weatherConditions: ['sunny', 'hot'],
    },
    {
      id: 2,
      name: 'Waterproof Backpack',
      category: 'Bags',
      price: 2500,
      image: 'https://source.unsplash.com/random/800x600?backpack',
      description: 'Durable waterproof backpack for all your travel essentials.',
      weatherConditions: ['rainy', 'sunny'],
    },
    {
      id: 3,
      name: 'Travel Umbrella',
      category: 'Rain Gear',
      price: 800,
      image: 'https://source.unsplash.com/random/800x600?umbrella',
      description: 'Compact and lightweight umbrella for rainy days.',
      weatherConditions: ['rainy'],
    },
    {
      id: 4,
      name: 'Thermal Jacket',
      category: 'Clothing',
      price: 3500,
      image: 'https://source.unsplash.com/random/800x600?jacket',
      description: 'Warm and comfortable thermal jacket for cold weather.',
      weatherConditions: ['cold'],
    },
    {
      id: 5,
      name: 'Portable Fan',
      category: 'Electronics',
      price: 1200,
      image: 'https://source.unsplash.com/random/800x600?fan',
      description: 'Battery-operated portable fan for hot days.',
      weatherConditions: ['hot'],
    },
  ]

  useEffect(() => {
    // Filter accessories based on selected weather
    const filteredAccessories = allAccessories.filter(accessory =>
      accessory.weatherConditions.includes(weather)
    )
    setAccessories(filteredAccessories)
  }, [weather])

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Travel Accessories</h1>

        {/* Weather Selection */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Select Weather Condition:</h2>
          <div className="flex space-x-4">
            {weatherOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setWeather(option.id)}
                className={`px-4 py-2 rounded-full ${
                  weather === option.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="card overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={accessory.image}
                  alt={accessory.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{accessory.name}</h3>
                    <p className="text-gray-600">{accessory.category}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{accessory.description}</p>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">₹{accessory.price}</p>
                  </div>
                  <button className="btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {accessories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No accessories available for the selected weather condition.</p>
          </div>
        )}
      </div>
    </main>
  )
} 