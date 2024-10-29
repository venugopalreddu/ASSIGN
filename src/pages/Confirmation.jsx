// src/pages/Confirmation.jsx
import { useLocation } from "react-router-dom";

const Confirmation = () => {
  const location = useLocation();
  const { name, destination, phone } = location.state || {};

  return (
    <div>
      <h2>Booking Confirmation</h2>
      {name ? (
        <div>
          <p>Thank you, {name}!</p>
          <p>Your ticket to {destination} has been booked.</p>
          <p>We will contact you at {phone} for further details.</p>
        </div>
      ) : (
        <p>No booking details available.</p>
      )}
    </div>
  );
};

export default Confirmation;
