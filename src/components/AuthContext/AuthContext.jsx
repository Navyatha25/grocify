import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load logged-in user on refresh
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // REGISTER MULTIPLE USERS
  const register = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  };

  // LOGIN USER
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) return false;

    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
    setUser(foundUser);
    setUser({email: foundUser.email})
    return true;
  };

  // LOGOUT USER
  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
