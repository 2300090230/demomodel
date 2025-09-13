import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", location: "", skills: "" });
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(form); // fake register
    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white shadow-xl rounded-xl p-8 border-t-4 border-gov-orange">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gov-blue mb-2">Join PM Internship</h2>
          <p className="text-gov-gray-500">Create your account to get started</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gov-gray-700 mb-2">
              Full Name
            </label>
            <input 
              id="name"
              type="text" 
              placeholder="Enter your full name" 
              className="w-full px-4 py-3 border border-gov-gray-300 rounded-lg focus:ring-2 focus:ring-gov-orange focus:border-gov-orange transition-colors duration-200 placeholder-gov-gray-400"
              value={form.name} 
              onChange={(e) => setForm({ ...form, name: e.target.value })} 
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gov-gray-700 mb-2">
              Email Address
            </label>
            <input 
              id="email"
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-3 border border-gov-gray-300 rounded-lg focus:ring-2 focus:ring-gov-orange focus:border-gov-orange transition-colors duration-200 placeholder-gov-gray-400"
              value={form.email} 
              onChange={(e) => setForm({ ...form, email: e.target.value })} 
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gov-gray-700 mb-2">
              Password
            </label>
            <input 
              id="password"
              type="password" 
              placeholder="Create a password" 
              className="w-full px-4 py-3 border border-gov-gray-300 rounded-lg focus:ring-2 focus:ring-gov-orange focus:border-gov-orange transition-colors duration-200 placeholder-gov-gray-400"
              value={form.password} 
              onChange={(e) => setForm({ ...form, password: e.target.value })} 
              required
            />
          </div>
          
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gov-gray-700 mb-2">
              Location
            </label>
            <input 
              id="location"
              type="text" 
              placeholder="City, State" 
              className="w-full px-4 py-3 border border-gov-gray-300 rounded-lg focus:ring-2 focus:ring-gov-orange focus:border-gov-orange transition-colors duration-200 placeholder-gov-gray-400"
              value={form.location} 
              onChange={(e) => setForm({ ...form, location: e.target.value })} 
              required
            />
          </div>
          
          <div>
            <label htmlFor="skills" className="block text-sm font-medium text-gov-gray-700 mb-2">
              Skills
            </label>
            <input 
              id="skills"
              type="text" 
              placeholder="React, JavaScript, Python (comma separated)" 
              className="w-full px-4 py-3 border border-gov-gray-300 rounded-lg focus:ring-2 focus:ring-gov-orange focus:border-gov-orange transition-colors duration-200 placeholder-gov-gray-400"
              value={form.skills} 
              onChange={(e) => setForm({ ...form, skills: e.target.value })} 
            />
          </div>
          
          <button 
            type="submit"
            className="w-full bg-gov-orange hover:bg-gov-orange-dark text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gov-orange focus:ring-offset-2"
          >
            Create Account
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gov-gray-500">
            Already have an account?{' '}
            <a href="/login" className="text-gov-blue hover:text-gov-blue-dark font-medium transition-colors duration-200">
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
