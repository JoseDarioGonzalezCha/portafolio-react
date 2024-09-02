import { useState } from "react";
import {
  Avatar,
  HamburgerIcon,
  LinkNav,
  MenuContainer,
  MenuList,
  StyledSelect,
  ThemeSwitchContainer,
} from "./Menu.styles";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { useLanguage } from "../../contexts/LanguageContext";

const Menu = ({ themeToggler }) => {
  const { texts, changeLanguage, language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <MenuContainer>
      {!isMenuOpen && (
        <>
          <Avatar
            src="https://avatars.githubusercontent.com/u/75937414?s=400&u=32ddd753fd933fa705d4fa309e959b76ed2a4439&v=4"
            alt="foto"
          />
          <ThemeSwitchContainer $isOpen={isMenuOpen}>
            <ThemeSwitch themeToggler={themeToggler} />
          </ThemeSwitchContainer>
        </>
      )}
      <HamburgerIcon onClick={toggleMenu}>
        <DehazeIcon />
      </HamburgerIcon>
      <MenuList $isOpen={isMenuOpen}>
        <li>
          <LinkNav to="/">{texts.menu.home}</LinkNav>
        </li>
        <li>
          <LinkNav to="/about">{texts.menu.about}</LinkNav>
        </li>
        <li>
          <LinkNav to="/projects">{texts.menu.projects}</LinkNav>
        </li>
        <li>
          <LinkNav to="/contact">{texts.menu.contact}</LinkNav>
        </li>
        <li>
          <LinkNav to="/feedback">{texts.menu.feedback}</LinkNav>
        </li>
      </MenuList>
      <StyledSelect onChange={handleLanguageChange} value={language}>
        <option value="es">Español</option>
        <option value="en">English</option>
        <option value="pt">Português</option>
      </StyledSelect>
    </MenuContainer>
  );
};

export default Menu;
