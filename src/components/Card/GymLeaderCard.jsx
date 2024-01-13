import {
  BadgeBox,
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
import useGymLeaderData from "../../hooks/gym-leader/useGymLeaderData";
import { Link } from "react-router-dom";

export default function GymLeaderCard() {
  const { data, isLoading } = useGymLeaderData();

  if (isLoading || !data.gymLeader) {
    return <Loader />;
  }

  return (
    <div>
      <Title>포켓몬 관장 정보</Title>
      <Container>
        {data.gymLeader.map((gymLeader) => (
          <Link key={gymLeader._id} to={`detail/${gymLeader.name}`}>
            <CardContainer color={colors[gymLeader.type]}>
              <Info>
                <InfoBox>{gymLeader.name}</InfoBox>
                {Object.keys(gymLeader.badge).map((badgeKey) => (
                  <BadgeBox key={badgeKey} src={gymLeader.badge[badgeKey]} alt={badgeKey} />
                ))}
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
    </div>
  );
};