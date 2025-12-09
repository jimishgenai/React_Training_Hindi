import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import DisplayPosts from "./components/practice/DisplayPosts";
import ReactCrud from "./components/practice/ReactCrud";
import ProductPage from "./components/practice/ProductPage";
import TableComponent from "./components/practice/TableComponent";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <DisplayPosts /> },
      { path: "ReactCrud", element: <ReactCrud /> },
      { path: "ProductPage", element: <ProductPage /> },
      { path: "TableComponent", element: <TableComponent /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
