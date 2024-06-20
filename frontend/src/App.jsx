import './App.css'
import { Routes, Route } from "react-router-dom";
import Football from './pages/Footbal/Football'
import Basketball from './pages/Basketball/Basketball';
import Tennis from './pages/Tennis/Tennis';
import Footer from './components/Footer/Footer';
import GDPR from './pages/GDPR/GDPR.jsx';
import Terms from "./pages/Terms/Terms.jsx";
import Cookies from "./pages/Cookies/Cookies.jsx"
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy.jsx';
import { ModalProvider } from './contexts/SigninContext.jsx';

function App() {

  return (
    <ModalProvider>
      <Routes>
        <Route path="/" element={<Football />} />
        <Route path="/basketball" element={<Basketball />} />
        <Route path="/tennis" element={<Tennis/>} />
        <Route path="/gdpr-and-journalism" element={<GDPR />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/cookies-policy" element={<Cookies />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </ModalProvider>
  )
}

export default App
