import React, { useState } from 'react';
import axios from 'axios';
import config from '../config.js';

export default function Registration() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    skills: [],
    qualifications: '',
    location_prefrences: '',
    native_location: '',
    social_category: '',
    participation_status: 'New'
  });

  const [skillInput, setSkillInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const socialCategories = ['SC', 'ST', 'OBC', 'EWS', 'BC'];
  const participationStatuses = ['Rejected', 'New', 'Benefitted'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddSkill = () => {
    if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, skillInput.trim()]
      }));
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post(`${config.url}/api/applicants/register`, formData);
      setMessage('Registration successful! Welcome to PM Internship Scheme.');
      setMessageType('success');
      
      // Reset form
      setFormData({
        username: '',
        password: '',
        skills: [],
        qualifications: '',
        location_prefrences: '',
        native_location: '',
        social_category: '',
        participation_status: 'New'
      });
    } catch (error) {
      setMessage(error.response?.data?.message || 'Registration failed. Please try again.');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gov-blue rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7V10C2 16 6.2 21.05 12 22C17.8 21.05 22 16 22 10V7L12 2Z" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gov-blue mb-2">Register for PM Internship Scheme</h2>
          <p className="text-gray-600">Join India's premier internship program and build your career</p>
        </div>

        {/* Registration Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8">
          {message && (
            <div className={`mb-6 p-4 rounded-lg ${
              messageType === 'success' 
                ? 'bg-gov-green text-white' 
                : 'bg-gov-red text-white'
            }`}>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username *
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gov-orange focus:border-gov-orange transition-colors"
                placeholder="Enter your username"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password *
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gov-orange focus:border-gov-orange transition-colors"
                placeholder="Enter your password"
              />
            </div>

            {/* Skills */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Skills (Recommended)
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSkill())}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gov-orange focus:border-gov-orange transition-colors"
                  placeholder="Enter a skill and press Add"
                />
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="bg-gov-blue hover:bg-gov-blue-dark text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center bg-gov-orange text-white px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill)}
                      className="ml-2 text-white hover:text-gray-200"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Qualifications */}
            <div>
              <label htmlFor="qualifications" className="block text-sm font-medium text-gray-700 mb-2">
                Qualifications *
              </label>
              <textarea
                id="qualifications"
                name="qualifications"
                required
                rows={3}
                value={formData.qualifications}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gov-orange focus:border-gov-orange transition-colors"
                placeholder="Enter your educational qualifications"
              />
            </div>

            {/* Location Preferences */}
            <div>
              <label htmlFor="location_prefrences" className="block text-sm font-medium text-gray-700 mb-2">
                Location Preferences *
              </label>
              <input
                type="text"
                id="location_prefrences"
                name="location_prefrences"
                required
                value={formData.location_prefrences}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gov-orange focus:border-gov-orange transition-colors"
                placeholder="Enter your preferred work locations"
              />
            </div>

            {/* Native Location */}
            <div>
              <label htmlFor="native_location" className="block text-sm font-medium text-gray-700 mb-2">
                Native Location *
              </label>
              <input
                type="text"
                id="native_location"
                name="native_location"
                required
                value={formData.native_location}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gov-orange focus:border-gov-orange transition-colors"
                placeholder="Enter your native location"
              />
            </div>

            {/* Social Category */}
            <div>
              <label htmlFor="social_category" className="block text-sm font-medium text-gray-700 mb-2">
                Social Category *
              </label>
              <select
                id="social_category"
                name="social_category"
                required
                value={formData.social_category}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gov-orange focus:border-gov-orange transition-colors"
              >
                <option value="">Select Social Category</option>
                {socialCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Participation Status */}
            <div>
              <label htmlFor="participation_status" className="block text-sm font-medium text-gray-700 mb-2">
                Participation Status
              </label>
              <select
                id="participation_status"
                name="participation_status"
                value={formData.participation_status}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gov-orange focus:border-gov-orange transition-colors"
              >
                {participationStatuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gov-orange hover:bg-gov-orange-dark text-white py-4 px-6 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gov-orange focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: '#FF6B35',
                  borderColor: '#FF6B35'
                }}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Registering...
                  </div>
                ) : (
                  'Register for PM Internship Scheme'
                )}
              </button>
              
              {/* Skills Warning */}
              {formData.skills.length === 0 && (
                <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-yellow-800 text-sm">
                      Tip: Add at least one skill to strengthen your application
                    </span>
                  </div>
                </div>
              )}
            </div>
          </form>

          {/* Additional Info */}
          <div className="mt-8 p-6 bg-gov-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gov-blue mb-3">Registration Guidelines</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-gov-green mr-2">•</span>
                Ensure all information provided is accurate and verifiable
              </li>
              <li className="flex items-start">
                <span className="text-gov-green mr-2">•</span>
                Add skills to strengthen your application (recommended)
              </li>
              <li className="flex items-start">
                <span className="text-gov-green mr-2">•</span>
                Choose your social category as per government guidelines
              </li>
              <li className="flex items-start">
                <span className="text-gov-green mr-2">•</span>
                Your participation status helps us track your application journey
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
