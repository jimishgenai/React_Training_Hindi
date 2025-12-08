import React from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import DisplayPosts from "./components/practice/DisplayPosts";
import ProductListNew from "./components/practice/ProductListNew";

function Router() {

  const router = createBrowserRouter([
    { path: "/", element: <DisplayPosts /> },
    { path: "/products", element: <ProductListNew /> }
  ]);

  return (
    <div>
      <h3>Navigation</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
      </ul>

      <RouterProvider router={router} />
    </div>
  );
}

export default Router;
