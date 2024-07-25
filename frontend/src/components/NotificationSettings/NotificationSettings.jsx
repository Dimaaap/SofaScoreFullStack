import "./NotificationSettings.css";
import { LuBellRing } from "react-icons/lu";
import { Link } from "react-router-dom"

const NotificationSettings = () => {
  return (
    <div className="notification-settings">
        <LuBellRing size={25} />
        <Link to="/" className="notification-link">
            Налаштування повідомлень
        </Link>
    </div>
  )
}

export default NotificationSettings
