import styled from "styled-components";
import responsive from "../../Styles/responsive";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};

  ${responsive.lg`
  max-width: 60vw;
  margin: 0 auto;
	padding: 2.25rem;
  `}

  ${responsive.xl`
  max-width: 60vw;
  margin: 0 auto;
	padding: 3.25rem;
    `}
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

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
  }

  ${responsive.lg`
  
	margin: 1rem
	padding: 2.25rem;
  `}

  ${responsive.xl`
  
	margin: 3rem
	padding: 3.25rem;
    `}
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

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.error};
  font-size: 0.875em;
  margin-top: -8px;
  margin-bottom: 10px;
`;

export const CardContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${responsive.md`
    padding: 2rem 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
  `}

  ${responsive.lg`
    padding: 3rem 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
  `}

  ${responsive.xl`
    padding: 4rem 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
  `}
`;
