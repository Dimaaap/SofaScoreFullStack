import React from 'react'
import "./LogoutPopup.css";
import { FiLogOut } from "react-icons/fi";
import player  from "../../../assets/player.svg"

const LogoutPopup = () => {
  return (
    <div id="logout-modal">
        <div className="modal-content">
          <div className="modal-row">
            <span className="img-container">
              <img src={player} alt="" className="popup-img" 
              width={23} height={23}/>
            </span>
            <span className="text-container">
              Профіль
            </span>
          </div>
          <hr />
          <div className="modal-row">
            <span className="img-container">
              <FiLogOut size={23} />
            </span>
            <span className="text-container">
              Вийти
            </span>
            
          </div>
        </div>
    </div>
  )
}

export default LogoutPopup
