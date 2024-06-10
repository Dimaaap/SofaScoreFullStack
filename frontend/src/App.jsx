import './App.css'
import { Routes, Route } from "react-router-dom";
import Football from './pages/Footbal/Football'
import Basketball from './pages/Basketball/Basketball';
import Tennis from './pages/Tennis/Tennis';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Football />} />
        <Route path="/basketball" element={<Basketball />} />
        <Route path="/tennis" element={<Tennis/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
