import React from 'react'
import "./LogoutPopup.css";
import { FiLogOut } from "react-icons/fi";
import player  from "../../../assets/player.svg"

const LogoutPopup = () => {
  return (
    <div className="logout-popup">
      <div className="menu-section">
        <span className="profile-icon">
            <img src={player} alt="" width={15}
            height={15}/>
        </span>
        Профіль
      </div>
      <hr />
      <div className="menu-section">
        <span className="profile-icon">
            <FiLogOut size={15} />
        </span>
        Вийти
      </div>
    </div>
  )
}

export default LogoutPopup
