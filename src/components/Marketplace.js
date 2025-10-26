const { useState, useEffect } = React;
const { motion } = Motion;
const { 
  ShoppingCart, 
  Heart, 
  Star, 
  Search, 
  Filter, 
  MapPin, 
  Truck, 
  Package,
  Gift,
  ShoppingBag,
  Tag,
  Clock
} = window.AppIcons || {};

const Marketplace = () => {
  const { addToCart, favorites, addToFavorites } = React.useContext(window.AppContext);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);

  // Mock product data
  const mockProducts = [
    {
      id: 1,
      name: "Handwoven Silk Scarf",
      category: "Luxury",
      price: 89,
      originalPrice: 120,
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1601925260369-0c0a4b0a5a0a?w=400",
      description: "Beautiful handwoven silk scarf from local artisans",
      vendor: "Artisan Crafts Co.",
      location: "Varanasi, India",
      inStock: true,
      deliveryTime: "3-5 days"
    },
    {
      id: 2,
      name: "Hiking Backpack 40L",
      category: "Adventure",
      price: 129,
      originalPrice: 180,
      rating: 4.6,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      description: "Durable hiking backpack perfect for outdoor adventures",
      vendor: "Outdoor Gear Pro",
      location: "Kathmandu, Nepal",
      inStock: true,
      deliveryTime: "2-3 days"
    },
    {
      id: 3,
      name: "Meditation Cushion Set",
      category: "Spiritual",
      price: 45,
      originalPrice: 65,
      rating: 4.9,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
      description: "Comfortable meditation cushions for spiritual practices",
      vendor: "Zen Living",
      location: "Rishikesh, India",
      inStock: true,
      deliveryTime: "4-6 days"
    },
    {
      id: 4,
      name: "Motorcycle Helmet",
      category: "Bike Trips",
      price: 199,
      originalPrice: 280,
      rating: 4.7,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400",
      description: "High-quality motorcycle helmet with safety certification",
      vendor: "Bike Safety Co.",
      location: "Bangkok, Thailand",
      inStock: true,
      deliveryTime: "5-7 days"
    },
    {
      id: 5,
      name: "Corporate Travel Adapter",
      category: "Corporate",
      price: 25,
      originalPrice: 35,
      rating: 4.5,
      reviews: 123,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
      description: "Universal travel adapter for business travelers",
      vendor: "Tech Travel Solutions",
      location: "Singapore",
      inStock: true,
      deliveryTime: "1-2 days"
    },
    {
      id: 6,
      name: "Budget Travel Guide Book",
      category: "Budget",
      price: 15,
      originalPrice: 25,
      rating: 4.4,
      reviews: 78,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400",
      description: "Comprehensive guide for budget travelers",
      vendor: "Travel Books Inc.",
      location: "Prague, Czech Republic",
      inStock: true,
      deliveryTime: "3-4 days"
    },
    {
      id: 7,
      name: "Group Travel T-Shirts",
      category: "Group Travel",
      price: 12,
      originalPrice: 18,
      rating: 4.3,
      reviews: 45,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      description: "Custom group travel t-shirts for team bonding",
      vendor: "Group Gear",
      location: "Amsterdam, Netherlands",
      inStock: true,
      deliveryTime: "2-3 days"
    },
    {
      id: 8,
      name: "Luxury Leather Travel Bag",
      category: "Luxury",
      price: 299,
      originalPrice: 450,
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      description: "Premium leather travel bag for luxury travelers",
      vendor: "Luxury Travel Co.",
      location: "Milan, Italy",
      inStock: false,
      deliveryTime: "7-10 days"
    }
  ];

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  const categories = ['All', 'Luxury', 'Adventure', 'Spiritual', 'Bike Trips', 'Corporate', 'Budget', 'Group Travel'];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      default:
        return b.reviews - a.reviews; // popular
    }
  });

  const ProductCard = ({ product }) => {
    const isFavorite = favorites.includes(product.id);
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    return (
      <motion.div
        className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          {discount > 0 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
              -{discount}%
            </div>
          )}
          <button
            onClick={() => addToFavorites(product.id)}
            className={`absolute top-2 right-2 p-2 rounded-full ${
              isFavorite ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:bg-red-50'
            }`}
          >
            <Heart className="w-4 h-4" />
          </button>
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="bg-white text-black px-3 py-1 rounded-full font-medium">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
              {product.category}
            </span>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
              <span className="ml-1 text-sm text-gray-500">({product.reviews})</span>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>

          <div className="flex items-center text-sm text-gray-500 mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{product.location}</span>
          </div>

          <div className="flex items-center text-sm text-gray-500 mb-3">
            <Clock className="w-4 h-4 mr-1" />
            <span>Delivery: {product.deliveryTime}</span>
          </div>

          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-2xl font-bold text-gray-900">${product.price}</span>
              {product.originalPrice > product.price && (
                <span className="ml-2 text-lg text-gray-500 line-through">${product.originalPrice}</span>
              )}
            </div>
            <div className="text-sm text-gray-500">
              by {product.vendor}
            </div>
          </div>

          <button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
              product.inStock
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Travel
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Marketplace
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover unique products, accessories, and local crafts from around the world
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Export for use in other components
window.Marketplace = Marketplace;
