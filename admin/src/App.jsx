import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Review from "./pages/Review";
import Sidebar from "./components/Sidebar";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "₦";

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div>
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <div className="flex">
            <aside className="w-64 bg-primaryColor p-4 hidden md:block">
              <Sidebar />
            </aside>
            <div className="flex-grow">
              <Routes>
                <Route path="/:status" element={<Review token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
