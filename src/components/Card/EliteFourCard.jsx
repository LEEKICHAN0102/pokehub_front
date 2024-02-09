import {
  Container,
  CardContainer,
  Info,
  InfoBox,
  InGameImage,
  Type,
  TypeBox,
  TypeImg,
} from "./gymLeader.styles";

import Title from "../Title";
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
    <>
      <Title name="포켓몬 사천왕 정보" />
      <Container>
        {data.eliteFour && data.eliteFour.map((eliteFour) => (
          <Link key={eliteFour._id} to={`detail/${eliteFour.order}`}>
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
    </>
  );
};