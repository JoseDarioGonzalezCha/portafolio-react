// src/styles/responsive.js
import { css } from "styled-components";
import { breakpoints } from "./GlobalStyles";

const responsive = {
  xs: (styles) => css`
    @media (max-width: ${breakpoints.sm}) {
      ${styles}
    }
  `,
  sm: (styles) => css`
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
      ${styles}
    }
  `,
  md: (styles) => css`
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
      ${styles}
    }
  `,
  lg: (styles) => css`
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
      ${styles}
    }
  `,
  xl: (styles) => css`
    @media (min-width: ${breakpoints.xl}) {
      ${styles}
    }
  `,
};

export default responsive;
