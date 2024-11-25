import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import About from "./pages/About";
import Services from "./pages/Services";
import Property from "./pages/Property";
import Navbar from "./components/Navbar";
import Signin from "./pages/Signin";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import ScrollToTop from "./components/ScrollToTop";

import AgentLayout from "./components/AgentLayout"; // Import AgentLayout
import Add from "./pages/agent/Add";
import List from "./pages/agent/List";
import TourBookings from "./pages/agent/TourBookings";
import AgentDashboard from "./pages/agent/AgentDashboard"; // Import AgentDashboard

const App = () => {
  const location = useLocation();

  const hideFooterRoutes = ["/login", "/register", "/dashboard", "/dashboard/add", "/dashboard/list", "/dashboard/bookings"]; // Exclude routes with dashboard layout

  return (
    <>
      <ScrollToTop />
      {/* Show Navbar only for non-agent routes */}
      {!location.pathname.startsWith("/dashboard") && <Navbar />}
      <div>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/property/:propertyId" element={<Property />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Signup />} />

          {/* Protected Agent Routes */}
          <Route path="/dashboard" element={<AgentLayout />}>
            {/* Default Dashboard Route */}
            <Route index element={<AgentDashboard />} />

            {/* Additional Nested Routes */}
            <Route path="add" element={<Add />} />
            <Route path="list" element={<List />} />
            <Route path="bookings" element={<TourBookings />} />
          </Route>
        </Routes>
      </div>
      {/* Show Footer only for non-agent routes */}
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

export default App;