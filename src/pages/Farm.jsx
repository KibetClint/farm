// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
const Farm = () => {
  const [activeMapLayer, setActiveMapLayer] = useState("all");
  const [activeGalleryFilter, setActiveGalleryFilter] = useState("all");
  const handleMapLayerChange = (layer) => {
    setActiveMapLayer(layer);
  };
  const handleGalleryFilterChange = (filter) => {
    setActiveGalleryFilter(filter);
  };
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <div
        className="relative overflow-hidden bg-cover bg-center h-[800px]"
        style={{
          backgroundImage:
            "url('https://readdy.ai/api/search-image?query=A%20stunning%20aerial%20view%20of%20a%20large%20sustainable%20farm%20with%20diverse%20crop%20fields%20in%20neat%20patterns%2C%20free-range%20poultry%20areas%2C%20orchards%20with%20rows%20of%20fruit%20trees%2C%20and%20modern%20eco-friendly%20farm%20buildings.%20The%20farm%20is%20surrounded%20by%20natural%20habitat%20areas%20with%20a%20small%20pond%20and%20windbreaks.%20Golden%20morning%20light%20illuminates%20the%20scene%20with%20mountains%20in%20the%20distance&width=1440&height=600&seq=10&orientation=landscape')",
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex flex-col justify-center h-full max-w-2xl">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">Explore Our Farm</span>
                <span className="block text-green-400">
                  Sustainable Agriculture in Action
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
                Welcome to our 150-acre working farm where traditional wisdom
                meets modern sustainable practices. Discover how we grow
                nutritious food while caring for the land and supporting
                biodiversity.
              </p>
              <div className="mt-8 flex space-x-4">
                <a
                  href="#farm-map"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md text-base font-medium shadow-md !rounded-button whitespace-nowrap cursor-pointer">
                  Explore Farm Map
                </a>
                <a
                  href="https://readdy.ai/home/584712dc-c8e5-4de4-9352-8fedc59d8a18/155fece8-ca9d-4150-9458-eca418b7b6bd"
                  data-readdy="true"
                  className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-md text-base font-medium shadow-md !rounded-button whitespace-nowrap cursor-pointer">
                  Back to Overview
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Interactive Farm Map */}
      <div id="farm-map" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
              Discover Our Layout
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Interactive Farm Map
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Explore the different areas of our farm and learn about our
              diverse operations.
            </p>
          </div>
          <div className="mt-12">
            <div className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="flex justify-center space-x-4 p-4 bg-gray-50 border-b">
                <button
                  onClick={() => handleMapLayerChange("all")}
                  className={`px-4 py-2 rounded-md text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer ${
                    activeMapLayer === "all"
                      ? "bg-green-600 text-white"
                      : "bg-white text-gray-700 border border-gray-300"
                  }`}>
                  All Areas
                </button>
                <button
                  onClick={() => handleMapLayerChange("crops")}
                  className={`px-4 py-2 rounded-md text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer ${
                    activeMapLayer === "crops"
                      ? "bg-green-600 text-white"
                      : "bg-white text-gray-700 border border-gray-300"
                  }`}>
                  Crop Fields
                </button>
                <button
                  onClick={() => handleMapLayerChange("poultry")}
                  className={`px-4 py-2 rounded-md text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer ${
                    activeMapLayer === "poultry"
                      ? "bg-green-600 text-white"
                      : "bg-white text-gray-700 border border-gray-300"
                  }`}>
                  Poultry Areas
                </button>
                <button
                  onClick={() => handleMapLayerChange("orchards")}
                  className={`px-4 py-2 rounded-md text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer ${
                    activeMapLayer === "orchards"
                      ? "bg-green-600 text-white"
                      : "bg-white text-gray-700 border border-gray-300"
                  }`}>
                  Orchards
                </button>
                <button
                  onClick={() => handleMapLayerChange("facilities")}
                  className={`px-4 py-2 rounded-md text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer ${
                    activeMapLayer === "facilities"
                      ? "bg-green-600 text-white"
                      : "bg-white text-gray-700 border border-gray-300"
                  }`}>
                  Facilities
                </button>
              </div>
              <div className="relative h-[600px] overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=A%20detailed%20birds-eye%20view%20map%20of%20a%20sustainable%20farm%20layout%20with%20color-coded%20areas%20showing%20crop%20fields%20in%20green%2C%20poultry%20areas%20in%20yellow%2C%20orchards%20in%20orange%2C%20and%20facilities%20in%20blue.%20The%20map%20includes%20paths%20connecting%20different%20areas%2C%20water%20features%2C%20and%20natural%20habitats.%20Labels%20and%20markers%20indicate%20key%20points%20of%20interest%20across%20the%20farm%20with%20a%20clean%20white%20background%20for%20clarity&width=1200&height=600&seq=11&orientation=landscape"
                  alt="Interactive Farm Map"
                  className="w-full h-full object-cover"
                />
                {/* Map Markers */}
                <div className="absolute top-1/4 left-1/4 bg-green-600 text-white rounded-full h-8 w-8 flex items-center justify-center cursor-pointer shadow-lg transform -translate-x-1/2 -translate-y-1/2">
                  <i className="fas fa-leaf"></i>
                </div>
                <div className="absolute top-1/3 right-1/3 bg-yellow-500 text-white rounded-full h-8 w-8 flex items-center justify-center cursor-pointer shadow-lg transform -translate-x-1/2 -translate-y-1/2">
                  <i className="fas fa-drumstick-bite"></i>
                </div>
                <div className="absolute bottom-1/3 left-1/3 bg-orange-500 text-white rounded-full h-8 w-8 flex items-center justify-center cursor-pointer shadow-lg transform -translate-x-1/2 -translate-y-1/2">
                  <i className="fas fa-apple-alt"></i>
                </div>
                <div className="absolute bottom-1/4 right-1/4 bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center cursor-pointer shadow-lg transform -translate-x-1/2 -translate-y-1/2">
                  <i className="fas fa-warehouse"></i>
                </div>
                <div className="absolute top-1/2 left-1/2 bg-red-500 text-white rounded-full h-8 w-8 flex items-center justify-center cursor-pointer shadow-lg transform -translate-x-1/2 -translate-y-1/2">
                  <i className="fas fa-home"></i>
                </div>
              </div>
              <div className="p-6 bg-gray-50">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Map Legend
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="flex items-center">
                    <div className="h-4 w-4 bg-green-600 rounded-sm mr-2"></div>
                    <span className="text-sm text-gray-700">Crop Fields</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-4 w-4 bg-yellow-500 rounded-sm mr-2"></div>
                    <span className="text-sm text-gray-700">Poultry Areas</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-4 w-4 bg-orange-500 rounded-sm mr-2"></div>
                    <span className="text-sm text-gray-700">Orchards</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-4 w-4 bg-blue-500 rounded-sm mr-2"></div>
                    <span className="text-sm text-gray-700">Facilities</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-4 w-4 bg-red-500 rounded-sm mr-2"></div>
                    <span className="text-sm text-gray-700">Main Building</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Farming Areas */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
              Our Operations
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Farming Areas
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Discover the diverse areas of our farm and how each contributes to
              our sustainable agricultural system.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Crop Fields */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-64 w-full overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Aerial%20view%20of%20diverse%20crop%20fields%20with%20different%20vegetables%20and%20grains%20growing%20in%20neat%20rows.%20The%20fields%20show%20sustainable%20farming%20practices%20like%20cover%20cropping%20and%20crop%20rotation.%20Rich%20soil%20and%20vibrant%20plants%20demonstrate%20organic%20farming%20methods.%20Morning%20light%20casts%20long%20shadows%20across%20the%20perfectly%20maintained%20rows%20with%20a%20clean%20minimalist%20background&width=400&height=250&seq=12&orientation=landscape"
                  alt="Crop Fields"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Crop Fields
                </h3>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <i className="fas fa-ruler-combined mr-2 text-green-600"></i>
                  <span>80 acres of diverse cropland</span>
                </div>
                <p className="mt-3 text-base text-gray-600">
                  Our crop fields are managed using regenerative agriculture
                  practices. We grow over 40 varieties of vegetables, grains,
                  and legumes using crop rotation, cover cropping, and minimal
                  tillage to build soil health.
                </p>
                <div className="mt-4 bg-green-50 rounded-md p-3">
                  <h4 className="font-medium text-green-800 text-sm">
                    Current Crops (Spring 2025)
                  </h4>
                  <ul className="mt-2 grid grid-cols-2 gap-x-2 gap-y-1 text-sm">
                    <li className="flex items-center text-gray-600">
                      <i className="fas fa-seedling text-green-600 mr-1"></i>{" "}
                      Lettuce
                    </li>
                    <li className="flex items-center text-gray-600">
                      <i className="fas fa-seedling text-green-600 mr-1"></i>{" "}
                      Spinach
                    </li>
                    <li className="flex items-center text-gray-600">
                      <i className="fas fa-seedling text-green-600 mr-1"></i>{" "}
                      Peas
                    </li>
                    <li className="flex items-center text-gray-600">
                      <i className="fas fa-seedling text-green-600 mr-1"></i>{" "}
                      Radishes
                    </li>
                    <li className="flex items-center text-gray-600">
                      <i className="fas fa-seedling text-green-600 mr-1"></i>{" "}
                      Kale
                    </li>
                    <li className="flex items-center text-gray-600">
                      <i className="fas fa-seedling text-green-600 mr-1"></i>{" "}
                      Spring Wheat
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Poultry Areas */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-64 w-full overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Free-range%20chickens%20and%20ducks%20roaming%20in%20a%20spacious%20pasture%20with%20mobile%20coops%20visible%20in%20the%20background.%20The%20birds%20appear%20healthy%20and%20active%2C%20foraging%20in%20lush%20grass.%20The%20area%20includes%20shade%20structures%20and%20natural%20enrichment%20features.%20Soft%20morning%20light%20creates%20a%20peaceful%20scene%20with%20clean%20minimalist%20background%20elements&width=400&height=250&seq=13&orientation=landscape"
                  alt="Poultry Areas"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Poultry Areas
                </h3>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <i className="fas fa-ruler-combined mr-2 text-green-600"></i>
                  <span>15 acres of pasture for poultry</span>
                </div>
                <p className="mt-3 text-base text-gray-600">
                  Our poultry operation features mobile coops and rotational
                  grazing systems that allow our birds to express natural
                  behaviors while contributing to soil fertility. We raise
                  heritage breed chickens, ducks, and turkeys.
                </p>
                <div className="mt-4 bg-green-50 rounded-md p-3">
                  <h4 className="font-medium text-green-800 text-sm">
                    Our Poultry Program
                  </h4>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li className="flex items-center text-gray-600">
                      <i className="fas fa-check text-green-600 mr-1"></i> 100%
                      pasture-raised
                    </li>
                    <li className="flex items-center text-gray-600">
                      <i className="fas fa-check text-green-600 mr-1"></i>{" "}
                      Heritage breeds preservation
                    </li>
                    <li className="flex items-center text-gray-600">
                      <i className="fas fa-check text-green-600 mr-1"></i>{" "}
                      Rotational grazing system
                    </li>
                    <li className="flex items-center text-gray-600">
                      <i className="fas fa-check text-green-600 mr-1"></i>{" "}
                      Organic feed supplementation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Orchards */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-64 w-full overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=A%20flourishing%20orchard%20with%20neat%20rows%20of%20fruit%20trees%20in%20full%20bloom%20or%20bearing%20fruit.%20The%20orchard%20shows%20integrated%20pest%20management%20with%20beneficial%20insect%20habitats%20and%20diverse%20ground%20cover%20between%20rows.%20Sunlight%20filters%20through%20the%20branches%20creating%20a%20dappled%20light%20effect.%20The%20scene%20demonstrates%20sustainable%20orchard%20management%20with%20clean%20minimalist%20background%20elements&width=400&height=250&seq=14&orientation=landscape"
                  alt="Orchards"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Orchards
                </h3>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <i className="fas fa-ruler-combined mr-2 text-green-600"></i>
                  <span>25 acres of diverse fruit production</span>
                </div>
                <p className="mt-3 text-base text-gray-600">
                  Our orchards feature a diverse collection of fruit and nut
                  trees, including many heirloom and rare varieties. We use
                  integrated pest management and maintain habitat for beneficial
                  insects and pollinators.
                </p>
                <div className="mt-4 bg-green-50 rounded-md p-3">
                  <h4 className="font-medium text-green-800 text-sm">
                    Fruit Varieties
                  </h4>
                  <ul className="mt-2 grid grid-cols-2 gap-x-2 gap-y-1 text-sm">
                    <li className="flex items-center text-gray-600">
                      <i className="fas fa-apple-alt text-green-600 mr-1"></i>{" "}
                      12 Apple varieties
                    </li>
                    <li className="flex items-center text-gray-600">
                      <i className="fas fa-apple-alt text-green-600 mr-1"></i> 8
                      Pear varieties
                    </li>
                    <li className="flex items-center text-gray-600">
                      <i className="fas fa-apple-alt text-green-600 mr-1"></i> 6
                      Plum varieties
                    </li>
                    <li className="flex items-center text-gray-600">
                      <i className="fas fa-apple-alt text-green-600 mr-1"></i> 4
                      Cherry varieties
                    </li>
                    <li className="flex items-center text-gray-600">
                      <i className="fas fa-apple-alt text-green-600 mr-1"></i>{" "}
                      Peaches & Nectarines
                    </li>
                    <li className="flex items-center text-gray-600">
                      <i className="fas fa-apple-alt text-green-600 mr-1"></i>{" "}
                      Hazelnuts & Walnuts
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sustainable Practices */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
              How We Farm
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Sustainable Practices
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Our commitment to environmental stewardship guides everything we
              do on the farm.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {/* Solar Energy */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Solar%20panels%20installed%20on%20the%20roof%20of%20a%20modern%20barn%20or%20farm%20building%2C%20capturing%20sunlight%20to%20power%20farm%20operations.%20The%20panels%20are%20arranged%20in%20a%20neat%20array%20against%20a%20blue%20sky.%20The%20scene%20shows%20sustainable%20energy%20integration%20in%20agricultural%20settings%20with%20clean%20minimalist%20background%20elements&width=300&height=200&seq=15&orientation=landscape"
                  alt="Solar Energy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="px-4 py-5">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mx-auto">
                  <i className="fas fa-solar-panel text-xl"></i>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                  Solar Energy
                </h3>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  Our 50kW solar array provides 75% of the farm's electricity
                  needs, powering irrigation, cold storage, and processing
                  facilities.
                </p>
              </div>
            </div>
            {/* Water Conservation */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Efficient%20drip%20irrigation%20system%20in%20action%2C%20delivering%20precise%20amounts%20of%20water%20directly%20to%20plant%20roots%20in%20a%20vegetable%20field.%20Water%20droplets%20visible%20on%20the%20irrigation%20lines.%20The%20scene%20shows%20water%20conservation%20technology%20in%20modern%20sustainable%20farming%20with%20clean%20minimalist%20background%20elements&width=300&height=200&seq=16&orientation=landscape"
                  alt="Water Conservation"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="px-4 py-5">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mx-auto">
                  <i className="fas fa-tint text-xl"></i>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                  Water Conservation
                </h3>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  Our precision drip irrigation, rainwater harvesting systems,
                  and retention ponds reduce water usage by 60% compared to
                  conventional methods.
                </p>
              </div>
            </div>
            {/* Organic Farming */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Close-up%20of%20rich%2C%20dark%20compost%20being%20applied%20to%20farm%20soil%2C%20with%20visible%20organic%20matter%20and%20beneficial%20organisms.%20Hands%20wearing%20gloves%20are%20shown%20working%20with%20the%20compost.%20The%20scene%20demonstrates%20organic%20soil%20building%20practices%20in%20sustainable%20agriculture%20with%20clean%20minimalist%20background%20elements&width=300&height=200&seq=17&orientation=landscape"
                  alt="Organic Farming"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="px-4 py-5">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mx-auto">
                  <i className="fas fa-seedling text-xl"></i>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                  Organic Farming
                </h3>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  We use natural fertilizers, beneficial insects, and mechanical
                  weed control to grow healthy crops without synthetic
                  chemicals.
                </p>
              </div>
            </div>
            {/* Waste Management */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20composting%20system%20on%20a%20farm%20with%20organized%20windrows%20of%20compost%20in%20various%20stages%20of%20decomposition.%20Farm%20workers%20are%20turning%20compost%20with%20specialized%20equipment.%20The%20scene%20shows%20sustainable%20waste%20management%20in%20agricultural%20settings%20with%20clean%20minimalist%20background%20elements&width=300&height=200&seq=18&orientation=landscape"
                  alt="Waste Management"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="px-4 py-5">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mx-auto">
                  <i className="fas fa-recycle text-xl"></i>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                  Waste Management
                </h3>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  Our comprehensive composting system transforms farm waste into
                  nutrient-rich soil amendments, creating a closed-loop system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Equipment & Technology */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
              Modern Farming
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Equipment & Technology
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              We blend traditional farming wisdom with cutting-edge technology
              to optimize our operations.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Farm Machinery */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-64 w-full overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20compact%20farm%20tractor%20with%20specialized%20attachments%20working%20in%20a%20field.%20The%20equipment%20is%20designed%20for%20minimal%20soil%20disturbance%20and%20precision%20agriculture.%20The%20scene%20shows%20the%20integration%20of%20appropriate%20technology%20in%20sustainable%20farming%20with%20clean%20minimalist%20background%20elements&width=600&height=300&seq=19&orientation=landscape"
                  alt="Farm Machinery"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Farm Machinery
                </h3>
                <p className="mt-3 text-base text-gray-600">
                  We use appropriately-scaled equipment that minimizes soil
                  compaction and fuel usage while maximizing efficiency. Our
                  fleet includes:
                </p>
                <ul className="mt-4 grid grid-cols-2 gap-x-2 gap-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-600 mr-2"></i> Compact
                    tractors
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-600 mr-2"></i>{" "}
                    Precision seeders
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-600 mr-2"></i> No-till
                    implements
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-600 mr-2"></i>{" "}
                    Electric utility vehicles
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-600 mr-2"></i>{" "}
                    Specialized harvesters
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-600 mr-2"></i> Compost
                    turners
                  </li>
                </ul>
              </div>
            </div>
            {/* Smart Farming Systems */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-64 w-full overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Farmer%20using%20tablet%20computer%20to%20monitor%20crop%20data%20in%20the%20field%20with%20soil%20sensors%20and%20weather%20station%20visible%20in%20the%20background.%20The%20screen%20shows%20data%20visualizations%20and%20farm%20management%20software.%20The%20scene%20demonstrates%20precision%20agriculture%20technology%20in%20sustainable%20farming%20with%20clean%20minimalist%20background%20elements&width=600&height=300&seq=20&orientation=landscape"
                  alt="Smart Farming Systems"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Smart Farming Systems
                </h3>
                <p className="mt-3 text-base text-gray-600">
                  Our integrated technology systems help us make data-driven
                  decisions that optimize resource use and crop production:
                </p>
                <ul className="mt-4 grid grid-cols-2 gap-x-2 gap-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-600 mr-2"></i> Soil
                    moisture sensors
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-600 mr-2"></i> Weather
                    stations
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-600 mr-2"></i> Crop
                    monitoring systems
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-600 mr-2"></i>{" "}
                    Automated irrigation
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-600 mr-2"></i> Farm
                    management software
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-600 mr-2"></i>{" "}
                    Inventory tracking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Seasonal Activities Calendar */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
              Farm Rhythm
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Seasonal Activities
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Our farm operates in harmony with the natural cycles of the
              seasons.
            </p>
          </div>
          <div className="mt-12 bg-white overflow-hidden shadow rounded-lg">
            <div className="px-6 py-5 border-b border-gray-200 bg-gray-50">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  2025 Farm Calendar
                </h3>
                <div className="text-sm font-medium text-green-600">
                  Current Season: Spring
                </div>
              </div>
            </div>
            <div className="px-6 py-5">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Spring */}
                <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                  <div className="flex items-center mb-3">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <i className="fas fa-seedling text-green-600"></i>
                    </div>
                    <h4 className="ml-3 text-lg font-medium text-gray-900">
                      Spring
                    </h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-600 mt-0.5 mr-2"></i>
                      <span>Soil preparation and early planting</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-600 mt-0.5 mr-2"></i>
                      <span>Orchard pruning and maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-600 mt-0.5 mr-2"></i>
                      <span>Poultry breeding season</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-600 mt-0.5 mr-2"></i>
                      <span>First farmers markets of the season</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-calendar-alt text-green-600 mt-0.5 mr-2"></i>
                      <span>Spring Farm Tours (Weekends in May)</span>
                    </li>
                  </ul>
                </div>
                {/* Summer */}
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-100">
                  <div className="flex items-center mb-3">
                    <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                      <i className="fas fa-sun text-yellow-600"></i>
                    </div>
                    <h4 className="ml-3 text-lg font-medium text-gray-900">
                      Summer
                    </h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-yellow-600 mt-0.5 mr-2"></i>
                      <span>Peak vegetable production</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-yellow-600 mt-0.5 mr-2"></i>
                      <span>Berry harvesting</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-yellow-600 mt-0.5 mr-2"></i>
                      <span>Grain harvest</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-yellow-600 mt-0.5 mr-2"></i>
                      <span>CSA box distribution</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-calendar-alt text-yellow-600 mt-0.5 mr-2"></i>
                      <span>Annual Farm Festival (July 15-16)</span>
                    </li>
                  </ul>
                </div>
                {/* Fall */}
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
                  <div className="flex items-center mb-3">
                    <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <i className="fas fa-leaf text-orange-600"></i>
                    </div>
                    <h4 className="ml-3 text-lg font-medium text-gray-900">
                      Fall
                    </h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-orange-600 mt-0.5 mr-2"></i>
                      <span>Apple and pear harvest</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-orange-600 mt-0.5 mr-2"></i>
                      <span>Winter squash and root crops</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-orange-600 mt-0.5 mr-2"></i>
                      <span>Cover crop planting</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-orange-600 mt-0.5 mr-2"></i>
                      <span>Poultry processing</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-calendar-alt text-orange-600 mt-0.5 mr-2"></i>
                      <span>Harvest Festival (October 8-9)</span>
                    </li>
                  </ul>
                </div>
                {/* Winter */}
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <div className="flex items-center mb-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <i className="fas fa-snowflake text-blue-600"></i>
                    </div>
                    <h4 className="ml-3 text-lg font-medium text-gray-900">
                      Winter
                    </h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-blue-600 mt-0.5 mr-2"></i>
                      <span>Equipment maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-blue-600 mt-0.5 mr-2"></i>
                      <span>Greenhouse production</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-blue-600 mt-0.5 mr-2"></i>
                      <span>Planning for next season</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-blue-600 mt-0.5 mr-2"></i>
                      <span>Winter markets with storage crops</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-calendar-alt text-blue-600 mt-0.5 mr-2"></i>
                      <span>Winter Workshops (Jan-Feb)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Photo Gallery */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
              Visual Tour
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Farm Gallery
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Take a visual journey through our farm's operations and seasonal
              beauty.
            </p>
          </div>
          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={() => handleGalleryFilterChange("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer ${
                activeGalleryFilter === "all"
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}>
              All Photos
            </button>
            <button
              onClick={() => handleGalleryFilterChange("operations")}
              className={`px-4 py-2 rounded-md text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer ${
                activeGalleryFilter === "operations"
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}>
              Farm Operations
            </button>
            <button
              onClick={() => handleGalleryFilterChange("seasons")}
              className={`px-4 py-2 rounded-md text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer ${
                activeGalleryFilter === "seasons"
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}>
              Seasonal Changes
            </button>
            <button
              onClick={() => handleGalleryFilterChange("wildlife")}
              className={`px-4 py-2 rounded-md text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer ${
                activeGalleryFilter === "wildlife"
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}>
              Wildlife & Nature
            </button>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Gallery Images */}
            <div className="relative group overflow-hidden rounded-lg shadow-md h-64">
              <img
                src="https://readdy.ai/api/search-image?query=Farm%20workers%20harvesting%20fresh%20vegetables%20in%20the%20early%20morning%20light%2C%20carefully%20picking%20and%20sorting%20produce%20in%20the%20field.%20The%20scene%20shows%20sustainable%20harvesting%20practices%20with%20workers%20wearing%20appropriate%20gear.%20Vibrant%20colors%20of%20various%20vegetables%20contrast%20with%20rich%20soil%20with%20clean%20minimalist%20background%20elements&width=300&height=400&seq=21&orientation=portrait"
                alt="Vegetable Harvesting"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-medium">
                    Vegetable Harvesting
                  </h4>
                  <p className="text-gray-200 text-sm">
                    Spring morning harvest
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md h-64">
              <img
                src="https://readdy.ai/api/search-image?query=Free-range%20chickens%20foraging%20in%20a%20lush%20pasture%20with%20mobile%20chicken%20coops%20visible%20in%20the%20background.%20The%20birds%20appear%20healthy%20and%20active%2C%20demonstrating%20natural%20behaviors.%20The%20scene%20shows%20humane%20poultry%20farming%20practices%20with%20clean%20minimalist%20background%20elements&width=300&height=400&seq=22&orientation=portrait"
                alt="Free-Range Poultry"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-medium">Free-Range Poultry</h4>
                  <p className="text-gray-200 text-sm">
                    Heritage breed chickens
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md h-64">
              <img
                src="https://readdy.ai/api/search-image?query=Apple%20orchard%20in%20full%20bloom%20with%20white%20and%20pink%20blossoms%20covering%20the%20trees.%20Rows%20of%20trees%20create%20a%20beautiful%20perspective.%20The%20scene%20shows%20springtime%20in%20the%20orchard%20with%20pollinators%20visible%20among%20the%20blossoms%20with%20clean%20minimalist%20background%20elements&width=300&height=400&seq=23&orientation=portrait"
                alt="Orchard in Bloom"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-medium">Orchard in Bloom</h4>
                  <p className="text-gray-200 text-sm">Spring apple blossoms</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md h-64">
              <img
                src="https://readdy.ai/api/search-image?query=Diverse%20wildlife%20on%20the%20farm%20-%20birds%2C%20butterflies%2C%20and%20beneficial%20insects%20in%20a%20natural%20habitat%20area%20with%20native%20wildflowers%20and%20grasses.%20The%20scene%20shows%20biodiversity%20conservation%20in%20agricultural%20settings%20with%20clean%20minimalist%20background%20elements&width=300&height=400&seq=24&orientation=portrait"
                alt="Farm Wildlife"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-medium">Farm Wildlife</h4>
                  <p className="text-gray-200 text-sm">
                    Pollinators and beneficial insects
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md h-64">
              <img
                src="https://readdy.ai/api/search-image?query=Farm%20tractor%20with%20specialized%20equipment%20working%20in%20a%20field%20with%20minimal%20soil%20disturbance.%20The%20modern%20equipment%20is%20designed%20for%20sustainable%20farming%20practices.%20The%20scene%20shows%20appropriate%20technology%20in%20regenerative%20agriculture%20with%20clean%20minimalist%20background%20elements&width=300&height=400&seq=25&orientation=portrait"
                alt="Farm Equipment"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-medium">Farm Equipment</h4>
                  <p className="text-gray-200 text-sm">
                    Precision farming technology
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md h-64">
              <img
                src="https://readdy.ai/api/search-image?query=Farm%20covered%20in%20snow%20during%20winter%20with%20beautiful%20landscape%20views.%20Greenhouse%20operations%20continue%20despite%20the%20season.%20The%20scene%20shows%20year-round%20farming%20activities%20with%20clean%20minimalist%20background%20elements&width=300&height=400&seq=26&orientation=portrait"
                alt="Winter on the Farm"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-medium">Winter on the Farm</h4>
                  <p className="text-gray-200 text-sm">Seasonal beauty</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md h-64">
              <img
                src="https://readdy.ai/api/search-image?query=Community%20workshop%20or%20tour%20on%20the%20farm%20with%20diverse%20participants%20learning%20about%20sustainable%20agriculture.%20Farmers%20are%20demonstrating%20techniques%20to%20engaged%20visitors.%20The%20scene%20shows%20educational%20outreach%20in%20agricultural%20settings%20with%20clean%20minimalist%20background%20elements&width=300&height=400&seq=27&orientation=portrait"
                alt="Farm Workshop"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-medium">Farm Workshop</h4>
                  <p className="text-gray-200 text-sm">Community education</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md h-64">
              <img
                src="https://readdy.ai/api/search-image?query=Beautiful%20sunset%20over%20farm%20fields%20with%20golden%20light%20illuminating%20crops%20and%20farm%20buildings.%20Long%20shadows%20create%20dramatic%20patterns%20across%20the%20landscape.%20The%20scene%20shows%20the%20natural%20beauty%20of%20agricultural%20settings%20with%20clean%20minimalist%20background%20elements&width=300&height=400&seq=28&orientation=portrait"
                alt="Farm Sunset"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-medium">Farm Sunset</h4>
                  <p className="text-gray-200 text-sm">Evening beauty</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-md text-base font-medium shadow-md !rounded-button whitespace-nowrap cursor-pointer">
              View Full Gallery
            </button>
          </div>
        </div>
      </div>
      {/* Visit Information */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
              Experience the Farm
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Visit Information
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              We welcome visitors to experience our farm firsthand through
              tours, workshops, and events.
            </p>
          </div>
          <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-6 py-5 border-b border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Tour Information
                  </h3>
                </div>
                <div className="px-6 py-5">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        Guided Farm Tours
                      </h4>
                      <p className="mt-2 text-gray-600">
                        Join our knowledgeable staff for a 90-minute walking
                        tour of the farm. Learn about our sustainable practices,
                        meet our animals, and see our diverse crops.
                      </p>
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-sm font-medium text-gray-900">
                            Schedule
                          </h5>
                          <ul className="mt-2 space-y-1 text-sm text-gray-600">
                            <li className="flex items-center">
                              <i className="fas fa-calendar-day text-green-600 mr-2"></i>{" "}
                              Saturday: 10am & 2pm
                            </li>
                            <li className="flex items-center">
                              <i className="fas fa-calendar-day text-green-600 mr-2"></i>{" "}
                              Sunday: 1pm
                            </li>
                            <li className="flex items-center">
                              <i className="fas fa-calendar-day text-green-600 mr-2"></i>{" "}
                              Wednesday: 4pm (May-Oct)
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-gray-900">
                            Pricing
                          </h5>
                          <ul className="mt-2 space-y-1 text-sm text-gray-600">
                            <li className="flex items-center">
                              <i className="fas fa-ticket-alt text-green-600 mr-2"></i>{" "}
                              Adults: $15
                            </li>
                            <li className="flex items-center">
                              <i className="fas fa-ticket-alt text-green-600 mr-2"></i>{" "}
                              Children (5-12): $8
                            </li>
                            <li className="flex items-center">
                              <i className="fas fa-ticket-alt text-green-600 mr-2"></i>{" "}
                              Under 5: Free
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        Self-Guided Tours
                      </h4>
                      <p className="mt-2 text-gray-600">
                        Explore the farm at your own pace with our self-guided
                        tour map. Visit designated areas and read informational
                        signs about our operations.
                      </p>
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-sm font-medium text-gray-900">
                            Hours
                          </h5>
                          <ul className="mt-2 space-y-1 text-sm text-gray-600">
                            <li className="flex items-center">
                              <i className="fas fa-clock text-green-600 mr-2"></i>{" "}
                              Friday-Sunday: 9am-4pm
                            </li>
                            <li className="flex items-center">
                              <i className="fas fa-clock text-green-600 mr-2"></i>{" "}
                              May through October
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-gray-900">
                            Pricing
                          </h5>
                          <ul className="mt-2 space-y-1 text-sm text-gray-600">
                            <li className="flex items-center">
                              <i className="fas fa-ticket-alt text-green-600 mr-2"></i>{" "}
                              Adults: $8
                            </li>
                            <li className="flex items-center">
                              <i className="fas fa-ticket-alt text-green-600 mr-2"></i>{" "}
                              Children (5-12): $4
                            </li>
                            <li className="flex items-center">
                              <i className="fas fa-ticket-alt text-green-600 mr-2"></i>{" "}
                              Under 5: Free
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        Group Tours
                      </h4>
                      <p className="mt-2 text-gray-600">
                        We offer specialized tours for schools, organizations,
                        and other groups. Custom tours can be arranged to focus
                        on specific aspects of our farm.
                      </p>
                      <div className="mt-4">
                        <h5 className="text-sm font-medium text-gray-900">
                          Details
                        </h5>
                        <ul className="mt-2 space-y-1 text-sm text-gray-600">
                          <li className="flex items-center">
                            <i className="fas fa-users text-green-600 mr-2"></i>{" "}
                            Minimum 10 people, maximum 30
                          </li>
                          <li className="flex items-center">
                            <i className="fas fa-calendar-alt text-green-600 mr-2"></i>{" "}
                            Available weekdays by appointment
                          </li>
                          <li className="flex items-center">
                            <i className="fas fa-ticket-alt text-green-600 mr-2"></i>{" "}
                            Special rates available for schools
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-6 py-5 border-b border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Farm Rules & Booking
                  </h3>
                </div>
                <div className="px-6 py-5">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        Farm Guidelines
                      </h4>
                      <ul className="mt-2 space-y-2 text-sm text-gray-600">
                        <li className="flex items-start">
                          <i className="fas fa-check-circle text-green-600 mt-0.5 mr-2"></i>
                          <span>Stay on designated paths and areas</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check-circle text-green-600 mt-0.5 mr-2"></i>
                          <span>
                            Do not feed or disturb animals without staff
                            supervision
                          </span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check-circle text-green-600 mt-0.5 mr-2"></i>
                          <span>Children must be supervised at all times</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check-circle text-green-600 mt-0.5 mr-2"></i>
                          <span>
                            No pets allowed (service animals excepted)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check-circle text-green-600 mt-0.5 mr-2"></i>
                          <span>
                            Please take all trash with you or use provided bins
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        What to Bring
                      </h4>
                      <ul className="mt-2 space-y-2 text-sm text-gray-600">
                        <li className="flex items-start">
                          <i className="fas fa-check-circle text-green-600 mt-0.5 mr-2"></i>
                          <span>
                            Comfortable walking shoes (closed-toe recommended)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check-circle text-green-600 mt-0.5 mr-2"></i>
                          <span>Weather-appropriate clothing</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check-circle text-green-600 mt-0.5 mr-2"></i>
                          <span>Sun protection (hat, sunscreen)</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check-circle text-green-600 mt-0.5 mr-2"></i>
                          <span>Water bottle</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check-circle text-green-600 mt-0.5 mr-2"></i>
                          <span>Camera (photography encouraged!)</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        Book Your Visit
                      </h4>
                      <p className="mt-2 text-sm text-gray-600">
                        Reservations are recommended for all tours to ensure
                        availability. Please book at least 24 hours in advance.
                      </p>
                      <div className="mt-4 flex space-x-4">
                        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer">
                          Book Online
                        </button>
                        <button className="bg-white hover:bg-gray-50 text-green-600 border border-green-600 px-4 py-2 rounded-md text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer">
                          Group Booking Inquiry
                        </button>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="text-lg font-medium text-gray-900">
                        Contact for Visits
                      </h4>
                      <div className="mt-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <i className="fas fa-phone text-green-600 mr-2"></i>
                          <span>(555) 123-4567 ext. 2</span>
                        </div>
                        <div className="flex items-center mt-1">
                          <i className="fas fa-envelope text-green-600 mr-2"></i>
                          <span>tours@greenacresfarm.com</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and description */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center">
                <i className="fas fa-leaf text-green-400 text-2xl mr-2"></i>
                <span className="font-bold text-xl">Green Acres Farm</span>
              </div>
              <p className="mt-4 text-gray-300 text-sm">
                Sustainable farming practices producing quality crops and
                poultry since 1965.
              </p>
              <div className="mt-4 flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="fab fa-youtube text-xl"></i>
                </a>
              </div>
            </div>
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white cursor-pointer">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white cursor-pointer">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://readdy.ai/home/584712dc-c8e5-4de4-9352-8fedc59d8a18/155fece8-ca9d-4150-9458-eca418b7b6bd"
                    data-readdy="true"
                    className="text-gray-300 hover:text-white cursor-pointer">
                    Our Farm
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white cursor-pointer">
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white cursor-pointer">
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white cursor-pointer">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* Farm Activities */}
            <div>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                Farm Activities
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white cursor-pointer">
                    Crop Production
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white cursor-pointer">
                    Poultry Farming
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white cursor-pointer">
                    Farm Tours
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white cursor-pointer">
                    Workshops
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white cursor-pointer">
                    Community Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white cursor-pointer">
                    Sustainability Practices
                  </a>
                </li>
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                Contact Info
              </h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt text-gray-400 mt-1 mr-2"></i>
                  <span className="text-gray-300">
                    123 Rural Route, Farmville
                    <br />
                    State, Country, 12345
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone text-gray-400 mr-2"></i>
                  <span className="text-gray-300">(555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope text-gray-400 mr-2"></i>
                  <span className="text-gray-300">info@greenacresfarm.com</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-clock text-gray-400 mr-2"></i>
                  <span className="text-gray-300">Mon-Fri: 8am-5pm</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-400">
              &copy; {new Date().getFullYear()} Green Acres Farm. All rights
              reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-300 cursor-pointer">
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-300 cursor-pointer">
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-300 cursor-pointer">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Farm;
