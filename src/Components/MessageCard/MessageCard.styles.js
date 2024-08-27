import styled from "styled-components";
import { Card } from "@mui/material";

export const StyledCard = styled(Card)`
  margin: 16px 0;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  .MuiCardHeader-title {
    color: ${({ theme }) => theme.accent};
  }

  .MuiCardHeader-subheader {
    color: ${({ theme }) => theme.text};
  }
`;
