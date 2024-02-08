import { useRef,useEffect } from "react";
import { useParams } from "react-router-dom";
import useEliteFourDetailData from "../../hooks/elite-four/useEliteFourDetail";
import typeColor from "../../styles/typeColor";
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
  Introduction,
  ImageQuote,
  Information,
  MoreInfo,
  Quote,
  Content,
} from "./championDetail.style";


export default function EliteFourDetail() {
  const order = useParams().order;
  const {data, isLoading} = useEliteFourDetailData(order);

  const prevOrder = Number(order)-1 === 0 ? 32 : Number(order) - 1;
  const nextOrder = Number(order)+ 1 === 33 ? 1 : Number(order) + 1;

  const audioRef = useRef(null);

  useEffect(() => {
    // 동적으로 volume 속성을 조절
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
    }
  }, []);

  if(isLoading){
    return <Loader />
  }

  return (
    <>
      <Navigation>
        <PrevNav href={`/elite-four/detail/${prevOrder}`}>
          <FaChevronCircleLeft size={60} />
        </PrevNav>
        <NavDiv />
        <NextNav href={`/elite-four/detail/${nextOrder}`}>
            <FaChevronCircleRight size={60} />
        </NextNav>
      </Navigation>
      <Container>
        <ImageQuote>
          {data.eliteFour && (
            <>
              <Name>{data.eliteFour.name}</Name>
              <Introduction color={typeColor[data.eliteFour.type]}>{data.eliteFour.introduction}</Introduction>
              <Official src={`${data.eliteFour.image.full}`} alt={`${data.eliteFour.name}`} />
              <Quote color={typeColor[data.eliteFour.type]}>{data.eliteFour.quote}</Quote>
            </>
          )}
        </ImageQuote>
        <Info>
          {data.eliteFour && (
            <>
              <Information color={typeColor[data.eliteFour.type]}>
                {data.eliteFour.information}
              </Information>
              <MoreInfo>
                <Content>
                  
                </Content>
              </MoreInfo>
            </>
          )}
        </Info>
      </Container>
    </>
  )
};
