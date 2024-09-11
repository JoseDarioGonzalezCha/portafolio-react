import axios from "axios";

const api = axios.create({
  baseURL: "https://json-server-api-09kw.onrender.com1",
});

export const sendFeedback = async (feedbackData) => {
  try {
    const response = await api.post("/feedback", feedbackData);
    return response.data;
  } catch (error) {
    console.error("Error al enviar feedback", error);
    throw error;
  }
};

export const getMessages = async () => {
  try {
    const response = await api.get("/feedback");
    return response.data;
  } catch (error) {
    console.error("Error al obtener los feedbacks", error);
    throw error;
  }
};

export const updateLikes = async (id, newLikeCount) => {
  try {
    const response = await api.patch(`/feedback/${id}`, {
      likeCount: newLikeCount,
    });
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el número de likes", error);
    throw error;
  }
};
