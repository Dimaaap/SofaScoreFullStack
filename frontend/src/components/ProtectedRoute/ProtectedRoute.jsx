import React, { useContext, useEffect, useState } from 'react'
import { Route } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';
import SignInPopup from '../popups/SignInPopup/SignInPopup';
import Profile from "../../pages/Profile/Profile"

const ProtectedRoute = ({component: Component, ...rest}) => {
    const { authStatus } = useContext(AuthContext)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const storedAuthStatus = localStorage.getItem("authStatus");
        if(storedAuthStatus === "authorized"){
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
            setShowModal(true);
        }
    }, [authStatus])

    return (
        <>
            {console.log("here")}
            {console.log(showModal)}
            { console.log({Component}) }
            {showModal ? <SignInPopup /> : <Profile />}
        </>
    )
}

export default ProtectedRoute
