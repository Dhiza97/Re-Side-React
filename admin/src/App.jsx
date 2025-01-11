import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Review from './pages/Review';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "₦";

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  // Console log token if login is successful
  console.log(token);

  return (
    <div>
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <div>
            <Routes>
              <Route path="/" element={<Review token={token} />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
};

export default App;