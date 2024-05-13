import './App.css'
import { Routes, Route } from "react-router-dom";
import Football from './pages/Footbal/Football'
import Basketball from './pages/Basketball/Basketball';
import Tennis from './pages/Tennis/Tennis';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Football />} />
        <Route path="/basketball" element={<Basketball />} />
        <Route path="/tennis" element={<Tennis/>} />
      </Routes>
    </>
  )
}

export default App
