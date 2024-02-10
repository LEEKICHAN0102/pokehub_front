import Title from "../Title";
import useGymLeaderData from "../../hooks/gym-leader/useGymLeaderData";
import CharacterContainer from "./CharacterContainer";
import Loader from "../Loader";

export default function GymLeaderCard() {
  const { data, isLoading } = useGymLeaderData();

  if(isLoading){
    return <Loader />
  }

  return (
    <>
      <Title name="포켓몬 관장 정보" />
      <CharacterContainer data={data} />
    </>
  );
};