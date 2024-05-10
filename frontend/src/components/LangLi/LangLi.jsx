import React from 'react'

const LangLi = ({flag, title, setTitle, setFlag}) => {
  const clickHandler = (title, flag) => {
    setTitle(title)
    setFlag(flag)
  }
  return (
    <li className="country_container" onClick={() => clickHandler(title, flag)}>
        <div className="flag_container">
            <img className="country_flag" src={ flag } />
            <span>{ title }</span>
        </div>
    </li>
  )
}

export default LangLi
