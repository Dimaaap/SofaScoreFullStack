import "./DeleteProfile.css";
import { useContext } from "react";
import { DeleteProfilePopupContext } from "../../../contexts/DeleteProfileContext";

const DeleteProfile = () => {

    const { setIsDeleteProfilePopupOpen } = useContext(DeleteProfilePopupContext)

  return (
    <div className="delete-profile-overlay">
        <div className="delete-profile-content">
            <h5 className="delete-profile-header">
                Назавжди видалити акаунт?
            </h5>
            <div className="text-body">
                Ви не зможете використовувати або 
                зареєструватись з цим обліковим 
                записом знову.
            </div>
            <div className="btns-container" 
            onClick={() => setIsDeleteProfilePopupOpen(prev => !prev)}>
                <button className="delete-btn" type="button">
                    Так, видалити
                </button>
                <button className="cancel-btn" type="button">
                    Відміна
                </button>
            </div>
        </div>
    </div>
  )
}

export default DeleteProfile
