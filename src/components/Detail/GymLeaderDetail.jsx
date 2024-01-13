import { useParams } from "react-router-dom";
import useGymLeaderDetailData from "../../hooks/gym-leader/useGymLeaderDetail";
import typeColor from "../../styles/typeColor";
import typeIcon from "../../styles/typeIcon";
import Loader from "../Loader";
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
} from "./gymLeaderDetail.style";


export default function GymLeaderDetail() {
  const name = useParams().name;
  const {data, isLoading} = useGymLeaderDetailData(name);

  return (
    <>
      <Navigation>
        <PrevNav>
          <Name></Name>
          <FaChevronCircleLeft size={36} />
        </PrevNav>
        <NavDiv />
        <NextNav>
          <Name></Name>
          <FaChevronCircleRight size={36} />
        </NextNav>
      </Navigation>
      <Container>
        <ImageQuote>
          {data.gymLeader && data.gymLeader.image ? (
            <>
              <Official src={`${data.gymLeader.image.full}`} alt={`${data.gymLeader.name}`} />
              <Quote color={typeColor[data.gymLeader.type]}>{data.gymLeader.quote}</Quote>
            </>
          ) : (
            <Loader />
          )}
        </ImageQuote>
        <Info>
          {data.gymLeader ? (
            <>
              <Name>{data.gymLeader.name}</Name>
              <span>{data.gymLeader.region} 지방의 체육관 관장</span>
              <Information color={typeColor[data.gymLeader.type]}>
                {data.gymLeader.information}
              </Information>
              <MoreInfo>
                <Content>
                  <span>획득 가능 배지 : ({Object.keys(data.gymLeader.badge)}) </span>
                  <img src={`${data.gymLeader.badge[Object.keys(data.gymLeader.badge)]}`} />
                </Content>
                <Content>
                  
                </Content>
              </MoreInfo>
            </>
          ) : (
            <Loader />
          )}
        </Info>
      </Container>
    </>
  )
};
