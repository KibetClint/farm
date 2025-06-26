import React, { useState } from "react";

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  // Sample products data
  const allProducts = [
    {
      id: 1,
      name: "Heirloom Tomatoes",
      category: "vegetables",
      price: 4.99,
      unit: "lb",
      season: "In Season",
      description:
        "Our vine-ripened heirloom tomatoes come in a rainbow of colors and deliver exceptional flavor that store-bought varieties can't match.",
      image:
        "https://readdy.ai/api/search-image?query=Fresh%20organic%20heirloom%20tomatoes%20in%20various%20colors%20and%20sizes%20arranged%20on%20rustic%20wooden%20surface%2C%20with%20soft%20natural%20lighting%20highlighting%20their%20vibrant%20red%2C%20yellow%2C%20and%20purple%20hues%2C%20showcasing%20farm-fresh%20produce%20with%20some%20green%20leaves%20visible%2C%20clean%20professional%20food%20photography&width=400&height=300&seq=3&orientation=landscape",
      organic: true,
      inStock: true,
    },
    {
      id: 2,
      name: "Organic Kale",
      category: "vegetables",
      price: 3.49,
      unit: "bunch",
      season: "In Season",
      description:
        "Our nutrient-dense kale is harvested young for tender leaves and sweet flavor. Perfect for salads, smoothies, and sautés.",
      image:
        "https://readdy.ai/api/search-image?query=Fresh%20organic%20leafy%20green%20kale%20bunches%20with%20water%20droplets%2C%20arranged%20on%20a%20clean%20wooden%20surface%20with%20natural%20lighting%2C%20showcasing%20the%20curly%20texture%20and%20deep%20green%20color%2C%20farm-fresh%20produce%20photography%20with%20minimalist%20styling%20and%20bright%20composition&width=400&height=300&seq=4&orientation=landscape",
      organic: true,
      inStock: true,
    },
    {
      id: 3,
      name: "Sweet Strawberries",
      category: "fruits",
      price: 5.99,
      unit: "pint",
      season: "Limited",
      description:
        "Our strawberries are allowed to fully ripen on the plant for maximum sweetness and aroma. A seasonal treat not to be missed!",
      image:
        "https://readdy.ai/api/search-image?query=Fresh%20organic%20strawberries%20arranged%20in%20a%20wooden%20basket%20with%20some%20scattered%20on%20a%20rustic%20wooden%20surface%2C%20bright%20natural%20lighting%20highlighting%20their%20vibrant%20red%20color%20and%20texture%2C%20with%20some%20green%20leaves%20visible%2C%20clean%20professional%20food%20photography%20showing%20farm-fresh%20berries&width=400&height=300&seq=5&orientation=landscape",
      organic: true,
      inStock: true,
    },
    {
      id: 4,
      name: "Rainbow Carrots",
      category: "vegetables",
      price: 3.99,
      unit: "bunch",
      season: "In Season",
      description:
        "Our colorful carrot varieties offer a spectrum of nutrients and a sweet, earthy flavor that's delicious raw or roasted.",
      image:
        "https://readdy.ai/api/search-image?query=Fresh%20organic%20carrots%20with%20green%20tops%20arranged%20on%20a%20rustic%20wooden%20surface%2C%20with%20some%20sliced%20to%20show%20bright%20orange%20interior%2C%20natural%20lighting%20highlighting%20their%20vibrant%20color%20and%20texture%2C%20clean%20professional%20food%20photography%20showing%20farm-fresh%20root%20vegetables&width=400&height=300&seq=6&orientation=landscape",
      organic: true,
      inStock: true,
    },
    {
      id: 5,
      name: "Pasture-Raised Eggs",
      category: "dairy",
      price: 6.99,
      unit: "dozen",
      season: "In Season",
      description:
        "Our hens roam freely on pasture, resulting in eggs with vibrant orange yolks and exceptional flavor and nutrition.",
      image:
        "https://readdy.ai/api/search-image?query=Fresh%20organic%20farm%20eggs%20in%20various%20natural%20colors%20from%20brown%20to%20blue%20and%20white%2C%20arranged%20in%20a%20rustic%20wooden%20basket%20with%20some%20straw%2C%20natural%20lighting%20highlighting%20their%20smooth%20shells%2C%20clean%20professional%20food%20photography%20showing%20farm-fresh%20eggs&width=400&height=300&seq=7&orientation=landscape",
      organic: true,
      inStock: true,
    },
    {
      id: 6,
      name: "Raw Wildflower Honey",
      category: "pantry",
      price: 12.99,
      unit: "jar",
      season: "In Season",
      description:
        "Our unfiltered, raw honey is collected from hives placed throughout our wildflower meadows, capturing the essence of the season.",
      image:
        "https://readdy.ai/api/search-image?query=Fresh%20organic%20honey%20in%20glass%20jars%20with%20honeycomb%20pieces%20visible%2C%20golden%20amber%20color%20glowing%20in%20natural%20light%2C%20arranged%20on%20a%20rustic%20wooden%20surface%20with%20some%20wildflowers%2C%20clean%20professional%20food%20photography%20showing%20farm-fresh%20artisanal%20honey&width=400&height=300&seq=8&orientation=landscape",
      organic: true,
      inStock: true,
    },
    {
      id: 7,
      name: "Organic Spinach",
      category: "vegetables",
      price: 2.99,
      unit: "bunch",
      season: "In Season",
      description:
        "Baby spinach leaves harvested at peak tenderness, perfect for salads or cooking. Rich in iron and vitamins.",
      image:
        "https://readdy.ai/api/search-image?query=Fresh%20organic%20baby%20spinach%20leaves%20with%20water%20droplets%2C%20arranged%20on%20a%20clean%20white%20surface%20with%20natural%20lighting%2C%20showcasing%20the%20vibrant%20green%20color%20and%20tender%20texture%2C%20farm-fresh%20leafy%20greens%20photography&width=400&height=300&seq=9&orientation=landscape",
      organic: true,
      inStock: true,
    },
    {
      id: 8,
      name: "Sweet Corn",
      category: "vegetables",
      price: 4.5,
      unit: "dozen",
      season: "In Season",
      description:
        "Fresh sweet corn picked at peak ripeness for maximum sweetness and crisp texture. Perfect for grilling or boiling.",
      image:
        "https://readdy.ai/api/search-image?query=Fresh%20organic%20sweet%20corn%20ears%20with%20green%20husks%20partially%20pulled%20back%20showing%20golden%20kernels%2C%20arranged%20on%20rustic%20wooden%20surface%2C%20natural%20lighting%20highlighting%20their%20bright%20yellow%20color%2C%20farm-fresh%20corn%20photography&width=400&height=300&seq=10&orientation=landscape",
      organic: true,
      inStock: true,
    },
    {
      id: 9,
      name: "Blueberries",
      category: "fruits",
      price: 6.5,
      unit: "pint",
      season: "Limited",
      description:
        "Plump, juicy blueberries bursting with antioxidants and natural sweetness. Hand-picked at perfect ripeness.",
      image:
        "https://readdy.ai/api/search-image?query=Fresh%20organic%20blueberries%20in%20a%20wooden%20bowl%20with%20some%20scattered%20on%20rustic%20wooden%20surface%2C%20natural%20lighting%20highlighting%20their%20deep%20blue%20color%20and%20plump%20texture%2C%20with%20some%20green%20leaves%20visible%2C%20farm-fresh%20berry%20photography&width=400&height=300&seq=11&orientation=landscape",
      organic: true,
      inStock: false,
    },
    {
      id: 10,
      name: "Fresh Herbs Bundle",
      category: "vegetables",
      price: 8.99,
      unit: "bundle",
      season: "In Season",
      description:
        "A variety pack of fresh herbs including basil, parsley, cilantro, and thyme. Perfect for culinary adventures.",
      image:
        "https://readdy.ai/api/search-image?query=Fresh%20organic%20herbs%20bundle%20with%20basil%2C%20parsley%2C%20cilantro%2C%20and%20thyme%20tied%20together%20with%20string%2C%20arranged%20on%20clean%20wooden%20surface%20with%20natural%20lighting%2C%20showcasing%20vibrant%20green%20colors%20and%20textures%2C%20farm-fresh%20herb%20photography&width=400&height=300&seq=12&orientation=landscape",
      organic: true,
      inStock: true,
    },
    {
      id: 11,
      name: "Artisan Goat Cheese",
      category: "dairy",
      price: 15.99,
      unit: "wheel",
      season: "In Season",
      description:
        "Creamy, tangy goat cheese made on-site from our happy, grass-fed goats. Aged to perfection with herbs.",
      image:
        "https://readdy.ai/api/search-image?query=Artisan%20goat%20cheese%20wheel%20with%20herbs%20on%20wooden%20cutting%20board%2C%20soft%20natural%20lighting%20highlighting%20the%20creamy%20white%20texture%20and%20herb%20coating%2C%20with%20some%20crackers%20and%20grapes%20nearby%2C%20rustic%20farm%20cheese%20photography&width=400&height=300&seq=13&orientation=landscape",
      organic: true,
      inStock: true,
    },
    {
      id: 12,
      name: "Seasonal Apple Mix",
      category: "fruits",
      price: 3.99,
      unit: "lb",
      season: "Out of Season",
      description:
        "A mix of seasonal apples including Honeycrisp, Gala, and Granny Smith varieties. Perfect for eating fresh or baking.",
      image:
        "https://readdy.ai/api/search-image?query=Mixed%20organic%20apples%20in%20various%20colors%20red%2C%20green%2C%20and%20yellow%20arranged%20in%20a%20wooden%20basket%20with%20some%20scattered%20on%20rustic%20surface%2C%20natural%20lighting%20highlighting%20their%20glossy%20skin%20and%20vibrant%20colors%2C%20farm-fresh%20apple%20photography&width=400&height=300&seq=14&orientation=landscape",
      organic: true,
      inStock: false,
    },
  ];

  // Filter and sort products
  const getFilteredProducts = () => {
    let filtered = allProducts;

    // Filter by category
    if (activeFilter !== "all") {
      filtered = filtered.filter(
        (product) => product.category === activeFilter
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "season":
          return a.season.localeCompare(b.season);
        default:
          return 0;
      }
    });

    return filtered;
  };

  const handleOrderNow = (product) => {
    alert(
      `Order placed for: ${product.name} - $${product.price}/${product.unit}`
    );
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Farm Fresh Products
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-green-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Discover our seasonal selection of organic, locally-grown produce,
              fresh dairy, and artisanal products straight from our farm to your
              table.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search Bar */}
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap gap-4 items-center">
              {/* Category Filter */}
              <div className="inline-flex rounded-md shadow-sm">
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
                    activeFilter === "all"
                      ? "text-white bg-green-600 border-green-600 hover:bg-green-700"
                      : "text-gray-700 bg-white border-gray-300 hover:bg-gray-100"
                  }`}>
                  All
                </button>
                <button
                  onClick={() => setActiveFilter("vegetables")}
                  className={`px-4 py-2 text-sm font-medium border-t border-b border-r ${
                    activeFilter === "vegetables"
                      ? "text-white bg-green-600 border-green-600 hover:bg-green-700"
                      : "text-gray-700 bg-white border-gray-300 hover:bg-gray-100"
                  }`}>
                  Vegetables
                </button>
                <button
                  onClick={() => setActiveFilter("fruits")}
                  className={`px-4 py-2 text-sm font-medium border-t border-b border-r ${
                    activeFilter === "fruits"
                      ? "text-white bg-green-600 border-green-600 hover:bg-green-700"
                      : "text-gray-700 bg-white border-gray-300 hover:bg-gray-100"
                  }`}>
                  Fruits
                </button>
                <button
                  onClick={() => setActiveFilter("dairy")}
                  className={`px-4 py-2 text-sm font-medium border-t border-b border-r ${
                    activeFilter === "dairy"
                      ? "text-white bg-green-600 border-green-600 hover:bg-green-700"
                      : "text-gray-700 bg-white border-gray-300 hover:bg-gray-100"
                  }`}>
                  Dairy
                </button>
                <button
                  onClick={() => setActiveFilter("pantry")}
                  className={`px-4 py-2 text-sm font-medium rounded-r-lg border-t border-b border-r ${
                    activeFilter === "pantry"
                      ? "text-white bg-green-600 border-green-600 hover:bg-green-700"
                      : "text-gray-700 bg-white border-gray-300 hover:bg-gray-100"
                  }`}>
                  Pantry
                </button>
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500">
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="season">Season</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex rounded-md shadow-sm">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-3 py-2 text-sm font-medium rounded-l-md border ${
                    viewMode === "grid"
                      ? "text-white bg-green-600 border-green-600"
                      : "text-gray-700 bg-white border-gray-300 hover:bg-gray-100"
                  }`}>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`px-3 py-2 text-sm font-medium rounded-r-md border-t border-b border-r ${
                    viewMode === "list"
                      ? "text-white bg-green-600 border-green-600"
                      : "text-gray-700 bg-white border-gray-300 hover:bg-gray-100"
                  }`}>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Results Counter */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredProducts.length} products
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">
                <svg
                  className="mx-auto h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                  : "space-y-6"
              }>
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    viewMode === "list" ? "flex" : ""
                  }`}>
                  <div
                    className={`${
                      viewMode === "list" ? "w-48 flex-shrink-0" : "h-64"
                    } overflow-hidden`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {product.name}
                      </h3>
                      <div className="flex flex-col items-end">
                        <span
                          className={`text-xs font-medium px-2.5 py-0.5 rounded ${
                            product.season === "In Season"
                              ? "bg-green-100 text-green-800"
                              : product.season === "Limited"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}>
                          {product.season}
                        </span>
                        {product.organic && (
                          <span className="mt-1 text-xs font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800">
                            Organic
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {product.description}
                    </p>
                    <div
                      className={`flex ${
                        viewMode === "list"
                          ? "flex-col space-y-2"
                          : "justify-between items-center"
                      }`}>
                      <span className="text-lg font-bold text-gray-900">
                        ${product.price.toFixed(2)}/{product.unit}
                      </span>
                      <button
                        onClick={() => handleOrderNow(product)}
                        disabled={!product.inStock}
                        className={`px-4 py-2 rounded-lg font-medium transition duration-300 ${
                          product.inStock
                            ? "bg-green-600 text-white hover:bg-green-700"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}>
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Our product availability changes with the seasons. Contact us to
            learn about upcoming harvests or to place a custom order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300">
              Contact Us
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-green-700 transition duration-300">
              View Farm Store Hours
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
