import React, { useState, useEffect } from "react"
import loader from "../../assets/loader.gif"

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

  return (
    <div style={{ padding: "20px" }}>
      <h2>Post Data</h2>

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