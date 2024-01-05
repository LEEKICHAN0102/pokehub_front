import axios from "axios";
import { pokemon_URL,offset,limit } from "../../constant";

export const getAllPokemon = async() => {
  try {
    const response = await axios.get(`${pokemon_URL}/pokemon?offset=${offset}&limit=${limit}`);
    // 포켓몬 객체 데이터 return
    const pokemonList = response.data.results;
    
    // url 추출
    const pokemonURL = pokemonList.map((pokemon) => pokemon.url);
    
    return pokemonURL
  }catch(error) {
    console.error("포켓몬 리스트 response Error:" , error);
  }
}

export const getPokemonID = async()=> {
  try {
    // getAllPokemon result
    const urls = await getAllPokemon();
    
    // 각 URL에서 포켓몬의 ID를 추출
    const idList = urls.map((url) => {
      // URL에서 마지막 부분을 가져와서 숫자로 변환
      const idFromUrl = parseInt(url.split('/').slice(-2, -1)[0], 10);
      return idFromUrl;
    });

    return idList;
  } catch(error) {
    console.error("포켓몬 ID response Error:" , error);
  }
}

export const getPokemonImage = async () => {
  const pokemonId = await getPokemonID();
  try{
    const image = await Promise.all(
      pokemonId.map(async(id) => {
        const response = await axios.get(`${pokemon_URL}/pokemon/${id}`);
        const imageList = response.data.sprites.versions["generation-v"]["black-white"]["animated"]["front_default"];
        return imageList;
      }))
      return image;
  }catch(error){
    console.error("포켓몬 애니메이션 이미지 response Error:" , error);
  }
}

export const getPokemonName = async () => {
  const pokemonId = await getPokemonID();
  try{
    const name = await Promise.all(
      pokemonId.map(async(id) => {
        const response = await axios.get(`${pokemon_URL}/pokemon-species/${id}`);
        const nameList = response.data.names.find((Object) => Object.language.name === "ko").name;
        return nameList;
      }))
      return name;
  }catch(error){
    console.error("포켓몬 한국어 이름 response Error:" , error);
  }
}

export const getPokemonDescription = async () => {
  const pokemonId = await getPokemonID();
  try{
    const description = await Promise.all(
      pokemonId.map(async(id) => {
        const response = await axios.get(`${pokemon_URL}/pokemon-species/${id}`);
        const DescriptionList = response.data.flavor_text_entries.find((Object) => Object.language.name === "ko").flavor_text;
        return DescriptionList;
      }))
      return description;
  }catch(error){
    console.error("포켓몬 한국어 설명 response Error:" , error);
  }
}

export const  getPokemonType = async() => {
  const pokemonId = await getPokemonID();
  try {
    const type = await Promise.all(
      pokemonId.map(async(id) => {
        const response = await axios.get(`${pokemon_URL}/pokemon/${id}`);
        const data = response.data;

      if (!data || !data.types || data.types.length === 0) {
        return "Unknown";
      }
      const types = data.types.map(typeInfo => typeInfo.type.name);

      return types;
    }))
    return type;
  } catch (error) {
    console.error("포켓몬 타입 response Error:" , error);
  }
}

export const getKorPokemonType = async () => {
  const pokemonId = await getPokemonID();
  try {
    const korType = await Promise.all(
      pokemonId.map(async(id)=>{
        const response = await axios.get(`${pokemon_URL}/pokemon/${id}`);
        const data = response.data;

        const types = data.types.map((typeInfo) => {
          return axios.get(typeInfo.type.url);
        });

        const typeResponses = await Promise.all(types);

        const koreanTypes = typeResponses.map((typeResponse) => {
          const names = typeResponse.data.names;
          const koreanNameInfo = names.find((nameInfo) => nameInfo.language.name === "ko");
          return koreanNameInfo ? koreanNameInfo.name : "번역 없음";
      });

      return koreanTypes;
    }))
    return korType;
  } catch (error) {
    console.error("포켓몬 한국어 타입 response Error:" , error);
  }
}

export const getOfficialArtwork = async() => {
  const pokemonId = await getPokemonID();
  try{
    const official = await Promise.all(
      pokemonId.map(async(id)=>{
        const response = await axios.get(`${pokemon_URL}/pokemon/${id}`);
        const data=response.data;

      const officialArtwork=data.sprites.other["official-artwork"].front_default;

      return officialArtwork;
    }))
    return official;
  }catch (error){
    console.error('Error fetching data:', error);
  }
}

export const getShinyOfficialArtwork = async() => {
  const pokemonId = await getPokemonID();
  try{
    const shiny = await Promise.all(
      pokemonId.map(async(id)=>{
        const response = await axios.get(`${pokemon_URL}/pokemon/${id}`);
        const data=response.data;
        const shinyArtwork=data.sprites.other["official-artwork"].front_shiny;

        return shinyArtwork;
      }))
      return shiny;
  }catch (error){
    console.error("포켓몬 이로치 response Error:", error);
  }
}