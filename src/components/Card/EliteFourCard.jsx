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
import useEliteFourData from "../../hooks/elite-four/useEliteFourData";
import { Link } from "react-router-dom";

export default function EliteFourCard() {
  const { data, isLoading } = useEliteFourData();
  console.log(data);

  if (isLoading || !data.eliteFour) {
    return <Loader />;
  }

  return (
    <div>
      <Title>포켓몬 관장 정보</Title>
      <Container>
        {data.eliteFour.map((eliteFour) => (
          <Link key={eliteFour._id} to={`detail/${eliteFour.name}`}>
            <CardContainer color={colors[eliteFour.type]}>
              <Info>
                <InfoBox>{eliteFour.name}</InfoBox>
              </Info>
              <InGameImage src={eliteFour.image.inGame} />
              <Type>
                <TypeBox color={`${colors[eliteFour.type]}`}>
                  <TypeImg src={`${typeIcons[eliteFour.type]}`} />
                </TypeBox>
              </Type>
            </CardContainer>
          </Link>
        ))}
      </Container>
    </div>
  );
};