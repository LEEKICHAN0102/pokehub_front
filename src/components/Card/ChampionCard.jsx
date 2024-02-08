import {
  Container,
  CardContainer,
  Info,
  InfoBox,
  InGameImage,
  Title,
  Type,
  TypeBox,
  TypeImg,
} from "./gymLeader.styles";
import typeIcons from "../../styles/typeIcon";
import colors from "../../styles/typeColor";
import Loader from "../Loader";
import useChampionData from "../../hooks/champion/useChampionData";
import { Link } from "react-router-dom";

export default function ChampionCard() {
  const { data, isLoading } = useChampionData();
  
  console.log(data);

  if (isLoading || !data.champion) {
    return <Loader />;
  }

  return (
    <>
      <Title>포켓몬 관장 정보</Title>
      <Container>
        {data.champion ? (
          data.champion.map((champion) => (
            <Link key={champion._id} to={`detail/${champion.order}`}>
              <CardContainer color={colors[champion.type]}>
                <Info>
                  <InfoBox>{champion.name}</InfoBox>
                </Info>
                <InGameImage src={champion.image.inGame} />
                <Type>
                  <TypeBox color={`${colors[champion.type]}`}>
                    <>
                      <TypeImg src={`${typeIcons[champion.type]}`} />
                    </>
                  </TypeBox>
                </Type>
              </CardContainer>
            </Link>
          ))
        ) : (
          <Loader />
        )}
      </Container>
    </>
  )
};