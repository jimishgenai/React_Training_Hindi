import { createBrowserRouter, Link } from "react-router-dom";

import DisplayPosts from "../components/practice/DisplayPosts";
import ReactCrud from "../components/practice/ReactCrud";
import Layout from "./Layout";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <DisplayPosts />
        },
        {
          path: "/ReactCrud",
          element: <ReactCrud />
        }
      ]
    }
  ]
);


export default router;
