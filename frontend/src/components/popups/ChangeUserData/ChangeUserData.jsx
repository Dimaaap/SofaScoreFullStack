import React, { useContext, useRef, useState, useEffect } from 'react'
import UserAvatar from "../../UserAvatar/UserAvatar.jsx"
import "./ChangeUserData.css"
import { ChangeUserDataContext } from '../../../contexts/ChangeUserDataModel.jsx'
import { UserPictureContext } from '../../../contexts/UserPicture.jsx'
import { UserDataContext } from '../../../contexts/UserDataContext.jsx'

const ChangeUserData = ({ userName }) => {
  const GOOGLE_ID = localStorage.getItem("googleId");
  const UPLOAD_AVATAR_BACKEND_URL = `http://127.0.0.1:8000/auth/api/v1/upload-avatar/${GOOGLE_ID}`;
  const CHANGE_USER_NAME_BACKEND_URL = `http://127.0.0.1:8000/auth/api/v1/change-username/${GOOGLE_ID}`;
  const fileInputRef = useRef(null);
  const { setIsChangeUserDataOpen } = useContext(ChangeUserDataContext);
  const { userPicture, setUserPicture } = useContext(UserPictureContext);
  const { userData, setUserData } = useContext(UserDataContext);
  const [ selectedImage, setSelectedImage ] = useState(null);
  const [ uploadStatus, setUploadStatus ] = useState(0)
  const [ currentFile, setCurrentFile]  = useState(null);
  const {email, first_name, last_name} = userData;
  const [changedUserName, setChangedUserName] = useState(first_name)
  
  const onNewFileUpload = (event) => {
    try {
      var uploadedFile = event.target.files[0]
    } catch( {name, message} ){
      return;
    }
    if (uploadedFile){
      const previewUrl = URL.createObjectURL(uploadedFile);
      setSelectedImage(previewUrl);
      setCurrentFile(uploadedFile);
    }
  }

  const saveSelectedFile = () => {
    let selectedFile = currentFile;
    if (!selectedFile){
      return;
    } else {
      const formData = new FormData();
      formData.append("file", selectedFile);
      sendDataToBackend(formData);
      setIsChangeUserDataOpen(false);
      setUserPicture(selectedImage);
    }
  }

  const saveNewUserName = () => {
    let newUserName = changedUserName;
    if (!newUserName){
      return;
    } else {
      const formData = new FormData();
      formData.append("username", newUserName);
      fetch(CHANGE_USER_NAME_BACKEND_URL, {
        method: "POST",
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        console.log(userData)
        setUserData((prev) => ({
          ...prev,
          first_name: newUserName
        }));
      })
      .catch(error => {
        console.error(error)
      })
    }
  }

  const saveChanges = () => {
    saveSelectedFile();
    saveNewUserName();
    setIsChangeUserDataOpen(prev => !prev);
  }


  const updateUserName = (event) => {
    let changesName = event.target.value;
    setChangedUserName(changesName);
  }

  const sendDataToBackend = (formData) => {
    fetch(UPLOAD_AVATAR_BACKEND_URL, {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      setUploadStatus(1);
    })
    .catch(error => {
      setUploadStatus(0);
    })
  }

  useEffect(() => {
    console.log(selectedImage);
    console.log(userPicture);
  }, []);

  return (
    <div className="change-user-data-overlay">
      <div className="change-user-content">
        <div className="avatar-container">
          { selectedImage ? 
          <img className="uploaded-image"  
          src={selectedImage} /> : 
          <UserAvatar size={120} /> }
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
          name="username" value={changedUserName}
          placeholder={first_name}
          onChange={updateUserName}
          />
        </form>
        <div className="btns-container">
          <button type="button" className="popup-btn" onClick={
            () => setIsChangeUserDataOpen(prev => !prev)
          }>
            Відміна
          </button>
          <button type="button" className="popup-btn" 
          onClick={saveChanges}>
            Зберегти
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChangeUserData
