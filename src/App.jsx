// import React from 'react'
// import { BrowserRouter } from 'react-router-dom'

import Navbar from './main/Navbar'

// export default function App() {
//   return (
//     <div>
//       <BrowserRouter>

//       <Navbar/>
//       </BrowserRouter>
//     </div>
//   )
// }
import { BrowserRouter } from "react-router-dom";
import ApplicantNavbar from './applicant/ApplicantNavbar';
import { AuthProvider, useAuth } from "./contextapi/AuthContext";

function AppContent() {
  const { isApplicantLoggedIn } = useAuth();

  return (
    <BrowserRouter>
     
      {isApplicantLoggedIn ? (
        <ApplicantNavbar />
      ) : (
        <Navbar />
      )}
    </BrowserRouter>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
