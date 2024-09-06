import { styled } from "@mui/system";
import { Avatar, Card, CardActions } from "@mui/material";

export const StyledCard = styled(Card)`
  max-width: 300px;
  width: 100%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 200px;
`;

export const StyledAvatar = styled(Avatar)`
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.accent};
`;

export const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: flex-start;
`;
