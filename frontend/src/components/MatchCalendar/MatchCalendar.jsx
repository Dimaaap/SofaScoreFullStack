import React, { useState } from 'react'
import moment from "moment";
import "moment/locale/uk";
import "./MatchCalendar.css"

const MatchCalendar = () => {
  const [currentDate, setCurrentDate] = useState(moment().locale("uk"));

  const startDay = currentDate.clone().startOf('month').startOf('week');
  const endDay = currentDate.clone().endOf('month').endOf('week');
  const days = [];
  let day = startDay.clone();

  const beforeFirstDayOfMonth = currentDate.clone().startOf("month").day();
  let totalDaysToShow = beforeFirstDayOfMonth + currentDate.daysInMonth();

  if(totalDaysToShow % 7 !== 0){
    totalDaysToShow = (Math.floor(totalDaysToShow / 7) + 1) * 7;
  }

  while (days.length < totalDaysToShow){
    days.push(day.clone())
    day.add(1, "day");
  }

  const renderDaysOfWeek = () => {
    const dayOfWeek = moment.weekdaysShort(true);
    return dayOfWeek.map((day) => (
      <div key={day} className="day-of-week">
        {day}
      </div>
    ))
  }

  return (
    <div className="calendar-wrapper">
      <div className="calendar-header">
        <button className="prev-btn" 
        onClick={() => setCurrentDate(prev => prev.clone().subtract(1, 'month'))}>
          &lt;
        </button>
        <h2>{currentDate.format('MMMM YYYY')}</h2>
        <button className="next-btn" 
        onClick={() => setCurrentDate(prev => prev.clone().add(1, 'month'))}>
          &gt;
        </button>
      </div>
      <div className="days-of-week">
        {renderDaysOfWeek()}
      </div>
      <div className="calendar-body">
        {days.map(dayItem => (
            <div
              key={dayItem.format('DDMMYYYY')}
              className={`day ${dayItem.month() === currentDate.month() ? 'current-month' : 'other-month'}`}
            >
              {dayItem.month() === currentDate.month() ? dayItem.format('D') : ''}
            </div>
          ))}
      </div>
    </div>
  );
}

export default MatchCalendar
