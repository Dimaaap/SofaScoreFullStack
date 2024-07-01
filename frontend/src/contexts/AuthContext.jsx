import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [authStatus, setAuthStatus] = useState("unathorized");

    useEffect(() => {
        const savedAuthStatus = localStorage.getItem("authStatus");
        if(savedAuthStatus){
            setAuthStatus(savedAuthStatus);
        }
    }, []);

    return(
        <AuthContext.Provider value={{ authStatus, setAuthStatus }}>
            { children }
        </AuthContext.Provider>
    )
}