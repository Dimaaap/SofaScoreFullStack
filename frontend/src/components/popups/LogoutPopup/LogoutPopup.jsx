import React, { useContext } from 'react'
import "./LogoutPopup.css";
import { FiLogOut } from "react-icons/fi";
import player  from "../../../assets/player.svg"
import { LogoutConfirmContext } from '../../../contexts/LogoutConfirmContext';
import { LogoutContext } from '../../../contexts/LogoutContext';
import { useNavigate } from 'react-router-dom';

const LogoutPopup = () => {

  const { toggleLogout } = useContext(LogoutContext);
  const { toggleLogoutConfirm } = useContext(LogoutConfirmContext);
  const navigate = useNavigate();

  const clickLogoutConfirmPopup = () => {
    toggleLogoutConfirm();
    toggleLogout();
  }

  const goToProfile = () => {
    navigate("/user/profile");
  }


  return (
    <div id="logout-modal">
        <div className="modal-content">
          <div className="modal-row" onClick={goToProfile}>
            <span className="img-container">
              <img src={player} alt="" className="popup-img" 
              width={23} height={23}/>
            </span>
            <span className="text-container">
              Профіль
            </span>
          </div>
          <hr />
          <div className="modal-row" onClick={clickLogoutConfirmPopup}>
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
