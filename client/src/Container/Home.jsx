import { Route, Routes } from "react-router-dom";
import InstagramCaptionGenerator from "../components/Instagram-caption-generator/InstagramCaptionGenerator";
import Navbar from "../components/Navbar/Navbar";
import FacialRecongnitionSystem from "../components/Facial-Recognition-system/FacialRecongnitionSystem";
import Homepage from "../components/Homepage/Homepage";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/instagram-caption-generator"
          element={<InstagramCaptionGenerator />}
        />
        <Route
          path="/facial-recognition-system"
          element={<FacialRecongnitionSystem />}
        />
      </Routes>
      <Footer/>
    </>
  );
}
export default Home;
