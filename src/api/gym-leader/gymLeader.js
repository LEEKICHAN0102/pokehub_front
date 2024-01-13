import axios from "axios";

export const getAllGymLeaders = async () => {
  try {
    const response = await axios.get("http://localhost:8080/gym-leader");
    return response.data;
  } catch (error) {
    console.error("Gym Leader 정보를 가져오는 도중 에러 발생:", error);
  }
};

export const getByName = async (name) => {
  try {
    const response = await axios.get(`http://localhost:8080/gym-leader/detail/${name}`);
    return response.data;
  } catch (error) {
    console.error("Gym Leader 정보를 가져오는 도중 에러 발생:", error);
  }
};