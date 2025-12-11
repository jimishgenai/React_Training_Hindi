import React, { useState, useEffect, useContext } from "react";
// import { UserContext } from '../../customContex/UserContext.js';
import loader from "../../assets/loader.gif";

// useEffect() → To run the API call when the component loads
// fetch() → To get data
// useState() → To store API data
// Display results in a simple list

const DisplayPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  // Fetch Data inside useEffect()
  /**
   * 
   useEffect() Syntax
      useEffect(
    () => {

    }
  ), [dependencies]
   */

  useEffect(
    () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json()).then(
          (data) => {
            setPosts(data);
            setLoading(false);
          }).catch(
            (error) => {
              console.log("Error", error);
              setLoading(false);
            }
          )
    }, []
  );
  // End useEffect()

  // Show loader image while API is fetching
  if (loading) {
    return (
      <div
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
        }}
      >
        <img
          src={loader}
          alt="Loading..."
          style={{ width: "250px", height: "100px" }}
        />
      </div>
    );
  }

  // Get user from context (beginner-friendly)
  // const { user } = useContext(UserContext) || {};

  return (
    <div style={{ padding: "20px" }}>
      {/* <h2>Post Data</h2> */}
      {/* Show different user data after Post Data */}
      {/* <div style={{ marginBottom: '16px', background: '#e0f7fa', padding: '10px', borderRadius: '6px' }}>
        <strong>Other User Data:</strong>
        <div>Name: Alice Smith</div>
        <div>Email: alice@example.com</div>
        <div>Age: 22</div>
      </div>
      {user && (
        <div style={{ marginBottom: '16px', background: '#f5f5f5', padding: '10px', borderRadius: '6px' }}>
          <strong>User Data from Context:</strong>
          <div>Name: {user.name}</div>
          <div>Email: {user.email}</div>
          <div>Age: {user.age}</div>
        </div>
      )} */}
      <table className="table">
        <tbody>
          {
            posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );

}

export default DisplayPosts;