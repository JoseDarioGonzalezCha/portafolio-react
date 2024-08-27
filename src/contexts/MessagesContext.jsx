import { createContext, useContext, useState, useEffect } from "react";
import { sendMessage, getMessages } from "../services/messagesApi";

const MessagesContext = createContext();

export const useMessagesContext = () => {
  return useContext(MessagesContext);
};

export const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const loadMessages = async () => {
    try {
      const messageData = await getMessages();
      setMessages(messageData);
    } catch (error) {
      console.error("Error al cargar los mensajes", error);
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const addMessage = async (messageData) => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const newMessage = await sendMessage(messageData);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setSuccess(true);
    } catch (error) {
      setError("Error al enviar el mensaje. Por favor, intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const value = {
    messages,
    addMessage,
    isSubmitting,
    error,
    success,
  };
  return (
    <MessagesContext.Provider value={value}>
      {children}
    </MessagesContext.Provider>
  );
};
