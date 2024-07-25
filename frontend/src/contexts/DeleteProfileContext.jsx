import { createContext, useState } from "react";

export const DeleteProfilePopupContext = createContext();

export const DeleteProfilePopupProvider = ({children}) => {
    const [ isDeleteProfilePopupOpen, setIsDeleteProfilePopupOpen ] = useState(false);

    return(
        <DeleteProfilePopupContext.Provider value={{ isDeleteProfilePopupOpen, setIsDeleteProfilePopupOpen }}>
            { children }
        </DeleteProfilePopupContext.Provider>
    )
}
