import axios from "axios";

const accessToken = localStorage.getItem("token");
export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    authorization: `Bearer ${accessToken}`,
    
  },
});

