import axios from "axios";
import { pokemon_URL, limit } from "../../constant";

export const getAllPokemon = async(page) => {
  try {
    const pageOffset = (page - 1) * limit;
    const response = await axios.get(`${pokemon_URL}/pokemon?offset=${pageOffset}&limit=${limit}`);
    // 포켓몬 객체 데이터 return
    const pokemonList = response.data.results;
    
    // url 추출
    const pokemonURL = pokemonList.map((pokemon) => pokemon.url);
    
    return pokemonURL
  }catch(error) {
    console.error("포켓몬 리스트 response Error:" , error);
  }
}

export const getPokemonID = async (page) => {
  try {
    const urls = await getAllPokemon(page);

    // 각 URL에서 포켓몬의 ID를 추출
    const idList = urls
      .map((url) => {
        // URL에서 마지막 부분을 가져와서 숫자로 변환
        const idFromUrl = parseInt(url.split('/').slice(-2, -1)[0], 10);
        return idFromUrl;
      })
      // 조건을 추가하여 1025를 넘는 경우를 걸러냄
      .filter((id) => id <= 1025);

    return idList;
  } catch (error) {
    console.error("포켓몬 ID response Error:", error);
  }
};


export const getPokemonImage = async (page) => {
  const pokemonId = await getPokemonID(page);
  try{
    const image = await Promise.all(
      pokemonId.map(async(id) => {
        const response = await axios.get(`${pokemon_URL}/pokemon/${id}`);
        const animatedImageList = response.data.sprites.versions["generation-v"]["black-white"]["animated"]["front_default"];
        const noneGeneration_V = response.data.sprites.other["showdown"]["front_default"];
        const noneAnimatedImage = response.data.sprites.front_default;
        const none_Sprite = response.data.sprites.other["home"]["front_default"];
        // noneGeneration_V가 있는 경우
        if (animatedImageList !== null) {
          return animatedImageList;
        }
        // noneAnimatedImage가 있는 경우
        else if (noneGeneration_V !== null) {
          return noneGeneration_V;
        } 
        // 그 외의 경우
        else if (noneAnimatedImage !== null) {
          return noneAnimatedImage;
        }
        else if (none_Sprite !== null) {
          return none_Sprite;
        }
      }))
      return image;
  }catch(error){
    console.error("포켓몬 애니메이션 이미지 response Error:" , error);
  }
}

export const getPokemonName = async (page) => {
  const pokemonId = await getPokemonID(page);

  try {
    const name = await Promise.all(
      pokemonId.map(async (id) => {
        const response = await axios.get(`${pokemon_URL}/pokemon-species/${id}`);
        const nameList = response.data.names.find((Object) => Object.language.name === "ko");

        if (!nameList || nameList.name === undefined) {
          const jaNameList = response.data.names.find((Object) => Object.language.name === "ja");
          console.log("일본 : ", jaNameList ? jaNameList.name : "일본어 이름 없음");
          return jaNameList ? jaNameList.name : "일본어 이름 없음";
        } else {
          return nameList.name;
        }
      })
    );
    return name;
  } catch (error) {
    console.error("포켓몬 한국어 이름 response Error:", error);
  }
};

export const getPokemonDescription = async (id) => {
  try{
    try{
      const response = await axios.get(`${pokemon_URL}/pokemon-species/${id}`);
      const DescriptionList = response.data.flavor_text_entries.find((Object) => Object.language.name === "ko").flavor_text;
      return DescriptionList;
    } catch(error) {
      console.log("포켓몬 설명이 존재하지 않음 :", error);
      return "포켓몬 설명이 존재하지 않음";
    }
  }catch(error){
    console.error("포켓몬 한국어 설명 response Error:" , error);
  }
}

export const  getPokemonType = async(page) => {
  const pokemonId = await getPokemonID(page);
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

export const getKorPokemonType = async (page) => {
  const pokemonId = await getPokemonID(page);
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

export const getKorPokemonRegion = async (page) => {
  try {
    const pokemonId = await getPokemonID(page);

    const korRegion = await Promise.all(
      pokemonId.map(async (id) => {
        try {
          const response = await axios.get(`${pokemon_URL}/pokemon-species/${id}`);
          const data = response.data;

          const dexNum = data.pokedex_numbers[1];
          const dexArr = await axios.get(dexNum.pokedex.url);

          const regionUrl = await axios.get(dexArr.data.region.url);

          const korData = regionUrl.data.names;
          const korReg = korData.find((nameInfo) => nameInfo.language.name === "ko");
          const korRegName = korReg.name;

          return korRegName;
        } catch(error) {
          console.log(`포켓몬 ID ${id}의 한국어 지역 정보를 가져오는 중 에러 발생 :` , error);
          return "불명확";
        }
      })
    );

    return korRegion;
  } catch (error) {
    console.error("포켓몬 ID를 가져오는 중 에러 발생:", error);
    return [];
  }
};


export const getOfficialArtwork = async (id) => {
  try {
    const response = await axios.get(`${pokemon_URL}/pokemon/${id}`);
    const data = response.data;

    const officialArtwork = data.sprites.other["official-artwork"].front_default;

    if (!officialArtwork) {
      const none_officialArtwork = data.sprites.other.home.front_default;
      console.log("No officialArtwork found, using none_officialArtwork");
      return none_officialArtwork;
    }

    return officialArtwork;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getShinyOfficialArtwork = async(id) => {
  try{
    const response = await axios.get(`${pokemon_URL}/pokemon/${id}`);
    const data = response.data;
    const shinyArtwork = data.sprites.other["official-artwork"].front_shiny;
    const shinyArtwork_Home = data.sprites.other["home"].front_shiny;
      if (shinyArtwork !== null) {
        return shinyArtwork
      }
      else if (shinyArtwork_Home !== null) {
        return shinyArtwork_Home;
      }
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

export const getPokemonGenus = async (id) => {
  try {
    const response = await axios.get(`${pokemon_URL}/pokemon-species/${id}`);
    const data = response.data;

    // genus를 찾아서 가져오기, 없으면 "분류 없음" 반환
    const genusObject = data.genera.find((Object) => Object.language.name === "ko");

    if (genusObject && genusObject.genus !== undefined) {
      return genusObject.genus;
    } else {
      return "분류 없음";
    }
  } catch (error) {
    console.error("포켓몬 분류 response Error:", error);
  }
};

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

      // 특성 이름을 찾아 가져오기, 없으면 "특성 없음" 반환
      const abilityNameObject = abilityData.names.find(name => name.language.name === 'ko');

      if (abilityNameObject && abilityNameObject.name !== undefined) {
        return abilityNameObject.name;
      } else {
        return "특성 없음";
      }
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

      const abilityDescriptionObject = abilityData.flavor_text_entries.find((Object) => Object.language.name === 'ko');

      if (abilityDescriptionObject && abilityDescriptionObject.flavor_text !== undefined) {
        return abilityDescriptionObject.flavor_text;
      } else {
        return "능력 없음";
      }
    }));

    return abilitiesDescription;
  } catch (error) {
    console.error("포켓몬 능력 response Error:", error);
  }
};

export const getDetailNameArray = async (id) => {
  try {
    const getPokemonName = async (pokemonId, language) => {
      let adjustedId;

      if (pokemonId === 1026) {
        adjustedId = 1;
      } else if (pokemonId === 0) {
        adjustedId = 1025;
      } else {
        adjustedId = pokemonId;
      }

      const speciesResponse = await axios.get(`${pokemon_URL}/pokemon-species/${adjustedId}`);
      const nameList = speciesResponse.data.names.find((obj) => obj.language.name === language)?.name;
      return nameList;
    };

    const [prevResponse, currentResponse, nextResponse] = await Promise.all([
      getPokemonName(Number(id) - 1, "ko"),
      getPokemonName(id, "ko"),
      getPokemonName(Number(id) + 1, "ko"),
    ]);

    // 예외 처리: 만약 ko language로 가져온 nameList가 null이면 ja language로 가져오도록 설정
    const prevNameList = prevResponse ?? await getPokemonName(Number(id) - 1, "ja");
    const currentNameList = currentResponse ?? await getPokemonName(id, "ja");
    const nextNameList = nextResponse ?? await getPokemonName(Number(id) + 1, "ja");

    return [prevNameList, currentNameList, nextNameList];
  } catch (error) {
    console.error("포켓몬 상세 배열 response Error:", error);
  }
};


export const getPokemonClass = async(id) => {
  try{
    const response = await axios.get(`${pokemon_URL}/pokemon-species/${id}`);
    const data = response.data;
    const isLegendary = data.is_legendary;
    const isMythical = data.is_mythical;
    if(isLegendary){
      return "전설의 포켓몬"
    } else if(isMythical) {
      return "환상의 포켓몬"
    } else {
      return "일반 포켓몬"
    }
  }catch(error){
    console.error("포켓몬 등급 response Error:", error);
  }
}

export const getPokemonImageByNumber = async (ace) => {
  try{
      const response = await axios.get(`${pokemon_URL}/pokemon/${ace}`);
      const animatedImageList = response.data.sprites.versions["generation-v"]["black-white"]["animated"]["front_default"];
      const noneGeneration_V = response.data.sprites.other["showdown"]["front_default"];
      const noneAnimatedImage = response.data.sprites.front_default;
        // noneGeneration_V가 있는 경우
        if (animatedImageList !== null) {
          return animatedImageList;
        }
        // noneAnimatedImage가 있는 경우
        else if (noneGeneration_V !== null) {
          return noneGeneration_V;
        }
        // 그 외의 경우
        else if (noneAnimatedImage !== null) {
          return noneAnimatedImage;
        }
  }catch(error){
    console.error("포켓몬 애니메이션 이미지 by ace response Error:" , error);
  }
}