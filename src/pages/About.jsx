// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <div
        className="relative overflow-hidden bg-cover bg-center h-[600px]"
        style={{
          backgroundImage:
            "url('https://readdy.ai/api/search-image?query=A%2520beautiful%2520historic%2520farm%2520building%2520with%2520a%2520red%2520barn%2520and%2520silo%2520surrounded%2520by%2520rolling%2520green%2520hills%2520and%2520farmland.%2520Golden%2520evening%2520light%2520creates%2520a%2520warm%2520glow%2520across%2520the%2520landscape%2520with%2520trees%2520framing%2520the%2520scene.%2520The%2520image%2520has%2520a%2520gradient%2520from%2520darker%2520left%2520side%2520to%2520brighter%2520right%2520side%2520to%2520allow%2520text%2520overlay&width=1440&height=600&seq=10&orientation=landscape')",
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex flex-col justify-center h-full max-w-2xl">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">Our Story</span>
                <span className="block text-green-400">Since 1965</span>
              </h1>
              <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
                Discover the rich heritage of Green Acres Farm, where three
                generations of sustainable farming practices have created a
                legacy of quality, community, and environmental stewardship.
              </p>
              <div className="mt-8">
                <a
                  href="https://readdy.ai/home/584712dc-c8e5-4de4-9352-8fedc59d8a18/155fece8-ca9d-4150-9458-eca418b7b6bd"
                  data-readdy="true"
                  className="inline-flex items-center text-green-400 hover:text-green-300 cursor-pointer">
                  <i className="fas fa-arrow-left mr-2"></i> Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mission & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">
                Clinton Legacy
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Since 2024, Kibet's family has been cultivating the rich soils
                of Green Valley. What started as a small vegetable garden has
                grown into a thriving 200-acre farm that serves our local
                community with fresh, organic produce.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Today, our fourth generation continues the tradition of
                sustainable farming practices, combining time-tested methods
                with modern innovations to bring you the freshest, most
                nutritious produce possible.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Est. 2024
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  4th Generation
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  200 Acres
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Organic Certified
                </span>
              </div>
            </div>
            <div
              className="h-96 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
              }}></div>
          </div>
        </div>
      </section>
      {/* Our values */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-700">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* Replace with an SVG or icon for Heart */}
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
                  />
                </svg>
              </div>
              <div className="text-green-800 font-bold text-lg mb-2">
                Family First
              </div>
              <p className="text-gray-600">
                Our farm is built on family values and community connections
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* Replace with an SVG or icon for Leaf */}
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 21c0-4.418 7-13 7-13s7 8.582 7 13a7 7 0 01-14 0z"
                  />
                </svg>
              </div>
              <div className="text-green-800 font-bold text-lg mb-2">
                Sustainability
              </div>
              <p className="text-gray-600">
                We protect the land for future generations through eco-friendly
                practices
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* Replace with an SVG or icon for Award */}
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2s-3 1.343-3 3 1.343 3 3 3zm0 2c-2.21 0-4 1.79-4 4v5a1 1 0 001 1h6a1 1 0 001-1v-5c0-2.21-1.79-4-4-4z"
                  />
                </svg>
              </div>
              <div className="text-green-800 font-bold text-lg mb-2">
                Quality
              </div>
              <p className="text-gray-600">
                Every harvest meets our highest standards for freshness and
                nutrition
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* Replace with an SVG or icon for Users */}
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 7a4 4 0 11-8 0 4 4 0 018 0zm6 13v-2a4 4 0 00-3-3.87M6 10a4 4 0 100-8 4 4 0 000 8zm12 0a4 4 0 100-8 4 4 0 000 8z"
                  />
                </svg>
              </div>
              <div className="text-green-800 font-bold text-lg mb-2">
                Community
              </div>
              <p className="text-gray-600">
                Supporting local families with healthy, affordable food
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Team Members */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
              Meet Our Team
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              The People Behind Green Acres
            </p>
            <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500">
              Our dedicated team brings diverse expertise and shared values to
              every aspect of farm operations.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="bg-white overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-xl">
              <div className="h-80 w-full overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520a%2520confident%2520male%2520farm%2520manager%2520in%2520his%2520mid-30s%2520with%2520short%2520brown%2520hair%2520and%2520casual%2520professional%2520attire%2520standing%2520in%2520front%2520of%2520farm%2520fields.%2520He%2520has%2520a%2520friendly%2520expression%2520and%2520appears%2520knowledgeable%2520and%2520approachable.%2520Natural%2520lighting%2520with%2520farm%2520backdrop%2520creating%2520a%2520professional%2520headshot%2520with%2520clean%2520simple%2520background&width=400&height=500&seq=15&orientation=portrait"
                  alt="Michael Williams"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Michael Williams
                </h3>
                <p className="text-sm text-green-600 font-medium">
                  Farm Director & Co-Owner
                </p>
                <p className="mt-3 text-gray-500">
                  With a degree in Agricultural Science and a passion for
                  innovation, Michael oversees overall farm operations and
                  strategic planning. He specializes in regenerative farming
                  techniques and sustainable technology integration.
                </p>
                <div className="mt-4 flex space-x-3">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 cursor-pointer">
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 cursor-pointer">
                    <i className="fab fa-twitter text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 cursor-pointer">
                    <i className="fas fa-envelope text-lg"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-xl">
              <div className="h-80 w-full overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520a%2520confident%2520female%2520farm%2520manager%2520in%2520her%2520early%252030s%2520with%2520shoulder-length%2520hair%2520and%2520casual%2520professional%2520attire%2520standing%2520in%2520a%2520greenhouse%2520with%2520plants.%2520She%2520has%2520a%2520warm%2520smile%2520and%2520appears%2520knowledgeable%2520and%2520passionate.%2520Natural%2520lighting%2520with%2520green%2520plant%2520backdrop%2520creating%2520a%2520professional%2520headshot%2520with%2520clean%2520simple%2520background&width=400&height=500&seq=16&orientation=portrait"
                  alt="Emily Williams"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Emily Williams
                </h3>
                <p className="text-sm text-green-600 font-medium">
                  Community Outreach & Co-Owner
                </p>
                <p className="mt-3 text-gray-500">
                  Emily combines her background in Environmental Education with
                  her farming heritage to lead our community programs. She
                  manages the CSA program, educational workshops, and
                  partnerships with local schools and restaurants.
                </p>
                <div className="mt-4 flex space-x-3">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 cursor-pointer">
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 cursor-pointer">
                    <i className="fab fa-twitter text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 cursor-pointer">
                    <i className="fas fa-envelope text-lg"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-xl">
              <div className="h-80 w-full overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520an%2520experienced%2520male%2520crop%2520specialist%2520in%2520his%252040s%2520examining%2520plants%2520in%2520a%2520field.%2520He%2520has%2520a%2520thoughtful%2520expression%2520and%2520is%2520dressed%2520in%2520practical%2520farm%2520work%2520clothes.%2520The%2520image%2520shows%2520his%2520expertise%2520as%2520he%2520carefully%2520inspects%2520crop%2520health.%2520Natural%2520outdoor%2520lighting%2520with%2520field%2520backdrop%2520creating%2520a%2520professional%2520portrait%2520with%2520clean%2520simple%2520background&width=400&height=500&seq=17&orientation=portrait"
                  alt="David Chen"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-xl font-bold text-gray-900">David Chen</h3>
                <p className="text-sm text-green-600 font-medium">
                  Crop Production Manager
                </p>
                <p className="mt-3 text-gray-500">
                  With over 15 years of experience in organic farming, David
                  oversees all aspects of crop production. His expertise in soil
                  health, pest management, and season extension has been
                  instrumental in maximizing our farm's productivity.
                </p>
                <div className="mt-4 flex space-x-3">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 cursor-pointer">
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 cursor-pointer">
                    <i className="fab fa-twitter text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 cursor-pointer">
                    <i className="fas fa-envelope text-lg"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-xl">
              <div className="h-80 w-full overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520a%2520female%2520livestock%2520specialist%2520in%2520her%252030s%2520with%2520chickens%2520in%2520a%2520free-range%2520environment.%2520She%2520has%2520a%2520caring%2520expression%2520and%2520is%2520dressed%2520in%2520practical%2520farm%2520work%2520clothes.%2520The%2520image%2520shows%2520her%2520gentle%2520interaction%2520with%2520the%2520animals%2520demonstrating%2520her%2520expertise%2520in%2520animal%2520care.%2520Natural%2520lighting%2520with%2520farm%2520backdrop%2520creating%2520a%2520professional%2520portrait%2520with%2520clean%2520background&width=400&height=500&seq=18&orientation=portrait"
                  alt="Maria Rodriguez"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Maria Rodriguez
                </h3>
                <p className="text-sm text-green-600 font-medium">
                  Poultry Operations Manager
                </p>
                <p className="mt-3 text-gray-500">
                  Maria brings her veterinary background and passion for animal
                  welfare to our poultry operations. She ensures our birds
                  receive the highest standard of care while implementing
                  innovative practices for sustainable production.
                </p>
                <div className="mt-4 flex space-x-3">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 cursor-pointer">
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 cursor-pointer">
                    <i className="fab fa-twitter text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 cursor-pointer">
                    <i className="fas fa-envelope text-lg"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="bg-white overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-xl">
              <div className="h-80 w-full overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520a%2520male%2520farm%2520educator%2520in%2520his%2520late%252020s%2520demonstrating%2520sustainable%2520farming%2520techniques%2520to%2520a%2520small%2520group.%2520He%2520has%2520an%2520engaging%2520expression%2520and%2520is%2520dressed%2520in%2520casual%2520professional%2520attire.%2520The%2520image%2520shows%2520him%2520teaching%2520with%2520enthusiasm%2520and%2520knowledge.%2520Natural%2520lighting%2520with%2520educational%2520farm%2520setting%2520backdrop%2520creating%2520a%2520professional%2520portrait%2520with%2520clean%2520background&width=400&height=500&seq=19&orientation=portrait"
                  alt="Jason Kim"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-xl font-bold text-gray-900">Jason Kim</h3>
                <p className="text-sm text-green-600 font-medium">
                  Education & Tour Coordinator
                </p>
                <p className="mt-3 text-gray-500">
                  Jason combines his teaching background with his agricultural
                  knowledge to create engaging educational experiences for
                  visitors of all ages. He designs and leads our farm tours,
                  workshops, and school programs.
                </p>
                <div className="mt-4 flex space-x-3">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 cursor-pointer">
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 cursor-pointer">
                    <i className="fab fa-twitter text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 cursor-pointer">
                    <i className="fas fa-envelope text-lg"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 6 */}
            <div className="bg-white overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-xl">
              <div className="h-80 w-full overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520a%2520female%2520sustainability%2520director%2520in%2520her%2520mid-30s%2520working%2520with%2520renewable%2520energy%2520systems%2520on%2520a%2520farm.%2520She%2520has%2520a%2520determined%2520expression%2520and%2520is%2520dressed%2520in%2520smart%2520casual%2520attire.%2520The%2520image%2520shows%2520her%2520next%2520to%2520solar%2520panels%2520or%2520other%2520green%2520technology.%2520Natural%2520lighting%2520with%2520sustainable%2520technology%2520backdrop%2520creating%2520a%2520professional%2520portrait%2520with%2520clean%2520background&width=400&height=500&seq=20&orientation=portrait"
                  alt="Priya Patel"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-xl font-bold text-gray-900">Priya Patel</h3>
                <p className="text-sm text-green-600 font-medium">
                  Sustainability Director
                </p>
                <p className="mt-3 text-gray-500">
                  With a background in environmental engineering, Priya leads
                  our sustainability initiatives. She manages our renewable
                  energy systems, water conservation projects, and works to
                  continuously reduce our environmental footprint.
                </p>
                <div className="mt-4 flex space-x-3">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 cursor-pointer">
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 cursor-pointer">
                    <i className="fab fa-twitter text-lg"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gray-600 cursor-pointer">
                    <i className="fas fa-envelope text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sustainable Practices */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
              Our Approach
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Sustainable Farming Practices
            </p>
            <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500">
              We implement innovative methods that protect the environment,
              enhance biodiversity, and produce nutritious food.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Practice 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <i className="fas fa-seedling text-green-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Regenerative Agriculture
              </h3>
              <p className="mt-2 text-gray-500">
                We go beyond organic by implementing practices that actively
                rebuild soil health, increase biodiversity, and sequester
                carbon. Our no-till methods and cover cropping preserve soil
                structure and microbial life.
              </p>
            </div>

            {/* Practice 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <i className="fas fa-water text-green-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Water Conservation
              </h3>
              <p className="mt-2 text-gray-500">
                Our drip irrigation systems, rainwater harvesting, and retention
                ponds minimize water usage while ensuring crops receive optimal
                moisture. We've reduced water consumption by 40% over the past
                decade.
              </p>
            </div>

            {/* Practice 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <i className="fas fa-bug text-green-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Integrated Pest Management
              </h3>
              <p className="mt-2 text-gray-500">
                We use natural predators, companion planting, and other
                biological controls to manage pests without synthetic chemicals.
                Our diverse plantings create habitat for beneficial insects.
              </p>
            </div>

            {/* Practice 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <i className="fas fa-sun text-green-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Renewable Energy
              </h3>
              <p className="mt-2 text-gray-500">
                Solar panels on our barn roofs generate 75% of our electricity
                needs. Our equipment is transitioning to electric models charged
                by our renewable systems, reducing fossil fuel dependence.
              </p>
            </div>

            {/* Practice 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <i className="fas fa-recycle text-green-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Zero Waste Systems
              </h3>
              <p className="mt-2 text-gray-500">
                We compost all organic matter, use biodegradable packaging, and
                have implemented closed-loop systems where outputs from one
                process become inputs for another, minimizing waste.
              </p>
            </div>

            {/* Practice 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <i className="fas fa-feather-alt text-green-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Humane Animal Husbandry
              </h3>
              <p className="mt-2 text-gray-500">
                Our poultry has access to spacious outdoor areas, natural
                shelter, and species-appropriate feed. We prioritize animal
                welfare through all stages of life and maintain small flock
                sizes for personalized care.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Farm Timeline */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
              Our Journey
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Farm Timeline
            </p>
            <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500">
              Key milestones in our growth from a small family homestead to a
              thriving sustainable farm.
            </p>
          </div>

          <div className="mt-12 relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

            {/* 2023 */}
            <div className="relative mb-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full bg-green-600 border-4 border-white shadow"></div>
              <div className="relative flex justify-between items-center">
                <div className="w-5/12 pr-8 text-right">
                  <h3 className="text-xl font-bold text-gray-900">2023</h3>
                  <p className="mt-2 text-gray-600">
                    Clint and Henry leased 20 acres and establish Green Acres
                    Farm as a small family homestead.
                  </p>
                </div>
                <div className="w-5/12 pl-8">
                  <div className="rounded-lg overflow-hidden shadow-md h-40">
                    <img
                      src="https://readdy.ai/api/search-image?query=A%2520small%2520rural%2520farm%2520in%2520the%25201960s%2520with%2520a%2520simple%2520wooden%2520barn%2520and%2520modest%2520farmhouse.%2520A%2520vintage%2520tractor%2520and%2520basic%2520farming%2520equipment%2520visible%2520with%2520newly%2520planted%2520fields.%2520The%2520image%2520has%2520a%2520slightly%2520vintage%2520quality%2520showing%2520the%2520humble%2520beginnings%2520of%2520a%2520family%2520farm%2520with%2520simple%2520structures%2520and%2520limited%2520acreage&width=300&height=200&seq=21&orientation=landscape"
                      alt="Farm Beginning"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 2024 */}
            <div className="relative mb-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full bg-green-600 border-4 border-white shadow"></div>
              <div className="relative flex justify-between items-center">
                <div className="w-5/12 pr-8">
                  <div className="rounded-lg overflow-hidden shadow-md h-40">
                    <img
                      src="https://readdy.ai/api/search-image?query=A%2520modern%2520farm%2520education%2520center%2520opening%2520in%25202022%2520with%2520sustainable%2520architecture%2520and%2520educational%2520displays.%2520Contemporary%2520building%2520with%2520people%2520participating%2520in%2520workshops%2520and%2520learning%2520about%2520sustainable%2520agriculture.%2520The%2520image%2520shows%2520the%2520farm%2527s%2520commitment%2520to%2520education%2520with%2520a%2520purpose-built%2520facility%2520for%2520community%2520engagement&width=300&height=200&seq=28&orientation=landscape"
                      alt="Education Center"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className="w-5/12 pl-8 text-left">
                  <h3 className="text-xl font-bold text-gray-900">2024</h3>
                  <p className="mt-2 text-gray-600">
                    Opened dedicated education center for workshops and
                    community events. Received regional award for sustainable
                    agriculture practices.
                  </p>
                </div>
              </div>
            </div>

            {/* 2025 */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full bg-green-600 border-4 border-white shadow"></div>
              <div className="relative flex justify-between items-center">
                <div className="w-5/12 pr-8 text-right">
                  <h3 className="text-xl font-bold text-gray-900">2025</h3>
                  <p className="mt-2 text-gray-600">
                    Celebrating 60 years of farming with expanded regenerative
                    practices and carbon-neutral operations. Looking forward to
                    continued innovation and community impact.
                  </p>
                </div>
                <div className="w-5/12 pl-8">
                  <div className="rounded-lg overflow-hidden shadow-md h-40">
                    <img
                      src="https://readdy.ai/api/search-image?query=A%2520modern%2520farm%2520celebration%2520in%25202025%2520marking%252060%2520years%2520of%2520operation%2520with%2520multi-generational%2520family%2520and%2520community%2520gathering.%2520Contemporary%2520sustainable%2520farm%2520with%2520celebration%2520banners%2520and%2520people%2520of%2520all%2520ages%2520participating%2520in%2520anniversary%2520event.%2520The%2520image%2520shows%2520the%2520farm%2527s%2520legacy%2520and%2520future%2520with%2520modern%2520sustainable%2520practices%2520visible&width=300&height=200&seq=29&orientation=landscape"
                      alt="60th Anniversary"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
    </div>
  );
};

export default App;
