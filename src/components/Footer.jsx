import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center">
              <i className="fas fa-leaf text-green-400 text-2xl mr-2"></i>
              <span className="font-bold text-xl">Kibet Farms</span>
            </div>
            <p className="mt-4 text-gray-300 text-sm">
              Sustainable farming practices producing quality crops and poultry
              since 1965.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className=" justify-items-start">
            <h3 className="text-sm  font-semibold text-gray-200 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://readdy.ai/home/584712dc-c8e5-4de4-9352-8fedc59d8a18/155fece8-ca9d-4150-9458-eca418b7b6bd"
                  className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Our Farm
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
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
                <a href="#" className="text-gray-300 hover:text-white">
                  Crop Production
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Poultry Farming
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Farm Tours
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Workshops
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Community Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
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
                  Rural Route, Nakuru
                  <br />
                  Nakuru, Kenya, 2126
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-gray-400 mr-2"></i>
                <span className="text-gray-300">+254707632591</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-gray-400 mr-2"></i>
                <span className="text-gray-300">info@mkulimamdogofarm.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock text-gray-400 mr-2"></i>
                <span className="text-gray-300">Mon-Fri: 8am - 5pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} Kibet Farms. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
