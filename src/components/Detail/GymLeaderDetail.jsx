import { useParams } from "react-router-dom";
import useGymLeaderDetailData from "../../hooks/gym-leader/useGymLeaderDetail";
import typeColor from "../../styles/typeColor";
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
  MoreInfo,
  Quote,
  Content,
  Introduction,
} from "./championDetail.style";


export default function GymLeaderDetail() {
  const order = useParams().order;
  const {data, isLoading} = useGymLeaderDetailData(order);

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
              <Introduction color={typeColor[data.gymLeader.type]}>{data.gymLeader.introduction}</Introduction>
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
                  <img src={`${data.gymLeader.image.badge}`} />
                </Content>
                <Content>
                  <span>성별 : {data.gymLeader.gender}</span>
                </Content>
              </MoreInfo>
            </>
          )}
        </Info>
      </Container>
    </>
  )
};
