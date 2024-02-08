import apiClient from "./apiClient";

export const getAllModels = async () => {
  try {
    const response = await apiClient.get("/models");
    return response.data;
  } catch (error) {
    console.error("Error getting models: ", error);
    throw error;
  }
};

export const uploadModelToProject = async (projectId, model) => {
  try {
    const response = await apiClient.post(
      `/projects/id/${projectId}/model`,
      model,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error uploading file to project: ", error);
    throw error;
  }
};

export const uploadModelToDatabase = async (projectId, model) => {
  try {
    const response = await apiClient.post(
      `/projects/id/${projectId}/model`,
      model
    );
    return response.data;
  } catch (error) {
    console.error("Error uploading model to database: ", error);
    throw error;
  }
};

export const updateModelToDatabase = async (projectId, model) => {
  try {
    const response = await apiClient.put(
      `/projects/id/${projectId}/model`,
      model
    );
    return response.data;
  } catch (error) {
    console.error("Error updating model to database: ", error);
    throw error;
  }
};

export const deleteModelByProjectId = async (ProjectId) => {
  try {
    const response = await apiClient.delete(`/projects/id/${ProjectId}/model`);
    return response.data;
  } catch (error) {
    console.error("Error deleting model from database: ", error);
    throw error;
  }
};
