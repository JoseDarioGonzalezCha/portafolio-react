import styled from "styled-components";
import { NavLink } from "react-router-dom";
import responsive from "../../Styles/responsive";

import usFlag from "../../assets/flags/us.png";
import brFlag from "../../assets/flags/br.png";
import veFlag from "../../assets/flags/ve.png";

export const MenuContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.menuBackground};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.text};
  z-index: 1000; /* Asegura que el menú esté por encima del contenido */
`;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;

  ${responsive.xs`
    display: block;
  `}
  ${responsive.md`
    display: block;
  `}
`;

export const MenuList = styled.ul`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  list-style: none;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  ${responsive.lg`
    display: flex;
    flex-direction: row;
    gap: 2rem;
  `}

  ${responsive.xl`
    display: flex; 
    flex-direction: row;
    gap: 3rem;
  `}
`;

export const LinkNav = styled(NavLink)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;

  &.active {
    font-weight: bold;
    border-bottom: 2px solid ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
  }

  &:hover {
    text-decoration: none;
  }
`;

export const Avatar = styled.img`
  width: 50px;
  border-radius: 50%;
  display: ${({ $isOpen }) => ($isOpen ? "none" : "block")};

  ${responsive.md`
    width: 60px;
  `}
  ${responsive.xs`
    display: none;
  `}
`;

export const ThemeSwitchContainer = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "none" : "block")};
`;

export const StyledSelect = styled.select`
  appearance: none;
  background: url(${({ value }) =>
      value === "en" ? usFlag : value === "pt" ? brFlag : veFlag})
    no-repeat right 8px center / 24px;
  padding: 8px 32px 8px 12px;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 4px;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
  }
`;

export const FlagIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  vertical-align: middle;
`;
