import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import Loader from "../../components/Loader";

const TourBookings = () => {
  const { fetchAgentBookings, properties, loading, api, token } =
    useContext(AppContext);

  useEffect(() => {
    fetchAgentBookings();
  }, []);

  const updateBookingStatus = async (bookingId, status) => {
    try {
      await api.put(
        `/api/booking/update/${bookingId}`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchAgentBookings();
    } catch (error) {
      console.error("Error updating booking status:", error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="px-4 min-h-screen">
      <h1 className="text-2xl text-primaryColor my-3">APPOINTMENTS</h1>
      {properties && properties.length > 0 ? (
        properties.map((booking) => (
          <div key={booking._id} className="border p-4 mb-4">
            {booking.property ? (
              <div className="flex flex-col sm:flex-row gap-6">
                <div>
                  <img
                    className="w-40"
                    src={booking.property.image[0]}
                    alt=""
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <p>
                      <span className="font-semibold">Property:</span>{" "}
                      {booking.property.propertyName}
                    </p>
                    <p>
                      <span className="font-semibold">Client:</span>{" "}
                      {booking.client.firstName} {booking.client.lastName}
                    </p>

                    <div>
                      <p className="font-semibold">Date & Time:</p>
                      <div className="flex flex-col sm:flex-row gap-3 text-blue-500 mt-1">
                        <p className="text-sm font-light flex-shrink-0 px-2 py-2 rounded-full border text-center">
                          {new Date(booking.date).toDateString()}
                        </p>

                        <p className="text-sm font-light flex-shrink-0 px-2 py-2 rounded-full border text-center">
                          {booking.timeSlot}
                        </p>
                      </div>
                    </div>

                    <p>
                      <span className="font-semibold">Status:</span>{" "}
                      {booking.status
                        .toLowerCase()
                        .split(" ")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={() =>
                        updateBookingStatus(booking._id, "accepted")
                      }
                      className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() =>
                        updateBookingStatus(booking._id, "declined")
                      }
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-red-500">Property details not available</p>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-600">No appointments available.</p>
      )}
    </div>
  );
};

export default TourBookings;