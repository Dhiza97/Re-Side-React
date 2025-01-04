import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const currency = "₦";
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [agent, setAgent] = useState(null);
  const [properties, setProperties] = useState([]);
  const [allProperties, setAllProperties] = useState([]);

  // Create Axios instance
  const api = axios.create({
    baseURL: backendUrl,
  });

  // Attach the token to Axios when it is available
  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 < Date.now()) {
          logout();
        }
      } catch (error) {
        console.error("Invalid token:", error);
      }
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

  // Fetch properties from the backend for Agent (no token required)
  const fetchDashboardProperties = async () => {
    try {
      const response = await api.get("/api/property/dashboard/list", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProperties(response.data.properties);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error("Unauthorized access. Redirecting to login.");
        logout();
      } else {
        console.error("Error fetching properties:", error);
      }
    }
  };  

  // Fetch properties on component mount
  useEffect(() => {
    fetchDashboardProperties();
  }, []);

  // Fetch all properties from backend
  const fetchAllProperties = async () => {
    try {
      const response = await api.get("/api/property/list");
      console.log("Fetched properties:", response.data.properties);
      setAllProperties(response.data.properties);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    fetchAllProperties();
  }, [])

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/login");
  };

  const value = {
    agent,
    currency,
    navigate,
    properties,
    setProperties,
    allProperties,
    setAllProperties,
    backendUrl,
    token,
    setToken,
    api,
    logout,
    fetchDashboardProperties,
    fetchAllProperties
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;