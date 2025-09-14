import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../contextapi/AuthContext';
import config from '../config';
import axios from 'axios';

export default function Profile() {
  const { applicant } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch user profile data from API (optional, fallback to session)
  const fetchProfileData = useCallback(async () => {
    if (!applicant?.username) {
      setError('No username found in session storage');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError('');
      const apiUrl = `${config.url}/api/applicants/username/${applicant.username}`;
      const response = await axios.get(apiUrl);
      setProfileData(response.data);
    } catch (err) {
      setError('Failed to load profile data, showing session data.');
      setProfileData(applicant);
    } finally {
      setLoading(false);
    }
  }, [applicant]);

  useEffect(() => {
    fetchProfileData();
  }, [fetchProfileData]);

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
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
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
        <div className="grid grid-cols-1 gap-8">
          {/* Personal Information */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={fetchProfileData}
                  className="text-gov-green hover:text-gov-green-dark font-medium flex items-center space-x-1"
                  title="Refresh profile data"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                      clipRule="evenodd"
                    />
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <div className="p-3 bg-gray-50 rounded-lg border">
                  {userData.applicant_name || 'Not provided'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                <div className="p-3 bg-gray-50 rounded-lg border">
                  {userData.username || 'Not provided'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="p-3 bg-gray-50 rounded-lg border">
                  {userData.email || 'Not provided'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Social Category</label>
                <div className="p-3 bg-gray-50 rounded-lg border">
                  {userData.social_category || 'Not provided'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Participation Status</label>
                <div className="p-3 bg-gray-50 rounded-lg border">
                  {userData.participation_status || 'Not provided'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Applicant ID</label>
                <div className="p-3 bg-gray-50 rounded-lg border">
                  {userData.applicant_id || 'Not provided'}
                </div>
              </div>
            </div>
          </div>

          {/* Qualifications & Skills */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Qualifications & Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Qualifications</label>
                <div className="p-3 bg-gray-50 rounded-lg border">
                  {userData.qualifications || 'Not provided'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
                <div className="p-3 bg-gray-50 rounded-lg border">
                  {Array.isArray(userData.skills)
                    ? userData.skills.join(', ')
                    : userData.skills || 'Not provided'}
                </div>
              </div>
            </div>
          </div>

          {/* Location Preferences */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Location Preferences</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Location</label>
                <div className="p-3 bg-gray-50 rounded-lg border">
                  {userData.location_prefrences || 'Not provided'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Native Location</label>
                <div className="p-3 bg-gray-50 rounded-lg border">
                  {userData.native_location || 'Not provided'}
                </div>
              </div>
            </div>
          </div>

          {/* Security (do not show password in production) */}
          {/* <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Security</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="p-3 bg-gray-50 rounded-lg border">
                {userData.password ? '********' : 'Not provided'}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
