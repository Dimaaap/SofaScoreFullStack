import React, { useEffect, useState } from 'react'
import TopHeader from '../../components/TopHeader/TopHeader';
import BottomHeader from '../../components/BottomHeader/BottomHeader';
import "./Profile.css";
import UserAvatar from '../../components/UserAvatar/UserAvatar';
import AddElement from '../../components/AddElement/AddElement';
import CenterSectionOverview from '../../components/CenterSectionOverwiew/CenterSectionOverview';
import { IoShareSocial } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import { SiFastapi } from "react-icons/si";
import { PiPencil } from "react-icons/pi";
import { IoIosInformationCircleOutline } from "react-icons/io"
import Predictions from '../../components/Predictions/Predictions';

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
                <div className="profile-page-header">
                    <UserAvatar size="large"></UserAvatar>
                </div>
                <div className="user-info">
                    <div className="user-name">
                       <h5>{ first_name }</h5> 
                    </div>
                    <div className="change-btn-container">
                      <button type="button" className="change-btn">
                        Редактувати
                        </button>  
                    </div>
                    <div className="copy-block">
                        <IoShareSocial size={20} />
                    </div>
                    <div className="more-details">
                        <IoIosMore size={20} />
                    </div>
                </div>
                <div className="note-info">
                    <div className="note-body">
                        <div className="icons">
                            <div className="icon">
                                <SiFastapi size={15} color="gray" />
                            </div>
                            <div className="icon" id="second-icon">
                                <PiPencil size={15} color="gray" />
                            </div>
                        </div>
                        <div className="text">
                            Якщо ви користувач додатку Android, 
                            ви можете покращувати вашу репутацію 
                            серед спільноти Sofascore і заробляти 
                            бейджі для вашого профілю
                        </div>
                    </div>
                    <button className="find-out-btn" type="button">
                        Дізнатись як 
                        <span className="btn-icon">
                            <IoIosInformationCircleOutline size={15} />
                        </span>
                    </button>
                </div>
                <div className="add-items-section">
                    <AddElement additionalItem={"Змагання"} />
                    <AddElement additionalItem={"Команди"} />
                    <AddElement additionalItem={"Гравці"} />
                </div>
            </div>
            <div className="profile-section center-section">
                <CenterSectionOverview />
                <Predictions />
            </div>
            <div className="profile-section right-section">
                Right Section
            </div>
        </div>
    </div>
  )
}

export default Profile
