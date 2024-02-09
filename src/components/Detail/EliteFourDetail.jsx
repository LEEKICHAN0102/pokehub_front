import { useRef,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useEliteFourDetailData from "../../hooks/elite-four/useEliteFourDetail";
import useAcePokemonData from "../../hooks/ace-pokemon/useAcePokemonData";
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
  MainImage,
  Quote,
  Content,
} from "./characterDetail.style";


export default function EliteFourDetail() {
  const order = useParams().order;
  const {data, isLoading} = useEliteFourDetailData(order);
  const { aceData, isPokemonLoading } = useAcePokemonData(data?.eliteFour?.ace_pokemon);

  const prevOrder = Number(order)-1 === 0 ? 32 : Number(order) - 1;
  const nextOrder = Number(order)+ 1 === 33 ? 1 : Number(order) + 1;

  const audioRef = useRef(null);

  useEffect(() => {
    // 동적으로 volume 속성을 조절
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
    }
  }, []);

  console.log(data);

  if(isLoading || isPokemonLoading){
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
                  <span>성별 : {data.eliteFour.gender}</span>
                </Content>
                <Content>
                  <span> 담당 리그 : {data.eliteFour.gym}</span>
                </Content>
                <Content>
                  {aceData.acePokemon && (
                    <>
                      <span>에이스 포켓몬 :</span>
                      <Link to={`/detail/${data.eliteFour.ace_pokemon}`}>
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
