import { Container,Title, CardContainer, Info, MainImage, Type, TypeBox, TypeImg } from "./style";
import typeIcons from "../../styles/typeIcon";
import colors from "../../styles/typeColor";
import { Spinner } from "@chakra-ui/spinner";
import usePokemonData from "../../hooks/Pokemon/usePokemonData";

export default function PokemonCard() {
  const { data, isLoading } = usePokemonData();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Title>전국 도감</Title>
        <Container>
          {data.pokemon.map((_, item) => (
            <CardContainer key={item}>
              <Info>
                <span>no.{data.id[item]}</span>
                <span>{data.name[item]}</span>
              </Info>
              <MainImage src={`${data.image[item]}`} alt={`${data.name[item]}`} />
              <Type>
                {data.type[item].map((typeItem, typeIndex) => (
                  <TypeBox key={typeIndex} colors={`${colors[typeItem]}`}>
                    <TypeImg src={`${typeIcons[typeItem]}`} />
                    {data.korType[item][typeIndex]}
                  </TypeBox>
                ))}
              </Type>
            </CardContainer>
          ))}
        </Container>
    </>
  );
}
