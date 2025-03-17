import axios from "axios";
import bannerService from "./bannerService";
import categoryService from "./categoryService";

export const fetcher = axios.create({
  baseURL: "http://localhost:9999",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

const api = {
  banner: bannerService,
  category: categoryService,
};

export default api;
