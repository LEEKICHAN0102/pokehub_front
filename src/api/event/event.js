import axios from "axios";
import { backEndUrl } from "../../constant/constant";

/**pokemonkorea의 news 탭에서 이벤트 게시글 정보를 가져오는 함수*/
export const getAllEvent = async () => {
  try {
    const response = await axios.get(`${backEndUrl}/event`);
    return response.data;
  } catch (error) {
    console.error("Event 정보를 가져오는 도중 에러 발생:", error);
  }
};
