import axios from "axios";
import { BASE_URL } from "~/config/envConfig";

export const api = axios.create({
  baseURL: BASE_URL,
});
