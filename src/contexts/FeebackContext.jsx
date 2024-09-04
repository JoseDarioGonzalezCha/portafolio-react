import { createContext, useContext, useState, useEffect } from "react";
import { getMessages, sendFeedback } from "../services/feedback";

const FeedbackContext = createContext();

export const useFeedbackContect = () => {
  return useContext(FeedbackContext);
};

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const loadFeedback = async () => {
    try {
      const feedbackData = await getMessages();
      setFeedbacks(feedbackData);
    } catch {
      console.error("Error fetching feedback");
    }
  };

  useEffect(() => {
    loadFeedback();
  }, []);

  const addFeedback = async (feedbackData) => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);
    try {
      const newFeedback = await sendFeedback(feedbackData);
      setFeedbacks((prevFeedbacks) => [...prevFeedbacks, newFeedback]);
      setSuccess(true);
    } catch (error) {
      setError("Error al enviar feedback. Por favor intenta mas tarde!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const value = {
    feedbacks,
    loadFeedback,
    isSubmitting,
    addFeedback,
    error,
    success,
  };

  return (
    <FeedbackContext.Provider value={value}>
      {children}
    </FeedbackContext.Provider>
  );
};
