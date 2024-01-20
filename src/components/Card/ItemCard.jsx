import { Container,Title, ItemContainer,DetailInfo, Info,InfoBox, MainImage } from "./style";
import { TooltipWrapper, ToolTipBox } from "../Detail/style";
import { Spinner } from "@chakra-ui/spinner";
import { useParams, useNavigate } from "react-router-dom";
import useItemData from "../../hooks/Item/useItemData";
import Pagination from "react-js-pagination";
import { useEffect } from "react";

export default function ItemCard() {
  const { page } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useItemData(page);

  const handlePageChange = (newPage) => {
    navigate(`/item/${newPage}`);
  };

  useEffect(() => {
    // 페이지 변경 시에만 navigate 호출
      navigate(`/item/${page}`);
  }, [page]);

  if (isLoading) {
    return <Spinner />;
  }

  console.log(data);

return (
    <>
      <Title>도구 / 아이템 도감</Title>
        <Container>
          {data.item.map((_, index) => (
            <ItemContainer key={index}>
                <Info>
                  <InfoBox>no.{data.id[index]}</InfoBox>
                  <InfoBox>{data.name[index]}</InfoBox>
                </Info>
                <MainImage src={`${data.image[index]}`} />
                <TooltipWrapper>
                  <DetailInfo>상세 정보</DetailInfo>
                  <ToolTipBox>
                    {data.description[index]}
                  </ToolTipBox>
                </TooltipWrapper>
            </ItemContainer>
          ))}
        </Container>
        <Pagination
          activePage={parseInt(page)}
          itemsCountPerPage={21}
          totalItemsCount={1005}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
    </>
  );
}
