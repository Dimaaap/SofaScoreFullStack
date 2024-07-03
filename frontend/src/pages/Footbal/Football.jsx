import React, { useContext } from 'react'
import "./Football.css"
import TopHeader from '../../components/TopHeader/TopHeader'
import BottomHeader from "../../components/BottomHeader/BottomHeader"
import MatchCalendar from '../../components/MatchCalendar/MatchCalendar'
import TopLeages from '../../components/TopLeages/TopLeages'
import Ratings from '../../components/Ratings/Ratings'
import OtherLeagues from '../../components/OtherLeagues/OtherLeagues'
import { ModalContext } from '../../contexts/SigninContext'
import SignInPopup from '../../components/popups/SignInPopup/SignInPopup'
import { LogoutContext } from '../../contexts/LogoutContext'
import LogoutPopup from '../../components/popups/LogoutPopup/LogoutPopup'
import { LogoutConfirmContext } from '../../contexts/LogoutConfirmContext'
import LogoutConfirm from '../../components/popups/LogoutConfirm/LogoutConfirm'

const Football = () => {

    const { isModalOpen, toggleModal } = useContext(ModalContext);
    const { isLogoutOpen } = useContext(LogoutContext)
    const { isLogoutConfirm } = useContext(LogoutConfirmContext);

  return (
    <>
        <TopHeader />
        <BottomHeader />
        <div className="body">
            { isLogoutOpen && <LogoutPopup /> }
            { isModalOpen && <SignInPopup /> }
            { isLogoutConfirm && <LogoutConfirm /> }
            <small>
                <b>
                    Рахунок футбольних матчів у реальному часі
                    і розклад на сьогодні
                </b>
            </small>
            <div className="container" id="main-container">
                <div className="page-content">
                    <div className="section left-page" id="left-section">
                        <div className="calendar-section">
                            <MatchCalendar />
                            <TopLeages />
                            <Ratings />
                            <OtherLeagues />
                        </div>
                    </div>
                    <div className="section center-page">
                        Center Section
                    </div>
                    <div className="section right-page" id="right-page">
                        Right Section
                    </div>
                </div>
            </div>
        </div>
    </>

  )
}

export default Football
