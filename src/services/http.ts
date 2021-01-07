import axios from "axios";

export const GET = (url: string, headers = {}) => {
  headers["Authorization"] = "";
  return axios(url, {
    headers,
  });
};