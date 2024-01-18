import { useQueries } from "react-query";
import {
  getAllPokemon,
  getPokemonID,
  getPokemonImage,
  getPokemonName,
  getPokemonType,
  getKorPokemonType,
  getKorPokemonRegion,
} from "../../api/pokemon/getPokemon";

export default function usePokemonData(pages) {
  const queries = useQueries([
    { queryKey: "pokemon", queryFn: () => getAllPokemon(pages) },
    { queryKey: "pokemonId", queryFn: () => getPokemonID(pages) },
    { queryKey: "pokemonName", queryFn: () => getPokemonName(pages) },
    { queryKey: "pokemonImage", queryFn: () => getPokemonImage(pages) },
    { queryKey: "pokemonType", queryFn: () => getPokemonType(pages) },
    { queryKey: "pokemonKorType", queryFn: () => getKorPokemonType(pages) },
    { queryKey: "pokemonKorRegion", queryFn: () => getKorPokemonRegion(pages) },
  ]);

  const isLoading = queries.some((query) => query.isLoading);

  const data = {
    pokemon: queries[0].data,
    id: queries[1].data,
    name: queries[2].data,
    image: queries[3].data,
    type: queries[4].data,
    korType: queries[5].data,
    korRegion: queries[6].data,
  };

  return { data, isLoading };
}
