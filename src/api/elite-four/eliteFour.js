import axios from "axios";
import { backEndUrl } from "../../constant/constant";

export const getAllEliteFour = async () => {
  try {
    const response = await axios.get(`${backEndUrl}/elite-four`);
    return response.data;
  } catch (error) {
    console.error("Elite-Four 정보를 가져오는 도중 에러 발생:", error);
  }
};

export const getByOrder = async (order) => {
  try {
    const response = await axios.get(`${backEndUrl}/elite-four/detail/${order}`);
    return response.data;
  } catch (error) {
    console.error("Elite-Four 정보를 가져오는 도중 에러 발생:", error);
  }
};

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