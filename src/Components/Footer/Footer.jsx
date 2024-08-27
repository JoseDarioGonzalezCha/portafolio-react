import { FooterContainer, FooterLinks, FooterText } from "./Footer.styles";
import { useLanguage } from "../../contexts/LanguageContext";

const Footer = () => {
  const { texts } = useLanguage();
  return (
    <FooterContainer>
      <FooterText>{texts.footer.copyright}</FooterText>
      <FooterLinks>
        <a
          href="https://github.com/JoseDarioGonzalezCha"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/desenvolvedor-jose/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="jdariogonzalez.2020@gmail.com">Email</a>
        <a
          href="https://gitconnected.com/josedariogonzalezcha/resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          Curriculum
        </a>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
