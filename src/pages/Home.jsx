// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from "react";
const slides = [
  {
    id: 1,
    image: "/public/images/beans.jpeg",
    subtitle: "For a Better Tomorrow",
    buttonText: "Explore Our Farm",
    buttonLink: "#explore",
  },
  {
    id: 2,
    image: "/public/images/planting.jpeg",
    title: "Organic Harvest",
    subtitle: "Fresh from Our Fields",
    buttonText: "Browse Crops",
    buttonLink: "#crops",
  },
  {
    id: 3,
    image: "/public/images/harrow.jpeg",
    title: "Healthy Livestock",
    subtitle: "Ethically Raised Animals",
    buttonText: "Meet Our Animals",
    buttonLink: "#livestock",
  },
  {
    id: 4,
    image: "/public/images/wheat.jpeg",
    title: "Healthy Livestock",
    subtitle: "Ethically Raised Animals",
    buttonText: "Meet Our Animals",
    buttonLink: "#livestock",
  },
];

const Home = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle "Order Now" button click
  const handleOrderNow = (product) => {
    // You can implement your order logic here, e.g., open a modal, add to cart, etc.
    alert(`Order placed for: ${product.name}`);
  };

  // Auto-play slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section with Slider */}
      <div className="relative overflow-hidden h-[700px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex flex-col justify-center h-full max-w-2xl">
                  <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                    <span className="block">{slide.title}</span>
                    <span className="block text-green-400">
                      {slide.subtitle}
                    </span>
                  </h1>
                  <div className="mt-8">
                    <a
                      href={slide.buttonLink}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md text-base font-medium shadow-md">
                      {slide.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800 text-white p-3 rounded-full">
          &#10094;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800 text-white p-3 rounded-full">
          &#10095;
        </button>
      </div>
      {/* Farm Highlights */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
              Our Specialties
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              What We Do Best
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Discover our sustainable farming operations that focus on quality,
              environmental stewardship, and community values.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Agriculture */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Close-up%20of%20vibrant%2C%20healthy%20organic%20crops%20growing%20in%20neat%20rows%20with%20rich%20soil%20visible.%20Morning%20dew%20glistens%20on%20the%20leaves%20under%20soft%20sunlight.%20The%20image%20shows%20sustainable%20farming%20practices%20with%20natural%20pest%20control%20methods%20visible%20and%20a%20clean%2C%20minimalist%20background&width=400&height=200&seq=2&orientation=landscape"
                  alt="Agriculture"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Sustainable Agriculture
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  We grow a variety of seasonal crops using organic methods that
                  protect the soil and environment while producing nutritious,
                  flavorful harvests.
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-500 font-medium flex items-center cursor-pointer">
                    Learn more <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Poultry */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Free-range%20chickens%20roaming%20happily%20in%20a%20spacious%2C%20clean%20farm%20environment%20with%20natural%20shelters%20and%20fresh%20green%20grass.%20The%20scene%20shows%20humane%20poultry%20farming%20with%20healthy%20birds%20of%20various%20breeds.%20Soft%20natural%20lighting%20creates%20a%20peaceful%20atmosphere%20with%20simple%2C%20clean%20background%20elements&width=400&height=200&seq=3&orientation=landscape"
                  alt="Poultry"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Ethical Poultry Farming
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Our free-range poultry operation prioritizes animal welfare,
                  providing spacious, natural environments for our birds to
                  thrive.
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-500 font-medium flex items-center cursor-pointer">
                    Learn more <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Sustainability */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20sustainable%20farm%20technology%20in%20action%20-%20solar%20panels%20on%20barn%20roofs%2C%20water%20conservation%20systems%2C%20and%20natural%20habitat%20preservation%20areas.%20The%20image%20shows%20the%20integration%20of%20technology%20with%20traditional%20farming%20in%20a%20harmonious%20way.%20Clean%2C%20minimalist%20background%20with%20perfect%20lighting%20highlighting%20eco-friendly%20innovations&width=400&height=200&seq=4&orientation=landscape"
                  alt="Sustainability"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Eco-Friendly Practices
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  From solar power to water conservation, we implement
                  innovative solutions to reduce our environmental footprint and
                  preserve natural resources.
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-green-600 hover:text-green-500 font-medium flex items-center cursor-pointer">
                    Learn more <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Us Preview */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
                Our Story
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">
                A Family Farm With Deep Roots
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Green Acres Farm has been in our family for three generations.
                What started as a small homestead in 1965 has grown into a
                thriving agricultural operation committed to sustainable
                practices and community values.
              </p>
              <div className="mt-6">
                <p className="text-lg text-gray-500">
                  Our mission is to produce high-quality, nutritious food while
                  being responsible stewards of the land and creating meaningful
                  connections with our community.
                </p>
              </div>
              <div className="mt-8">
                <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-md text-base font-medium shadow-md !rounded-button whitespace-nowrap cursor-pointer">
                  Read Our Full Story
                </button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/public/images/ghibi.jpeg"
                  alt="Farm Family"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Latest News */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
            Our Fresh Products
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Discover our range of farm-fresh, organic produce harvested at peak
            ripeness for maximum flavor and nutrition.
          </p>
          <div className="mb-10 flex justify-center">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                id="filter-all"
                onClick={() => setActiveFilter("all")}
                className={`px-5 py-2 text-sm font-medium rounded-l-lg border !rounded-button whitespace-nowrap cursor-pointer ${
                  activeFilter === "all"
                    ? "text-white bg-green-600 border-green-600 hover:bg-green-700"
                    : "text-gray-700 bg-white border-gray-300 hover:bg-gray-100"
                }`}>
                All Products
              </button>
              <button
                id="filter-vegetables"
                onClick={() => setActiveFilter("vegetables")}
                className={`px-5 py-2 text-sm font-medium border-t border-b border-r !rounded-button whitespace-nowrap cursor-pointer ${
                  activeFilter === "vegetables"
                    ? "text-white bg-green-600 border-green-600 hover:bg-green-700"
                    : "text-gray-700 bg-white border-gray-300 hover:bg-gray-100"
                }`}>
                Vegetables
              </button>
              <button
                id="filter-fruits"
                onClick={() => setActiveFilter("fruits")}
                className={`px-5 py-2 text-sm font-medium border-t border-b border-r !rounded-button whitespace-nowrap cursor-pointer ${
                  activeFilter === "fruits"
                    ? "text-white bg-green-600 border-green-600 hover:bg-green-700"
                    : "text-gray-700 bg-white border-gray-300 hover:bg-gray-100"
                }`}>
                Fruits
              </button>
              <button
                id="filter-dairy"
                onClick={() => setActiveFilter("dairy")}
                className={`px-5 py-2 text-sm font-medium border-t border-b border-r rounded-r-lg !rounded-button whitespace-nowrap cursor-pointer ${
                  activeFilter === "dairy"
                    ? "text-white bg-green-600 border-green-600 hover:bg-green-700"
                    : "text-gray-700 bg-white border-gray-300 hover:bg-gray-100"
                }`}>
                Dairy
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Fresh%20organic%20heirloom%20tomatoes%20in%20various%20colors%20and%20sizes%20arranged%20on%20rustic%20wooden%20surface%2C%20with%20soft%20natural%20lighting%20highlighting%20their%20vibrant%20red%2C%20yellow%2C%20and%20purple%20hues%2C%20showcasing%20farm-fresh%20produce%20with%20some%20green%20leaves%20visible%2C%20clean%20professional%20food%20photography&width=400&height=300&seq=3&orientation=landscape"
                  alt="Organic Tomatoes"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Heirloom Tomatoes
                  </h3>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    In Season
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Our vine-ripened heirloom tomatoes come in a rainbow of colors
                  and deliver exceptional flavor that store-bought varieties
                  can't match.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">$4.99/lb</span>
                  <button
                    onClick={() =>
                      handleOrderNow({
                        id: "tomatoes",
                        name: "Heirloom Tomatoes",
                        price: "$4.99/lb",
                        image:
                          "https://readdy.ai/api/search-image?query=Fresh%20organic%20heirloom%20tomatoes%20in%20various%20colors%20and%20sizes%20arranged%20on%20rustic%20wooden%20surface%2C%20with%20soft%20natural%20lighting%20highlighting%20their%20vibrant%20red%2C%20yellow%2C%20and%20purple%20hues%2C%20showcasing%20farm-fresh%20produce%20with%20some%20green%20leaves%20visible%2C%20clean%20professional%20food%20photography&width=400&height=300&seq=3&orientation=landscape",
                      })
                    }
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            {/* Product 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Fresh%20organic%20leafy%20green%20kale%20bunches%20with%20water%20droplets%2C%20arranged%20on%20a%20clean%20wooden%20surface%20with%20natural%20lighting%2C%20showcasing%20the%20curly%20texture%20and%20deep%20green%20color%2C%20farm-fresh%20produce%20photography%20with%20minimalist%20styling%20and%20bright%20composition&width=400&height=300&seq=4&orientation=landscape"
                  alt="Organic Kale"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Organic Kale
                  </h3>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    In Season
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Our nutrient-dense kale is harvested young for tender leaves
                  and sweet flavor. Perfect for salads, smoothies, and sautés.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">$3.49/bunch</span>
                  <button
                    onClick={() =>
                      handleOrderNow({
                        id: "tomatoes",
                        name: "Heirloom Tomatoes",
                        price: "$4.99/lb",
                        image:
                          "https://readdy.ai/api/search-image?query=Fresh%20organic%20heirloom%20tomatoes%20in%20various%20colors%20and%20sizes%20arranged%20on%20rustic%20wooden%20surface%2C%20with%20soft%20natural%20lighting%20highlighting%20their%20vibrant%20red%2C%20yellow%2C%20and%20purple%20hues%2C%20showcasing%20farm-fresh%20produce%20with%20some%20green%20leaves%20visible%2C%20clean%20professional%20food%20photography&width=400&height=300&seq=3&orientation=landscape",
                      })
                    }
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            {/* Product 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Fresh%20organic%20strawberries%20arranged%20in%20a%20wooden%20basket%20with%20some%20scattered%20on%20a%20rustic%20wooden%20surface%2C%20bright%20natural%20lighting%20highlighting%20their%20vibrant%20red%20color%20and%20texture%2C%20with%20some%20green%20leaves%20visible%2C%20clean%20professional%20food%20photography%20showing%20farm-fresh%20berries&width=400&height=300&seq=5&orientation=landscape"
                  alt="Organic Strawberries"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Sweet Strawberries
                  </h3>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Limited
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Our strawberries are allowed to fully ripen on the plant for
                  maximum sweetness and aroma. A seasonal treat not to be
                  missed!
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">$5.99/pint</span>
                  <button
                    onClick={() =>
                      handleOrderNow({
                        id: "tomatoes",
                        name: "Heirloom Tomatoes",
                        price: "$4.99/lb",
                        image:
                          "https://readdy.ai/api/search-image?query=Fresh%20organic%20heirloom%20tomatoes%20in%20various%20colors%20and%20sizes%20arranged%20on%20rustic%20wooden%20surface%2C%20with%20soft%20natural%20lighting%20highlighting%20their%20vibrant%20red%2C%20yellow%2C%20and%20purple%20hues%2C%20showcasing%20farm-fresh%20produce%20with%20some%20green%20leaves%20visible%2C%20clean%20professional%20food%20photography&width=400&height=300&seq=3&orientation=landscape",
                      })
                    }
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            {/* Product 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Fresh%20organic%20carrots%20with%20green%20tops%20arranged%20on%20a%20rustic%20wooden%20surface%2C%20with%20some%20sliced%20to%20show%20bright%20orange%20interior%2C%20natural%20lighting%20highlighting%20their%20vibrant%20color%20and%20texture%2C%20clean%20professional%20food%20photography%20showing%20farm-fresh%20root%20vegetables&width=400&height=300&seq=6&orientation=landscape"
                  alt="Organic Carrots"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Rainbow Carrots
                  </h3>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    In Season
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Our colorful carrot varieties offer a spectrum of nutrients
                  and a sweet, earthy flavor that's delicious raw or roasted.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">$3.99/bunch</span>
                  <button
                    onClick={() =>
                      handleOrderNow({
                        id: "tomatoes",
                        name: "Heirloom Tomatoes",
                        price: "$4.99/lb",
                        image:
                          "https://readdy.ai/api/search-image?query=Fresh%20organic%20heirloom%20tomatoes%20in%20various%20colors%20and%20sizes%20arranged%20on%20rustic%20wooden%20surface%2C%20with%20soft%20natural%20lighting%20highlighting%20their%20vibrant%20red%2C%20yellow%2C%20and%20purple%20hues%2C%20showcasing%20farm-fresh%20produce%20with%20some%20green%20leaves%20visible%2C%20clean%20professional%20food%20photography&width=400&height=300&seq=3&orientation=landscape",
                      })
                    }
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            {/* Product 5 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Fresh%20organic%20farm%20eggs%20in%20various%20natural%20colors%20from%20brown%20to%20blue%20and%20white%2C%20arranged%20in%20a%20rustic%20wooden%20basket%20with%20some%20straw%2C%20natural%20lighting%20highlighting%20their%20smooth%20shells%2C%20clean%20professional%20food%20photography%20showing%20farm-fresh%20eggs&width=400&height=300&seq=7&orientation=landscape"
                  alt="Farm Fresh Eggs"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Pasture-Raised Eggs
                  </h3>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    In Season
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Our hens roam freely on pasture, resulting in eggs with
                  vibrant orange yolks and exceptional flavor and nutrition.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">$6.99/dozen</span>
                  <button
                    onClick={() =>
                      handleOrderNow({
                        id: "tomatoes",
                        name: "Heirloom Tomatoes",
                        price: "$4.99/lb",
                        image:
                          "https://readdy.ai/api/search-image?query=Fresh%20organic%20heirloom%20tomatoes%20in%20various%20colors%20and%20sizes%20arranged%20on%20rustic%20wooden%20surface%2C%20with%20soft%20natural%20lighting%20highlighting%20their%20vibrant%20red%2C%20yellow%2C%20and%20purple%20hues%2C%20showcasing%20farm-fresh%20produce%20with%20some%20green%20leaves%20visible%2C%20clean%20professional%20food%20photography&width=400&height=300&seq=3&orientation=landscape",
                      })
                    }
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            {/* Product 6 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Fresh%20organic%20honey%20in%20glass%20jars%20with%20honeycomb%20pieces%20visible%2C%20golden%20amber%20color%20glowing%20in%20natural%20light%2C%20arranged%20on%20a%20rustic%20wooden%20surface%20with%20some%20wildflowers%2C%20clean%20professional%20food%20photography%20showing%20farm-fresh%20artisanal%20honey&width=400&height=300&seq=8&orientation=landscape"
                  alt="Raw Honey"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Raw Wildflower Honey
                  </h3>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    In Season
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Our unfiltered, raw honey is collected from hives placed
                  throughout our wildflower meadows, capturing the essence of
                  the season.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">$12.99/jar</span>
                  <button
                    onClick={() =>
                      handleOrderNow({
                        id: "tomatoes",
                        name: "Heirloom Tomatoes",
                        price: "$4.99/lb",
                        image:
                          "https://readdy.ai/api/search-image?query=Fresh%20organic%20heirloom%20tomatoes%20in%20various%20colors%20and%20sizes%20arranged%20on%20rustic%20wooden%20surface%2C%20with%20soft%20natural%20lighting%20highlighting%20their%20vibrant%20red%2C%20yellow%2C%20and%20purple%20hues%2C%20showcasing%20farm-fresh%20produce%20with%20some%20green%20leaves%20visible%2C%20clean%20professional%20food%20photography&width=400&height=300&seq=3&orientation=landscape",
                      })
                    }
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-white border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
              View All Products
            </button>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
              Testimonials
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              What People Say
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <i className="fas fa-user text-gray-400 flex justify-center items-center h-full w-full text-2xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">
                    Sarah Johnson
                  </h4>
                  <p className="text-sm text-gray-500">
                    Local Restaurant Owner
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                "The produce from Green Acres Farm is consistently exceptional.
                The flavors are incredible, and knowing that everything is grown
                sustainably makes it even better for our restaurant menu."
              </p>
              <div className="mt-4 flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <i className="fas fa-user text-gray-400 flex justify-center items-center h-full w-full text-2xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">
                    Michael Thompson
                  </h4>
                  <p className="text-sm text-gray-500">Community Member</p>
                </div>
              </div>
              <p className="text-gray-600">
                "We've been participating in the farm's CSA program for three
                years now. The weekly boxes are always filled with amazing
                seasonal produce, and the farm events bring our community
                together."
              </p>
              <div className="mt-4 flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <i className="fas fa-user text-gray-400 flex justify-center items-center h-full w-full text-2xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">
                    Emily Rodriguez
                  </h4>
                  <p className="text-sm text-gray-500">Local School Teacher</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Our school field trips to Green Acres are always the highlight
                of the year. The farm team is so knowledgeable and patient with
                the children, making learning about agriculture fun and
                engaging."
              </p>
              <div className="mt-4 flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter */}
      <div className="py-16 bg-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-white">
                Stay Updated with Farm News
              </h2>
              <p className="mt-4 text-lg text-green-100">
                Subscribe to our newsletter to receive updates on seasonal
                produce availability, upcoming events, and farming tips.
              </p>
              <div className="mt-4 flex space-x-2">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-300 mr-2"></i>
                  <span className="text-green-100">Seasonal updates</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-300 mr-2"></i>
                  <span className="text-green-100">Event invitations</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-300 mr-2"></i>
                  <span className="text-green-100">Farming tips</span>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <form onSubmit={handleSubscribe} className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-3 border-none placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white rounded-md text-sm"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white !rounded-button whitespace-nowrap cursor-pointer">
                    Subscribe
                  </button>
                </div>
              </form>
              {isSubscribed && (
                <div className="mt-3 text-sm text-green-100">
                  Thank you for subscribing! You'll receive our next newsletter
                  soon.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Contact Preview */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
              Get In Touch
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Contact Us
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Have questions about our farm or interested in visiting? We'd love
              to hear from you!
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Phone */}
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                <i className="fas fa-phone text-green-600 text-xl"></i>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Phone</h3>
              <p className="mt-2 text-base text-gray-500">(555) 123-4567</p>
              <p className="text-sm text-gray-500">Monday-Friday: 8am-5pm</p>
            </div>
            {/* Email */}
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                <i className="fas fa-envelope text-green-600 text-xl"></i>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-2 text-base text-gray-500">
                info@greenacresfarm.com
              </p>
              <p className="text-sm text-gray-500">
                We'll respond as soon as possible
              </p>
            </div>
            {/* Location */}
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                <i className="fas fa-map-marker-alt text-green-600 text-xl"></i>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Location
              </h3>
              <p className="mt-2 text-base text-gray-500">
                123 Rural Route, Farmville
              </p>
              <p className="text-sm text-gray-500">State, Country, 12345</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-md text-base font-medium shadow-md !rounded-button whitespace-nowrap cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      {/* Footer */}
    </div>
  );
};
export default Home;
