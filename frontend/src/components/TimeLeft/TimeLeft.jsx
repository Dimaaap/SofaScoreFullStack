import React from 'react'
import { LuClock7 } from "react-icons/lu";
import "./TimeLeft.css";

const TimeLeft = () => {
  return (
    <div className="time-left">
      <div className="section-header">
        <h5>Щотижневий виклик</h5>
        <div className="time">
            <span className="time-icon">
                <LuClock7 size={15} />
            </span>
            <span className="time-title">
                Часу залишилось: 6 днів 1 година
            </span>
        </div>
      </div>
      <hr />
      <div className="section-body">
        <p className="title">
            Ваш рейтинг буде показано тут, 
            коли таблиця лідерів заповниться.
        </p>
      </div>
      <hr />
      <div className="section-footer">
        <a className="section-link">
            Переглянути Щотижневий виклик &gt;
        </a>
      </div>
    </div>
  )
}

export default TimeLeft
