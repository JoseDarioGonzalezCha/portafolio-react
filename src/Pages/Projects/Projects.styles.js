import styled from "styled-components";
import responsive from "../../Styles/responsive";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;

  ${responsive.lg`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1rem 2rem;
  `}

  ${responsive.xl`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1rem 2rem;
  `}
`;
