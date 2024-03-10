import axios from "axios";
import { backEndUrl } from "../../constant/constant";

export const getAllGymLeaders = async () => {
  try {
    const response = await axios.get(`${backEndUrl}/gym-leader`);
    return response.data;
  } catch (error) {
    console.error("Gym Leader 정보를 가져오는 도중 에러 발생:", error);
  }
};

export const getByOrder = async (order) => {
  try {
    const response = await axios.get(`${backEndUrl}/gym-leader/detail/${order}`);
    return response.data;
  } catch (error) {
    console.error("Gym Leader 정보를 가져오는 도중 에러 발생:", error);
  }
};

export const getLeaderArray = async ({prevOrder , nextOrder}) => {
  try{
    const prevNameResponse = await axios.get(`${backEndUrl}/gym-leader/detail/${prevOrder}`);
    const nextNameResponse = await axios.get(`${backEndUrl}/gym-leader/detail/${nextOrder}`);

    const prevName = prevNameResponse.data.name;
    const nextName = nextNameResponse.data.name;

    return { prevName, nextName };
  } catch (error) {
    console.error("Gym Leader Array 정보를 가져오는 도중 에러 발생:", error);
  }
};