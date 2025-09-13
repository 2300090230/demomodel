import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // const register = (formData) => {
  //   // Direct ga store cheyyakunda fake ga pass avuthundi
  //   console.log("Registered:", formData);
  // };
  const register = (userData) => {
  setUser(userData);   // this will now include name, email, location, skills
};

  const login = (formData) => {
    // Eppudu success ani assume cheddam
    setUser(formData);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

