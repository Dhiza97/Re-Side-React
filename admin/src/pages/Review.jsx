import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { backendUrl } from "../App";
import Loader from "../components/Loader";

const Review = () => {
  const [pendingProperties, setPendingProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPendingProperties = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${backendUrl}/api/property/pending`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });

        setPendingProperties(response.data.properties || []);
      } catch (error) {
        console.error("Error fetching pending properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPendingProperties();
  }, []);

  return (
    <div className="container mx-auto p-6">
      {loading && <Loader />}
      {pendingProperties.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pendingProperties.map((property) => (
            <Card key={property._id} property={property} />
          ))}
        </div>
      ) : (
        <p className="text-gray-700 text-center">
          No pending properties to review.
        </p>
      )}
    </div>
  );
};

export default Review;