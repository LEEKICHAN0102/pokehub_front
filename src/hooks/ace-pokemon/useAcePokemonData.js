import { useQueries } from "react-query";
import {
  getPokemonImageByName
} from "../../api/pokemon/getPokemon";

export default function useAcePokemonData(acePokemon){
  const queries = useQueries([
    { queryKey: "acePokemon", queryFn:() => getPokemonImageByName(acePokemon) },
  ]);

  const isPokemonLoading = queries.some((query) => query.isLoading);

  const aceData = {
    acePokemon: queries[0].data,
  }

  return { aceData, isPokemonLoading };
}