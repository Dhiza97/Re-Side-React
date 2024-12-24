import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyTourBookings = () => {
  const [bookings, setBookings] = useState([]);

  // useEffect(() => {
  //   // Fetch bookings from the backend
  //   const fetchBookings = async () => {
  //     try {
  //       const response = await axios.get('/api/tour/bookings');
  //       setBookings(response.data);
  //     } catch (error) {
  //       console.error('Error fetching bookings:', error);
  //     }
  //   };

  //   fetchBookings();
  // }, []);

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-16 mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Tour Bookings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookings.map((booking) => (
          <div key={booking.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{booking.tourName}</h2>
            <p className="text-gray-600 mb-2">Date: {new Date(booking.date).toLocaleDateString()}</p>
            <p className="text-gray-600 mb-2">Time: {new Date(booking.date).toLocaleTimeString()}</p>
            <p className="text-gray-600 mb-2">Location: {booking.location}</p>
            <p className="text-gray-600 mb-2">Status: {booking.status}</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTourBookings;