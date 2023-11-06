import axios from "axios"
import { env } from "../env";

const API_URL = env.REACT_APP_API_URL;

const axiosApi = axios.create({
  baseURL: API_URL,
});

export default axiosApi;
