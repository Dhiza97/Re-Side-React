import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Property from "./pages/Property";
import Navbar from "./components/Navbar";
import Signin from "./pages/Signin";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation(); // Get the current location
  const hideFooterRoutes = ["/login"]; // Define routes where footer should not appear

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/property/:propertyId" element={<Property />} />
          <Route path="/login" element={<Signin />} />
        </Routes>
      </div>
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

export default App;