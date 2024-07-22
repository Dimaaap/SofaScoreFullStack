import React, { useContext } from 'react'
import { FindOutPopupContext } from '../../../contexts/FindOutPopupOpen'
import { RiShieldFlashFill } from "react-icons/ri";
import { PiPencilCircleBold } from "react-icons/pi";
import "./FindOutPopup.css";

const FindOutPopup = () => {

    const {setIsFindOutPopupOpen} = useContext(FindOutPopupContext)

  return (
    <div className="find-out-popup-overlay">
        <div className="find-out-popup">
            <div className="image-container">
                <div className="first-box">
                    <RiShieldFlashFill size={60} fill="#374df5" />
                </div>
                <div className="second-box">
                   <PiPencilCircleBold size={60} fill="#374df5" id="second-box" />
                </div>
            </div>
            <div className="text-container">
                <p>
                    Ви можете отримати два типи значків 
                    двома способами. По-перше, запропонувавши 
                    інформацію про результати матчу та деталі в
                    додатку. Перевірте наступний матч вашого місцевого 
                    клубу та натисніть "Запропонувати зміни події". 
                    Другий спосіб - стати цінним користувачем-редактором
                    та учасником. Завантажте програму Sofascore Editor 
                    і приєднуйтесь.
                </p>
            </div>
            <div className="btn-container">
                <button type="button" 
                className="got-btn" 
                onClick={() => setIsFindOutPopupOpen(prev => !prev)}>
                    Добре, прийняти       
                </button>
            </div>
        </div>
    </div>
  )
}

export default FindOutPopup
