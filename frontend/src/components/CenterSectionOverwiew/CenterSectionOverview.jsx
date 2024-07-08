import React from 'react'
import "./CenterSectionOverview.css";
import { IoIosInformationCircleOutline } from "react-icons/io";

const CenterSectionOverview = () => {
  return (
    <div className="page-section">
        <div className="section-header">
            <h5>Огляд</h5>
        </div>
        <hr />
        <div className="btn-container">
            <div className="overview-btn-container">
                <button className="overview-btn active-btn" 
                id="last-30-days">
                    Останні 30 днів
                </button>
            </div>
            <div className="overview-btn-container">
                <button className="overview-btn" 
                id="all-time">
                    Весь час
                </button>
            </div>
        </div>
        <div className="info-container">
            <div className="info-row">
                <span className="info-row-left">
                    Точні прогнози
                </span>
                <span className="info-row-right">
                    0/0(0%)
                </span>
            </div>
            <div className="info-row">
                <span className="info-row-left">
                    Відсоток точних прогнозів
                </span>
                <span className="info-row-right">
                    -
                </span>
            </div>
            <div className="info-row">
                <span className="info-row-left">
                    <button type="button" className="open-modal-btn"
                    id="virtual-return">
                        Віртуальне поверення інвестицій 
                        <span className="btn-icon">
                            <IoIosInformationCircleOutline size={15} />
                        </span>
                    </button>
                </span>
                <span className="info-row-right">
                    0
                </span>
            </div>
            <div className="info-row">
                <span className="info-row-left">
                    Місце у списку прогнозистів 
                </span>
                <span className="info-row-right">
                    -
                </span>
            </div>
        </div>
    </div>
  )
}

export default CenterSectionOverview
