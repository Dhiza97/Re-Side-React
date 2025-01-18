import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const currency = "₦";
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [agent, setAgent] = useState(null);
  const [properties, setProperties] = useState([]);
  const [allProperties, setAllProperties] = useState([]);
  const [totalAgentBookings, setTotalAgentBookings] = useState(0);

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
        } else {
          fetchAgentDetails();
        }
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, [token])

  // Sync token state with localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token") || "");
    };
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Fetch agent details
  const fetchAgentDetails = async () => {
    try {
      const response = await api.get("/api/agent/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAgent(response.data.agent);
    } catch (error) {
      console.error("Error fetching agent details:", error);
    }
  };

  // Fetch properties from the backend for Agent (no token required)
  const fetchDashboardProperties = async () => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };  

  // Fetch all properties from backend
  const fetchAllProperties = async () => {
    setLoading(true);
    try {
      const response = await api.get("/api/property/list");
      setAllProperties(response.data.properties);
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProperties();
  }, [])

  const fetchLikedProperties = async () => {
    setLoading(true);
    try {
      const response = await api.get("/api/property/liked", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProperties(response.data.likedProperties);
    } catch (error) {
      console.error("Error fetching liked properties:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchClientBookings = async () => {
    setLoading(true);
    try {
      const response = await api.get("/api/booking/client", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProperties(response.data.bookings);
    } catch (error) {
      console.error("Error fetching client bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAgentBookings = async () => {
    setLoading(true);
    try {
      const response = await api.get("/api/booking/agent", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProperties(response.data.bookings);
    } catch (error) {
      console.error("Error fetching agent bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTotalAgentBookings = async () => {
    setLoading(true);
    try {
      const response = await api.get("/api/booking/agent/count", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTotalAgentBookings(response.data.totalBookings);
    } catch (error) {
      console.error("Error fetching total agent bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setAgent(null);
    navigate("/login");
  };

  const isAuthenticated = () => {
    return !!token;
  };

  const value = {
    agent,
    currency,
    navigate,
    loading,
    setLoading,
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
    fetchAllProperties,
    fetchLikedProperties,
    isAuthenticated,
    fetchClientBookings,
    fetchAgentBookings,
    totalAgentBookings,
    fetchTotalAgentBookings,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;