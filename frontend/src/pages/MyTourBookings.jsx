import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Loader from "../components/Loader";

const MyTourBookings = () => {
  const { fetchClientBookings, properties, loading } = useContext(AppContext);

  useEffect(() => {
    fetchClientBookings();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] min-h-screen">
      <h1 className="text-2xl text-primaryColor my-10">My Tour Bookings</h1>
      {properties.length > 0 ? (
        properties.map((booking) => (
          <div key={booking._id} className="border p-4 mb-4">
            <p><strong>Property:</strong> {booking.property.propertyName}</p>
            <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
            <p><strong>Time Slot:</strong> {booking.timeSlot}</p>
            <p><strong>Status:</strong> {booking.status}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No bookings available.</p>
      )}
    </div>
  );
};

export default MyTourBookings;