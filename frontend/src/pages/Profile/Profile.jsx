import React, { useEffect, useState } from 'react'
import TopHeader from '../../components/TopHeader/TopHeader';
import BottomHeader from '../../components/BottomHeader/BottomHeader';
import "./Profile.css";


const Profile = () => {

    const [userData, setUserData] = useState(null);
    const googleId = localStorage.getItem("googleId");

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/auth/api/v1/user/profile/${googleId}/`);
                if(response.ok){
                    console.log(response)
                    const data = await response.json()
                    setUserData(data);
                } else {
                    console.error("Failed to fetch user data: ", response.statusText);
                }
            } catch(error){
                console.error("Error fetching user data: ", error);
            }
        };
        fetchUserData();
    }, [googleId]);

    if (!userData){
        return <div>Loading...</div>
    }
    const{first_name, last_name, email} = userData;
  return (
    <div id="profile-page">
        <TopHeader />
        <BottomHeader />
        <div className="profile-page">
            <div className="profile-section left-section">
                Left Section
            </div>
            <div className="profile-section center-section">
                Center Section
            </div>
            <div className="profile-section right-section">
                Right Section
            </div>
        </div>
    </div>
  )
}

export default Profile
