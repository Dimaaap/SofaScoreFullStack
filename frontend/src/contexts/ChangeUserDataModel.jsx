import React, { createContext, useState } from "react";

export const ChangeUserDataContext = createContext();


export const ChangeUserDataProvider = ({ children }) => {
    const [isChangeUserDataOpen, setIsChangeUserDataOpen] = useState(false);

    return(
        <ChangeUserDataContext.Provider value={{ isChangeUserDataOpen, setIsChangeUserDataOpen }}>
            { children }
        </ChangeUserDataContext.Provider>
    )
}