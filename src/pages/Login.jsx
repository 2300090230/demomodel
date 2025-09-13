import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form); // fake login, always success
    navigate("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white shadow-xl rounded-xl p-8 border-t-4 border-gov-orange">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gov-blue mb-2">Welcome Back</h2>
          <p className="text-gov-gray-500">Sign in to your account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
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
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gov-gray-300 rounded-lg focus:ring-2 focus:ring-gov-orange focus:border-gov-orange transition-colors duration-200 placeholder-gov-gray-400"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>
          
          <button 
            type="submit"
            className="w-full bg-gov-blue hover:bg-gov-blue-dark text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gov-blue focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gov-gray-500">
            Don't have an account?{' '}
            <a href="/register" className="text-gov-orange hover:text-gov-orange-dark font-medium transition-colors duration-200">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
