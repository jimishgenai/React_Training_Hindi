import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function UserProfile() {
    const { user, setUser } = useContext(UserContext);

    const handleUpdate = () => {
        setUser({
            name: "Jimish Shah",
            email: "jShah@example.com",
            age: 48
        });
    };

    return (
        <div>
            <h2>User Profile</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <button onClick={handleUpdate}>Update User</button>
        </div>
    );
}

export default UserProfile;