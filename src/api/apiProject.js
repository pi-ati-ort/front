import apiClient from "./apiClient";

export const newProject = async (project) => {
  try {
    const response = await apiClient.post("/projects", project, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating project: ", error);
    throw error;
  }
};

export const getProjects = async (username) => {
  try {
    const res = await apiClient.get(`/projects`);
    const projects = res.data.filter((p) => p.username === username);
    return projects;
  } catch (error) {
    console.error("Error getting projects: ", error);
    throw error;
  }
};

export const getProjectByName = async (name) => {
  try {
    const response = await apiClient.get(`/projects/${name}`);
    return response.data;
  } catch (error) {
    console.error("Error getting project: ", error);
    throw error;
  }
};

export const getProjectById = async (id) => {
  try {
    const response = await apiClient.get(`/projects/id/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error getting project: ", error);
    throw error;
  }
};

export const deleteProject = async (id) => {
  try {
    const response = await apiClient.delete(`/projects/id/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting project: ", error);
    throw error;
  }
};
