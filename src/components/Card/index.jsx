import { Container,Title, CardContainer, Info, MainImage, Type, TypeBox, TypeImg } from "./style";
import typeIcons from "../../styles/typeIcon";
import colors from "../../styles/typeColor";
import usePokemonData from "../../hooks/Pokemon/usePokemonData";
import { Link } from "react-router-dom";
import Loader from "../Loader";

export default function PokemonCard() {
  const { data, isLoading } = usePokemonData();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Title>전국 도감</Title>
        <Container>
          {data.pokemon.map((_, item) => (
            <Link key={item} to={`/detail/${data.id[item]}`}>
              <CardContainer>
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
            </Link>
          ))}
        </Container>
    </>
  );
}
