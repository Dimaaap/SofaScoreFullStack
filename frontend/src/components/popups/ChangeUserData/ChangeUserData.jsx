import React, { useContext, useRef, useState } from 'react'
import UserAvatar from "../../UserAvatar/UserAvatar.jsx"
import "./ChangeUserData.css"
import { ChangeUserDataContext } from '../../../contexts/ChangeUserDataModel.jsx'
import { UserPictureContext } from '../../../contexts/UserPicture.jsx'

const ChangeUserData = ({ userName }) => {

  const { setIsChangeUserDataOpen } = useContext(ChangeUserDataContext);
  const { userPicture, setUserPicture } = useContext(UserPictureContext);
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
 
  const handleButtonClick = () => {
    fileInputRef.current.click();
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if(file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      }
      reader.readAsDataURL(file);
      uploadFile(file);
    }
  }

  const uploadFile = (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const GOOGLE_ID = localStorage.getItem("googleId");

    fetch(`http://localhost:8000/auth/api/v1/upload-avatar/${GOOGLE_ID}`, {
      method: "POST",
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      setUploadStatus("Success");
      console.log(data);
    })
    .catch(error => {
      setUploadStatus("Error");
      console.log("Error: ", error);
    }
    )

  }

  const changeUserData = ({ userName, avatar }) => {

  }

  return (
    <div className="change-user-data-overlay">
      <div className="change-user-content">
        <div className="avatar-container">
          { selectedImage ? (
              <img src={selectedImage} alt="" 
              width={120} height={120} 
              className="temp-user-image"
              style={{
                borderRadius:"50%",
                display: "inline-block",
                marginTop: "10%"
              }} />
          ): <UserAvatar size={120} /> } 
        </div>
        <form className="change-user-form">
          <label className="custom-file-upload-btn" 
          htmlFor='file-upload' onClick={handleButtonClick}>
            Змінити зображення профілю
          </label>
          <input type="file" name="user-avatar" id="file-upload" 
          accept=".jpg,.jpeg,.gif,.png" 
          onChange={handleFileChange}/>
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
          <button type="button" className="popup-btn" 
          onClick={handleFileChange}>
            Зберегти
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChangeUserData
