import { useParams } from "react-router-dom";
import useAcePokemonData from "../../hooks/ace-pokemon/useAcePokemonData";
import useChampionDetailData from "../../hooks/champion/useChampionDetail";
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


export default function ChampionDetail() {
  const order = useParams().order;
  const prevOrder = Number(order)-1 === 0 ? 12 : Number(order) - 1;
  const nextOrder = Number(order)+ 1 === 13 ? 1 : Number(order) + 1;
  const {data, isLoading} = useChampionDetailData({order, prevOrder, nextOrder});
  const { aceData, isPokemonLoading } = useAcePokemonData(data?.champion?.ace_pokemon);

  if(isLoading || isPokemonLoading){
    return <Loader />
  }

  return (
    <>
      <Navigation>
        <PrevNav href={`/champion/detail/${prevOrder}`}>
          No. {prevOrder}
          <Name>{data.name.prevName}</Name>
          <FaChevronCircleLeft size={36} />
        </PrevNav>
        <NavDiv />
        <NextNav href={`/champion/detail/${nextOrder}`}>
          No. {nextOrder}
          <Name>{data.name.nextName}</Name>
          <FaChevronCircleRight size={36} />
        </NextNav>
      </Navigation>
      <CharacterContentList data={data} aceData={aceData} />
    </>
  )
};
