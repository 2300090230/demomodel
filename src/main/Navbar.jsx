import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Home from './Home'
import Registration from './Registration'
import Login from './Login'
import Opportunities from './Opportunities'
import News from './News'
import PartnerCompanies from './PartnerCompanies'
export default function Navbar() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/news" element={<News />} />
        <Route path="/partnercompanies" element={<PartnerCompanies />} />
        
      </Routes>
    </div>
  )
}
