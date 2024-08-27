import { Outlet } from "react-router-dom";
import Menu from "../../Components/Menu/Menu";
import Footer from "../../Components/Footer/Footer";
import { MainContainer, Container } from "./BasePage.styles";

const BasePage = ({ themeToggler }) => {
  return (
    <Container>
      <Menu themeToggler={themeToggler} />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </Container>
  );
};

export default BasePage;
