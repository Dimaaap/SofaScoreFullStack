  import React from 'react'
  import "./GoogleButton.css";
  import { useGoogleLogin } from '@react-oauth/google';
  import { FcGoogle } from "react-icons/fc";

  export const GoogleButton = () => {
      const login = useGoogleLogin({
          onSuccess: tokenResponse => console.log(tokenResponse),
          onError: error => console.log(error),
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