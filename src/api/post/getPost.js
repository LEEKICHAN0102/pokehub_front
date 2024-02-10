import axios from "axios";

export const getAllPosting = async () => {
  try {
    const response = await axios.get("http://localhost:8080/board");
    return response.data;
  } catch (error) {
    console.error("모든 포스팅 정보 가져오는 중 에러 발생:", error);
  }
};

export const getPostingById = async (postId) => {
  try {
    const response = await axios.get(`http://localhost:8080/board/${postId}`);
    return response.data;
  } catch (error) {
    console.error("포스팅 Detail 정보 가져오는 중 에러 발생:", error);
  }
}

export const PostComment = async (postId) => {
  try {
    const response = await axios.post(`http://localhost:8080/board/${postId}`);
    return response.data;
  } catch (error) {
    console.error("댓글 포스팅 중 에러 발생:", error);
  }
}

export const PostReply = async (commentId) => {
  try {
    const response = await axios.post(`http://localhost:8080/board/${commentId}`);
    return response.data;
  } catch (error) {
    console.error("답글 포스팅 중 에러 발생:", error);
  }
}

export const PostLike = async (postId) => {
  try {
    const response = await axios.post(`http://localhost:8080/board/like/${postId}`);
    return response.data;
  } catch (error) {
    console.error("답글 포스팅 중 에러 발생:", error);
  }
}