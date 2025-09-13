import React from "react";

const styles = {
  page: {
    fontFamily: "Segoe UI, Arial, sans-serif",
    background: "#f5f7fa",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
  },
  header: {
    background: "#2563eb",
    color: "#fff",
    padding: "24px 0 16px 0",
    textAlign: "center",
    fontWeight: 700,
    fontSize: "2.5rem",
    letterSpacing: "1px",
    borderBottom: "4px solid #1e40af",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "32px",
    background: "#2563eb",
    padding: "12px 0",
    fontSize: "1.1rem",
    fontWeight: 500,
    borderBottom: "2px solid #1e40af",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    transition: "color 0.2s",
  },
  container: {
    maxWidth: "900px",
    margin: "32px auto",
    background: "#e8f0fe",
    borderRadius: "12px",
    boxShadow: "0 2px 12px rgba(30,64,175,0.08)",
    padding: "32px 36px",
  },
  sectionTitle: {
    color: "#2563eb",
    fontWeight: 700,
    fontSize: "2rem",
    marginBottom: "12px",
  },
  quote: {
    fontStyle: "italic",
    color: "#222",
    margin: "18px 0 8px 0",
    fontSize: "1.1rem",
  },
  quoteAuthor: {
    textAlign: "right",
    fontWeight: 500,
    color: "#1e40af",
    marginBottom: "24px",
  },
  featuresList: {
    margin: "16px 0 24px 0",
    paddingLeft: "0",
    listStyle: "none",
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.08rem",
    marginBottom: "10px",
  },
  check: {
    color: "#22c55e",
    fontSize: "1.3rem",
    marginRight: "10px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "#fff",
    margin: "24px 0",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 1px 4px rgba(30,64,175,0.07)",
  },
  th: {
    background: "#2563eb",
    color: "#fff",
    padding: "10px 8px",
    textAlign: "left",
    fontWeight: 600,
    fontSize: "1rem",
  },
  td: {
    padding: "10px 8px",
    borderBottom: "1px solid #e5e7eb",
    fontSize: "1rem",
  },
  highlight: {
    color: "#2563eb",
    fontWeight: 600,
  },
};

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

export default MainHome;