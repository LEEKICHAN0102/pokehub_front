import { lazy } from "react";
import Layout from "../../components/Layout";

const Home = lazy(() => import("../Home"));
const Login = lazy(() => import("../Login"));
const Join = lazy(() => import("../Join"));
const DetailPokemon = lazy(() => import("../../components/Detail"));
const ItemCard = lazy(() => import("../../components/Card/ItemCard"));
const GymLeaderCard = lazy(() => import("../../components/Card/GymLeaderCard"));
const GymLeaderDetail = lazy(() => import("../../components/Detail/GymLeaderDetail"));
const ChampionCard = lazy(() => import("../../components/Card/ChampionCard"));
const ChampionDetail = lazy(() => import("../../components/Detail/ChampionDetail"));
const EliteFourCard = lazy(() => import("../../components/Card/EliteFourCard"));
const EliteFourDetail = lazy(() => import("../../components/Detail/EliteFourDetail"));
const EventCard = lazy(() => import("../../components/Card/EventCard"));
const PostCard = lazy(() => import("../../components/Card/PostCard"));
const PostDetail = lazy(() => import("../../components/Detail/PostDetail"));
const WriteCard = lazy(() => import("../../components/Card/WriteCard"));
const Profile = lazy(() => import("../../components/Profile/index"));

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
        path: "page/:page",
        element: <Home />,
      },
      {
        path: "item/:page",
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
      {
        path: "board",
        element: <PostCard />,
      },
      {
        path: "board/:postId",
        element: <PostDetail />,
      },
      {
        path: "board/write",
        element: <WriteCard />,
      },
      {
        path: "event",
        element: <EventCard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
];