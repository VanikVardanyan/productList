import axios from "axios";

const api = () => {
  return axios.create({
    baseURL: "https://datainlife.ru/junior_task/",
  });
};

export default api;
