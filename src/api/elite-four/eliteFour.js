import axios from "axios";
import { backEndUrl } from "../../constant/constant";

/**포켓몬스터 모든 사천왕 정보를 가져오는 함수*/
export const getAllEliteFour = async () => {
  try {
    const response = await axios.get(`${backEndUrl}/elite-four`);
    return response.data;
  } catch (error) {
    console.error("Elite-Four 정보를 가져오는 도중 에러 발생:", error);
  }
};

/**포켓몬스터 사천왕의 디테일 정보를 가져오는 함수*/
export const getByOrder = async (order) => {
  try {
    const response = await axios.get(`${backEndUrl}/elite-four/detail/${order}`);
    return response.data;
  } catch (error) {
    console.error("Elite-Four 정보를 가져오는 도중 에러 발생:", error);
  }
};

/**포켓몬스터 사천왕 내비게이션을 위한 배열을 가져오는 함수*/
export const getEliteArray = async ({prevOrder , nextOrder}) => {
  try{
    const prevNameResponse = await axios.get(`${backEndUrl}/elite-four/detail/${prevOrder}`);
    const nextNameResponse = await axios.get(`${backEndUrl}/elite-four/detail/${nextOrder}`);

    const prevName = prevNameResponse.data.name;
    const nextName = nextNameResponse.data.name;

    return { prevName, nextName };
  } catch (error) {
    console.error("Elite Four Array 정보를 가져오는 도중 에러 발생:", error);
  }
};