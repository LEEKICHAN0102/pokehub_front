import axios from "axios";

export const getAllChampions = async () => {
  try {
    const response = await axios.get("http://localhost:8080/champion");
    return response.data;
  } catch (error) {
    console.error("Champion 정보를 가져오는 도중 에러 발생:", error);
  }
};

export const getByName = async (name) => {
  try {
    const response = await axios.get(`http://localhost:8080/champion/detail/${name}`);
    return response.data;
  } catch (error) {
    console.error("Champion 정보를 가져오는 도중 에러 발생:", error);
  }
};