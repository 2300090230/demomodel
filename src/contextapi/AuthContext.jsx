import { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const AuthContext = createContext();

// Provider component to manage login states and user data
export function AuthProvider({ children }) 
{
  // Load initial state from sessionStorage or default to false/null
  const [isAppilicantLoggedIn, setIsAppilicantLoggedIn] = useState(() => {
    return sessionStorage.getItem('isAppilicantLoggedIn') === 'true';
  });

  // Load applicant data from sessionStorage
  const [applicant, setApplicant] = useState(() => {
    const savedApplicant = sessionStorage.getItem('applicant');
    return savedApplicant ? JSON.parse(savedApplicant) : null;
  });

  // Save state to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('isAppilicantLoggedIn', isAppilicantLoggedIn);
  }, [isAppilicantLoggedIn]);

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
    setIsAppilicantLoggedIn(true);
    setApplicant(applicantData);
    sessionStorage.setItem('isAppilicantLoggedIn', 'true');
    sessionStorage.setItem('applicant', JSON.stringify(applicantData));
  };

  // Logout function
  const logoutApplicant = () => {
    setIsAppilicantLoggedIn(false);
    setApplicant(null);
    sessionStorage.removeItem('isAppilicantLoggedIn');
    sessionStorage.removeItem('applicant');
    sessionStorage.clear(); // Clear all session storage
  };

  return (
    <AuthContext.Provider
      value={{
        isAppilicantLoggedIn,
        setIsAppilicantLoggedIn,
        applicant,
        setApplicant,
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
