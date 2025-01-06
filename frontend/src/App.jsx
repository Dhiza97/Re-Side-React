import React from "react";
import { Route, Routes } from "react-router-dom";
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
import Profile from "./pages/Profile";
import MyTourBookings from "./pages/MyTourBookings";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const hideFooterRoutes = [
    "/login",
    "/register",
    "/dashboard",
    "/dashboard/add",
    "/dashboard/list",
    "/dashboard/bookings",
  ]; // Exclude routes with dashboard layout

  return (
    <>
      <ScrollToTop />
      <ToastContainer />
      {/* Show Navbar only for non-agent routes */}
      {!location.pathname.startsWith("/dashboard") && <Navbar />}
      <div>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/property/:propertyId"
            element={
              <ProtectedRoute>
                <Property />
              </ProtectedRoute>
            }
          />
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
