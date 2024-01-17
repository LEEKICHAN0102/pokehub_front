import axios from "axios";

export const getAllEliteFour = async () => {
  try {
    const response = await axios.get("http://localhost:8080/elite-four");
    return response.data;
  } catch (error) {
    console.error("Elite-Four 정보를 가져오는 도중 에러 발생:", error);
  }
};

export const getByName = async (name) => {
  try {
    const response = await axios.get(`http://localhost:8080/elite-four/detail/${name}`);
    return response.data;
  } catch (error) {
    console.error("Elite-Four 정보를 가져오는 도중 에러 발생:", error);
  }
};