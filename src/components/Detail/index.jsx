import { useParams } from "react-router-dom";
import useDetailPokemon from "../../hooks/Pokemon/useDetail";
import Loader from "../Loader";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaChevronCircleLeft,FaChevronCircleRight } from "react-icons/fa";
import ContentList from "./ContentList";
import { useNavigate } from "react-router-dom";

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

  console.log(data);

  const prevId = Number(id)-1 === 0 ? 1025 : Number(id) - 1;
  const nextId = Number(id)+ 1 === 1026 ? 1 : Number(id) + 1;

  if (isLoading) {
    return <Loader />;
  }

  const handleBack = () => {
    navigate(-1)
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
          <FaArrowLeftLong size={24} onClick={handleBack} />
          <Official src={`${data.official}`} alt={`${data.nameArray[1]}`} />
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
