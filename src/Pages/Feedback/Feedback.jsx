import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Container,
  FeedbackTitle,
  Form,
  FormContainer,
  Input,
  Textarea,
  TitleContainer,
  ErrorMessage,
  CardContainer,
} from "./Feedback.styles";
import { useLanguage } from "../../contexts/LanguageContext";
import { useFeedbackContect } from "../../contexts/FeebackContext";
import FeedbackCard from "../../Components/FeedbackCard/FeedbackCard";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Feedback = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const { texts } = useLanguage();
  const { feedbacks, addFeedback, isSubmitting, error, success } =
    useFeedbackContect();

  const toggleFomr = () => {
    setIsFormOpen(!isFormOpen);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required(texts.contact.errorName)
        .min(2, texts.contact.errorCharacterName),
      message: Yup.string()
        .required(texts.contact.errorMessage)
        .min(10, texts.contact.errorCharacterMessage),
    }),
    onSubmit: (values) => {
      addFeedback(values);
      setFormSubmitted(true);
    },
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (formSubmitted && success) {
      formik.resetForm();
      setFormSubmitted(false);
    }
  }, [success, formSubmitted, formik]);

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
        <Form onSubmit={formik.handleSubmit} $isOpen={isFormOpen}>
          <Input
            type="text"
            name="name"
            placeholder={texts.contact.name}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <ErrorMessage>{formik.errors.name}</ErrorMessage>
          ) : null}

          <Textarea
            name="message"
            placeholder={texts.contact.message}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.message && formik.errors.message ? (
            <ErrorMessage>{formik.errors.message}</ErrorMessage>
          ) : null}

          <button type="submit" disabled={isSubmitting}>
            Comentar
          </button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && <p>{texts.contact.success}</p>}
        </Form>
      </FormContainer>
      <CardContainer>
        {feedbacks.length > 0 ? (
          feedbacks.map((feedback) => (
            <FeedbackCard
              key={feedback.id}
              name={feedback.name}
              message={feedback.message}
            />
          ))
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: { xs: "50vh", md: "80vh" },
            }}
          >
            <CircularProgress />
          </Box>
        )}
      </CardContainer>
    </Container>
  );
};

export default Feedback;
