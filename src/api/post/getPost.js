import axios from "axios";
import { backEndUrl } from "../../constant/constant";

/**모든 게시글 정보를 가져오기 위한 함수 */
export const getAllPosting = async (page) => {
  try {
    const response = await axios.get(`${backEndUrl}/board/${page}`);
    return response.data;
  } catch (error) {
    console.error("모든 포스팅 정보 가져오는 중 에러 발생:", error);
  }
};

/**게시글의 디테일 정보를 가져오기 위한 함수 */
export const getPostingById = async (postId) => {
  try {
    const response = await axios.get(`${backEndUrl}/board/detail/${postId}`);
    return response.data;
  } catch (error) {
    console.error("포스팅 Detail 정보 가져오는 중 에러 발생:", error);
  }
}
