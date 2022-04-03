import React from 'react'
import { createContext, useState } from "react";
import { api } from '../services/api';

export const AuthContext = createContext({})

export function AuthProvider(props) {
  //TODO: revisar lógica de initialUser, analisar uso de useEffect pra sempre recuperar as informações do usuário
  const initialUser = () => {
    const item = window.localStorage.getItem('user')
    return item ? JSON.parse(item) : null
  }
  const [user, setUser] = useState(initialUser()) 

  function handleLogin (user) {
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
    api.defaults.headers.Authorization = `Bearer ${user.token}`
  }

  function handleLogout() {
    localStorage.removeItem('user')
    window.location = '/'
    setUser(initialUser())
  }

  return (
    <AuthContext.Provider value={{user, handleLogin, handleLogout, signed: user}}>
      {props.children}
    </AuthContext.Provider>
  )
}