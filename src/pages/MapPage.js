import React from 'react'
import BottomNav from '../component/BottomNav/BottomNav';
import FooterTop from '../component/Footer/FooterTop';
import MapComponent from '../component/MapComponent/MapComponent';
import Navbar from '../component/Navbar/Navbar';

const MapPage = () => {
  return (
    <div>
      <Navbar />
      <BottomNav />
      <MapComponent />
      <FooterTop iconHome={false} iconMap={true}  path="/"/>
    </div>
  );
}

export default MapPage