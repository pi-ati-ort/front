import { apiNorms } from "./apiClient";

export const evaluateModel = async (dmnName, selectedModel) => {
  console.log(selectedModel);
  try {
    const endpoint = `kie-server/services/rest/server/containers/${dmnName}/dmn`;
    const res = await apiNorms.get(endpoint, selectedModel);
    return res;
  } catch (error) {
    console.error("Error getting all: ", error);
    throw error;
  }
};
