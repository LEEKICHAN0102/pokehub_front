import { useRef,useEffect } from "react";
import { useParams } from "react-router-dom";
import useEliteFourDetailData from "../../hooks/elite-four/useEliteFourDetail";
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


export default function EliteFourDetail() {
  const name = useParams().name;
  const {data, isLoading} = useEliteFourDetailData(name);

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
          {data.eliteFour && data.eliteFour.image ? (
            <>
              <Official src={`${data.eliteFour.image.full}`} alt={`${data.eliteFour.name}`} />
              <Quote color={typeColor[data.eliteFour.type]}>{data.eliteFour.quote}</Quote>
            </>
          ) : (
            <Loader />
          )}
        </ImageQuote>
        <Info>
          {data.eliteFour ? (
            <>
              <Name>{data.eliteFour.name}</Name>
              <span>{data.eliteFour.region} 지방의 체육관 관장</span>
              <Information color={typeColor[data.eliteFour.type]}>
                {data.eliteFour.information}
              </Information>
              <MoreInfo>
                {data.eliteFour.bgm["battle"] && (
                  <CustomAudioPlayer src={data.eliteFour.bgm["battle"]} />
                )}
                {data.eliteFour.bgm["theme"] && (
                  <CustomAudioPlayer src={data.eliteFour.bgm["theme"]} />
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
