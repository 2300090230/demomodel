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
  newsItem: {
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 1px 4px rgba(30,64,175,0.07)",
    padding: "18px 22px",
    marginBottom: "18px",
    borderLeft: "5px solid #facc15",
  },
  date: {
    color: "#2563eb",
    fontWeight: 600,
    fontSize: "0.98rem",
    marginBottom: "4px",
  },
  highlight: {
    color: "#2563eb",
    fontWeight: 600,
  },
};

function News() {
  return (
    <div style={styles.page}>
      <div style={styles.header}>Latest News</div>
      <div style={styles.container}>
        <div style={styles.newsItem}>
          <div style={styles.date}>14 September 2025</div>
          <b>PM Internship Scheme 2025 Registration to Open Soon!</b>
          <div>
            The Ministry of Corporate Affairs announced that the registration for the next round of PM Internship Scheme will open by the end of September. Over 1.25 lakh positions will be available for youth across India.
          </div>
        </div>
        <div style={styles.newsItem}>
          <div style={styles.date}>10 September 2025</div>
          <b>PMIS Partners with 50 New Companies</b>
          <div>
            The PM Internship Scheme has expanded its reach by partnering with 50 new companies, offering more diverse roles in technology, management, and core sectors.
          </div>
        </div>
        <div style={styles.newsItem}>
          <div style={styles.date}>5 September 2025</div>
          <b>Success Stories: Over 10,000 Interns Placed</b>
          <div>
            The scheme has successfully placed over 10,000 interns in top companies, helping bridge the gap between education and employment.
          </div>
        </div>
        <div style={{marginTop: "28px"}}>
          Stay tuned for more updates on <span style={styles.highlight}>PM Internship Scheme</span> and its impact on youth empowerment!
        </div>
      </div>
    </div>
  );
}

export default News;