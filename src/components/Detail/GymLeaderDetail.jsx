import { Link, useParams } from "react-router-dom";
import useGymLeaderDetailData from "../../hooks/gym-leader/useGymLeaderDetail";
import useAcePokemonData from "../../hooks/ace-pokemon/useAcePokemonData";
import colors from "../../styles/typeColor";
import typeIcons from "../../styles/typeIcon";
import { FaChevronCircleLeft,FaChevronCircleRight } from "react-icons/fa";

import { 
  Navigation,
  PrevNav,
  Name,
  NavDiv,
  NextNav,
  Container,
  Official,
  Info,
  ImageQuote,
  Information,
  MainImage,
  MoreInfo,
  Quote,
  Content,
  Introduction,
} from "./characterDetail.style";

import {
  Type,
  TypeBox,
  TypeImg,
} from "../Card/gymLeader.styles";


export default function GymLeaderDetail() {
  const order = useParams().order;
  const {data, isLoading} = useGymLeaderDetailData(order);
  const { aceData, isPokemonLoading } = useAcePokemonData(data?.gymLeader?.ace_pokemon);

  const prevOrder = Number(order)-1 === 0 ? 77 : Number(order) - 1;
  const nextOrder = Number(order)+ 1 === 78 ? 1 : Number(order) + 1;

  console.log(data);

  return (
    <>
      <Navigation>
        <PrevNav href={`/gym-leader/detail/${prevOrder}`}>
          <FaChevronCircleLeft size={60} />
        </PrevNav>
        <NavDiv />
        <NextNav href={`/gym-leader/detail/${nextOrder}`}>
          <FaChevronCircleRight size={60} />
        </NextNav>
      </Navigation>
      <Container>
        <ImageQuote>
          {data.gymLeader && (
            <>
              <Name>{data.gymLeader.name}</Name>
              <Introduction color={colors[data.gymLeader.type]}>{data.gymLeader.introduction}</Introduction>
              <Official src={`${data.gymLeader.image.full}`} alt={`${data.gymLeader.name}`} />
              <Quote>{data.gymLeader.quote}</Quote>
            </>
          )}
        </ImageQuote>
        <Info>
          {data.gymLeader && (
            <>
              <Information>
                {data.gymLeader.information}
              </Information>
              <MoreInfo>
                <Content>
                  <span>담당 체육관 : {data.gymLeader.gym}</span>
                </Content>
                <Content>
                  <span>획득 가능 배지 : ({Object.keys(data.gymLeader.badge)}) </span>
                  <img src={`${data.gymLeader.image.badge}`} className="badge" />
                </Content>
                <Content>
                  <span>성별 : {data.gymLeader.gender}</span>
                </Content>
                <Content>
                  <span>사용타입 : {data.gymLeader.type}</span>
                </Content>
                <Content>
                  {aceData.acePokemon && (
                    <>
                      <span>에이스 포켓몬 :</span>
                      <Link to={`/detail/${data.gymLeader.ace_pokemon}`}>
                        <MainImage src={`${aceData.acePokemon}`} />
                      </Link>
                    </>
                  )}
                </Content>
              </MoreInfo>
            </>
          )}
        </Info>
      </Container>
    </>
  )
};
