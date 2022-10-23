import React from 'react'
import BottomNav from '../component/BottomNav/BottomNav';
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar";
import OMG from '../component/OMG/OMG';

const OMGPage = () => {
  return (
    <div>
      <Navbar />
      <BottomNav />
      <OMG />
      <Footer />
    </div>
  );
}

export default OMGPage