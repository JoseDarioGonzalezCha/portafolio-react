import React, { useEffect, useState } from "react";
import { CardHeader, CardContent, Typography, IconButton } from "@mui/material";
import {
  StyledCard,
  StyledAvatar,
  StyledCardActions,
} from "./FeedbackCard.styles";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const FeedbackCard = ({ id, name, message }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const storedLiked = localStorage.getItem(`liked-${id}`);

    if (storedLiked !== null) {
      setLiked(JSON.parse(storedLiked));
    }
  }, [id]);

  const handleLikeClick = () => {
    const newLikeStatus = !liked;
    setLiked(newLikeStatus);
  };

  return (
    <StyledCard>
      <CardHeader
        avatar={<StyledAvatar>{name.charAt(0).toUpperCase()}</StyledAvatar>}
        title={name}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {message}
        </Typography>
      </CardContent>

      <StyledCardActions>
        <IconButton onClick={handleLikeClick}>
          {liked ? (
            <FavoriteIcon style={{ color: "red" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      </StyledCardActions>
    </StyledCard>
  );
};

export default FeedbackCard;
