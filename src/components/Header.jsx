import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-emerald-800 to-green-700 bg-clip-text text-transparent">
              Kibet Farm
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              About
            </Link>
            <Link
              to="/farm"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Our Farm
            </Link>
            <Link
              to="/book-visit"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Book a Visit
            </Link>
            <Link
              to="/store"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Store
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Call to Action */}
          <Link
            to="/store"
            className="hidden sm:inline-block bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-medium px-4 py-2 rounded-lg shadow-lg transition-colors">
            Shop Now
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
//
