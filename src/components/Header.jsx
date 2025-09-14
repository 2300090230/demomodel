import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gov-blue shadow-lg">
      {/* Main Navigation */}
      <nav className="bg-gov-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <div className="text-white">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7V10C2 16 6.2 21.05 12 22C17.8 21.05 22 16 22 10V7L12 2Z" />
                </svg>
              </div>
              <Link to="/" className="text-white text-xl font-bold">
                PM Internship Scheme
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/registration" 
                className="text-white hover:text-gov-orange transition-colors duration-200 font-medium"
              >
                Registration
              </Link>
              <Link 
                to="/login" 
                className="text-white hover:text-gov-orange transition-colors duration-200 font-medium"
              >
                Login
              </Link>
              <Link 
                to="/partnercompanies" 
                className="text-white hover:text-gov-orange transition-colors duration-200 font-medium"
              >
                Partner Companies
              </Link>
              <Link 
                to="/opportunities" 
                className="text-white hover:text-gov-orange transition-colors duration-200 font-medium"
              >
                Opportunities
              </Link>
              <Link 
                to="/news" 
                className="text-white hover:text-gov-orange transition-colors duration-200 font-medium"
              >
                News
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gov-orange focus:outline-none focus:text-gov-orange"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-gov-blue-dark">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link 
                  to="/registration" 
                  className="block px-3 py-2 text-white hover:text-gov-orange transition-colors duration-200"
                >
                  Registration
                </Link>
                <Link 
                  to="/login" 
                  className="block px-3 py-2 text-white hover:text-gov-orange transition-colors duration-200"
                >
                  Login
                </Link>
                <Link 
                  to="/partner-companies" 
                  className="block px-3 py-2 text-white hover:text-gov-orange transition-colors duration-200"
                >
                  Partner Companies
                </Link>
                <Link 
                  to="/opportunities" 
                  className="block px-3 py-2 text-white hover:text-gov-orange transition-colors duration-200"
                >
                  Opportunities
                </Link>
                <Link 
                  to="/news" 
                  className="block px-3 py-2 text-white hover:text-gov-orange transition-colors duration-200"
                >
                  News
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}