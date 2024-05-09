import "./LanguagePopup.css";
import LANGUAGES  from "../../../assets/lang_data"
import LangLi from '../../LangLi/LangLi';

const LanguagePopup = () => {
  return (
    <div className="language-container">
      <ul className="languages-list">
        {LANGUAGES.map(language => (
          <LangLi key={language.id} flag={language.img}
          title={language.title}/>
        ))}
      </ul>
    </div>
  )
}

export default LanguagePopup
