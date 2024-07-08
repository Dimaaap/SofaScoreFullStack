import React, { useState, useEffect } from 'react'
import "./UserAvatar.css";

const UserAvatar = ({size}) => {

    const [userPicture, setUserPicture] = useState(null);
    const googleId = localStorage.getItem("googleId");

    useEffect(() => {
        if(googleId) {
            const fetchUser = async () => {
                try {
                    const response = await fetch(`http://127.0.0.1:8000/auth/api/v1/user_picture/${googleId}`)
                    if(response.ok) {
                        const data = await response.json();
                        setUserPicture(data.picture);
                    } else {
                        console.error("Error fetching user: ", response.statusText);
                    }
                } catch (error) {
                    console.error("Error fetching data: ", error);
                }
            };

            fetchUser();
        }
    }, [googleId])

  return (
    <div>
      <img src={userPicture} alt="" 
      width={size === "small"? 30 : 90} 
      height={size === "small" ? 30 : 90} 
      className="user-avatar"/>
    </div>
  )
}

export default UserAvatar
