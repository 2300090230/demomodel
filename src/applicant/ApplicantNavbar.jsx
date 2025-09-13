import React from "react";
import { Link, useLocation } from "react-router-dom";

const navStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "28px",
  background: "#1e40af",
  padding: "13px 0",
  fontSize: "1.08rem",
  fontWeight: 500,
  borderBottom: "2px solid #2563eb",
};

const linkStyle = (active) => ({
  color: active ? "#facc15" : "#fff",
  textDecoration: "none",
  transition: "color 0.2s",
  padding: "5px 12px",
  borderRadius: "4px",
  background: active ? "#2563eb" : "transparent",
});

function ApplicantNavbar() {
  const location = useLocation();
  return (
    <nav style={navStyle}>
      <Link to="/dashboard" style={linkStyle(location.pathname === "/dashboard")}>Dashboard</Link>
      <Link to="/profile" style={linkStyle(location.pathname === "/profile")}>Profile</Link>
      <Link to="/applications" style={linkStyle(location.pathname === "/applications")}>My Applications</Link>
      <Link to="/notifications" style={linkStyle(location.pathname === "/notifications")}>Notifications</Link>
      <Link to="/logout" style={linkStyle(location.pathname === "/logout")}>Logout</Link>
    </nav>
  );
}

export default ApplicantNavbar;