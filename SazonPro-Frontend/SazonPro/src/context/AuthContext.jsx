import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = getToken();
    if (token)
      setToken(token)
  })

  const saveToken = (token) => {
    localStorage.setItem("token", JSON.stringify(token))
    setToken(token)
  }

  const getToken = () => {
    const token = localStorage.getItem("token")
    if (token)
      setToken(JSON.parse(token))
  }

  const removeToken = () => {
    localStorage.removeItem("token")
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ saveToken, removeToken, token }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }
