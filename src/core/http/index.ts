import axios, { AxiosInstance } from "axios";

const fetchHeaders = () => ({
  "X-Requested-With": "XMLHttpRequest",
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
});

export const fetchApp: AxiosInstance = axios.create({
  headers: fetchHeaders(),
  baseURL: `https://${process.env.REACT_APP_ENV}/api/todo`,
});
