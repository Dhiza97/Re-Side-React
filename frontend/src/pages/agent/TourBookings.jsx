import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import Loader from "../../components/Loader";

const TourBookings = () => {
  const { fetchAgentBookings, properties, loading, api, token } = useContext(AppContext);

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
      <h1 className="text-2xl text-primaryColor my-3">Appointments</h1>
      {properties.length > 0 ? (
        properties.map((booking) => (
          <div key={booking._id} className="border p-4 mb-4">
            {booking.property ? (
              <div className="flex gap-6">
                <div>
                  <img className="w-40" src={booking.property.image[0]} alt="" />
                </div>

                <div>
                <p><strong>Property:</strong> {booking.property.propertyName}</p>
                <p><strong>Client:</strong> {booking.client.firstName} {booking.client.lastName}</p>
                <p><strong>Date:</strong> {new Date(booking.date).toDateString()}</p>
                <p><strong>Time Slot:</strong> {booking.timeSlot}</p>
                <p><strong>Status:</strong> {booking.status}</p>
                <button onClick={() => updateBookingStatus(booking._id, "accepted")} className="bg-green-500 text-white px-4 py-2 rounded mr-2">Accept</button>
                <button onClick={() => updateBookingStatus(booking._id, "declined")} className="bg-red-500 text-white px-4 py-2 rounded">Decline</button>
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