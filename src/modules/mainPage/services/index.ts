import { GET } from '../../../services/http';

export const fetchData = () => {
  const API_URL = "https://api.github.com/repos/zeit/next.js";

  return new Promise(resolve => setTimeout(() => resolve(GET(API_URL)), 2000));
}