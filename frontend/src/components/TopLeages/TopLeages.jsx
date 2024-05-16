import React, { useEffect, useState } from 'react'
import "./TopLeages.css"

const TopLeages = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData(){
      try{
        const response = await fetch(`${import.meta.env.VITE_API_URL}`);
        if(!response.ok){
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch(error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData();
  }, []);
  return (
    <div className="top-leagues-container">
      <h4 className="title">
        Топові ліги
      </h4>
      <div className="container-body">
        <ul className="top-leagues">
          { data && data.map(item => (
            <li key={item.id} className="league">
              <span className="league-icon">
                <img src={item.icon} className="icon"/>
              </span>
              {item.league_title}
            </li>
          )) }
        </ul>
      </div>
    </div>
  )
}

export default TopLeages
