import styled from "styled-components";

export const Form = styled.form`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
`;
