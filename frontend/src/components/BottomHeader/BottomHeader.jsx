import { useState } from "react";
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
  return (
    <>
        <div className="bottom-container">
        <ul class="sports-container">
            <li className={`sport ${active === "soccer" ? 'active': ''}`}
            onClick={() => setActive("soccer")}>
                <GiSoccerBall color="white" />
                Футбол
            </li>
            <li className={`sport ${active === "basketball" ? 'active': ''}`}
            onClick={() => setActive("basketball")}>
                <FaBasketball color="white" />
                Баскетбол
            </li>
            <li className={`sport ${active === "tennis" ? 'active': ''}`}
            onClick={() => setActive("tennis")}>
                <MdOutlineSportsTennis color="white" />
                Теніс
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
                <button className="settingsBtn">
                    <IoMdSettings color="white"/>
                </button>
            </li>
        </ul>
        </div>
        <SettingsPopup />
    </>
  )
}

export default BottomHeader
