import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import "./OtherLeagues.css"

const OtherLeagues = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData(){
      try{
        const response = await fetch(`${import.meta.env.VITE_API_ALL_PLAY_ZONES_URL}`);
        if(!response.ok){
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch(error){
        console.error("Error fetching data: ", error)
      }
    }
    fetchData()
  }, [])
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
          {data && data.map(item => (
            <li key={item.id} className="playzone">
              <span className="zone-icon">
                <img src={item.play_zone_area_image} className="icon" />
              </span>
              <span className="content">
                {item.play_zone_title}
                </span>
              <span className="arrow-icon">
                <IoIosArrowDown />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default OtherLeagues
