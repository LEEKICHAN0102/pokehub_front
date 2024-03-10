import { useParams } from "react-router-dom";
import useEliteFourDetailData from "../../hooks/elite-four/useEliteFourDetail";
import useAcePokemonData from "../../hooks/ace-pokemon/useAcePokemonData";
import { FaChevronCircleLeft,FaChevronCircleRight } from "react-icons/fa";
import Loader from "../Loader";
import { 
  Navigation,
  PrevNav,
  NavDiv,
  NextNav,
  Name,
} from "./characterDetail.style";
import CharacterContentList from "./CharacterContentList";


export default function EliteFourDetail() {
  const order = useParams().order;
  const prevOrder = Number(order)-1 === 0 ? 32 : Number(order) - 1;
  const nextOrder = Number(order)+ 1 === 33 ? 1 : Number(order) + 1;
  const {data, isLoading} = useEliteFourDetailData({order, prevOrder, nextOrder});
  const { aceData, isPokemonLoading } = useAcePokemonData(data?.eliteFour?.ace_pokemon);

  if(isLoading || isPokemonLoading){
    return <Loader />
  }

  return (
    <>
      <Navigation>
        <PrevNav href={`/elite-four/detail/${prevOrder}`}>
          No. {prevOrder}
          <Name>{data.name.prevName}</Name>
          <FaChevronCircleLeft size={36} />
        </PrevNav>
        <NavDiv />
        <NextNav href={`/elite-four/detail/${nextOrder}`}>
            No. {nextOrder}
            <Name>{data.name.nextName}</Name>
            <FaChevronCircleRight size={36} />
        </NextNav>
      </Navigation>
      <CharacterContentList data={data} aceData={aceData} />
    </>
  )
};
