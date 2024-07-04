  import React, { useContext } from 'react'
  import "./GoogleButton.css";
  import { useGoogleLogin } from '@react-oauth/google';
  import { FcGoogle } from "react-icons/fc";
  import { AuthContext } from '../../contexts/AuthContext';
  import { ModalContext } from "../../contexts/SigninContext";

  export const GoogleButton = () => {

    const { setAuthStatus } = useContext(AuthContext);
    const { toggleModal } = useContext(ModalContext);

    const login = useGoogleLogin({
      onSuccess: async (tokenResponse) => {
          const accessToken = tokenResponse.access_token;

          try {
              const response = await fetch('http://127.0.0.1:8000/auth/google/', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ access_token: accessToken }),
              });

              if (response.ok) {
                  const data = await response.json();
                  setAuthStatus(data.status);
                  localStorage.setItem("authStatus", data.status);
                  localStorage.setItem("googleId", data.google_id);
                  toggleModal();
              } else {
                  console.error('Помилка при спробі авторизації через Google:', response.statusText);
              }
          } catch (error) {
              console.error('Помилка при взаємодії з сервером:', error);
          }
      },
      onError: (error) => {
          console.error('Помилка при авторизації через Google:', error);
      },
      scope: "profile email"
  });

    return (
      <button
          onClick={() => login()} className='sign-with-btn google-btn'
      >
          <FcGoogle size={20} />
          <span>Увійти за допомогою Google </span>
      </button>
    )
  }

  export default GoogleButton