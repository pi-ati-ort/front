import axios from "axios";

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

export const getUser = async (username) => {
  try {
    const response = await axios.get(`http://localhost:8080/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error getting user: ", error);
    throw error;
  }
};

export const newProject = async (name, schema, username) => {
  try {
    const project = await axios.post(
      "http://localhost:8080/projects",
      {
        name: name,
        schema: schema,
        username: username,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return project;
  } catch (error) {
    console.error("Error creating project: ", error);
    throw error;
  }
};

export const getProjects = async (username) => {
  try {
    const res = await axios.get(`http://localhost:8080/projects`);
    const projects = res.data.filter((p) => p.username === username);
    console.log(projects);
    return projects;
  } catch (error) {
    console.error("Error getting projects: ", error);
    throw error;
  }
};

export const getProjectByName = async (name) => {
  try {
    const response = await axios.get(`http://localhost:8080/projects/${name}`);
    return response.data;
  } catch (error) {
    console.error("Error getting project: ", error);
    throw error;
  }
};

export const getProjectById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8080/projects/id/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error getting project: ", error);
    throw error;
  }
};
