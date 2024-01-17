import { useRef,useEffect } from "react";
import { useParams } from "react-router-dom";
import useAcePokemonData from "../../hooks/ace-pokemon/useAcePokemonData";
import useChampionDetailData from "../../hooks/champion/useChampionDetail";
import typeColor from "../../styles/typeColor";
import typeIcon from "../../styles/typeIcon";
import Loader from "../Loader";
import { FaChevronCircleLeft,FaChevronCircleRight } from "react-icons/fa";
import CustomAudioPlayer from "./CustomAudioPlayer";

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
  MainImage,
} from "./championDetail.style";


export default function ChampionDetail() {
  const name = useParams().name;
  const {data, isLoading} = useChampionDetailData(name);
  const { aceData, isPokemonLoading } = useAcePokemonData(data?.champion?.ace_pokemon[0]);

  const audioRef = useRef(null);

  useEffect(() => {
    // 동적으로 volume 속성을 조절
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
    }
  }, []);

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
          {data.champion && data.champion.image ? (
            <>
              <Name>{data.champion.name}</Name>
              <span>{data.champion.region} 지방의 챔피언</span>
              <Official src={`${data.champion.image.full}`} alt={`${data.champion.name}`} />
              <Quote color={typeColor[data.champion.type]}>
                {data.champion.quote}
              </Quote>
            </>
          ) : (
            <Loader />
          )}
        </ImageQuote>
        <Info>
          {data.champion ? (
            <>
              <Information>
                {data.champion.information}
              </Information>
              <MoreInfo>
                <Content>
                  <span>성별 :</span>
                  {data.champion.gender}
                </Content>
                <Content>
                  {data.champion.bgm["theme"] && (
                    <>
                      <span>{data.champion.name} 테마 :</span>
                      <CustomAudioPlayer src={data.champion.bgm["theme"]} />
                    </>
                  )}
                  {data.champion.bgm["last_battle"] && (
                    <>
                      <span>{data.champion.name} 챔피언 배틀 :</span>
                      <CustomAudioPlayer src={data.champion.bgm["last_battle"]} />
                    </>
                  )}
                  {data.champion.bgm["gym_leader"] && (
                    <>
                      <span>{data.champion.name} 체육관 배틀 :</span>
                      <CustomAudioPlayer src={data.champion.bgm["gym_leader"]} />
                    </>
                  )}
                  {data.champion.bgm["chance_of_victory"] && (
                    <>
                      <span>{data.champion.name} 승기 :</span>
                      <CustomAudioPlayer src={data.champion.bgm["chance_of_victory"]} />
                    </>
                  )}
                  {data.champion.bgm["elite_four"] && (
                    <>
                      <span>{data.champion.name} 사천왕 배틀 :</span>
                      <CustomAudioPlayer src={data.champion.bgm["elite_four"]} />
                    </>
                  )} // 분리
                </Content>
                <Content>
                  <>
                    <span>담당 리그 :</span>
                    {data.champion.gym}
                  </>
                </Content>
                <Content>
                  {aceData && aceData.acePokemon ? (
                    <>
                      <span>에이스 포켓몬 :</span>
                      <MainImage src={`${aceData.acePokemon}`} />
                    </>
                  ) : (
                    <Loader />
                  )}
                </Content>
                <Content>
                  {data.champion.image["sprite_video"] && (
                    <>
                      <span>스프라이트 비디오 :</span>
                      <video src={`${data.champion.image["sprite_video"]}`} />
                    </>
                  )}
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
