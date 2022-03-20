import React from 'react'
import { createContext, useState } from "react";
export const AuthContext = createContext({})

export function AuthProvider(props) {
  
  const initialUser = () => {
    const item = window.localStorage.getItem('user')
    return item ? JSON.parse(item) : null
  }
  const [user, setUser] = useState(initialUser()) 

  function handleLogin (user) {
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
  }

  function handleLogout() {
    localStorage.removeItem('user')
    window.location = '/'
    setUser(initialUser())
  }

  return (
    <AuthContext.Provider value={{user, handleLogin, handleLogout}}>
      {props.children}
    </AuthContext.Provider>
  )
}