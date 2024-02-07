import axios from "axios";

import { getItem } from "../utils/storage";

const baseUrl = import.meta.env.VITE_BASE_URL;

axios.defaults.baseURL = baseUrl;

axios.interceptors.request.use((config) => {
  const token = getItem("token");
  const authorization = token ? `Bearer ${token}` : "";
  config.headers.Authorization = authorization;
  return config;
});

export default axios;
