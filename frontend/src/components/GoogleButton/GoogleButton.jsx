  import React, { useState } from 'react'
  import "./GoogleButton.css";
  import { useGoogleLogin } from '@react-oauth/google';
  import { FcGoogle } from "react-icons/fc";

  export const GoogleButton = () => {

    const [authStatus, setAuthStatus] = useState("unathorized");

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
                  console.log(authStatus);
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