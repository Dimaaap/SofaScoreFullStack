import React from 'react'
import "./SignInPopup.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from 'react-icons/fa6';
import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from "react-facebook-login";

const SignInPopup = () => {

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
                            <GoogleLogin onSuccess={repsonseMessage} 
                            onError={errorMessage} />
                            <FacebookLogin 
                            buttonStyle={{padding: "6px"}}
                            appId="776548437958234"
                            autoLoad={false}
                            fields="name,email,picture"
                            callback={handleFacebookCallback}/>
                            <btn className="sign-with-btn">
                                <FaApple size={23} /><span>
                                    Зареєструватись із Apple
                                </span>
                            </btn>
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
                        <iframe width="100%" height="100%"
                        frameBorder={"0"} 
                        allow="accelerometr; autoplay; 
                        encrypted-media; gyroscope; picture-in-picrure">

                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignInPopup
