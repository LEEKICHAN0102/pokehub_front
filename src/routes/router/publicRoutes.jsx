import Layout from "../../components/Layout";

import Home from "../Home";
import Login from "../Login";
import Join from "../Join";
import DetailPokemon from "../../components/Detail";

export const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/join",
    element: <Join />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "detail/:id",
        element: <DetailPokemon />,
      },
      // /
    ],
  },
];