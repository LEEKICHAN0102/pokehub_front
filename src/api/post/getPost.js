import axios from "axios";
import { backEndUrl } from "../../constant/constant";

export const getAllPosting = async (page) => {
  try {
    const response = await axios.get(`${backEndUrl}/board/${page}`);
    return response.data;
  } catch (error) {
    console.error("모든 포스팅 정보 가져오는 중 에러 발생:", error);
  }
};

export const getPostingById = async (postId) => {
  try {
    const response = await axios.get(`${backEndUrl}/board/detail/${postId}`);
    return response.data;
  } catch (error) {
    console.error("포스팅 Detail 정보 가져오는 중 에러 발생:", error);
  }
}
