import {
  BadgeBox,
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
import useGymLeaderData from "../../hooks/gym-leader/useGymLeaderData";
import { Link } from "react-router-dom";
import "../../styles/Paging.css";

export default function GymLeaderCard() {
  const { data, isLoading } = useGymLeaderData();

  if (isLoading) {
    return <Loader />;
  }

  console.log(data); 

  return (
    <>
      <Title name="포켓몬 관장 정보" />
      <Container>
        {data.gymLeader && data.gymLeader.map((gymLeader) => (
          <Link key={gymLeader._id} to={`detail/${gymLeader.order}`}>
            <CardContainer color={colors[gymLeader.type]}>
              <Info>
                <InfoBox>{gymLeader.name}</InfoBox>
                <BadgeBox src={`${gymLeader.image.badge}`} />
              </Info>
              <InGameImage src={gymLeader.image.inGame} />
              <Type>
                <TypeBox color={`${colors[gymLeader.type]}`}>
                  <TypeImg src={`${typeIcons[gymLeader.type]}`} />
                </TypeBox>
              </Type>
            </CardContainer>
          </Link>
        ))}
      </Container>
    </>
  );
};