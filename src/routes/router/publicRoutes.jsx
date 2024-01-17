import Layout from "../../components/Layout";

import Home from "../Home";
import Login from "../Login";
import Join from "../Join";
import DetailPokemon from "../../components/Detail";
import ItemCard from "../../components/Card/ItemCard";
import GymLeaderCard from "../../components/Card/GymLeaderCard";
import GymLeaderDetail from "../../components/Detail/GymLeaderDetail";
import ChampionCard from "../../components/Card/ChampionCard";
import ChampionDetail from "../../components/Detail/ChampionDetail";
import EliteFourCard from "../../components/Card/EliteFourCard";
import EliteFourDetail from "../../components/Detail/EliteFourDetail";

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
        path: "item",
        element: <ItemCard />,
      },
      {
        path: "detail/:id",
        element: <DetailPokemon />,
      },
      {
        path: "gym-leader",
        element: <GymLeaderCard />,
      },
      {
        path: "gym-leader/detail/:name",
        element: <GymLeaderDetail />
      },
      {
        path: "elite-four",
        element: <EliteFourCard />,
      },
      {
        path: "elite-four/detail/:name",
        element: <EliteFourDetail />
      },
      {
        path: "champion",
        element: <ChampionCard />,
      },
      {
        path: "champion/detail/:name",
        element: <ChampionDetail />,
      },
    ],
  },
];