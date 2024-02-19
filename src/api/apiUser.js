import axios from "axios";
import apiClient from "./apiClient";

export const registerUser = async (user) => {
    try {
      const response = await axios.post(
        "https://pi-ati-back-backend.azuremicroservices.io/auth/register",
        user
      );
      return response.data;
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  };

export const getAllUsers = async () => {
    try {
      const response = await apiClient.get("/users");
      return response.data;
    } catch (error) {
      console.error("Error getting users: ", error);
      throw error;
    }
  };
  
  export const loginUser = async (user) => {
    try {
      const response = await apiClient.post("/auth/login", user);
      return response.data;
    } catch (error) {
      console.error("Error login in: ", error);
      throw error;
    }
  };
  
  export const getUser = async (username) => {
    try {
      const response = await apiClient.get(`/users/${username}`);
      return response.data;
    } catch (error) {
      console.error("Error getting user: ", error);
      throw error;
    }
  };

  export const deleteUser = async (id) => {
    try {
      const response = await apiClient.delete(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting user: ", error);
      throw error;
    }
  };