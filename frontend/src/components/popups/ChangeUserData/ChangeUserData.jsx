import React, { useContext, useRef, useState } from 'react'
import UserAvatar from "../../UserAvatar/UserAvatar.jsx"
import "./ChangeUserData.css"
import { ChangeUserDataContext } from '../../../contexts/ChangeUserDataModel.jsx'
import { UserPictureContext } from '../../../contexts/UserPicture.jsx'

const ChangeUserData = ({ userName }) => {
  const GOOGLE_ID = localStorage.getItem("googleId");
  const fileInputRef = useRef(null);
  const { setIsChangeUserDataOpen } = useContext(ChangeUserDataContext);
  const { userPicture, setUserPicture } = useContext(UserPictureContext);
  const [ currentAvatar, setCurrentAvatar ] = useState(null);

  // userPicture containes current user avatar and I 
  // should change it after clicking "Save" button on 
  // popup

  const onNewFileUpload = (event) => {
    try {
      var uploadedFile = event.target.files[0]
    } catch( {name, message} ){
      return;
    }
    setCurrentAvatar(uploadedFile);
    console.log(currentAvatar);
  }

  return (
    <div className="change-user-data-overlay">
      <div className="change-user-content">
        <div className="avatar-container">
          <UserAvatar size={120} />
        </div>
        <form className="change-user-form">
          <label className="custom-file-upload-btn" 
          htmlFor='file-upload'>
            Змінити зображення профілю
          </label>
          <input type="file" name="user-avatar" id="file-upload" 
          accept=".jpg,.jpeg,.gif,.png" 
          ref={fileInputRef} 
          onChange={onNewFileUpload}/>
          <label className="form-label" htmlFor="username">
            Ім'я користувача (так вас бачать інші)
          </label>
          <input type="text" className="form-text-field" 
          name="username" value={userName}
          />
        </form>
        <div className="btns-container">
          <button type="button" className="popup-btn" onClick={
            () => setIsChangeUserDataOpen(prev => !prev)
          }>
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
