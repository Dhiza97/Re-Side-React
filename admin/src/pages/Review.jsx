import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import { backendUrl } from '../App';

const Review = () => {
  const [pendingProperties, setPendingProperties] = useState([]);

  useEffect(() => {
    const fetchPendingProperties = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${backendUrl}/api/property/pending`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        console.log(response.data);
        
        setPendingProperties(response.data.properties || []);
      } catch (error) {
        console.error('Error fetching pending properties:', error);
      }
    };

    fetchPendingProperties();
  }, []);

  const updatePropertyStatus = async (propertyId, status) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `${backendUrl}/api/property/update-status/${propertyId}`,
        { status },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      setPendingProperties(pendingProperties.filter(property => property._id !== propertyId));
    } catch (error) {
      console.error('Error updating property status:', error);
    }
  };

  return (
    <div>
      {pendingProperties.length > 0 ? (
        pendingProperties.map(property => (
          <Card key={property._id} property={property}>
            <button onClick={() => updatePropertyStatus(property._id, 'approved')}>Approve</button>
            <button onClick={() => updatePropertyStatus(property._id, 'rejected')}>Reject</button>
          </Card>
        ))
      ) : (
        <p>No pending properties to review.</p>
      )}
    </div>
  );
};

export default Review;