import { useState } from "react";
import { Form } from "./Feedback.styles";

const Feedback = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleFomr = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div>
      <h1>Déjame tu comentário</h1>
      <button onClick={toggleFomr}>Clic para comentar</button>
      <Form $isOpen={isFormOpen}>
        <textarea placeholder="Comentar"></textarea>
        <button>Comentar</button>
      </Form>
      <p>This is a feedback page</p>
    </div>
  );
};

export default Feedback;
