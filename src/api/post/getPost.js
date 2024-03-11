import axios from "axios";
import { backEndUrl } from "../../constant/constant";

export const getAllPosting = async (page) => {
  try {
    const response = await axios.get(`${backEndUrl}/board/${page}`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("모든 포스팅 정보 가져오는 중 에러 발생:", error);
  }
};

export const getPostingById = async (postId) => {
  try {
    const response = await axios.get(`${backEndUrl}/board/detail/${postId}` , { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("포스팅 Detail 정보 가져오는 중 에러 발생:", error);
  }
}

export const PostComment = async (postId) => {
  try {
    const response = await axios.post(`${backEndUrl}/board/detail/${postId}`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("댓글 포스팅 중 에러 발생:", error);
  }
}

export const PostReply = async (commentId) => {
  try {
    const response = await axios.post(`${backEndUrl}/board/detail/${commentId}`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("답글 포스팅 중 에러 발생:", error);
  }
}

export const PostLike = async (postId) => {
  try {
    const response = await axios.post(`${backEndUrl}/board/detail/like/${postId}`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("답글 포스팅 중 에러 발생:", error);
  }
}