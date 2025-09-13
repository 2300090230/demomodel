import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavbar from "./main/Navbar";
import MainHome from "./main/Home";
import ApplicantHome from "./applicant/ApplicantHome";

function App() {
  return (
    <Router>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/registration" element={<ApplicantHome />} />
        <Route path="/login" element={<ApplicantHome />} />
        <Route path="/partner-companies" element={<ApplicantHome />} />
        <Route path="/opportunities" element={<ApplicantHome />} />
        <Route path="/news" element={<ApplicantHome />} />
      </Routes>
    </Router>
  );
}

export default App;