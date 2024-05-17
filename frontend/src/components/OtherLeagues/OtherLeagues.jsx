import React from 'react'
import { IoSearch } from "react-icons/io5";
import "./OtherLeagues.css"

const OtherLeagues = () => {
  return (
    <div className="other-leagues">
      <h4 class="title">
        Всі ліги
      </h4>
      <div className="container-body">
        <div className="search-container">
            <span className="input-icon">
                <IoSearch className="icon" />
            </span>
            <input type="search" 
            name="find" 
            placeholder="Фільтр"
            className="searchField" />
        </div>
        <ul className="all-leagues">

        </ul>
      </div>
    </div>
  )
}

export default OtherLeagues
