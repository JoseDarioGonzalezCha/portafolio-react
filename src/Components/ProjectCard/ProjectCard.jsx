import React from "react";
import { CardHeader, CardMedia, CardContent, Typography } from "@mui/material";
import {
  StyledAvatar,
  StyledCard,
  StyledCardActions,
} from "./ProjectCard.styles";
import { useLanguage } from "../../contexts/LanguageContext";

const ProjectCard = ({
  title,
  subtitle,
  imageUrl,
  description,
  repoUrl,
  deployUrl,
}) => {
  const { texts } = useLanguage();
  return (
    <StyledCard>
      <CardHeader
        avatar={<StyledAvatar>{title.charAt(0).toUpperCase()}</StyledAvatar>}
        title={title}
        subheader={subtitle}
      />
      <CardMedia component="img" height="140" image={imageUrl} alt={title} />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

      <StyledCardActions>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
          <button>{texts.cardProject.buttonRepo}</button>
        </a>
        <a href={deployUrl} target="_blank" rel="noopener noreferrer">
          <button>{texts.cardProject.buttonDeploy}</button>
        </a>
      </StyledCardActions>
    </StyledCard>
  );
};

export default ProjectCard;
