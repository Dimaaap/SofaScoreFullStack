import React, { useContext } from 'react'
import { LogoutConfirmContext } from '../../../contexts/LogoutConfirmContext'
import "./LogoutConfirm.css";
import { useNavigate } from "react-router-dom";

const LogoutConfirm = () => {

    const { toggleLogoutConfirm } = useContext(LogoutConfirmContext);

    const navigate = useNavigate();

    const handleLogoutClick = () => {
      const csrfToken = getCookie("csrftoken");

      fetch("http://127.0.0.1:8000/auth/logout/", {
        method: "POST",
        credentials: "include",
        headers: {
          "X-CSRFToken": csrfToken
        },
      })
      .then(response => response.json())
      .then(data => {
        if(data.status === 200){
          localStorage.removeItem("googleId");
          localStorage.setItem("authStatus", "unauthorized");
          toggleLogoutConfirm();
          navigate("/");
          window.location.reload();
        } else {
          console.error("Logout failed: ", data);
        }
      })
      .catch(error => console.error("Error: ", error))
    };

    const getCookie = (name) => {
      let cookieValue = null;
      if (document.cookie && document.cookie !== '') {
          const cookies = document.cookie.split(';');
          for (let i = 0; i < cookies.length; i++) {
              const cookie = cookies[i].trim();
              if (cookie.substring(0, name.length + 1) === (name + '=')) {
                  cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                  break;
              }
          }
      }
      return cookieValue;
  };

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
                    <button type="button" className="exit-btn" id="exit-btn"
                    onClick={handleLogoutClick}>
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
