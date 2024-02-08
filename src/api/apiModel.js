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

export const uploadModelToProject = async (projectId, file) => {
  try {
    const response = await apiClient.post(
      `/projects/id/${projectId}/model`,
      file,
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

export const uploadModelToDatabase = async (id, model) => {
  try {
    const response = await apiClient.post(`/projects/id/${id}/model`, model);
    return response.data;
  } catch (error) {
    console.error("Error uploading model to database: ", error);
    throw error;
  }
}

export const updateModelToDatabase = async (id, model) => {
  try {
    const response = await apiClient.put(`/projects/id/${id}/model`, model);
    return response.data;
  } catch (error) {
    console.error("Error updating model to database: ", error);
    throw error;
  }
}

export const deleteModelFromDatabase = async (id, modelId) => {
  try {
    const response = await apiClient.delete(`/projects/id/${id}/model/${modelId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting model from database: ", error);
    throw error;
  }
}