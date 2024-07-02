import React, { createContext, useState } from "react";


export const LogoutContext = createContext();

export const LogoutProvider = ({children}) => {

    const [isLogoutOpen, setIsLogoutOpen] = useState(false);

    const toggleLogout = () => {
        setIsLogoutOpen(!isLogoutOpen);
    }

    return (
        <LogoutContext.Provider value={{isLogoutOpen, toggleLogout}}>
            {children}
        </LogoutContext.Provider>
    )
}