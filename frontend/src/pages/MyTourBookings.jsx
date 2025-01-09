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
          <div key={booking._id} className="border p-4 mb-4 flex gap-6">
            <div>
              <img className="w-40" src={booking.property.image[0]} alt="" />
            </div>

            <div className="flex flex-col gap-1">
              <p>
                <span className="font-medium">Property:</span> {booking.property.propertyName}
              </p>
              <p>
                <span className="font-medium">Date:</span>{" "}
                {new Date(booking.date).toLocaleDateString()}
              </p>
              <p>
                <span className="font-medium">Time Slot:</span> {booking.timeSlot}
              </p>
              <p>
                <span className="font-medium">Status:</span> {booking.status}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No bookings available.</p>
      )}
    </div>
  );
};

export default MyTourBookings;
