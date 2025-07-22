import axios from "axios";
import { BASE_URL, RAPIDAPI_KEY } from "~/config/envConfig";

export const api = axios.create({
  baseURL: BASE_URL,
});

export const skyScrapperApi = axios.create({
  baseURL: "https://sky-scrapper.p.rapidapi.com/api/v1",
  headers: {
    "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
    "x-rapidapi-key": RAPIDAPI_KEY,
  },
});
