import React from 'react'

const LangLi = ({flag, title}) => {
  return (
    <li className="country_container">
        <div className="flag_container">
            <img className="country_flag" src={ flag } />
            <span>{ title }</span>
        </div>
    </li>
  )
}

export default LangLi
