import axios from "axios";

export const getAllPosting = async (page) => {
  try {
    const response = await axios.get(`http://localhost:8080/board/${page}`);
    return response.data;
  } catch (error) {
    console.error("모든 포스팅 정보 가져오는 중 에러 발생:", error);
  }
};

export const getPostingById = async (postId) => {
  try {
    const response = await axios.get(`http://localhost:8080/board/detail/${postId}`);
    return response.data;
  } catch (error) {
    console.error("포스팅 Detail 정보 가져오는 중 에러 발생:", error);
  }
}

export const PostComment = async (postId) => {
  try {
    const response = await axios.post(`http://localhost:8080/board/detail/${postId}`);
    return response.data;
  } catch (error) {
    console.error("댓글 포스팅 중 에러 발생:", error);
  }
}

export const PostReply = async (commentId) => {
  try {
    const response = await axios.post(`http://localhost:8080/board/detail/${commentId}`);
    return response.data;
  } catch (error) {
    console.error("답글 포스팅 중 에러 발생:", error);
  }
}

export const PostLike = async (postId) => {
  try {
    const response = await axios.post(`http://localhost:8080/board/detail/like/${postId}`);
    return response.data;
  } catch (error) {
    console.error("답글 포스팅 중 에러 발생:", error);
  }
}