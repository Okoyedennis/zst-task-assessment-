import React from "react";
import BottomNav from "../component/BottomNav/BottomNav";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar";
import Surfing from "../component/Surfing/Surfing";

const SurfingPage = () => {
  return (
    <div>
      <Navbar />
      <BottomNav />
      <Surfing />
      <Footer />
    </div>
  );
};

export default SurfingPage;
