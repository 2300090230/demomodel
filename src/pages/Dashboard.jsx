export default function Dashboard() {
  // constant profile
  const user = {
    name: "Laxman",
    email: "laxman@gmail.com",
    location: "Hyderabad",
    skills: ["React", "JavaScript"],
    resumeUploaded: true,
  };

  // constant opportunities
  const opportunities = [
    {
      title: "Frontend Intern",
      company: "TechCorp",
      location: "Hyderabad",
      skills: ["React", "JavaScript"],
    },
   
    {
      title: "Data Analyst Intern",
      company: "DataLabs",
      location: "Hyderabad",
      skills: ["SQL", "Python","React"],
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gov-blue mb-2">Dashboard</h1>
        <p className="text-gov-gray-500 text-lg">Welcome back, {user.name}!</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 border border-gov-gray-200 border-t-4 border-t-gov-orange">
        <div className="flex items-start justify-between mb-6">
          <h2 className="text-2xl font-bold text-gov-blue">Profile Information</h2>
          <div className="flex items-center space-x-2">
            {user.resumeUploaded ? (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-govGreen text-white">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Resume Uploaded
              </span>
            ) : (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-govRed text-white">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Resume Required
              </span>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-sm font-medium text-gov-gray-600 w-20">Name:</span>
              <span className="text-gov-gray-900 font-medium">{user.name}</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gov-gray-600 w-20">Email:</span>
              <span className="text-gov-gray-900">{user.email}</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-sm font-medium text-gov-gray-600 w-20">Location:</span>
              <span className="inline-flex items-center px-2 py-1 rounded-md text-sm bg-gov-gray-100 text-gov-gray-700">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {user.location}
              </span>
            </div>
            <div className="flex items-start">
              <span className="text-sm font-medium text-gov-gray-600 w-20 pt-1">Skills:</span>
              <div className="flex flex-wrap gap-2">
                {user.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gov-orange text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Opportunities Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gov-blue">Available Opportunities</h2>
          <span className="text-gov-gray-500 text-sm">{opportunities.length} opportunities available</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((opp, index) => (
            <div key={index} className="bg-white shadow-lg hover:shadow-xl rounded-xl p-6 border border-gov-gray-200 border-t-4 border-t-gov-orange transition-shadow duration-200">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gov-blue mb-2">{opp.title}</h3>
                <p className="text-gov-gray-600 font-medium">{opp.company}</p>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center text-sm text-gov-gray-500 mb-3">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="px-2 py-1 rounded-md bg-gov-gray-100 text-gov-gray-700 text-xs font-medium">
                    {opp.location}
                  </span>
                </div>
                
                <div>
                  <p className="text-xs font-medium text-gov-gray-600 mb-2">Required Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {opp.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gov-blue text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-gov-orange hover:bg-gov-orange-dark text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gov-orange focus:ring-offset-2">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
