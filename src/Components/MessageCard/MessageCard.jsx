import { CardContent, CardHeader, Typography } from "@mui/material";
import { StyledCard } from "./MessageCard.styles";

const MessageCard = ({ name, email, message, subject }) => {
  return (
    <StyledCard>
      <CardHeader title={name} subheader={email} />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {message}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {subject}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default MessageCard;
