import React, { useState } from "react";
import { Link, Routes, useLocation, useNavigate, Route } from "react-router-dom";
import { useAuth } from "../contextapi/AuthContext";
import ApplicantHome from './ApplicantHome';
import Profile from './Profile';
import ViewMyOpportunities from './ViewMyOpportunities';
import Opportunities from './Opportunities';

function ApplicantNavbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logoutApplicant, applicant } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logoutApplicant();
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <div>
      {/* Navigation Header */}
      <header className="bg-gov-blue shadow-lg">
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
                  to="/" 
                  className="text-white hover:text-gov-orange transition-colors duration-200 font-medium"
                >
                  Dashboard
                </Link>
                <Link 
                  to="/profile" 
                  className="text-white hover:text-gov-orange transition-colors duration-200 font-medium"
                >
                  Profile
                </Link>
                <Link 
                  to="/viewmyopportunities" 
                  className="text-white hover:text-gov-orange transition-colors duration-200 font-medium"
                >
                  My Applications
                </Link>
                <Link 
                  to="/opportunities" 
                  className="text-white hover:text-gov-orange transition-colors duration-200 font-medium"
                >
                  Opportunities
                </Link>
                
                {/* User Welcome & Logout */}
                <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-white/30">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gov-orange rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">
                      Welcome, {applicant?.username || 'User'}
                    </span>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="bg-gov-red hover:bg-gov-red-dark text-white px-4 py-2 rounded font-medium transition-colors duration-200 flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                    </svg>
                    <span>Logout</span>
                  </button>
                </div>
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
                    to="/" 
                    className="block px-3 py-2 text-white hover:text-gov-orange transition-colors duration-200"
                  >
                    Dashboard
                  </Link>
                  <Link 
                    to="/profile" 
                    className="block px-3 py-2 text-white hover:text-gov-orange transition-colors duration-200"
                  >
                    Profile
                  </Link>
                  <Link 
                    to="/viewmyopportunities" 
                    className="block px-3 py-2 text-white hover:text-gov-orange transition-colors duration-200"
                  >
                    My Applications
                  </Link>
                  <Link 
                    to="/opportunities" 
                    className="block px-3 py-2 text-white hover:text-gov-orange transition-colors duration-200"
                  >
                    Opportunities
                  </Link>
                  
                  {/* Mobile User Info & Logout */}
                  <div className="border-t border-white/30 mt-3 pt-3">
                    <div className="flex items-center space-x-2 px-3 py-2">
                      <div className="w-6 h-6 bg-gov-orange rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white text-sm font-medium">
                        {applicant?.username || 'User'}
                      </span>
                    </div>
                    <button 
                      onClick={handleLogout}
                      className="w-full mt-2 mx-3 bg-gov-red hover:bg-gov-red-dark text-white px-3 py-2 rounded font-medium transition-colors duration-200 text-left flex items-center space-x-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                      </svg>
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Page Content Routes */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/viewmyopportunities" element={<ViewMyOpportunities />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/" element={<ApplicantHome />} />
        </Routes>
      </main>
    </div>
  );
}

export default ApplicantNavbar;