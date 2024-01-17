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
    { queryKey: "pokemonId", queryFn: getPokemonID },
    { queryKey: "pokemonName", queryFn: getPokemonName },
    { queryKey: "pokemonImage", queryFn: getPokemonImage },
    { queryKey: "pokemonType", queryFn: getPokemonType },
    { queryKey: "pokemonKorType", queryFn: getKorPokemonType },
  ]);

  const isLoading = queries.some((query) => query.isLoading);

  const data = {
    id: queries[0].data,
    name: queries[1].data,
    image: queries[2].data,
    type: queries[3].data,
    korType: queries[4].data,
  };

  return { data, isLoading };
}
