import "./LanguagePopup.css";
import LANGUAGES  from "../../../assets/lang_data"
import LangLi from '../../LangLi/LangLi';
import { useState } from "react";

const LanguagePopup = ({ setCurrTitle, setCurrFlag }) => {
  return (
    <div className="language-container">
      <ul className="languages-list">
        {LANGUAGES.map(language => (
          <LangLi key={language.id} flag={language.img}
          title={language.title} setTitle={setCurrTitle}
          setFlag={setCurrFlag}/>
        ))}
      </ul>
    </div>
  )
}

export default LanguagePopup
