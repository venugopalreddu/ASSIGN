// src/components/Users.js
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Users() {
  const users = useContext(UserContext);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "1em" }}>
            <h3>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </h3>
          </li>
        ))}
      </ul>
      <Outlet /> {/* Nested route will render here */}
    </div>
  );
}

export default Users;
