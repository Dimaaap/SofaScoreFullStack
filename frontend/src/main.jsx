import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from './contexts/AuthContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="744650069936-js20v557j8k216olkujf11ju0itptl7f.apps.googleusercontent.com">
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
  ,
)
