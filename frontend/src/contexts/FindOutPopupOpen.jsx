import React, { createContext, useState } from "react";

export const FindOutPopupContext = createContext();


export const FindOutPopupProvider = ({children}) => {
    const [isFindOutPopupOpen, setIsFindOutPopupOpen] = useState(false);

    return(
        <FindOutPopupContext.Provider value={{ isFindOutPopupOpen, setIsFindOutPopupOpen }}>
            {children}
        </FindOutPopupContext.Provider>
    )
}