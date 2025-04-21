import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/Home";
import Events from "../pages/Events";
import About from "../pages/About";
import Team from "../pages/Team";
import Gallery from "../pages/Gallery";


export default function AppRoutes() {
  const location = useLocation();

  return (
    
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      
  );
}
