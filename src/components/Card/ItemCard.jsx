import { Container,Title, CardContainer, Info, MainImage } from "./style";
import { Spinner } from "@chakra-ui/spinner";
import useItemData from "../../hooks/Item/useItemData";

export default function ItemCard() {
  const { data, isLoading } = useItemData();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Title>도구 / 아이템 도감</Title>
        <Container>
          {data.item.map((_, index) => (
            <CardContainer key={index}>
              <Info>
                <span>no.{data.id[index]}</span>
                <span>{data.name[index]}</span>
              </Info>
              <MainImage src={`${data.image[index]}`} alt />
            </CardContainer>
          ))}
        </Container>
    </>
  );
}
