import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AppContext);

  useEffect(() => {
    if (!isAuthenticated()) {
      toast.error("Log in to access this page.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [isAuthenticated]);

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;