import { createContext, useState, useContext } from "react";

// Step 1: Create Context
const AuthContext = createContext();

// Step 2: Create Provider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(name, password) {
    if (!name || !password) {
      alert("Please enter your name and password");
      return;
    }
    setUser({ name }); // store user globally
    alert(`Welcome, ${name}!`);
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Step 3: Custom hook (for easy access)
export function useAuth() {
  return useContext(AuthContext);
}
