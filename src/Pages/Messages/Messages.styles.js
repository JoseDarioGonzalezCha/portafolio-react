import styled from "styled-components";

export const ContainerMessages = styled.div`
  padding: 16px;
  max-width: 800px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export const NoMessagesText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.text};
  font-size: 1.2em;
  margin-top: 20px;
`;
