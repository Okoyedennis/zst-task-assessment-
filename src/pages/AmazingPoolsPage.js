import React from 'react'
import Arctic from "../component/Arctic/Arctic";
import BottomNav from "../component/BottomNav/BottomNav";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar";

const AmazingPoolsPage = () => {
  return (
    <div>
      <Navbar />
      <BottomNav />
      <Arctic />
      <Footer />
    </div>
  );
}

export default AmazingPoolsPage