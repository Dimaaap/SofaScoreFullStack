import React, { useContext } from 'react';
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import "./FacebookButton.css";
import { AuthContext } from '../../contexts/AuthContext';
import { ModalContext } from '../../contexts/SigninContext';
import { FaFacebook } from "react-icons/fa";


export const FacebookButton = () => {
    const { setAuthStatus } = useContext(AuthContext);
    const { toggleModal } = useContext(ModalContext);

    const responseFacebook = async (response) => {
        if (response.accessToken) {
            try {
                const serverResponse = await fetch('http://127.0.0.1:8000/auth/facebook/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ access_token: response.accessToken }),
                });

                if (serverResponse.ok) {
                    const data = await serverResponse.json();
                    setAuthStatus(data.status);
                    localStorage.setItem("authStatus", data.status);
                    localStorage.setItem("facebookId", data.facebook_id);
                    toggleModal();
                } else {
                    console.error('Помилка при спробі авторизації через Facebook:', serverResponse.statusText);
                }
            } catch (error) {
                console.error('Помилка при взаємодії з сервером:', error);
            }
        } else {
            console.error('Помилка при авторизації через Facebook:', response);
        }
    };

    return (
        <FacebookLogin
            appId="776548437958234"
            autoLoad={false}
            callback={responseFacebook}
            render={renderProps => (
                <button onClick={renderProps.onClick} className='sign-with-btn facebook-btn'>
                    <FaFacebook size={20} />
                    <span>Увійти за допомогою Facebook</span>
                </button>
            )}
        />
    );
}

export default FacebookButton;