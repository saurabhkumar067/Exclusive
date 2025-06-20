"use client"

import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(()=>{
        const user = localStorage.getItem("user");
        if(user) setIsAuthenticated(user)
    },[])

    const login = (user)=>{
        localStorage.setItem("user", JSON.stringify(user));
        setIsAuthenticated(true);
    }
    const logout = ()=>{
        localStorage.removeItem("user");
        setIsAuthenticated(false)
    }
    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=> useContext(AuthContext)