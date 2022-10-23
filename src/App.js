import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MapPage from "./pages/MapPage";
import DesignPage from "./pages/DesignPage";
import SurfingPage from "./pages/SurfingPage";
import TropicalPage from "./pages/TropicalPage";
import BeachfrontPage from "./pages/BeachfrontPage";
import OMGPage from "./pages/OMGPage";
import BeachPage from "./pages/BeachPage";
import AmazingPoolsPage from "./pages/AmazingPoolsPage";
import IslandsPage from "./pages/IslandsPage";
import AmazingViewsPage from "./pages/AmazingViewsPage";
import BedBreakfastsPage from "./pages/BedBreakfastsPage";
import CavesPage from "./pages/CavesPage";
import NationalParksPage from "./pages/NationalParksPage";
import SharedHomesPage from "./pages/SharedHomesPage";
import EarthHomesPage from "./pages/EarthHomesPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/design" element={<DesignPage />} />
          <Route path="/surfing" element={<SurfingPage />} />
          <Route path="/tropical" element={<TropicalPage />} />
          <Route path="/beachfront" element={<BeachfrontPage />} />
          <Route path="/omg" element={<OMGPage />} />
          <Route path="/beach" element={<BeachPage />} />
          <Route path="/amazing_pools" element={<AmazingPoolsPage />} />
          <Route path="/islands" element={<IslandsPage />} />
          <Route path="/amazing_views" element={<AmazingViewsPage />} />
          <Route path="/bed_breakfasts" element={<BedBreakfastsPage />} />
          <Route path="/caves" element={<CavesPage />} />
          <Route path="/national_parks" element={<NationalParksPage />} />
          <Route path="/shared_homes" element={<SharedHomesPage />} />
          <Route path="/earth_homes" element={<EarthHomesPage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
