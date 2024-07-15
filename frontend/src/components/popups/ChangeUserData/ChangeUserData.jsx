import React from 'react'
import UserAvatar from "../../UserAvatar/UserAvatar.jsx"
import "./ChangeUserData.css"

const ChangeUserData = () => {
  return (
    <div className="change-user-data-overlay">
      <div className="change-user-content">
        <div className="avatar-container">
          <UserAvatar size={60} />
        </div>
        <form className="change-user-form">
          <input type="file" name="user-avatar"/>
          <label className="form-label" htmlFor="username">
            Ім'я користувача (так вас бачать інші)
          </label>
          <input type="text" className="form-text-field" 
          name="username"
          />
        </form>
        <div className="btns-container">
          <button type="button" className="popup-btn">
            Відміна
          </button>
          <button type="button" className="popup-btn">
            Зберегти
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChangeUserData
