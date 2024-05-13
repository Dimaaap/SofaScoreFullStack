import { useState } from "react";
import { Link } from "react-router-dom";
import "./BottomHeader.css";
import { GiSoccerBall } from "react-icons/gi"
import { FaBasketball } from "react-icons/fa6";
import { MdOutlineSportsTennis } from "react-icons/md";
import { FaTableTennis } from "react-icons/fa";
import { PiHockey } from "react-icons/pi";
import { FaMouse } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import { FaVolleyball } from "react-icons/fa6";
import { FaBaseballBatBall } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import SettingsPopup from "../popups/SettingsPopup/SettingsPopup";


const BottomHeader = () => {
    const [active, setActive] = useState('soccer')
    const [settingsModal, setSettingsModal] = useState(false);
  return (
    <>
        <div className="bottom-container">
        <ul className="sports-container">
                <li className={`sport ${active === "soccer" ? 'active': ''}`}
                onClick={() => setActive("soccer")}>
                    <Link to="/">
                        <GiSoccerBall color="white" />
                        Футбол
                    </Link>
                </li>
            <li className={`sport ${active === "basketball" ? 'active': ''}`}
            onClick={() => setActive("basketball")}>
                <Link to="/basketball">
                    <FaBasketball color="white" />
                    Баскетбол
                </Link>
            </li>
            <li className={`sport ${active === "tennis" ? 'active': ''}`}
            onClick={() => setActive("tennis")}>
                <Link to="/tennis">
                    <MdOutlineSportsTennis color="white" />
                    Теніс
                </Link>
            </li>
            <li className={`sport ${active === "ping-pong" ? 'active': ''}`}
            onClick={() => setActive("ping-pong")}>
                <FaTableTennis color="white"/>
                Настільний теніс
            </li>
            <li className={`sport ${active === "hockey" ? 'active': ''}`}
            onClick={() => setActive("hockey")}>
                <PiHockey color="white" />
                Хокей
            </li>
            <li className={`sport ${active === "cyber" ? 'active': ''}`}
            onClick={() => setActive('cyber')}>
                <FaMouse color="white" />
                Кіберспорт
            </li>
            <li className={`sport ${active === "handball" ? 'active': ''}`}
            onClick={() => setActive('handball')}>
                <IoMdFootball color="white" />
                Гандбол
            </li>
            <li className={`sport ${active === "volleyball" ? 'active': ''}`}
            onClick={() => setActive('volleyball')}>
                <FaVolleyball color="white" />
                Волейбол
            </li>
            <li className={`sport ${active === "baseball" ? 'active': ''}`}
            onClick={() => setActive("baseball")}>
                <FaBaseballBatBall color="white" />
                Бейсбол
            </li>
            <li className="sport">
                <BsThreeDots color="white" />
                <span className="oneRow">
                    Ще
                    <GoTriangleDown color="gray" />
                </span>
            </li>
            <li>
                <button className="settingsBtn" onClick={() => setSettingsModal(!settingsModal)}>
                    <IoMdSettings color="white"/>
                </button>
            </li>
        </ul>
        </div>
        { settingsModal && <SettingsPopup /> }
    </>
  )
}

export default BottomHeader
