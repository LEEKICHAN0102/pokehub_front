import { useRef,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useAcePokemonData from "../../hooks/ace-pokemon/useAcePokemonData";
import useChampionDetailData from "../../hooks/champion/useChampionDetail";
import { FaChevronCircleLeft,FaChevronCircleRight } from "react-icons/fa";
import CustomAudioPlayer from "./CustomAudioPlayer";
import typeColor from "../../styles/typeColor";
import { IoMale,IoFemale } from "react-icons/io5";
import Loader from "../Loader";

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
  BgmContent,
  Content,
  MainImage,
} from "./characterDetail.style";


export default function ChampionDetail() {
  const order = useParams().order;
  const {data, isLoading} = useChampionDetailData(order);
  const { aceData, isPokemonLoading } = useAcePokemonData(data?.champion?.ace_pokemon);

  const prevOrder = Number(order)-1 === 0 ? 12 : Number(order) - 1;
  const nextOrder = Number(order)+ 1 === 13 ? 1 : Number(order) + 1;

  const audioRef = useRef(null);

  useEffect(() => {
    // 동적으로 volume 속성을 조절
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
    }
  }, []);

  if(isLoading || isPokemonLoading){
    return <Loader />
  }

  return (
    <>
      <Navigation>
        <PrevNav href={`/champion/detail/${prevOrder}`}>
          <FaChevronCircleLeft size={60} />
        </PrevNav>
        <NavDiv />
        <NextNav href={`/champion/detail/${nextOrder}`}>
          <FaChevronCircleRight size={60} />
        </NextNav>
      </Navigation>
      <Container>
        <ImageQuote>
          {data.champion && (
            <>
              <Name>{data.champion.name}</Name>
              <Introduction color={typeColor[data.champion.type]}>{data.champion.introduction}</Introduction>
              <Official src={`${data.champion.image.full}`} alt={`${data.champion.name}`} />
              <Quote>{data.champion.quote}</Quote>
            </>
          )}
        </ImageQuote>
        <Info>
          {data.champion && (
            <>
              <Information>
                {data.champion.information}
              </Information>
              <MoreInfo>
                <Content>
                  <>
                    <span>담당 리그 :</span>
                    <span>{data.champion.gym}</span>
                  </>
                </Content>
                <Content>
                  <span>성별 :</span>
                  <span>{data.champion.gender}</span>
                </Content>
                <BgmContent>
                  {data.champion.bgm["theme"] && (
                    <Content>
                      <span>{data.champion.name} Theme :</span>
                      <CustomAudioPlayer src={data.champion.bgm["theme"]} />
                    </Content>
                  )}
                  {data.champion.bgm["last_battle"] && (
                    <Content>
                      <span>{data.champion.name} 챔피언 배틀 :</span>
                      <CustomAudioPlayer src={data.champion.bgm["last_battle"]} />
                    </Content>
                  )}
                  {data.champion.bgm["gym_leader"] && (
                    <Content>
                      <span>{data.champion.name} 체육관 배틀 :</span>
                      <CustomAudioPlayer src={data.champion.bgm["gym_leader"]} />
                    </Content>
                  )}
                  {data.champion.bgm["chance_of_victory"] && (
                    <Content>
                      <span>{data.champion.name} 승리는 눈 앞에! :</span>
                      <CustomAudioPlayer src={data.champion.bgm["chance_of_victory"]} />
                    </Content>
                  )}
                  {data.champion.bgm["victory"] && (
                    <Content>
                      <span>{data.champion.name} 승리! :</span>
                      <CustomAudioPlayer src={data.champion.bgm["victory"]} />
                    </Content>
                  )}
                  {data.champion.bgm["elite_four"] && (
                    <Content>
                      <span>{data.champion.name} 사천왕 배틀 :</span>
                      <CustomAudioPlayer src={data.champion.bgm["elite_four"]} />
                    </Content>
                  )}
                </BgmContent>
                <Content>
                  {aceData.acePokemon && (
                    <>
                      <span>에이스 포켓몬 :</span>
                      <Link to={`/detail/${data.champion.ace_pokemon}`}>
                        <MainImage src={`${aceData.acePokemon}`} />
                      </Link>
                    </>
                  )}
                </Content>
                <Content>
                  {data.champion.image["sprite_video"] && (
                    <>
                      <span>스프라이트 : </span>
                      <video src={`${data.champion.image["sprite_video"]}`} autoPlay loop muted playsInline />
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
