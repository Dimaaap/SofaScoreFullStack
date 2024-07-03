import React, { createContext, useState } from "react";


export const LogoutConfirmContext = createContext();

export const LogoutConfirmProvider = ({ children }) => {

    const [isLogoutConfirm, setIsLogoutConfirm] = useState(false);
    
    const toggleLogoutConfirm = () => {
        setIsLogoutConfirm(!isLogoutConfirm);
    }

    return (
        <LogoutConfirmContext.Provider value={{ isLogoutConfirm, toggleLogoutConfirm }}>
            { children }
        </LogoutConfirmContext.Provider>
    )
}