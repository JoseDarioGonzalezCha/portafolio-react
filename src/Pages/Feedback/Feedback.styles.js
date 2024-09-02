import styled from "styled-components";
import responsive from "../../Styles/responsive";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;

  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
`;

export const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 1.25rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;

  ${responsive.lg`
  max-width: 85%;
	margin: 1rem
	padding: 2.25rem;
  `}

  ${responsive.xl`
	margin: 3rem
	padding: 3.25rem;
    `}
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FeedbackTitle = styled.h1`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  padding: 1rem;

  span {
    background-color: ${({ theme }) => theme.menuBackground};
    color: ${({ theme }) => theme.accent};
    padding: 0 10px;
    border-radius: 5px;
  }

  ${responsive.lg`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 2rem;
	  margin: 1rem
	  padding: 2.25rem;
  `}

  ${responsive.xl`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 2.5rem;
    margin: 3rem
    padding: 3.25rem;
    `}
`;

export const FormContainer = styled.div`
  margin: 0 auto;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.background};
  resize: none;
  min-height: 150px;
  width: 90vw;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
  }

  ${responsive.lg`
  max-width: 60%;
	margin: 1rem
	padding: 2.25rem;
  `}

  ${responsive.xl`
  max-width: 50%;
	margin: 3rem
	padding: 3.25rem;
    `}
`;
