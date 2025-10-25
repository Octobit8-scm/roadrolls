const { useState, useEffect } = React;
const { motion, AnimatePresence } = Motion;
const { X, Calendar, Users, CreditCard, MapPin, Clock, CheckCircle, Plane, Hotel, Car } = LucideReact;

const BookingModal = ({ isOpen, onClose, package: pkg }) => {
  const { user, addToCart } = React.useContext(AppContext);
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    travelers: 1,
    startDate: '',
    endDate: '',
    rooms: 1,
    transportType: 'flight',
    mealPlan: 'breakfast',
    specialRequests: '',
    contactInfo: {
      email: user?.email || '',
      phone: user?.phone || '',
      firstName: user?.firstName || '',
      lastName: user?.lastName || ''
    }
  });
  const [isLoading, setIsLoading] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setBookingComplete(false);
      setBookingData(prev => ({
        ...prev,
        contactInfo: {
          email: user?.email || '',
          phone: user?.phone || '',
          firstName: user?.firstName || '',
          lastName: user?.lastName || ''
        }
      }));
    }
  }, [isOpen, user]);

  const handleInputChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setBookingData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setBookingData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const calculateTotal = () => {
    const basePrice = pkg?.price || 0;
    const travelers = bookingData.travelers || 1;
    const rooms = bookingData.rooms || 1;
    const nights = bookingData.startDate && bookingData.endDate ? 
      Math.ceil((new Date(bookingData.endDate) - new Date(bookingData.startDate)) / (1000 * 60 * 60 * 24)) : 1;
    
    let total = basePrice * travelers;
    
    // Add room costs (assuming $100 per room per night)
    total += rooms * 100 * nights;
    
    // Add transport costs based on type
    const transportCosts = {
      flight: 300,
      train: 150,
      bus: 80,
      car: 200
    };
    total += (transportCosts[bookingData.transportType] || 0) * travelers;
    
    return total;
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleBooking = async () => {
    setIsLoading(true);
    
    // Simulate booking process
    setTimeout(() => {
      const booking = {
        id: Date.now(),
        package: pkg,
        ...bookingData,
        total: calculateTotal(),
        status: 'confirmed',
        bookingDate: new Date().toISOString()
      };
      
      addToCart(booking);
      setBookingComplete(true);
      setIsLoading(false);
    }, 2000);
  };

  if (!isOpen || !pkg) return null;

  const steps = [
    { number: 1, title: 'Travel Details', icon: Calendar },
    { number: 2, title: 'Accommodation', icon: Hotel },
    { number: 3, title: 'Transport', icon: Plane },
    { number: 4, title: 'Review & Pay', icon: CreditCard }
  ];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>

          <motion.div
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Book Your Trip</h3>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Progress Steps */}
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  {steps.map((stepItem, index) => {
                    const Icon = stepItem.icon;
                    const isActive = step === stepItem.number;
                    const isCompleted = step > stepItem.number;
                    
                    return (
                      <div key={stepItem.number} className="flex items-center">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                          isActive ? 'border-blue-600 bg-blue-600 text-white' :
                          isCompleted ? 'border-green-500 bg-green-500 text-white' :
                          'border-gray-300 bg-white text-gray-500'
                        }`}>
                          {isCompleted ? (
                            <CheckCircle className="w-5 h-5" />
                          ) : (
                            <Icon className="w-5 h-5" />
                          )}
                        </div>
                        <span className={`ml-2 text-sm font-medium ${
                          isActive ? 'text-blue-600' : isCompleted ? 'text-green-600' : 'text-gray-500'
                        }`}>
                          {stepItem.title}
                        </span>
                        {index < steps.length - 1 && (
                          <div className={`w-16 h-0.5 mx-4 ${
                            isCompleted ? 'bg-green-500' : 'bg-gray-300'
                          }`} />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {!bookingComplete ? (
                <div className="space-y-6">
                  {/* Step 1: Travel Details */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-semibold text-gray-900">Travel Details</h4>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Number of Travelers
                          </label>
                          <div className="relative">
                            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="number"
                              min="1"
                              max="10"
                              value={bookingData.travelers}
                              onChange={(e) => handleInputChange('travelers', parseInt(e.target.value))}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Duration (days)
                          </label>
                          <div className="relative">
                            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="number"
                              min="1"
                              value={pkg.duration.replace(' days', '')}
                              readOnly
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Start Date
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="date"
                              value={bookingData.startDate}
                              onChange={(e) => handleInputChange('startDate', e.target.value)}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            End Date
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="date"
                              value={bookingData.endDate}
                              onChange={(e) => handleInputChange('endDate', e.target.value)}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Accommodation */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-semibold text-gray-900">Accommodation</h4>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Number of Rooms
                        </label>
                        <div className="relative">
                          <Hotel className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="number"
                            min="1"
                            max="5"
                            value={bookingData.rooms}
                            onChange={(e) => handleInputChange('rooms', parseInt(e.target.value))}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Meal Plan
                        </label>
                        <select
                          value={bookingData.mealPlan}
                          onChange={(e) => handleInputChange('mealPlan', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="breakfast">Breakfast Only</option>
                          <option value="half-board">Half Board (Breakfast + Dinner)</option>
                          <option value="full-board">Full Board (All Meals)</option>
                          <option value="all-inclusive">All Inclusive</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Transport */}
                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-semibold text-gray-900">Transportation</h4>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Transport Type
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            { value: 'flight', label: 'Flight', icon: Plane },
                            { value: 'train', label: 'Train', icon: Train },
                            { value: 'bus', label: 'Bus', icon: Bus },
                            { value: 'car', label: 'Car Rental', icon: Car }
                          ].map(({ value, label, icon: Icon }) => (
                            <button
                              key={value}
                              onClick={() => handleInputChange('transportType', value)}
                              className={`p-4 border-2 rounded-lg flex items-center space-x-3 transition-colors ${
                                bookingData.transportType === value
                                  ? 'border-blue-500 bg-blue-50'
                                  : 'border-gray-300 hover:border-gray-400'
                              }`}
                            >
                              <Icon className="w-6 h-6" />
                              <span className="font-medium">{label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Review & Pay */}
                  {step === 4 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-semibold text-gray-900">Review & Payment</h4>
                      
                      {/* Contact Information */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            First Name
                          </label>
                          <input
                            type="text"
                            value={bookingData.contactInfo.firstName}
                            onChange={(e) => handleInputChange('contactInfo.firstName', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name
                          </label>
                          <input
                            type="text"
                            value={bookingData.contactInfo.lastName}
                            onChange={(e) => handleInputChange('contactInfo.lastName', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                          </label>
                          <input
                            type="email"
                            value={bookingData.contactInfo.email}
                            onChange={(e) => handleInputChange('contactInfo.email', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone
                          </label>
                          <input
                            type="tel"
                            value={bookingData.contactInfo.phone}
                            onChange={(e) => handleInputChange('contactInfo.phone', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Special Requests
                        </label>
                        <textarea
                          value={bookingData.specialRequests}
                          onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                          rows="3"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Any special requirements or requests..."
                        />
                      </div>

                      {/* Booking Summary */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">Booking Summary</h5>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Package ({pkg.name})</span>
                            <span>${pkg.price} × {bookingData.travelers}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Accommodation</span>
                            <span>${100} × {bookingData.rooms} × {bookingData.startDate && bookingData.endDate ? 
                              Math.ceil((new Date(bookingData.endDate) - new Date(bookingData.startDate)) / (1000 * 60 * 60 * 24)) : 1} nights</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Transport ({bookingData.transportType})</span>
                            <span>${bookingData.transportType === 'flight' ? 300 : bookingData.transportType === 'train' ? 150 : bookingData.transportType === 'bus' ? 80 : 200} × {bookingData.travelers}</span>
                          </div>
                          <div className="border-t pt-2 flex justify-between font-semibold">
                            <span>Total</span>
                            <span>${calculateTotal()}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6">
                    <button
                      onClick={handlePrevious}
                      disabled={step === 1}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                    
                    {step < 4 ? (
                      <button
                        onClick={handleNext}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        onClick={handleBooking}
                        disabled={isLoading}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Processing...
                          </div>
                        ) : (
                          'Complete Booking'
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                /* Booking Complete */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h4>
                  <p className="text-gray-600 mb-6">
                    Your trip has been successfully booked. You'll receive a confirmation email shortly.
                  </p>
                  <div className="space-y-2">
                    <button
                      onClick={onClose}
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// Export for use in other components
window.BookingModal = BookingModal;
