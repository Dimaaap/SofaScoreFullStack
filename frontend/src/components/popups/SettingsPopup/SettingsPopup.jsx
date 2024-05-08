import React from 'react'
import { HiBellAlert } from "react-icons/hi2";
import { TiArrowSortedDown } from "react-icons/ti"
import ua_logo from "../../../assets/flags/ua.png";
import "./SettingsPopup.css"

const SettingsPopup = () => {
  return (
    <div className="settingsPopup">
      <div className="popupHeader">
        <ul className="headerList">
            <li className="settingsItem">
                <HiBellAlert color="gray" width="90"/>
                Налаштування повідомлень
            </li>
            <li className="settingsItem">
                <img className="currLang" src={ua_logo} />
                Українська
                <TiArrowSortedDown className="arrowSort" />
            </li>
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
            <div clasName="radio inputField">
                <label>
                    <input type="radio" value="dark" name="theme" />
                    Темна (Нічна)
                </label>
            </div>
        </form>
      </div>
    </div>
  )
}

export default SettingsPopup
