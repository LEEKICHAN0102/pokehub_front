import axios from "axios";
import { backEndUrl } from "../../constant/constant";

/**포켓몬스터 모든 챔피언 정보를 가져오는 함수*/
export const getAllChampions = async () => {
  try {
    const response = await axios.get(`${backEndUrl}/champion`);
    return response.data;
  } catch (error) {
    console.error("Champion 정보를 가져오는 도중 에러 발생:", error);
  }
};

/**포켓몬스터 챔피언의 디테일 정보를 가져오는 함수*/
export const getByOrder = async (order) => {
  try {
    const response = await axios.get(`${backEndUrl}/champion/detail/${order}`);
    return response.data;
  } catch (error) {
    console.error("Champion 정보를 가져오는 도중 에러 발생:", error);
  }
};

/**포켓몬스터 챔피언 내비게이션을 위한 배열을 가져오는 함수*/
export const getChampionArray = async ({prevOrder , nextOrder}) => {
  try{
    const prevNameResponse = await axios.get(`${backEndUrl}/champion/detail/${prevOrder}`);
    const nextNameResponse = await axios.get(`${backEndUrl}/champion/detail/${nextOrder}`);

    const prevName = prevNameResponse.data.name;
    const nextName = nextNameResponse.data.name;

    return { prevName, nextName };
  } catch (error) {
    console.error("Champion Array 정보를 가져오는 도중 에러 발생:", error);
  }
};