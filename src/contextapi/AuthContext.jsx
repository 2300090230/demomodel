import { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const AuthContext = createContext();

// Provider component to manage login states and user data
export function AuthProvider({ children }) {
  // Load initial state from sessionStorage or default to false/null
  const [isApplicantLoggedIn, setIsApplicantLoggedIn] = useState(() => {
    return sessionStorage.getItem('isApplicantLoggedIn') === 'true';
  });

  // Load applicant data from sessionStorage
  const [applicant, setApplicant] = useState(() => {
    const savedApplicant = sessionStorage.getItem('applicant');
    return savedApplicant ? JSON.parse(savedApplicant) : null;
  });

  // Save state to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('isApplicantLoggedIn', isApplicantLoggedIn);
  }, [isApplicantLoggedIn]);

  // Save applicant data to sessionStorage whenever it changes
  useEffect(() => {
    if (applicant) {
      sessionStorage.setItem('applicant', JSON.stringify(applicant));
    } else {
      sessionStorage.removeItem('applicant');
    }
  }, [applicant]);

  // Login function
  const loginApplicant = (applicantData) => {
    setIsApplicantLoggedIn(true);
    setApplicant(applicantData);
    sessionStorage.setItem('isApplicantLoggedIn', 'true');
    sessionStorage.setItem('applicant', JSON.stringify(applicantData));
  };

  // Logout function
  const logoutApplicant = () => {
    setIsApplicantLoggedIn(false);
    setApplicant(null);
    sessionStorage.removeItem('isApplicantLoggedIn');
    sessionStorage.removeItem('applicant');
    // ❌ removed sessionStorage.clear() because it wipes unrelated data
  };

  return (
    <AuthContext.Provider
      value={{
        isApplicantLoggedIn,
        applicant,
        loginApplicant,
        logoutApplicant
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to access the context
export const useAuth = () => useContext(AuthContext);
