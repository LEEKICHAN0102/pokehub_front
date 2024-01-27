import axios from "axios";

export const getAllPosting = async () => {
  try {
    const response = await axios.get("http://localhost:8080/board");
    return response.data;
  } catch (error) {
    console.error("모든 포스팅 정보 가져오는 중 에러 발생:", error);
  }
};