import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

import AgentLayout from "./components/AgentLayout";
import Add from "./pages/agent/Add";
import TourBookings from "./pages/agent/TourBookings";
import AgentDashboard from "./pages/agent/AgentDashboard";
import WishList from "./pages/WishList";
import Loader from "./components/Loader";
import Profile from "./pages/Profile";
import MyTourBookings from "./pages/MyTourBookings";

const App = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  const hideFooterRoutes = [
    "/login",
    "/register",
    "/dashboard",
    "/dashboard/add",
    "/dashboard/list",
    "/dashboard/bookings",
  ]; // Exclude routes with dashboard layout

  // Trigger loader on route change
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false); // Simulate loading
    }, 1000); // Adjust delay as needed

    return () => clearTimeout(timer); // Cleanup timeout
  }, [location.pathname]); // Run on route change

  return (
    <>
      <ScrollToTop />
      <ToastContainer />
      {isLoading && <Loader />}
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
          <Route path="/wish-list" element={<WishList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-tour-bookings" element={<MyTourBookings />} />

          {/* Protected Agent Routes */}
          <Route path="/dashboard" element={<AgentLayout />}>
            {/* Default Dashboard Route */}
            <Route index element={<AgentDashboard />} />

            {/* Additional Nested Routes */}
            <Route path="add" element={<Add />} />
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