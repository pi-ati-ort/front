import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8081",
  headers: {
    token: `${sessionStorage.getItem("token")}`,
  },
});

export default apiClient;