import React, { useState, useEffect } from "react"

// useEffect() → To run the API call when the component loads
// fetch() → To get data
// useState() → To store API data
// Display results in a simple list

const DisplayPosts = () => {
  const [posts, setPosts] = useState([])

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
        (data) => setPosts(data)).catch(
        (error) => {
          console.log("Error", error);
        }
      )
    }, []
  );
  // End useEffect()

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