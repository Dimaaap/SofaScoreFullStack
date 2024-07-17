import React, { createContext, useState } from "react";


export const UserPictureContext = createContext();


export const UserPictureProvider = ({ children }) => {
    const [ userPicture, setUserPicture ] = useState(null);

    return (
        <UserPictureContext.Provider value={{ userPicture, setUserPicture }}>
            { children }
        </UserPictureContext.Provider>
    )
}