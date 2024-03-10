import { 
  Container,
  ImageQuote,
  Name,
  Introduction,
  Official,
  Quote,
  Info,
  Information,
  MainImage,
  MoreInfo,
  Content,
  BgmContent,
} from "./characterDetail.style";
import { 
  Type,
  TypeBox,
  TypeImg,
} from "../Card/character.styles";

import typeIcons from "../../styles/typeIcon";
import colors from "../../styles/typeColor";
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { IoMale,IoFemale } from "react-icons/io5";
import CustomAudioPlayer from "./CustomAudioPlayer";

export default function CharacterContentList({ data, aceData }) {
  let CharacterData;
  let dataLink;

  if (data.gymLeader) {
    CharacterData = data.gymLeader;
    dataLink = "gym-leader";
  } else if (data.eliteFour) {
    CharacterData = data.eliteFour;
    dataLink = "elite-four";
  } else if (data.champion) {
    CharacterData = data.champion;
    dataLink = "champion";
  }
  
  const gender = CharacterData?.gender;
  const genderHandler = () => {
    if (gender && gender === "both") {
      return (
        <>
          <IoMale size={16} color="#468ee6" />
          <IoFemale size={16} color="#ed4dd2" />
        </>
      )
    } else if (gender && gender === "male") {
      return <IoMale size={16} color="#468ee6" />;
    } else if (gender && gender === "female") {
      return <IoFemale size={16} color="#ed4dd2" />;
    }
  }

  return (
    <Container>
      <ImageQuote>
        {CharacterData && (
          <>
            <Link to={`/${dataLink}`}>
              <IoIosHome size="24px" color="#676767" />
            </Link>
            <Name>{CharacterData.name}</Name>
            <Introduction color={colors[CharacterData.type]}>{CharacterData.introduction}</Introduction>
            <Official src={`${CharacterData.image.full}`} alt={`${CharacterData.name}`} />
            <Quote>{CharacterData.quote}</Quote>
          </>
        )}
      </ImageQuote>
      <Info>
        {CharacterData && (
          <>
            <Information>
              {CharacterData.information}
            </Information>
            <MoreInfo>
              <Content>
                <span>담당 지역 : {CharacterData.gym}</span>
              </Content>
              {CharacterData.badge && (
                <Content>
                  <span>획득 가능 배지 : ({Object.keys(CharacterData.badge)}) </span>
                  <img src={`${CharacterData.image.badge}`} className="badge" />
                </Content>
              )}
              <Content>
                <span>성별 : {genderHandler(gender)}</span>
              </Content>
              <Content>
                <Type>
                  <span>사용 타입 : </span>
                  <TypeBox color={`${colors[CharacterData.type]}`} className="typeBox">
                    <TypeImg src={`${typeIcons[CharacterData.type]}`} className="typeImg" />
                  </TypeBox>
                </Type>
              </Content>
              {CharacterData.bgm && (
                  <BgmContent>
                  {CharacterData.bgm["theme"] && (
                    <Content>
                      <span>{CharacterData.name} Theme</span>
                      <CustomAudioPlayer src={CharacterData.bgm["theme"]} />
                    </Content>
                  )}
                  {CharacterData.bgm["last_battle"] && (
                    <Content>
                      <span>{CharacterData.name} 챔피언 배틀</span>
                      <CustomAudioPlayer src={CharacterData.bgm["last_battle"]} />
                    </Content>
                  )}
                  {CharacterData.bgm["gym_leader"] && (
                    <Content>
                      <span>{CharacterData.name} 체육관 배틀</span>
                      <CustomAudioPlayer src={CharacterData.bgm["gym_leader"]} />
                    </Content>
                  )}
                  {CharacterData.bgm["chance_of_victory"] && (
                    <Content>
                      <span>{CharacterData.name} 승리는 눈 앞에!</span>
                      <CustomAudioPlayer src={CharacterData.bgm["chance_of_victory"]} />
                    </Content>
                  )}
                  {CharacterData.bgm["victory"] && (
                    <Content>
                      <span>{CharacterData.name} 승리!</span>
                      <CustomAudioPlayer src={CharacterData.bgm["victory"]} />
                    </Content>
                  )}
                  {CharacterData.bgm["elite_four"] && (
                    <Content>
                      <span>{CharacterData.name} 사천왕 배틀</span>
                      <CustomAudioPlayer src={CharacterData.bgm["elite_four"]} />
                    </Content>
                  )}
                </BgmContent>
              )}
              <Content>
                {aceData.acePokemon && (
                  <>
                    <span>에이스 포켓몬 :</span>
                    <Link to={`/pokemon/detail/${CharacterData.ace_pokemon}`} target="_blank" rel="noopener noreferrer">
                      <MainImage src={`${aceData.acePokemon}`} />
                    </Link>
                  </>
                )}
              </Content>
                <Content>
                  {CharacterData.image["sprite_video"] && (
                    <>
                      <span>스프라이트 : </span>
                      <video src={`${CharacterData.image["sprite_video"]}`} autoPlay loop muted playsInline />
                    </>
                  )}
                </Content>
            </MoreInfo>
          </>
        )}
      </Info>
    </Container>
  );
}