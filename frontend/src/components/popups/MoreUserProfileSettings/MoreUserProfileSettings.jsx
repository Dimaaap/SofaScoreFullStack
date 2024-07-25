import { useContext } from "react";
import { GoCircleSlash } from "react-icons/go";
import { MdOutlineLogout } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import "./MoreUserProfileSettings.css";
import { CancelSubscriptionContext } from "../../../contexts/CancelSubscription";
import { LogoutConfirmContext } from "../../../contexts/LogoutConfirmContext";
import { DeleteProfilePopupContext } from "../../../contexts/DeleteProfileContext";

const MoreUserProfileSettings = () => {

    const { toggleLogoutConfirm } = useContext(LogoutConfirmContext);
    const { setIsCancelPopupOpen } = useContext(CancelSubscriptionContext);
    const { setIsDeleteProfilePopupOpen } = useContext(DeleteProfilePopupContext)
    

  return (
    <div className="user-profile-settings">
      <ul className="sections-list">
        <li className="point">
            <div className="point-icon">
                <GoCircleSlash size={20} />
            </div>
            <div className="point-text" 
            onClick={() => setIsCancelPopupOpen(prev => !prev)}>
                Відписатись
            </div>
        </li>
        <li className="point">
            <div className="point-icon">
                <MdOutlineLogout size={20} />
            </div>
            <div className="point-text" 
            onClick={toggleLogoutConfirm}>
                Log Out
            </div>
        </li>
        <li className="point red-text">
            <div className="point-icon">
                <FaTrash size={20} />
            </div>
            <div className="point-text" 
            onClick={() => setIsDeleteProfilePopupOpen(prev => !prev)}>
                Видалити профіль
            </div>
        </li>
      </ul>
    </div>
  )
}

export default MoreUserProfileSettings
