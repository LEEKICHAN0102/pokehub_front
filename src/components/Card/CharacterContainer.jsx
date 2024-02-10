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
} from "./character.styles";
import { Link } from "react-router-dom";
import typeIcons from "../../styles/typeIcon";
import colors from "../../styles/typeColor";

export default function CharacterContainer({ data }) {
  let CharacterData;

  if (data.gymLeader) {
    CharacterData = data.gymLeader;
  } else if (data.eliteFour) {
    CharacterData = data.eliteFour;
  } else if (data.champion) {
    CharacterData = data.champion;
  }
  
  return (
    <Container>
      {CharacterData && CharacterData.map((CharacterData) => (
        <Link key={CharacterData._id} to={`detail/${CharacterData.order}`}>
          <CardContainer color={colors[CharacterData.type]}>
            <Info>
              <InfoBox>{CharacterData.name}</InfoBox>
              {CharacterData.image.badge && (
                <BadgeBox src={CharacterData.image.badge} />
              )}
            </Info>
            <InGameImage src={CharacterData.image.inGame} />
            <Type>
              <TypeBox color={`${colors[CharacterData.type]}`}>
                <TypeImg src={`${typeIcons[CharacterData.type]}`} />
              </TypeBox>
            </Type>
          </CardContainer>
        </Link>
      ))}
    </Container>
  )
}