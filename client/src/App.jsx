import { Route, Routes } from "react-router-dom";
import Home from "./Container/Home";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>

    <Routes>
        <Route path="/*" element={<Home/>} />
    </Routes>
    
    

    
    </>
  )
}