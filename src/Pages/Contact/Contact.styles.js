import styled from "styled-components";
import responsive from "../../Styles/responsive";

export const Container = styled.div`
  max-width: 37.5rem;
  margin: 0 auto;
  padding: 1.25rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  ${responsive.lg`
  max-width: 30rem;
	margin: 1rem
	padding: 2.25rem;
  `}

  ${responsive.xl`
	margin: 3rem
	padding: 3.25rem;
    `}
`;

export const ContactTitle = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  padding: 1rem;

  span {
    background-color: ${({ theme }) => theme.menuBackground};
    color: ${({ theme }) => theme.accent};
    padding: 0 10px;
    border-radius: 5px;
  }

  ${responsive.lg`
    font-size: 2rem;
	margin: 1rem
	padding: 2.25rem;
  `}

  ${responsive.xl`
    font-size: 2.5rem;
	margin: 3rem
	padding: 3.25rem;
    `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.background};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
  }
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

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.accent};
  background-color: ${({ theme }) => theme.menuBackground};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.disabled};
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.error};
  font-size: 0.875em;
  margin-top: -8px;
  margin-bottom: 10px;
`;
