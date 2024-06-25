import React, { useContext } from 'react'
import "./SignInPopup.css";
import { ModalContext } from '../../../contexts/SigninContext.jsx';
import { FaFacebook } from 'react-icons/fa6';
import FacebookLogin from "react-facebook-login";
import { GoogleButton } from "../../GoogleButton/GoogleButton.jsx";

const SignInPopup = () => {

    const { toggleModal } = useContext(ModalContext)

    const repsonseMessage = (response) => {
        console.log(response);
    };

    const errorMessage = (error) => {
        console.log(error)
    }

    const handleFacebookCallback = (response) => {
        if(response?.status === "unknown"){
            console.error("Soory!", "Something went with facebook login")
            return
        }
        console.log(response)
    }
    
  return (
    <>
        <div className="modal-overlay">
            <div id="signin-modal">
                <div className="modal-content">
                    <div className="left-section">
                        <h2 className="modal-title">
                            Ввійти в Sofascore
                        </h2>
                        <div className="btns-container">
                            <GoogleButton />
                            <FacebookLogin 
                            buttonStyle={{padding: "6px"}}
                            appId="776548437958234"
                            autoLoad={false}
                            fields="name,email,picture"
                            cssClass="hidden-btn"
                            callback={handleFacebookCallback}/>
                            <button className="sign-with-btn"
                            onClick={() => document.querySelector('.hidden-btn').click()}>
                                <FaFacebook size={20} />
                                <span>Увійти за допомогою Facebook</span>
                            </button>
                        </div>
                        <small className="notice-info">
                            Реєструючись, ви погоджуєтесь із 
                            нашими {" "}
                            <a href="/terms-and-conditions"
                            className='small-link'>
                                Правилами & Умовами
                            </a> {" "} і {" "} 
                            <a href="/privacy-policy"
                            className="small-link">
                                Політикою конфіденційності
                            </a>
                        </small>
                    </div>
                    <div className="right-section">
                        <video className="sofa-score-presented-video"
                            loop playsInline autoPlay preload='none'
                            disablePictureInPicture>
                                <source src="https://www.sofascore.com/static/videos/sports.mp4"></source>
                        </video>
                        <button type="button" className="close-modal-btn"
                        onClick={ toggleModal }>
                            ЗАКРИТИ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignInPopup
