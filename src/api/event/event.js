import axios from "axios";

export const getAllEvent = async () => {
  try {
    const response = await axios.get("http://localhost:8080/event");
    return response.data;
  } catch (error) {
    console.error("Event 정보를 가져오는 도중 에러 발생:", error);
  }
};
