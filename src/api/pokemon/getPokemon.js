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
        const noneGeneration_V = response.data.sprites.other["showdown"]["front_default"];
        const noneAnimatedImage = response.data.sprites.front_default;
        // noneGeneration_V가 있는 경우
        if (noneGeneration_V !== null) {
          console.log(noneGeneration_V);
          return noneGeneration_V;
        }
        // noneAnimatedImage가 있는 경우
        else if (imageList === null) {
          console.log("hi");
          return noneAnimatedImage;
        }
        // 그 외의 경우
        else {
          return imageList;
        }
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

export const getPokemonDescription = async (id) => {
  try{
    const response = await axios.get(`${pokemon_URL}/pokemon-species/${id}`);
    const DescriptionList = response.data.flavor_text_entries.find((Object) => Object.language.name === "ko").flavor_text;
    return DescriptionList;
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

export const getOfficialArtwork = async(id) => {
  try{
    const response = await axios.get(`${pokemon_URL}/pokemon/${id}`);
    const data=response.data;

    const officialArtwork=data.sprites.other["official-artwork"].front_default;

    return officialArtwork;
  }catch (error){
    console.error('Error fetching data:', error);
  }
}

export const getShinyOfficialArtwork = async(id) => {
  try{
    const response = await axios.get(`${pokemon_URL}/pokemon/${id}`);
    const data=response.data;
    const shinyArtwork=data.sprites.other["official-artwork"].front_shiny;

    return shinyArtwork;
  }catch (error){
    console.error("포켓몬 이로치 response Error:", error);
  }
}

export const getPokemonHeight = async(id) => {
  try{
    const response = await axios.get(`${pokemon_URL}/pokemon/${id}`);
    const height= parseFloat((response.data.height * 0.1).toFixed(1));
    
    return height;
  }catch(error){
    console.error("포켓몬 신장 response Error:", error);
  }
}

export const getPokemonWeight = async(id) => {
  try{
    const response = await axios.get(`${pokemon_URL}/pokemon/${id}`);
    const weight= parseFloat((response.data.weight * 0.1).toFixed(1));

    return weight;
  }catch(error){
    console.error("포켓몬 몸무게 response Error:", error);
  }
}

export const getPokemonGenus = async(id) => {
  try{
    const response = await axios.get(`${pokemon_URL}/pokemon-species/${id}`);
    const data = response.data;
    const genus = data.genera.find((Object) => Object.language.name === "ko").genus;
    
    return genus;
  }catch(error){
    console.error("포켓몬 신장 response Error:", error);
  }
}

export const getPokemonGender = async (id) => {
  try {
    const speciesResponse = await axios.get(`${pokemon_URL}/pokemon-species/${id}`);
    const gender = speciesResponse.data.gender_rate;

    if (gender === -1) {
      return { type: "isNone", rate: gender }; // Genderless
    } else if (gender === 0) {
      return { type: "isMale", rate: gender }; // Male Only
    } else if (gender === 8) {
      return { type: "isFemale", rate: gender }; // Female Only
    } else {
      return { type: "isBoth", rate: gender }; // Both Male and Female
    }
  } catch (error) {
    console.error("포켓몬 성별 response Error:", error);
  }
};

export const getPokemonAbility = async (id) => {
  try {
    const response = await axios.get(`${pokemon_URL}/pokemon/${id}`);
    const data = response.data;
    
    const abilities = await Promise.all(data.abilities.map(async (ability) => {
      const abilityResponse = await axios.get(ability.ability.url);
      const abilityData = abilityResponse.data;
      return abilityData.names.find(name => name.language.name === 'ko').name;
    }));

    return abilities;
  } catch (error) {
    console.error("포켓몬 특성 response Error:", error);
  }
};

export const getAbilityDescription = async (id) => {
  try {
    const response = await axios.get(`${pokemon_URL}/pokemon/${id}`);
    const data = response.data;
    
    const abilitiesDescription = await Promise.all(data.abilities.map(async (ability) => {
      const abilityResponse = await axios.get(ability.ability.url);
      const abilityData = abilityResponse.data;
      return abilityData.flavor_text_entries.find((Object) => Object.language.name === 'ko').flavor_text;
    }));

    return abilitiesDescription;
  } catch (error) {
    console.error("포켓몬 신장 response Error:", error);
  }
};

// export const getDetailNameArray = async (id) => {
//   try {
//     // 포켓몬 이름을 가져오는 함수
//     const getPokemonName = async (pokemonId) => {
//       const modifiedId = (pokemonId === 1) ? 1010 : pokemonId || ((pokemonId === 1010) ? 1 : pokemonId);
//       const speciesResponse = await axios.get(`${pokemon_URL}/pokemon-species/${modifiedId}`);
//       const nameList = speciesResponse.data.names.find((obj) => obj.language.name === "ko")?.name;
//       return nameList;
//     };

//     // Promise.all을 사용하여 병렬로 여러 요청 보내기
//     const [prevResponse, currentResponse, nextResponse] = await Promise.all([
//       getPokemonName(id - 1),
//       getPokemonName(id),
//       getPokemonName(id + 1),
//     ]);

//     // 결과 배열 반환
//     return [prevResponse, currentResponse, nextResponse];
//   } catch (error) {
//     console.error("포켓몬 상세 배열 response Error:", error);
//   }
// };