import { useQuery } from "react-query";
import { getAllPokemon, getPokemonID, getPokemonImage ,getPokemonName, getPokemonDescription, getPokemonType, getKorPokemonType, getShinyOfficialArtwork, getOfficialArtwork } from "../api/pokemon/getPokemon";
import { getAllItem, getItemId, getItemImage, getKorItemDescription } from "../api/pokemon/getItem";

export default function Home() {
  const { data: pokemon } = useQuery("pokemon", getAllPokemon);
  const { data: id } = useQuery("pokemonId", getPokemonID);
  const { data: image } = useQuery("pokemonImage", getPokemonImage);
  const { data: name } = useQuery("pokemonName", getPokemonName);
  const { data: desc } = useQuery("pokemonDescription", getPokemonDescription);
  const { data: type } = useQuery("pokemonType", getPokemonType);
  const { data: korType } = useQuery("korPokemonType", getKorPokemonType);
  const { data: official } = useQuery("pokemonOfficial", getOfficialArtwork);
  const { data: shiny } = useQuery("pokemonShiny", getShinyOfficialArtwork);

  const { data: item } = useQuery("item", getAllItem);
  const { data: itemId } = useQuery("itemId", getItemId);
  const { data: itemImg } = useQuery("itemImage", getItemImage);
  const { data: itemDesc } = useQuery("itemDescription", getKorItemDescription);

  return(
    <>
    </>
  )
}