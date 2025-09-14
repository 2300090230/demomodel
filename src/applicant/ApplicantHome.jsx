import React, { useEffect, useState } from 'react';
import config from '../config';
import axios from 'axios';
import { useAuth } from '../contextapi/AuthContext';

function ApplicantHome() {
  const { applicant } = useAuth();
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch matched opportunities on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // POST applicant object to backend to get matched opportunities
        const response = await axios.post(`${config.url}/api/applicants/match`, applicant);
        // Use .opportunities if present, else fallback to response.data
        const data = response.data.opportunities || response.data;
        setOpportunities(Array.isArray(data) ? data : []);
      } catch (err) {
        setOpportunities([]);
      } finally {
        setLoading(false);
      }
    };
    if (applicant) fetchData();
  }, [applicant]);

  // Sort opportunities by match percentage (raw_similarity) descending
  const sortedOpportunities = [...opportunities].sort(
    (a, b) => (b.raw_similarity || 0) - (a.raw_similarity || 0)
  );

  // Get top 5 companies by highest match
  const topCompanies = [];
  const seen = new Set();
  for (const opp of sortedOpportunities) {
    if (!seen.has(opp.company)) {
      topCompanies.push(opp.company);
      seen.add(opp.company);
    }
    if (topCompanies.length >= 5) break;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h1 className="text-2xl font-bold text-blue-900 mb-2">Welcome, {applicant?.username || "Applicant"}!</h1>
          <p className="text-gray-700 mb-4">
            Here’s a quick overview of your PM Internship Scheme dashboard.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 rounded-lg p-4 flex flex-col items-center">
              <span className="text-3xl font-bold text-blue-900">{opportunities.length}</span>
              <span className="text-gray-700">Matched Opportunities</span>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 flex flex-col items-center">
              <span className="text-3xl font-bold text-orange-600">{topCompanies.length}</span>
              <span className="text-gray-700">Top Priority Companies</span>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-blue-900 mb-2">Top Priority Companies</h2>
            <ul className="list-disc list-inside text-gray-800">
              {topCompanies.length === 0 && <li>No companies found</li>}
              {topCompanies.map((company, idx) => (
                <li key={company + idx}>{company}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-blue-900 mb-2">Top Matched Opportunities</h2>
            <ol className="list-decimal list-inside text-gray-800">
              {sortedOpportunities.slice(0, 5).map((opp, idx) => (
                <li key={opp._id || opp.internshipid} className="mb-2">
                  <span className="font-medium">{opp.internship || opp.role}</span> at <span className="text-blue-800">{opp.company}</span>
                  <span className="ml-2 text-sm text-green-700 font-semibold">
                    ({opp.raw_similarity !== undefined ? Math.round(opp.raw_similarity * 100) : 0}% Match)
                  </span>
                </li>
              ))}
              {sortedOpportunities.length === 0 && <li>No matched opportunities found</li>}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicantHome;