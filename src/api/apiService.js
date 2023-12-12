import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export function retrieveHelloWorld() {
  return apiClient.get("/say-hello");
}

export const registerUser = async (user) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/auth/register",
      user
    );
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const loginUser = async (user) => {
  try {
    const response = await axios.post("http://localhost:8080/auth/login", user);
    return response.data;
  } catch (error) {
    console.error("Error login in: ", error);
    throw error;
  }
};

export function logoutUser() {
  return apiClient.post("/logout");
}
