import axios from "axios";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "https://bolt-desk.herokuapp.com/v1";

export const backend = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: true,
});
