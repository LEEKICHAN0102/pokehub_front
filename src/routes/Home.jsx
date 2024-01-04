import { useQuery } from "react-query";
import { getAllPokemons, getPokemonID, getPokemonImage } from "../api/pokemon/getPokemon";

export default function Home() {
  const { data: pokemon } = useQuery("pokemons", getAllPokemons);
  const { data: id } = useQuery("pokemonsId", getPokemonID);
  const { data: image } = useQuery("pokemonsImage", getPokemonImage);

  console.log(pokemon);
  console.log(id);
  console.log(image);

  return(
    <>
    </>
  )
}