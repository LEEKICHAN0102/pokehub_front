import { useParams } from "react-router-dom";
import useDetailPokemon from "../../hooks/Pokemon/useDetail";
import Loader from "../Loader";
import { IoIosHome } from "react-icons/io";
import { FaChevronCircleLeft,FaChevronCircleRight } from "react-icons/fa";
import ContentList from "./ContentList";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { 
  Navigation,
  PrevNav,
  Name,
  NavDiv,
  NextNav,
  Container,
  Official,
  Info,
  Description,
  MoreInfo,
  OfficialBox,
} from "./style";

export default function DetailPokemon() {
  const id = useParams().id;
  const navigate = useNavigate();
  const { data, isLoading } = useDetailPokemon(id);
  const [shiny, setShiny] = useState(false);

  const prevId = Number(id)-1 === 0 ? 1025 : Number(id) - 1;
  const nextId = Number(id)+ 1 === 1026 ? 1 : Number(id) + 1;

  const handleBack = () => {
    const dividePage_PER_ID = Math.ceil(id / 21);
    navigate(`/pokemon/${dividePage_PER_ID}`);
  }
  
  if (isLoading) {
    return <Loader />;
  }

  return(
    <>
      <Navigation>
        <PrevNav href={`/detail/${prevId}`}>
          No. {prevId}
          <Name>{data.nameArray && data.nameArray[0]}</Name>
          <FaChevronCircleLeft size={36} />
        </PrevNav>
          <NavDiv />
        <NextNav href={`/detail/${nextId}`}>
          No .{nextId}
          <Name>{data.nameArray && data.nameArray[2]}</Name>
          <FaChevronCircleRight size={36} />
        </NextNav>
      </Navigation>
      <Container>
        <OfficialBox>
          <IoIosHome size={24} onClick={handleBack} />
          <Official
            src={shiny ? data.official_shiny : data.official}
            alt={`${data.nameArray[1]}`}
            onMouseEnter={() => setShiny(true)}
            onMouseLeave={() => setShiny(false)}
          />
        </OfficialBox>
        <Info>
          <span>No. {id}</span>
          <Name>{data.nameArray && data.nameArray[1]}</Name>
          <Description>{data.description}</Description>
          <MoreInfo>
            <ContentList data={data} />
          </MoreInfo>
        </Info>
      </Container>
    </>
  )
}
