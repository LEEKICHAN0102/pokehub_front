import { useQueries } from "react-query";
import {
  getPokemonID,
  getPokemonImage,
  getPokemonName,
  getPokemonType,
  getKorPokemonType,
} from "../../api/pokemon/getPokemon";

export default function usePokemonData() {
  const queries = useQueries([
    { queryKey: "pokemon", queryFn: getPokemonID },
    { queryKey: "pokemonId", queryFn: getPokemonID },
    { queryKey: "pokemonName", queryFn: getPokemonName },
    { queryKey: "pokemonImage", queryFn: getPokemonImage },
    { queryKey: "pokemonType", queryFn: getPokemonType },
    { queryKey: "pokemonKorType", queryFn: getKorPokemonType },
  ]);

  const isLoading = queries.some((query) => query.isLoading);

  const data = {
    pokemon: queries[0].data,
    id: queries[1].data,
    name: queries[2].data,
    image: queries[3].data,
    type: queries[4].data,
    korType: queries[5].data,
  };

  return { data, isLoading };
}
