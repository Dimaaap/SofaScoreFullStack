import React from 'react'
import "./ThemePopup.css";

const ThemePopup = ({ setTheme, currTheme, setThemePopup }) => {
  const selectNewTheme = (theme) => {
    setTheme(theme);
    setThemePopup(false);
  } 

  return (
    <div className="theme-popup">
        <ul className="theme-choice">
            <li className={`theme ${currTheme === "night" ? "active-li" : ""}`} 
            onClick={ () => selectNewTheme("night") }>
                Нічна
            </li>
            <li className={`theme ${currTheme === "amoled" ? "active-li": ""}`} 
            onClick={ () => selectNewTheme("amoled")}>
                Амолед
            </li>
        </ul>
    </div>
  )
}

export default ThemePopup
