import React from "react";
import BottomNav from "../component/BottomNav/BottomNav";
import Design from "../component/DesignF/Design";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar";

const DesignPage = () => {
  return (
    <div>
      <Navbar />
      <BottomNav />
      <Design />
      <Footer />
    </div>
  );
};

export default DesignPage;
