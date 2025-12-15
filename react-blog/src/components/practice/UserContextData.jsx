import React, { useContext } from "react";
import { UserContext } from "../../customContex/UserContext.js";

export default function UserContextData() {
  // STEP 1: Get values from context
  const { user, setUser } = useContext(UserContext);

  console.log("User Data:", user);

  // STEP 2: Function to update FIRST user
  function updateFirstUser() {
    const newUsers = [...user]; // Copy array

    newUsers[0] = {
      name: "Manish Singh",
      email: "manish@test.com",
      age: 35,
    };

    setUser(newUsers); // Update context
  }

  // STEP 3: Function to update/add SECOND user
  function updateSecondUser() {
    const newUsers = [...user];

    newUsers[1] = {
      name: "Ramesh",
      email: "ramesh@test.com",
      age: 55,
    };

    setUser(newUsers);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Context Example</h2>

      {/* STEP 4: Display FIRST user */}
      <div
        style={{
          marginBottom: "14px",
          padding: "12px",
          background: "#e3f2fd",
          borderRadius: "6px",
        }}
      >
        <strong>First User:</strong>
        <p>Name: {user[0]?.name}</p>
        <p>Email: {user[0]?.email}</p>
        <p>Age: {user[0]?.age}</p>

        <button onClick={updateFirstUser}>Update 1st User</button>
      </div>

      {/* STEP 5: Display SECOND user */}
      <div
        style={{
          marginBottom: "14px",
          padding: "12px",
          background: "#f1f8e9",
          borderRadius: "6px",
        }}
      >
        <strong>Second User:</strong>
        <p>Name: {user[1]?.name || "-"}</p>
        <p>Email: {user[1]?.email || "-"}</p>
        <p>Age: {user[1]?.age || "-"}</p>

        <button onClick={updateSecondUser}>Update 2nd User</button>
      </div>
    </div>
  );
}
