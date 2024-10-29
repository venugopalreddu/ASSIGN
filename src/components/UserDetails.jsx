// src/components/UserDetail.js
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function UserDetail() {
  const users = useContext(UserContext);
  const { userId } = useParams();
  const user = users.find((u) => u.id === parseInt(userId));

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "20px", maxWidth: "300px" }}
    >
      <h2>User Details</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone} {/* Display phone number */}
      </p>
      <p>
        <strong>Address:</strong> {user.address} {/* Display address */}
      </p>
    </div>
  );
}

export default UserDetail;
