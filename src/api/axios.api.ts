import axios from "axios";
import { getTokenFromLocalStorage } from "../helpers/localStorage.helper";

// створимо перехватчик запитів
// який до кожного запиту додасть token із localStorage
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);


export const instance = axios.create({
  // до запиту буде прикріплюватися сщщлшуі
  withCredentials: false,
  baseURL: "https://cinema-api-pv114.azurewebsites.net/api/"
});