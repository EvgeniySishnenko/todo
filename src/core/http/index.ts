import axios, { AxiosInstance } from "axios";

const fetchHeaders = () => ({
  "Content-Type": "application/json",
});

export const fetchApp: AxiosInstance = axios.create({
  headers: fetchHeaders(),
  baseURL: `http://localhost:8000/api/todo`,
});
