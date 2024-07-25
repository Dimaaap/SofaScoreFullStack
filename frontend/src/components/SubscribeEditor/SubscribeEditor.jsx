import "./SubscribeEditor.css";
import { Link } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";

const SubscribeEditor = () => {
  return (
    <div className="subscribe-editor">
        <h6 className="section-title">
            Редактор Підписок
        </h6>
        <div className="header-container">
            <Link className="header-btn" to="#">
                Команди
            </Link>
            <Link className="header-btn active-link" to="#">
                Ліги
            </Link>
            <Link className="header-btn" to="#">
                Гравці
            </Link>
        </div>
        <div className="suggestions">
            <h6 className="suggestions-title">
                Пропозиції
            </h6>
            <button className="arrow-btn">
                <IoIosArrowUp size={20} />
            </button>
        </div>
        <div className="suggestions-container">
            Container
        </div>
    </div>
  )
}

export default SubscribeEditor
