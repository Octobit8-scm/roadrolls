const { useState, useEffect, useRef } = React;
const { motion, AnimatePresence } = Motion;
const { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles,
  Plane,
  Hotel,
  Car,
  MapPin,
  Calendar,
  Users,
  DollarSign,
  Star,
  Heart,
  Clock
} = window.AppIcons || {};

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message
      setTimeout(() => {
        addMessage('bot', "Hello! I'm your AI travel assistant. I can help you find the perfect travel packages, answer questions about destinations, assist with bookings, and provide personalized recommendations. How can I help you today?");
      }, 500);
    }
  }, [isOpen]);

  const addMessage = (sender, text, options = {}) => {
    const newMessage = {
      id: Date.now(),
      sender,
      text,
      timestamp: new Date(),
      ...options
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const getAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Simple keyword-based responses (in a real app, this would connect to an AI service)
    if (message.includes('hello') || message.includes('hi')) {
      return "Hello! I'm excited to help you plan your next adventure. What type of travel experience are you looking for?";
    }
    
    if (message.includes('luxury') || message.includes('premium')) {
      return "Great choice! I can recommend some amazing luxury travel packages. We have 5-star hotels, private transport, and exclusive experiences. Would you like to see our luxury packages for Europe, Asia, or any specific destination?";
    }
    
    if (message.includes('adventure') || message.includes('hiking') || message.includes('trekking')) {
      return "Adventure awaits! I can suggest thrilling trekking expeditions, jungle safaris, and outdoor adventures. Are you interested in mountain trekking, wildlife safaris, or water sports?";
    }
    
    if (message.includes('budget') || message.includes('cheap') || message.includes('affordable')) {
      return "Perfect! I have some excellent budget-friendly options that don't compromise on experience. We offer hostel stays, shared transport, and free walking tours. What's your budget range?";
    }
    
    if (message.includes('spiritual') || message.includes('meditation') || message.includes('yoga')) {
      return "A spiritual journey can be truly transformative. I can recommend meditation retreats, temple visits, and pilgrimage tours. Are you interested in destinations like Rishikesh, Varanasi, or perhaps a meditation retreat?";
    }
    
    if (message.includes('corporate') || message.includes('business')) {
      return "I understand you need business travel solutions. We offer corporate packages with business-class flights, conference facilities, and professional services. What's your business travel destination and requirements?";
    }
    
    if (message.includes('group') || message.includes('friends') || message.includes('family')) {
      return "Group travel is so much fun! I can help you find group discounts, shared accommodations, and activities perfect for families or friends. How many people are in your group?";
    }
    
    if (message.includes('bike') || message.includes('motorcycle') || message.includes('cycling')) {
      return "Two-wheeled adventures are amazing! I can suggest guided bike tours, motorcycle rentals, and scenic cycling routes. Are you looking for mountain biking, road cycling, or motorcycle touring?";
    }
    
    if (message.includes('europe') || message.includes('european')) {
      return "Europe is a fantastic destination! I can recommend packages for cities like Paris, Rome, Amsterdam, or scenic routes through the Alps. What type of European experience interests you most?";
    }
    
    if (message.includes('asia') || message.includes('asian')) {
      return "Asia offers incredible diversity! From the beaches of Thailand to the mountains of Nepal, or the temples of India. Which Asian country or experience are you most curious about?";
    }
    
    if (message.includes('india') || message.includes('indian')) {
      return "India is a land of incredible diversity! I can suggest spiritual journeys to Varanasi, adventure in the Himalayas, luxury in Rajasthan, or cultural experiences in Kerala. What aspect of India interests you?";
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('expensive')) {
      return "I'd be happy to help you find options within your budget! Our packages range from budget-friendly to luxury. What's your approximate budget per person, and I can suggest the best options?";
    }
    
    if (message.includes('booking') || message.includes('book') || message.includes('reserve')) {
      return "I can help you with the booking process! I can assist with package selection, accommodation, transport, and even add travel accessories. Would you like to start with a specific package or destination?";
    }
    
    if (message.includes('hotel') || message.includes('accommodation') || message.includes('stay')) {
      return "I can help you find the perfect accommodation! We partner with hotels worldwide and offer everything from budget hostels to luxury resorts. What type of accommodation and location are you looking for?";
    }
    
    if (message.includes('transport') || message.includes('flight') || message.includes('train') || message.includes('bus')) {
      return "Transportation is key to a great trip! I can help you find flights, trains, buses, or car rentals. What's your preferred mode of transport and destination?";
    }
    
    if (message.includes('marketplace') || message.includes('shop') || message.includes('buy') || message.includes('accessories')) {
      return "Our marketplace has amazing travel accessories and local products! From hiking gear to luxury items, spiritual tools to corporate accessories. What type of products are you looking for?";
    }
    
    if (message.includes('cleanliness') || message.includes('volunteer') || message.includes('donate')) {
      return "I'm proud of our Cleanliness Drive Initiative! You can donate to support environmental projects or volunteer for cleanup drives. Would you like to learn more about our impact or join a volunteer program?";
    }
    
    if (message.includes('recommendation') || message.includes('suggest') || message.includes('recommend')) {
      return "I'd love to give you personalized recommendations! Based on your preferences, I can suggest the perfect packages. Tell me about your travel style, interests, and budget, and I'll create a tailored suggestion!";
    }
    
    if (message.includes('weather') || message.includes('climate')) {
      return "Weather is important for planning! I can provide climate information for your destination and suggest the best time to visit. Which destination are you curious about?";
    }
    
    if (message.includes('visa') || message.includes('passport') || message.includes('document')) {
      return "Travel documents are crucial! I can provide general guidance on visa requirements and documentation. For specific details, I recommend checking with the embassy of your destination country.";
    }
    
    if (message.includes('insurance') || message.includes('safety') || message.includes('security')) {
      return "Safety first! We offer travel insurance options and can provide safety tips for your destination. Would you like to know more about our insurance packages or safety recommendations?";
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're very welcome! I'm here to help make your travel dreams come true. Is there anything else I can assist you with?";
    }
    
    if (message.includes('bye') || message.includes('goodbye') || message.includes('see you')) {
      return "Goodbye! Have a wonderful day and happy travels! Feel free to come back anytime if you need help planning your next adventure. Safe travels! ✈️";
    }
    
    // Default response
    return "That's interesting! I'm here to help you with all your travel needs. I can assist with finding packages, accommodations, transport, travel accessories, or answer questions about destinations. Could you tell me more about what you're looking for?";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage.trim();
    addMessage('user', userMessage);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = getAIResponse(userMessage);
      setIsTyping(false);
      addMessage('bot', aiResponse);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    { text: "Show me luxury packages", icon: Star },
    { text: "I need budget options", icon: DollarSign },
    { text: "Adventure recommendations", icon: Mountain },
    { text: "Help with booking", icon: Calendar },
    { text: "Travel accessories", icon: Heart },
    { text: "Cleanliness drive info", icon: Trash2 }
  ];

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-xl shadow-2xl z-50 flex flex-col"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-xl">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Travel Assistant</h3>
                  <p className="text-sm text-blue-100">Always here to help</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {message.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className={`px-4 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length <= 1 && (
              <div className="p-4 border-t">
                <p className="text-sm text-gray-600 mb-2">Quick actions:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setInputMessage(action.text);
                        handleSendMessage();
                      }}
                      className="flex items-center space-x-2 p-2 text-xs bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <action.icon className="w-3 h-3" />
                      <span className="truncate">{action.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Export for use in other components
window.AIChatbot = AIChatbot;
