import React from 'react';

export default function PartnerCompanies() {
  const partnerCompanies = [
    {
      id: 1,
      name: "Tata Consultancy Services",
      sector: "Information Technology",
      positions: 2500,
      logo: "TCS",
      description: "Leading global IT services, consulting and business solutions organization"
    },
    {
      id: 2,
      name: "Infosys Limited",
      sector: "Information Technology",
      positions: 2000,
      logo: "INF",
      description: "Global leader in next-generation digital services and consulting"
    },
    {
      id: 3,
      name: "Wipro Technologies",
      sector: "Information Technology",
      positions: 1800,
      logo: "WIP",
      description: "Leading technology services and consulting company"
    },
    {
      id: 4,
      name: "Reliance Industries",
      sector: "Conglomerate",
      positions: 1500,
      logo: "RIL",
      description: "India's largest private sector corporation"
    },
    {
      id: 5,
      name: "HDFC Bank",
      sector: "Banking & Finance",
      positions: 1200,
      logo: "HDF",
      description: "Leading private sector bank in India"
    },
    {
      id: 6,
      name: "ICICI Bank",
      sector: "Banking & Finance",
      positions: 1000,
      logo: "ICI",
      description: "Major Indian multinational bank and financial services company"
    },
    {
      id: 7,
      name: "Mahindra Group",
      sector: "Automotive",
      positions: 800,
      logo: "MAH",
      description: "Leading automotive and aerospace company"
    },
    {
      id: 8,
      name: "Bajaj Auto",
      sector: "Automotive",
      positions: 700,
      logo: "BAJ",
      description: "Leading manufacturer of motorcycles and three-wheelers"
    },
    {
      id: 9,
      name: "ITC Limited",
      sector: "FMCG",
      positions: 600,
      logo: "ITC",
      description: "Leading diversified conglomerate with presence in FMCG, Hotels, and more"
    },
    {
      id: 10,
      name: "L&T Infotech",
      sector: "Information Technology",
      positions: 900,
      logo: "LTI",
      description: "Global technology consulting and digital solutions company"
    },
    {
      id: 11,
      name: "HCL Technologies",
      sector: "Information Technology",
      positions: 1300,
      logo: "HCL",
      description: "Leading global technology company"
    },
    {
      id: 12,
      name: "Tech Mahindra",
      sector: "Information Technology",
      positions: 1100,
      logo: "TM",
      description: "Leading provider of digital transformation, consulting and business re-engineering services"
    }
  ];

  const sectors = ['All', 'Information Technology', 'Banking & Finance', 'Automotive', 'FMCG', 'Conglomerate'];
  const [selectedSector, setSelectedSector] = React.useState('All');

  const filteredCompanies = selectedSector === 'All' 
    ? partnerCompanies 
    : partnerCompanies.filter(company => company.sector === selectedSector);

  const totalPositions = partnerCompanies.reduce((sum, company) => sum + company.positions, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gov-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gov-orange rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                  <path d="M2 17L12 22L22 17"/>
                  <path d="M2 12L12 17L22 12"/>
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Partner Companies</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join India's top 500 companies through PM Internship Scheme and build your career with industry leaders
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-gov-orange mb-2">{partnerCompanies.length}</div>
                <div className="text-blue-100">Partner Companies</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-gov-orange mb-2">{totalPositions.toLocaleString()}</div>
                <div className="text-blue-100">Total Positions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-gov-orange mb-2">{sectors.length - 1}</div>
                <div className="text-blue-100">Industry Sectors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {sectors.map(sector => (
              <button
                key={sector}
                onClick={() => setSelectedSector(sector)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedSector === sector
                    ? 'bg-gov-orange text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {selectedSector === 'All' ? 'All Partner Companies' : `${selectedSector} Companies`}
            </h2>
            <p className="text-gray-600">
              Showing {filteredCompanies.length} companies with {filteredCompanies.reduce((sum, company) => sum + company.positions, 0).toLocaleString()} internship positions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCompanies.map(company => (
              <div 
                key={company.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200"
              >
                {/* Company Logo */}
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gov-blue to-gov-blue-dark rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                    {company.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{company.name}</h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gov-gray-100 text-gov-gray-700">
                      {company.sector}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {company.description}
                </p>

                {/* Positions Available */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gov-green mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7V10C2 16 6.2 21.05 12 22C17.8 21.05 22 16 22 10V7L12 2Z" />
                    </svg>
                    <span className="text-sm text-gray-600">Positions Available</span>
                  </div>
                  <span className="text-xl font-bold text-gov-orange">{company.positions}</span>
                </div>

                {/* Action Button */}
                <button className="w-full bg-gov-blue hover:bg-gov-blue-dark text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gov-blue focus:ring-offset-2">
                  View Opportunities
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gov-orange to-gov-orange-dark py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Internship Journey?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Register now and get matched with your ideal company for a 12-month internship program
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gov-orange font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
              Register for Internship
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gov-orange font-semibold py-4 px-8 rounded-lg transition-colors">
              Learn More About Program
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner with PM Internship Scheme?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our partner companies offer comprehensive internship programs designed to bridge the gap between education and industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gov-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7V10C2 16 6.2 21.05 12 22C17.8 21.05 22 16 22 10V7L12 2Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Experience</h3>
              <p className="text-gray-600">Gain real-world experience with India's leading companies across various sectors</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gov-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Mentorship</h3>
              <p className="text-gray-600">Learn from experienced professionals and build valuable industry connections</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gov-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Growth</h3>
              <p className="text-gray-600">12-month structured program with potential for full-time employment opportunities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
