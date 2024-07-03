import React, { useContext } from 'react'
import { LogoutConfirmContext } from '../../../contexts/LogoutConfirmContext'
import "./LogoutConfirm.css";

const LogoutConfirm = () => {

    const { toggleLogoutConfirm } = useContext(LogoutConfirmContext);

  return (
    <div className="modal-overlay">
      <div id="logout-confirm-modal">
        <div className="modal-content">
            <div className="modal-body">
                <h6 className="modal-title">
                    Вийти
                </h6>
                <p>
                    Ви впевнені, що хочете вийти?
                </p>
                <div className="btns-row">
                    <button type="button" className="confirm-btn" id="close-btn"
                    onClick={toggleLogoutConfirm}>
                        ЗАКРИТИ
                    </button>
                    <button type="button" className="exit-btn" id="exit-btn">
                        ВИЙТИ
                    </button>
                </div>
            </div>    
        </div>
      </div>
    </div>
  )
}

export default LogoutConfirm
