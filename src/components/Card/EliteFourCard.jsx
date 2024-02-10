import Title from "../Title";
import useEliteFourData from "../../hooks/elite-four/useEliteFourData";
import CharacterContainer from "./CharacterContainer";
import Loader from "../Loader";

export default function EliteFourCard() {
  const { data, isLoading } = useEliteFourData();

  if(isLoading){
    return <Loader />
  }

  return (
    <>
      <Title name="포켓몬 사천왕 정보" />
      <CharacterContainer data={data} />
    </>
  );
};