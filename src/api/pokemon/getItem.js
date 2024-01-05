import axios from "axios";
import { pokemon_URL,offset,limit } from "../../constant";

export const getAllItem = async() => {
  try {
    const response = await axios.get(`${pokemon_URL}/item?offset=${offset}&limit=${limit}`);
    const itemList = response.data.results;
    
    const itemUrl = itemList.map((item) => item.url);

    return itemUrl;
  } catch (error) {
    console.error("아이템 리스트 response Error:", error);
  }
}

export const getItemId = async() => {
  try {
    // getAllPokemon result
    const urls = await getAllItem();
    
    // 각 URL에서 아이템의 ID를 추출
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

export const getKorItemDescription = async() => {
  const itemId = await getItemId();
  try {
    const ItemDescription = await Promise.all(
      itemId.map(async(id)=>{
        const response = await axios.get(`${pokemon_URL}/item/${id}`);
        const speciesData = response.data;

        // speciesData가 undefined일 경우에 대한 오류 처리
        if (!speciesData || !speciesData.flavor_text_entries) {
          throw new Error('아이템 데이터를 찾을 수 없습니다.');
        }

        // 한국어 번역을 찾거나 없는 경우 'en' (영어) 번역을 찾음
        const koreanItemDescriptionEntry = speciesData.flavor_text_entries.find(
          (entry) => entry.language.name === 'ko'
        ) || speciesData.flavor_text_entries.find((entry) => entry.language.name === 'en');

        // 해당 번역이 없을 경우에 대한 오류 처리
        if (!koreanItemDescriptionEntry) {
          throw new Error('아이템에 한국어 또는 영어 번역이 없습니다.');
        }

        // 설명을 가져오기
        const koreanItemDescription = koreanItemDescriptionEntry.text;

        return koreanItemDescription;
      }))
      return ItemDescription
  } catch (error) {
    console.error("아이템 설명 response Error:" , error);
  }
}

export const getItemImage = async() => {
  const itemId = await getItemId();
  try{
    const itemImage = await Promise.all(
      itemId.map(async(id)=>{
        const response = await axios.get(`${pokemon_URL}/item/${id}`);
        const data = response.data;

        // 이미지 URL 추출
        const imageURL = data.sprites.default;

        return imageURL;
      }))
      return itemImage;
  } catch (error) {
    console.error("아이템 이미지 response Error:" , error);
  }
}