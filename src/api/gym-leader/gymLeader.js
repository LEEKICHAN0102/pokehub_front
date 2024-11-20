import axios from "axios";
import { backEndUrl } from "../../constant/constant";

/**포켓몬스터 모든 체육관 관장 정보를 가져오는 함수*/
export const getAllGymLeaders = async () => {
  try {
    const response = await axios.get(`${backEndUrl}gym-leader`);
    return response.data;
  } catch (error) {
    console.error("Gym Leader 정보를 가져오는 도중 에러 발생:", error);
  }
};

/**포켓몬스터 체육관 관장의 디테일 정보를 가져오는 함수*/
export const getByOrder = async (order) => {
  try {
    const response = await axios.get(`${backEndUrl}gym-leader/detail/${order}`);
    return response.data;
  } catch (error) {
    console.error("Gym Leader 정보를 가져오는 도중 에러 발생:", error);
  }
};

/**포켓몬스터 체육관 관장 내비게이션을 위한 배열을 가져오는 함수*/
export const getLeaderArray = async ({prevOrder , nextOrder}) => {
  try{
    const prevNameResponse = await axios.get(`${backEndUrl}gym-leader/detail/${prevOrder}`);
    const nextNameResponse = await axios.get(`${backEndUrl}gym-leader/detail/${nextOrder}`);

    const prevName = prevNameResponse.data.name;
    const nextName = nextNameResponse.data.name;

    return { prevName, nextName };
  } catch (error) {
    console.error("Gym Leader Array 정보를 가져오는 도중 에러 발생:", error);
  }
};