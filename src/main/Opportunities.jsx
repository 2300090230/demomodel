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
    fontSize: "2.2rem",
    letterSpacing: "1px",
    borderBottom: "4px solid #1e40af",
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
    fontSize: "1.4rem",
    marginBottom: "12px",
  },
  opportunityCard: {
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 1px 4px rgba(30,64,175,0.07)",
    padding: "18px 22px",
    marginBottom: "18px",
    borderLeft: "5px solid #2563eb",
  },
  highlight: {
    color: "#2563eb",
    fontWeight: 600,
  },
};

function Opportunities() {
  return (
    <div style={styles.page}>
      <div style={styles.header}>Opportunities</div>
      <div style={styles.container}>
        <div style={styles.sectionTitle}>Explore PM Internship Scheme Opportunities</div>
        <div style={styles.opportunityCard}>
          <b>Software Development Intern – Infosys</b>
          <div>Location: Bengaluru, Karnataka</div>
          <div>Duration: 12 months</div>
          <div>Stipend: ₹5,000/month + Certificate</div>
          <div>
            <span style={styles.highlight}>Apply by:</span> 30th September 2025
          </div>
        </div>
        <div style={styles.opportunityCard}>
          <b>Marketing & Communications Intern – Tata Consultancy Services</b>
          <div>Location: Mumbai, Maharashtra</div>
          <div>Duration: 6 months</div>
          <div>Stipend: ₹5,000/month + Performance Bonus</div>
          <div>
            <span style={styles.highlight}>Apply by:</span> 25th September 2025
          </div>
        </div>
        <div style={styles.opportunityCard}>
          <b>Mechanical Engineering Intern – Larsen & Toubro</b>
          <div>Location: Chennai, Tamil Nadu</div>
          <div>Duration: 12 months</div>
          <div>Stipend: ₹5,000/month + Project Experience</div>
          <div>
            <span style={styles.highlight}>Apply by:</span> 5th October 2025
          </div>
        </div>
        <div style={{marginTop: "28px"}}>
          <span style={styles.highlight}>More than 1,25,000 positions</span> are available across 500+ top companies in India, including roles in IT, core engineering, management, finance, and more!
        </div>
      </div>
    </div>
  );
}

export default Opportunities;