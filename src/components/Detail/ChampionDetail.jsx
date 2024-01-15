import { useRef,useEffect } from "react";
import { useParams } from "react-router-dom";
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
} from "./gymLeaderDetail.style";


export default function ChampionDetail() {
  const name = useParams().name;
  const {data, isLoading} = useChampionDetailData(name);

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
              <Official src={`${data.champion.image.full}`} alt={`${data.champion.name}`} />
              <Quote color={typeColor[data.champion.type]}>{data.champion.quote}</Quote>
            </>
          ) : (
            <Loader />
          )}
        </ImageQuote>
        <Info>
          {data.champion ? (
            <>
              <Name>{data.champion.name}</Name>
              <span>{data.champion.region} 지방의 체육관 관장</span>
              <Information color={typeColor[data.champion.type]}>
                {data.champion.information}
              </Information>
              <MoreInfo>
                {data.champion.bgm["last_battle"] && (
                  <CustomAudioPlayer src={data.champion.bgm["last_battle"]} />
                )}
                {data.champion.bgm["theme"] && (
                  <CustomAudioPlayer src={data.champion.bgm["theme"]} />
                )}
                {data.champion.bgm["gym_leader"] && (
                  <CustomAudioPlayer src={data.champion.bgm["gym_leader"]} />
                )}
                {data.champion.bgm["chance_of_victory"] && (
                  <CustomAudioPlayer src={data.champion.bgm["chance_of_victory"]} />
                )}
                {data.champion.bgm["elite_four"] && (
                  <CustomAudioPlayer src={data.champion.bgm["elite_four"]} />
                )}
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
