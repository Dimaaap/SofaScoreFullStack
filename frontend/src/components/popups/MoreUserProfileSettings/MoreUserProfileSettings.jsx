import { useContext } from "react";
import { GoCircleSlash } from "react-icons/go";
import { MdOutlineLogout } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import "./MoreUserProfileSettings.css";
import { CancelSubscriptionContext } from "../../../contexts/CancelSubscription";

const MoreUserProfileSettings = () => {

    const { setIsCancelPopupOpen } = useContext(CancelSubscriptionContext);

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
            <div className="point-text">
                Log Out
            </div>
        </li>
        <li className="point red-text">
            <div className="point-icon">
                <FaTrash size={20} />
            </div>
            <div className="point-text">
                Видалити профіль
            </div>
        </li>
      </ul>
    </div>
  )
}

export default MoreUserProfileSettings
