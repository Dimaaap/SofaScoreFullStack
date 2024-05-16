import React, { useEffect, useState } from 'react'
import "./Ratings.css";

const Ratings = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        async function fetchData(){
            try{
                const response = await fetch(`${import.meta.env.VITE_API_RATINGS_URL}`)
                if(!response.ok){
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();
                setData(result);
            } catch(error){
                console.error("Error fetching data: ", error)
            }
        }
        fetchData();
    }, [])
  return (
    <div className="ratings-container">
      <h4 className="title">
        Рейтинги
      </h4>
      <div className="container-body">
        <ul className="ratings">
            { data && data.map(item => (
                <li key={item.id} className="rating">
                    <span className="rating-icon">
                        <img src={item.rating_logo} className="icon" />
                    </span>
                    { item.rating_title }
                </li>
            )) }
        </ul>
      </div>
    </div>
  )
}

export default Ratings
