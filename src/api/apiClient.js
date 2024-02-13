import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://pi-ati-back-backend.azuremicroservices.io/",
  headers: {
    token: `${sessionStorage.getItem("token")}`,
  },
});

const apiNorms = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
export { apiNorms };
