import styled from "styled-components";

export const MainContainer = styled.main`
  flex: 1;
  background-color: ${({ theme }) =>
    theme.background}; /* Ajusta según tu tema */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  width: 100%;
`;
