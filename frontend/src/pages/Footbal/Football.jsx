import React from 'react'
import "./Football.css"
import TopHeader from '../../components/TopHeader/TopHeader'
import BottomHeader from "../../components/BottomHeader/BottomHeader"

const Football = () => {
  return (
    <>
        <TopHeader />
        <BottomHeader />
        <small>
            <b>
                Рахунок футбольних матчів у реальному часі
                і розклад на сьогодні
            </b>
        </small>
        <div class="container" id="main-container">
            <div className="page-content">
                <div className="section left-page">
                    Left Section
                </div>
                <div className="section center-page">
                    Center Section
                </div>
                <div className="section right-page" id="right-page">
                    Right Section
                </div>
            </div>
        </div>
    </>

  )
}

export default Football
