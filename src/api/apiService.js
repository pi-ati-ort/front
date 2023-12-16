import axios from "axios";

export const registerUser = async (user) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/auth/register",
      user
    );
    console.log(response);
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
