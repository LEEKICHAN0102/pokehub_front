import axios from "axios";
import { pokemon_URL,offset,limit } from "../../constant";

export const getAllPokemons = async() => {
  try {
    const response = await axios.get(`${pokemon_URL}pokemon?offset=${offset}&limit=${limit}`);
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
    // getAllPokemons result
    const urls = await getAllPokemons();
    
    // 각 URL에서 포켓몬의 ID를 추출
    const idList = urls.map(url => {
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
  try{
    const ids = await getPokemonID();

    const image = await axios.get(`${pokemon_URL}/pokemon/${ids}`)

    const imageList = image.sprites.versions['generation-v']["black-white"]['animated'].front_default;

    return imageList;
  }catch(error){
    console.error("포켓몬 애니메이션 이미지 response Error:" , error);
  }
}