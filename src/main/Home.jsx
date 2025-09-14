import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gov-blue mb-8">
              PM Internship Scheme
            </h1>
            
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                <span className="font-semibold text-gray-900">PM Internship Scheme</span> is a remarkable initiative launched by the <span className="font-semibold text-gray-900">Indian government</span>, designed to provide valuable internship opportunities for the youth of India. The program, part of the larger vision for skill development and employment, aims to <span className="font-semibold text-gray-900">bridge the gap between academic learning and real-world experience</span> by offering internships across the <span className="font-semibold text-gray-900">top 500 companies</span>. This initiative <span className="italic">not only</span> gives interns <span className="font-semibold text-gray-900">hands-on experience</span> in their fields <span className="italic">but also</span> equips them with the <span className="font-semibold text-gray-900">skills</span> and <span className="font-semibold text-gray-900">insights</span> needed to build successful careers in the public sector.
              </p>
            </div>

            {/* Quote Section */}
            <div className="bg-gray-100 rounded-lg p-8 mb-12 max-w-4xl mx-auto">
              <blockquote className="text-lg md:text-xl font-medium text-gray-900 mb-4">
                "Skill development and employment are crucial needs in India. Our government is consistently working in this direction."
              </blockquote>
              <cite className="text-gov-blue font-semibold text-right block">
                — Prime Minister Narendra Modi
              </cite>
            </div>

            {/* Program Details */}
            <div className="max-w-4xl mx-auto text-left">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                <span className="font-semibold text-gray-900">PM Internship Scheme</span>, launched by Union Finance Minister Nirmala Sitharaman, aims to provide young individuals <span className="font-semibold text-gray-900">aged 21-24</span> years from low-income households with <span className="font-semibold text-gray-900">12-month</span> internship opportunities in the country's top <span className="font-semibold text-gray-900">500 companies</span>. The pilot phase targets <span className="font-semibold text-gray-900">1.25 lakh</span> youth, with a <span className="font-semibold text-gray-900">five-year</span> goal to facilitate internships for <span className="font-semibold text-gray-900">one crore</span> young individuals. This initiative is not just about internships; it's about building a future where every youth has the chance to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Indian Architecture Section */}
      <section className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8">
            {/* Left Design Element */}
            <div className="hidden md:block">
              <div className="w-24 h-24 rounded-full border-4 border-white bg-blue-900 flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Government Emblem */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="text-gov-blue font-bold text-2xl">
                  <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7V10C2 16 6.2 21.05 12 22C17.8 21.05 22 16 22 10V7L12 2Z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-white text-2xl font-bold">PM INTERNSHIP HUB</h2>
            </div>

            {/* Right Design Element */}
            <div className="hidden md:block">
              <div className="w-24 h-24 rounded-full border-4 border-white bg-green-700 flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gov-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Top 500 Companies</h3>
              <p className="text-gray-600">Gain experience with India's leading corporations and organizations</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gov-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1 Crore Youth Target</h3>
              <p className="text-gray-600">Empowering millions of young Indians with practical work experience</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gov-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">12-Month Program</h3>
              <p className="text-gray-600">Comprehensive year-long internship for complete skill development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gov-blue mb-2">500</div>
              <div className="text-gray-600">Partner Companies</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gov-orange mb-2">1.25L</div>
              <div className="text-gray-600">Initial Target</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gov-green mb-2">1Cr</div>
              <div className="text-gray-600">Five-Year Goal</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gov-blue mb-2">12</div>
              <div className="text-gray-600">Months Duration</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gov-blue py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of young Indians building their careers through PM Internship Scheme</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gov-orange hover:bg-gov-orange-dark text-white font-semibold py-4 px-8 rounded-lg transition-colors shadow-lg">
              Apply for Internship
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gov-blue font-semibold py-4 px-8 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function MainHome() {
  return (
    <div style={styles.page}>
      <div style={styles.header}>PM Internship Scheme</div>
      <div style={styles.container}>
        <div style={styles.sectionTitle}>
          Prime Minister Internship Scheme – Empowering Youth, Enabling Careers
        </div>
        <div style={styles.quote}>
          “Encouraging to see strong support for the PM Internship Scheme. This is a big step towards empowering our youth and building a future-ready workforce.”
        </div>
        <div style={styles.quoteAuthor}>
          — Prime Minister Narendra Modi
        </div>
        <p>
          The <span style={styles.highlight}>Prime Minister’s Internship Scheme (PMIS)</span> is a pioneering initiative aimed at equipping young individuals with <b>real-world industry experience</b>, positioning India as the <span style={styles.highlight}>Skill Capital of the World.</span>
        </p>
        <p>
          PMIS is not merely an employment program, but a transformative investment in India’s future. By integrating academic knowledge with real-world experience, PMIS creates a generation of confident, skilled, and industry-ready youth. As the scheme grows, it aims to redefine India’s human capital potential, drive innovation, foster entrepreneurship, and ensure inclusive economic growth.
        </p>
        <div style={styles.sectionTitle}>PMIS: Shaping the Future of India’s Workforce</div>
        <ul style={styles.featuresList}>
          <li style={styles.featureItem}>
            <span style={styles.check}>✅</span>
            Bridges the gap between <b>classroom learning</b> and <b>industry requirements</b>
          </li>
          <li style={styles.featureItem}>
            <span style={styles.check}>✅</span>
            Empowers youth with hands-on experience in <b>top companies</b>
          </li>
          <li style={styles.featureItem}>
            <span style={styles.check}>✅</span>
            Fosters <b>innovation, entrepreneurship, and economic growth</b>
          </li>
        </ul>
        <table style={styles.table}>
          <tbody>
            <tr>
              <th style={styles.th}>Country</th>
              <td style={styles.td}>India</td>
            </tr>
            <tr>
              <th style={styles.th}>Scheme</th>
              <td style={styles.td}>PM Internship Scheme 2024</td>
            </tr>
            <tr>
              <th style={styles.th}>Organization</th>
              <td style={styles.td}>Ministry of Corporate Affairs, Government of India</td>
            </tr>
            <tr>
              <th style={styles.th}>Purpose</th>
              <td style={styles.td}>To provide real-life work experience to job seekers in top companies</td>
            </tr>
            <tr>
              <th style={styles.th}>Number of Positions</th>
              <td style={styles.td}><b>1,25,000</b> positions in <b>500</b> top companies</td>
            </tr>
            <tr>
              <th style={styles.th}>Eligibility Criteria</th>
              <td style={styles.td}>
                <ul style={{ margin: 0, paddingLeft: "18px" }}>
                  <li>ITI: Matriculation + ITI in relevant trade</li>
                  <li>Diploma: Intermediate + AICTE-recognized diploma</li>
                  <li>Degree: Bachelor’s degree from UGC/AICTE-recognized university</li>
                  <li>Age: 18 to 24 years</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th style={styles.th}>Benefits</th>
              <td style={styles.td}>
                ₹5,000 monthly stipend<br />
                One-time payment of <b>₹6,000</b><br />
                Gain real-life <b>work experience</b>
              </td>
            </tr>
            <tr>
              <th style={styles.th}>Registration Date</th>
              <td style={styles.td}><span style={{ color: "#22c55e", fontWeight: 600 }}>To be Announced</span></td>
            </tr>
            <tr>
              <th style={styles.th}>Last Date for Registration</th>
              <td style={styles.td}><span style={{ color: "#ef4444", fontWeight: 600 }}>Not Announced</span></td>
            </tr>
            <tr>
              <th style={styles.th}>Official Website</th>
              <td style={styles.td}><a href="https://pminternship.mca.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb" }}>https://pminternship.mca.gov.in/</a></td>
            </tr>
            <tr>
              <th style={styles.th}>Insurance Coverage</th>
              <td style={styles.td}>
                <a href="#" style={{ color: "#2563eb" }}>Jyoti Bima Scheme</a>, and <a href="#" style={{ color: "#2563eb" }}>Pradhan Mantri Suraksha Bima Yojana</a>
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{ marginTop: "32px", color: "#1e293b", fontWeight: 500 }}>
          <span style={styles.highlight}>Achievements:</span> PMIS has already provided thousands of youth with valuable work experience, bridging the gap between education and employment, and contributing to India’s vision of becoming a global skill capital.
        </div>
      </div>
    </div>
  );
}