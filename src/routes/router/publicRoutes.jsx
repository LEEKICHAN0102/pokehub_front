import Layout from "../../components/Layout";

import Home from "../Home";
import Login from "../Login";

export const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      // /
    ],
  },
];