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
      <h1 className="text-2xl text-primaryColor my-10">MY APPOINTMENTS</h1>
      {properties.length > 0 ? (
        properties.map((booking) => (
          <div key={booking._id} className="border p-4 mb-4 flex flex-col sm:flex-row gap-6">
            <img
              className="w-40"
              src={
                booking.property?.image?.length > 0
                  ? booking.property.image[0]
                  : "placeholder.jpg"
              }
              alt={booking.property?.propertyName || "Property Image"}
            />

            <div className="flex flex-col gap-3">
              <p>
                <span className="font-medium">Property:</span>{" "}
                {booking.property?.propertyName || "Unknown Property"}
              </p>

              <div>
                <p className="font-medium">Date & Time:</p>
                <div className="flex flex-col sm:flex-row gap-3 text-blue-500 mt-1">
                  <p className="text-sm font-light flex-shrink-0 px-2 py-2 rounded-full border text-center">
                    {new Date(booking.date).toDateString()}
                  </p>
                  <p className="text-sm font-light flex-shrink-0 px-1 py-2 rounded-full border text-center">
                    {booking.timeSlot}
                  </p>
                </div>
              </div>

              <p>
                <span className="font-medium">Status:</span>{" "}
                {booking.status
                  .toLowerCase()
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
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
