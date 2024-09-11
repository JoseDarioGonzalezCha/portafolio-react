import axios from "axios";

const api = axios.create({
  baseURL: "https://json-server-api-09kw.onrender.com",
});

export const getProjects = async () => {
  try {
    const response = await api.get("/projects");
    return response.data;
  } catch (error) {
    console.error("Error get videos", error);
    throw error;
  }
};
