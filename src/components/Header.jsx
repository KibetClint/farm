import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  // Close mobile menu when resizing beyond md breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setNavOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/farm", label: "Our Farm" },
    { to: "/book-visit", label: "Book a Visit" },
    { to: "/products", label: "Products" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/images/logo.png" // e.g. /assets/logo.png or from a URL
              alt="Kibet Farm Logo"
              className="w-15 h-15 rounded-full shadow-lg object-cover"
            />
            <span className="text-3xl font-bold bg-gradient-to-r from-emerald-800 to-green-700 bg-clip-text text-transparent">
              Kibet Farm
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                {label}
              </Link>
            ))}
          </nav>

          {/* Shop CTA */}
          <Link
            to="/store"
            className="hidden sm:inline-block bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-medium px-4 py-2 rounded-lg shadow-lg transition-colors">
            Shop Now
          </Link>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setNavOpen(!navOpen)}
              aria-label="Toggle menu">
              {navOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md transition-max-height duration-300 overflow-hidden ${
          navOpen ? "max-h-screen" : "max-h-0"
        }`}>
        <nav className="flex flex-col space-y-4 px-4 py-6">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              onClick={() => setNavOpen(false)}>
              {label}
            </Link>
          ))}
          <Link
            to="/store"
            className="block bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-medium px-4 py-2 rounded-lg shadow-lg transition-colors"
            onClick={() => setNavOpen(false)}>
            Shop Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
