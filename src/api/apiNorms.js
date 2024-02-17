import axios from "axios";
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

export const dmnContainer = async (dmnName) => {
  try {
    const endpoint = `http://localhost:8081/dmn/container/${dmnName}`;
    const res = await axios.get(endpoint);
    return res;
  } catch (error) {
    console.error("Error getting all: ", error);
    throw error;
  }
};

export const evaluateDmn = async (dmnName, selectedModel) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const endpoint = `http://localhost:8081/dmn/container/${dmnName}/evaluate`;
    const res = await axios.post(endpoint, selectedModel, { headers: headers });
    return res;
  } catch (error) {
    console.error("Error getting the DMN evaluation: ", error);
    throw error;
  }
};
