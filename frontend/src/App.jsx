import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Property from "./pages/Property";
import AccType from "./pages/AccType";
import UserSignin from "./pages/UserSignin";
import AgentSignin from "./pages/AgentSignin";
import Navbar from "./components/Navbar";

const App = () => {
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
          <Route path="/account-type" element={<AccType />} />
          <Route path="/user-signin" element={<UserSignin />} />
          <Route path="/agent-signin" element={<AgentSignin />} />
        </Routes>
      </div>
    </>
  );
};

export default App;