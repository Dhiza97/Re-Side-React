import React from 'react';

const Card = ({ property, children }) => {
  return (
    <div className="card">
      <h2>{property.propertyName}</h2>
      <p>{property.description}</p>
      <p>{property.address}, {property.city}, {property.state}</p>
      <p>Price: {property.price}</p>
      <p>Bedrooms: {property.bedroom}</p>
      <p>Bathrooms: {property.bathroom}</p>
      {children}
    </div>
  );
};

export default Card;