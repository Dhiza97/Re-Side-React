import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { properties } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const currency = "₦";
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [properties, setProperties] = useState([]);

  // Create Axios instance
  const api = axios.create({
    baseURL: backendUrl,
  });

  // Add a response interceptor to handle errors like 401 Unauthorized
  api.interceptors.response.use(
    (response) => response, // Pass through successful responses
    (error) => {
      if (error.response && error.response.status === 401) {
        // Token expired or invalid
        logout(); // Call the logout function
      }
      return Promise.reject(error);
    }
  );

  // Attach the token to the Axios instance for all requests
  useEffect(() => {
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete api.defaults.headers.common["Authorization"];
    }
  }, [token]);

  // Sync token state with localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token") || "");
    };
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Fetch properties from the backend
  const fetchProperties = async () => {
    try {
      const response = await api.get("/api/property/dashboard/list");
      setProperties(response.data.properties); // Update state with fetched properties
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  // Fetch properties on component mount
  useEffect(() => {
    if (token) {
      fetchProperties();
    }
  }, [token]);

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/login");
  };

  const value = {
    currency,
    navigate,
    properties,
    backendUrl,
    token,
    setToken,
    api,
    logout,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;