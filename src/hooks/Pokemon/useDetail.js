import { useQueries } from "react-query";
import {
  getPokemonDescription,
  getOfficialArtwork,
  getShinyOfficialArtwork,
  getPokemonHeight,
  getPokemonGenus,
  getPokemonGender,
  getPokemonWeight,
  getPokemonAbility,
  getAbilityDescription,
  getDetailNameArray,
  getPokemonClass,
} from "../../api/pokemon/getPokemon";

export default function useDetailPokemon(id) {
  const queries = useQueries([
    { queryKey: ["description", id], queryFn:()=> getPokemonDescription(id) },
    { queryKey: ["official", id], queryFn:()=> getOfficialArtwork(id) },
    { queryKey: ["official_shiny", id], queryFn:()=> getShinyOfficialArtwork(id) },
    { queryKey: ["height", id], queryFn:()=> getPokemonHeight(id) },
    { queryKey: ["genus", id], queryFn:()=> getPokemonGenus(id) },
    { queryKey: ["gender", id], queryFn:()=> getPokemonGender(id) },
    { queryKey: ["weight", id], queryFn:()=> getPokemonWeight(id) },
    { queryKey: ["ability", id], queryFn:()=> getPokemonAbility(id) },
    { queryKey: ["abilityDescription", id], queryFn:()=> getAbilityDescription(id) },
    { queryKey: ["nameArray", id], queryFn:()=> getDetailNameArray(id) },
    { queryKey: ["class", id], queryFn:()=> getPokemonClass(id) },
  ]);

  const isLoading = queries.some((query) => query.isLoading);

  const data = {
    description: queries[0].data,
    official: queries[1].data,
    official_shiny: queries[2].data,
    height: queries[3].data,
    genus: queries[4].data,
    gender: queries[5].data,
    weight: queries[6].data,
    ability: queries[7].data,
    abilityDescription: queries[8].data,
    nameArray: queries[9].data,
    class: queries[10].data,
  };

  return { data, isLoading };
}
