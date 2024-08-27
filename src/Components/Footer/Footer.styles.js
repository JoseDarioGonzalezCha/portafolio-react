import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.menuBackground};
  color: ${({ theme }) => theme.text};
  border-top: 1px solid ${({ theme }) => theme.text};
  position: relative;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 0.875rem;
`;

export const FooterLinks = styled.div`
  margin-top: 0.5rem;
  a {
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
    margin: 0 0.5rem;
    font-size: 0.875rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.accentHover};
    }
  }
`;
