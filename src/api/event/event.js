import axios from "axios";
import { backEndUrl } from "../../constant/constant";

export const getAllEvent = async () => {
  try {
    const response = await axios.get(`${backEndUrl}/event`);
    return response.data;
  } catch (error) {
    console.error("Event 정보를 가져오는 도중 에러 발생:", error);
  }
};
