import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

const navStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "32px",
  background: "#2563eb",
  padding: "14px 0",
  fontSize: "1.1rem",
  fontWeight: 500,
  borderBottom: "2px solid #1e40af",
};

const linkStyle = (active) => ({
  color: active ? "#facc15" : "#fff",
  textDecoration: "none",
  transition: "color 0.2s",
  padding: "6px 14px",
  borderRadius: "4px",
  background: active ? "#1e40af" : "transparent",
});

function MainNavbar() {
  const location = useLocation();
  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle(location.pathname === "/")}>
        Home
      </Link>
      <Link
        to="/registration"
        style={linkStyle(location.pathname === "/registration")}
      >
        Registration
      </Link>
      <Link to="/login" style={linkStyle(location.pathname === "/login")}>
        Login
      </Link>
      <Link
        to="/partner-companies"
        style={linkStyle(location.pathname === "/partner-companies")}
      >
        Partner Companies
      </Link>
      <Link to="/opportunities" style={linkStyle(location.pathname === "/opportunities")}>
        Opportunities
      </Link>
      <Link to="/news" style={linkStyle(location.pathname === "/news")}>
        News
      </Link>

      <Routes>
        <Route path="login" Component={<Login />}/>
      </Routes >

    </nav>
  );
}

export default MainNavbar;