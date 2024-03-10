import axios from "axios";
import { backEndUrl } from "../../constant/constant";

export const getAllChampions = async () => {
  try {
    const response = await axios.get(`${backEndUrl}/champion`);
    console.log(backEndUrl);
    return response.data;
  } catch (error) {
    console.error("Champion 정보를 가져오는 도중 에러 발생:", error);
  }
};

export const getByOrder = async (order) => {
  try {
    const response = await axios.get(`${backEndUrl}/champion/detail/${order}`);
    return response.data;
  } catch (error) {
    console.error("Champion 정보를 가져오는 도중 에러 발생:", error);
  }
};

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