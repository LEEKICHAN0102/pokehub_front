import axios from "axios";
import { backEndUrl } from "../../constant/constant";

export const getUserData = async () => {
  try {
    const response = await axios.get(`${backEndUrl}/pokemon/1`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.log("User 정보 가져오는 중 에러 발생:", error);
  }
};