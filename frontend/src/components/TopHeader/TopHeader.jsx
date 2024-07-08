import React, { useContext, useState } from 'react'
import "./TopHeader.css";
import logo from "../../assets/sofa_score_logo.png"
import player from "../../assets/player.svg"
import { ModalContext } from '../../contexts/SigninContext';
import { FaBell } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthContext';
import UserAvatar from "../../components/UserAvatar/UserAvatar.jsx";
import { LogoutContext } from '../../contexts/LogoutContext.jsx';

const TopHeader = () => {


  const { authStatus } = useContext(AuthContext);
  const { toggleModal } = useContext(ModalContext);
  const { toggleLogout } = useContext(LogoutContext)

  return (
    <div className="top-header">
      <div className="container">
        <div className="left-section">
            <div className="logo">
                <img className="site-logo" src={logo}
                width="500" height="80"/>
            </div>
            <div className="search-form">
                <form className="box-form" method="get">
                    <svg width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    className="input-search-icon">
                        <path d="M15.7 13.58h-1.38a6.964 6.964 0 0 0 1.7-4.57C16.02 5.14 12.88 2 9.01 2 5.14 2 2 5.14 2 9.01c0 3.87 3.14 7.01 7.01 7.01 1.75 0 3.34-.64 4.57-1.7v1.38l6.3 6.3L22 19.88l-6.3-6.3zm-6.69.44C6.25 14.02 4 11.77 4 9.01S6.25 4 9.01 4s5.01 2.25 5.01 5.01-2.25 5.01-5.01 5.01z" 
                        mx="lg" 
                        my="sm">
                        </path>
                    </svg>   
                    <input type="text" autoComplete='off' 
                    placeholder='Пошук' className="search-field"/>
                </form>
            </div>
        </div>
        <div className="right-section">
            <ul className="menu-item">
                <li className="item" id="first-item">
                    ПАДІННЯ КОЕФІЦІЄНТІВ
                    <svg width="24" 
                    height="24" 
                    viewBox="0 0 24 24" className="li-icon">
                      <g fillRule="evenodd" ml="xs">
                        <path fill="white" 
                        d="M16 18L18.29 15.71 13.41 10.83 9.41 14.83 2 7.41 3.41 6 9.41 12 13.41 8 19.71 14.29 22 12 22 18z">
                        </path>
                      </g>
                    </svg>
                </li>
                <li className="item">
                  ОБРАНЕ
                  <FaBell color="white" />
                </li>
                <li className="item" id="player-li" 
                onClick={authStatus === "authorized" ? 
                  toggleLogout : toggleModal
                }>
                  { 
                  authStatus === "authorized" ? 
                  <UserAvatar size="small" /> : 
                  <img className="player-icon" src={player} /> 
                  }
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
