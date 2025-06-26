import React, { useState } from "react";

const BookVisit = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    visitDate: "",
    visitTime: "",
    tourType: "",
    groupSize: 1,
    specialRequests: "",
    agreeToTerms: false
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const tourTypes = [
    {
      id: "general",
      name: "General Farm Tour",
      duration: "2 hours",
      price: "$15/person",
      description: "Explore our crops, meet our animals, and learn about sustainable farming practices."
    },
    {
      id: "educational",
      name: "Educational Tour",
      duration: "3 hours",
      price: "$25/person",
      description: "Perfect for schools and groups. Includes hands-on activities and detailed farming education."
    },
    {
      id: "harvest",
      name: "Harvest Experience",
      duration: "4 hours",
      price: "$35/person",
      description: "Pick your own produce, participate in harvest activities, and take home fresh goods."
    },
    {
      id: "private",
      name: "Private Group Tour",
      duration: "Flexible",
      price: "Contact for pricing",
      description: "Customized experience for private groups, corporate events, or special occasions."
    }
  ];

  const timeSlots = [
    "9:00 AM",
    "10:30 AM",
    "1:00 PM",
    "2:30 PM",
    "4:00 PM"
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.visitDate) newErrors.visitDate = "Visit date is required";
    if (!formData.visitTime) newErrors.visitTime = "Visit time is required";
    if (!formData.tourType) newErrors.tourType = "Please select a tour type";
    if (formData.groupSize < 1) newErrors.groupSize = "Group size must be at least 1";
    if (!formData.agreeToTerms) newErrors.agreeToTerms = "Please agree to the terms";
    
    // Check if date is in the future
    if (formData.visitDate) {
      const selectedDate = new Date(formData.visitDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.visitDate = "Please select a future date";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Here you would typically send the data to your backend
      console.log("Booking submitted:", formData);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          visitDate: "",
          visitTime: "",
          tourType: "",
          groupSize: 1,
          specialRequests: "",
          agreeToTerms: false
        });
      }, 5000);
    }
  };

  const selectedTour = tourTypes.find(tour => tour.id === formData.tourType);

  // Get tomorrow's date as minimum date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-check text-green-600 text-2xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for booking your farm visit. We'll send you a confirmation email shortly with all the details.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 text-left">
            <h3 className="font-semibold text-gray-900 mb-2">Visit Details:</h3>
            <p className="text-sm text-gray-600">
              <strong>Date:</strong> {new Date(formData.visitDate).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Time:</strong> {formData.visitTime}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Tour:</strong> {selectedTour?.name}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Group Size:</strong> {formData.groupSize} {formData.groupSize === 1 ? 'person' : 'people'}
            </p>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition duration-300">
            Book Another Visit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Book Your Farm Visit
            </h1>
            <p className="mt-4 text-xl text-green-100 max-w-3xl mx-auto">
              Experience sustainable farming firsthand. Choose from our guided tours and immersive experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Tour Options Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tour Options</h2>
              <div className="space-y-4">
                {tourTypes.map((tour) => (
                  <div
                    key={tour.id}
                    className={`border rounded-lg p-4 cursor-pointer transition duration-200 ${
                      formData.tourType === tour.id
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, tourType: tour.id }))}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">{tour.name}</h3>
                      <input
                        type="radio"
                        name="tourType"
                        value={tour.id}
                        checked={formData.tourType === tour.id}
                        onChange={handleInputChange}
                        className="text-green-600"
                      />
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{tour.description}</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duration: {tour.duration}</span>
                      <span className="font-semibold text-green-600">{tour.price}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Questions?</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Call us at (555) 123-4567 or email info@greenacresfarm.com
                </p>
                <p className="text-xs text-gray-500">
                  Available Monday-Friday: 8am-5pm
                </p>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2 mt-8 lg:mt-0">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Booking Information</h2>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                  </div>
                </div>

                {/* Visit Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="visitDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="visitDate"
                      name="visitDate"
                      value={formData.visitDate}
                      onChange={handleInputChange}
                      min={minDate}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                        errors.visitDate ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.visitDate && <p className="mt-1 text-sm text-red-600">{errors.visitDate}</p>}
                  </div>

                  <div>
                    <label htmlFor="visitTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      id="visitTime"
                      name="visitTime"
                      value={formData.visitTime}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                        errors.visitTime ? 'border-red-500' : 'border-gray-300'
                      }`}>
                      <option value="">Select a time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                    {errors.visitTime && <p className="mt-1 text-sm text-red-600">{errors.visitTime}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="groupSize" className="block text-sm font-medium text-gray-700 mb-2">
                    Group Size *
                  </label>
                  <input
                    type="number"
                    id="groupSize"
                    name="groupSize"
                    value={formData.groupSize}
                    onChange={handleInputChange}
                    min="1"
                    max="50"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.groupSize ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.groupSize && <p className="mt-1 text-sm text-red-600">{errors.groupSize}</p>}
                  <p className="mt-1 text-sm text-gray-500">Maximum group size is 50 people</p>
                </div>

                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests or Dietary Requirements
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    rows="4"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Let us know about any special accommodations, accessibility needs, or dietary restrictions..."
                  ></textarea>
                </div>

                {/* Selected Tour Summary */}
                {selectedTour && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-semibold text-green-900 mb-2">Selected Tour</h3>
                    <div className="text-sm text-green-800">
                      <p><strong>{selectedTour.name}</strong></p>
                      <p>Duration: {selectedTour.duration}</p>
                      <p>Price: {selectedTour.price}</p>
                      {formData.groupSize > 0 && selectedTour.price.includes('$') && (
                        <p className="mt-2 font-semibold">
                          Estimated Total: ${(parseInt(selectedTour.price.replace(/[^0-9]/g, '')) * formData.groupSize).toFixed(2)}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Terms and Conditions */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="mt-1 text-green-600 focus:ring-green-500"
                  />
                  <label htmlFor="agreeToTerms" className="ml-3 text-sm text-gray-700">
                    I agree to the{' '}
                    <a href="#" className="text-green-600 hover:text-green-500 underline">
                      terms and conditions
                    </a>{' '}
                    and understand that visits may be cancelled due to weather conditions. *
                  </label>
                </div>
                {errors.agreeToTerms && <p className="text-sm text-red-600">{errors.agreeToTerms}</p>}

                {errors.tourType && <p className="text-sm text-red-600">{errors.tourType}</p>}

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition duration-300 shadow-md">
                    Book Your Visit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Important Information */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Important Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-blue-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Arrival Time</h3>
              <p className="text-gray-600 text-sm">
                Please arrive 15 minutes before your scheduled tour time for check-in.
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shoe-prints text-yellow-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">What to Wear</h3>
              <p className="text-gray-600 text-sm">
                Wear comfortable walking shoes and dress appropriately for outdoor activities.
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-cloud-rain text-red-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Weather Policy</h3>
              <p className="text-gray-600 text-sm">
                Tours may be cancelled or rescheduled due to severe weather conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookVisit;