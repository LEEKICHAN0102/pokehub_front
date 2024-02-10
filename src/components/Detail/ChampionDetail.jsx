import { useRef,useEffect } from "react";
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
} from "./characterDetail.style";
import CharacterContentList from "./CharacterContentList";


export default function ChampionDetail() {
  const order = useParams().order;
  const {data, isLoading} = useChampionDetailData(order);
  const { aceData, isPokemonLoading } = useAcePokemonData(data?.champion?.ace_pokemon);

  const prevOrder = Number(order)-1 === 0 ? 12 : Number(order) - 1;
  const nextOrder = Number(order)+ 1 === 13 ? 1 : Number(order) + 1;

  const audioRef = useRef(null);

  if(isLoading || isPokemonLoading){
    return <Loader />
  }

  useEffect(() => {
    // 동적으로 volume 속성을 조절
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
    }
  }, []);

  return (
    <>
      <Navigation>
        <PrevNav href={`/champion/detail/${prevOrder}`}>
          <FaChevronCircleLeft size={60} />
        </PrevNav>
        <NavDiv />
        <NextNav href={`/champion/detail/${nextOrder}`}>
          <FaChevronCircleRight size={60} />
        </NextNav>
      </Navigation>
      <CharacterContentList data={data} aceData={aceData} />
    </>
  )
};
