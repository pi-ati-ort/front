import apiClient from "./apiClient";

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
