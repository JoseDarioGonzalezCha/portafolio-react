import { useFormik } from "formik";
import * as Yup from "yup";
import { useMessagesContext } from "../../contexts/MessagesContext";
import { useLanguage } from "../../contexts/LanguageContext";
import {
  Container,
  Form,
  Input,
  Textarea,
  Button,
  ContactTitle,
  ErrorMessage,
} from "./Contact.styles";
import { useEffect, useState } from "react";

const Contact = () => {
  const { texts } = useLanguage();
  const { addMessage, isSubmitting, error, success } = useMessagesContext();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required(texts.contact.errorName)
        .min(2, texts.contact.errorCharacterName),
      email: Yup.string()
        .email(texts.contact.validEmail)
        .required(texts.contact.errorEmail),
      subject: Yup.string()
        .required(texts.contact.errorSubject)
        .min(5, texts.contact.errorCharacterSubject),
      message: Yup.string()
        .required(texts.contact.errorMessage)
        .min(10, texts.contact.errorCharacterMessage),
    }),
    onSubmit: (values, { resetForm }) => {
      addMessage(values);
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
      <ContactTitle>
        <span>{texts.contact.title}</span>
      </ContactTitle>
      <Form onSubmit={formik.handleSubmit}>
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

        <Input
          type="email"
          name="email"
          placeholder={texts.contact.email}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        ) : null}

        <Input
          type="text"
          name="subject"
          placeholder={texts.contact.subject}
          value={formik.values.subject}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.subject && formik.errors.subject ? (
          <ErrorMessage>{formik.errors.subject}</ErrorMessage>
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

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? texts.contact.sending : texts.contact.submit}
        </Button>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <p>{texts.contact.success}</p>}
      </Form>
    </Container>
  );
};

export default Contact;
