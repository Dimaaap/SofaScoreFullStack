import { useState } from 'react'
import { HiBellAlert } from "react-icons/hi2";
import { TiArrowSortedDown } from "react-icons/ti"
import ua_logo from "../../../assets/flags/ua.png";
import "./SettingsPopup.css"
import LanguagePopup from '../LanguagePopup/LanguagePopup';
import ThemePopup from '../ThemePopup/ThemePopup';

const SettingsPopup = () => {
    const [currTitle, setCurrTitle] = useState("Українська")
    const [currFlag, setCurrFlag] = useState(ua_logo);
    const [langPopup, setLangPopup] = useState(false);
    const [themePopup, setThemePopup] = useState(false);
    const [darkTheme, setDarkTheme] = useState("amoled");
  return (
    <div className="settingsPopup">
      <div className="popupHeader">
        <ul className="headerList">
            <li className="settingsItem">
                <HiBellAlert color="gray" width="90"/>
                Налаштування повідомлень
            </li>
            <li className="settingsItem" 
            onClick={() => setLangPopup(!langPopup)}>
                <img className="currLang" src={currFlag} />
                {currTitle}
                <TiArrowSortedDown className="arrowSort"/>
            </li>
            { langPopup && <LanguagePopup setCurrTitle={setCurrTitle}
            setCurrFlag={setCurrFlag} /> }
        </ul>
      </div>
      <div className="popupBody">
        <p><b>Коефіцієнти</b></p>
        <form className="coefForm radioForm">
            <div className="radio">
                <label>
                    <input type="radio" value="decimal" name="coef" checked={true} />
                    Десятковий
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" value="fraction" name="coef"/>
                    Дробовий
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" value="american" name="coef" />
                    Американський
                </label>
            </div>
        </form>
        <p><b>Одиниці виміру</b></p>
        <form className="metricsForm radioForm">
            <div className="radio">
                <label>
                    <input type="radio" value="metric" name="metrics" checked={true} />
                    Метрика
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" value="imperian" name="metrics" />
                    Імперська
                </label>
            </div>
        </form>
        <p><b>Тема</b></p>
        <form className="themeForm radioForm">
            <div className="radio">
                <label>
                    <input type="radio" value="auto" name="theme" checked={true} />
                    Авто
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" value="light" name="theme" />
                    Світла
                </label>
            </div>
            <div className="radio inputField">
                { themePopup && <ThemePopup setTheme={setDarkTheme}
                currTheme={darkTheme}/> }
                <label id='lastLabel'>
                    <input type="radio" value="dark" name="theme" />
                    Темна ({darkTheme === "amoled" ? "Амолед" : "Нічна"})
                </label>
                <div className="verticalLine"></div>
                <div className="btnContainer">
                    <button className="arrowBtn" onClick={(e) => {
                        e.preventDefault()
                        setThemePopup(!themePopup)
                        }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" class="arrow">
                            <path d="m17 9-5 8-5-8h10z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default SettingsPopup
