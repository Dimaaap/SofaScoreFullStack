import React, { useState } from 'react';
import moment from "moment";
import "moment/locale/uk";
import "./MatchCalendar.css";

moment.locale("uk")

const MatchCalendar = () => {
  const [currentDate, setCurrentDate] = useState(moment());

  const startDay = currentDate.clone().startOf("month").startOf("isoWeek");
  const endDay = currentDate.clone().endOf("month").endOf("isoWeek");

  const days = [];
  let day = startDay.clone();

  while (day.isBefore(endDay, "day")) {
    days.push(day.clone());
    day.add(1, "day");
  }

  const daysOfWeekNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"]

  const renderDaysOfWeek = () => {
    return daysOfWeekNames.map((day) => (
      <div key={day} className="day-of-week">
        {day}
      </div>
    ));
  };

  return (
    <div className="calendar-wrapper">
      <div className="calendar-header">
        <button className="nav-button" onClick={() => setCurrentDate(prev => prev.clone().subtract(1, "month"))}>
          &lt;
        </button>
        <h2>{currentDate.format("MMMM YYYY")}</h2>
        <button className="nav-button" onClick={() => setCurrentDate(prev => prev.clone().add(1, "month"))}>
          &gt;
        </button>
      </div>
      <div className="days-of-week">
        {renderDaysOfWeek()}
      </div>
      <div className="calendar-body">
        {days.map(dayItem => (
          <div
            key={dayItem.format("DDMMYYYY")}
            className={`day ${dayItem.month() === currentDate.month() ? 'current-month' : 'other-month'} ${dayItem.isSame(moment(), 'day') ? 'today' : ''}`}
          >
            {dayItem.month() === currentDate.month() ? dayItem.format("D") : ""}
            {dayItem.month() === currentDate.month() && <div className="box"></div>}
          </div>
        ))}
      </div>
      <div className="help-info">
        <div className="box" id="help-box"></div>
        <div className="help-title">
          <small>
            Дні з матчами ваших закріплених ліг
          </small>
        </div>
      </div>
      <div className="calendar-footer">
        <button className="today-button" onClick={() => setCurrentDate(moment().locale("uk"))}>
          Сьогодні
        </button>
      </div>
    </div>
  );
};

export default MatchCalendar;