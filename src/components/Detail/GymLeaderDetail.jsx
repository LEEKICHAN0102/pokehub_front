import { useParams } from "react-router-dom";
import useGymLeaderDetailData from "../../hooks/gym-leader/useGymLeaderDetail";
import useAcePokemonData from "../../hooks/ace-pokemon/useAcePokemonData";
import { FaChevronCircleLeft,FaChevronCircleRight } from "react-icons/fa";
import Loader from "../Loader";
import { 
  Navigation,
  PrevNav,
  NavDiv,
  NextNav,
} from "./characterDetail.style";

import CharacterContentList from "./CharacterContentList";


export default function GymLeaderDetail() {
  const order = useParams().order;
  const {data, isLoading} = useGymLeaderDetailData(order);
  const { aceData, isPokemonLoading } = useAcePokemonData(data?.gymLeader?.ace_pokemon);

  const prevOrder = Number(order)-1 === 0 ? 77 : Number(order) - 1;
  const nextOrder = Number(order)+ 1 === 78 ? 1 : Number(order) + 1;

  if(isLoading || isPokemonLoading){
    return <Loader />
  }

  return (
    <>
      <Navigation>
        <PrevNav href={`/gym-leader/detail/${prevOrder}`}>
          <FaChevronCircleLeft size={60} />
        </PrevNav>
        <NavDiv />
        <NextNav href={`/gym-leader/detail/${nextOrder}`}>
          <FaChevronCircleRight size={60} />
        </NextNav>
      </Navigation>
      <CharacterContentList data={data} aceData={aceData} />
    </>
  )
};
