const { useState, useEffect } = React;
const { motion } = Motion;
const { 
  Trash2, 
  Heart, 
  Users, 
  MapPin, 
  Calendar, 
  Clock, 
  CheckCircle,
  Leaf,
  Recycle,
  TreePine,
  Waves,
  Mountain,
  Star,
  Award,
  TrendingUp,
  Target,
  Globe
} = LucideReact;

const CleanlinessDrive = () => {
  const { user } = React.useContext(AppContext);
  const [activeTab, setActiveTab] = useState('donate');
  const [donationAmount, setDonationAmount] = useState(0);
  const [selectedDrive, setSelectedDrive] = useState(null);
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);

  // Mock data for cleanliness drives
  const cleanlinessDrives = [
    {
      id: 1,
      title: "Beach Cleanup - Goa",
      location: "Calangute Beach, Goa, India",
      date: "2024-02-15",
      time: "06:00 AM",
      participants: 45,
      maxParticipants: 100,
      description: "Join us for a beach cleanup drive to keep our beautiful beaches clean and protect marine life.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500",
      category: "Beach Cleanup",
      impact: "500kg waste collected",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Forest Restoration - Rishikesh",
      location: "Rajaji National Park, Rishikesh, India",
      date: "2024-02-20",
      time: "07:00 AM",
      participants: 32,
      maxParticipants: 50,
      description: "Help restore the forest ecosystem by planting trees and cleaning hiking trails.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500",
      category: "Forest Restoration",
      impact: "200 trees planted",
      status: "upcoming"
    },
    {
      id: 3,
      title: "River Cleanup - Varanasi",
      location: "Ganges River, Varanasi, India",
      date: "2024-02-10",
      time: "05:30 AM",
      participants: 78,
      maxParticipants: 80,
      description: "Clean the sacred Ganges River and raise awareness about water pollution.",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500",
      category: "River Cleanup",
      impact: "1.2 tons waste removed",
      status: "completed"
    },
    {
      id: 4,
      title: "City Cleanup - Mumbai",
      location: "Marine Drive, Mumbai, India",
      date: "2024-02-25",
      time: "06:30 AM",
      participants: 0,
      maxParticipants: 150,
      description: "Clean up the iconic Marine Drive and promote responsible tourism.",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500",
      category: "City Cleanup",
      impact: "Target: 1 ton waste",
      status: "upcoming"
    }
  ];

  // Mock impact statistics
  const impactStats = {
    totalDonations: 125000,
    totalVolunteers: 1250,
    areasCleaned: 45,
    wasteCollected: 12.5, // tons
    treesPlanted: 2500,
    drivesCompleted: 28
  };

  const donationAmounts = [10, 25, 50, 100, 250, 500];

  const DriveCard = ({ drive }) => {
    const isUpcoming = drive.status === 'upcoming';
    const isCompleted = drive.status === 'completed';
    const isFull = drive.participants >= drive.maxParticipants;

    return (
      <motion.div
        className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative">
          <img 
            src={drive.image} 
            alt={drive.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              isCompleted ? 'bg-green-100 text-green-800' :
              isUpcoming ? 'bg-blue-100 text-blue-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {drive.category}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              isCompleted ? 'bg-green-500 text-white' :
              isUpcoming ? 'bg-blue-500 text-white' :
              'bg-gray-500 text-white'
            }`}>
              {isCompleted ? 'Completed' : isUpcoming ? 'Upcoming' : 'Ongoing'}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{drive.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{drive.description}</p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{drive.location}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{new Date(drive.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-2" />
              <span>{drive.time}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Users className="w-4 h-4 mr-2" />
              <span>{drive.participants}/{drive.maxParticipants} participants</span>
            </div>
          </div>

          <div className="bg-green-50 p-3 rounded-lg mb-4">
            <div className="flex items-center text-green-800">
              <Leaf className="w-4 h-4 mr-2" />
              <span className="font-medium">Impact: {drive.impact}</span>
            </div>
          </div>

          {isUpcoming && (
            <button
              onClick={() => {
                setSelectedDrive(drive);
                setShowVolunteerModal(true);
              }}
              disabled={isFull}
              className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                isFull
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {isFull ? 'Drive Full' : 'Join as Volunteer'}
            </button>
          )}

          {isCompleted && (
            <div className="flex items-center justify-center text-green-600 font-medium">
              <CheckCircle className="w-5 h-5 mr-2" />
              Successfully Completed
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  const VolunteerModal = () => {
    const [formData, setFormData] = useState({
      name: user?.firstName + ' ' + user?.lastName || '',
      email: user?.email || '',
      phone: user?.phone || '',
      experience: '',
      motivation: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      // Simulate volunteer registration
      alert('Thank you for volunteering! You will receive confirmation details via email.');
      setShowVolunteerModal(false);
    };

    if (!showVolunteerModal) return null;

    return (
      <motion.div
        className="fixed inset-0 z-50 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setShowVolunteerModal(false)}></div>

          <motion.div
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Join as Volunteer
              </h3>
              <p className="text-gray-600 mb-6">
                {selectedDrive?.title} - {selectedDrive?.date}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Previous Experience
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select experience level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="experienced">Experienced</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Why do you want to volunteer?
                  </label>
                  <textarea
                    value={formData.motivation}
                    onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us about your motivation..."
                  />
                </div>

                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowVolunteerModal(false)}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700"
                  >
                    Join Drive
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
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
              Cleanliness
              <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Drive Initiative
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hands with us to keep our planet clean and beautiful for future generations
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit mx-auto">
            <button
              onClick={() => setActiveTab('donate')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'donate'
                  ? 'bg-white text-green-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Donate
            </button>
            <button
              onClick={() => setActiveTab('volunteer')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'volunteer'
                  ? 'bg-white text-green-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Volunteer
            </button>
            <button
              onClick={() => setActiveTab('impact')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'impact'
                  ? 'bg-white text-green-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Impact
            </button>
          </div>
        </div>

        {/* Donation Tab */}
        {activeTab === 'donate' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Support Our Cleanliness Initiative
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Choose Donation Amount
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {donationAmounts.map(amount => (
                      <button
                        key={amount}
                        onClick={() => setDonationAmount(amount)}
                        className={`p-4 border-2 rounded-lg font-medium transition-colors ${
                          donationAmount === amount
                            ? 'border-green-500 bg-green-50 text-green-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Custom Amount
                  </label>
                  <input
                    type="number"
                    value={donationAmount || ''}
                    onChange={(e) => setDonationAmount(parseInt(e.target.value) || 0)}
                    placeholder="Enter amount"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">How your donation helps:</h3>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• $10 - Provides cleaning supplies for 1 volunteer</li>
                    <li>• $25 - Plants 5 trees in restoration projects</li>
                    <li>• $50 - Organizes 1 beach cleanup event</li>
                    <li>• $100 - Supports 1 week of environmental education</li>
                  </ul>
                </div>

                <button
                  onClick={() => alert('Thank you for your donation! You will be redirected to payment.')}
                  disabled={donationAmount <= 0}
                  className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Donate ${donationAmount || 0}
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Volunteer Tab */}
        {activeTab === 'volunteer' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cleanlinessDrives.map((drive, index) => (
                <motion.div
                  key={drive.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <DriveCard drive={drive} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Impact Tab */}
        {activeTab === 'impact' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">${impactStats.totalDonations.toLocaleString()}</h3>
                <p className="text-gray-600">Total Donations Raised</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{impactStats.totalVolunteers.toLocaleString()}</h3>
                <p className="text-gray-600">Volunteers Participated</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{impactStats.areasCleaned}</h3>
                <p className="text-gray-600">Areas Cleaned</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trash2 className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{impactStats.wasteCollected} tons</h3>
                <p className="text-gray-600">Waste Collected</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{impactStats.treesPlanted.toLocaleString()}</h3>
                <p className="text-gray-600">Trees Planted</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{impactStats.drivesCompleted}</h3>
                <p className="text-gray-600">Drives Completed</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Impact Story</h3>
              <div className="prose max-w-none">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Since launching our Cleanliness Drive Initiative, we have made a significant impact on environmental conservation 
                  and community engagement. Our volunteers have worked tirelessly across multiple locations, from pristine beaches 
                  to urban centers, making a tangible difference in keeping our planet clean.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mt-4">
                  Through strategic partnerships with local communities and environmental organizations, we've not only cleaned 
                  up existing waste but also educated thousands of people about sustainable practices and responsible tourism. 
                  Every donation and every volunteer hour contributes to a cleaner, healthier future for all.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        <VolunteerModal />
      </div>
    </div>
  );
};

// Export for use in other components
window.CleanlinessDrive = CleanlinessDrive;
