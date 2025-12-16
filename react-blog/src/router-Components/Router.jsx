import { createBrowserRouter, Link } from "react-router-dom";
import Layout from "./Layout";
import DisplayPosts from "../components/practice/DisplayPosts";
import ReactCrud from "../components/practice/ReactCrud";
import UserContextData from "../components/practice/UserContextData";
import ReduxPractice from "../components/practice/ReduxPractice";


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
        },
        {
          path: "/UserContextData",
          element: <UserContextData />
        },
        {
          path: "/ReduxPractice",
          element: <ReduxPractice />
        }
      ]
    }
  ]
);


export default router;
