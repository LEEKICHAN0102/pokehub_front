import Layout from "../../components/Layout";


import Home from "../Home";
import Login from "../Login";
import Join from "../Join";
import About from "../../components/About";
import DetailPokemon from "../../components/Detail";
import ItemCard from "../../components/Card/ItemCard";
import GymLeaderCard from "../../components/Card/GymLeaderCard";
import GymLeaderDetail from "../../components/Detail/GymLeaderDetail";
import ChampionCard from "../../components/Card/ChampionCard";
import ChampionDetail from "../../components/Detail/ChampionDetail";
import EliteFourCard from "../../components/Card/EliteFourCard";
import EliteFourDetail from "../../components/Detail/EliteFourDetail";
import EditCard from "../../components/Card/EditCard";
import EventCard from "../../components/Card/EventCard";
import PostCard from "../../components/Card/PostCard";
import PostDetail from "../../components/Detail/PostDetail";
import WriteCard from "../../components/Card/WriteCard";
import Profile from "../../components/Profile/index";
import FourOFour from "../../components/404";
import PokemonCard from "../../components/Card";

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
        path: "about",
        element: <About />,
      },
      {
        path: "pokemon/:page",
        element: <PokemonCard />,
      },
      {
        path: "item/:page",
        element: <ItemCard />,
      },
      {
        path: "pokemon/detail/:id",
        element: <DetailPokemon />,
      },
      {
        path: "gym-leader",
        element: <GymLeaderCard />,
      },
      {
        path: "gym-leader/detail/:order",
        element: <GymLeaderDetail />
      },
      {
        path: "elite-four",
        element: <EliteFourCard />,
      },
      {
        path: "elite-four/detail/:order",
        element: <EliteFourDetail />
      },
      {
        path: "champion",
        element: <ChampionCard />,
      },
      {
        path: "champion/detail/:order",
        element: <ChampionDetail />,
      },
      {
        path: "board/:page",
        element: <PostCard />,
      },
      {
        path: "board/detail/:postId",
        element: <PostDetail />,
      },
      {
        path: "board/write",
        element: <WriteCard />,
      },
      {
        path: "board/edit/:postId",
        element: <EditCard />,
      },
      {
        path: "event",
        element: <EventCard />,
      },
      {
        path: "profile/:userId",
        element: <Profile />,
      },
    ],
  },
  {
    path: "*",
    element: <FourOFour />
  },
];