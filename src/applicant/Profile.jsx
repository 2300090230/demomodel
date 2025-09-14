import React, { useState, useEffect } from 'react';
import { useAuth } from '../contextapi/AuthContext';
import config from '../config';
import axios from 'axios';

export default function Profile() {
  const { applicant } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch user profile data from API
  useEffect(() => {
    const fetchProfileData = async () => {
      if (!applicant?.username) {
        setError('No username found in session storage');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError('');
        
        // Construct the exact API URL as specified
        const apiUrl = `${config.url}/api/applicants/username/${applicant.username}`;
        console.log('Fetching profile data from:', apiUrl);
        console.log('Username from session:', applicant.username);
        
        const response = await axios.get(apiUrl);
        console.log('API Response:', response.data);
        
        setProfileData(response.data);
        setError('');
      } catch (error) {
        console.error('Error fetching profile data:', error);
        console.error('Error details:', error.response?.data);
        
        if (error.response?.status === 404) {
          setError(`User '${applicant.username}' not found in database`);
        } else if (error.response?.status === 500) {
          setError('Server error - please try again later');
        } else {
          setError(`Failed to load profile data: ${error.message}`);
        }
        
        // Fallback to session storage data
        console.log('Falling back to session storage data:', applicant);
        setProfileData(applicant);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [applicant]);

  // Use API data if available, otherwise fall back to session storage
  const userData = profileData || applicant || {};

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gov-blue mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="bg-white shadow-lg rounded-lg mb-8">
          <div className="bg-gov-blue text-white px-6 py-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gov-orange rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl font-bold">My Profile</h1>
                  <p className="text-blue-100">PM Internship Scheme - Applicant Profile</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7V10C2 16 6.2 21.05 12 22C17.8 21.05 22 16 22 10V7L12 2Z" />
                </svg>
                <span className="text-sm">Government of India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - User Info */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-gov-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {userData.applicant_name || userData.username || 'User Name'}
                </h2>
                <p className="text-gray-600 mb-4">PM Internship Applicant</p>
                
                {/* Status Badge */}
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  userData.participation_status === 'Active' 
                    ? 'bg-gov-green text-white' 
                    : 'bg-gray-500 text-white'
                }`}>
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {userData.participation_status || 'Unknown Status'}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gov-blue">
                      {Array.isArray(userData.skills) ? userData.skills.length : 0}
                    </div>
                    <div className="text-sm text-gray-600">Skills</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gov-orange">
                      {userData.qualifications ? 1 : 0}
                    </div>
                    <div className="text-sm text-gray-600">Qualifications</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Info */}
            <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Applicant ID</span>
                  <span className="font-medium text-gray-900">
                    {userData.applicant_id || userData.id || 'N/A'}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Full Name</span>
                  <span className="font-medium text-gray-900">
                    {userData.applicant_name || 'N/A'}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Username</span>
                  <span className="font-medium text-gray-900">
                    {userData.username || 'N/A'}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-600">Profile Status</span>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    userData.participation_status === 'Active' 
                      ? 'bg-gov-green text-white' 
                      : 'bg-gray-500 text-white'
                  }`}>
                    {userData.participation_status || 'Unknown'}
                  </span>
                </div>
              </div>

              {/* Error Display */}
              {error && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center text-red-800">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{error}</span>
                  </div>
                </div>
              )}

              {/* Debug Info (for development) */}
              {process.env.NODE_ENV === 'development' && (
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="text-sm font-semibold text-blue-800 mb-2">Debug Info:</h4>
                  <div className="text-xs text-blue-600 space-y-1">
                    <div>API URL: {config.url}/api/applicants/username/{applicant?.username}</div>
                    <div>Session Username: {applicant?.username || 'Not found'}</div>
                    <div>Data Source: {profileData === applicant ? 'Session Storage' : 'API Response'}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Detailed Information */}
          <div className="lg:col-span-2">
            {/* Personal Information */}
            <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => window.location.reload()}
                    className="text-gov-green hover:text-gov-green-dark font-medium flex items-center space-x-1"
                    title="Refresh profile data"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                    <span>Refresh</span>
                  </button>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="text-gov-blue hover:text-gov-blue-dark font-medium"
                  >
                    {isEditing ? 'Cancel' : 'Edit Profile'}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="p-3 bg-gray-50 rounded-lg border">
                    {userData.applicant_name || 'Not provided'}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Username
                  </label>
                  <div className="p-3 bg-gray-50 rounded-lg border">
                    {userData.username || 'Not provided'}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Social Category
                  </label>
                  <div className="p-3 bg-gray-50 rounded-lg border">
                    {userData.social_category || 'Not specified'}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Native Location
                  </label>
                  <div className="p-3 bg-gray-50 rounded-lg border">
                    {userData.native_location || 'Not specified'}
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills & Expertise</h3>
              {userData.skills && userData.skills.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {userData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gov-blue text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="text-gray-500 italic bg-gray-50 p-4 rounded-lg">
                  No skills added yet. Update your profile to add your skills.
                </div>
              )}
            </div>

            {/* Qualifications */}
            <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Qualifications</h3>
              {userData.qualifications ? (
                <div className="p-4 bg-gray-50 rounded-lg border">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-gov-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    <span className="font-medium text-gray-900">{userData.qualifications}</span>
                  </div>
                </div>
              ) : (
                <div className="text-gray-500 italic bg-gray-50 p-4 rounded-lg">
                  No qualifications added yet. Update your profile to add your educational background.
                </div>
              )}
            </div>

            {/* Location Preferences */}
            <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Location Preferences</h3>
              {userData.location_prefrences ? (
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gov-orange text-white">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {userData.location_prefrences}
                  </span>
                </div>
              ) : (
                <div className="text-gray-500 italic bg-gray-50 p-4 rounded-lg">
                  No preferred locations specified. Update your profile to add your location preferences.
                </div>
              )}
            </div>

            {/* Participation Status */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Participation Status</h3>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium text-yellow-800">
                      Status: {userData.participation_status || 'Not specified'}
                    </p>
                    <p className="text-sm text-yellow-600 mt-1">
                      Your current participation status in the PM Internship Scheme
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
