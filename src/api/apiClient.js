import axios from "axios";

const authCredentials = {
  username: "pi-ati-ort",
  password: "Tesis2023",
};

const apiClient = axios.create({
  baseURL: "https://pi-ati-back-backend.azuremicroservices.io/",
  headers: {
    token: `${sessionStorage.getItem("token")}`,
  },
});

const apiNorms = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    Authorization: `Basic ${btoa(
      `${authCredentials.username}:${authCredentials.password}`
    )}`,
  },
});

export default apiClient;
export { apiNorms };
