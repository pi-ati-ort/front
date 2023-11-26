import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});

export function retrieveTest() {
  return apiClient.get("/test-web");
}