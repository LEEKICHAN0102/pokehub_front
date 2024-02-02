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

export default function usePokemonData(page) {
  const queries = useQueries([
    { queryKey: ["pokemon", page], queryFn: () => getAllPokemon(page) },
    { queryKey: ["id", page], queryFn: () => getPokemonID(page) },
    { queryKey: ["name", page], queryFn: () => getPokemonName(page) },
    { queryKey: ["image", page], queryFn: () => getPokemonImage(page) },
    { queryKey: ["type", page], queryFn: () => getPokemonType(page) },
    { queryKey: ["korType", page], queryFn: () => getKorPokemonType(page) },
    { queryKey: ["korRegion", page], queryFn: () => getKorPokemonRegion(page) },
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
