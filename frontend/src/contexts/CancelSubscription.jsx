import { createContext, useState } from "react";

export const CancelSubscriptionContext = createContext();

export const CancelSubscriptionProvider = ({children}) => {
    const [ isCancelPopupOpen, setIsCancelPopupOpen ] = useState(false);

    return(
        <CancelSubscriptionContext.Provider value={{ isCancelPopupOpen, setIsCancelPopupOpen }}>
            { children }
        </CancelSubscriptionContext.Provider>
    )
}