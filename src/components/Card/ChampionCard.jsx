import Title from "../Title";
import useChampionData from "../../hooks/champion/useChampionData";
import CharacterContainer from "./CharacterContainer";
import Loader from "../Loader";

export default function ChampionCard() {
  const { data, isLoading } = useChampionData();

  if(isLoading){
    return <Loader />
  }

  return (
    <>
      <Title name="포켓몬 챔피언 정보" />
      <CharacterContainer data={data} />
    </>
  )
};