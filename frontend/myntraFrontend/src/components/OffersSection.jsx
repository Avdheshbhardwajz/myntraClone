import React from "react";

const OffersSection = ({ offers }) => {
  // Ensure 'offers' is defined and is an array
  if (!Array.isArray(offers)) {
    return <p>No offers available.</p>;
  }

  return (
    <div>
      <h2>Offers</h2>
      {offers.length > 0 ? (
        <ul>
          {offers.map((offer) => (
            <li key={offer.id}>{offer.title}</li>
          ))}
        </ul>
      ) : (
        <p>No offers available.</p>
      )}
    </div>
  );
};

export default OffersSection;
