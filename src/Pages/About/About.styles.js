import styled from "styled-components";
import responsive from "../../Styles/responsive";

export const ContainerAbout = styled.main`
  width: 100%;
  padding: 16px;
  margin: 0 auto;

  ${responsive.lg`
    max-width: 800px;
  `}

  ${responsive.xl`
    max-width: 900px;
  `}
`;
