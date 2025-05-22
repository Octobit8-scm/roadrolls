'use client'

import { useState } from 'react'
import Image from 'next/image'
import { PhoneIcon, XMarkIcon } from '@heroicons/react/24/outline'

type TripPreferences = {
  destination: string
  duration: string
  budget: string
  travelStyle: string
  interests: string[]
  accommodation: string
  transportation: string
  season: string
}

export default function PlannerPage() {
  const [step, setStep] = useState(1)
  const [preferences, setPreferences] = useState<TripPreferences>({
    destination: '',
    duration: '',
    budget: '',
    travelStyle: '',
    interests: [],
    accommodation: '',
    transportation: '',
    season: ''
  })
  const [isGenerating, setIsGenerating] = useState(false)
  const [plan, setPlan] = useState<any>(null)
  const [showCallModal, setShowCallModal] = useState(false)
  const [callDetails, setCallDetails] = useState({
    name: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    notes: ''
  })

  const interestOptions = [
    'Culture & History',
    'Adventure & Sports',
    'Food & Cuisine',
    'Nature & Wildlife',
    'Shopping',
    'Relaxation & Wellness',
    'Photography',
    'Nightlife'
  ]

  const handleInterestToggle = (interest: string) => {
    setPreferences(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const handleCallSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically make an API call to schedule the call
    alert('Call request submitted! Our travel expert will contact you shortly.')
    setShowCallModal(false)
    setCallDetails({
      name: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      notes: ''
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)
    
    // Simulate API call
    setTimeout(() => {
      setPlan({
        itinerary: [
          {
            day: 1,
            title: 'Arrival & City Introduction',
            activities: [
              'Check-in at hotel',
              'City orientation tour',
              'Welcome dinner at local restaurant'
            ]
          },
          {
            day: 2,
            title: 'Cultural Exploration',
            activities: [
              'Visit historical landmarks',
              'Local market experience',
              'Traditional cooking class'
            ]
          },
          {
            day: 3,
            title: 'Adventure Day',
            activities: [
              'Morning hiking',
              'Afternoon water activities',
              'Evening entertainment'
            ]
          }
        ],
        recommendations: {
          accommodation: 'Luxury Hotel in City Center',
          transportation: 'Private Car with Driver',
          dining: [
            'Traditional Restaurant A',
            'Fusion Cuisine B',
            'Local Street Food C'
          ],
          activities: [
            'Guided City Tour',
            'Cultural Workshop',
            'Adventure Sports'
          ]
        },
        estimatedCost: '₹75,000',
        bestTimeToVisit: 'March to May',
        packingList: [
          'Comfortable walking shoes',
          'Light clothing',
          'Sunscreen and hat',
          'Camera',
          'Travel adapter'
        ]
      })
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80"
            alt="AI Travel Planner"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">AI Travel Planner</h1>
          <p className="text-xl mb-6">Let our AI create your perfect travel itinerary</p>
          <button
            onClick={() => setShowCallModal(true)}
            className="inline-flex items-center px-6 py-3 bg-white text-primary rounded-md hover:bg-gray-100 transition-colors"
          >
            <PhoneIcon className="h-5 w-5 mr-2" />
            Speak with a Travel Expert
          </button>
        </div>
      </section>

      {/* Call Modal */}
      {showCallModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowCallModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold mb-6">Schedule a Call</h2>
            <form onSubmit={handleCallSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  value={callDetails.name}
                  onChange={(e) => setCallDetails({ ...callDetails, name: e.target.value })}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={callDetails.phone}
                  onChange={(e) => setCallDetails({ ...callDetails, phone: e.target.value })}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={callDetails.preferredDate}
                  onChange={(e) => setCallDetails({ ...callDetails, preferredDate: e.target.value })}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Time
                </label>
                <select
                  value={callDetails.preferredTime}
                  onChange={(e) => setCallDetails({ ...callDetails, preferredTime: e.target.value })}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                >
                  <option value="">Select time</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                  <option value="evening">Evening (4 PM - 7 PM)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Notes
                </label>
                <textarea
                  value={callDetails.notes}
                  onChange={(e) => setCallDetails({ ...callDetails, notes: e.target.value })}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  rows={3}
                  placeholder="Tell us about your travel plans or any specific questions..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition-colors"
              >
                Schedule Call
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        {!plan ? (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <div className="flex justify-between mb-4">
                {[1, 2, 3].map((stepNumber) => (
                  <div
                    key={stepNumber}
                    className={`flex-1 text-center ${
                      stepNumber === step
                        ? 'text-primary'
                        : stepNumber < step
                        ? 'text-gray-400'
                        : 'text-gray-300'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 ${
                        stepNumber === step
                          ? 'bg-primary text-white'
                          : stepNumber < step
                          ? 'bg-gray-200 text-gray-600'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {stepNumber}
                    </div>
                    <span className="text-sm">
                      {stepNumber === 1
                        ? 'Basic Info'
                        : stepNumber === 2
                        ? 'Preferences'
                        : 'Review'}
                    </span>
                  </div>
                ))}
              </div>
              <div className="h-1 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-300"
                  style={{ width: `${((step - 1) / 2) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Where do you want to go?
                    </label>
                    <input
                      type="text"
                      value={preferences.destination}
                      onChange={(e) =>
                        setPreferences({ ...preferences, destination: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Enter destination"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Trip Duration
                    </label>
                    <select
                      value={preferences.duration}
                      onChange={(e) =>
                        setPreferences({ ...preferences, duration: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    >
                      <option value="">Select duration</option>
                      <option value="3-5 days">3-5 days</option>
                      <option value="6-10 days">6-10 days</option>
                      <option value="11-15 days">11-15 days</option>
                      <option value="15+ days">15+ days</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      value={preferences.budget}
                      onChange={(e) =>
                        setPreferences({ ...preferences, budget: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    >
                      <option value="">Select budget</option>
                      <option value="budget">Budget (₹25,000 - ₹50,000)</option>
                      <option value="moderate">Moderate (₹50,000 - ₹1,00,000)</option>
                      <option value="luxury">Luxury (₹1,00,000+)</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Travel Style
                    </label>
                    <select
                      value={preferences.travelStyle}
                      onChange={(e) =>
                        setPreferences({ ...preferences, travelStyle: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    >
                      <option value="">Select style</option>
                      <option value="relaxed">Relaxed & Leisurely</option>
                      <option value="balanced">Balanced</option>
                      <option value="active">Active & Fast-paced</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Interests
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {interestOptions.map((interest) => (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => handleInterestToggle(interest)}
                          className={`px-4 py-2 rounded-full text-sm ${
                            preferences.interests.includes(interest)
                              ? 'bg-primary text-white'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          {interest}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Accommodation
                    </label>
                    <select
                      value={preferences.accommodation}
                      onChange={(e) =>
                        setPreferences({ ...preferences, accommodation: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    >
                      <option value="">Select accommodation</option>
                      <option value="budget">Budget Hotels</option>
                      <option value="mid-range">Mid-range Hotels</option>
                      <option value="luxury">Luxury Hotels</option>
                      <option value="resorts">Resorts</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Transportation Preference
                    </label>
                    <select
                      value={preferences.transportation}
                      onChange={(e) =>
                        setPreferences({ ...preferences, transportation: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    >
                      <option value="">Select transportation</option>
                      <option value="public">Public Transportation</option>
                      <option value="private">Private Vehicle</option>
                      <option value="mixed">Mixed (Public & Private)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Travel Season
                    </label>
                    <select
                      value={preferences.season}
                      onChange={(e) =>
                        setPreferences({ ...preferences, season: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    >
                      <option value="">Select season</option>
                      <option value="summer">Summer</option>
                      <option value="winter">Winter</option>
                      <option value="spring">Spring</option>
                      <option value="autumn">Autumn</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold mb-4">Review Your Preferences</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Destination</p>
                        <p className="font-medium">{preferences.destination}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Duration</p>
                        <p className="font-medium">{preferences.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Budget</p>
                        <p className="font-medium">{preferences.budget}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Travel Style</p>
                        <p className="font-medium">{preferences.travelStyle}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Interests</p>
                        <p className="font-medium">
                          {preferences.interests.join(', ')}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Accommodation</p>
                        <p className="font-medium">{preferences.accommodation}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Transportation</p>
                        <p className="font-medium">{preferences.transportation}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Season</p>
                        <p className="font-medium">{preferences.season}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 flex justify-between">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50"
                  >
                    Back
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="ml-auto px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isGenerating}
                    className="ml-auto px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark disabled:opacity-50"
                  >
                    {isGenerating ? 'Generating Plan...' : 'Generate Plan'}
                  </button>
                )}
              </div>
            </form>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Itinerary */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Your Personalized Itinerary</h2>
              <div className="space-y-6">
                {plan.itinerary.map((day: any) => (
                  <div key={day.day} className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-semibold mb-2">
                      Day {day.day}: {day.title}
                    </h3>
                    <ul className="space-y-2">
                      {day.activities.map((activity: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Recommendations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Accommodation</h3>
                  <p className="text-gray-600">{plan.recommendations.accommodation}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Transportation</h3>
                  <p className="text-gray-600">{plan.recommendations.transportation}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Dining Options</h3>
                  <ul className="space-y-2">
                    {plan.recommendations.dining.map((place: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{place}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Activities</h3>
                  <ul className="space-y-2">
                    {plan.recommendations.activities.map((activity: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Additional Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Estimated Cost</h3>
                  <p className="text-gray-600">{plan.estimatedCost}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Best Time to Visit</h3>
                  <p className="text-gray-600">{plan.bestTimeToVisit}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Packing List</h3>
                  <ul className="space-y-2">
                    {plan.packingList.map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Add Call Expert Button */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => {
                  setPlan(null)
                  setStep(1)
                }}
                className="px-6 py-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200"
              >
                Create New Plan
              </button>
              <button
                onClick={() => setShowCallModal(true)}
                className="inline-flex items-center px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Speak with Expert
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  )
} 