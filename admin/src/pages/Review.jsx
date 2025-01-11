import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { backendUrl } from "../App";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";

const Review = () => {
  const { status } = useParams();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!status) return;
  
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${backendUrl}/api/property/${status}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProperties(response.data.properties || []);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProperties();
  }, [status]);
  

  return (
    <div className="container mx-auto p-6">
      {loading && <Loader />}
      {properties.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Card key={property._id} property={property} />
          ))}
        </div>
      ) : (
        <p className="text-gray-700 text-center">
          No {status} properties to review.
        </p>
      )}
    </div>
  );
};

export default Review;