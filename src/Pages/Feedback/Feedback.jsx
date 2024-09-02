import { useState } from "react";
import { useMessagesContext } from "../../contexts/MessagesContext";
import {
  Container,
  FeedbackTitle,
  Form,
  FormContainer,
  Textarea,
  TitleContainer,
} from "./Feedback.styles";
import { useLanguage } from "../../contexts/LanguageContext";

const Feedback = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const { texts } = useLanguage();

  const toggleFomr = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <Container>
      <TitleContainer>
        <FeedbackTitle>
          <span>{texts.feedback.title}</span>
          <span>{texts.feedback.description}</span>
        </FeedbackTitle>
        <button onClick={toggleFomr}>
          {isFormOpen ? "Clic para ocultar formulário" : "Clic para comentar"}
        </button>
      </TitleContainer>
      <FormContainer>
        <Form $isOpen={isFormOpen}>
          <Textarea placeholder="Comentar"></Textarea>
          <button>Comentar</button>
        </Form>
      </FormContainer>
      <div>
        <p>This is a feedback page</p>
      </div>
    </Container>
  );
};

export default Feedback;
