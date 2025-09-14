import React, { useState, useEffect } from 'react';
import config from '../config';
import axios from 'axios';
import { useAuth } from '../contextapi/AuthContext';

export default function ViewMyOpportunities() {
  const [matchedOpportunities, setMatchedOpportunities] = useState([]);
  const [applicantProfile, setApplicantProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const { applicant } = useAuth();

  // Fetch matched opportunities and profile data
  useEffect(() => {
    const fetchMatchedData = async () => {
      try {
        setLoading(true);
        setError('');
        
        // Send applicant object as POST body
        const response = await axios.post(`${config.url}/api/applicants/match`, applicant);
        console.log('Matched Opportunities API Response:', response.data);
        
        if (response.data.applicant && response.data.opportunities) {
          setApplicantProfile(response.data.applicant);
          setMatchedOpportunities(response.data.opportunities);
        } else {
          // Handle case where data structure might be different
          setMatchedOpportunities(response.data);
        }
        
      } catch (error) {
        console.error('Error fetching matched opportunities:', error);
        setError('Failed to load your matched opportunities. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if applicant exists
    if (applicant) {
      fetchMatchedData();
    }
  }, [applicant]);

  // Filter opportunities based on status
  const filteredOpportunities = matchedOpportunities.filter(opportunity => {
    if (!filterStatus) return true;
    return opportunity.applicationStatus === filterStatus;
  });

  // Calculate match score based on skills and location
  const calculateMatchScore = (opportunity) => {
    let score = 0;
    const maxScore = 100;
    
    if (applicantProfile) {
      // Skills match (60% weight)
      const skillMatches = opportunity.requiredskills?.filter(skill =>
        applicantProfile.skills?.some(userSkill => 
          userSkill.toLowerCase().includes(skill.toLowerCase()) ||
          skill.toLowerCase().includes(userSkill.toLowerCase())
        )
      ).length || 0;
      
      const skillScore = (skillMatches / (opportunity.requiredskills?.length || 1)) * 60;
      score += skillScore;
      
      // Location match (40% weight)
      if (opportunity.worklocation?.toLowerCase().includes(applicantProfile.location_preferences?.toLowerCase()) ||
          applicantProfile.location_preferences?.toLowerCase().includes(opportunity.worklocation?.toLowerCase())) {
        score += 40;
      }
    }
    
    return Math.min(Math.round(score), maxScore);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your matched opportunities...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header with Profile Summary */}
        <div className="bg-white shadow-lg rounded-lg mb-8">
          <div className="bg-blue-900 text-white px-6 py-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl font-bold">My Matched Opportunities</h1>
                  <p className="text-blue-100">Personalized internship recommendations based on your profile</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm">Matched for You</span>
              </div>
            </div>
          </div>
          
          {/* Profile Summary */}
          {applicantProfile && (
            <div className="p-6 bg-gradient-to-r from-blue-50 to-orange-50">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Your Skills</h3>
                  <div className="flex flex-wrap gap-1">
                    {applicantProfile.skills?.map((skill, index) => (
                      <span key={index} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-600 text-white">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Qualifications</h3>
                  <p className="text-sm text-gray-900 font-medium">{applicantProfile.qualifications}</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Preferred Location</h3>
                  <p className="text-sm text-gray-900 font-medium">{applicantProfile.location_preferences}</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Background</h3>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-600">Native: {applicantProfile.native_location}</p>
                    <p className="text-xs text-gray-600">Category: {applicantProfile.social_category}</p>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {applicantProfile.participation_status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Filter Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Filter Your Opportunities</h2>
              <p className="text-sm text-gray-600">
                Showing {filteredOpportunities.length} of {matchedOpportunities.length} matched opportunities
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="">All Applications</option>
                <option value="applied">Applied</option>
                <option value="shortlisted">Shortlisted</option>
                <option value="interviewed">Interviewed</option>
                <option value="selected">Selected</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-red-800">{error}</span>
            </div>
          </div>
        )}

        {/* Matched Opportunities Grid */}
        {filteredOpportunities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOpportunities.map((opportunity) => {
              // Use backend-provided raw_similarity for match percentage
              const matchScore = opportunity.raw_similarity !== undefined
                ? Math.round(opportunity.raw_similarity * 100)
                : 0;

              const skillMatches = applicantProfile?.skills?.filter(skill =>
                opportunity.requiredskills?.some(reqSkill => 
                  reqSkill.toLowerCase().includes(skill.toLowerCase()) ||
                  skill.toLowerCase().includes(reqSkill.toLowerCase())
                )
              ) || [];

              return (
                <div key={opportunity.internshipid || opportunity._id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-l-4 border-orange-500">
                  {/* Match Score Header */}
                  <div className="bg-gradient-to-r from-green-600 to-green-700 p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-white font-bold text-sm">{matchScore}% Match</span>
                      </div>
                      <span className="bg-white bg-opacity-20 text-white text-xs px-2 py-1 rounded-full">
                        Recommended
                      </span>
                    </div>
                  </div>

                  {/* Company Header */}
                  <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">{opportunity.company}</h3>
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-blue-100 mt-1">{opportunity.role}</p>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Role and Sector */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-500 text-white">
                          {opportunity.sector}
                        </span>
                        <span className="text-sm font-medium text-gray-600">
                          {opportunity.capacity} positions
                        </span>
                      </div>
                    </div>

                    {/* Location with Match Indicator */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm">{opportunity.worklocation}</span>
                        </div>
                        {applicantProfile?.location_preferences?.toLowerCase().includes(opportunity.worklocation?.toLowerCase()) && (
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            Preferred Location
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Skill Matching */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Required Skills 
                        {skillMatches.length > 0 && (
                          <span className="text-green-600 ml-2">({skillMatches.length} matches)</span>
                        )}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {opportunity.requiredskills?.map((skill, index) => {
                          const isMatched = skillMatches.some(userSkill => 
                            skill.toLowerCase().includes(userSkill.toLowerCase()) ||
                            userSkill.toLowerCase().includes(skill.toLowerCase())
                          );
                          
                          return (
                            <span
                              key={index}
                              className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                                isMatched 
                                  ? 'bg-green-600 text-white border-2 border-green-400' 
                                  : 'bg-gray-200 text-gray-700'
                              }`}
                            >
                              {skill}
                              {isMatched && (
                                <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              )}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Qualification */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">Qualification Required</h4>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600">{opportunity.qualificationrequired}</p>
                        {applicantProfile?.qualifications === opportunity.qualificationrequired && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            ✓ Qualified
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Application Status */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-900">Application Status:</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          opportunity.applicationStatus === 'applied' ? 'bg-blue-100 text-blue-800' :
                          opportunity.applicationStatus === 'shortlisted' ? 'bg-yellow-100 text-yellow-800' :
                          opportunity.applicationStatus === 'selected' ? 'bg-green-100 text-green-800' :
                          opportunity.applicationStatus === 'rejected' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {opportunity.applicationStatus || 'Not Applied'}
                        </span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 ${
                      opportunity.applicationStatus === 'applied' 
                        ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                        : 'bg-orange-500 hover:bg-orange-600 text-white'
                    }`}>
                      {opportunity.applicationStatus === 'applied' ? (
                        <>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Applied</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                          </svg>
                          <span>Apply Now</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* No Results */
          <div className="bg-white shadow-lg rounded-lg p-12 text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No matched opportunities found</h3>
            <p className="text-gray-600">Update your profile to get better matched opportunities, or check back later for new openings.</p>
          </div>
        )}
      </div>
    </div>
  );
}
