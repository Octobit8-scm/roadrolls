'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const tourPackages = {
  // India Packages
  'taj-mahal': {
    name: 'Taj Mahal Experience',
    country: 'India',
    duration: '3 days',
    price: '₹45,000',
    description: 'Visit the iconic Taj Mahal and explore the rich history of Agra.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
    highlights: ['Taj Mahal', 'Agra Fort', 'Local Cuisine'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & City Introduction',
        activities: [
          'Arrival at Agra Airport/Railway Station',
          'Check-in at hotel',
          'Evening visit to Mehtab Bagh for sunset view of Taj Mahal',
          'Welcome dinner with local cuisine'
        ]
      },
      {
        day: 2,
        title: 'Taj Mahal & Agra Fort',
        activities: [
          'Early morning visit to Taj Mahal',
          'Breakfast at hotel',
          'Visit to Agra Fort',
          'Local market exploration',
          'Cultural show in the evening'
        ]
      },
      {
        day: 3,
        title: 'Fatehpur Sikri & Departure',
        activities: [
          'Visit to Fatehpur Sikri',
          'Shopping for souvenirs',
          'Lunch at local restaurant',
          'Departure'
        ]
      }
    ],
    accommodations: [
      {
        type: 'Standard',
        name: 'Hotel Agra Grand',
        description: '3-star hotel with modern amenities',
        price: '₹2,500 per night'
      },
      {
        type: 'Premium',
        name: 'Taj Gateway Hotel',
        description: '4-star hotel with Taj Mahal view',
        price: '₹4,500 per night'
      }
    ],
    activities: [
      {
        name: 'Taj Mahal Visit',
        duration: '3 hours',
        description: 'Guided tour of the iconic monument'
      },
      {
        name: 'Agra Fort Exploration',
        duration: '2 hours',
        description: 'Historical tour of the Mughal fort'
      },
      {
        name: 'Local Market Tour',
        duration: '2 hours',
        description: 'Shopping for handicrafts and souvenirs'
      }
    ],
    bestTimeToVisit: 'October to March',
    weather: {
      summer: 'Hot (35-45°C)',
      winter: 'Pleasant (15-25°C)',
      monsoon: 'Moderate rainfall'
    }
  },
  'kerala': {
    name: 'Kerala Backwaters',
    country: 'India',
    duration: '5 days',
    price: '₹65,000',
    description: 'Experience the serene backwaters and lush landscapes of Kerala.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    highlights: ['Houseboat Stay', 'Ayurveda', 'Tea Plantations'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Cochin',
        activities: [
          'Arrival at Cochin International Airport',
          'Check-in at hotel',
          'Evening visit to Fort Kochi',
          'Kathakali dance performance'
        ]
      },
      {
        day: 2,
        title: 'Backwaters Experience',
        activities: [
          'Transfer to Alleppey',
          'Houseboat check-in',
          'Backwater cruise',
          'Traditional Kerala dinner'
        ]
      },
      {
        day: 3,
        title: 'Munnar Hill Station',
        activities: [
          'Visit to tea plantations',
          'Eravikulam National Park',
          'Waterfall visit',
          'Spice plantation tour'
        ]
      },
      {
        day: 4,
        title: 'Ayurveda & Relaxation',
        activities: [
          'Ayurvedic massage',
          'Yoga session',
          'Beach visit',
          'Cultural show'
        ]
      },
      {
        day: 5,
        title: 'Departure',
        activities: [
          'Last minute shopping',
          'Local market visit',
          'Departure'
        ]
      }
    ],
    accommodations: [
      {
        type: 'Standard',
        name: 'Backwater Resort',
        description: 'Traditional Kerala style resort',
        price: '₹3,500 per night'
      },
      {
        type: 'Premium',
        name: 'Luxury Houseboat',
        description: 'Private houseboat with modern amenities',
        price: '₹8,000 per night'
      }
    ],
    activities: [
      {
        name: 'Houseboat Cruise',
        duration: 'Full day',
        description: 'Cruise through the backwaters'
      },
      {
        name: 'Ayurvedic Treatment',
        duration: '2 hours',
        description: 'Traditional wellness therapy'
      },
      {
        name: 'Tea Plantation Tour',
        duration: '3 hours',
        description: 'Visit to tea gardens and factory'
      }
    ],
    bestTimeToVisit: 'September to March',
    weather: {
      summer: 'Hot and humid (30-35°C)',
      winter: 'Pleasant (20-30°C)',
      monsoon: 'Heavy rainfall'
    }
  },
  'rajasthan': {
    name: 'Rajasthan Royal Tour',
    country: 'India',
    duration: '7 days',
    price: '₹85,000',
    description: 'Explore the royal palaces and desert landscapes of Rajasthan.',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    highlights: ['Jaipur Palace', 'Desert Safari', 'Cultural Shows'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Jaipur',
        activities: [
          'Arrival at Jaipur Airport',
          'Check-in at heritage hotel',
          'Evening visit to Hawa Mahal',
          'Welcome dinner'
        ]
      },
      {
        day: 2,
        title: 'Jaipur City Tour',
        activities: [
          'Visit to Amber Fort',
          'City Palace tour',
          'Jantar Mantar',
          'Local market shopping'
        ]
      },
      {
        day: 3,
        title: 'Jodhpur Exploration',
        activities: [
          'Transfer to Jodhpur',
          'Mehrangarh Fort visit',
          'Jaswant Thada',
          'Evening cultural show'
        ]
      },
      {
        day: 4,
        title: 'Udaipur - City of Lakes',
        activities: [
          'Transfer to Udaipur',
          'City Palace tour',
          'Lake Pichola boat ride',
          'Dinner at rooftop restaurant'
        ]
      },
      {
        day: 5,
        title: 'Jaisalmer Desert Experience',
        activities: [
          'Transfer to Jaisalmer',
          'Desert safari',
          'Camel ride',
          'Cultural evening in desert'
        ]
      },
      {
        day: 6,
        title: 'Local Experiences',
        activities: [
          'Village tour',
          'Traditional cooking class',
          'Handicraft workshop',
          'Farewell dinner'
        ]
      },
      {
        day: 7,
        title: 'Departure',
        activities: [
          'Last minute shopping',
          'Transfer to airport',
          'Departure'
        ]
      }
    ],
    accommodations: [
      {
        type: 'Standard',
        name: 'Heritage Hotel',
        description: 'Traditional Rajasthani architecture',
        price: '₹4,000 per night'
      },
      {
        type: 'Premium',
        name: 'Palace Hotel',
        description: 'Luxury palace converted to hotel',
        price: '₹8,000 per night'
      }
    ],
    activities: [
      {
        name: 'Desert Safari',
        duration: '4 hours',
        description: 'Camel ride and desert camp'
      },
      {
        name: 'Palace Tour',
        duration: '3 hours',
        description: 'Guided tour of royal palaces'
      },
      {
        name: 'Cultural Show',
        duration: '2 hours',
        description: 'Traditional dance and music'
      }
    ],
    bestTimeToVisit: 'October to March',
    weather: {
      summer: 'Hot (35-45°C)',
      winter: 'Pleasant (15-25°C)',
      monsoon: 'Light rainfall'
    }
  },
  'goa': {
    name: 'Goa Beach Paradise',
    country: 'India',
    duration: '4 days',
    price: '₹55,000',
    description: 'Enjoy the sun, sand, and vibrant nightlife of Goa.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    highlights: ['Beach Hopping', 'Water Sports', 'Portuguese Heritage'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Beach Time',
        activities: [
          'Arrival at Goa Airport',
          'Check-in at beach resort',
          'Relax at beach',
          'Sunset cruise'
        ]
      },
      {
        day: 2,
        title: 'Water Sports & Old Goa',
        activities: [
          'Water sports activities',
          'Visit to Old Goa churches',
          'Spice plantation tour',
          'Night market visit'
        ]
      },
      {
        day: 3,
        title: 'Beach Hopping',
        activities: [
          'Visit to different beaches',
          'Dudhsagar Falls',
          'Local market shopping',
          'Beach party'
        ]
      },
      {
        day: 4,
        title: 'Departure',
        activities: [
          'Last beach visit',
          'Shopping for souvenirs',
          'Departure'
        ]
      }
    ],
    accommodations: [
      {
        type: 'Standard',
        name: 'Beach Resort',
        description: '3-star beachfront resort',
        price: '₹3,000 per night'
      },
      {
        type: 'Premium',
        name: 'Luxury Villa',
        description: 'Private villa with pool',
        price: '₹6,000 per night'
      }
    ],
    activities: [
      {
        name: 'Water Sports',
        duration: '3 hours',
        description: 'Parasailing, jet skiing, and more'
      },
      {
        name: 'Beach Hopping',
        duration: 'Full day',
        description: 'Visit to multiple beaches'
      },
      {
        name: 'Night Market',
        duration: '3 hours',
        description: 'Shopping and street food'
      }
    ],
    bestTimeToVisit: 'October to May',
    weather: {
      summer: 'Hot and humid (30-35°C)',
      winter: 'Pleasant (25-30°C)',
      monsoon: 'Heavy rainfall'
    }
  },

  // Thailand Packages
  'bangkok': {
    name: 'Bangkok Explorer',
    country: 'Thailand',
    duration: '4 days',
    price: '₹50,000',
    description: 'Discover the vibrant city life and cultural heritage of Bangkok.',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
    highlights: ['Temples', 'Street Food', 'Night Markets'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & City Introduction',
        activities: [
          'Arrival at Suvarnabhumi Airport',
          'Check-in at hotel',
          'Evening visit to Asiatique',
          'Welcome dinner'
        ]
      },
      {
        day: 2,
        title: 'Temple Tour',
        activities: [
          'Visit to Grand Palace',
          'Wat Phra Kaew',
          'Wat Arun',
          'Evening food tour'
        ]
      },
      {
        day: 3,
        title: 'Local Experiences',
        activities: [
          'Floating market visit',
          'Thai cooking class',
          'Massage session',
          'Night market shopping'
        ]
      },
      {
        day: 4,
        title: 'Departure',
        activities: [
          'Last minute shopping',
          'Transfer to airport',
          'Departure'
        ]
      }
    ],
    accommodations: [
      {
        type: 'Standard',
        name: 'City Hotel',
        description: '3-star hotel in city center',
        price: '₹2,500 per night'
      },
      {
        type: 'Premium',
        name: 'Riverside Hotel',
        description: '4-star hotel with river view',
        price: '₹4,500 per night'
      }
    ],
    activities: [
      {
        name: 'Temple Tour',
        duration: '4 hours',
        description: 'Visit to major temples'
      },
      {
        name: 'Food Tour',
        duration: '3 hours',
        description: 'Local street food experience'
      },
      {
        name: 'Floating Market',
        duration: 'Half day',
        description: 'Traditional market on water'
      }
    ],
    bestTimeToVisit: 'November to February',
    weather: {
      summer: 'Hot and humid (30-35°C)',
      winter: 'Pleasant (25-30°C)',
      monsoon: 'Heavy rainfall'
    }
  },
  'phuket': {
    name: 'Phuket Island Getaway',
    country: 'Thailand',
    duration: '5 days',
    price: '₹70,000',
    description: 'Experience the beautiful beaches and island life of Phuket.',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
    highlights: ['Island Hopping', 'Snorkeling', 'Sunset Views'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Beach Time',
        activities: [
          'Arrival at Phuket Airport',
          'Check-in at beach resort',
          'Relax at beach',
          'Sunset viewing'
        ]
      },
      {
        day: 2,
        title: 'Island Hopping',
        activities: [
          'Phi Phi Islands tour',
          'Snorkeling',
          'Beach picnic',
          'Sunset cruise'
        ]
      },
      {
        day: 3,
        title: 'Local Culture',
        activities: [
          'Visit to Big Buddha',
          'Old Town exploration',
          'Thai cooking class',
          'Night market'
        ]
      },
      {
        day: 4,
        title: 'Adventure Day',
        activities: [
          'Water sports',
          'Elephant sanctuary visit',
          'Jungle trek',
          'Beach party'
        ]
      },
      {
        day: 5,
        title: 'Departure',
        activities: [
          'Last beach visit',
          'Shopping',
          'Departure'
        ]
      }
    ],
    accommodations: [
      {
        type: 'Standard',
        name: 'Beach Resort',
        description: '3-star beachfront resort',
        price: '₹3,500 per night'
      },
      {
        type: 'Premium',
        name: 'Luxury Villa',
        description: 'Private villa with pool',
        price: '₹7,000 per night'
      }
    ],
    activities: [
      {
        name: 'Island Hopping',
        duration: 'Full day',
        description: 'Visit to multiple islands'
      },
      {
        name: 'Snorkeling',
        duration: '2 hours',
        description: 'Coral reef exploration'
      },
      {
        name: 'Elephant Sanctuary',
        duration: '3 hours',
        description: 'Ethical elephant interaction'
      }
    ],
    bestTimeToVisit: 'November to April',
    weather: {
      summer: 'Hot and humid (30-35°C)',
      winter: 'Pleasant (25-30°C)',
      monsoon: 'Heavy rainfall'
    }
  },
  'chiang-mai': {
    name: 'Chiang Mai Cultural Tour',
    country: 'Thailand',
    duration: '4 days',
    price: '₹45,000',
    description: 'Immerse yourself in the rich culture and traditions of Northern Thailand.',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80',
    highlights: ['Temple Visits', 'Cooking Class', 'Elephant Sanctuary'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & City Tour',
        activities: [
          'Arrival at Chiang Mai Airport',
          'Check-in at hotel',
          'Old City exploration',
          'Night Bazaar visit'
        ]
      },
      {
        day: 2,
        title: 'Temple & Culture',
        activities: [
          'Visit to Doi Suthep',
          'Traditional dance show',
          'Cooking class',
          'Evening market'
        ]
      },
      {
        day: 3,
        title: 'Nature & Wildlife',
        activities: [
          'Elephant sanctuary visit',
          'Jungle trek',
          'Waterfall visit',
          'Local village tour'
        ]
      },
      {
        day: 4,
        title: 'Departure',
        activities: [
          'Last minute shopping',
          'Transfer to airport',
          'Departure'
        ]
      }
    ],
    accommodations: [
      {
        type: 'Standard',
        name: 'City Hotel',
        description: '3-star hotel in Old City',
        price: '₹2,500 per night'
      },
      {
        type: 'Premium',
        name: 'Boutique Resort',
        description: '4-star resort with mountain view',
        price: '₹4,500 per night'
      }
    ],
    activities: [
      {
        name: 'Temple Tour',
        duration: '3 hours',
        description: 'Visit to major temples'
      },
      {
        name: 'Cooking Class',
        duration: '4 hours',
        description: 'Learn Thai cuisine'
      },
      {
        name: 'Elephant Sanctuary',
        duration: '3 hours',
        description: 'Ethical elephant interaction'
      }
    ],
    bestTimeToVisit: 'November to February',
    weather: {
      summer: 'Hot (30-35°C)',
      winter: 'Pleasant (20-25°C)',
      monsoon: 'Moderate rainfall'
    }
  },
  'krabi': {
    name: 'Krabi Adventure',
    country: 'Thailand',
    duration: '6 days',
    price: '₹75,000',
    description: 'Explore the stunning limestone cliffs and hidden beaches of Krabi.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    highlights: ['Rock Climbing', 'Kayaking', 'Hot Springs'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Beach Time',
        activities: [
          'Arrival at Krabi Airport',
          'Check-in at resort',
          'Ao Nang Beach visit',
          'Sunset viewing'
        ]
      },
      {
        day: 2,
        title: 'Island Hopping',
        activities: [
          'Phi Phi Islands tour',
          'Snorkeling',
          'Beach picnic',
          'Sunset cruise'
        ]
      },
      {
        day: 3,
        title: 'Adventure Activities',
        activities: [
          'Rock climbing',
          'Kayaking',
          'Hot springs visit',
          'Night market'
        ]
      },
      {
        day: 4,
        title: 'Nature Exploration',
        activities: [
          'Tiger Cave Temple',
          'Emerald Pool',
          'Jungle trek',
          'Local village visit'
        ]
      },
      {
        day: 5,
        title: 'Relaxation Day',
        activities: [
          'Beach relaxation',
          'Massage session',
          'Cooking class',
          'Farewell dinner'
        ]
      },
      {
        day: 6,
        title: 'Departure',
        activities: [
          'Last beach visit',
          'Shopping',
          'Departure'
        ]
      }
    ],
    accommodations: [
      {
        type: 'Standard',
        name: 'Beach Resort',
        description: '3-star beachfront resort',
        price: '₹3,500 per night'
      },
      {
        type: 'Premium',
        name: 'Cliff Resort',
        description: '4-star resort with sea view',
        price: '₹6,500 per night'
      }
    ],
    activities: [
      {
        name: 'Rock Climbing',
        duration: '3 hours',
        description: 'Climbing on limestone cliffs'
      },
      {
        name: 'Island Hopping',
        duration: 'Full day',
        description: 'Visit to multiple islands'
      },
      {
        name: 'Hot Springs',
        duration: '2 hours',
        description: 'Natural hot spring visit'
      }
    ],
    bestTimeToVisit: 'November to April',
    weather: {
      summer: 'Hot and humid (30-35°C)',
      winter: 'Pleasant (25-30°C)',
      monsoon: 'Heavy rainfall'
    }
  },

  // Indonesia Packages
  'bali': {
    name: 'Bali Adventure',
    country: 'Indonesia',
    duration: '5 days',
    price: '₹60,000',
    description: 'Experience the perfect blend of culture, nature, and adventure in Bali.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    highlights: ['Temples', 'Beaches', 'Rice Terraces'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Ubud Introduction',
        activities: [
          'Arrival at Denpasar Airport',
          'Transfer to Ubud',
          'Monkey Forest visit',
          'Traditional dance show'
        ]
      },
      {
        day: 2,
        title: 'Cultural Day',
        activities: [
          'Temple visits',
          'Rice terrace trek',
          'Cooking class',
          'Local market'
        ]
      },
      {
        day: 3,
        title: 'Beach Day',
        activities: [
          'Transfer to Seminyak',
          'Beach activities',
          'Water sports',
          'Sunset viewing'
        ]
      },
      {
        day: 4,
        title: 'Adventure Day',
        activities: [
          'Mount Batur trek',
          'Hot springs visit',
          'Coffee plantation tour',
          'Spa treatment'
        ]
      },
      {
        day: 5,
        title: 'Departure',
        activities: [
          'Last minute shopping',
          'Transfer to airport',
          'Departure'
        ]
      }
    ],
    accommodations: [
      {
        type: 'Standard',
        name: 'Boutique Hotel',
        description: '3-star hotel in Ubud',
        price: '₹3,000 per night'
      },
      {
        type: 'Premium',
        name: 'Villa Resort',
        description: '4-star villa with pool',
        price: '₹6,000 per night'
      }
    ],
    activities: [
      {
        name: 'Temple Tour',
        duration: '3 hours',
        description: 'Visit to major temples'
      },
      {
        name: 'Rice Terrace Trek',
        duration: '2 hours',
        description: 'Walking through rice fields'
      },
      {
        name: 'Mount Batur Trek',
        duration: '4 hours',
        description: 'Sunrise trekking'
      }
    ],
    bestTimeToVisit: 'April to October',
    weather: {
      summer: 'Hot and humid (30-35°C)',
      winter: 'Pleasant (25-30°C)',
      monsoon: 'Heavy rainfall'
    }
  },
  'yogyakarta': {
    name: 'Yogyakarta Heritage Tour',
    country: 'Indonesia',
    duration: '4 days',
    price: '₹45,000',
    description: 'Discover the ancient temples and rich cultural heritage of Yogyakarta.',
    image: 'https://images.unsplash.com/photo-1588668219995-d3f3b3a3b1f3?auto=format&fit=crop&w=800&q=80',
    highlights: ['Borobudur', 'Prambanan', 'Traditional Arts'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & City Tour',
        activities: [
          'Arrival at Yogyakarta Airport',
          'Check-in at hotel',
          'Kraton Palace visit',
          'Traditional dance show'
        ]
      },
      {
        day: 2,
        title: 'Temple Day',
        activities: [
          'Borobudur sunrise tour',
          'Prambanan Temple visit',
          'Local market',
          'Batik workshop'
        ]
      },
      {
        day: 3,
        title: 'Cultural Experiences',
        activities: [
          'Silver workshop visit',
          'Traditional cooking class',
          'Malioboro Street shopping',
          'Night market'
        ]
      },
      {
        day: 4,
        title: 'Departure',
        activities: [
          'Last minute shopping',
          'Transfer to airport',
          'Departure'
        ]
      }
    ],
    accommodations: [
      {
        type: 'Standard',
        name: 'City Hotel',
        description: '3-star hotel in city center',
        price: '₹2,500 per night'
      },
      {
        type: 'Premium',
        name: 'Heritage Hotel',
        description: '4-star traditional hotel',
        price: '₹4,500 per night'
      }
    ],
    activities: [
      {
        name: 'Temple Tour',
        duration: '4 hours',
        description: 'Visit to major temples'
      },
      {
        name: 'Batik Workshop',
        duration: '2 hours',
        description: 'Learn traditional batik making'
      },
      {
        name: 'Cooking Class',
        duration: '3 hours',
        description: 'Learn Indonesian cuisine'
      }
    ],
    bestTimeToVisit: 'April to October',
    weather: {
      summer: 'Hot (30-35°C)',
      winter: 'Pleasant (25-30°C)',
      monsoon: 'Heavy rainfall'
    }
  },
  'lombok': {
    name: 'Lombok Island Escape',
    country: 'Indonesia',
    duration: '6 days',
    price: '₹70,000',
    description: 'Experience the pristine beaches and natural beauty of Lombok.',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
    highlights: ['Gili Islands', 'Mount Rinjani', 'Waterfalls'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Beach Time',
        activities: [
          'Arrival at Lombok Airport',
          'Transfer to Senggigi',
          'Beach relaxation',
          'Sunset viewing'
        ]
      },
      {
        day: 2,
        title: 'Gili Islands',
        activities: [
          'Island hopping',
          'Snorkeling',
          'Beach picnic',
          'Sunset cruise'
        ]
      },
      {
        day: 3,
        title: 'Mount Rinjani',
        activities: [
          'Trekking preparation',
          'Base camp trek',
          'Hot springs visit',
          'Camping'
        ]
      },
      {
        day: 4,
        title: 'Waterfalls & Culture',
        activities: [
          'Waterfall visits',
          'Traditional village tour',
          'Local market',
          'Cultural show'
        ]
      },
      {
        day: 5,
        title: 'Relaxation Day',
        activities: [
          'Beach activities',
          'Massage session',
          'Cooking class',
          'Farewell dinner'
        ]
      },
      {
        day: 6,
        title: 'Departure',
        activities: [
          'Last beach visit',
          'Shopping',
          'Departure'
        ]
      }
    ],
    accommodations: [
      {
        type: 'Standard',
        name: 'Beach Resort',
        description: '3-star beachfront resort',
        price: '₹3,500 per night'
      },
      {
        type: 'Premium',
        name: 'Island Resort',
        description: '4-star resort on Gili Islands',
        price: '₹6,500 per night'
      }
    ],
    activities: [
      {
        name: 'Island Hopping',
        duration: 'Full day',
        description: 'Visit to Gili Islands'
      },
      {
        name: 'Mount Rinjani Trek',
        duration: '2 days',
        description: 'Volcano trekking'
      },
      {
        name: 'Waterfall Tour',
        duration: '3 hours',
        description: 'Visit to multiple waterfalls'
      }
    ],
    bestTimeToVisit: 'April to October',
    weather: {
      summer: 'Hot and humid (30-35°C)',
      winter: 'Pleasant (25-30°C)',
      monsoon: 'Heavy rainfall'
    }
  },
  'komodo': {
    name: 'Komodo Dragon Adventure',
    country: 'Indonesia',
    duration: '5 days',
    price: '₹80,000',
    description: 'Witness the famous Komodo dragons and explore the stunning islands.',
    image: 'https://images.unsplash.com/photo-1588668219995-d3f3b3a3b1f3?auto=format&fit=crop&w=800&q=80',
    highlights: ['Komodo National Park', 'Pink Beach', 'Snorkeling'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Labuan Bajo',
        activities: [
          'Arrival at Labuan Bajo Airport',
          'Check-in at hotel',
          'Sunset viewing',
          'Welcome dinner'
        ]
      },
      {
        day: 2,
        title: 'Komodo Island',
        activities: [
          'Boat transfer to Komodo Island',
          'Komodo dragon watching',
          'Hiking',
          'Beach time'
        ]
      },
      {
        day: 3,
        title: 'Island Hopping',
        activities: [
          'Pink Beach visit',
          'Snorkeling',
          'Manta ray watching',
          'Sunset cruise'
        ]
      },
      {
        day: 4,
        title: 'Adventure Day',
        activities: [
          'Padar Island trek',
          'Rinca Island visit',
          'Local village tour',
          'Farewell dinner'
        ]
      },
      {
        day: 5,
        title: 'Departure',
        activities: [
          'Last minute shopping',
          'Transfer to airport',
          'Departure'
        ]
      }
    ],
    accommodations: [
      {
        type: 'Standard',
        name: 'Island Resort',
        description: '3-star resort in Labuan Bajo',
        price: '₹4,000 per night'
      },
      {
        type: 'Premium',
        name: 'Luxury Liveaboard',
        description: '4-star boat accommodation',
        price: '₹8,000 per night'
      }
    ],
    activities: [
      {
        name: 'Komodo Tour',
        duration: '4 hours',
        description: 'Dragon watching and hiking'
      },
      {
        name: 'Snorkeling',
        duration: '3 hours',
        description: 'Coral reef exploration'
      },
      {
        name: 'Island Hopping',
        duration: 'Full day',
        description: 'Visit to multiple islands'
      }
    ],
    bestTimeToVisit: 'April to December',
    weather: {
      summer: 'Hot (30-35°C)',
      winter: 'Pleasant (25-30°C)',
      monsoon: 'Moderate rainfall'
    }
  }
}

// Add accessories data
const accessories = {
  'sunny': [
    {
      id: 1,
      name: 'UV Protection Sunglasses',
      category: 'Eyewear',
      price: 1500,
      image: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg',
      description: 'Stylish sunglasses with UV protection for sunny days.',
      weatherConditions: ['sunny', 'hot']
    },
    {
      id: 5,
      name: 'Portable Fan',
      category: 'Electronics',
      price: 1200,
      image: 'https://images.pexels.com/photos/135017/pexels-photo-135017.jpeg',
      description: 'Battery-operated portable fan for hot days.',
      weatherConditions: ['hot']
    }
  ],
  'rainy': [
    {
      id: 2,
      name: 'Waterproof Backpack',
      category: 'Bags',
      price: 2500,
      image: 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg',
      description: 'Durable waterproof backpack for all your travel essentials.',
      weatherConditions: ['rainy', 'sunny']
    },
    {
      id: 3,
      name: 'Travel Umbrella',
      category: 'Rain Gear',
      price: 800,
      image: 'https://images.pexels.com/photos/2090651/pexels-photo-2090651.jpeg',
      description: 'Compact and lightweight umbrella for rainy days.',
      weatherConditions: ['rainy']
    }
  ],
  'cold': [
    {
      id: 4,
      name: 'Thermal Jacket',
      category: 'Clothing',
      price: 3500,
      image: 'https://images.pexels.com/photos/936075/pexels-photo-936075.jpeg',
      description: 'Warm and comfortable thermal jacket for cold weather.',
      weatherConditions: ['cold']
    }
  ]
}

export default function PackageDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const packageData = tourPackages[params.id as keyof typeof tourPackages]

  // Function to determine weather conditions based on package data
  const getWeatherConditions = (packageData: any) => {
    const conditions = []
    if (packageData.weather.summer.includes('Hot')) conditions.push('sunny', 'hot')
    if (packageData.weather.winter.includes('Cold')) conditions.push('cold')
    if (packageData.weather.monsoon.includes('rain')) conditions.push('rainy')
    return conditions
  }

  // Get recommended accessories based on weather conditions
  const getRecommendedAccessories = (packageData: any) => {
    const weatherConditions = getWeatherConditions(packageData)
    const recommendedAccessories = new Set()
    
    weatherConditions.forEach(condition => {
      accessories[condition as keyof typeof accessories]?.forEach(accessory => {
        recommendedAccessories.add(accessory)
      })
    })

    return Array.from(recommendedAccessories)
  }

  if (!packageData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Package not found</h1>
          <Link
            href="/packages"
            className="text-primary hover:text-primary-dark"
          >
            Return to packages
          </Link>
        </div>
      </div>
    )
  }

  const recommendedAccessories = getRecommendedAccessories(packageData)

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src={packageData.image}
              alt={packageData.name}
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl font-bold mb-4">{packageData.name}</h1>
            <p className="text-xl">{packageData.description}</p>
          </div>
        </section>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Package Overview</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold">{packageData.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Price</p>
                  <p className="font-semibold text-primary">{packageData.price}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Country</p>
                  <p className="font-semibold">{packageData.country}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Best Time to Visit</p>
                  <p className="font-semibold">{packageData.bestTimeToVisit}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {packageData.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Itinerary</h2>
              <div className="space-y-6">
                {packageData.itinerary.map((day) => (
                  <div key={day.day} className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-semibold mb-2">
                      Day {day.day}: {day.title}
                    </h3>
                    <ul className="space-y-2">
                      {day.activities.map((activity, index) => (
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

            {/* Activities */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Activities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {packageData.activities.map((activity) => (
                  <div key={activity.name} className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">{activity.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Duration: {activity.duration}
                    </p>
                    <p className="text-gray-600">{activity.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Weather Information */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Weather</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Summer</p>
                  <p className="font-semibold">{packageData.weather.summer}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Winter</p>
                  <p className="font-semibold">{packageData.weather.winter}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Monsoon</p>
                  <p className="font-semibold">{packageData.weather.monsoon}</p>
                </div>
              </div>
            </div>

            {/* Accommodations */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Accommodations</h2>
              <div className="space-y-6">
                {packageData.accommodations.map((accommodation) => (
                  <div key={accommodation.type} className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">{accommodation.type}</h3>
                    <p className="text-gray-600 mb-2">{accommodation.name}</p>
                    <p className="text-sm text-gray-600 mb-2">
                      {accommodation.description}
                    </p>
                    <p className="font-semibold text-primary">
                      {accommodation.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Accessories */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Recommended Accessories</h2>
              <div className="space-y-6">
                {recommendedAccessories.map((accessory: any) => (
                  <div key={accessory.id} className="border rounded-lg p-4">
                    <div className="relative h-32 mb-4">
                      <Image
                        src={accessory.image}
                        alt={accessory.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <h3 className="font-semibold mb-2">{accessory.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{accessory.description}</p>
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-primary">₹{accessory.price}</p>
                      <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Button */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Book This Package</h2>
              <button
                onClick={() => router.push('/contact')}
                className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark transition-colors"
              >
                Contact for Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 