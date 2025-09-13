import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-gov-blue text-white px-4 py-3 shadow-lg border-b-4 border-gov-orange">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="pm-logo text-gov-orange text-2xl font-bold">
          PM Internship Scheme
        </div>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Link 
                to="/dashboard" 
                className="text-white hover:text-gov-orange px-3 py-1 transition-colors duration-200"
              >
                Dashboard
              </Link>
              <Link 
                to="/upload" 
                className="text-white hover:text-gov-orange px-3 py-1 transition-colors duration-200"
              >
                Upload Resume
              </Link>
              <button 
                onClick={logout} 
                className="bg-gov-red hover:bg-gov-red-dark text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                to="/login" 
                className="text-white hover:text-gov-orange px-3 py-1 transition-colors duration-200"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="bg-gov-orange hover:bg-gov-orange-dark text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
