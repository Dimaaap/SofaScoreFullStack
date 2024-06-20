import React from 'react'
import "./SignInPopup.css";

const SignInPopup = () => {
  return (
    <>
        <div className="wrapper">
            <div id="signin-popup">
                <div className="popup-body">
                    <div className="left-section">
                        <h4 className="footer-title">
                            Ввійти в Sofascore
                        </h4>
                        <div className="btns-container">

                        </div>
                        <small className="notice-info">
                            Реєструючись, ви погоджуєтесь 
                            із нашими 
                            <a href="/terms-and-coditions" 
                            className="small-link">
                                Правилами & Умовами
                            </a> і 
                            <a href="/confidence-policy"
                            className="small-link">
                                Політикою конфіденційності
                            </a>
                        </small>
                    </div>
                    <div className="right-section">
                        frame
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignInPopup
