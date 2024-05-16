import React from 'react'
import "./Football.css"
import TopHeader from '../../components/TopHeader/TopHeader'
import BottomHeader from "../../components/BottomHeader/BottomHeader"
import MatchCalendar from '../../components/MatchCalendar/MatchCalendar'
import TopLeages from '../../components/TopLeages/TopLeages'
import Ratings from '../../components/Ratings/Ratings'

const Football = () => {
  return (
    <>
        <TopHeader />
        <BottomHeader />
        <div className="body">
            <small>
                <b>
                    Рахунок футбольних матчів у реальному часі
                    і розклад на сьогодні
                </b>
            </small>
            <div class="container" id="main-container">
                <div className="page-content">
                    <div className="section left-page" id="left-section">
                        <div className="calendar-section">
                            <MatchCalendar />
                            <TopLeages />
                            <Ratings />
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
