import { styled } from "@mui/system";
import { Avatar, Card, CardActions } from "@mui/material";

export const StyledCard = styled(Card)`
  max-width: 345px;
  margin: 20px;
`;

export const StyledAvatar = styled(Avatar)`
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.background};
`;

export const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: space-between;
`;
