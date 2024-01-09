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
} from "../../api/pokemon/getPokemon";

export default function useDetailPokemon(id) {
  const queries = useQueries([
    { queryKey: "description", queryFn:()=> getPokemonDescription(id) },
    { queryKey: "official", queryFn:()=> getOfficialArtwork(id) },
    { queryKey: "official_shiny", queryFn:()=> getShinyOfficialArtwork(id) },
    { queryKey: "Height", queryFn:()=> getPokemonHeight(id) },
    { queryKey: "Genus", queryFn:()=> getPokemonGenus(id) },
    { queryKey: "Gender", queryFn:()=> getPokemonGender(id) },
    { queryKey: "Weight", queryFn:()=> getPokemonWeight(id) },
    { queryKey: "Ability", queryFn:()=> getPokemonAbility(id) },
    { queryKey: "AbilityDescription", queryFn:()=> getAbilityDescription(id) },
    { queryKey: "nameArray", queryFn:()=> getDetailNameArray(id) },
  ]);

  const isLoading = queries.some((query) => query.isLoading);

  const data = {
    description: queries[0].data,
    official: queries[1].data,
    shiny_official: queries[2].data,
    height: queries[3].data,
    genus: queries[4].data,
    gender: queries[5].data,
    weight: queries[6].data,
    ability: queries[7].data,
    abilityDescription: queries[8].data,
    nameArray: queries[9].data,
  };

  return { data, isLoading };
}
