import axios from "axios";

const api = axios.create({
  baseURL: "https://json-server-api-09kw.onrender.com",
});

export const sendMessage = async (messageData) => {
  try {
    const response = await api.post("/message", messageData);
    return response.data;
  } catch (error) {
    console.error("Error al enviar el mensaje", error);
    throw error;
  }
};

export const getMessages = async () => {
  try {
    const response = await api.get("/message");
    return response.data;
  } catch (error) {
    console.error("Error al obtener los mensajes", error);
    throw error;
  }
};
