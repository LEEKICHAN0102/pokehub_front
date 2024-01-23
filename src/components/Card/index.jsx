import { useEffect } from "react";
import { Container, CardContainer, Info, InfoBox, MainImage, Type, TypeBox, TypeImg } from "./style";
import Title from "../Title";
import typeIcons from "../../styles/typeIcon";
import colors from "../../styles/typeColor";
import usePokemonData from "../../hooks/Pokemon/usePokemonData";
import { Link, useParams, useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";
import "../../styles/Paging.css";
import Loader from "../Loader";

export default function PokemonCard() {
  const { page } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = usePokemonData(page);

  const handlePageChange = (newPage) => {
    navigate(`/page/${newPage}`);
  };

  useEffect(() => {
    // 페이지 변경 시에만 navigate 호출
      navigate(`/page/${page}`);
  }, [page]);

  if (isLoading) {
    return <Loader />;
  }

  console.log(data); 
  
  return (
    <>
      <Title name="포켓몬 도감" />
      <Container>
        {data.id.map((_, item) => (
          <Link key={item} to={`/detail/${data.id[item]}`}>
            <CardContainer color={data.type[item].map(typeItem => colors[typeItem])}>
              <Info>
                <InfoBox>
                  no.{data.id[item]}
                </InfoBox>
                <InfoBox>
                  {data.name[item]}
                </InfoBox>
              </Info>
              <MainImage src={`${data.image[item]}`} alt={`${data.name[item]}`} />
              <Type>
                {data.type[item].map((typeItem, typeIndex) => (
                  <TypeBox key={typeIndex} color={`${colors[typeItem]}`}>
                    <TypeImg src={`${typeIcons[typeItem]}`} />
                    {data.korType[item][typeIndex]}
                  </TypeBox>
                ))}
              </Type>
            </CardContainer>
          </Link>
        ))}
      </Container>
      <Pagination
        activePage={parseInt(page)}
        itemsCountPerPage={21}
        totalItemsCount={1025}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </>
  );
}
