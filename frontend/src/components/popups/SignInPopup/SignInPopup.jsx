import React, { useContext } from 'react'
import "./SignInPopup.css";
import { ModalContext } from '../../../contexts/SigninContext.jsx';
import { GoogleButton } from "../../GoogleButton/GoogleButton.jsx";
import { FacebookButton }  from "../../FacebookButton/FacebookButton.jsx";

const SignInPopup = () => {

    const { toggleModal } = useContext(ModalContext)
    
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
                            <FacebookButton />
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
