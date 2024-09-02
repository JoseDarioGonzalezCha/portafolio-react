// src/pages/Home/Home.styles.js
import styled from "styled-components";
import responsive from "../../Styles/responsive";

export const HomeContainer = styled.main`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  gap: 2rem;
`;

export const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.accent};

  ${responsive.lg`
    margin: 2rem 2rem 2rem 0;
    width: 250px;
  height: 250px;
  `}

  ${responsive.xl`
    margin: 2rem 2rem 2rem 0;
    width: 300px;
    height: 300px;
    `}
`;

export const WelcomeTitle = styled.h1`
  font-size: 1.5rem;
  text-align: center;

  span {
    background-color: ${({ theme }) => theme.menuBackground};
    color: ${({ theme }) => theme.accent};
    padding: 0 10px;
  }

  ${responsive.lg`
    font-size: 2rem;
  `}

  ${responsive.xl`
    font-size: 2.5rem;
    `}
`;

export const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 2rem;
  text-align: justify;
`;

export const Highlight = styled.span`
  background-color: ${({ theme }) => theme.menuBackground};
  color: ${({ theme }) => theme.accent};
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
`;
