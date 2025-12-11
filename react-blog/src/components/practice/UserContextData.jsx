import React, { useContext } from 'react';
import { UserContext } from '../../customContex/UserContext.js';

const UserContextData = () => {
    // Get user and setUser from context
    const { user, setUser } = useContext(UserContext);

    // Simple function to update user
    function updateUser() {
        setUser({
            name: "Jimish Shah",
            email: "jimish.shah@example.com",
            age: 48
        })
        
    }

    function updateUserNew() {
        setUser({
            name: "Raj Dev",
            email: "raj.dev@example.com",
            age: 48
        })
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>Post Data</h2>
            {/* Show some other user data for demo */}
            <div style={{ marginBottom: '16px', background: '#e0f7fa', padding: '10px', borderRadius: '6px' }}>
                <strong>Other User Data:</strong>
                <div>Name: {user?.nameNew}</div>
                <div>Email: {user?.emailNew}</div>
                <div>Age: {user?.ageNew}</div>
                <button onClick={updateUserNew} style={{marginTop: '10px'}}>Change 1st User</button>
            </div>
            {/* Show context user data and update button */}
            <div style={{ marginBottom: '16px', background: '#f5f5f5', padding: '10px', borderRadius: '6px' }}>
                <strong>User Data from Context:</strong>
                <div>Name: {user?.name}</div>
                <div>Email: {user?.email}</div>
                <div>Age: {user?.age}</div>
                <button onClick={updateUser} style={{marginTop: '10px'}}>Change 2nd User</button>
            </div>
        </div>
    );
}

export default UserContextData;

