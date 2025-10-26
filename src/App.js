// Wait for all dependencies to load
function waitForDependencies() {
  return new Promise((resolve) => {
    let attempts = 0;
    const maxAttempts = 30; // 3 seconds max wait time
    
    const checkDependencies = () => {
      attempts++;
      
      if (typeof React !== 'undefined' && typeof ReactDOM !== 'undefined') {
        console.log('All dependencies loaded successfully');
        resolve();
      } else if (attempts >= maxAttempts) {
        console.error('Failed to load dependencies after maximum attempts');
        console.log('Final state:', {
          React: typeof React !== 'undefined',
          ReactDOM: typeof ReactDOM !== 'undefined'
        });
        // Try to render anyway with fallbacks
        resolve();
      } else {
        console.log(`Waiting for dependencies... (attempt ${attempts}/${maxAttempts})`, {
          React: typeof React !== 'undefined',
          ReactDOM: typeof ReactDOM !== 'undefined'
        });
        setTimeout(checkDependencies, 100);
      }
    };
    checkDependencies();
  });
}

// Initialize app after dependencies are loaded
waitForDependencies().then(() => {
  console.log('Initializing app with loaded dependencies');
  
const { useState, useEffect, createContext, useContext } = React;
  
  // No animations - using regular React elements
  
  
  // Create simple SVG icons
  const createIcon = (svgPath, viewBox = "0 0 24 24") => ({ className = "w-5 h-5", ...props }) => 
    React.createElement('svg', { 
      className,
      viewBox,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props 
    }, React.createElement('path', { d: svgPath }));

  // Define all icons as simple SVG components
  const Search = createIcon("m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z");
  const User = createIcon("M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2");
  const Heart = createIcon("M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z");
  const ShoppingCart = createIcon("M2 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6m8 0V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v4.01");
  const Menu = createIcon("M3 12h18M3 6h18M3 18h18");
  const X = createIcon("M18 6L6 18M6 6l12 12");
  const MapPin = createIcon("M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z");
  const Calendar = createIcon("M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z");
  const Users = createIcon("M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75");
  const Star = createIcon("M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z");
  const ChevronDown = createIcon("M6 9l6 6 6-6");
  const Globe = createIcon("M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z");
  const Shield = createIcon("M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z");
  const Headphones = createIcon("M3 14v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z");
  const Sparkles = createIcon("M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0L9.937 15.5Z");
  const Plane = createIcon("M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2-3v-3l3.5 5.5c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2L17.8 19.2Z");
  const Car = createIcon("M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18.7 9H5.3l-1.8 2.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2m14 0H5m14 0v3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-3m8-5h4m-4 0V9h-4v3m4 0H8");
  const Train = createIcon("M2 17h20M6 16V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12M6 16H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2m12-4h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2m-12 0h12");
  const Bus = createIcon("M8 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z");
  const Mountain = createIcon("M8 3l4 8 5-4 3 6H3L8 3Z");
  const Bike = createIcon("M5.5 12H7l1.5-6L9 7h4l1.5 6H16.5M5.5 12a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm11 0a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z");
  const Hotel = createIcon("M3 21h18M5 21V7l8-4v18M19 21V11l-6-4");
  const Utensils = createIcon("M3 2v7c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V2M3 2h6M3 2v20M9 2h6v20M9 2v20");
  const Camera = createIcon("M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z");
  const Gift = createIcon("M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z");
  const Trash2 = createIcon("M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2");
  const CheckCircle = createIcon("M22 11.08V12a10 10 0 1 1-5.93-9.14");

  // Import components (will be available after they load)
  let AuthModal, BookingModal, Marketplace, CleanlinessDrive, AIChatbot;

// Context for global state management
const AppContext = createContext();

// Mock data for Indian tourist destinations
const mockPackages = [
  {
    id: 1,
    name: "Golden Triangle Luxury Tour",
    category: "Luxury Travel",
    description: "Private sunrise at the Taj Mahal, elephant rides at Amber Fort, after-hours tours of Mehrangarh Fort, stays in heritage palaces like Rambagh Palace.",
    price: 180000,
    duration: "7-10 days",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500",
    features: ["Private sunrise Taj", "Elephant rides", "After-hours fort tours", "Heritage palaces"],
    destinations: ["Delhi", "Agra", "Jaipur"]
  },
  {
    id: 2,
    name: "Kerala Backwaters Retreat",
    category: "Luxury Travel",
    description: "Relax in the serene backwaters of Kerala with houseboat stays and Ayurvedic treatments.",
    price: 35000,
    duration: "6 days",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
    features: ["Houseboat stay", "Ayurvedic spa", "Traditional meals", "Cultural shows"],
    destinations: ["Kochi", "Alleppey", "Munnar"]
  },
  {
    id: 3,
    name: "Himalayan Adventure Trek",
    category: "Adventure",
    description: "Conquer the mighty Indian Himalayas with guided trekking through stunning mountain landscapes.",
    price: 25000,
    duration: "10 days",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Expert guides", "Camping gear", "Safety equipment", "Mountain rescue"],
    destinations: ["Manali", "Leh", "Spiti Valley"]
  },
  {
    id: 40,
    name: "Roopkund Skeleton Lake Trek",
    category: "Adventure",
    description: "Trek to a glacial lake with ancient skeletons, passing through alpine meadows and forests.",
    price: 18000,
    duration: "8 days",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Glacial lake", "Ancient skeletons", "Alpine meadows", "Expert guides"],
    destinations: ["Roopkund", "Bedni Bugyal", "Ali Bugyal"]
  },
  {
    id: 41,
    name: "Valley of Flowers Trek",
    category: "Adventure",
    description: "UNESCO site with vibrant wildflowers, waterfalls, and high passes - perfect for nature photography.",
    price: 15000,
    duration: "6 days",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["UNESCO site", "Wildflowers", "Waterfalls", "Nature photography"],
    destinations: ["Valley of Flowers", "Hemkund Sahib", "Govindghat"]
  },
  {
    id: 42,
    name: "Hampta Pass Trek",
    category: "Adventure",
    description: "Cross from lush Kullu Valley to arid Spiti with glacial streams and panoramic views.",
    price: 16000,
    duration: "5 days",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Valley crossing", "Glacial streams", "Panoramic views", "Expert guides"],
    destinations: ["Manali", "Hampta Pass", "Spiti Valley"]
  },
  {
    id: 43,
    name: "Chadar Frozen River Trek",
    category: "Adventure",
    description: "Walk on the frozen Zanskar River with extreme cold and ice caves - ultimate winter adventure.",
    price: 22000,
    duration: "9 days",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Frozen river", "Ice caves", "Extreme cold", "Permit included"],
    destinations: ["Leh", "Zanskar River", "Nerak"]
  },
  {
    id: 44,
    name: "Sandakphu Trek",
    category: "Adventure",
    description: "Highest point in West Bengal with rhododendron forests and views of Everest/Kanchenjunga.",
    price: 14000,
    duration: "6 days",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Highest point", "Rhododendron forests", "Everest views", "Kanchenjunga views"],
    destinations: ["Sandakphu", "Tonglu", "Manebhanjan"]
  },
  {
    id: 45,
    name: "Goechala Trek",
    category: "Adventure",
    description: "Leads to views of Kanchenjunga, passing through alpine lakes and high camps.",
    price: 20000,
    duration: "10 days",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Kanchenjunga views", "Alpine lakes", "High camps", "Expert guides"],
    destinations: ["Goechala", "Dzongri", "Thangsing"]
  },
  {
    id: 46,
    name: "Mount Stok Kangri Climb",
    category: "Adventure",
    description: "India's highest trekker's peak (6,153m) with summit views of Karakoram range.",
    price: 28000,
    duration: "12 days",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Highest peak", "Karakoram views", "Mountaineering skills", "Summit attempt"],
    destinations: ["Leh", "Stok Kangri", "Base Camp"]
  },
  {
    id: 47,
    name: "Hampi Bouldering Adventure",
    category: "Adventure",
    description: "World-class bouldering on ancient rock formations with historical ruins backdrop.",
    price: 12000,
    duration: "4 days",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Bouldering", "Ancient formations", "Historical ruins", "Expert instructors"],
    destinations: ["Hampi", "Virupaksha Temple", "Vittala Temple"]
  },
  {
    id: 48,
    name: "Rishikesh White Water Rafting",
    category: "Adventure",
    description: "Grade III-IV rapids on the Ganges with options from half-day to multi-day adventures.",
    price: 8000,
    duration: "3 days",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Grade III-IV rapids", "Ganges river", "Multi-day options", "Safety gear"],
    destinations: ["Rishikesh", "Shivpuri", "Marine Drive"]
  },
  {
    id: 49,
    name: "Brahmaputra Rafting Expedition",
    category: "Adventure",
    description: "Remote Grade IV-V rapids with wildlife and tribal villages en route.",
    price: 25000,
    duration: "8 days",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Grade IV-V rapids", "Wildlife spotting", "Tribal villages", "Remote expedition"],
    destinations: ["Arunachal Pradesh", "Brahmaputra River", "Tribal areas"]
  },
  {
    id: 50,
    name: "Jim Corbett Tiger Safari",
    category: "Adventure",
    description: "Tiger tracking on elephant/jeep safaris with river rafting add-ons in the national park.",
    price: 15000,
    duration: "4 days",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Tiger tracking", "Elephant safaris", "Jeep safaris", "River rafting"],
    destinations: ["Jim Corbett", "Dhikala", "Bijrani"]
  },
  {
    id: 51,
    name: "Ranthambore Tiger Safari",
    category: "Adventure",
    description: "Jeep safaris for tigers and leopards with ancient forts in the jungle backdrop.",
    price: 18000,
    duration: "5 days",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Tiger safaris", "Leopard spotting", "Ancient forts", "Jungle backdrop"],
    destinations: ["Ranthambore", "Ranthambore Fort", "Padam Talao"]
  },
  {
    id: 52,
    name: "Kanha Jungle Book Safari",
    category: "Adventure",
    description: "Inspired by Rudyard Kipling's Jungle Book with tiger safaris and walking trails.",
    price: 16000,
    duration: "4 days",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Jungle Book inspiration", "Tiger safaris", "Walking trails", "Wildlife photography"],
    destinations: ["Kanha", "Bamni Dadar", "Kanha Meadows"]
  },
  {
    id: 53,
    name: "Jaisalmer Desert Safari",
    category: "Adventure",
    description: "Camel treks to sand dunes with overnight camps, folk music, and stargazing.",
    price: 12000,
    duration: "3 days",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Camel treks", "Sand dunes", "Overnight camps", "Folk music"],
    destinations: ["Jaisalmer", "Sam Sand Dunes", "Kuldhara"]
  },
  {
    id: 54,
    name: "Great Rann of Kutch Expedition",
    category: "Adventure",
    description: "White salt desert camel treks with cultural festivals like Rann Utsav.",
    price: 14000,
    duration: "4 days",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Salt desert", "Camel treks", "Cultural festivals", "Rann Utsav"],
    destinations: ["Kutch", "White Desert", "Bhuj"]
  },
  {
    id: 55,
    name: "Bir Billing Paragliding",
    category: "Adventure",
    description: "World's highest paragliding site with tandem flights over Dhauladhar ranges.",
    price: 10000,
    duration: "3 days",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["World's highest site", "Tandem flights", "Dhauladhar ranges", "Expert pilots"],
    destinations: ["Bir", "Billing", "Dhauladhar"]
  },
  {
    id: 56,
    name: "Rishikesh Bungee Jumping",
    category: "Adventure",
    description: "Asia's highest fixed bridge jump (83m) over the Ganges with tandem options.",
    price: 6000,
    duration: "2 days",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Asia's highest jump", "83m height", "Ganges river", "Tandem options"],
    destinations: ["Rishikesh", "Jumpin Heights", "Ganges Bridge"]
  },
  {
    id: 57,
    name: "Andaman Scuba Diving",
    category: "Adventure",
    description: "Coral reefs, shipwrecks, and marine life like turtles at Havelock Island base.",
    price: 20000,
    duration: "6 days",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Coral reefs", "Shipwrecks", "Marine life", "Turtle spotting"],
    destinations: ["Havelock Island", "Neil Island", "Port Blair"]
  },
  {
    id: 58,
    name: "Lakshadweep Scuba Adventure",
    category: "Adventure",
    description: "Pristine lagoons and manta rays with permit included for island access.",
    price: 25000,
    duration: "7 days",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Pristine lagoons", "Manta rays", "Island permit", "Coral reefs"],
    destinations: ["Lakshadweep", "Kavaratti", "Agatti"]
  },
  {
    id: 59,
    name: "Goa Water Sports Adventure",
    category: "Adventure",
    description: "Parasailing, jet skiing, and banana boat rides along beautiful beaches.",
    price: 8000,
    duration: "3 days",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Parasailing", "Jet skiing", "Banana boat", "Beach activities"],
    destinations: ["North Goa", "South Goa", "Calangute"]
  },
  {
    id: 60,
    name: "Pin Parvati Pass Trek",
    category: "Adventure",
    description: "High-altitude pass connecting Parvati and Spiti valleys with hot springs and remote terrain.",
    price: 30000,
    duration: "12 days",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["High-altitude pass", "Hot springs", "Remote terrain", "Expert guides"],
    destinations: ["Pin Parvati Pass", "Spiti Valley", "Parvati Valley"]
  },
  {
    id: 4,
    name: "Rajasthan Heritage Bike Tour",
    category: "Bike Trips",
    description: "Explore Rajasthan's royal heritage on two wheels with guided bike tours through palaces and forts.",
    price: 18000,
    duration: "8 days",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500",
    features: ["Premium bikes", "GPS navigation", "Roadside assistance", "Heritage stays"],
    destinations: ["Jaipur", "Jodhpur", "Udaipur", "Jaisalmer"]
  },
  {
    id: 73,
    name: "Manali to Leh Himalayan Adventure",
    category: "Bike Trips",
    description: "Ultimate Himalayan thrill with snow-capped peaks, high-altitude passes up to 5,300m, Pangong Lake, and Nubra Valley.",
    price: 35000,
    duration: "10 days",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500",
    features: ["High-altitude passes", "Pangong Lake", "Nubra Valley", "Expert guides"],
    destinations: ["Manali", "Rohtang Pass", "Keylong", "Leh", "Pangong Lake"]
  },
  {
    id: 74,
    name: "Srinagar to Leh Scenic Highway",
    category: "Bike Trips",
    description: "Scenic Srinagar-Leh Highway with war memorials, lunar landscapes, Thikse Monastery, and blooming flowers in early autumn.",
    price: 30000,
    duration: "8 days",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500",
    features: ["War memorials", "Lunar landscapes", "Thikse Monastery", "Scenic highway"],
    destinations: ["Srinagar", "Kargil", "Drass", "Leh"]
  },
  {
    id: 75,
    name: "Manali to Spiti Valley Desert Ride",
    category: "Bike Trips",
    description: "Cold desert vibes with ancient monasteries like Key Gompa, Chandratal Lake, rugged terrain, and Buddhist culture.",
    price: 25000,
    duration: "7 days",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500",
    features: ["Cold desert", "Ancient monasteries", "Chandratal Lake", "Buddhist culture"],
    destinations: ["Manali", "Kunzum Pass", "Kaza", "Key Gompa"]
  },
  {
    id: 76,
    name: "Chandigarh to Leh Epic Journey",
    category: "Bike Trips",
    description: "Combines urban start with mountain passes including Hidimba Temple, Rohtang Pass, with altitude sickness preparation.",
    price: 40000,
    duration: "12 days",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500",
    features: ["Urban to mountain", "Hidimba Temple", "Rohtang Pass", "Altitude preparation"],
    destinations: ["Chandigarh", "Manali", "Rohtang Pass", "Leh"]
  },
  {
    id: 77,
    name: "Mumbai to Goa Konkan Coast",
    category: "Bike Trips",
    description: "Coastal views, beaches, seafood shacks with smooth roads and party vibe in Goa, optional detour to Ganpatipule.",
    price: 15000,
    duration: "5 days",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500",
    features: ["Coastal views", "Beaches", "Seafood shacks", "Party vibe"],
    destinations: ["Mumbai", "Konkan Coast", "Ganpatipule", "Goa"]
  },
  {
    id: 78,
    name: "Bangalore to Goa Western Ghats",
    category: "Bike Trips",
    description: "Western Ghats adventure with waterfalls, wildlife sanctuaries, mix of forests and beaches via Jog Falls and Dandeli.",
    price: 18000,
    duration: "6 days",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500",
    features: ["Western Ghats", "Waterfalls", "Wildlife sanctuaries", "Forests and beaches"],
    destinations: ["Bangalore", "Jog Falls", "Dandeli", "Goa"]
  },
  {
    id: 79,
    name: "Shillong to Mawlynnong Northeast",
    category: "Bike Trips",
    description: "Living root bridges, Umgot River, Asia's cleanest village with lush Northeast greenery and waterfalls.",
    price: 20000,
    duration: "5 days",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500",
    features: ["Living root bridges", "Umgot River", "Cleanest village", "Northeast greenery"],
    destinations: ["Shillong", "Cherrapunji", "Dawki", "Mawlynnong"]
  },
  {
    id: 80,
    name: "Siliguri to Gangtok Tea Gardens",
    category: "Bike Trips",
    description: "Tea gardens, toy train views, Himalayan vistas with Kanchenjunga glimpses and Sikkim monasteries.",
    price: 18000,
    duration: "5 days",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500",
    features: ["Tea gardens", "Toy train views", "Himalayan vistas", "Sikkim monasteries"],
    destinations: ["Siliguri", "Darjeeling", "Gangtok"]
  },
  {
    id: 81,
    name: "Rajasthan Desert Loop",
    category: "Bike Trips",
    description: "Forts like Mehrangarh and Jaisalmer, Thar Desert dunes, camel safaris with golden sands and Rajput heritage.",
    price: 22000,
    duration: "7 days",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500",
    features: ["Desert forts", "Thar Desert dunes", "Camel safaris", "Rajput heritage"],
    destinations: ["Jaipur", "Jodhpur", "Jaisalmer"]
  },
  {
    id: 82,
    name: "Ahmedabad to Little Rann of Kutch",
    category: "Bike Trips",
    description: "Salt flats, wild asses sanctuary with vast desert expanses and Agariya community interactions.",
    price: 12000,
    duration: "4 days",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500",
    features: ["Salt flats", "Wild asses sanctuary", "Desert expanses", "Community interactions"],
    destinations: ["Ahmedabad", "Little Rann of Kutch"]
  },
  {
    id: 83,
    name: "Mumbai to Great Rann of Kutch",
    category: "Bike Trips",
    description: "White salt desert, cultural festivals like Rann Utsav with Gujarat's arid beauty and flamingo sightings.",
    price: 25000,
    duration: "8 days",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500",
    features: ["White salt desert", "Cultural festivals", "Rann Utsav", "Flamingo sightings"],
    destinations: ["Mumbai", "Great Rann of Kutch", "Bhuj"]
  },
  {
    id: 84,
    name: "Chennai to Pondicherry East Coast",
    category: "Bike Trips",
    description: "Bay of Bengal beaches, Mahabalipuram temples with sunrise rides and French colonial vibes in Pondy.",
    price: 8000,
    duration: "3 days",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500",
    features: ["Bay of Bengal beaches", "Mahabalipuram temples", "Sunrise rides", "French colonial vibes"],
    destinations: ["Chennai", "Mahabalipuram", "Pondicherry"]
  },
  {
    id: 85,
    name: "Kochi to Goa South India Loop",
    category: "Bike Trips",
    description: "Tea plantations, Nilgiri Hills, Western Ghats with backwaters, beaches, and hill station hops.",
    price: 28000,
    duration: "10 days",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500",
    features: ["Tea plantations", "Nilgiri Hills", "Western Ghats", "Backwaters and beaches"],
    destinations: ["Kochi", "Munnar", "Ooty", "Gokarna", "Goa"]
  },
  {
    id: 86,
    name: "Pollachi to Athirappilly Forest",
    category: "Bike Trips",
    description: "Anamalai Tiger Reserve, Vazhachal Falls with elephant sightings and lush forests in Tamil Nadu/Kerala.",
    price: 10000,
    duration: "3 days",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500",
    features: ["Tiger Reserve", "Vazhachal Falls", "Elephant sightings", "Lush forests"],
    destinations: ["Pollachi", "Valparai", "Athirappilly"]
  },
  {
    id: 87,
    name: "Coorg to Wayanad Coffee Trail",
    category: "Bike Trips",
    description: "Coffee estates, spice gardens, wildlife with misty hills and tribal villages in Karnataka/Kerala.",
    price: 12000,
    duration: "4 days",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500",
    features: ["Coffee estates", "Spice gardens", "Wildlife", "Tribal villages"],
    destinations: ["Coorg", "Wayanad"]
  },
  {
    id: 88,
    name: "Rishikesh to Badrinath Char Dham",
    category: "Bike Trips",
    description: "Hemkund Sahib trek, alpine meadows, Mana village on Char Dham spiritual route with high passes.",
    price: 30000,
    duration: "8 days",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500",
    features: ["Hemkund Sahib", "Alpine meadows", "Mana village", "Spiritual route"],
    destinations: ["Rishikesh", "Valley of Flowers", "Badrinath"]
  },
  {
    id: 89,
    name: "Siliguri to Gurudongmar Lake Sikkim",
    category: "Bike Trips",
    description: "High-altitude lake at 5,430m, Lachen/Lachung valleys with remote Sikkim borders and permit required.",
    price: 25000,
    duration: "7 days",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500",
    features: ["High-altitude lake", "Lachen/Lachung valleys", "Remote Sikkim", "Permit included"],
    destinations: ["Siliguri", "Gurudongmar Lake", "Lachen", "Lachung"]
  },
  {
    id: 90,
    name: "Kerala Backwaters Loop",
    category: "Bike Trips",
    description: "Houseboat views, Thekkady wildlife, Varkala beaches with tropical greenery and seafood.",
    price: 15000,
    duration: "6 days",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500",
    features: ["Houseboat views", "Thekkady wildlife", "Varkala beaches", "Tropical greenery"],
    destinations: ["Alleppey", "Kovalam", "Munnar", "Thekkady"]
  },
  {
    id: 91,
    name: "Leh to Zanskar Valley Remote",
    category: "Bike Trips",
    description: "Remote gorges, Phugtal Gompa with off-beat Himalayan exploration beyond main Ladakh roads.",
    price: 35000,
    duration: "8 days",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500",
    features: ["Remote gorges", "Phugtal Gompa", "Off-beat exploration", "Himalayan adventure"],
    destinations: ["Leh", "Zanskar Valley", "Padum", "Phugtal Gompa"]
  },
  {
    id: 5,
    name: "Spiritual Journey to Varanasi",
    category: "Spiritual Travel",
    description: "Discover inner peace with guided spiritual tours and meditation retreats in India's holiest city.",
    price: 15000,
    duration: "6 days",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500",
    features: ["Temple visits", "Ganga Aarti", "Spiritual guides", "Cultural experiences"],
    destinations: ["Delhi", "Varanasi", "Rishikesh"]
  },
  {
    id: 6,
    name: "Goa Beach Paradise",
    category: "Budget",
    description: "Relax on Goa's pristine beaches with budget-friendly accommodations and local experiences.",
    price: 12000,
    duration: "5 days",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500",
    features: ["Beach stays", "Water sports", "Local cuisine", "Night markets"],
    destinations: ["North Goa", "South Goa", "Panaji"]
  },
  {
    id: 19,
    name: "Rishikesh Yoga Retreat",
    category: "Budget",
    description: "Experience spiritual awakening with yoga retreats, Ganges rafting, and free ashram stays.",
    price: 8000,
    duration: "4 days",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Yoga retreats", "Ganges rafting", "Free ashrams", "Street food"],
    destinations: ["Rishikesh", "Haridwar"]
  },
  {
    id: 20,
    name: "McLeodganj Tibetan Culture",
    category: "Budget",
    description: "Explore Tibetan culture, Triund trek, and monasteries in the beautiful hills of Dharamshala.",
    price: 6000,
    duration: "3 days",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Tibetan culture", "Triund trek", "Monasteries", "Budget hostels"],
    destinations: ["McLeodganj", "Dharamshala"]
  },
  {
    id: 21,
    name: "Kasol Parvati Valley",
    category: "Budget",
    description: "Experience hippie vibes in Parvati Valley with riverside walks and Kheerganga trek.",
    price: 10000,
    duration: "4 days",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Parvati Valley", "Kheerganga trek", "Israeli cafes", "Dorm stays"],
    destinations: ["Kasol", "Tosh", "Kheerganga"]
  },
  {
    id: 22,
    name: "Amritsar Golden Temple",
    category: "Budget",
    description: "Visit the Golden Temple with free langar meals, Wagah Border ceremony, and Gurdwara stays.",
    price: 5000,
    duration: "3 days",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500",
    features: ["Golden Temple", "Free langar", "Wagah Border", "Gurdwara stays"],
    destinations: ["Amritsar", "Wagah Border"]
  },
  {
    id: 23,
    name: "Jaipur Heritage Walk",
    category: "Budget",
    description: "Explore Amber Fort, Hawa Mahal, and street shopping with cycle rickshaws and rooftop cafes.",
    price: 8000,
    duration: "3 days",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500",
    features: ["Amber Fort", "Hawa Mahal", "Street shopping", "Cycle rickshaws"],
    destinations: ["Jaipur", "Amber", "Nahargarh"]
  },
  {
    id: 24,
    name: "Udaipur Lake City",
    category: "Budget",
    description: "Experience Lake Pichola boat rides, palaces, and rooftop dinners with homestays under ₹500.",
    price: 8000,
    duration: "3 days",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500",
    features: ["Lake Pichola", "Palace tours", "Rooftop dinners", "Homestays"],
    destinations: ["Udaipur", "Lake Pichola", "City Palace"]
  },
  {
    id: 25,
    name: "Varanasi Ghats Experience",
    category: "Budget",
    description: "Discover Ganges ghats, boat rides at dawn, and silk markets with dharamshala stays.",
    price: 10000,
    duration: "4 days",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500",
    features: ["Ganges ghats", "Boat rides", "Silk markets", "Dharamshala stays"],
    destinations: ["Varanasi", "Sarnath"]
  },
  {
    id: 26,
    name: "Darjeeling Tea Estates",
    category: "Budget",
    description: "Explore tea estates, toy train rides, and Kanchenjunga views with homestays and momos.",
    price: 8000,
    duration: "4 days",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Tea estates", "Toy train", "Kanchenjunga views", "Homestays"],
    destinations: ["Darjeeling", "Tiger Hill", "Batasia Loop"]
  },
  {
    id: 27,
    name: "Alleppey Backwaters",
    category: "Budget",
    description: "Experience backwater ferries, houseboat day trips, and coconut curries in village homestays.",
    price: 8000,
    duration: "3 days",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
    features: ["Backwater ferries", "Houseboat trips", "Coconut curries", "Village homestays"],
    destinations: ["Alleppey", "Kumarakom"]
  },
  {
    id: 28,
    name: "Gokarna Beach Paradise",
    category: "Budget",
    description: "Relax at Om Beach, enjoy water sports with locals, and stay in fishermen huts from ₹300.",
    price: 6000,
    duration: "3 days",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500",
    features: ["Om Beach", "Water sports", "Temple treks", "Fishermen huts"],
    destinations: ["Gokarna", "Om Beach", "Half Moon Beach"]
  },
  {
    id: 29,
    name: "Pondicherry French Quarter",
    category: "Budget",
    description: "Explore French Quarter, Auroville, beaches, and enjoy crepes and dosas with cycle rentals.",
    price: 8000,
    duration: "3 days",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
    features: ["French Quarter", "Auroville", "Beaches", "Cycle rentals"],
    destinations: ["Pondicherry", "Auroville", "Paradise Beach"]
  },
  {
    id: 30,
    name: "Hampi Ruins Exploration",
    category: "Budget",
    description: "Discover ancient ruins, boulder climbing, and riverside camps with history buffs in hostels.",
    price: 6000,
    duration: "3 days",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500",
    features: ["Ancient ruins", "Boulder climbing", "Riverside camps", "History hostels"],
    destinations: ["Hampi", "Virupaksha Temple", "Vittala Temple"]
  },
  {
    id: 31,
    name: "Ooty Tea Plantations",
    category: "Budget",
    description: "Visit tea plantations, enjoy toy train rides, and stay in colonial bungalows turned budget stays.",
    price: 8000,
    duration: "3 days",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Tea plantations", "Toy train", "Boating", "Colonial bungalows"],
    destinations: ["Ooty", "Coonoor", "Mudumalai"]
  },
  {
    id: 32,
    name: "Kodaikanal Hill Station",
    category: "Budget",
    description: "Explore star-shaped lake, pine forests, horse rides, and Coaker's Walk for free views.",
    price: 8000,
    duration: "3 days",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Star lake", "Pine forests", "Horse rides", "Coaker's Walk"],
    destinations: ["Kodaikanal", "Berijam Lake", "Pillar Rocks"]
  },
  {
    id: 33,
    name: "Kanyakumari Sunrise",
    category: "Budget",
    description: "Witness sunrise at India's tip, visit Vivekananda Rock, and enjoy cheap seafood thalis.",
    price: 5000,
    duration: "2 days",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500",
    features: ["Sunrise views", "Vivekananda Rock", "Beaches", "Seafood thalis"],
    destinations: ["Kanyakumari", "Vivekananda Rock", "Thiruvalluvar Statue"]
  },
  {
    id: 34,
    name: "Puri Jagannath Temple",
    category: "Budget",
    description: "Visit Jagannath Temple, enjoy golden beaches, and experience chariot festival with beachside dhabas.",
    price: 6000,
    duration: "3 days",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500",
    features: ["Jagannath Temple", "Golden beaches", "Chariot festival", "Beachside dhabas"],
    destinations: ["Puri", "Konark", "Chilika Lake"]
  },
  {
    id: 35,
    name: "Mawlynnong Clean Village",
    category: "Budget",
    description: "Visit Asia's cleanest village, explore living root bridges, and stay in bamboo cottages ₹500/night.",
    price: 8000,
    duration: "3 days",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Clean village", "Root bridges", "Treks", "Bamboo cottages"],
    destinations: ["Mawlynnong", "Cherrapunji", "Shillong"]
  },
  {
    id: 36,
    name: "Sikkim Monasteries",
    category: "Budget",
    description: "Explore monasteries, enjoy cable car rides, and savor momos with shared jeeps to viewpoints.",
    price: 8000,
    duration: "4 days",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Monasteries", "Cable car rides", "Momos", "Shared jeeps"],
    destinations: ["Gangtok", "Rumtek Monastery", "Tsomgo Lake"]
  },
  {
    id: 37,
    name: "Jaisalmer Desert Safari",
    category: "Budget",
    description: "Experience desert safaris on camels, golden fort, and budget camps in the dunes.",
    price: 8000,
    duration: "3 days",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500",
    features: ["Desert safari", "Golden fort", "Havelis", "Dune camps"],
    destinations: ["Jaisalmer", "Sam Sand Dunes", "Kuldhara"]
  },
  {
    id: 38,
    name: "Pushkar Camel Fair",
    category: "Budget",
    description: "Experience camel fair, sacred lake, and hippie markets with ashram stays.",
    price: 6000,
    duration: "3 days",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500",
    features: ["Camel fair", "Sacred lake", "Hippie markets", "Ashram stays"],
    destinations: ["Pushkar", "Pushkar Lake", "Brahma Temple"]
  },
  {
    id: 39,
    name: "Chopta Tungnath Trek",
    category: "Budget",
    description: "Trek to Tungnath (world's highest Shiva temple) and experience mini Switzerland vibes in eco-lodges.",
    price: 5000,
    duration: "3 days",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Tungnath trek", "Mini Switzerland", "Eco-lodges", "Mountain views"],
    destinations: ["Chopta", "Tungnath", "Chandrashila"]
  },
  {
    id: 7,
    name: "Kashmir Valley Explorer",
    category: "Luxury Travel",
    description: "Experience the paradise on earth with luxury houseboat stays and scenic mountain views.",
    price: 40000,
    duration: "8 days",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
    features: ["Houseboat stay", "Shikara rides", "Gondola rides", "Traditional cuisine"],
    destinations: ["Srinagar", "Gulmarg", "Pahalgam"]
  },
  {
    id: 61,
    name: "Rajasthan Royal Heritage Tour",
    category: "Luxury Travel",
    description: "Camel safaris in the Thar Desert, boat cruises on Lake Pichola, private dinners in forts, luxury tented camps like Sher Bagh.",
    price: 250000,
    duration: "10-14 days",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500",
    features: ["Camel safaris", "Lake cruises", "Private fort dinners", "Luxury tented camps"],
    destinations: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"]
  },
  {
    id: 62,
    name: "Taj & Tigers Safari",
    category: "Luxury Travel",
    description: "VIP Taj Mahal viewing, private tiger safaris with naturalists, glamping at Oberoi or Taj properties, optional Bandhavgarh extension.",
    price: 200000,
    duration: "8-12 days",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500",
    features: ["VIP Taj viewing", "Private tiger safaris", "Glamping", "Naturalist guides"],
    destinations: ["Agra", "Ranthambore", "Delhi", "Bandhavgarh"]
  },
  {
    id: 63,
    name: "Maharajas' Express Train Journey",
    category: "Luxury Travel",
    description: "All-inclusive luxury rail travel on India's 'Orient Express,' onboard gourmet dining, off-train excursions to forts and wildlife reserves.",
    price: 300000,
    duration: "3-7 nights",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500",
    features: ["Luxury train", "Gourmet dining", "Fort excursions", "Wildlife reserves"],
    destinations: ["Delhi", "Agra", "Jaipur", "Ranthambore", "Udaipur"]
  },
  {
    id: 64,
    name: "Kerala Backwaters & Ayurveda Retreat",
    category: "Luxury Travel",
    description: "Private houseboat cruises through palm-fringed canals, Ayurvedic spa treatments at Kumarakom Lake Resort, tea plantation stays in Munnar.",
    price: 180000,
    duration: "7-10 days",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
    features: ["Private houseboats", "Ayurvedic spa", "Tea plantations", "Luxury resorts"],
    destinations: ["Cochin", "Alleppey", "Kovalam", "Thekkady", "Munnar"]
  },
  {
    id: 65,
    name: "South India Temples & Beaches",
    category: "Luxury Travel",
    description: "Colonial walks in Cochin, temple tours in Madurai, beach relaxation at Taj Exotica Resort Goa, spice market visits.",
    price: 220000,
    duration: "10-14 days",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
    features: ["Colonial walks", "Temple tours", "Beach resorts", "Spice markets"],
    destinations: ["Mumbai", "Hampi", "Cochin", "Goa", "Madurai"]
  },
  {
    id: 66,
    name: "Varanasi Spiritual Journey",
    category: "Luxury Travel",
    description: "Private sunrise boat rides on the Ganges, Aarti ceremony viewing, ashram stays, candlelit river dinners with Golden Triangle extension.",
    price: 150000,
    duration: "5-8 days",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500",
    features: ["Private Ganges rides", "Aarti ceremonies", "Ashram stays", "Candlelit dinners"],
    destinations: ["Varanasi", "Delhi", "Agra", "Jaipur"]
  },
  {
    id: 67,
    name: "Himalayan Luxury Escape",
    category: "Luxury Travel",
    description: "Hot air balloon over monasteries, yoga retreats at Ananda in the Himalayas, tea estate stays in Darjeeling like Glenburn.",
    price: 200000,
    duration: "7-12 days",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Hot air balloon", "Yoga retreats", "Tea estates", "Mountain serenity"],
    destinations: ["Ladakh", "Shimla", "Rishikesh", "Darjeeling"]
  },
  {
    id: 68,
    name: "Palace on Wheels Train Tour",
    category: "Luxury Travel",
    description: "Vintage luxury train with royal suites, guided palace tours, desert camps covering Rajasthan's 'Land of Kings.'",
    price: 180000,
    duration: "7 nights",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500",
    features: ["Vintage train", "Royal suites", "Palace tours", "Desert camps"],
    destinations: ["Delhi", "Jaipur", "Udaipur", "Jaisalmer"]
  },
  {
    id: 69,
    name: "Bengal Tiger & Sunderbans Adventure",
    category: "Luxury Travel",
    description: "Private mangrove boat safaris for tigers and rhinos, polo club lunches, tea estate hikes with optional Bhutan border extension.",
    price: 250000,
    duration: "10-14 days",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Mangrove safaris", "Polo club lunches", "Tea estate hikes", "Bhutan extension"],
    destinations: ["Kolkata", "Sundarbans", "Darjeeling", "Bhutan Border"]
  },
  {
    id: 70,
    name: "Luxury Wildlife Safari Collection",
    category: "Luxury Travel",
    description: "Exclusive wildlife experiences across India's premier national parks with luxury tented camps and private naturalist guides.",
    price: 300000,
    duration: "12-15 days",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Private naturalists", "Luxury tented camps", "Exclusive access", "Multi-park safari"],
    destinations: ["Ranthambore", "Kanha", "Bandhavgarh", "Jim Corbett"]
  },
  {
    id: 71,
    name: "Royal Rajasthan Palace Stay",
    category: "Luxury Travel",
    description: "Exclusive stays in converted royal palaces, private dining with Maharajas, cultural performances, and personalized butler service.",
    price: 280000,
    duration: "10 days",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500",
    features: ["Palace stays", "Maharaja dining", "Cultural performances", "Butler service"],
    destinations: ["Udaipur", "Jodhpur", "Jaisalmer", "Bikaner"]
  },
  {
    id: 72,
    name: "Luxury Wellness & Spa Retreat",
    category: "Luxury Travel",
    description: "World-class wellness retreats combining Ayurveda, yoga, meditation, and luxury spa treatments in India's most serene locations.",
    price: 200000,
    duration: "8-10 days",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
    features: ["Ayurveda treatments", "Yoga sessions", "Meditation", "Luxury spas"],
    destinations: ["Kerala", "Rishikesh", "Goa", "Himachal Pradesh"]
  },
  {
    id: 8,
    name: "Tamil Nadu Temple Trail",
    category: "Spiritual Travel",
    description: "Explore ancient temples and rich cultural heritage of Tamil Nadu with guided tours.",
    price: 20000,
    duration: "7 days",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500",
    features: ["Temple visits", "Cultural shows", "Traditional meals", "Expert guides"],
    destinations: ["Chennai", "Mahabalipuram", "Tanjavur", "Madurai"]
  },
  {
    id: 9,
    name: "Char Dham Yatra",
    category: "Spiritual Travel",
    description: "Sacred pilgrimage to four divine abodes in the Himalayas - Yamunotri, Gangotri, Kedarnath, and Badrinath.",
    price: 45000,
    duration: "10-12 days",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Himalayan trek", "Helicopter options", "Spiritual purification", "River dips"],
    destinations: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"]
  },
  {
    id: 10,
    name: "Kailash Mansarovar Yatra",
    category: "Spiritual Travel",
    description: "Ultimate pilgrimage to Mount Kailash and Lake Mansarovar - the abode of Lord Shiva.",
    price: 120000,
    duration: "12-15 days",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["Mountain parikrama", "Sacred lake", "High altitude trek", "Multi-faith pilgrimage"],
    destinations: ["Delhi", "Lipulekh Pass", "Mount Kailash", "Lake Mansarovar"]
  },
  {
    id: 11,
    name: "12 Jyotirlinga Darshan",
    category: "Spiritual Travel",
    description: "Complete pilgrimage to all 12 self-manifested Shiva lingams across India.",
    price: 75000,
    duration: "15-20 days",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500",
    features: ["12 sacred temples", "Multi-state circuit", "South India extension", "Spiritual guide"],
    destinations: ["Somnath", "Mallikarjuna", "Mahakaleshwar", "Omkareshwar", "Kedarnath", "Bhimashankar", "Kashi Vishwanath", "Trimbakeshwar", "Grishneshwar", "Vaidyanath", "Nageshwar", "Rameshwaram"]
  },
  {
    id: 12,
    name: "Amarnath Yatra",
    category: "Spiritual Travel",
    description: "Sacred pilgrimage to the ice Shivling formation in the Amarnath Cave.",
    price: 35000,
    duration: "5-7 days",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["High altitude trek", "Ice Shivling", "Summer only", "Pony/helicopter access"],
    destinations: ["Jammu", "Srinagar", "Amarnath Cave"]
  },
  {
    id: 13,
    name: "Vaishno Devi Yatra",
    category: "Spiritual Travel",
    description: "Sacred pilgrimage to the cave shrine of Goddess Vaishno Devi in Jammu & Kashmir.",
    price: 15000,
    duration: "2-4 days",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    features: ["12km trek", "Cave shrine", "Battery car option", "Family friendly"],
    destinations: ["Jammu", "Katra", "Vaishno Devi Temple"]
  },
  {
    id: 14,
    name: "Maha Kumbh Mela Tour",
    category: "Spiritual Travel",
    description: "Experience the world's largest religious gathering at Prayagraj's Triveni Sangam.",
    price: 25000,
    duration: "7-10 days",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500",
    features: ["Ritual bathing", "Crowd management", "Auspicious dates", "Guided experience"],
    destinations: ["Prayagraj", "Triveni Sangam"]
  },
  {
    id: 15,
    name: "South India Temple Tour",
    category: "Spiritual Travel",
    description: "Explore magnificent Dravidian temples and architectural marvels of South India.",
    price: 30000,
    duration: "7-10 days",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500",
    features: ["Dravidian architecture", "Chennai extension", "Kerala backwaters", "Cultural immersion"],
    destinations: ["Madurai", "Thanjavur", "Rameshwaram", "Tirupati", "Kanchipuram"]
  },
  {
    id: 16,
    name: "Ayodhya-Rameswaram Ramayana Circuit",
    category: "Spiritual Travel",
    description: "Follow Lord Rama's epic journey through the sacred sites mentioned in Ramayana.",
    price: 40000,
    duration: "8-12 days",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500",
    features: ["Ram Temple focus", "Epic journey", "New temple (2025)", "Spiritual storytelling"],
    destinations: ["Ayodhya", "Nashik", "Hampi", "Rameshwaram"]
  },
  {
    id: 17,
    name: "Dwarka-Somnath Tour",
    category: "Spiritual Travel",
    description: "Coastal Gujarat pilgrimage to Lord Krishna's city and the first Jyotirlinga.",
    price: 20000,
    duration: "5-7 days",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
    features: ["Coastal pilgrimage", "Bet Dwarka boat ride", "Gandhi's birthplace", "Gujarat heritage"],
    destinations: ["Dwarka", "Somnath", "Porbandar", "Bet Dwarka"]
  },
  {
    id: 18,
    name: "Puri Rath Yatra Tour",
    category: "Spiritual Travel",
    description: "Experience the annual chariot festival of Lord Jagannath in Puri.",
    price: 18000,
    duration: "4-6 days",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
    features: ["Chariot festival", "Seaside devotion", "Konark Sun Temple", "Chilika Lake"],
    destinations: ["Puri", "Konark", "Chilika Lake"]
  }
];

  // Simple navigation state
  let currentPage = 'home';
  const navigate = (page) => {
    currentPage = page;
    renderApp();
  };

// Header Component
const Header = () => {
  const { user, setUser, cart, favorites } = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  return (
    <header className="glass-effect shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
            <button onClick={() => navigate('home')} className="flex items-center space-x-2">
              <div className="w-12 h-12 traveler-gradient rounded-xl flex items-center justify-center shadow-lg">
                <Plane className="w-7 h-7 text-white" />
            </div>
              <span className="text-2xl font-bold traveler-text">
                Roadrolls
            </span>
            </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <div className="relative group">
              <button className="text-white hover:text-blue-400 font-medium flex items-center space-x-1">
                <span>Travel</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <button onClick={() => navigate('luxury-travel')} className="w-full text-left px-4 py-2 text-white hover:bg-white/20 transition-colors">
                    Luxury Travel
                  </button>
                  <button onClick={() => navigate('adventure')} className="w-full text-left px-4 py-2 text-white hover:bg-white/20 transition-colors">
                    Adventure
                  </button>
                  <button onClick={() => navigate('bike-trips')} className="w-full text-left px-4 py-2 text-white hover:bg-white/20 transition-colors">
                    Bike Trips
                  </button>
                  <button onClick={() => navigate('spiritual-travel')} className="w-full text-left px-4 py-2 text-white hover:bg-white/20 transition-colors">
                    Spiritual Travel
                  </button>
                  <button onClick={() => navigate('budget-trips')} className="w-full text-left px-4 py-2 text-white hover:bg-white/20 transition-colors">
                    Budget Trips
                  </button>
                </div>
              </div>
            </div>
            <button onClick={() => navigate('hotels')} className="text-white hover:text-cyan-400 font-medium ">Hotels</button>
            <button onClick={() => navigate('transport')} className="text-white hover:text-emerald-400 font-medium ">Transport</button>
            <button onClick={() => navigate('marketplace')} className="text-white hover:text-amber-400 font-medium ">Marketplace</button>
            <button onClick={() => navigate('cleanliness')} className="text-white hover:text-green-400 font-medium ">Cleanliness Drive</button>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
              <button className="p-2 text-white hover:text-blue-400 ">
              <Search className="w-5 h-5" />
            </button>

            {/* Favorites */}
              <button onClick={() => navigate('favorites')} className="p-2 text-white hover:text-red-400 relative ">
              <Heart className="w-5 h-5" />
              {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {favorites.length}
                </span>
              )}
              </button>

            {/* Cart */}
              <button onClick={() => navigate('cart')} className="p-2 text-white hover:text-cyan-400 relative ">
              <ShoppingCart className="w-5 h-5" />
              {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cart.length}
                </span>
              )}
              </button>

            {/* User Menu */}
            <div className="relative">
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 p-2 text-white hover:text-blue-400 "
              >
                <User className="w-5 h-5" />
                <ChevronDown className="w-4 h-4" />
              </button>

              {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 glass-effect rounded-xl shadow-2xl py-2 z-50">
                  {user ? (
                    <>
                        <button onClick={() => navigate('profile')} className="block w-full text-left px-4 py-3 text-sm text-white hover:bg-blue-500 hover:text-white ">Profile</button>
                        <button onClick={() => navigate('bookings')} className="block w-full text-left px-4 py-3 text-sm text-white hover:bg-cyan-500 hover:text-white ">My Bookings</button>
                      <button 
                        onClick={() => setUser(null)}
                          className="block w-full text-left px-4 py-3 text-sm text-white hover:bg-red-500 hover:text-white "
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <button 
                        onClick={() => { setAuthMode('login'); setShowAuthModal(true); }}
                          className="block w-full text-left px-4 py-3 text-sm text-white hover:bg-blue-500 hover:text-white "
                      >
                        Login
                      </button>
                      <button 
                        onClick={() => { setAuthMode('register'); setShowAuthModal(true); }}
                          className="block w-full text-left px-4 py-3 text-sm text-white hover:bg-emerald-500 hover:text-white "
                      >
                        Register
                      </button>
                    </>
                  )}
                  </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-white hover:text-yellow-400 "
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-yellow-400/20">
            <nav className="flex flex-col space-y-2">
                <div className="text-yellow-400 font-semibold py-2 px-4">Travel Categories</div>
                <button onClick={() => navigate('luxury-travel')} className="text-white hover:text-yellow-400 font-medium py-2 px-4 text-left">Luxury Travel</button>
                <button onClick={() => navigate('adventure')} className="text-white hover:text-yellow-400 font-medium py-2 px-4 text-left">Adventure</button>
                <button onClick={() => navigate('bike-trips')} className="text-white hover:text-yellow-400 font-medium py-2 px-4 text-left">Bike Trips</button>
                <button onClick={() => navigate('spiritual-travel')} className="text-white hover:text-yellow-400 font-medium py-2 px-4 text-left">Spiritual Travel</button>
                <button onClick={() => navigate('budget-trips')} className="text-white hover:text-yellow-400 font-medium py-2 px-4 text-left">Budget Trips</button>
                <div className="border-t border-yellow-400/20 my-2"></div>
                <div className="text-yellow-400 font-semibold py-2 px-4">Other Services</div>
                <button onClick={() => navigate('packages')} className="text-white hover:text-yellow-400 font-medium py-2 px-4 text-left">All Packages</button>
                <button onClick={() => navigate('hotels')} className="text-white hover:text-yellow-400 font-medium py-2 px-4 text-left">Hotels</button>
                <button onClick={() => navigate('transport')} className="text-white hover:text-yellow-400 font-medium py-2 px-4 text-left">Transport</button>
                <button onClick={() => navigate('marketplace')} className="text-white hover:text-yellow-400 font-medium py-2 px-4 text-left">Marketplace</button>
                <button onClick={() => navigate('cleanliness')} className="text-white hover:text-yellow-400 font-medium py-2 px-4 text-left">Cleanliness Drive</button>
            </nav>
            </div>
        )}
      </div>

      {/* Auth Modal */}
        {AuthModal && <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
        mode={authMode}
        />}
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with sunlight effect */}
        <div className="absolute inset-0 z-0">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700"></div>
          
          {/* Sunlight effect from top-right corner - enhanced visibility */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at top right, rgba(255, 255, 255, 0.4) 0%, rgba(255, 242, 204, 0.3) 10%, rgba(255, 229, 153, 0.2) 20%, rgba(255, 207, 0, 0.15) 30%, rgba(255, 193, 7, 0.08) 40%, transparent 60%)',
              backgroundSize: '120% 120%',
              pointerEvents: 'none'
            }}
          ></div>
          
          {/* Secondary sunlight layer for more depth - enhanced */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, transparent 0%, rgba(255, 248, 220, 0.2) 10%, rgba(255, 235, 59, 0.15) 20%, rgba(255, 207, 0, 0.1) 30%, transparent 40%)',
              pointerEvents: 'none'
            }}
          ></div>
          
          {/* Additional radial light rays for more dramatic effect */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at top right, rgba(255, 255, 255, 0.25) 0%, transparent 50%)',
              backgroundSize: '80% 80%',
              pointerEvents: 'none',
              transform: 'rotate(-10deg)',
              transformOrigin: 'top right'
            }}
          ></div>
          
          {/* Reduced overlay for better sunlight visibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-black/30"></div>
        </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              INCREDIBLE INDIA & 
              <span className="block traveler-text">
                UNFORGETTABLE JOURNEYS
            </span>
          </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto font-light">
              Discover the Magic of India
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto">
              From the majestic Himalayas to pristine beaches, from ancient temples to royal palaces - 
              explore the incredible diversity and rich heritage of India
          </p>

          </div>
      </div>
    </section>
  );
};

// Package Card Component
const PackageCard = ({ pkg, onAddToFavorites, onAddToCart, onViewDetails, isFavorite, isInCart }) => {
  const [showBookingModal, setShowBookingModal] = useState(false);

  return (
    <>
        <div className="glass-effect rounded-xl shadow-2xl overflow-hidden card-hover">
      <div className="relative">
        <img 
          src={pkg.image} 
          alt={pkg.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={() => onAddToFavorites(pkg.id)}
            className={`p-2 rounded-full ${
                  isFavorite ? 'bg-yellow-500 text-black' : 'glass-effect text-white hover:bg-yellow-400 hover:text-black'
            }`}
          >
            <Heart className="w-4 h-4" />
          </button>
        </div>
            <div className="absolute top-4 left-4">
              <span className="traveler-gradient text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                {pkg.category}
              </span>
            </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-white">{pkg.name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm text-gray-300">{pkg.rating}</span>
          </div>
        </div>

            <p className="text-gray-300 mb-4 line-clamp-2">{pkg.description}</p>

        <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-sm text-gray-400">
            <Calendar className="w-4 h-4 mr-1" />
            {pkg.duration}
          </div>
              <div className="text-2xl font-bold traveler-text">
                ${pkg.price}
                <span className="text-sm font-normal text-gray-400">/person</span>
              </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {pkg.features.slice(0, 2).map((feature, index) => (
                <span key={index} className="glass-effect text-white px-2 py-1 rounded text-xs border border-blue-400/30">
                  {feature}
                </span>
          ))}
        </div>

        <div className="flex space-x-2">
              <button
                onClick={() => setShowBookingModal(true)}
                className="flex-1 traveler-gradient text-white py-2 px-4 rounded-lg font-medium   shadow-lg"
              >
                Book Now
              </button>
              <button 
                onClick={() => onViewDetails(pkg.id)}
                className="px-4 py-2 glass-effect border border-blue-400/30 text-white rounded-lg hover:bg-blue-500 hover:text-white "
              >
                Details
              </button>
        </div>
      </div>
        </div>

    {/* Booking Modal */}
        {BookingModal && <BookingModal 
      isOpen={showBookingModal} 
      onClose={() => setShowBookingModal(false)} 
      package={pkg}
        />}
    </>
  );
};

// Package Selection Component
const PackageSelection = ({ onViewDetails }) => {
  const { addToFavorites, addToCart, favorites, cart } = useContext(AppContext);
  const [packages, setPackages] = useState(mockPackages);
  const [searchQuery, setSearchQuery] = useState("");

  // Group packages by category
  const packagesByCategory = packages.reduce((acc, pkg) => {
    if (!acc[pkg.category]) {
      acc[pkg.category] = [];
    }
    acc[pkg.category].push(pkg);
    return acc;
  }, {});

  // Filter packages based on search query
  const filteredPackagesByCategory = Object.keys(packagesByCategory).reduce((acc, category) => {
    acc[category] = packagesByCategory[category].filter(pkg => 
      pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return acc;
  }, {});

  const renderCategorySection = (category, packages) => {
    if (packages.length === 0) return null;

    const categoryDescriptions = {
      "Luxury Travel": "Indulge in opulent experiences with premium accommodations and exclusive services",
      "Spiritual Travel": "Embark on sacred journeys to India's most revered pilgrimage destinations",
      "Adventure": "Challenge yourself with thrilling outdoor activities and mountain expeditions",
      "Bike Trips": "Explore India's diverse landscapes on two wheels with guided cycling tours",
      "Budget": "Discover amazing destinations without breaking the bank with our affordable packages"
    };

    return (
      <div key={category} className="mb-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {category}
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {categoryDescriptions[category] || "Discover amazing experiences in this category"}
          </p>
        </div>
        
        {/* Carousel Container */}
        <div className="relative group">
          {/* Left Arrow */}
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={() => {
              const container = document.querySelector(`#carousel-${category.replace(/\s+/g, '-').toLowerCase()}`);
              if (container) {
                container.scrollBy({ left: -320, behavior: 'smooth' });
              }
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={() => {
              const container = document.querySelector(`#carousel-${category.replace(/\s+/g, '-').toLowerCase()}`);
              if (container) {
                container.scrollBy({ left: 320, behavior: 'smooth' });
              }
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Content */}
          <div 
            id={`carousel-${category.replace(/\s+/g, '-').toLowerCase()}`}
            className="overflow-x-auto scrollbar-hide carousel-container px-12"
          >
            <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>
              {packages.map((pkg) => (
                <div key={pkg.id} className="flex-shrink-0 w-80">
                       <PackageCard
                         pkg={pkg}
                         onAddToFavorites={addToFavorites}
                         onAddToCart={addToCart}
                         onViewDetails={onViewDetails}
                         isFavorite={favorites.includes(pkg.id)}
                         isInCart={cart.some(item => item.id === pkg.id)}
                       />
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {packages.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-600 hover:bg-blue-400 cursor-pointer transition-colors duration-200"
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Our
              <span className="block traveler-text">
                Travel Packages
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover handpicked experiences designed to create unforgettable memories across India
          </p>
          </div>

        {/* Search Bar */}
        <div className="mb-16">
          <div className="max-w-md mx-auto">
            <div className="relative">
                <Search className="absolute left-3 top-1/2  text-yellow-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search packages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 glass-effect border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-300"
              />
            </div>
          </div>
        </div>

        {/* Category Sections */}
        {Object.keys(filteredPackagesByCategory).map(category => 
          renderCategorySection(category, filteredPackagesByCategory[category])
        )}

      </div>
    </section>
  );
};

// AI Features Section
const AIFeatures = () => {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI-Powered Recommendations",
      description: "Get personalized travel suggestions based on your preferences and past bookings"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Smart Pricing",
      description: "Dynamic pricing that adjusts based on demand, season, and your profile"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 AI Assistant",
      description: "Get instant help with bookings, itinerary changes, and travel queries"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-Language Support",
      description: "Experience seamless travel planning in your preferred language"
    }
  ];

  return (
      <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powered by
              <span className="block luxury-text">
              Artificial Intelligence
            </span>
          </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of travel with our cutting-edge AI technology
          </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
              <div
              key={index}
                className="text-center p-6 rounded-xl glass-effect hover:shadow-2xl  card-hover"
            >
                <div className="w-16 h-16 luxury-gradient rounded-full flex items-center justify-center text-black mx-auto mb-4 shadow-lg">
                {feature.icon}
              </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
      <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
                <div className="w-12 h-12 luxury-gradient rounded-xl flex items-center justify-center shadow-lg">
                  <Plane className="w-7 h-7 text-black" />
              </div>
                <span className="text-2xl font-bold luxury-text">Roadrolls</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your gateway to the world with AI-powered travel planning and personalized experiences.
            </p>
          </div>

          <div>
              <h3 className="text-lg font-semibold mb-4 luxury-text">Travel</h3>
            <ul className="space-y-2">
                <li><button className="text-gray-400 hover:text-yellow-400 ">Packages</button></li>
                <li><button className="text-gray-400 hover:text-yellow-400 ">Hotels</button></li>
                <li><button className="text-gray-400 hover:text-yellow-400 ">Flights</button></li>
                <li><button className="text-gray-400 hover:text-yellow-400 ">Transport</button></li>
            </ul>
          </div>

          <div>
              <h3 className="text-lg font-semibold mb-4 luxury-text">Support</h3>
            <ul className="space-y-2">
                <li><button className="text-gray-400 hover:text-yellow-400 ">Help Center</button></li>
                <li><button className="text-gray-400 hover:text-yellow-400 ">Contact Us</button></li>
                <li><button className="text-gray-400 hover:text-yellow-400 ">Live Chat</button></li>
                <li><button className="text-gray-400 hover:text-yellow-400 ">FAQ</button></li>
            </ul>
          </div>

          <div>
              <h3 className="text-lg font-semibold mb-4 luxury-text">Company</h3>
            <ul className="space-y-2">
                <li><button className="text-gray-400 hover:text-yellow-400 ">About Us</button></li>
                <li><button className="text-gray-400 hover:text-yellow-400 ">Careers</button></li>
                <li><button className="text-gray-400 hover:text-yellow-400 ">Privacy Policy</button></li>
                <li><button className="text-gray-400 hover:text-yellow-400 ">Terms of Service</button></li>
            </ul>
          </div>
        </div>

          <div className="border-t border-yellow-400/20 mt-12 pt-8 text-center">
          <p className="text-gray-400">
              © 2024 Roadrolls. All rights reserved. Made with ❤️ for travelers worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

  // Hotels Page Component
  const HotelsPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCity, setSelectedCity] = useState("All");
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [rating, setRating] = useState(0);
    const [amenities, setAmenities] = useState([]);

    const cities = ["All", "Delhi", "Mumbai", "Bangalore", "Goa", "Jaipur", "Kerala", "Kashmir", "Rishikesh", "Varanasi"];
    const amenityOptions = ["WiFi", "Pool", "Spa", "Gym", "Restaurant", "Bar", "Parking", "Airport Shuttle", "Pet Friendly", "Business Center"];

    const mockHotels = [
      {
        id: 1,
        name: "The Taj Palace, New Delhi",
        city: "Delhi",
        price: 15000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500",
        amenities: ["WiFi", "Pool", "Spa", "Gym", "Restaurant", "Bar"],
        description: "Luxury hotel in the heart of Delhi with stunning city views and world-class service."
      },
      {
        id: 2,
        name: "The Oberoi Mumbai",
        city: "Mumbai",
        price: 18000,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500",
        amenities: ["WiFi", "Spa", "Restaurant", "Bar", "Business Center"],
        description: "Luxury hotel overlooking the Arabian Sea with elegant rooms and exceptional dining."
      },
      {
        id: 3,
        name: "The Leela Palace Bangalore",
        city: "Bangalore",
        price: 12000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500",
        amenities: ["WiFi", "Spa", "Restaurant", "Bar", "Parking"],
        description: "Palatial luxury hotel with beautiful gardens and traditional Indian architecture."
      },
      {
        id: 4,
        name: "Taj Exotica Resort & Spa, Goa",
        city: "Goa",
        price: 20000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500",
        amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Bar", "Beach Access"],
        description: "Beachfront luxury resort with pristine beaches and world-class amenities."
      },
      {
        id: 5,
        name: "Rambagh Palace, Jaipur",
        city: "Jaipur",
        price: 25000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500",
        amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Bar", "Palace Tours"],
        description: "Former royal palace converted to luxury hotel with authentic Rajasthani architecture."
      },
      {
        id: 6,
        name: "Kumarakom Lake Resort, Kerala",
        city: "Kerala",
        price: 16000,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500",
        amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Bar", "Backwater Tours"],
        description: "Luxury resort on the backwaters with traditional Kerala architecture and Ayurvedic spa."
      }
    ];

    const filteredHotels = mockHotels.filter(hotel => {
      const matchesCity = selectedCity === "All" || hotel.city === selectedCity;
      const matchesPrice = hotel.price >= priceRange[0] && hotel.price <= priceRange[1];
      const matchesRating = hotel.rating >= rating;
      const matchesSearch = hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           hotel.city.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCity && matchesPrice && matchesRating && matchesSearch;
    });

    return (
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Luxury
              <span className="block luxury-text">Hotels</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the world's most prestigious hotels and resorts
            </p>
          </div>

          {/* Search and Filters */}
          <div className="glass-effect rounded-2xl p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Search Hotels</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2  text-yellow-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Hotel name or city"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">City</label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                >
                  {cities.map(city => (
                    <option key={city} value={city} className="bg-gray-800 text-white">{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Minimum Rating: {rating}+</label>
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.1"
                  value={rating}
                  onChange={(e) => setRating(parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Amenities</label>
              <div className="flex flex-wrap gap-2">
                {amenityOptions.map(amenity => (
                  <button
                    key={amenity}
                    onClick={() => setAmenities(prev => 
                      prev.includes(amenity) 
                        ? prev.filter(a => a !== amenity)
                        : [...prev, amenity]
                    )}
                    className={`px-4 py-2 rounded-full text-sm  ${
                      amenities.includes(amenity)
                        ? 'luxury-gradient text-black'
                        : 'glass-effect text-white hover:bg-yellow-400 hover:text-black'
                    }`}
                  >
                    {amenity}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Hotels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHotels.map(hotel => (
              <div key={hotel.id} className="glass-effect rounded-xl shadow-2xl overflow-hidden card-hover">
                <div className="relative">
                  <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-white text-sm font-medium">{hotel.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{hotel.name}</h3>
                    <div className="text-2xl font-bold luxury-text">${hotel.price}<span className="text-sm text-gray-400">/night</span></div>
                  </div>

                  <div className="flex items-center text-gray-300 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{hotel.city}</span>
                  </div>

                  <p className="text-gray-300 mb-4 text-sm">{hotel.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.slice(0, 3).map(amenity => (
                      <span key={amenity} className="glass-effect text-white px-2 py-1 rounded text-xs border border-yellow-400/30">
                        {amenity}
                      </span>
                    ))}
                    {hotel.amenities.length > 3 && (
                      <span className="glass-effect text-white px-2 py-1 rounded text-xs border border-yellow-400/30">
                        +{hotel.amenities.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 luxury-gradient text-black py-2 px-4 rounded-lg font-medium   shadow-lg">
                      Book Now
                    </button>
                    <button className="px-4 py-2 glass-effect border border-yellow-400/30 text-white rounded-lg hover:bg-yellow-400 hover:text-black ">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Transport Page Component
  const TransportPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [transportType, setTransportType] = useState("All");
    const [selectedRoute, setSelectedRoute] = useState("");

    const transportTypes = ["All", "Flights", "Trains", "Buses", "Cars", "Taxis", "Cruises"];
    const routes = ["Delhi - Mumbai", "Mumbai - Goa", "Delhi - Jaipur", "Bangalore - Kerala", "Delhi - Kashmir"];

    const mockTransport = [
      {
        id: 1,
        type: "Flights",
        name: "Business Class Flight",
        route: "Delhi - Mumbai",
        price: 15000,
        duration: "2h 15m",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500",
        features: ["Priority Boarding", "Lounge Access", "Extra Legroom", "Meals Included"],
        rating: 4.8
      },
      {
        id: 2,
        type: "Trains",
        name: "Rajdhani Express",
        route: "Delhi - Mumbai",
        price: 2500,
        duration: "16h 30m",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500",
        features: ["WiFi", "Dining Car", "Scenic Views", "Comfortable Seats"],
        rating: 4.6
      },
      {
        id: 3,
        type: "Cars",
        name: "Luxury Car Rental",
        route: "Delhi - Jaipur",
        price: 8000,
        duration: "1 day",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500",
        features: ["GPS Navigation", "Insurance Included", "24/7 Support", "Premium Vehicle"],
        rating: 4.7
      },
      {
        id: 4,
        type: "Buses",
        name: "Volvo Multi-Axle Bus",
        route: "Mumbai - Goa",
        price: 1200,
        duration: "12h 00m",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500",
        features: ["AC Seating", "Reclining Seats", "Water Bottles", "Blankets"],
        rating: 4.5
      },
      {
        id: 5,
        type: "Taxis",
        name: "Premium Taxi Service",
        route: "City Center",
        price: 2000,
        duration: "1 day",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500",
        features: ["AC Vehicle", "Experienced Driver", "City Tours", "Flexible Timings"],
        rating: 4.4
      },
      {
        id: 6,
        type: "Cruises",
        name: "Kerala Backwater Cruise",
        route: "Alleppey - Kumarakom",
        price: 5000,
        duration: "1 day",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
        features: ["Houseboat Stay", "Traditional Meals", "Scenic Views", "Cultural Shows"],
        rating: 4.9
      }
    ];

    const filteredTransport = mockTransport.filter(item => {
      const matchesType = transportType === "All" || item.type === transportType;
      const matchesRoute = selectedRoute === "" || item.route === selectedRoute;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.route.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesRoute && matchesSearch;
    });

    return (
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Premium
              <span className="block luxury-text">Transport</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Travel in comfort and style with our premium transportation options
            </p>
          </div>

          {/* Search and Filters */}
          <div className="glass-effect rounded-2xl p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Search Transport</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2  text-yellow-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by name or route"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Transport Type</label>
                <select
                  value={transportType}
                  onChange={(e) => setTransportType(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                >
                  {transportTypes.map(type => (
                    <option key={type} value={type} className="bg-gray-800 text-white">{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Popular Routes</label>
                <select
                  value={selectedRoute}
                  onChange={(e) => setSelectedRoute(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                >
                  <option value="" className="bg-gray-800 text-white">All Routes</option>
                  {routes.map(route => (
                    <option key={route} value={route} className="bg-gray-800 text-white">{route}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Transport Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTransport.map(item => (
              <div key={item.id} className="glass-effect rounded-xl shadow-2xl overflow-hidden card-hover">
                <div className="relative">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="luxury-gradient text-black px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {item.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-white text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                    <div className="text-2xl font-bold luxury-text">${item.price}</div>
                  </div>

                  <div className="flex items-center text-gray-300 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{item.route}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm">{item.duration}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.features.map((feature, index) => (
                <span key={index} className="glass-effect text-white px-2 py-1 rounded text-xs border border-blue-400/30">
                  {feature}
                </span>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 luxury-gradient text-black py-2 px-4 rounded-lg font-medium   shadow-lg">
                      Book Now
                    </button>
                    <button className="px-4 py-2 glass-effect border border-yellow-400/30 text-white rounded-lg hover:bg-yellow-400 hover:text-black ">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Marketplace Page Component
  const MarketplacePage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortBy, setSortBy] = useState("popular");

    const categories = ["All", "Clothing and Accessories", "Health and Hygiene", "Electronics and Connectivity", "Travel Comfort and Convenience", "Food and Safety", "Cultural and Practical Items", "Region-Specific Accessories", "Indian Handicrafts", "Souvenirs"];
    const sortOptions = ["popular", "price-low", "price-high", "rating", "newest"];

    const mockProducts = [
      // Clothing and Accessories
      {
        id: 1,
        name: "Lightweight Cotton Kurta Set",
        category: "Clothing and Accessories",
        price: 1200,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500",
        description: "Breathable cotton kurtas and loose pants suitable for hot weather and respectful of local customs.",
        features: ["100% Cotton", "Lightweight", "Modest Design", "Hot Weather Friendly"]
      },
      {
        id: 2,
        name: "Traditional Dupatta/Scarf",
        category: "Clothing and Accessories",
        price: 450,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
        description: "Versatile scarf for covering shoulders or head when visiting religious sites or for sun protection.",
        features: ["Multi-purpose", "Sun Protection", "Religious Sites", "Lightweight"]
      },
      {
        id: 3,
        name: "Comfortable Walking Shoes",
        category: "Clothing and Accessories",
        price: 2800,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
        description: "Durable sneakers designed for uneven roads and long walks during sightseeing.",
        features: ["Durable", "Comfortable", "Non-slip Sole", "Breathable"]
      },
      {
        id: 4,
        name: "Travel Flip-Flops",
        category: "Clothing and Accessories",
        price: 800,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
        description: "Easy slip-on footwear for shared bathrooms, beaches, or casual wear.",
        features: ["Quick Dry", "Comfortable", "Easy Slip-on", "Beach Ready"]
      },
      {
        id: 5,
        name: "Compact Travel Umbrella",
        category: "Clothing and Accessories",
        price: 650,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500",
        description: "Lightweight rain protection essential during monsoon season (June-September).",
        features: ["Compact", "Windproof", "UV Protection", "Lightweight"]
      },
      {
        id: 6,
        name: "Sun Protection Hat & Sunglasses Set",
        category: "Clothing and Accessories",
        price: 1200,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
        description: "Essential sun protection for hot regions like Rajasthan or coastal areas.",
        features: ["UV Protection", "Adjustable", "Polarized Lenses", "Foldable"]
      },
      {
        id: 7,
        name: "Fleece Jacket for Cold Regions",
        category: "Clothing and Accessories",
        price: 2200,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1551028719-001c4b0b0b8e?w=500",
        description: "Warm layers for colder regions like Himalayas or northern India in winter.",
        features: ["Warm", "Lightweight", "Packable", "Moisture Wicking"]
      },

      // Health and Hygiene
      {
        id: 8,
        name: "Portable Water Purifier Bottle",
        category: "Health and Hygiene",
        price: 3500,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "LifeStraw-style portable purifier ensuring safe drinking water from any source.",
        features: ["Water Purification", "Portable", "BPA Free", "Long Lasting"]
      },
      {
        id: 9,
        name: "Travel Hygiene Kit",
        category: "Health and Hygiene",
        price: 800,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "Complete hygiene kit with hand sanitizer, wet wipes, and travel-sized toiletries.",
        features: ["Hand Sanitizer", "Wet Wipes", "Travel Size", "TSA Approved"]
      },
      {
        id: 10,
        name: "High SPF Sunscreen & Lip Balm",
        category: "Health and Hygiene",
        price: 600,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "High SPF protection against strong UV rays with moisturizing lip balm.",
        features: ["SPF 50+", "Water Resistant", "Moisturizing", "Compact Size"]
      },
      {
        id: 11,
        name: "DEET Insect Repellent",
        category: "Health and Hygiene",
        price: 450,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "DEET-based repellent for mosquitoes, especially effective in rural or tropical areas.",
        features: ["DEET Formula", "Long Lasting", "Mosquito Protection", "Travel Size"]
      },
      {
        id: 12,
        name: "Comprehensive First Aid Kit",
        category: "Health and Hygiene",
        price: 1200,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "Complete first aid kit with band-aids, antiseptic, painkillers, and antidiarrheal medication.",
        features: ["Complete Kit", "Antiseptic", "Pain Relief", "Emergency Ready"]
      },
      {
        id: 13,
        name: "Electrolyte Hydration Packets",
        category: "Health and Hygiene",
        price: 300,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "Prevent dehydration in hot climates or during stomach upsets with electrolyte packets.",
        features: ["Hydration", "Electrolytes", "Portable", "Multiple Flavors"]
      },
      {
        id: 14,
        name: "Anti-Pollution Face Masks",
        category: "Health and Hygiene",
        price: 400,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "Protection against dust and pollution in cities like Delhi and crowded places.",
        features: ["Pollution Protection", "Reusable", "Comfortable", "Washable"]
      },

      // Electronics and Connectivity
      {
        id: 15,
        name: "Universal Power Adapter for India",
        category: "Electronics and Connectivity",
        price: 1200,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "Universal adapter with surge protection for India's Type C and D sockets (230V, 50Hz).",
        features: ["Universal", "Surge Protection", "Type C & D", "Safety Certified"]
      },
      {
        id: 16,
        name: "High Capacity Power Bank",
        category: "Electronics and Connectivity",
        price: 2500,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "Essential for long travel days, as power outages are common in some areas.",
        features: ["High Capacity", "Fast Charging", "Multiple Ports", "LED Display"]
      },
      {
        id: 17,
        name: "Noise-Canceling Headphones",
        category: "Electronics and Connectivity",
        price: 4500,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "Perfect for noisy trains, buses, or flights during your India travels.",
        features: ["Noise Canceling", "Wireless", "Long Battery", "Comfortable"]
      },
      {
        id: 18,
        name: "Travel Plug Strip",
        category: "Electronics and Connectivity",
        price: 800,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "Useful for charging multiple devices in rooms with limited outlets.",
        features: ["Multiple Outlets", "USB Ports", "Compact", "Surge Protection"]
      },

      // Travel Comfort and Convenience
      {
        id: 19,
        name: "Lightweight Daypack",
        category: "Travel Comfort and Convenience",
        price: 1800,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "Perfect for day trips or carrying essentials during sightseeing.",
        features: ["Lightweight", "Multiple Compartments", "Water Resistant", "Comfortable Straps"]
      },
      {
        id: 20,
        name: "Reusable Water Bottle with Filter",
        category: "Travel Comfort and Convenience",
        price: 1500,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "Eco-friendly hydration paired with built-in water purification.",
        features: ["Built-in Filter", "Eco-friendly", "Leak-proof", "BPA Free"]
      },
      {
        id: 21,
        name: "Travel Pillow and Eye Mask Set",
        category: "Travel Comfort and Convenience",
        price: 900,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "Essential comfort for long train or bus journeys across India.",
        features: ["Memory Foam", "Adjustable", "Eye Mask Included", "Compact"]
      },
      {
        id: 22,
        name: "Quick-Dry Travel Towel",
        category: "Travel Comfort and Convenience",
        price: 600,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "Compact and useful for hostels, beaches, or unexpected situations.",
        features: ["Quick Dry", "Compact", "Antimicrobial", "Lightweight"]
      },
      {
        id: 23,
        name: "Packing Cubes Set",
        category: "Travel Comfort and Convenience",
        price: 800,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "Organize luggage and save space with compression packing cubes.",
        features: ["Compression", "Multiple Sizes", "Mesh Panels", "Durable"]
      },
      {
        id: 24,
        name: "Travel Laundry Kit",
        category: "Travel Comfort and Convenience",
        price: 400,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "Small detergent packets and portable clothesline for washing clothes on the go.",
        features: ["Detergent Packets", "Portable Clothesline", "Compact", "Eco-friendly"]
      },

      // Food and Safety
      {
        id: 25,
        name: "Reusable Cutlery and Food Container Set",
        category: "Food and Safety",
        price: 700,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "For street food or takeaways, reducing reliance on unhygienic utensils.",
        features: ["Reusable", "BPA Free", "Compact", "Easy Clean"]
      },
      {
        id: 26,
        name: "Travel Snacks Pack",
        category: "Food and Safety",
        price: 500,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "Energy bars, nuts, and dried fruits for long journeys or limited food options.",
        features: ["Energy Bars", "Nuts", "Dried Fruits", "Long Shelf Life"]
      },
      {
        id: 27,
        name: "Travel Security Padlock Set",
        category: "Food and Safety",
        price: 600,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "For securing bags on trains or in shared accommodations.",
        features: ["TSA Approved", "Combination Lock", "Durable", "Multiple Sizes"]
      },
      {
        id: 28,
        name: "Personal Safety Whistle",
        category: "Food and Safety",
        price: 200,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "For safety in crowded or isolated areas during your travels.",
        features: ["Loud Sound", "Lightweight", "Waterproof", "Emergency Use"]
      },

      // Cultural and Practical Items
      {
        id: 29,
        name: "India Travel Guidebook",
        category: "Cultural and Practical Items",
        price: 800,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500",
        description: "Comprehensive guide to India's destinations, culture, and travel tips with offline maps.",
        features: ["Comprehensive Guide", "Cultural Insights", "Offline Maps", "Updated Information"]
      },
      {
        id: 30,
        name: "Travel Journal and Pen Set",
        category: "Cultural and Practical Items",
        price: 400,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "For jotting down directions, contacts, or travel memories.",
        features: ["Journal", "Pen Included", "Compact", "Durable Cover"]
      },
      {
        id: 31,
        name: "Small Gifts for Locals",
        category: "Cultural and Practical Items",
        price: 300,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "Pens, postcards, or trinkets for locals or kids as a gesture of goodwill.",
        features: ["Cultural Exchange", "Small Items", "Gift Ready", "Local Appreciation"]
      },
      {
        id: 32,
        name: "Hindi Phrasebook",
        category: "Cultural and Practical Items",
        price: 250,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500",
        description: "Basic Hindi phrases to help in rural areas where English is less common.",
        features: ["Basic Phrases", "Pronunciation Guide", "Cultural Tips", "Pocket Size"]
      },

      // Region-Specific Accessories
      {
        id: 33,
        name: "Mountain Trekking Gear Set",
        category: "Region-Specific Accessories",
        price: 4500,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "For mountains (Himachal Pradesh, Uttarakhand): warm clothing, trekking gear, sturdy boots.",
        features: ["Trekking Boots", "Warm Clothing", "Sleeping Bag Liner", "Mountain Ready"]
      },
      {
        id: 34,
        name: "Beach Travel Kit",
        category: "Region-Specific Accessories",
        price: 1200,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "For beaches (Goa, Kerala): swimsuit, beach towel, and waterproof phone pouch.",
        features: ["Swimsuit", "Beach Towel", "Waterproof Pouch", "Beach Ready"]
      },
      {
        id: 35,
        name: "City Travel Essentials",
        category: "Region-Specific Accessories",
        price: 800,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "For cities (Mumbai, Delhi): pollution mask and noise-canceling earplugs.",
        features: ["Pollution Mask", "Earplugs", "City Protection", "Comfort"]
      },
      {
        id: 36,
        name: "Rural Area Survival Kit",
        category: "Region-Specific Accessories",
        price: 1500,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "For rural areas: headlamp, flashlight, and basic camping gear for remote locations.",
        features: ["Headlamp", "Flashlight", "Basic Camping Gear", "Remote Ready"]
      },

      // Traditional Indian Items
      {
        id: 37,
        name: "Traditional Indian Travel Backpack",
        category: "Indian Handicrafts",
        price: 2500,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "Handcrafted backpack with traditional Indian patterns, perfect for your India travels.",
        features: ["Handcrafted", "Traditional Design", "Multiple Compartments", "Durable"]
      },
      {
        id: 38,
        name: "Indian Spice Kit",
        category: "Souvenirs",
        price: 800,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        description: "Authentic Indian spice collection with traditional recipes and cooking guide.",
        features: ["Authentic Spices", "Recipe Book", "Gift Box", "Traditional Packaging"]
      },
      {
        id: 39,
        name: "Rajasthani Handicraft Set",
        category: "Indian Handicrafts",
        price: 1500,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500",
        description: "Beautiful handcrafted items from Rajasthan including pottery and textiles.",
        features: ["Handcrafted", "Traditional Art", "Unique Design", "Cultural Heritage"]
      },
      {
        id: 40,
        name: "Kashmiri Shawl",
        category: "Clothing and Accessories",
        price: 3500,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500",
        description: "Luxurious handwoven Kashmiri shawl with intricate embroidery work.",
        features: ["Handwoven", "Pure Wool", "Intricate Embroidery", "Luxury Quality"]
      },
      {
        id: 41,
        name: "Traditional Indian Jewelry Set",
        category: "Accessories",
        price: 2200,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500",
        description: "Elegant traditional Indian jewelry set with authentic designs and craftsmanship.",
        features: ["Traditional Design", "Authentic Craftsmanship", "Gift Ready", "Cultural Significance"]
      }
    ];

    const filteredProducts = mockProducts.filter(product => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    return (
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Travel
              <span className="block luxury-text">Marketplace</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover premium travel gear and accessories for your next adventure
            </p>
          </div>

          {/* Search and Filters */}
          <div className="glass-effect rounded-2xl p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Search Products</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2  text-yellow-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-800 text-white">{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                >
                  {sortOptions.map(option => (
                    <option key={option} value={option} className="bg-gray-800 text-white">
                      {option.charAt(0).toUpperCase() + option.slice(1).replace('-', ' ')}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="glass-effect rounded-xl shadow-2xl overflow-hidden card-hover">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="luxury-gradient text-black px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-white text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                    <div className="text-2xl font-bold luxury-text">${product.price}</div>
                  </div>

                  <p className="text-gray-300 mb-4 text-sm">{product.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, index) => (
                <span key={index} className="glass-effect text-white px-2 py-1 rounded text-xs border border-blue-400/30">
                  {feature}
                </span>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 luxury-gradient text-black py-2 px-4 rounded-lg font-medium   shadow-lg">
                      Add to Cart
                    </button>
                    <button className="px-4 py-2 glass-effect border border-yellow-400/30 text-white rounded-lg hover:bg-yellow-400 hover:text-black ">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Cleanliness Drive Page Component
  const CleanlinessDrivePage = () => {
    const [selectedInitiative, setSelectedInitiative] = useState("all");
    const [showStoryForm, setShowStoryForm] = useState(false);
    const [storyForm, setStoryForm] = useState({
      name: "",
      email: "",
      destination: "",
      ngo: "",
      story: "",
      images: []
    });

    const ngoPartners = [
      {
        id: 1,
        name: "Clean India Foundation",
        location: "Mumbai, Maharashtra",
        focus: "Urban Cleanliness & Waste Management",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500",
        description: "Leading urban cleanliness initiatives across major Indian cities",
        activities: ["Beach Cleanups", "Street Cleaning", "Waste Segregation", "Community Education"],
        contact: "cleanindia@ngo.org",
        website: "www.cleanindia.org"
      },
      {
        id: 2,
        name: "Green Himalayas",
        location: "Shimla, Himachal Pradesh",
        focus: "Mountain Conservation & Eco-Tourism",
        image: "https://images.unsplash.com/photo-1506905925346-14b8e4d4b4c0?w=500",
        description: "Protecting Himalayan ecosystems through community engagement",
        activities: ["Trail Cleanups", "Forest Conservation", "Wildlife Protection", "Eco-Tourism"],
        contact: "greenhimalayas@ngo.org",
        website: "www.greenhimalayas.org"
      },
      {
        id: 3,
        name: "Coastal Cleanup Network",
        location: "Goa, India",
        focus: "Marine Conservation & Beach Cleanliness",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=500",
        description: "Dedicated to protecting India's coastal ecosystems and marine life",
        activities: ["Beach Cleanups", "Marine Debris Removal", "Coral Restoration", "Fisherman Education"],
        contact: "coastalcleanup@ngo.org",
        website: "www.coastalcleanup.in"
      },
      {
        id: 4,
        name: "Rural Green Initiative",
        location: "Rajasthan, India",
        focus: "Rural Development & Environmental Conservation",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500",
        description: "Promoting sustainable practices in rural communities across India",
        activities: ["Village Cleanups", "Water Conservation", "Organic Farming", "Women Empowerment"],
        contact: "ruralgreen@ngo.org",
        website: "www.ruralgreen.org"
      },
      {
        id: 5,
        name: "Wildlife Conservation Society",
        location: "Karnataka, India",
        focus: "Wildlife Protection & Habitat Restoration",
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500",
        description: "Protecting India's diverse wildlife and their natural habitats",
        activities: ["Forest Cleanups", "Wildlife Rescue", "Habitat Restoration", "Anti-Poaching"],
        contact: "wildlife@ngo.org",
        website: "www.wildlifeconservation.in"
      },
      {
        id: 6,
        name: "Spiritual Cleanliness Movement",
        location: "Varanasi, Uttar Pradesh",
        focus: "Religious Site Conservation & Ganga Cleanup",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=500",
        description: "Preserving India's spiritual heritage through environmental action",
        activities: ["Ganga Cleanup", "Temple Conservation", "Pilgrimage Site Cleanup", "Spiritual Tourism"],
        contact: "spiritualclean@ngo.org",
        website: "www.spiritualclean.org"
      }
    ];

    const travelerStories = [
      {
        id: 1,
        name: "Sarah Johnson",
        destination: "Goa",
        ngo: "Coastal Cleanup Network",
        story: "Spent an amazing morning cleaning Baga Beach with local volunteers. We collected over 200kg of plastic waste and learned about marine conservation. The experience was both humbling and inspiring!",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        date: "2024-01-15",
        impact: "200kg waste collected"
      },
      {
        id: 2,
        name: "Rajesh Kumar",
        destination: "Rishikesh",
        ngo: "Green Himalayas",
        story: "Joined a trail cleanup in the Himalayas. The pristine beauty of the mountains motivated us to keep them clean. Met amazing people and made lifelong friends while protecting nature.",
        image: "https://images.unsplash.com/photo-1506905925346-14b8e4d4b4c0?w=500",
        date: "2024-01-10",
        impact: "5km trail cleaned"
      },
      {
        id: 3,
        name: "Maria Garcia",
        destination: "Varanasi",
        ngo: "Spiritual Cleanliness Movement",
        story: "Participated in the Ganga cleanup drive. It was incredible to see hundreds of people working together to clean our sacred river. The spiritual significance made it even more meaningful.",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=500",
        date: "2024-01-08",
        impact: "500kg river waste removed"
      }
    ];

    const stats = [
      { label: "NGO Partners", value: "50+", icon: <Users className="w-8 h-8" /> },
      { label: "Cleanup Events", value: "200+", icon: <Trash2 className="w-8 h-8" /> },
      { label: "Waste Collected", value: "10M kg", icon: <Shield className="w-8 h-8" /> },
      { label: "Volunteers", value: "5K+", icon: <Heart className="w-8 h-8" /> }
    ];

    const handleStorySubmit = (e) => {
      e.preventDefault();
      // Here you would typically send the story to a backend
      alert("Thank you for sharing your story! We'll review and publish it soon.");
      setShowStoryForm(false);
      setStoryForm({ name: "", email: "", destination: "", ngo: "", story: "", images: [] });
    };

    return (
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Cleanliness
              <span className="block luxury-text">Drive</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hands with local NGOs to clean destinations and share your impact story
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 text-center card-hover">
                <div className="w-16 h-16 luxury-gradient rounded-full flex items-center justify-center text-black mx-auto mb-4 shadow-lg">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold luxury-text mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* NGO Partners Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Partner NGOs</h2>
            <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hands with local NGOs across India to make a real difference in destination cleanliness
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ngoPartners.map(ngo => (
                <div key={ngo.id} className="glass-effect rounded-xl shadow-2xl overflow-hidden card-hover">
                  <div className="relative">
                    <img src={ngo.image} alt={ngo.name} className="w-full h-48 object-cover" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {ngo.location}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{ngo.name}</h3>
                    <p className="text-green-400 text-sm mb-3">{ngo.focus}</p>
                    <p className="text-gray-300 mb-4 text-sm">{ngo.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {ngo.activities.map((activity, index) => (
                        <span key={index} className="glass-effect text-white px-2 py-1 rounded text-xs border border-green-400/30">
                          {activity}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="text-sm text-gray-300">
                        <span className="font-medium">Contact:</span> {ngo.contact}
                      </div>
                      <div className="text-sm text-gray-300">
                        <span className="font-medium">Website:</span> {ngo.website}
                      </div>
                    </div>

                    <button className="w-full luxury-gradient text-black py-2 px-4 rounded-lg font-medium shadow-lg">
                      Join This NGO
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traveler Stories Section */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-white">Traveler Stories</h2>
              <button 
                onClick={() => setShowStoryForm(true)}
                className="luxury-gradient text-black py-3 px-6 rounded-lg font-semibold shadow-lg"
              >
                Share Your Story
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {travelerStories.map(story => (
                <div key={story.id} className="glass-effect rounded-xl shadow-2xl overflow-hidden card-hover">
                  <div className="relative">
                    <img src={story.image} alt={story.destination} className="w-full h-48 object-cover" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {story.impact}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-white">{story.name}</h3>
                      <span className="text-gray-400 text-sm">{story.date}</span>
                    </div>
                    <p className="text-green-400 text-sm mb-2">{story.destination} • {story.ngo}</p>
                    <p className="text-gray-300 text-sm mb-4">{story.story}</p>
                    <button className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
                      Read Full Story →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Story Submission Form Modal */}
          {showStoryForm && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="glass-effect rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-white">Share Your Cleanup Story</h3>
                  <button 
                    onClick={() => setShowStoryForm(false)}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>

                <form onSubmit={handleStorySubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white mb-2">Your Name</label>
                      <input
                        type="text"
                        value={storyForm.name}
                        onChange={(e) => setStoryForm({...storyForm, name: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2">Email</label>
                      <input
                        type="email"
                        value={storyForm.email}
                        onChange={(e) => setStoryForm({...storyForm, email: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white mb-2">Destination</label>
                      <input
                        type="text"
                        value={storyForm.destination}
                        onChange={(e) => setStoryForm({...storyForm, destination: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                        placeholder="Where did you volunteer?"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2">NGO Partner</label>
                      <select
                        value={storyForm.ngo}
                        onChange={(e) => setStoryForm({...storyForm, ngo: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white"
                        required
                      >
                        <option value="">Select NGO</option>
                        {ngoPartners.map(ngo => (
                          <option key={ngo.id} value={ngo.name}>{ngo.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white mb-2">Your Story</label>
                    <textarea
                      value={storyForm.story}
                      onChange={(e) => setStoryForm({...storyForm, story: e.target.value})}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 h-32"
                      placeholder="Share your cleanup experience, what you learned, and the impact you made..."
                      required
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setShowStoryForm(false)}
                      className="flex-1 px-6 py-3 bg-white/20 text-white rounded-lg font-medium hover:bg-white/30"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 luxury-gradient text-black py-3 px-6 rounded-lg font-semibold shadow-lg"
                    >
                      Submit Story
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="glass-effect rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Make a Difference While Traveling</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our network of responsible travelers and local NGOs to keep India's destinations clean and beautiful. 
              Every cleanup effort counts towards a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="luxury-gradient text-black py-3 px-8 rounded-lg font-semibold text-lg shadow-lg">
                Find Cleanup Events
              </button>
              <button 
                onClick={() => setShowStoryForm(true)}
                className="glass-effect border border-yellow-400/30 text-white py-3 px-8 rounded-lg font-semibold text-lg hover:bg-yellow-400 hover:text-black"
              >
                Share Your Story
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Favorites Page Component
  const FavoritesPage = () => {
    const { favorites, addToFavorites } = useContext(AppContext);
    const favoritePackages = mockPackages.filter(pkg => favorites.includes(pkg.id));

    return (
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Your
              <span className="block luxury-text">Favorites</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your saved travel packages and experiences
            </p>
          </div>

          {favoritePackages.length === 0 ? (
            <div className="text-center py-20">
              <Heart className="w-24 h-24 text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-400 mb-2">No favorites yet</h3>
              <p className="text-gray-500 mb-8">Start exploring and add packages to your favorites!</p>
              <button 
                onClick={() => navigate('packages')}
                className="luxury-gradient text-black py-3 px-8 rounded-lg font-semibold text-lg   shadow-lg"
              >
                Explore Packages
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {favoritePackages.map(pkg => (
                <div key={pkg.id}>
                  <PackageCard
                    pkg={pkg}
                    onAddToFavorites={addToFavorites}
                    onAddToCart={() => {}}
                    isFavorite={true}
                    isInCart={false}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  };

  // Cart Page Component
  const CartPage = () => {
    const { cart, addToCart } = useContext(AppContext);
    const [quantities, setQuantities] = useState({});

    const updateQuantity = (id, quantity) => {
      setQuantities(prev => ({ ...prev, [id]: quantity }));
    };

    const removeFromCart = (id) => {
      // Implementation would remove item from cart
    };

    const total = cart.reduce((sum, item) => {
      const quantity = quantities[item.id] || 1;
      return sum + (item.price * quantity);
    }, 0);

    return (
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Your
              <span className="block luxury-text">Cart</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Review your selected travel packages
            </p>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingCart className="w-24 h-24 text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-400 mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-8">Add some amazing packages to get started!</p>
              <button 
                onClick={() => navigate('packages')}
                className="luxury-gradient text-black py-3 px-8 rounded-lg font-semibold text-lg   shadow-lg"
              >
                Explore Packages
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                {cart.map(item => (
                  <div key={item.id} className="glass-effect rounded-xl p-6 mb-6 card-hover">
                    <div className="flex items-center space-x-4">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                        <p className="text-gray-300 text-sm">{item.category}</p>
                        <div className="flex items-center mt-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          <span className="text-gray-300 text-sm">{item.rating}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold luxury-text">${item.price}</div>
                        <div className="flex items-center space-x-2 mt-2">
                          <button 
                            onClick={() => updateQuantity(item.id, (quantities[item.id] || 1) - 1)}
                            className="w-8 h-8 glass-effect rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black "
                          >
                            -
                          </button>
                          <span className="text-white w-8 text-center">{quantities[item.id] || 1}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, (quantities[item.id] || 1) + 1)}
                            className="w-8 h-8 glass-effect rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-black "
                          >
                            +
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 hover:text-red-300 text-sm mt-2"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-1">
                <div className="glass-effect rounded-xl p-6 sticky top-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Order Summary</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-300">
                      <span>Subtotal</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Tax</span>
                      <span>${(total * 0.1).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Service Fee</span>
                      <span>$25.00</span>
                    </div>
                    <div className="border-t border-gray-600 pt-3">
                      <div className="flex justify-between text-xl font-bold luxury-text">
                        <span>Total</span>
                        <span>${(total * 1.1 + 25).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full luxury-gradient text-black py-3 px-6 rounded-lg font-semibold text-lg   shadow-lg mb-4">
                    Proceed to Checkout
                  </button>
                  <button 
                    onClick={() => navigate('packages')}
                    className="w-full glass-effect border border-yellow-400/30 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black "
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  };

  // Profile Page Component
  const ProfilePage = () => {
    const { user, setUser } = useContext(AppContext);
    const [activeTab, setActiveTab] = useState('profile');

    if (!user) {
      return (
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <User className="w-24 h-24 text-gray-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-400 mb-4">Please log in to view your profile</h2>
            <button 
              onClick={() => navigate('home')}
              className="luxury-gradient text-black py-3 px-8 rounded-lg font-semibold text-lg   shadow-lg"
            >
              Go to Home
            </button>
          </div>
        </section>
      );
    }

    return (
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Your
              <span className="block luxury-text">Profile</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage your account and travel preferences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="glass-effect rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 luxury-gradient rounded-full flex items-center justify-center text-black text-2xl font-bold">
                    {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{user.name || 'User'}</h3>
                    <p className="text-gray-400">{user.email || 'user@example.com'}</p>
                  </div>
                </div>
                <nav className="space-y-2">
                  {[
                    { id: 'profile', label: 'Profile', icon: <User className="w-5 h-5" /> },
                    { id: 'bookings', label: 'My Bookings', icon: <Calendar className="w-5 h-5" /> },
                    { id: 'favorites', label: 'Favorites', icon: <Heart className="w-5 h-5" /> },
                    { id: 'settings', label: 'Settings', icon: <Shield className="w-5 h-5" /> }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg  ${
                        activeTab === tab.id
                          ? 'luxury-gradient text-black'
                          : 'text-gray-300 hover:bg-yellow-400 hover:text-black'
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="glass-effect rounded-xl p-8">
                {activeTab === 'profile' && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">Profile Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Full Name</label>
                        <input
                          type="text"
                          defaultValue={user.name || ''}
                          className="w-full px-4 py-3 bg-white/10 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Email</label>
                        <input
                          type="email"
                          defaultValue={user.email || ''}
                          className="w-full px-4 py-3 bg-white/10 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Phone</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 bg-white/10 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Date of Birth</label>
                        <input
                          type="date"
                          className="w-full px-4 py-3 bg-white/10 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white"
                        />
                      </div>
                    </div>
                    <button className="luxury-gradient text-black py-3 px-8 rounded-lg font-semibold mt-6   shadow-lg">
                      Save Changes
                    </button>
                  </div>
                )}

                {activeTab === 'bookings' && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">My Bookings</h2>
                    <div className="text-center py-12">
                      <Calendar className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                      <p className="text-gray-400">No bookings yet. Start exploring our packages!</p>
                    </div>
                  </div>
                )}

                {activeTab === 'favorites' && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">My Favorites</h2>
                    <div className="text-center py-12">
                      <Heart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                      <p className="text-gray-400">No favorites yet. Add some packages to your favorites!</p>
                    </div>
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">Account Settings</h2>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-white">Email Notifications</h3>
                          <p className="text-gray-400">Receive updates about your bookings and new offers</p>
                        </div>
                        <button className="w-12 h-6 luxury-gradient rounded-full relative">
                          <div className="w-5 h-5 bg-black rounded-full absolute right-0.5 top-0.5"></div>
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-white">SMS Notifications</h3>
                          <p className="text-gray-400">Get important updates via text message</p>
                        </div>
                        <button className="w-12 h-6 bg-gray-600 rounded-full relative">
                          <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-white">Marketing Emails</h3>
                          <p className="text-gray-400">Receive promotional offers and travel tips</p>
                        </div>
                        <button className="w-12 h-6 luxury-gradient rounded-full relative">
                          <div className="w-5 h-5 bg-black rounded-full absolute right-0.5 top-0.5"></div>
                        </button>
                      </div>
                    </div>
                    <button className="luxury-gradient text-black py-3 px-8 rounded-lg font-semibold mt-6   shadow-lg">
                      Save Settings
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Bookings Page Component
  const BookingsPage = () => {
    const { user } = useContext(AppContext);

    if (!user) {
      return (
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Calendar className="w-24 h-24 text-gray-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-400 mb-4">Please log in to view your bookings</h2>
            <button 
              onClick={() => navigate('home')}
              className="luxury-gradient text-black py-3 px-8 rounded-lg font-semibold text-lg   shadow-lg"
            >
              Go to Home
            </button>
          </div>
        </section>
      );
    }

    return (
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              My
              <span className="block luxury-text">Bookings</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage your travel bookings and reservations
            </p>
          </div>

          <div className="text-center py-20">
            <Calendar className="w-24 h-24 text-gray-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-400 mb-2">No bookings yet</h3>
            <p className="text-gray-500 mb-8">Start your travel journey by booking amazing packages!</p>
            <button 
              onClick={() => navigate('packages')}
              className="luxury-gradient text-black py-3 px-8 rounded-lg font-semibold text-lg   shadow-lg"
            >
              Explore Packages
            </button>
          </div>
        </div>
      </section>
    );
  };

// Category Offerings Component for Home Page
const CategoryOfferings = () => {
  const { addToFavorites, addToCart, favorites, cart, navigate } = useContext(AppContext);

  const categoryOfferings = {
    "Luxury Travel": {
      description: "Indulge in opulent experiences with premium accommodations and exclusive services",
      icon: "👑",
      color: "from-yellow-600 to-amber-500",
      heroImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      offerings: [
        "Palace stays and heritage hotels",
        "Private guided tours with expert historians",
        "Luxury train journeys (Maharajas' Express, Palace on Wheels)",
        "VIP access to monuments and cultural sites",
        "Personal butler service and concierge",
        "Fine dining experiences with renowned chefs",
        "Private transportation with chauffeurs",
        "Exclusive cultural performances and events"
      ],
      priceRange: "₹1,50,000 - ₹3,00,000",
      duration: "3-15 days",
      packages: mockPackages.filter(pkg => pkg.category === "Luxury Travel").length
    },
    "Adventure": {
      description: "Challenge yourself with thrilling outdoor activities and mountain expeditions",
      icon: "🏔️",
      color: "from-green-600 to-emerald-500",
      heroImage: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      offerings: [
        "High-altitude trekking and mountaineering",
        "White water rafting and water sports",
        "Wildlife safaris and jungle expeditions",
        "Rock climbing and bouldering adventures",
        "Paragliding and aerial sports",
        "Desert safaris and camel treks",
        "Scuba diving and marine adventures",
        "Expert guides and safety equipment"
      ],
      priceRange: "₹6,000 - ₹40,000",
      duration: "2-15 days",
      packages: mockPackages.filter(pkg => pkg.category === "Adventure").length
    },
    "Bike Trips": {
      description: "Explore India's diverse landscapes on two wheels with guided cycling tours",
      icon: "🏍️",
      color: "from-orange-600 to-red-500",
      heroImage: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      offerings: [
        "Himalayan motorcycle adventures",
        "Coastal road trips and beach rides",
        "Desert expeditions and cultural routes",
        "Premium motorcycle rentals",
        "Expert riding guides and mechanics",
        "Route planning and GPS navigation",
        "Accommodation and meal arrangements",
        "Safety gear and emergency support"
      ],
      priceRange: "₹8,000 - ₹40,000",
      duration: "3-15 days",
      packages: mockPackages.filter(pkg => pkg.category === "Bike Trips").length
    },
    "Spiritual Travel": {
      description: "Embark on sacred journeys to India's most revered pilgrimage destinations",
      icon: "🕉️",
      color: "from-purple-600 to-indigo-500",
      heroImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      offerings: [
        "Char Dham Yatra and sacred circuits",
        "Temple tours and spiritual guidance",
        "Meditation and yoga retreats",
        "Ganga Aarti and religious ceremonies",
        "Ashram stays and spiritual teachings",
        "Pilgrimage planning and logistics",
        "Cultural immersion experiences",
        "Spiritual guides and interpreters"
      ],
      priceRange: "₹5,000 - ₹25,000",
      duration: "3-20 days",
      packages: mockPackages.filter(pkg => pkg.category === "Spiritual Travel").length
    },
    "Budget": {
      description: "Discover amazing destinations without breaking the bank with our affordable packages",
      icon: "💰",
      color: "from-blue-600 to-cyan-500",
      heroImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      offerings: [
        "Hostel and budget accommodation",
        "Local transport and shared vehicles",
        "Street food tours and local cuisine",
        "Free walking tours and activities",
        "Group discounts and shared experiences",
        "Backpacker-friendly itineraries",
        "Local guide services",
        "Budget-friendly cultural experiences"
      ],
      priceRange: "₹5,000 - ₹12,000",
      duration: "2-10 days",
      packages: mockPackages.filter(pkg => pkg.category === "Budget").length
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Travel Offerings
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the comprehensive range of travel experiences and services we provide across different categories
          </p>
        </div>

        {/* Category Sections */}
        <div className="space-y-20">
          {Object.entries(categoryOfferings).map(([category, offering], index) => (
            <div key={category} className={`${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} flex flex-col lg:flex-row items-center gap-12`}>
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center mb-6">
                  <div className="text-6xl mr-4">{offering.icon}</div>
                  <div>
                    <h3 className="text-4xl font-bold text-white mb-3">{category}</h3>
                    <p className="text-xl text-gray-300 leading-relaxed">{offering.description}</p>
                  </div>
                </div>

                {/* Offerings Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {offering.offerings.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Stats and Actions */}
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  {/* Package Stats */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex-1">
                    <h4 className="text-lg font-semibold text-white mb-4">Package Overview</h4>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-white">{offering.packages}</div>
                        <div className="text-sm text-gray-400">Available Packages</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">{offering.duration}</div>
                        <div className="text-sm text-gray-400">Duration Range</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">{offering.priceRange}</div>
                        <div className="text-sm text-gray-400">Price Range</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3 min-w-[200px]">
                    <button
                      onClick={() => {
                        const routeMap = {
                          'Luxury Travel': 'luxury-travel',
                          'Adventure': 'adventure',
                          'Bike Trips': 'bike-trips',
                          'Spiritual Travel': 'spiritual-travel',
                          'Budget': 'budget-trips'
                        };
                        navigate(routeMap[category] || 'packages');
                      }}
                      className={`py-4 px-6 bg-gradient-to-r ${offering.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                    >
                      Explore {category}
                    </button>
                    <button
                      onClick={() => navigate('packages')}
                      className="py-3 px-6 bg-white/20 text-white rounded-lg font-medium hover:bg-white/30 transition-colors"
                    >
                      View All Packages
                    </button>
                  </div>
                </div>
              </div>

              {/* Visual Element */}
              <div className="flex-1 max-w-lg">
                <div className="relative rounded-2xl overflow-hidden">
                  {/* Background Image */}
                  <div 
                    className="w-full h-96 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url('${offering.heroImage}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-8">
                      <div className="text-center mb-6">
                        <div className="text-6xl mb-4 drop-shadow-lg">{offering.icon}</div>
                        <h4 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">Why Choose {category}?</h4>
                      </div>
                      
                      <div className="space-y-3 text-white/90">
                        <div className="flex items-center space-x-2">
                          <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="drop-shadow-md">Expert guidance and support</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="drop-shadow-md">Curated experiences</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="drop-shadow-md">Safety and comfort</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="drop-shadow-md">24/7 customer support</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Additional Services</h3>
            <p className="text-gray-300">Comprehensive travel support for your journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-4xl mb-4">🏨</div>
              <h4 className="text-lg font-semibold text-white mb-2">Accommodation</h4>
              <p className="text-gray-300 text-sm">Luxury hotels, heritage properties, and budget stays</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-4xl mb-4">🚗</div>
              <h4 className="text-lg font-semibold text-white mb-2">Transportation</h4>
              <p className="text-gray-300 text-sm">Private vehicles, luxury trains, and local transport</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-4xl mb-4">🍽️</div>
              <h4 className="text-lg font-semibold text-white mb-2">Dining</h4>
              <p className="text-gray-300 text-sm">Fine dining, local cuisine, and culinary experiences</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-lg font-semibold text-white mb-2">Guides</h4>
              <p className="text-gray-300 text-sm">Expert local guides and cultural interpreters</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Choose from our diverse range of travel experiences and let us create unforgettable memories for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('packages')}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse All Packages
              </button>
              <button
                onClick={() => navigate('hotels')}
                className="px-8 py-4 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Category Page Component
const CategoryPage = ({ category, onViewDetails }) => {
  const { addToFavorites, addToCart, favorites, cart } = useContext(AppContext);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter packages by category
  const categoryPackages = mockPackages.filter(pkg => pkg.category === category);
  
  // Filter packages by search query
  const filteredPackages = categoryPackages.filter(pkg =>
    pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pkg.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pkg.destinations.some(dest => dest.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const categoryDescriptions = {
    "Luxury Travel": "Indulge in opulent experiences with premium accommodations and exclusive services",
    "Adventure": "Challenge yourself with thrilling outdoor activities and mountain expeditions", 
    "Bike Trips": "Explore India's diverse landscapes on two wheels with guided cycling tours",
    "Spiritual Travel": "Embark on sacred journeys to India's most revered pilgrimage destinations",
    "Budget": "Discover amazing destinations without breaking the bank with our affordable packages"
  };

  const categoryColors = {
    "Luxury Travel": "from-yellow-600 to-amber-500",
    "Adventure": "from-green-600 to-emerald-500", 
    "Bike Trips": "from-orange-600 to-red-500",
    "Spiritual Travel": "from-purple-600 to-indigo-500",
    "Budget": "from-blue-600 to-cyan-500"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {category} Packages
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              {categoryDescriptions[category] || "Discover amazing experiences in this category"}
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder={`Search ${category.toLowerCase()} packages...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {filteredPackages.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4">No packages found</h3>
            <p className="text-gray-300 mb-8">
              {searchQuery ? `No ${category.toLowerCase()} packages match your search.` : `No ${category.toLowerCase()} packages available.`}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Search
              </button>
            )}
          </div>
        ) : (
          <>
            {/* Results Count */}
            <div className="mb-8">
              <p className="text-gray-300">
                Showing {filteredPackages.length} {filteredPackages.length === 1 ? 'package' : 'packages'} in {category}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </div>

            {/* Detailed Package Sections */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Explore {category} in Detail
              </h2>
              
              <div className="space-y-16">
                {filteredPackages.map((pkg, index) => (
                  <div key={pkg.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
                    {/* Package Header */}
                    <div className="relative h-64">
                      <img 
                        src={pkg.image} 
                        alt={pkg.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-3xl font-bold text-white mb-2">{pkg.name}</h3>
                            <div className="flex items-center space-x-4 text-white">
                              <span className="flex items-center space-x-1">
                                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span>{pkg.rating}</span>
                              </span>
                              <span>•</span>
                              <span>{pkg.duration}</span>
                              <span>•</span>
                              <span className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm">
                                {pkg.category}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-white mb-2">₹{pkg.price.toLocaleString()}</div>
                            <div className="text-sm text-gray-300">per person</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Package Content */}
                    <div className="p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                          {/* Description */}
                          <div className="mb-8">
                            <h4 className="text-xl font-bold text-white mb-4">About This Package</h4>
                            <p className="text-gray-300 leading-relaxed">{pkg.description}</p>
                          </div>

                          {/* Features */}
                          <div className="mb-8">
                            <h4 className="text-xl font-bold text-white mb-4">What's Included</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {pkg.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center space-x-3">
                                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                  <span className="text-gray-300">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Destinations */}
                          <div className="mb-8">
                            <h4 className="text-xl font-bold text-white mb-4">Destinations</h4>
                            <div className="flex flex-wrap gap-3">
                              {pkg.destinations.map((destination, destIndex) => (
                                <span 
                                  key={destIndex}
                                  className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30"
                                >
                                  {destination}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Sample Itinerary */}
                          <div>
                            <h4 className="text-xl font-bold text-white mb-4">Sample Itinerary</h4>
                            <div className="space-y-4">
                              {pkg.destinations.map((destination, itineraryIndex) => (
                                <div key={itineraryIndex} className="flex items-start space-x-4">
                                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                    {itineraryIndex + 1}
                                  </div>
                                  <div>
                                    <h5 className="text-lg font-semibold text-white">{destination}</h5>
                                    <p className="text-gray-300 text-sm">
                                      {itineraryIndex === 0 ? 'Arrival and check-in' : 
                                       itineraryIndex === pkg.destinations.length - 1 ? 'Departure' : 
                                       'Explore local attractions and activities'}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                          {/* Action Buttons */}
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                            <div className="text-center mb-6">
                              <div className="text-2xl font-bold text-white mb-2">₹{pkg.price.toLocaleString()}</div>
                              <div className="text-sm text-gray-300">per person</div>
                            </div>

                            <div className="space-y-3">
                              <button 
                                onClick={() => addToCart(pkg)}
                                disabled={cart.some(item => item.id === pkg.id)}
                                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                                  cart.some(item => item.id === pkg.id)
                                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                                    : 'bg-blue-600 text-white hover:bg-blue-700'
                                }`}
                              >
                                {cart.some(item => item.id === pkg.id) ? 'Added to Cart' : 'Add to Cart'}
                              </button>

                              <button 
                                onClick={() => addToFavorites(pkg.id)}
                                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                                  favorites.includes(pkg.id)
                                    ? 'bg-red-600 text-white hover:bg-red-700' 
                                    : 'bg-white/20 text-white hover:bg-white/30'
                                }`}
                              >
                                {favorites.includes(pkg.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                              </button>

                              <button 
                                onClick={() => onViewDetails(pkg.id)}
                                className="w-full py-3 px-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                              >
                                View Full Details
                              </button>
                            </div>
                          </div>

                          {/* Package Info */}
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                            <h5 className="text-lg font-semibold text-white mb-4">Package Info</h5>
                            <div className="space-y-3 text-sm text-gray-300">
                              <div className="flex justify-between">
                                <span>Duration:</span>
                                <span>{pkg.duration}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Category:</span>
                                <span className="capitalize">{pkg.category}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Rating:</span>
                                <span className="flex items-center space-x-1">
                                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <span>{pkg.rating}</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Package Detail Page Component
const PackageDetailPage = ({ packageId, onBack }) => {
  const packageData = mockPackages.find(pkg => pkg.id === packageId);
  const { addToFavorites, addToCart, favorites, cart } = useContext(AppContext);
  
  if (!packageData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Package Not Found</h1>
          <button 
            onClick={onBack}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Packages
          </button>
        </div>
      </div>
    );
  }

  const isFavorite = favorites.includes(packageData.id);
  const isInCart = cart.some(item => item.id === packageData.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 p-6">
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors mb-4"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Packages</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 mb-8">
        <img 
          src={packageData.image} 
          alt={packageData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{packageData.name}</h1>
              <div className="flex items-center space-x-4 text-white">
                <span className="flex items-center space-x-1">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>{packageData.rating}</span>
                </span>
                <span>•</span>
                <span>{packageData.duration}</span>
                <span>•</span>
                <span className="capitalize">{packageData.category}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-white mb-2">₹{packageData.price.toLocaleString()}</div>
              <div className="text-sm text-gray-300">per person</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">About This Package</h2>
              <p className="text-gray-300 leading-relaxed">{packageData.description}</p>
            </div>

            {/* Features */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {packageData.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Destinations */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Destinations</h2>
              <div className="flex flex-wrap gap-3">
                {packageData.destinations.map((destination, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30"
                  >
                    {destination}
                  </span>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Sample Itinerary</h2>
              <div className="space-y-4">
                {packageData.destinations.map((destination, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{destination}</h3>
                      <p className="text-gray-300 text-sm">
                        {index === 0 ? 'Arrival and check-in' : 
                         index === packageData.destinations.length - 1 ? 'Departure' : 
                         'Explore local attractions and activities'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Booking Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 sticky top-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-white mb-2">₹{packageData.price.toLocaleString()}</div>
                <div className="text-sm text-gray-300">per person</div>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={() => addToCart(packageData)}
                  disabled={isInCart}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    isInCart 
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isInCart ? 'Added to Cart' : 'Add to Cart'}
                </button>

                <button 
                  onClick={() => addToFavorites(packageData.id)}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    isFavorite 
                      ? 'bg-red-600 text-white hover:bg-red-700' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>

                <button className="w-full py-3 px-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Book Now
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">Package Details</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>{packageData.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Category:</span>
                    <span className="capitalize">{packageData.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rating:</span>
                    <span className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{packageData.rating}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Need Help?</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>support@roadrolls.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const addToFavorites = (packageId) => {
    setFavorites(prev => 
      prev.includes(packageId) 
        ? prev.filter(id => id !== packageId)
        : [...prev, packageId]
    );
  };

  const addToCart = (pkg) => {
    setCart(prev => [...prev, pkg]);
  };

  const viewPackageDetails = (packageId) => {
    setSelectedPackage(packageId);
  };

  const backToPackages = () => {
    setSelectedPackage(null);
  };

  const contextValue = {
    user,
    setUser,
    favorites,
    addToFavorites,
    cart,
    addToCart
  };

    const renderPage = () => {
      // Show package detail page if a package is selected
      if (selectedPackage) {
        return <PackageDetailPage packageId={selectedPackage} onBack={backToPackages} />;
      }

      switch(currentPage) {
        case 'packages':
          return <PackageSelection onViewDetails={viewPackageDetails} />;
        case 'luxury-travel':
          return <CategoryPage category="Luxury Travel" onViewDetails={viewPackageDetails} />;
        case 'adventure':
          return <CategoryPage category="Adventure" onViewDetails={viewPackageDetails} />;
        case 'bike-trips':
          return <CategoryPage category="Bike Trips" onViewDetails={viewPackageDetails} />;
        case 'spiritual-travel':
          return <CategoryPage category="Spiritual Travel" onViewDetails={viewPackageDetails} />;
        case 'budget-trips':
          return <CategoryPage category="Budget" onViewDetails={viewPackageDetails} />;
        case 'hotels':
          return <HotelsPage />;
        case 'transport':
          return <TransportPage />;
        case 'marketplace':
          return <MarketplacePage />;
        case 'cleanliness':
          return <CleanlinessDrivePage />;
        case 'favorites':
          return <FavoritesPage />;
        case 'cart':
          return <CartPage />;
        case 'profile':
          return <ProfilePage />;
        case 'bookings':
          return <BookingsPage />;
        default:
          return (
            <>
              <HeroSection />
              <CategoryOfferings />
              <AIFeatures />
            </>
          );
      }
    };

    return (
      <AppContext.Provider value={contextValue}>
        <div className="min-h-screen dark-gradient">
          <Header />
          {renderPage()}
          <Footer />
          {AIChatbot && <AIChatbot />}
        </div>
    </AppContext.Provider>
  );
};

  // Function to initialize the app
  const initializeApp = () => {
    console.log('Initializing app...');
    
    // Get components from window object
    AuthModal = window.AuthModal;
    BookingModal = window.BookingModal;
    Marketplace = window.Marketplace;
    CleanlinessDrive = window.CleanlinessDrive;
    AIChatbot = window.AIChatbot;
    
    console.log('Components loaded:', {
      AuthModal: !!AuthModal,
      BookingModal: !!BookingModal,
      Marketplace: !!Marketplace,
      CleanlinessDrive: !!CleanlinessDrive,
      AIChatbot: !!AIChatbot
    });
    
    // Render the app even if some components are missing (they'll be undefined)
    try {
ReactDOM.render(<App />, document.getElementById('root'));
      console.log('App rendered successfully');
    } catch (error) {
      console.error('Error rendering app:', error);
    }
  };

  // Global render function
  window.renderApp = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
  };

  // Initialize after a short delay to ensure all scripts are loaded
  setTimeout(initializeApp, 500);
});